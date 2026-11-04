
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import { CASE_STUDIES, type CaseSlug } from "@/lib/case-studies";

export default function CaseProjectDetails({ locale = "pt", slug }: { slug: CaseSlug } & { locale?: Locale }) {
  const t = createTranslator(locale);
  const project = CASE_STUDIES[slug];
  const content = project.pt;
  return <section className="py-14 md:py-20 border-y border-white/10" aria-labelledby={`${slug}-case`}>
    <div className="container-custom">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 id={`${slug}-case`} className="font-sora font-semibold text-2xl md:text-3xl">{t("Do problema proposto à entrega.")}</h2>
      </div>
      <p className="text-gray-300 max-w-3xl mb-8">{t(content.audience)}</p>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div><h3 className="font-semibold text-xl mb-3">{t("Problema proposto")}</h3><p className="text-gray-300 leading-relaxed">{t(content.problem)}</p></div>
        <div><h3 className="font-semibold text-xl mb-3">{t("Participação e responsabilidade")}</h3><p className="text-gray-300 leading-relaxed">{t(content.role)}</p></div>
        <div><h3 className="font-semibold text-xl mb-3">{t("Decisões da implementação")}</h3><ul className="list-disc pl-5 space-y-3 text-gray-300">{content.decisions.map(item => <li key={item}>{t(item)}</li>)}</ul><p className="mt-4 text-sm text-blue-200">{t(project.stack)}</p></div>
        <div className="space-y-6"><div><h3 className="font-semibold text-xl mb-3">{t("Entrega e evidências")}</h3><p className="text-gray-300 leading-relaxed mb-3">{t(content.delivery)}</p><p className="text-gray-300 leading-relaxed">{t(content.evidence)}</p></div><div><h3 className="font-semibold text-xl mb-3">{t("Limites desta versão")}</h3><p className="text-gray-300 leading-relaxed">{t(content.limits)}</p></div></div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
        {project.demo && <a href={localizedHref(project.demo, locale)} className="text-blue-300 underline underline-offset-4 py-2">{t("Abrir demonstração")}</a>}
        {project.repository && <a href={localizedHref(project.repository, locale)} className="text-blue-300 underline underline-offset-4 py-2">{t("Código e instruções para executar")}</a>}
        {!project.demo && <a href={localizedHref("#telas", locale)} className="text-blue-300 underline underline-offset-4 py-2">{t("Ver capturas da demonstração")}</a>}
      </div>
    </div>
  </section>;
}
