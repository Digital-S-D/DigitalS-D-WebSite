import Link from "next/link";
import { Header, Footer } from "@/components/layout";
import { localizedHref, type Locale } from "@/lib/i18n";
import { pageMetadata, siteUrl, ORGANIZATION } from "@/lib/seo";
import { quoteHref } from "@/lib/offers";
import { SERVICE_PAGES, type ServicePageKey } from "@/lib/service-pages";

export function serviceMetadata(kind: ServicePageKey, locale: Locale) {
  const service = SERVICE_PAGES[kind]; const copy = service[locale];
  return pageMetadata(localizedHref(service.path, locale), copy.title, copy.description, {
    url: "/og-image.jpg", width: 1200, height: 630,
    alt: locale === "en" ? "Digital S&D — Websites and landing pages" : "Digital S&D — Sites e landing pages",
  });
}

export default function ServicePage({ kind, locale }: { kind: ServicePageKey; locale: Locale }) {
  const service = SERVICE_PAGES[kind]; const copy = service[locale]; const en = locale === "en";
  const other = SERVICE_PAGES[kind === "website" ? "landing" : "website"];
  const url = siteUrl(localizedHref(service.path, locale));
  const graph = { "@context": "https://schema.org", "@graph": [
    { "@type": "Service", "@id": `${url}#service`, url, name: copy.heading, description: copy.intro, provider: { "@id": ORGANIZATION["@id"], name: ORGANIZATION.name, url: ORGANIZATION.url } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: en ? "Home" : "Início", item: siteUrl(localizedHref("/", locale)) },
      { "@type": "ListItem", position: 2, name: copy.heading, item: url },
    ] },
  ] };
  return <>
    <Header locale={locale} />
    <main id="conteudo" tabIndex={-1} className="pt-28 md:pt-36 pb-16 md:pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, "\\u003c") }} />
      <div className="container-custom max-w-4xl">
        <nav aria-label={en ? "Breadcrumb" : "Caminho da página"} className="text-sm text-gray-300 mb-8"><ol className="flex flex-wrap gap-2"><li><Link href={localizedHref("/", locale)} className="underline py-3 inline-block">{en ? "Home" : "Início"}</Link></li><li className="py-3" aria-hidden="true">/</li><li className="py-3" aria-current="page">{copy.heading}</li></ol></nav>
        <h1 className="font-sora font-bold text-4xl md:text-5xl mb-6">{copy.heading}</h1>
        <p className="text-gray-300 text-lg leading-relaxed mb-8">{copy.intro}</p>
        <Link className="btn-primary mb-10" href={localizedHref(quoteHref(service.interest), locale)}>{en ? "Discuss my project" : "Conversar sobre meu projeto"}</Link>
        {copy.sections.map(section => <section key={section.title} className="mb-10"><h2 className="font-sora font-semibold text-2xl mb-4">{section.title}</h2><p className="text-gray-300 leading-relaxed">{section.text}</p></section>)}
        <section className="card-base mb-10"><h2 className="font-sora font-semibold text-2xl mb-4">{en ? "See the approach in practice" : "Veja a abordagem na prática"}</h2><p className="text-gray-300 mb-4">{en ? "This is a demonstration project, not a client result or evidence of sales growth." : "Este é um projeto demonstrativo, não um resultado de cliente nem comprovação de aumento de vendas."}</p><Link className="text-blue-300 underline py-3 inline-block" href={localizedHref(service.casePath, locale)}>{service.caseName}</Link></section>
        <nav aria-label={en ? "Related information" : "Informações relacionadas"} className="flex flex-wrap gap-6 mb-10">
          <Link href={localizedHref(other.path, locale)} className="text-blue-300 underline py-3">{en ? "Compare the other format" : "Compare o outro formato"}</Link>
          <Link href={localizedHref("/atendimento/", locale)} className="text-blue-300 underline py-3">{en ? "Process and ongoing support" : "Atendimento e continuidade"}</Link>
          <Link href={localizedHref("/perguntas-frequentes/", locale)} className="text-blue-300 underline py-3">{en ? "Questions before hiring" : "Dúvidas antes de contratar"}</Link>
        </nav>
        <p className="text-gray-300 mb-6">{en ? "Tell us about your business and available materials. Our team makes an initial reply within one business day; project timing and investment are agreed in a written proposal." : "Conte sobre seu negócio e os materiais disponíveis. A equipe faz o retorno inicial em até 1 dia útil; prazo de execução e investimento são combinados em proposta escrita."}</p>
        <Link className="btn-primary" href={localizedHref(quoteHref(service.interest), locale)}>{en ? "Request a proposal" : "Pedir uma proposta"}</Link>
      </div>
    </main><Footer locale={locale} />
  </>;
}
