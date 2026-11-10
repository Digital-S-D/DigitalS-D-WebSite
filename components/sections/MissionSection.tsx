
import { createTranslator, type Locale } from "@/lib/i18n";
// ─── NOSSA HISTÓRIA / MISSÃO ────────────────────────────────────────────
// SUBSTITUA: Conte a origem real da agência e a visão por trás dela.

export function MissionSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <section className="py-20 md:py-28 bg-brand-black">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">

          <span className="badge mb-4">{t("Nossa Missão")}</span>

          {/* SUBSTITUA: Título da missão */}
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-6 leading-tight">
            {t("Organizar sua presença digital")}{t(" ")}
            <span className="text-gradient">{t("para PMEs e autônomos")}</span>
          </h2>

          {/* SUBSTITUA: Parágrafo sobre a origem/história da agência */}
          <p className="font-outfit text-gray-400 text-base md:text-lg leading-relaxed mb-4">
            {t("A equipe ajuda pequenas empresas e profissionais autônomos a apresentar seus serviços na internet. Você explica seu negócio e recebe orientação sobre conteúdo, estrutura e próximos passos.")}</p>

          {/* SUBSTITUA: Parágrafo sobre a visão de futuro */}
          <p className="font-outfit text-gray-400 text-base md:text-lg leading-relaxed">
            {t("Planejamos a apresentação do negócio, desenvolvemos o site e orientamos as revisões. Entregáveis, prazos e investimento são definidos na proposta de cada projeto.")}</p>
        </div>
      </div>
    </section>
  );
}
