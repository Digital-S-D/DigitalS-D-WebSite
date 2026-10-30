import { ExternalLink, ArrowRight, FolderOpen } from "lucide-react";

// ─── PROJETOS DO PORTFÓLIO ────────────────────────────────────────────
// SUBSTITUA: Adicione seus projetos reais aqui.
// Campos obrigatórios: title, category, description, tags
// Campos opcionais: href (link para o projeto ao vivo)
// Para imagens: adicione src apontando para /public/images/portfolio/
// Tamanho recomendado das imagens: 800x500px (proporção 16:10)

const projects = [
  {
    title:       "Clínica Saúde & Vida",
    category:    "Site Institucional",
    description: "Site completo para clínica médica com agendamento online, painel administrativo e integração com sistema de prontuários.",
    tags:        ["Next.js", "Tailwind", "Node.js", "MySQL"],
    // SUBSTITUA: Coloque a URL real do projeto
    href:        "#portfolio",
    // SUBSTITUA: src="/images/portfolio/clinica-saude.jpg"
    imageSrc:    null,
    featured:    true, // Projeto em destaque (ocupa mais espaço no grid)
  },
  {
    title:       "Loja Moda Express",
    category:    "E-commerce",
    description: "E-commerce de roupas femininas com mais de 500 produtos, checkout via Pix e cartão.",
    tags:        ["Shopify", "SEO", "Performance"],
    href:        "#portfolio",
    imageSrc:    null,
    featured:    false,
  },
  {
    title:       "Construtora Horizonte",
    category:    "Landing Page",
    description: "Landing page de lançamento imobiliário que gerou +300 leads qualificados em 30 dias.",
    tags:        ["Next.js", "Google Ads", "CRM"],
    href:        "#portfolio",
    imageSrc:    null,
    featured:    false,
  },
  {
    title:       "Advocacia Digital",
    category:    "Site Institucional",
    description: "Site moderno para escritório de advocacia com área de notícias, blog jurídico e captação de clientes.",
    tags:        ["Astro", "Prismic CMS", "TypeScript"],
    href:        "#portfolio",
    imageSrc:    null,
    featured:    false,
  },
  {
    title:       "Academia FitPlus",
    category:    "Sistema Web",
    description: "Sistema de gestão de academia com controle de matrículas, treinos e financeiro.",
    tags:        ["React", "Node.js", "PostgreSQL"],
    href:        "#portfolio",
    imageSrc:    null,
    featured:    false,
  },
];

// Componente de card de projeto
function ProjectCard({ project, featured = false }: {
  project: typeof projects[0];
  featured?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-white/5
                  bg-brand-black transition-all duration-300
                  hover:border-brand-blue/30 hover:shadow-2xl hover:shadow-brand-blue/10
                  hover:-translate-y-1
                  ${featured ? "md:col-span-2 md:row-span-1" : ""}`}
    >
      {/* ─── IMAGEM DO PROJETO ─────────────────────────────────────────
          SUBSTITUA: Quando tiver imagem real, adicione:
          <Image src={project.imageSrc} alt={project.title} fill className="object-cover" />
          e remova o placeholder abaixo
      ──────────────────────────────────────────────────────────── */}
      <div className={`relative overflow-hidden bg-gradient-to-br from-brand-navy to-brand-black
                       ${featured ? "h-56 md:h-64" : "h-44 md:h-52"}`}>
        {project.imageSrc ? (
          // Quando tiver imagem: descomente e ajuste
          // <Image src={project.imageSrc} alt={project.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
          <div />
        ) : (
          // Placeholder de imagem — remova quando adicionar imagens reais
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-brand-blue/10 border border-brand-blue/20
                            flex items-center justify-center mb-3">
              <FolderOpen size={24} className="text-brand-blue/50" />
            </div>
            <p className="font-outfit text-gray-700 text-xs text-center px-4">
              Adicione: /images/portfolio/<br />
              {/* SUBSTITUA: Nome do arquivo de imagem */}
              nome-do-projeto.jpg
            </p>
          </div>
        )}

        {/* Overlay gradiente no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent
                        opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="badge text-xs">
            {/* SUBSTITUA: Categoria do projeto */}
            {project.category}
          </span>
        </div>

        {/* Link externo */}
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/10 backdrop-blur-sm
                     border border-white/20 flex items-center justify-center
                     opacity-0 group-hover:opacity-100 transition-all duration-200
                     hover:bg-brand-blue hover:border-brand-blue text-white"
        >
          <ExternalLink size={14} />
        </a>
      </div>

      {/* ─── CONTEÚDO DO CARD ────────────────────────────────────────── */}
      <div className="p-5">
        {/* SUBSTITUA: Título do projeto */}
        <h3 className="font-sora font-semibold text-white text-base mb-1.5 group-hover:text-brand-blue
                       transition-colors duration-200">
          {project.title}
        </h3>

        {/* SUBSTITUA: Descrição do projeto */}
        <p className="font-outfit text-gray-400 text-sm leading-relaxed mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Tags de tecnologia */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-xs font-outfit text-gray-500 bg-white/5 rounded-md border border-white/5"
            >
              {/* SUBSTITUA: Tag de tecnologia */}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-28 bg-brand-navy">
      <div className="container-custom">

        {/* ─── CABEÇALHO ────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl">
            <span className="badge mb-4">
              <FolderOpen size={12} />
              Nosso trabalho
            </span>
            {/* SUBSTITUA: Título da seção */}
            <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-3">
              Projetos que geram{" "}
              <span className="text-gradient">resultados reais</span>
            </h2>
            {/* SUBSTITUA: Subtítulo */}
            <p className="font-outfit text-gray-400 text-base">
              Cada projeto é desenvolvido com foco em performance, conversão e
              crescimento do negócio do cliente.
            </p>
          </div>

          {/* Link para ver todos os projetos (desktop) */}
          {/* SUBSTITUA: href para página de portfólio completo (se tiver) */}
          <a
            href="#contato"
            className="hidden md:inline-flex items-center gap-2 text-sm font-outfit font-medium
                       text-gray-400 hover:text-white transition-colors duration-200 whitespace-nowrap group"
          >
            Ver todos os projetos
            <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
        </div>

        {/* ─── GRID DE PROJETOS ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} featured={project.featured} />
          ))}
        </div>

        {/* Link mobile para ver todos */}
        <div className="mt-8 text-center md:hidden">
          <a
            href="#contato"
            className="btn-outline text-sm"
          >
            Ver todos os projetos
            <ArrowRight size={16} />
          </a>
        </div>

        {/* ─── CTA PARA CLIENTES POTENCIAIS ───────────────────────────── */}
        <div className="mt-16 relative overflow-hidden rounded-2xl p-8 md:p-10
                        border border-brand-blue/20 bg-brand-blue/5 text-center">
          {/* Glow de fundo */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent" />
          <div className="relative z-10">
            <h3 className="font-sora font-bold text-2xl md:text-3xl text-white mb-3">
              {/* SUBSTITUA: Texto de incentivo */}
              Seu projeto pode ser o próximo case de sucesso
            </h3>
            <p className="font-outfit text-gray-400 text-base mb-6 max-w-md mx-auto">
              {/* SUBSTITUA: Descrição do próximo passo */}
              Vamos conversar sobre como podemos transformar sua presença digital e gerar resultados reais para o seu negócio.
            </p>
            {/* SUBSTITUA: href para WhatsApp ou formulário */}
            <a href="#contato" className="btn-primary">
              Iniciar meu projeto
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
