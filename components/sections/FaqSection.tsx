import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/offers";
import { FaqList } from "./FaqList";

export function FaqSection() {
  return (
    <section id="duvidas" className="py-16 md:py-24 bg-brand-navy">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <span className="badge mb-4">Antes de contratar</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4">Vamos tirar <span className="text-gradient">suas dúvidas.</span></h2>
          <p className="text-gray-300 mb-8">Entenda como escolher o formato e o que combinar para o seu projeto começar com clareza.</p>
          <FaqList items={FAQ_ITEMS.filter((item) => item.home)} />
          <Link href="/perguntas-frequentes" className="inline-flex gap-2 items-center text-blue-300 py-4 mt-4 underline underline-offset-4">Ver todas as perguntas <ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
