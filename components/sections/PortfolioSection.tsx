
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";
import { ADVOCACIA_DIGITAL, ALVORADA, ODONTOHUB } from "@/lib/portfolio";

const projects = [
  { ...ADVOCACIA_DIGITAL, width: 1425, height: 940, alt: "Captura real da abertura da Advocacia Digital, com fundo claro, tipografia editorial e aviso de projeto demonstrativo.", note: "Conceito de escritório fictício. Perfis e textos ilustrativos; formulário com simulação local, sem envio de dados." },
  { ...ALVORADA, width: 1440, height: 960, alt: "Captura real da abertura da landing page demonstrativa Alvorada, com identidade azul e dourada e chamada para testar o formulário.", note: "Captura da landing page desenvolvida pela equipe. Empresa, empreendimento e condições são fictícios." },
  { ...ODONTOHUB, width: 1425, height: 940, alt: "Visão geral real do projeto demonstrativo OdontoHub, com agenda e indicadores fictícios.", note: "Desenvolvimento interno com dados fictícios. Uma demonstração de interface e personalização." },
];

export function PortfolioSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <section id="portfolio" className="home-light home-portfolio py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-2xl mb-10">
          <span className="badge mb-4">{t("Feito pela nossa equipe")}</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl mb-4">{t("Conheça o cuidado ")}<span className="text-gradient">{t("na prática.")}</span></h2>
          <p className="text-gray-300 text-base md:text-lg">{t("Explore projetos demonstrativos criados pela nossa equipe, no computador e no celular.")}</p>
        </div>
        <div className="portfolio-grid">
          {projects.map((project) => (
            <Link key={project.href} href={localizedHref(project.href, locale)} className="work-card" aria-label={t(`Conhecer o projeto demonstrativo ${project.title}`)}>
              <div className="work-art">
                <div className="work-desktop"><Image src={`${BASE_PATH}${project.cover}`} alt={t(project.alt)} width={project.width} height={project.height} sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw" /></div>
                <div className="work-phone"><Image src={`${BASE_PATH}${project.cover.replace("visao-geral.webp", "mobile.webp")}`} alt="" width={375} height={812} sizes="100px" /></div>
              </div>
              <div className="work-meta"><span>{t(project.category)}</span><h3>{t(project.title)}<ArrowRight size={20} aria-hidden="true" /></h3></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
