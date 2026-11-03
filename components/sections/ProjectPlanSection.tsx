import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BASE_PATH, TEAM_MEMBERS } from "@/lib/constants";
import { PROJECT_AGREEMENTS } from "@/lib/offers";

export function ProjectPlanSection() {
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-brand-black">
      <div className="container-custom">
        <span className="badge mb-4">Da conversa à entrega</span>
        <h2 className="font-sora font-bold text-3xl md:text-4xl mb-10">Você sabe o que acontece <span className="text-gradient">em cada etapa.</span></h2>
        <ol className="grid md:grid-cols-3 gap-8">
          {PROJECT_AGREEMENTS.map((item, index) => <li key={item.title} className="border-t border-white/20 pt-5"><span className="text-blue-300 text-sm">0{index + 1}</span><h3 className="font-sora font-semibold text-xl my-3">{item.title}</h3><p className="text-gray-300 leading-relaxed">{item.description}</p></li>)}
        </ol>
        <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2 shrink-0">{TEAM_MEMBERS.map((member) => <Image key={member.name} src={`${BASE_PATH}/images/team/${member.photoSrc}`} alt={member.name} width={56} height={56} className="w-14 h-14 object-cover rounded-full border-2 border-brand-black" />)}</div>
            <p className="text-gray-300 text-sm max-w-sm"><span className="text-white font-semibold">Alvaro e Arthur, fundadores da Digital S&D.</span><br />Conheça as pessoas por trás do seu próximo projeto.</p>
          </div>
          <Link href="/sobre" className="inline-flex items-center gap-2 py-3 text-blue-300 underline underline-offset-4">Conhecer a equipe e o processo <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
