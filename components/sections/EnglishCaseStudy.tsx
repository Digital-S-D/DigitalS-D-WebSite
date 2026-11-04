import Image from "next/image";
import Link from "next/link";
import { BASE_PATH, COMPANY } from "@/lib/constants";
import { CASE_STUDIES, type CaseSlug } from "@/lib/case-studies";

export default function EnglishCaseStudy({ slug }: { slug: CaseSlug }) {
  const project = CASE_STUDIES[slug];
  const content = project.en;
  const email = `mailto:${COMPANY.email}?subject=${encodeURIComponent(`Project enquiry — ${project.title}`)}`;
  return <div lang="en">
    <header className="border-b border-white/15"><nav aria-label="Main navigation" className="container-custom flex flex-wrap items-center justify-between gap-4 py-5"><Link href="/" className="font-sora font-bold text-xl">Digital S&amp;D</Link><div className="flex flex-wrap gap-x-6 gap-y-3"><Link href="/#portfolio" className="text-gray-300">All projects</Link><Link href={`/portfolio/${slug}/`} hrefLang="pt-BR" lang="pt-BR" className="text-blue-300 underline underline-offset-4">Português</Link><a href={email} className="text-blue-300">Discuss your project</a></div></nav></header>
    <main id="conteudo" tabIndex={-1}>
      <section className="bg-grid py-14 md:py-20"><div className="container-custom"><span className="badge mb-5">Portfolio concept · Fictional data</span><h1 className="font-sora font-bold text-4xl md:text-6xl mb-6">{project.title}</h1><p className="text-gray-300 text-xl max-w-3xl mb-6">{content.subtitle}</p><p className="text-blue-200 max-w-3xl border-l-2 border-blue-400 pl-4 mb-8">This is a Digital S&amp;D team demonstration. It is not a client deployment, endorsement or evidence of commercial results.</p><div className="flex flex-wrap gap-4"><a href={email} className="btn-primary">Discuss a similar project</a>{project.demo && <a href={project.demo} className="btn-outline">Open live demo (Portuguese)</a>}</div><figure className="mt-10"><Image src={`${BASE_PATH}${project.cover}`} width={1425} height={940} alt={`Actual screenshot of the ${project.title} demonstration running with fictional data; interface in Portuguese.`} preload className="w-full h-auto rounded-xl border border-white/20" sizes="(min-width: 1280px) 1216px, 100vw" /><figcaption className="text-gray-400 text-sm mt-3">Actual implementation, shown in Portuguese. The case text is available in English and Portuguese.</figcaption></figure></div></section>
      <section className="py-14 md:py-20"><div className="container-custom grid md:grid-cols-2 gap-10 md:gap-14">
        <div><h2 className="font-sora text-2xl font-semibold mb-4">Proposed need and audience</h2><p className="text-gray-300 leading-relaxed mb-4">{content.problem}</p><p className="text-gray-300 leading-relaxed">{content.audience}</p></div>
        <div><h2 className="font-sora text-2xl font-semibold mb-4">Team contribution</h2><p className="text-gray-300 leading-relaxed">{content.role}</p></div>
        <div><h2 className="font-sora text-2xl font-semibold mb-4">Implementation decisions</h2><ul className="list-disc pl-5 space-y-3 text-gray-300">{content.decisions.map(item=><li key={item}>{item}</li>)}</ul><p className="text-blue-200 text-sm mt-5">{project.stack}</p></div>
        <div><h2 className="font-sora text-2xl font-semibold mb-4">What was delivered</h2><p className="text-gray-300 leading-relaxed">{content.delivery}</p></div>
        <div><h2 className="font-sora text-2xl font-semibold mb-4">Evidence</h2><p className="text-gray-300 leading-relaxed">{content.evidence}</p></div>
        <div><h2 className="font-sora text-2xl font-semibold mb-4">Limits and a real deployment</h2><p className="text-gray-300 leading-relaxed">{content.limits}</p></div>
      </div></section>
      <section className="pb-16"><div className="container-custom"><div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/10 p-6 md:p-10"><h2 className="font-sora text-2xl md:text-3xl font-bold mb-4">Have a similar need?</h2><p className="text-gray-300 max-w-3xl mb-6">Tell us your goals, audience, references and preferred timeline. We will discuss the scope, content and integrations your project needs. You can write in English or Portuguese.</p><div className="flex flex-wrap gap-4"><a href={email} className="btn-primary">Email Digital S&amp;D</a><Link href={`/portfolio/${slug}/#telas`} className="btn-outline">More screenshots</Link>{project.repository && <a href={project.repository} className="btn-outline">Source and run instructions</a>}</div><p className="text-gray-300 text-sm mt-5">{COMPANY.email}</p></div></div></section>
    </main>
    <footer className="border-t border-white/15"><div className="container-custom py-8 flex flex-wrap justify-between gap-5 text-sm text-gray-300"><span>Digital S&amp;D · Brazil</span><Link href={`/portfolio/${slug}/`} lang="pt-BR" hrefLang="pt-BR" className="underline">Ler em português</Link><a href={email} className="underline">Project enquiries</a></div></footer>
  </div>;
}
