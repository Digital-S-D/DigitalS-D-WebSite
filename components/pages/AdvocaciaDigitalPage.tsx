
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import CaseProjectDetails from "@/components/sections/CaseProjectDetails";
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
  { url: ADVOCACIA_DIGITAL.cover, width: 1425, height: 940, alt: "Captura real do site institucional demonstrativo Advocacia Digital" },
);

const imageRoot = `${BASE_PATH}/images/portfolio/advocacia-digital`;

export default function AdvocaciaDigitalPage({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <>
      <Header locale={locale} />
      <main id="conteudo" tabIndex={-1}>
        <section className="pt-28 md:pt-36 pb-16 bg-grid">
          <div className="container-custom">
            <Link href={localizedHref("/#portfolio", locale)} className="inline-flex py-3 mb-5 text-sm text-blue-300 underline underline-offset-4">{t("Voltar aos projetos")}</Link>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="badge mb-5">{t(ADVOCACIA_DIGITAL.category)}</span>
                <h1 className="font-sora font-bold text-4xl md:text-5xl mb-5">{t("Advocacia Digital")}<span className="block text-gradient text-2xl md:text-3xl mt-4">{t("Uma apresentação clara, da primeira visita ao contato.")}</span></h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{t("Um conceito de site institucional que organiza serviços, equipe e conteúdo em uma identidade visual sóbria. A navegação ajuda o visitante a explorar cada área e encontrar o próximo passo.")}</p>
                <p className="text-sm text-blue-200 border-l-2 border-blue-400 pl-4 mb-7">{t("Desenvolvido pela Digital S&D como demonstração. Escritório, pessoas e conteúdo são fictícios. Não oferece atendimento jurídico e o formulário apenas simula o preenchimento, sem enviar solicitações.")}</p>
                <Link href={localizedHref(quoteHref("Site Institucional"), locale)} className="btn-primary">{t("Quero um site institucional ")}<ArrowRight size={17} aria-hidden="true" /></Link>
              </div>
              <figure>
                <a href={localizedHref(`${BASE_PATH}${ADVOCACIA_DIGITAL.cover}`, locale)} aria-label={t("Ampliar captura da abertura da Advocacia Digital")} className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${BASE_PATH}${ADVOCACIA_DIGITAL.cover}`} alt={t("Abertura real da demonstração Advocacia Digital no desktop, com tipografia editorial, chamadas de navegação e aviso de escritório fictício.")} width={1425} height={940} preload sizes="(min-width: 1024px) 560px, 100vw" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">{t("Captura do projeto em execução. Os números descrevem os elementos da demonstração, sem representar clientes ou resultados. Toque para ampliar.")}</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <CaseProjectDetails locale={locale} slug="advocacia-digital" />
        <section className="py-16 md:py-24" id="telas" aria-labelledby="advocacia-navegacao">
          <div className="container-custom">
            <div className="max-w-3xl mb-10">
              <span className="badge mb-4">{t("Estrutura e navegação")}</span>
              <h2 id="advocacia-navegacao" className="font-sora font-semibold text-3xl mb-5">{t("Informação organizada para quem está chegando.")}</h2>
              <p className="text-gray-300 leading-relaxed">{t("As páginas de serviços se conectam aos perfis e aos conteúdos relacionados. No celular, o menu reúne os caminhos principais e os blocos se reorganizam para leitura em uma coluna.")}</p>
            </div>
            <div className="grid md:grid-cols-[1fr_260px] gap-8 items-start">
              <figure>
                <a href={localizedHref(`${imageRoot}/areas.webp`, locale)} aria-label={t("Ampliar captura das áreas de atuação")} className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${imageRoot}/areas.webp`} alt={t("Página real de áreas de atuação da demonstração, com cartões de serviços e links para páginas específicas.")} width={1425} height={940} sizes="(min-width: 768px) 70vw, 100vw" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">{t("Organização dos serviços em cartões, com páginas próprias para detalhar cada área fictícia.")}</figcaption>
              </figure>
              <figure className="max-w-[260px] mx-auto w-full">
                <a href={localizedHref(`${imageRoot}/mobile.webp`, locale)} aria-label={t("Ampliar captura da Advocacia Digital no celular")} className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300">
                  <Image src={`${imageRoot}/mobile.webp`} alt={t("Abertura real do projeto no celular, com menu compacto, título, aviso demonstrativo e botão para simular o contato.")} width={375} height={812} sizes="260px" className="w-full h-auto rounded-xl border border-white/20" />
                </a>
                <figcaption className="text-gray-400 text-sm mt-3">{t("Versão mobile da demonstração.")}</figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="py-14 md:py-20 bg-brand-black">
          <div className="container-custom grid md:grid-cols-2 gap-10 md:gap-16">
            <div><span className="text-blue-300 text-sm">{t("Identidade visual")}</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">{t("Sobriedade com espaço para a leitura.")}</h2><p className="text-gray-300 leading-relaxed">{t("Tons de papel, azul profundo e bordô acompanham títulos de inspiração editorial. A hierarquia dos textos e os espaços entre blocos ajudam a percorrer uma apresentação com várias páginas.")}</p></div>
            <div><span className="text-blue-300 text-sm">{t("O que foi desenvolvido")}</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">{t("Uma base institucional completa para explorar.")}</h2><ul className="list-disc pl-5 space-y-3 text-gray-300">{["Páginas de apresentação, serviços e perfis fictícios", "Blog e notícias com amostras de conteúdo local", "Perguntas frequentes que podem ser abertas pelo teclado", "Menu mobile com fechamento por Escape", "Formulário demonstrativo com validação e foco no campo com erro"].map((text) => <li key={text}>{t(text)}</li>)}</ul></div>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container-custom grid lg:grid-cols-2 gap-10 items-center">
            <figure>
              <a href={localizedHref(`${imageRoot}/contato.webp`, locale)} aria-label={t("Ampliar captura do formulário demonstrativo")} className="block rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-300"><Image src={`${imageRoot}/contato.webp`} alt={t("Página de contato real da demonstração, com aviso de simulação sem envio, campos identificados e canais de atendimento não conectados.")} width={1425} height={940} sizes="(min-width: 1024px) 560px, 100vw" className="w-full h-auto rounded-xl border border-white/20" /></a>
              <figcaption className="text-gray-400 text-sm mt-3">{t("O formulário demonstra a interação. Nenhuma consulta é recebida ou agendada.")}</figcaption>
            </figure>
            <div><span className="badge mb-4">{t("Um contato com contexto")}</span><h2 className="font-sora font-semibold text-3xl mb-5">{t("O próximo passo precisa ser compreensível.")}</h2><p className="text-gray-300 leading-relaxed mb-5">{t("Os rótulos orientam o preenchimento e a validação indica o primeiro campo que precisa de atenção. A confirmação explica que a simulação terminou, sem prometer um atendimento que não existe.")}</p><p className="text-gray-400 text-sm mb-5">{t("Uma implantação real exige conteúdo e credenciais verificados, revisão jurídica, canais autorizados e integração de envio testada. A demonstração usa conteúdo local e não tem CMS conectado.")}</p><a href={localizedHref(ADVOCACIA_DIGITAL.repository, locale)} className="inline-flex py-3 text-blue-300 underline underline-offset-4">{t("Ver o código do projeto no GitHub")}</a></div>
          </div>
        </section>
        <section className="pb-16 md:pb-24"><div className="container-custom"><div className="rounded-2xl bg-brand-blue/10 border border-brand-blue/30 p-6 md:p-10"><h2 className="font-sora font-bold text-2xl md:text-3xl mb-4">{t("Como apresentar os serviços do seu negócio?")}</h2><p className="text-gray-300 max-w-2xl mb-6">{t("Planejamos a estrutura, o conteúdo e a identidade do site conforme a sua atuação. Podemos conversar sobre o que seus clientes precisam encontrar e quais canais farão parte do projeto.")}</p><div className="flex flex-wrap gap-3"><Link href={localizedHref(quoteHref("Site Institucional"), locale)} className="btn-primary">{t("Conversar sobre meu site ")}<ArrowRight size={17} aria-hidden="true" /></Link><Link href={localizedHref("/#portfolio", locale)} className="btn-outline">{t("Ver outros projetos")}</Link></div></div></div></section>
      </main>
      <Footer locale={locale} />
    </>
  );
}
