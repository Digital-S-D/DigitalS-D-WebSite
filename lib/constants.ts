import { PRIMARY_SERVICES } from "./offers";

// ═══════════════════════════════════════════════════════════════════════
// lib/constants.ts — CENTRAL DE CONTEÚDO
// ═══════════════════════════════════════════════════════════════════════
// Dados compartilhados: empresa, contatos, navegação e opções de formulário.
// Alguns textos de apresentação ainda ficam nos componentes de seção.
// ═══════════════════════════════════════════════════════════════════════

// ─── basePath do GitHub Pages ────────────────────────────────────────────
// O valor vem de next.config.mjs (NEXT_PUBLIC_BASE_PATH), que é a única fonte
// de verdade: "/DigitalS-D-WebSite" só no build do GitHub Pages e "" em todos
// os outros casos (Netlify/domínio próprio, `npm run dev`).
// Com `output: "export"` a imagem roda em modo `unoptimized`, e nesse modo o
// Next.js NÃO prefixa o `src` automaticamente (limitação conhecida do
// framework). Por isso, caminhos de imagem usados fora de um <Link> precisam
// ser prefixados manualmente com esta constante.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ─── DADOS DA EMPRESA ─────────────────────────────────────────────────
// SUBSTITUA: Preencha com os dados reais da sua agência
export const COMPANY = {
  name:        "Digital S&D",
  tagline:     "Sites e landing pages para o seu negócio.",
  description: "Design e desenvolvimento web para PMEs e profissionais autônomos.",
  email:       "digitalsd.contato@gmail.com",
  phone:       "+55 (31) 9 9299-8761",             // SUBSTITUA
  whatsapp:    "5531992998761",                     // SUBSTITUA (só números)
  serviceMode: "Atendimento exclusivamente online",
  year:        new Date().getFullYear(),
};

// ─── LINKS DE AÇÃO (CTAs) ─────────────────────────────────────────────
// SUBSTITUA: Cole aqui a mensagem que vai pré-preencher o WhatsApp
export const LINKS = {
  whatsappOrcamento: `https://wa.me/${COMPANY.whatsapp}?text=Olá!+Quero+um+orçamento+para+meu+site`,
  whatsappCustomizado: `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent("Olá! Preciso de uma solução customizada.")}`,
  about:     "/sobre", // rota da página "Sobre Nós"
};

// ─── MENU DE NAVEGAÇÃO ────────────────────────────────────────────────
// Os links de seção usam "/#âncora" (em vez de só "#âncora") para funcionarem
// corretamente também a partir de outras páginas, como /sobre.
// Quando o usuário já está na Home, o comportamento é idêntico ao anterior
// (o navegador não recarrega, apenas rola até a âncora).
export const NAV_LINKS = [
  { label: "Início",    href: "/#hero" },
  { label: "Serviços",  href: "/#servicos" },
  { label: "Portfólio", href: "/#portfolio" },
  { label: "Dúvidas", href: "/perguntas-frequentes" },
  { label: "Como funciona", href: "/atendimento" },
  { label: "Contato",   href: "/#contato" },
];

// ─── FORMULÁRIO DE CONTATO ────────────────────────────────────────────
// SUBSTITUA: Faixas de orçamento conforme sua tabela de preços
export const BUDGET_OPTIONS = [
  "Selecione seu orçamento...",
  "Ainda não sei",
  "Até R$ 1.500",
  "R$ 1.500 – R$ 3.000",
  "R$ 3.000 – R$ 6.000",
  "R$ 6.000 – R$ 10.000",
  "Acima de R$ 10.000",
];

export const SERVICE_OPTIONS = [
  "Selecione o serviço...",
  ...PRIMARY_SERVICES.map((service) => service.interest),
  "Site para Autônomo",
  "Sistema Web personalizado",
  "E-commerce",
  "SEO & Performance",
  "Aplicativo Web",
  "Manutenção / Suporte",
  "Ainda não sei",
  "Outro",
];

// ─── PÁGINA "SOBRE NÓS" ────────────────────────────────────────────────

// Pilares / diferenciais da agência (seção "O Diferencial")
// SUBSTITUA: Ajuste títulos e descrições conforme sua filosofia real
export const PILLARS = [
  {
    icon:        "Zap",
    title:       "Planejamento Claro",
    description: "Organizamos as etapas e combinamos o prazo conforme o escopo, os materiais e as aprovações de cada projeto.",
  },
  {
    icon:        "Target",
    title:       "Foco em Conversão",
    description: "Organizamos conteúdo e chamadas para facilitar o próximo passo do visitante, como conhecer um serviço ou solicitar um orçamento.",
  },
  {
    icon:        "Sparkles",
    title:       "Design Exclusivo",
    description: "O layout e a organização do conteúdo são pensados para a identidade da sua marca e o objetivo do projeto.",
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
    description: "Conferimos a entrega e combinamos publicação, acessos e suporte conforme as condições da proposta.",
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
