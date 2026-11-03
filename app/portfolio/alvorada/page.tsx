import { pageMetadata } from "@/lib/seo";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { BASE_PATH } from "@/lib/constants";
import { ALVORADA } from "@/lib/portfolio";
import { quoteHref } from "@/lib/offers";

const title = "Construtora Alvorada — landing page demonstrativa | Digital S&D";
const description = "Conheça a Alvorada: projeto demonstrativo de landing page imobiliária da Digital S&D, com identidade visual, apresentação dos apartamentos e jornada de contato.";
export const metadata = pageMetadata(
  "/portfolio/alvorada/",
  title,
  description,
  { url: ALVORADA.cover, width: 1425, height: 940, alt: "Captura real da landing page demonstrativa Alvorada" },
);

export default function AlvoradaPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section className="pt-28 md:pt-36 pb-16 bg-grid">
          <div className="container-custom">
            <Link href="/#portfolio" className="inline-flex py-3 mb-5 text-sm text-blue-300 underline underline-offset-4">Voltar aos projetos</Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="badge mb-5">Projeto demonstrativo · Landing page</span>
                <h1 className="font-sora font-bold text-4xl md:text-5xl mb-5">Construtora Alvorada<span className="block text-gradient text-2xl md:text-3xl mt-4">Uma apresentação à altura do empreendimento.</span></h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">Uma landing page que organiza os diferenciais, as opções de apartamentos e as dúvidas de quem está considerando um novo imóvel.</p>
                <p className="text-sm text-blue-200 border-l-2 border-blue-400 pl-4 mb-7">Conceito desenvolvido pela Digital S&D. Empresa, empreendimento, depoimentos e condições são fictícios. O formulário é demonstrativo e não envia solicitações.</p>
                <Link href={quoteHref("Landing Page")} className="btn-primary">Quero uma landing page <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
              <figure>
                <a href={`${BASE_PATH}${ALVORADA.cover}`} aria-label="Ampliar captura da abertura da Alvorada" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${BASE_PATH}${ALVORADA.cover}`} alt="Captura real da Alvorada no computador: título, botões de contato e ilustração arquitetônica na identidade azul e dourada." width={1425} height={940} priority sizes="(min-width: 1024px) 560px, 100vw" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">Abertura da landing page em execução. Os números, prazos e condições exibidos pertencem ao cenário fictício da demonstração. Toque na imagem para ampliar.</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24" aria-labelledby="alvorada-telas">
          <div className="container-custom">
            <div className="max-w-3xl mb-10">
              <span className="badge mb-4">Capturas da interface</span>
              <h2 id="alvorada-telas" className="font-sora font-semibold text-3xl mb-5">A mesma oferta, em telas diferentes.</h2>
              <p className="text-gray-300 leading-relaxed">No computador, as opções de apartamentos aparecem lado a lado. No celular, o conteúdo é reorganizado e a chamada para visita permanece ao alcance. As capturas mostram o projeto original em funcionamento.</p>
            </div>
            <div className="grid md:grid-cols-[1fr_260px] gap-8 items-start">
              <figure>
                <a href={`${BASE_PATH}/images/portfolio/alvorada/apartamentos.webp`} aria-label="Ampliar captura da apresentação dos apartamentos" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${BASE_PATH}/images/portfolio/alvorada/apartamentos.webp`} alt="Captura real da seção de apartamentos, com duas opções de metragem e características organizadas em cartões." width={1425} height={940} sizes="(min-width: 768px) 70vw, 100vw" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">Apresentação de metragens, características e valores ilustrativos. Não é uma oferta imobiliária real.</figcaption>
              </figure>
              <figure className="max-w-[260px] mx-auto w-full">
                <a href={`${BASE_PATH}/images/portfolio/alvorada/mobile.webp`} aria-label="Ampliar captura da Alvorada no celular" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${BASE_PATH}/images/portfolio/alvorada/mobile.webp`} alt="Captura real da abertura da Alvorada no celular, com título, botões e chamada fixa para visita." width={375} height={812} sizes="260px" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">Versão mobile da demonstração.</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="py-14 md:py-20 bg-brand-black">
          <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
            <div><span className="text-blue-300 text-sm">A proposta</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">Da primeira impressão ao interesse.</h2><p className="text-gray-300 leading-relaxed">O projeto explora uma jornada para apresentar um lançamento imobiliário: primeiro a proposta do empreendimento, depois os diferenciais e as opções de apartamentos, seguidos das dúvidas frequentes e do convite ao contato.</p></div>
            <div><span className="text-blue-300 text-sm">O que foi desenvolvido</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">Conteúdo com uma direção clara.</h2><ul className="list-disc pl-5 space-y-3 text-gray-300">{["Identidade visual com referências ao desenho arquitetônico", "Apresentação de metragens e características dos apartamentos", "Perguntas frequentes organizadas em acordeão", "Layout com adaptações para desktop e celular", "Formulário com validação e simulação de confirmação"].map((text) => <li key={text}>{text}</li>)}</ul></div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container-custom grid md:grid-cols-2 gap-10 items-center">
            <figure><Image src={`${BASE_PATH}/images/portfolio/alvorada/interior.svg`} alt="Ilustração de um ambiente interno utilizada na landing page Alvorada." width={600} height={375} sizes="(min-width: 768px) 560px, 100vw" className="w-full h-auto rounded-xl border border-white/20" /><figcaption className="text-gray-400 text-sm mt-3">Ilustração de interior extraída do projeto. Não representa um imóvel real ou um vídeo.</figcaption></figure>
            <div><span className="badge mb-4">Identidade visual</span><h2 className="font-sora font-semibold text-3xl mb-5">Arquitetura também na linguagem visual.</h2><p className="text-gray-300 leading-relaxed mb-5">Azul profundo, dourado e tons claros compõem a identidade. Ilustrações vetoriais, linhas de referência e detalhes inspirados em desenhos técnicos aproximam a apresentação do universo da construção.</p><p className="text-gray-400 text-sm">As imagens desta página são elementos visuais originais da landing page. O projeto demonstra uma proposta de apresentação; não representa resultados de vendas ou uma campanha de cliente.</p></div>
          </div>
        </section>
        <section className="pb-16 md:pb-24"><div className="container-custom"><div className="rounded-2xl bg-brand-blue/10 border border-brand-blue/30 p-6 md:p-10"><h2 className="font-sora font-bold text-2xl md:text-3xl mb-4">Como apresentar a sua próxima oferta?</h2><p className="text-gray-300 max-w-2xl mb-6">Podemos planejar uma landing page para o seu negócio, com conteúdo, identidade visual e canais de contato definidos conforme a campanha.</p><div className="flex flex-wrap gap-3"><Link href={quoteHref("Landing Page")} className="btn-primary">Conversar sobre minha landing page <ArrowRight size={17} aria-hidden="true" /></Link><Link href="/#portfolio" className="btn-outline">Ver outros projetos</Link></div></div></div></section>
      </main>
      <Footer />
    </>
  );
}
