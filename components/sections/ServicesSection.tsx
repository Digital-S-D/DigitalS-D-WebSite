import {
  Globe,
  Zap,
  ShoppingCart,
  Search,
  Smartphone,
  BarChart3,
  Briefcase,
  ArrowRight,
} from "lucide-react";

// ─── SERVIÇOS OFERECIDOS ─────────────────────────────────────────────
// SUBSTITUA: Adicione, remova ou edite os serviços conforme sua oferta real.
// Recomendo no máximo 6 para não sobrecarregar o usuário.
const services = [
  {
    icon:        Globe,
    title:       "Sites Institucionais",
    description: "Presença digital profissional que transmite credibilidade e converte visitantes em clientes. Design exclusivo, copywriting e SEO inclusos.",
    // SUBSTITUA: Lista de features do serviço
    features:    ["Design exclusivo", "Até 10 páginas", "Formulários integrados", "Google Analytics"],
    // destaque = exibe com borda azul para chamar atenção (serviço mais vendido)
    highlight:   false,
  },
  {
    icon:        Zap,
    title:       "Landing Pages",
    description: "Página focada em uma única ação: gerar leads ou vender. Ideal para campanhas de tráfego pago, lançamentos e promoções.",
    features:    ["Alta conversão", "A/B testing", "Pixels rastreamento", "CRM integration"],
    highlight:   true, // Mais popular
  },
  {
    icon:        ShoppingCart,
    title:       "E-commerce",
    description: "Loja virtual completa, segura e rápida. Venda seus produtos 24h por dia com checkout otimizado e integração com meios de pagamento.",
    features:    ["Checkout otimizado", "Gestão de estoque", "Pix e cartão", "Painel de vendas"],
    highlight:   false,
  },
  {
    icon:        Search,
    title:       "SEO & Performance",
    description: "Auditoria técnica, otimização on-page e estratégia de conteúdo para seu site aparecer nas primeiras posições do Google.",
    features:    ["Auditoria técnica", "On-page SEO", "Core Web Vitals", "Relatório mensal"],
    highlight:   false,
  },
  {
    icon:        Smartphone,
    title:       "Aplicativos Web (PWA)",
    description: "Sistemas e aplicativos web progressivos que funcionam no navegador como apps nativos. Sem precisar ir na App Store.",
    features:    ["Funciona offline", "Instalável no celular", "Push notifications", "Cross-platform"],
    highlight:   false,
  },
  {
    icon:        BarChart3,
    title:       "Manutenção & Suporte",
    description: "Plano mensal de manutenção preventiva, atualizações de segurança, backups e suporte técnico prioritário.",
    features:    ["Backup diário", "Atualizações", "Suporte prioritário", "Relatório mensal"],
    highlight:   false,
  },
];

export function ServicesSection() {
  return (
    <section id="servicos" className="py-20 md:py-28 bg-brand-black">
      <div className="container-custom">

        {/* ─── CABEÇALHO ────────────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge mb-4">
            <Zap size={12} />
            O que entregamos
          </span>
          {/* SUBSTITUA: Título da seção de serviços */}
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            Soluções digitais para{" "}
            <span className="text-gradient">cada necessidade</span>
          </h2>
          {/* SUBSTITUA: Subtítulo */}
          <p className="font-outfit text-gray-400 text-base md:text-lg">
            Do site institucional ao e-commerce completo, entregamos soluções
            personalizadas que crescem junto com o seu negócio.
          </p>
        </div>

        {/* ─── GRID DE SERVIÇOS ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`relative overflow-hidden rounded-2xl p-6 border transition-all duration-300
                         group hover:-translate-y-1 hover:shadow-xl
                         ${
                           service.highlight
                             ? "border-brand-blue/40 bg-brand-blue/5 hover:border-brand-blue/70 hover:shadow-brand-blue/20"
                             : "border-white/5 bg-brand-navy hover:border-white/10 hover:shadow-black/50"
                         }`}
            >
              {/* Badge "Mais Popular" */}
              {service.highlight && (
                <div className="absolute top-4 right-4">
                  <span className="badge text-xs">⭐ Mais popular</span>
                </div>
              )}

              {/* Ícone */}
              <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5
                               transition-all duration-300 group-hover:scale-110
                               ${
                                 service.highlight
                                   ? "bg-brand-blue/20 border-brand-blue/40 text-brand-blue"
                                   : "bg-white/5 border-white/10 text-gray-400 group-hover:bg-brand-blue/10 group-hover:border-brand-blue/30 group-hover:text-brand-blue"
                               }`}>
                <service.icon size={22} />
              </div>

              {/* Título */}
              <h3 className="font-sora font-semibold text-white text-lg mb-2">
                {/* SUBSTITUA: Nome do serviço */}
                {service.title}
              </h3>

              {/* Descrição */}
              <p className="font-outfit text-gray-400 text-sm leading-relaxed mb-5">
                {/* SUBSTITUA: Descrição do serviço */}
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs font-outfit text-gray-500">
                    <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${service.highlight ? "bg-brand-blue" : "bg-gray-600"}`} />
                    {/* SUBSTITUA: Feature do serviço */}
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Link saiba mais */}
              {/* SUBSTITUA: href para página dedicada do serviço ou WhatsApp */}
              <a
                href="#contato"
                className={`inline-flex items-center gap-1.5 text-sm font-outfit font-medium
                           transition-all duration-200 group/link
                           ${service.highlight ? "text-brand-blue hover:text-white" : "text-gray-500 hover:text-brand-blue"}`}
              >
                Saiba mais
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                />
              </a>

              {/* Gradiente de borda inferior decorativo */}
              <div className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100
                               transition-transform duration-300 origin-left
                               bg-gradient-to-r from-brand-blue to-blue-400
                               ${service.highlight ? "scale-x-100" : ""}`} />
            </div>
          ))}
        </div>

        {/* ─── BLOCO: SITES PARA AUTÔNOMOS ──────────────────────────────
            SUBSTITUA: Ajuste título e texto conforme seu público-alvo real.
            Fica fora da grade de cards para não deixar um 7º card sozinho
            na última linha.
        ──────────────────────────────────────────────────────────── */}
        <div className="mt-8 md:mt-10 rounded-2xl border border-brand-blue/20 bg-brand-blue/5
                        p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-5 md:gap-8">
          <div className="w-12 h-12 rounded-xl border bg-brand-blue/20 border-brand-blue/40 text-brand-blue
                          flex items-center justify-center shrink-0">
            <Briefcase size={22} />
          </div>

          <div className="flex-1">
            <h3 className="font-sora font-semibold text-white text-lg md:text-xl mb-2">
              Trabalha por conta própria?
            </h3>
            <p className="font-outfit text-gray-400 text-sm md:text-base leading-relaxed">
              Também criamos sites para profissionais autônomos e liberais: uma
              presença própria na internet para ser encontrado, passar confiança
              e receber novos clientes sem depender só de indicação.
            </p>
          </div>

          <a href="#contato" className="btn-primary text-sm whitespace-nowrap shrink-0 justify-center">
            Quero meu site
            <ArrowRight size={16} />
          </a>
        </div>

        {/* ─── CTA SEÇÃO ────────────────────────────────────────────── */}
        <div className="mt-14 text-center">
          <p className="font-outfit text-gray-500 text-sm mb-2">
            Não encontrou o que precisa?
          </p>
          {/* SUBSTITUA: href para WhatsApp com mensagem específica */}
          <a
            href="https://wa.me/5531999999999?text=Olá!+Preciso+de+uma+solução+customizada"
            target="_blank"
            rel="noopener noreferrer"
            className="font-outfit text-brand-blue hover:text-white text-sm font-medium
                       inline-flex items-center gap-1.5 transition-colors duration-200"
          >
            Fale conosco para uma solução customizada
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
