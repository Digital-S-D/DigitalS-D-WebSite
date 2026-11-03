import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { FaqList } from "@/components/sections/FaqList";
import { FAQ_ITEMS } from "@/lib/offers";

const description = "Saiba como a equipe Digital S&D acompanha seu projeto, qual o prazo de resposta e como atualizar seu site. Dúvidas sobre orçamento, conteúdo, entrega e suporte.";
export const metadata = pageMetadata(
  "/perguntas-frequentes/",
  "Perguntas frequentes | Digital S&D",
  description,
);

export default function FaqPage() {
  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-custom max-w-4xl">
          <Link href="/" className="inline-flex text-sm text-blue-300 py-3 mb-5 underline underline-offset-4">Início</Link>
          <div className="max-w-3xl mb-10">
            <span className="badge mb-4">Clareza para contratar</span>
            <h1 className="font-sora font-bold text-4xl md:text-5xl mb-5">Perguntas <span className="text-gradient">frequentes</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed">Da escolha do site ao que acontece depois da entrega. Encontre aqui o que vale conversar antes de começar.</p>
            <p className="text-gray-300 mt-4"><Link href="/atendimento" className="text-blue-300 underline underline-offset-4">Veja como funciona o acompanhamento</Link>, da coleta de materiais às solicitações depois da entrega.</p>
            <p className="text-gray-400 text-sm mt-4">Valores, prazos e condições de cada projeto são formalizados em proposta escrita, conforme nossos <Link href="/termos" className="text-blue-300 underline">termos de uso</Link>.</p>
          </div>
          <nav aria-label="Assuntos das perguntas frequentes" className="flex flex-wrap gap-2 mb-12">
            {categories.map((category, index) => <a key={category} href={`#assunto-${index + 1}`} className="px-4 py-3 rounded-full border border-white/20 text-sm text-gray-200 hover:bg-white/10">{category}</a>)}
          </nav>
          {categories.map((category, index) => (
            <section key={category} id={`assunto-${index + 1}`} className="mb-12">
              <h2 className="font-sora font-semibold text-xl md:text-2xl mb-5">{category}</h2>
              <FaqList items={FAQ_ITEMS.filter((item) => item.category === category)} />
            </section>
          ))}
          <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-6 md:p-8">
            <h2 className="font-sora font-semibold text-2xl mb-3">Vamos falar do seu projeto?</h2>
            <p className="text-gray-300 mb-6">Conte o que você quer apresentar e qual é o próximo passo que espera do seu cliente.</p>
            <div className="flex flex-wrap gap-4"><Link href="/#contato" className="btn-primary">Conversar sobre um orçamento <ArrowRight size={17} aria-hidden="true" /></Link><Link href="/portfolio/odontohub" className="btn-outline">Conhecer o OdontoHub</Link></div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
