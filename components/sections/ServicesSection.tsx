
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowRight, Check, Globe, Zap } from "lucide-react";
import { LINKS } from "@/lib/constants";
import { COMPLEMENTARY_SERVICES, PRIMARY_SERVICES, quoteHref } from "@/lib/offers";

export function ServicesSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <section id="servicos" className="py-16 md:py-24 bg-brand-black">
      <div className="container-custom">
        <div className="max-w-2xl mb-10">
          <span className="badge mb-4">{t("Sites e landing pages")}</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl mb-4">{t("O formato certo para ")}<span className="text-gradient">{t("o seu objetivo.")}</span></h2>
          <p className="text-gray-300 text-base md:text-lg">{t("Apresentar seu negócio ou dar foco a uma oferta? Começamos pelo que você precisa comunicar e pela ação que espera do visitante.")}</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {PRIMARY_SERVICES.map((service, index) => {
            const Icon = index === 0 ? Globe : Zap;
            return (
              <article key={service.id} id={service.id} className="scroll-mt-28 rounded-2xl border border-white/15 bg-brand-navy p-6 md:p-8 flex flex-col">
                <div className="flex items-center gap-3 text-blue-300 mb-5"><Icon size={22} aria-hidden="true" /><span className="text-sm">{t(service.label)}</span></div>
                <h3 className="font-sora font-bold text-2xl mb-3">{t(service.title)}</h3>
                <p className="text-white mb-3">{t(service.audience)}</p>
                <p className="text-gray-300 mb-6">{t(service.description)}</p>
                <h4 className="font-semibold text-sm mb-3">{t("Base da entrega")}</h4>
                <ul className="space-y-3 mb-6">
                  {service.deliverables.map((item) => <li key={item} className="flex gap-3 text-sm text-gray-300"><Check size={17} className="text-blue-300 shrink-0 mt-0.5" aria-hidden="true" />{t(item)}</li>)}
                </ul>
                <div className="border-t border-white/10 pt-5 mb-6">
                  <h4 className="font-semibold text-sm mb-2">{t("O que precisamos de você")}</h4>
                  <p className="text-gray-300 text-sm leading-relaxed">{t(service.materials)} {t(" Produção de conteúdo e recursos adicionais são combinados na proposta.")}</p>
                </div>
                <Link href={localizedHref(quoteHref(service.interest), locale)} className="btn-primary justify-center mt-auto" aria-label={t(`Pedir orçamento de ${service.title.toLowerCase()}`)}>{t("Pedir orçamento ")}<ArrowRight size={17} aria-hidden="true" /></Link>
              </article>
            );
          })}
        </div>
        <p className="text-gray-400 text-sm mt-5 max-w-3xl">{t("A proposta detalha páginas, seções, integrações, materiais, revisões e publicação. Domínio, hospedagem, ferramentas externas e manutenção têm suas condições informadas separadamente. ")}<Link href={localizedHref("/atendimento", locale)} className="text-blue-300 underline underline-offset-4">{t("Veja como a equipe acompanha você.")}</Link></p>
        <div id="solucoes-complementares" className="scroll-mt-28 mt-12 pt-8 border-t border-white/10">
          <h3 className="font-sora font-semibold text-xl mb-5">{t("Seu projeto precisa ir além?")}</h3>
          <div className="grid sm:grid-cols-3 gap-6 mb-5">
            {COMPLEMENTARY_SERVICES.map((service) => <div key={service.title}><h4 className="font-semibold mb-2">{t(service.title)}</h4><p className="text-gray-300 text-sm">{t(service.description)}</p></div>)}
          </div>
          <a href={localizedHref(LINKS.whatsappCustomizado, locale)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 py-3 text-blue-300 underline underline-offset-4">{t("Conversar sobre uma solução personalizada ")}<ArrowRight size={16} aria-hidden="true" /></a>
        </div>
      </div>
    </section>
  );
}
