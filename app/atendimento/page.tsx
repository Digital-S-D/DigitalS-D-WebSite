import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { ArrowRight, Check, Mail, MessageCircle } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { COMPANY, LINKS } from "@/lib/constants";
import { CUSTOMER_CARE, CUSTOMER_JOURNEY, HELP_REQUEST, UPDATE_OPTIONS } from "@/lib/customer-care";

const title = "Atendimento e acompanhamento | Digital S&D";
const description = "Entenda quem acompanha seu projeto, como reunir materiais e aprovar as etapas, e como atualizar seu site depois. Primeira resposta em até 1 dia útil.";

export const metadata = pageMetadata(
  "/atendimento/",
  title,
  description,
);

export default function CustomerCarePage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-grid">
          <div className="container-custom">
            <Link href="/" className="inline-flex py-3 mb-5 text-sm text-blue-300 underline underline-offset-4">Início</Link>
            <div className="max-w-3xl">
              <span className="badge mb-5">Como funciona o acompanhamento</span>
              <h1 className="font-sora font-bold text-3xl sm:text-4xl md:text-5xl mb-5">
                Você não precisa <span className="text-gradient">entender de tecnologia.</span>
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Conte sobre o seu negócio. A equipe orienta as escolhas, ajuda a organizar os materiais
                e explica o que você precisa revisar em cada etapa do site.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                <Link href="/#contato" className="btn-primary justify-center">Conversar sobre meu site <ArrowRight size={17} aria-hidden="true" /></Link>
                <a href="#etapas" className="btn-outline justify-center">Ver as etapas</a>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mt-10 md:mt-12">
              <div className="rounded-2xl border border-white/15 bg-brand-navy p-6">
                <h2 className="font-sora font-semibold text-lg mb-3">Quem atende você</h2>
                <p className="text-gray-300 leading-relaxed">{CUSTOMER_CARE.coordination}</p>
                <Link href="/sobre" className="inline-flex py-3 mt-2 text-blue-300 underline underline-offset-4">Conhecer a equipe</Link>
              </div>
              <div className="rounded-2xl border border-blue-400/30 bg-brand-blue/10 p-6">
                <h2 className="font-sora font-semibold text-lg mb-3">Primeira resposta em até 1 dia útil</h2>
                <p className="text-gray-300 leading-relaxed">{CUSTOMER_CARE.replyDescription} Você pode enviar sua mensagem a qualquer momento.</p>
                <a href="#ajuda" className="inline-flex py-3 mt-2 text-blue-300 underline underline-offset-4">Entender como pedir ajuda</a>
              </div>
            </div>
          </div>
        </section>
        <section id="etapas" className="py-14 md:py-20 bg-brand-black">
          <div className="container-custom">
            <div className="max-w-2xl mb-10">
              <span className="badge mb-4">Da primeira conversa à entrega</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4">O próximo passo fica claro.</h2>
              <p className="text-gray-300 leading-relaxed">Veja o que a equipe faz e como você participa. As páginas, os recursos e as condições específicas do seu projeto ficam registrados na proposta.</p>
            </div>
            <ol className="space-y-6">
              {CUSTOMER_JOURNEY.map((step, index) => (
                <li key={step.title} className="rounded-2xl border border-white/15 p-5 md:p-8">
                  <div className="flex items-start gap-3 mb-5">
                    <span className="text-blue-300 font-sora text-lg shrink-0">0{index + 1}</span>
                    <h3 className="font-sora font-semibold text-xl md:text-2xl">{step.title}</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5 md:gap-10">
                    <div><h4 className="text-blue-300 font-semibold mb-2">O que fazemos</h4><p className="text-gray-300 leading-relaxed">{step.team}</p></div>
                    <div><h4 className="text-white font-semibold mb-2">Como você participa</h4><p className="text-gray-300 leading-relaxed">{step.client}</p></div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section id="atualizacoes" className="py-14 md:py-20">
          <div className="container-custom">
            <div className="max-w-2xl mb-10">
              <span className="badge mb-4">Depois da entrega</span>
              <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4">Como atualizar seu site.</h2>
              <p className="text-gray-300 leading-relaxed">Uma foto nova, um preço ou o horário do negócio: a forma de fazer essas mudanças é combinada antes da contratação, de acordo com sua rotina.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {UPDATE_OPTIONS.map((option) => (
                <article key={option.title} className="rounded-2xl border border-white/15 p-6 md:p-8">
                  <h3 className="font-sora font-semibold text-2xl mb-3">{option.title}</h3>
                  <p className="text-blue-300 text-sm mb-5">{option.condition}</p>
                  <p className="text-gray-300 leading-relaxed mb-6">{option.description}</p>
                  <ul className="space-y-3">{option.details.map((detail) => <li key={detail} className="flex items-start gap-3 text-gray-300 text-sm"><Check size={17} className="shrink-0 text-blue-300 mt-0.5" aria-hidden="true" />{detail}</li>)}</ul>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="ajuda" className="py-14 md:py-20 bg-brand-black">
          <div className="container-custom grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-16">
            <div>
              <span className="badge mb-4">Dúvidas e solicitações</span>
              <h2 className="font-sora font-bold text-3xl mb-6">Como pedir ajuda.</h2>
              <ol className="space-y-5 mb-7">{HELP_REQUEST.map((step, index) => <li key={step} className="flex items-start gap-3 text-gray-300"><span className="text-blue-300 shrink-0 font-semibold">{index + 1}.</span>{step}</li>)}</ol>
              <p className="text-gray-300 leading-relaxed border-l-2 border-blue-400 pl-4">{CUSTOMER_CARE.responseAndDelivery}</p>
              <p className="text-gray-400 text-sm leading-relaxed mt-5">O período e o escopo do suporte à entrega seguem a proposta. Atualizações de conteúdo, novas páginas e novas funcionalidades são avaliadas conforme o serviço contratado.</p>
            </div>
            <div className="rounded-2xl border border-blue-400/30 bg-brand-blue/10 p-6 md:p-8 self-start min-w-0">
              <h3 className="font-sora font-semibold text-2xl mb-4">Fale com a equipe</h3>
              <p className="text-gray-300 mb-6">{CUSTOMER_CARE.replyDescription}</p>
              <div className="flex flex-col items-stretch gap-3">
                <a href={LINKS.whatsappOrcamento} target="_blank" rel="noopener noreferrer" className="btn-primary justify-center"><MessageCircle size={18} aria-hidden="true" />Conversar pelo WhatsApp</a>
                <a href={`mailto:${COMPANY.email}`} className="inline-flex items-center gap-2 py-3 text-blue-300 underline underline-offset-4 text-sm break-all"><Mail size={17} className="shrink-0" aria-hidden="true" />{COMPANY.email}</a>
                <Link href="/perguntas-frequentes" className="inline-flex items-center gap-2 py-3 text-blue-300 underline underline-offset-4">Ver perguntas frequentes <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
