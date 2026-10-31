/** @type {import('next').NextConfig} */

// ─── basePath: só no GitHub Pages ───────────────────────────────────────
// O GitHub Pages publica o site em um subcaminho (…github.io/DigitalS-D-WebSite/),
// por isso o workflow .github/workflows/deploy.yml define DEPLOY_TARGET=github-pages
// durante o build. Em qualquer outro lugar (Netlify com domínio próprio,
// `npm run dev`, preview local) o site fica na raiz do domínio e o basePath é vazio.
// Se o nome do repositório mudar, altere apenas a linha abaixo.
const isGithubPages = process.env.DEPLOY_TARGET === "github-pages";
const basePath = isGithubPages ? "/DigitalS-D-WebSite" : "";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  // Expõe o basePath para o código (usado em lib/constants.ts → BASE_PATH).
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
