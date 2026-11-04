import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { BASE_PATH } from "@/lib/constants";
import { ADVOCACIA_DIGITAL } from "@/lib/portfolio";
import { quoteHref } from "@/lib/offers";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "/portfolio/advocacia-digital/",
  "Advocacia Digital — site institucional demonstrativo | Digital S&D",
  "Conheça o projeto demonstrativo Advocacia Digital: site institucional da Digital S&D com áreas de atuação, perfis fictícios, conteúdo editorial e navegação mobile.",
  { url: ADVOCACIA_DIGITAL.cover, width: 1425, height: 930, alt: "Captura real do site institucional demonstrativo Advocacia Digital" },
);

const imageRoot = `${BASE_PATH}/images/portfolio/advocacia-digital`;

export default function AdvocaciaDigitalPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section className="pt-28 md:pt-36 pb-16 bg-grid">
          <div className="container-custom">
            <Link href="/#portfolio" className="inline-flex py-3 mb-5 text-sm text-blue-300 underline underline-offset-4">Voltar aos projetos</Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="badge mb-5">{ADVOCACIA_DIGITAL.category}</span>
                <h1 className="font-sora font-bold text-4xl md:text-5xl mb-5">Advocacia Digital<span className="block text-gradient text-2xl md:text-3xl mt-4">Uma apresentação clara, da primeira visita ao contato.</span></h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">Um conceito de site institucional que organiza serviços, equipe e conteúdo em uma identidade visual sóbria. A navegação ajuda o visitante a explorar cada área e encontrar o próximo passo.</p>
                <p className="text-sm text-blue-200 border-l-2 border-blue-400 pl-4 mb-7">Desenvolvido pela Digital S&D como demonstração. Escritório, pessoas e conteúdo são fictícios. Não oferece atendimento jurídico e o formulário apenas simula o preenchimento, sem enviar solicitações.</p>
                <Link href={quoteHref("Site Institucional")} className="btn-primary">Quero um site institucional <ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
              <figure>
                <a href={`${BASE_PATH}${ADVOCACIA_DIGITAL.cover}`} aria-label="Ampliar captura da abertura da Advocacia Digital" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${BASE_PATH}${ADVOCACIA_DIGITAL.cover}`} alt="Abertura real da demonstração Advocacia Digital no desktop, com tipografia editorial, chamadas de navegação e aviso de escritório fictício." width={1425} height={930} preload sizes="(min-width: 1024px) 560px, 100vw" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">Captura do projeto em execução. Os números descrevem os elementos da demonstração, sem representar clientes ou resultados. Toque para ampliar.</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="py-16 md:py-24" aria-labelledby="advocacia-navegacao">
          <div className="container-custom">
            <div className="max-w-3xl mb-10">
              <span className="badge mb-4">Estrutura e navegação</span>
              <h2 id="advocacia-navegacao" className="font-sora font-semibold text-3xl mb-5">Informação organizada para quem está chegando.</h2>
              <p className="text-gray-300 leading-relaxed">As páginas de serviços se conectam aos perfis e aos conteúdos relacionados. No celular, o menu reúne os caminhos principais e os blocos se reorganizam para leitura em uma coluna.</p>
            </div>
            <div className="grid md:grid-cols-[1fr_260px] gap-8 items-start">
              <figure>
                <a href={`${imageRoot}/areas.webp`} aria-label="Ampliar captura das áreas de atuação" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${imageRoot}/areas.webp`} alt="Página real de áreas de atuação da demonstração, com cartões de serviços e links para páginas específicas." width={1425} height={930} sizes="(min-width: 768px) 70vw, 100vw" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">Organização dos serviços em cartões, com páginas próprias para detalhar cada área fictícia.</figcaption>
              </figure>
              <figure className="max-w-[260px] mx-auto w-full">
                <a href={`${imageRoot}/mobile.webp`} aria-label="Ampliar captura da Advocacia Digital no celular" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${imageRoot}/mobile.webp`} alt="Abertura real do projeto no celular, com menu compacto, título, aviso demonstrativo e botão para simular o contato." width={375} height={812} sizes="260px" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">Versão mobile da demonstração.</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="py-14 md:py-20 bg-brand-black">
          <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
            <div><span className="text-blue-300 text-sm">Identidade visual</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">Sobriedade com espaço para a leitura.</h2><p className="text-gray-300 leading-relaxed">Tons de papel, azul profundo e bordô acompanham títulos de inspiração editorial. A hierarquia dos textos e os espaços entre blocos ajudam a percorrer uma apresentação com várias páginas.</p></div>
            <div><span className="text-blue-300 text-sm">O que foi desenvolvido</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">Uma base institucional completa para explorar.</h2><ul className="list-disc pl-5 space-y-3 text-gray-300">{["Páginas de apresentação, serviços e perfis fictícios", "Blog e notícias com amostras de conteúdo local", "Perguntas frequentes que podem ser abertas pelo teclado", "Menu mobile com fechamento por Escape", "Formulário demonstrativo com validação e foco no campo com erro"].map((text) => <li key={text}>{text}</li>)}</ul></div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
            <figure>
              <a href={`${imageRoot}/contato.webp`} aria-label="Ampliar captura do formulário demonstrativo" className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"><Image src={`${imageRoot}/contato.webp`} alt="Página de contato real da demonstração, com aviso de simulação sem envio, campos identificados e canais de atendimento não conectados." width={1425} height={930} sizes="(min-width: 1024px) 560px, 100vw" className="w-full h-auto rounded-xl border border-white/20" /></a>
              <figcaption className="text-gray-400 text-sm mt-3">O formulário demonstra a interação. Nenhuma consulta é recebida ou agendada.</figcaption>
            </figure>
            <div><span className="badge mb-4">Um contato com contexto</span><h2 className="font-sora font-semibold text-3xl mb-5">O próximo passo precisa ser compreensível.</h2><p className="text-gray-300 leading-relaxed mb-5">Os rótulos orientam o preenchimento e a validação indica o primeiro campo que precisa de atenção. A confirmação explica que a simulação terminou, sem prometer um atendimento que não existe.</p><p className="text-gray-400 text-sm mb-5">Uma implantação real exige conteúdo e credenciais verificados, revisão jurídica, canais autorizados e integração de envio testada. A demonstração usa conteúdo local e não tem CMS conectado.</p><a href={ADVOCACIA_DIGITAL.repository} className="inline-flex py-3 text-blue-300 underline underline-offset-4">Ver o código do projeto no GitHub</a></div>
          </div>
        </section>
        <section className="pb-16 md:pb-24"><div className="container-custom"><div className="rounded-2xl bg-brand-blue/10 border border-brand-blue/30 p-6 md:p-10"><h2 className="font-sora font-bold text-2xl md:text-3xl mb-4">Como apresentar os serviços do seu negócio?</h2><p className="text-gray-300 max-w-2xl mb-6">Planejamos a estrutura, o conteúdo e a identidade do site conforme a sua atuação. Podemos conversar sobre o que seus clientes precisam encontrar e quais canais farão parte do projeto.</p><div className="flex flex-wrap gap-3"><Link href={quoteHref("Site Institucional")} className="btn-primary">Conversar sobre meu site <ArrowRight size={17} aria-hidden="true" /></Link><Link href="/#portfolio" className="btn-outline">Ver outros projetos</Link></div></div></div></section>
      </main>
      <Footer />
    </>
  );
}
