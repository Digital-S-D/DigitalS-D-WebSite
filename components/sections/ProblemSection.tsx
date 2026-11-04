
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import { XCircle, CheckCircle, AlertTriangle } from "lucide-react";

// ─── PROBLEMAS VS SOLUÇÕES ────────────────────────────────────────────
// SUBSTITUA: Personalize cada problema e solução com base na dor real
// dos seus clientes (faça pesquisa de clientes se possível).
// Quanto mais específico, mais forte a conversão.

const comparisons = [
  {
    problem: {
      icon: XCircle,
      title: "Site lento e ultrapassado",
      description:
        "Seu site demora mais de 5s para carregar. O cliente abre, trava e fecha. Você perde vendas sem nem saber.",
    },
    solution: {
      icon: CheckCircle,
      title: "Foco em desempenho",
      description:
        "Cuidamos da estrutura, das imagens e do carregamento para oferecer uma navegação leve e ágil.",
    },
  },
  {
    problem: {
      icon: XCircle,
      title: "Não aparece no Google",
      description:
        "Ninguém te encontra quando busca seus serviços. Você depende de indicações e posts pagos para sobreviver.",
    },
    solution: {
      icon: CheckCircle,
      title: "Otimizado para SEO",
      description:
        "Estrutura técnica e semântica para ranquear no Google. Seu negócio encontrado por quem já quer comprar.",
    },
  },
  {
    problem: {
      icon: XCircle,
      title: "Horrível no celular",
      description:
        "Textos pequenos, botões difíceis de tocar e conteúdo cortado podem impedir o contato pelo celular.",
    },
    solution: {
      icon: CheckCircle,
      title: "Design responsivo",
      description:
        "Design mobile-first. Layouts adaptados para navegação em smartphones, tablets e computadores.",
    },
  },
  {
    problem: {
      icon: XCircle,
      title: "Visitante entra e sai sem contato",
      description:
        "Sem CTAs claros, formulários funcionais ou integração com WhatsApp. Tráfego que não converte é dinheiro desperdiçado.",
    },
    solution: {
      icon: CheckCircle,
      title: "Focado em conversão",
      description:
        "CTAs estratégicos, formulários otimizados e integração com WhatsApp. Cada elemento existe para gerar leads.",
    },
  },
];

export function ProblemSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <section className="py-20 md:py-28 bg-brand-navy" id="sobre">
      <div className="container-custom">

        {/* ─── CABEÇALHO DA SEÇÃO ─────────────────────────────────────── */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          {/* SUBSTITUA: Tag acima do título */}
          <span className="badge mb-4">
            <AlertTriangle size={12} />
            {t("A realidade das PMEs e autônomos")}</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            {t("Problemas que custam")}{t(" ")}
            <span className="text-gradient">{t("clientes e dinheiro")}</span>
          </h2>
          {/* SUBSTITUA: Subtítulo da seção */}
          <p className="font-outfit text-gray-400 text-base md:text-lg">
            {t("A maioria das PMEs e dos profissionais autônomos perde clientes todo dia por causa de problemas digitais que têm solução simples e acessível.")}</p>
        </div>

        {/* ─── GRID DE COMPARAÇÃO ─────────────────────────────────────── */}
        <div className="space-y-6">
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            >
              {/* Card PROBLEMA */}
              <div className="relative overflow-hidden rounded-2xl p-6 border border-red-500/10
                              bg-red-500/[0.03] group hover:border-red-500/20 transition-all duration-300">
                {/* Glow de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0
                                group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20
                                    flex items-center justify-center mt-0.5">
                      <item.problem.icon size={18} className="text-red-400" />
                    </div>
                    <div>
                      {/* SUBSTITUA: Título do problema */}
                      <h3 className="font-sora font-semibold text-white text-base mb-1">
                        {t(item.problem.title)}
                      </h3>
                      {/* SUBSTITUA: Descrição do problema */}
                      <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                        {t(item.problem.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Seta conectora (visível apenas em desktop) */}
              {/* <div className="hidden md:flex items-center justify-center">
                <ArrowRight size={20} className="text-brand-blue" />
              </div> */}

              {/* Card SOLUÇÃO */}
              <div className="relative overflow-hidden rounded-2xl p-6 border border-brand-blue/20
                              bg-brand-blue/[0.04] group hover:border-brand-blue/40 transition-all duration-300">
                {/* Glow de fundo */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 to-transparent opacity-0
                                group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-xl bg-brand-blue/10 border border-brand-blue/20
                                    flex items-center justify-center mt-0.5">
                      <item.solution.icon size={18} className="text-brand-blue" />
                    </div>
                    <div>
                      {/* SUBSTITUA: Título da solução */}
                      <h3 className="font-sora font-semibold text-white text-base mb-1">
                        {t(item.solution.title)}
                      </h3>
                      {/* SUBSTITUA: Descrição da solução */}
                      <p className="font-outfit text-gray-400 text-sm leading-relaxed">
                        {t(item.solution.description)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── CTA FINAL DA SEÇÃO ─────────────────────────────────────── */}
        <div className="mt-14 text-center">
          <p className="font-outfit text-gray-400 text-base mb-4">
            {/* SUBSTITUA: Chamada de urgência / benefício */}
            {t("Pronto para ter um site que trabalha por você?")}</p>
          {/* SUBSTITUA: href para WhatsApp ou formulário */}
          <a href={localizedHref("#contato", locale)} className="btn-primary text-sm">
            {t("Pedir orçamento")}<CheckCircle size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
