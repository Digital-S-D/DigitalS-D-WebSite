import Link from "next/link";
import { CASE_STUDIES, type CaseSlug } from "@/lib/case-studies";

export default function CaseProjectDetails({ slug }: { slug: CaseSlug }) {
  const project = CASE_STUDIES[slug];
  const content = project.pt;
  return <section className="py-14 md:py-20 border-y border-white/10" aria-labelledby={`${slug}-case`}>
    <div className="container-custom">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
        <h2 id={`${slug}-case`} className="font-sora font-semibold text-2xl md:text-3xl">Do problema proposto à entrega.</h2>
        <Link href={`/en/portfolio/${slug}/`} hrefLang="en" lang="en" className="text-blue-300 underline underline-offset-4 py-3">Read this case in English</Link>
      </div>
      <p className="text-gray-300 max-w-3xl mb-8">{content.audience}</p>
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        <div><h3 className="font-semibold text-xl mb-3">Problema proposto</h3><p className="text-gray-300 leading-relaxed">{content.problem}</p></div>
        <div><h3 className="font-semibold text-xl mb-3">Participação e responsabilidade</h3><p className="text-gray-300 leading-relaxed">{content.role}</p></div>
        <div><h3 className="font-semibold text-xl mb-3">Decisões da implementação</h3><ul className="list-disc pl-5 space-y-3 text-gray-300">{content.decisions.map(item => <li key={item}>{item}</li>)}</ul><p className="mt-4 text-sm text-blue-200">{project.stack}</p></div>
        <div className="space-y-6"><div><h3 className="font-semibold text-xl mb-3">Entrega e evidências</h3><p className="text-gray-300 leading-relaxed mb-3">{content.delivery}</p><p className="text-gray-300 leading-relaxed">{content.evidence}</p></div><div><h3 className="font-semibold text-xl mb-3">Limites desta versão</h3><p className="text-gray-300 leading-relaxed">{content.limits}</p></div></div>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 mt-8">
        {project.demo && <a href={project.demo} className="text-blue-300 underline underline-offset-4 py-2">Abrir demonstração</a>}
        {project.repository && <a href={project.repository} className="text-blue-300 underline underline-offset-4 py-2">Código e instruções para executar</a>}
        {!project.demo && <a href="#telas" className="text-blue-300 underline underline-offset-4 py-2">Ver capturas da demonstração</a>}
      </div>
    </div>
  </section>;
}
