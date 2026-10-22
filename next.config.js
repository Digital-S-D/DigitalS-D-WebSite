/** @type {import('next').NextConfig} */

// ─── basePath do GitHub Pages ───────────────────────────────────────────
// O site é publicado em https://<usuario>.github.io/DigitalS-D-WebSite/,
// então o basePath só é aplicado no BUILD DE PRODUÇÃO (npm run build, que é
// o que o GitHub Actions roda). No `npm run dev`, ele fica vazio e o site
// abre normalmente em http://localhost:3000.
// Se o nome do repositório mudar, altere apenas a linha abaixo.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/DigitalS-D-WebSite" : "";

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
