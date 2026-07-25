/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─── EXPORTAÇÃO ESTÁTICA ────────────────────────────────────────────
  // Gera um site 100% estático (HTML/CSS/JS puros) na pasta `out/` durante
  // o build, em vez de depender de um servidor Next.js rodando em produção.
  // Elimina a superfície de ataque das vulnerabilidades do "protocolo"
  // do Next.js (Server Components, Server Actions, Middleware, etc.),
  // já que nenhum desses recursos é usado neste projeto — é só HTML puro
  // servido por qualquer host de arquivos estáticos.
  output: "export",

  // Necessário com output: "export": o otimizador de imagens do Next.js
  // depende de um servidor ativo para redimensionar imagens sob demanda,
  // o que não existe mais nesse modo. Como nenhum <Image> do next/image
  // está em uso ativo neste projeto (só comentários de exemplo), isso
  // não muda nada visualmente.
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
