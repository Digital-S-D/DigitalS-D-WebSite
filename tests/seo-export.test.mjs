// Run after `npm run build`: validate the artifact the host will serve.
import assert from "node:assert/strict";
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, relative, dirname, sep } from "node:path";
import { test } from "node:test";
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { createSegmentRequestKeyPart, convertSegmentPathToStaticExportFilename } = require("next/dist/shared/lib/segment-cache/segment-value-encoding.js");

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
    const route = relative(join(root, "app"), dirname(path)).split(sep).filter((segment) => segment && !segment.startsWith("(")).join("/");
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
  for (const agent of ["*", "Googlebot", "Bingbot", "OAI-SearchBot"]) {
    const group = robots.split(/\n\s*\n/).find((block) => block.split("\n").includes(`User-Agent: ${agent}`));
    assert.ok(group, agent);
    assert.match(group, /^Allow: \/\s*$/m);
    assert.doesNotMatch(group, /^Disallow: .+/m, agent);
  }
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
    // Use the router's encoding: route groups are internal segments even
    // though they are omitted from public URLs.
    const internalSegments = page.path.startsWith("/en/") ? segments : ["(pt)", ...segments];
    const key = "/" + [...internalSegments, "__PAGE__"].map(createSegmentRequestKeyPart).join("/");
    const filename = convertSegmentPathToStaticExportFilename(key);
    assert.ok(existsSync(join(out, ...segments, filename)), `${page.path}: ${filename}`);
  }
});

test("os três casos têm idiomas pareados, contato e evidências sem expor o código privado", () => {
  for (const slug of ["alvorada", "advocacia-digital", "odontohub"]) {
    const pt = pages.find(page => page.path === `/portfolio/${slug}/`);
    const en = pages.find(page => page.path === `/en/portfolio/${slug}/`);
    assert.ok(pt && en, slug);
    for (const page of [pt, en]) {
      const alternates = Array.from(page.html.matchAll(/<link\b[^>]*>/g), ([tag]) => attributes(tag)).filter(link => link.rel === "alternate");
      assert.ok(alternates.some(link => link.hrefLang === "en" && link.href === en.url), page.path);
      assert.ok(alternates.some(link => link.hrefLang === "pt-BR" && link.href === pt.url), page.path);
      const visible = decode(page.html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "").replace(/<[^>]*>/g, " "));
      assert.match(visible, /Álvaro Marinho/);
      assert.match(visible, /Arthur Leite/);
      assert.doesNotMatch(page.html, /https:\/\/github\.com\/Digital-S-D\/OdontoHub/);
    }
    assert.ok(en.html.includes('lang="en"'));
    assert.ok(en.html.includes("mailto:digitalsd.contato@gmail.com"));
    assert.match(decode(en.html), /Implementation decisions|Evidence/);
    assert.equal(meta(en.html, "og:locale")[0], "en_US");
  }
});

test("as páginas têm tradução completa e a mesma estrutura visual nos dois idiomas", () => {
  const portuguese = pages.filter((page) => !page.path.startsWith("/en/"));
  assert.equal(portuguese.length, 11);
  assert.equal(pages.length, 22);
  for (const pt of portuguese) {
    const en = pages.find((page) => page.path === `/en${pt.path}`);
    assert.ok(en, pt.path);
    assert.match(pt.html, /<html[^>]*lang="pt-BR"/);
    assert.match(en.html, /<html[^>]*lang="en"/);
    const structure = (html) => {
      const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0];
      assert.ok(main);
      return Array.from(main.matchAll(/<([a-z][\w-]*)\b[^>]*>/g), ([tag, name]) => ({ name, className: attributes(tag).class || "" }));
    };
    assert.deepEqual(structure(en.html), structure(pt.html), `Estrutura/classes divergentes: ${pt.path}`);
    const images = (html) => Array.from(html.matchAll(/<img\b[^>]*>/g), ([tag]) => attributes(tag).src);
    assert.deepEqual(images(en.html), images(pt.html), `Imagens divergentes: ${pt.path}`);
    const alternates = Array.from(en.html.matchAll(/<link\b[^>]*>/g), ([tag]) => attributes(tag)).filter((link) => link.rel === "alternate");
    assert.ok(alternates.some((link) => link.hrefLang === "pt-BR" && link.href === pt.url));
    assert.ok(alternates.some((link) => link.hrefLang === "en" && link.href === en.url));
    assert.ok(alternates.some((link) => link.hrefLang === "x-default" && link.href === pt.url));
    assert.match(en.html, /aria-label="Language"/);
    assert.match(en.html, /Skip to content/);
  }
});

test("o HTML inglês não deixa textos portugueses com tradução cadastrada", () => {
  const translations = JSON.parse(read(join(root, "lib/translations/en.json")));
  for (const page of pages.filter((item) => item.path.startsWith("/en/"))) {
    const html = page.html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    const texts = Array.from(html.matchAll(/>([^<>]+)</g), ([, value]) => decode(value).replace(/\s+/g, " ").trim());
    for (const value of texts) {
      assert.ok(!translations[value] || translations[value] === value, `${page.path}: texto sem tradução: ${value}`);
    }
  }
});

test("a base factual permanece coerente nos dois idiomas", () => {
  for (const page of pages) {
    const text = decode(page.html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, ""));
    assert.doesNotMatch(text, /Belo Horizonte|Remote service across Brazil|Atendimento remoto nacional|same technical standard as large agencies|no mesmo padrão técnico das grandes agências/);
    assert.match(text, page.path.startsWith("/en/") ? /Online-only service/ : /Atendimento exclusivamente online/);
  }
  const robots = read(join(out, "robots.txt"));
  assert.match(robots, /OAI-SearchBot/);
  assert.match(robots, /User-Agent: GPTBot\s+Disallow: \//);
  assert.match(robots, /User-Agent: Google-Extended\s+Disallow: \//);
  for (const path of ["/privacidade/", "/en/privacidade/"]) {
    const html = pages.find(page => page.path === path).html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/g, "");
    assert.match(html, /Cloudflare/);
    assert.doesNotMatch(html, /Netlify/);
  }
});

test("serviços têm trilha, schema, exemplos e contato no idioma correto; links internos resolvem", () => {
  for (const prefix of ["", "/en"]) {
    for (const slug of ["criacao-de-sites", "landing-pages"]) {
      const page = pages.find(p => p.path === `${prefix}/${slug}/`);
      const graphs = [...page.html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].flatMap(([, raw]) => JSON.parse(raw)["@graph"] || []);
      const service = graphs.find(node => node["@type"] === "Service");
      const trail = graphs.find(node => node["@type"] === "BreadcrumbList");
      assert.equal(service.url, page.url);
      assert.equal(trail.itemListElement[1].item, page.url);
      assert.match(page.html, prefix ? /demonstration project/ : /projeto demonstrativo/);
      assert.ok(decode(page.html).includes(`${prefix}/?servico=`));
      assert.ok(decode(page.html).includes(`${prefix}/atendimento/`));
      assert.ok(decode(page.html).includes(`${prefix}/perguntas-frequentes/`));
    }
  }
  for (const page of pages) {
    for (const [, raw] of page.html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
      const url = new URL(decode(raw), page.url);
      if (url.origin !== origin || /\.[a-z0-9]+$/i.test(url.pathname)) continue;
      const path = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
      const target = pages.find(p => p.path === path);
      assert.ok(target, `${page.path}: ${raw}`);
      if (url.hash) assert.ok(target.html.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`), raw);
    }
  }
});

test("integração preserva redesign, controles de tema e acesso às páginas comerciais", () => {
  for (const prefix of ["", "/en"]) {
    const home = pages.find(p => p.path === `${prefix}/`);
    assert.match(home.html, /hero-layout/);
    assert.match(home.html, /sd-theme/);
    assert.match(home.html, /role="switch"/);
    assert.match(home.html, /service-details/);
    assert.ok(home.html.includes(`${prefix}/criacao-de-sites/`));
    assert.ok(home.html.includes(`${prefix}/landing-pages/`));
  }
});

test("o formulário evita GET nativo e tem alternativa sem JavaScript nos dois idiomas", () => {
  for (const path of ["/", "/en/"]) {
    const html = pages.find((page) => page.path === path).html;
    const forms = Array.from(html.matchAll(/<form\b[^>]*>/g), ([tag]) => attributes(tag));
    assert.equal(forms.length, 1);
    assert.equal(forms[0].method, "dialog", path);
    assert.match(html, /<noscript>/);
    assert.match(html, /mailto:digitalsd.contato@gmail.com/);
  }
});
