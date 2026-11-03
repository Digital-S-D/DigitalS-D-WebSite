import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";
import { ALVORADA, ODONTOHUB } from "@/lib/portfolio";

const projects = [
  { ...ALVORADA, width: 1425, height: 940, alt: "Captura real da abertura da landing page demonstrativa Alvorada, com identidade azul e dourada e chamada para visita.", note: "Captura da landing page desenvolvida pela equipe. Empresa, empreendimento e condições são fictícios." },
  { ...ODONTOHUB, width: 1425, height: 940, alt: "Visão geral real do projeto demonstrativo OdontoHub, com agenda e indicadores fictícios.", note: "Desenvolvimento interno com dados fictícios. Uma demonstração de interface e personalização." },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-brand-navy">
      <div className="container-custom">
        <div className="max-w-2xl mb-10">
          <span className="badge mb-4">Feito pela nossa equipe</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Conheça o cuidado <span className="text-gradient">na prática.</span></h2>
          <p className="text-gray-300 text-base md:text-lg">De uma landing page a um sistema web: projetos demonstrativos que mostram nosso cuidado com a apresentação, a navegação e a identidade de cada negócio.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Link key={project.href} href={project.href} aria-label={`Conhecer o projeto demonstrativo ${project.title}`} className="group flex flex-col rounded-2xl border border-white/15 bg-[#101e35] overflow-hidden hover:border-blue-400/60 transition-colors">
              <div className="p-4 md:p-6 bg-gradient-to-br from-blue-500/10 to-transparent">
                <Image src={`${BASE_PATH}${project.cover}`} alt={project.alt} width={project.width} height={project.height} sizes="(min-width: 1280px) 560px, (min-width: 768px) 50vw, 100vw" className="w-full aspect-[3/2] object-cover object-top rounded-lg border border-white/20" />
              </div>
              <div className="p-6 md:p-8 pt-2 flex flex-col flex-1">
                <span className="text-blue-300 text-xs font-medium uppercase tracking-wider mb-4">{project.category}</span>
                <h3 className="font-sora font-bold text-2xl mb-4">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed mb-5">{project.description}</p>
                <p className="text-gray-400 text-sm mb-7">{project.note}</p>
                <span className="inline-flex items-center gap-2 text-blue-300 font-semibold group-hover:underline mt-auto">Conhecer o projeto <ArrowRight size={18} aria-hidden="true" /></span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
