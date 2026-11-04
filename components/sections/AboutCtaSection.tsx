
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// ─── CALL TO ACTION FINAL ───────────────────────────────────────────────
// Aponta para "/#contato" (o formulário real, que vive na Home) em vez de
// duplicar o formulário aqui — mantém uma única fonte de verdade para leads.

export function AboutCtaSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <section className="pb-20 md:pb-28 bg-brand-navy">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto relative overflow-hidden rounded-2xl p-8 md:p-12
                        border border-brand-blue/20 bg-brand-blue/5 text-center">
          {/* Glow de fundo, no padrão usado no restante do site */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/10 via-transparent to-transparent" />

          <div className="relative z-10">
            {/* SUBSTITUA: Título de encerramento, retomando a metáfora do Hero */}
            <h2 className="font-sora font-bold text-2xl md:text-4xl text-white mb-4">
              {t("Você explica seu negócio. A equipe orienta o próximo passo.")}</h2>
            {/* SUBSTITUA: Parágrafo de convite */}
            <p className="font-outfit text-gray-400 text-base md:text-lg mb-8 max-w-xl mx-auto">
              {t("Você pode começar sem entender de tecnologia. Explicamos as opções, organizamos os materiais com você e combinamos as etapas do projeto.")}</p>
            {/* Link para o formulário de contato, que vive na Home */}
            <Link href={localizedHref("/#contato", locale)} className="btn-primary text-base px-8 py-4">
              {t("Conversar sobre meu site")}<ArrowRight size={18} />
            </Link>
            <p className="mt-5"><Link href={localizedHref("/atendimento", locale)} className="inline-flex py-3 text-blue-300 underline underline-offset-4">{t("Entender o acompanhamento e as atualizações")}</Link></p>
          </div>
        </div>
      </div>
    </section>
  );
}
