
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
    <section id="portfolio" className="py-16 md:py-24 bg-brand-navy">
      <div className="container-custom">
        <div className="max-w-2xl mb-10">
          <span className="badge mb-4">{t("Feito pela nossa equipe")}</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl mb-4">{t("Conheça o cuidado ")}<span className="text-gradient">{t("na prática.")}</span></h2>
          <p className="text-gray-300 text-base md:text-lg">{t("De uma landing page a um sistema web: projetos demonstrativos que mostram nosso cuidado com a apresentação, a navegação e a identidade de cada negócio.")}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Link key={project.href} href={localizedHref(project.href, locale)} aria-label={t(`Conhecer o projeto demonstrativo ${project.title}`)} className="portfolio-card group flex flex-row md:flex-col rounded-2xl border border-white/15 bg-[#101e35] overflow-hidden hover:border-blue-400/60 transition-colors">
              <div className="w-24 shrink-0 p-3 md:w-auto md:p-6 bg-gradient-to-br from-blue-500/10 to-transparent">
                <Image src={`${BASE_PATH}${project.cover}`} alt={t(project.alt)} width={project.width} height={project.height} sizes="(min-width: 1280px) 360px, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 96px" className="w-full aspect-[3/2] object-cover object-top rounded-lg border border-white/20" />
              </div>
              <div className="min-w-0 p-3 pl-0 md:p-6 md:pt-2 flex flex-col flex-1">
                <span className="text-blue-300 text-xs font-medium uppercase tracking-wider mb-1 md:mb-4">{t(project.category)}</span>
                <h3 className="font-sora font-bold text-lg md:text-2xl mb-1 md:mb-4">{t(project.title)}</h3>
                <p className="hidden md:block text-gray-300 leading-relaxed mb-5">{t(project.description)}</p>
                <p className="hidden md:block text-gray-400 text-sm mb-7">{t(project.note)}</p>
                <span className="text-sm text-gray-300 md:hidden">{t("Projeto demonstrativo")}</span>
                <span className="hidden md:inline-flex items-center gap-2 text-blue-300 font-semibold group-hover:underline mt-auto">{t("Conhecer o projeto ")}<ArrowRight size={18} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
