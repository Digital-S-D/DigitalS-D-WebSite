// Run after `npm run build`: validate the artifact the host will serve.
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";
import { test } from "node:test";

const origin = "https://digitalsd.com.br";
const root = process.cwd();
const out = join(root, "out");
const decode = (value) => value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const read = (path) => readFileSync(path, "utf8");

function pagePaths(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return pagePaths(path);
    if (entry.name !== "page.tsx") return [];
    const route = relative(join(root, "app"), dirname(path)).split(sep).filter(Boolean).join("/");
    return [route ? `/${route}/` : "/"];
  });
}

function attributes(tag) {
  return Object.fromEntries(Array.from(tag.matchAll(/([\w:-]+)="([^"]*)"/g), ([, key, value]) => [key, decode(value)]));
}

const pages = pagePaths(join(root, "app")).map((path) => ({
  path,
  url: `${origin}${path}`,
  html: read(join(out, path.slice(1), "index.html")),
}));
const metas = (html) => Array.from(html.matchAll(/<meta\b[^>]*>/g), ([tag]) => attributes(tag));
const meta = (html, name) => metas(html).filter((item) => item.name === name || item.property === name).map((item) => item.content);

test("cada página exportada aponta para sua própria URL pública, sem herdar a Home", () => {
  for (const page of pages) {
    const canonicals = Array.from(page.html.matchAll(/<link\b[^>]*>/g), ([tag]) => attributes(tag)).filter((item) => item.rel === "canonical");
    assert.deepEqual(canonicals.map((item) => item.href), [page.url], page.path);
    assert.deepEqual(meta(page.html, "og:url"), [page.url], page.path);
    assert.equal((page.html.match(/<h1\b/g) || []).length, 1, page.path);
    for (const name of ["robots", "googlebot"]) {
      assert.ok(!meta(page.html, name).some((value) => /\b(noindex|none|nosnippet)\b/i.test(value)), `${page.path}: ${name}`);
    }
  }
});

test("títulos, descrições e prévias correspondem à página e usam imagens existentes", () => {
  const titles = new Set();
  const descriptions = new Set();
  for (const page of pages) {
    const title = decode(page.html.match(/<title>(.*?)<\/title>/s)?.[1] || "");
    const [description] = meta(page.html, "description");
    assert.ok(title.includes("Digital S&D"), page.path);
    assert.ok(description?.length > 30, page.path);
    assert.ok(!titles.has(title), `Título repetido: ${page.path}`);
    assert.ok(!descriptions.has(description), `Descrição repetida: ${page.path}`);
    titles.add(title);
    descriptions.add(description);
    for (const name of ["og:title", "twitter:title"]) assert.deepEqual(meta(page.html, name), [title], `${page.path}: ${name}`);
    for (const name of ["og:description", "twitter:description"]) assert.deepEqual(meta(page.html, name), [description], `${page.path}: ${name}`);
    for (const name of ["og:image", "twitter:image"]) {
      const images = meta(page.html, name);
      assert.equal(images.length, 1, `${page.path}: ${name}`);
      const url = new URL(images[0]);
      assert.equal(url.origin, origin);
      assert.ok(existsSync(join(out, url.pathname.slice(1))), images[0]);
    }
  }
});

test("sitemap inclui todas as páginas públicas, sem 404, parâmetros ou datas artificiais", () => {
  const xml = read(join(out, "sitemap.xml"));
  const urls = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g), ([, value]) => decode(value));
  assert.deepEqual(urls.sort(), pages.map((page) => page.url).sort());
  assert.equal(new Set(urls).size, urls.length);
  assert.doesNotMatch(xml, /<lastmod>|<priority>|<changefreq>|localhost|127\.0\.0\.1/);
});

test("robots permite rastrear páginas e recursos e anuncia o sitemap canônico", () => {
  const robots = read(join(out, "robots.txt"));
  assert.match(robots, /User-Agent: \*/i);
  assert.match(robots, /^Allow: \/\s*$/m);
  assert.doesNotMatch(robots, /^Disallow: .+/m);
  assert.ok(robots.includes(`Sitemap: ${origin}/sitemap.xml`));
});

test("Organization é JSON válido e corresponde à empresa e aos fundadores visíveis", () => {
  const home = pages.find((page) => page.path === "/").html;
  const scripts = Array.from(home.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs), ([, value]) => JSON.parse(value));
  const organizations = scripts.filter((item) => item["@type"] === "Organization");
  assert.equal(organizations.length, 1);
  const organization = organizations[0];
  assert.equal(organization["@context"], "https://schema.org");
  assert.equal(organization.name, "Digital S&D");
  assert.equal(organization.url, `${origin}/`);
  assert.equal(organization.email, "digitalsd.contato@gmail.com");
  assert.equal(organization.telephone, "+5531992998761");
  const visible = decode(home.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]*>/g, " "));
  for (const person of organization.founder) assert.ok(visible.includes(person.name), person.name);
  assert.ok(visible.includes(organization.email));
  assert.equal(organization.contactPoint.url, `${origin}/atendimento/`);
  const logo = new URL(organization.logo.url);
  assert.equal(logo.origin, origin);
  assert.ok(existsSync(join(out, logo.pathname.slice(1))));
  assert.ok(!("aggregateRating" in organization));
  assert.ok(!("openingHours" in organization));
});

test("a página de erro permanece fora da indexação", () => {
  assert.ok(meta(read(join(out, "404.html")), "robots").some((value) => /\bnoindex\b/.test(value)));
});

test("os segmentos de navegação existem nos caminhos planos pedidos pelo navegador", () => {
  for (const page of pages) {
    const segments = page.path.split("/").filter(Boolean);
    const filename = `__next.${[...segments, "__PAGE__"].join(".")}.txt`;
    assert.ok(existsSync(join(out, ...segments, filename)), `${page.path}: ${filename}`);
  }
});
