// ═══════════════════════════════════════════════════════════════════════
// lib/constants.ts — CENTRAL DE CONTEÚDO
// ═══════════════════════════════════════════════════════════════════════
// Todos os textos, links e dados do site ficam AQUI.
// Para editar o conteúdo do site, você só precisa mexer neste arquivo.
// ═══════════════════════════════════════════════════════════════════════

// ─── basePath do GitHub Pages ────────────────────────────────────────────
// O valor vem de next.config.js (NEXT_PUBLIC_BASE_PATH), que é a única fonte
// de verdade: "/DigitalS-D-WebSite" no build de produção e "" no `npm run dev`.
// Com `output: "export"` a imagem roda em modo `unoptimized`, e nesse modo o
// Next.js NÃO prefixa o `src` automaticamente (limitação conhecida do
// framework). Por isso, caminhos de imagem usados fora de um <Link> precisam
// ser prefixados manualmente com esta constante.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── DADOS DA EMPRESA ─────────────────────────────────────────────────
// SUBSTITUA: Preencha com os dados reais da sua agência
export const COMPANY = {
  name:        "Digital S&D",
  tagline:     "Desenvolvemos sites que vendem.",
  description: "Parceiros digitais de PMEs que querem crescer online com resultados reais.",
  email:       "digitalsd.contato@gmail.com",
  phone:       "+55 (31) 9 9299-8761",             // SUBSTITUA
  whatsapp:    "5531992998761",                     // SUBSTITUA (só números)
  city:        "Belo Horizonte, MG — Brasil",
  year:        new Date().getFullYear(),
};

// ─── LINKS DE AÇÃO (CTAs) ─────────────────────────────────────────────
// SUBSTITUA: Cole aqui a mensagem que vai pré-preencher o WhatsApp
export const LINKS = {
  whatsappOrcamento: `https://wa.me/${COMPANY.whatsapp}?text=Olá!+Quero+um+orçamento+para+meu+site`,
  whatsappDiagnostico: `https://wa.me/${COMPANY.whatsapp}?text=Olá!+Quero+um+diagnóstico+gratuito+do+meu+site`,
  instagram: "https://instagram.com/digitalsed",  // SUBSTITUA
  linkedin:  "https://linkedin.com/company/digitalsed", // SUBSTITUA
  youtube:   "https://youtube.com/@digitalsed",   // SUBSTITUA
  about:     "/sobre", // rota da página "Sobre Nós"
};

// ─── MENU DE NAVEGAÇÃO ────────────────────────────────────────────────
// Os links de seção usam "/#âncora" (em vez de só "#âncora") para funcionarem
// corretamente também a partir de outras páginas, como /sobre.
// Quando o usuário já está na Home, o comportamento é idêntico ao anterior
// (o navegador não recarrega, apenas rola até a âncora).
export const NAV_LINKS = [
  { label: "Início",    href: "/#hero" },
  { label: "Sobre",     href: "/sobre" },
  { label: "Serviços",  href: "/#servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Contato",   href: "/#contato" },
];

// ─── SERVIÇOS ─────────────────────────────────────────────────────────
// SUBSTITUA: Edite, adicione ou remova serviços conforme sua oferta
export const SERVICES = [
  {
    emoji:       "🌐",
    title:       "Sites Institucionais",
    description: "Presença digital profissional que transmite credibilidade e converte visitantes em clientes. Design exclusivo, copywriting e SEO inclusos.",
    features:    ["Design exclusivo", "Até 10 páginas", "Formulários integrados", "Google Analytics"],
    highlight:   false,
  },
  {
    emoji:       "⚡",
    title:       "Landing Pages",
    description: "Página focada em uma única ação: gerar leads ou vender. Ideal para campanhas de tráfego pago, lançamentos e promoções.",
    features:    ["Alta conversão", "A/B testing", "Pixels de rastreamento", "Integração com CRM"],
    highlight:   true, // destaque = borda azul + badge "Mais popular"
  },
  {
    emoji:       "🛒",
    title:       "E-commerce",
    description: "Loja virtual completa, segura e rápida. Venda 24h com checkout otimizado e integração com meios de pagamento.",
    features:    ["Checkout otimizado", "Pix e cartão", "Gestão de estoque", "Painel de vendas"],
    highlight:   false,
  },
  {
    emoji:       "🔍",
    title:       "SEO & Performance",
    description: "Auditoria técnica, otimização on-page e estratégia de conteúdo para ranquear no Google.",
    features:    ["Auditoria técnica", "On-page SEO", "Core Web Vitals", "Relatório mensal"],
    highlight:   false,
  },
  {
    emoji:       "📱",
    title:       "Aplicativos Web (PWA)",
    description: "Apps web progressivos que funcionam no navegador como apps nativos. Sem passar pela App Store.",
    features:    ["Funciona offline", "Instalável no celular", "Push notifications", "Cross-platform"],
    highlight:   false,
  },
  {
    emoji:       "📊",
    title:       "Manutenção & Suporte",
    description: "Plano mensal com manutenção preventiva, atualizações de segurança, backups e suporte prioritário.",
    features:    ["Backup diário", "Atualizações de segurança", "Suporte prioritário", "Relatório mensal"],
    highlight:   false,
  },
];

// ─── PORTFÓLIO ────────────────────────────────────────────────────────
// SUBSTITUA: Troque pelos seus projetos reais.
// Para imagem, adicione o arquivo em /public/images/portfolio/
// e preencha o campo imageSrc com o nome do arquivo.
export const PORTFOLIO_PROJECTS = [
  {
    title:       "Clínica Saúde & Vida",
    category:    "Site Institucional",
    description: "Site completo com agendamento online, painel administrativo e integração com sistema de prontuários.",
    tags:        ["Next.js", "Tailwind", "Node.js", "MySQL"],
    href:        "#portfolio",        // SUBSTITUA: URL real do projeto
    imageSrc:    null as string|null, // SUBSTITUA: "clinica-saude.jpg"
  },
  {
    title:       "Loja Moda Express",
    category:    "E-commerce",
    description: "E-commerce de roupas femininas com +500 produtos, checkout via Pix e cartão.",
    tags:        ["Shopify", "SEO", "Performance"],
    href:        "#portfolio",
    imageSrc:    null as string|null,
  },
  {
    title:       "Construtora Horizonte",
    category:    "Landing Page",
    description: "Landing page de lançamento imobiliário que gerou +300 leads qualificados em 30 dias.",
    tags:        ["Next.js", "Google Ads", "CRM"],
    href:        "#portfolio",
    imageSrc:    null as string|null,
  },
  {
    title:       "Advocacia Digital",
    category:    "Site Institucional",
    description: "Site para escritório de advocacia com blog jurídico e captação de clientes.",
    tags:        ["Astro", "Prismic CMS", "TypeScript"],
    href:        "#portfolio",
    imageSrc:    null as string|null,
  },
  {
    title:       "Academia FitPlus",
    category:    "Sistema Web",
    description: "Sistema de gestão de academia com controle de matrículas, treinos e financeiro.",
    tags:        ["React", "Node.js", "PostgreSQL"],
    href:        "#portfolio",
    imageSrc:    null as string|null,
  },
];

// ─── FORMULÁRIO DE CONTATO ────────────────────────────────────────────
// SUBSTITUA: Faixas de orçamento conforme sua tabela de preços
export const BUDGET_OPTIONS = [
  "Selecione seu orçamento...",
  "Até R$ 1.500",
  "R$ 1.500 – R$ 3.000",
  "R$ 3.000 – R$ 6.000",
  "R$ 6.000 – R$ 10.000",
  "Acima de R$ 10.000",
];

export const SERVICE_OPTIONS = [
  "Selecione o serviço...",
  "Site Institucional",
  "Site para Autônomo",
  "Landing Page",
  "E-commerce",
  "SEO & Performance",
  "Aplicativo Web",
  "Manutenção / Suporte",
  "Outro",
];

// ─── PÁGINA "SOBRE NÓS" ────────────────────────────────────────────────

// Pilares / diferenciais da agência (seção "O Diferencial")
// SUBSTITUA: Ajuste títulos e descrições conforme sua filosofia real
export const PILLARS = [
  {
    icon:        "Zap",
    title:       "Velocidade Extrema",
    description: "Do primeiro contato ao site no ar em poucos dias — sem burocracia, sem enrolação, sem abrir mão da qualidade em nenhuma etapa.",
  },
  {
    icon:        "Target",
    title:       "Foco em Conversão",
    description: "Cada botão, cada cor e cada palavra existe para gerar um resultado: mais leads e mais vendas para o seu negócio.",
  },
  {
    icon:        "Sparkles",
    title:       "Design Exclusivo",
    description: "Nada de templates prontos. Cada projeto nasce do zero, pensado para a identidade única da sua marca.",
  },
  {
    icon:        "ShieldCheck",
    title:       "Transparência Técnica",
    description: "Explicamos cada decisão em linguagem simples. Você entende exatamente o que está sendo entregue e por quê.",
  },
];

// Etapas do processo de trabalho (seção "Nosso Processo")
// SUBSTITUA: Ajuste conforme o fluxo real da sua agência
export const PROCESS_STEPS = [
  {
    number:      "01",
    icon:        "Search",
    title:       "Diagnóstico",
    description: "Entendemos seu negócio, seu público e onde sua presença digital está travando resultados.",
  },
  {
    number:      "02",
    icon:        "ClipboardList",
    title:       "Planejamento",
    description: "Definimos estrutura, conteúdo e estratégia — cada página com um objetivo claro de conversão.",
  },
  {
    number:      "03",
    icon:        "Palette",
    title:       "Design",
    description: "Criamos um layout exclusivo, alinhado à sua marca e pensado para guiar o visitante até a ação.",
  },
  {
    number:      "04",
    icon:        "Code2",
    title:       "Desenvolvimento",
    description: "Transformamos o design em um site real: rápido, responsivo e pronto para gerar resultado.",
  },
  {
    number:      "05",
    icon:        "Rocket",
    title:       "Lançamento",
    description: "Publicamos, testamos tudo e acompanhamos os primeiros dias no ar junto com você.",
  },
];

// Time da agência (seção "Quem Faz Acontecer")
// SUBSTITUA: Adicione quantos membros fizerem sentido — funciona bem com 1, 2 ou mais.
// Para foto real, coloque o arquivo em /public/images/team/ e preencha photoSrc.
export const TEAM_MEMBERS = [
  {
    name:      "Alvaro Marinho",
    role:      "Fundador",
    photoSrc:  "alvaro-marinho.jpg" as string | null,
  },
  {
    name:      "Arthur Leite",
    role:      "Fundador",
    photoSrc:  "arthur-leite.jpg" as string | null,
  },
];
