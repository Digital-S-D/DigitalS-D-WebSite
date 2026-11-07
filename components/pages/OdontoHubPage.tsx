
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import CaseProjectDetails from "@/components/sections/CaseProjectDetails";
import { pageMetadata } from "@/lib/seo";
import { ProjectImage, ProjectImageViewer } from "@/components/sections/ProjectImageViewer";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { BASE_PATH } from "@/lib/constants";
import { ODONTOHUB } from "@/lib/portfolio";
import { quoteHref } from "@/lib/offers";

const description = "Conheça o OdontoHub, projeto demonstrativo da Digital S&D com agenda, pacientes e personalização para a rotina odontológica.";
export const metadata = pageMetadata(
  "/portfolio/odontohub/",
  "OdontoHub — projeto demonstrativo | Digital S&D",
  description,
  { url: ODONTOHUB.cover, width: 1425, height: 940, alt: "Interface real do projeto demonstrativo OdontoHub" },
);

export default function OdontoHubPage({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <>
      <Header locale={locale} />
      <ProjectImageViewer locale={locale}>
      <main id="conteudo" tabIndex={-1}>
        <section className="pt-28 md:pt-36 pb-12 md:pb-16 bg-grid">
          <div className="container-custom">
            <Link href={localizedHref("/#portfolio", locale)} className="inline-flex py-3 mb-5 text-sm text-blue-300 underline underline-offset-4">{t("Voltar aos projetos")}</Link>
            <div className="max-w-3xl">
                <span className="badge mb-5">{t("Projeto demonstrativo · Desenvolvimento interno")}</span>
              <h1 className="font-sora font-bold text-4xl md:text-6xl mb-5">{t("OdontoHub")}{t(" ")}<span className="block text-gradient text-2xl md:text-4xl mt-3">{t("A rotina da clínica, em uma experiência conectada.")}</span></h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">{t("Uma vitrine da nossa capacidade de transformar rotinas em interfaces claras: da visão do dia ao contexto do paciente, com identidade visual personalizável.")}</p>
              <p className="text-sm text-blue-200 border-l-2 border-blue-400 pl-4 mb-7">{t("Criado pela equipe Digital S&D para demonstração. Usa dados fictícios. Os dados de negócio ficam na memória da página; apenas cor e tema persistem no navegador. Não é uma implantação em clínica cliente.")}</p>
              <div className="flex flex-wrap gap-3"><a href={localizedHref("#telas", locale)} className="btn-primary">{t("Explorar as telas ")}<ArrowRight size={17} aria-hidden="true" /></a><Link href={localizedHref(quoteHref("Sistema Web personalizado"), locale)} className="btn-outline">{t("Conversar sobre algo parecido")}</Link></div>
            </div>
            <figure className="mt-10 md:mt-12">
              <ProjectImage locale={locale} src={`${BASE_PATH}${ODONTOHUB.cover}`} alt={t("Tela de visão geral do OdontoHub com agenda de pacientes fictícios, visão financeira e atalhos de navegação.")} width={1425} height={940} preload sizes="(min-width: 1280px) 1216px, 100vw" className="rounded-xl border border-white/20 w-full h-auto" />
              <figcaption className="text-gray-400 text-sm mt-3">{t("Visão geral da demonstração. Todos os pacientes, agendamentos e valores são fictícios.")}</figcaption>
            </figure>
          </div>
        </section>
        <CaseProjectDetails locale={locale} slug="odontohub" />
        <section className="py-12 md:py-20 bg-brand-black">
          <div className="container-custom grid md:grid-cols-2 gap-8 md:gap-16">
            <div><span className="text-blue-300 text-sm">{t("O problema explorado")}</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">{t("Informações que precisam fazer sentido juntas.")}</h2><p className="text-gray-300 leading-relaxed">{t("Agenda, histórico do paciente e configurações fazem parte da mesma rotina. O projeto explora como apresentar esse contexto com navegação direta, estados claros e diferentes formas de consultar a informação.")}</p></div>
            <div><span className="text-blue-300 text-sm">{t("A experiência construída")}</span><h2 className="font-sora font-semibold text-2xl md:text-3xl mt-3 mb-4">{t("Do panorama ao detalhe.")}</h2><ul className="space-y-3 text-gray-300">{["Visão do dia e busca de pacientes", "Agenda com visualizações e regras de horário", "Prontuário, odontograma e anamnese", "Indicadores financeiros fictícios e personalização visual"].map((text) => <li key={text} className="flex items-start gap-3"><Check size={18} className="text-blue-300 shrink-0 mt-1" aria-hidden="true" />{t(text)}</li>)}</ul></div>
          </div>
        </section>
        <section id="telas" className="py-16 md:py-24">
          <div className="container-custom">
            <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4">{t("Explore a interface.")}</h2>
            <p className="text-gray-300 max-w-2xl mb-10">{t("Capturas reais do projeto, com dados de demonstração. Abra uma imagem para ver os detalhes no tamanho completo.")}</p>
            <div className="space-y-14 md:space-y-20">
              {ODONTOHUB.gallery.map((screen, index) => (
                <figure key={screen.id} id={screen.id} className="scroll-mt-28">
                  <figcaption className="grid md:grid-cols-[60px_1fr_1fr] gap-3 md:gap-6 mb-5 items-start"><span className="text-blue-300 font-sora text-lg">{t("0")}{t(index + 1)}</span><h3 className="font-sora font-semibold text-2xl">{t(screen.title)}</h3><p className="text-gray-300 leading-relaxed">{t(screen.description)}</p></figcaption>
                  <ProjectImage locale={locale} src={`${BASE_PATH}/images/portfolio/odontohub/${screen.image}`} alt={t(screen.alt)} width={1425} height={940} sizes="(min-width: 1280px) 1216px, 100vw" className="w-full h-auto rounded-xl border border-white/20" />
                </figure>
              ))}
            </div>
          </div>
        </section>
        <section className="py-14 md:py-20 bg-brand-black">
          <div className="container-custom grid md:grid-cols-[1fr_300px] gap-10 md:gap-20 items-center max-w-5xl">
            <div><span className="badge mb-4">{t("Experiência mobile")}</span><h2 className="font-sora font-semibold text-3xl mb-5">{t("A rotina também cabe no celular.")}</h2><p className="text-gray-300 leading-relaxed mb-5">{t("A navegação se adapta a telas pequenas. A agenda oferece uma visualização em lista, enquanto áreas mais amplas mantêm sua rolagem interna.")}</p><p className="text-gray-400 text-sm">{t("A captura mostra a interface real. Não é um aplicativo publicado em loja, nem uma sincronização entre dispositivos.")}</p></div>
            <figure className="max-w-[260px] mx-auto w-full"><ProjectImage locale={locale} src={`${BASE_PATH}/images/portfolio/odontohub/mobile.webp`} alt={t("Visão real da agenda em lista do OdontoHub em um celular, com horários e pacientes fictícios.")} width={375} height={812} sizes="260px" className="w-full h-auto rounded-2xl border border-white/20" /><figcaption className="text-gray-400 text-xs mt-3">{t("Agenda demonstrativa em tela de 390 px.")}</figcaption></figure>
          </div>
        </section>
        <section className="py-16 md:py-24">
          <div className="container-custom max-w-4xl">
            <h2 className="font-sora font-semibold text-2xl md:text-3xl mb-5">{t("O que esta demonstração inclui — e a próxima etapa.")}</h2>
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="rounded-xl border border-white/15 p-6"><h3 className="font-semibold text-lg mb-3">{t("Nesta vitrine")}</h3><p className="text-gray-300 leading-relaxed">{t("Interfaces navegáveis, dados fictícios, simulações locais e configurações de aparência. Os indicadores financeiros são exemplos constantes; não há módulo de movimentações, pagamentos ou cobranças implementado.")}</p></div>
              <div className="rounded-xl border border-white/15 p-6"><h3 className="font-semibold text-lg mb-3">{t("Em uma implantação")}</h3><p className="text-gray-300 leading-relaxed">{t("Autenticação, banco de dados, permissões, integrações e os requisitos de privacidade e segurança são planejados e implementados conforme o projeto. A demo não deve receber dados clínicos reais.")}</p></div>
            </div>
            <div className="rounded-2xl bg-brand-blue/10 border border-brand-blue/30 p-6 md:p-9">
              <h2 className="font-sora font-bold text-2xl md:text-3xl mb-4">{t("Sua necessidade pode ser diferente. O cuidado é o mesmo.")}</h2>
              <p className="text-gray-300 mb-6">{t("Conte o que precisa organizar ou apresentar. Podemos conversar sobre um site, uma landing page ou um sistema personalizado.")}</p>
              <div className="flex flex-wrap gap-3"><Link href={localizedHref(quoteHref("Sistema Web personalizado"), locale)} className="btn-primary">{t("Conversar sobre meu projeto ")}<ArrowRight size={17} aria-hidden="true" /></Link><Link href={localizedHref("/#servicos", locale)} className="btn-outline">{t("Conhecer sites e landing pages")}</Link></div>
            </div>
          </div>
        </section>
      </main>
      </ProjectImageViewer>
      <Footer locale={locale} />
    </>
  );
}
