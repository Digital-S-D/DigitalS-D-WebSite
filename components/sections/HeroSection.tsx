
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import Image from "next/image";
import { ArrowRight, CheckCircle } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";

const quickBenefits = ["Orientação em cada etapa", "Design para sua marca", "Adaptado ao celular"];

export function HeroSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <section id="hero" className="relative overflow-hidden bg-brand-navy pt-24 pb-12 md:pt-28 md:pb-16">
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div aria-hidden="true" className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-brand-blue/10 blur-[120px] pointer-events-none" />
      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Image src={`${BASE_PATH}/images/brand-logo.png`} alt={t("Digital S&D")} width={672} height={241} className="hidden md:block w-40 sm:w-48 md:w-56 h-auto mx-auto mb-6" />
          <h1 className="font-sora font-extrabold text-3xl sm:text-5xl md:text-6xl text-white leading-[1.15] tracking-tight mb-5">
            {t("Sites e landing pages ")}<span className="text-gradient">{t("para aproximar clientes.")}</span>
          </h1>
          <p className="font-outfit text-base md:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto mb-6">
            {t("Sites para empresas e profissionais. Você conta o que precisa; nossa equipe orienta do planejamento à entrega.")}</p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 mb-6">
            <a href={localizedHref("#contato", locale)} className="btn-primary justify-center text-base px-6 py-3">{t("Pedir orçamento ")}<ArrowRight size={18} aria-hidden="true" /></a>
            <a href={localizedHref("#portfolio", locale)} className="inline-flex min-h-12 items-center justify-center text-blue-300 underline underline-offset-4 md:btn-outline text-base px-6 py-3">{t("Conhecer nosso trabalho")}</a>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {quickBenefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-2 text-sm text-gray-300"><CheckCircle size={16} className="text-blue-400 shrink-0" aria-hidden="true" />{t(benefit)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
