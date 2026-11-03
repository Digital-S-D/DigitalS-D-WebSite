import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BASE_PATH } from "@/lib/constants";
import { ODONTOHUB } from "@/lib/portfolio";

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-brand-navy">
      <div className="container-custom">
        <div className="max-w-2xl mb-10">
          <span className="badge mb-4">Feito pela nossa equipe</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl lg:text-5xl mb-4">Conheça o cuidado <span className="text-gradient">na prática.</span></h2>
          <p className="text-gray-300 text-base md:text-lg">Além de sites e landing pages, construímos experiências para necessidades específicas. Este projeto interno mostra como organizamos informações, fluxos e identidade visual.</p>
        </div>
        <Link href={ODONTOHUB.href} aria-label="Conhecer o projeto demonstrativo OdontoHub" className="group grid lg:grid-cols-[1.35fr_1fr] rounded-2xl border border-white/15 bg-[#101e35] overflow-hidden hover:border-blue-400/60 transition-colors">
          <div className="p-4 md:p-7 bg-gradient-to-br from-blue-500/10 to-transparent flex items-center">
            <Image src={`${BASE_PATH}${ODONTOHUB.cover}`} alt="Visão geral real do projeto demonstrativo OdontoHub, com agenda e indicadores fictícios." width={1425} height={940} sizes="(min-width: 1024px) 700px, 100vw" className="w-full h-auto rounded-lg border border-white/20" />
          </div>
          <div className="p-6 md:p-8 lg:py-12 flex flex-col justify-center">
            <span className="text-blue-300 text-xs font-medium uppercase tracking-wider mb-4">{ODONTOHUB.category}</span>
            <h3 className="font-sora font-bold text-3xl mb-4">{ODONTOHUB.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-5">{ODONTOHUB.description}</p>
            <p className="text-gray-400 text-sm mb-7">Desenvolvimento interno com dados fictícios. Uma demonstração de interface e personalização.</p>
            <span className="inline-flex items-center gap-2 text-blue-300 font-semibold group-hover:underline">Conhecer o projeto <ArrowRight size={18} aria-hidden="true" /></span>
          </div>
        </Link>
      </div>
    </section>
  );
}
