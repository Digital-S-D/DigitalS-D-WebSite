
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
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

export default function FaqPage({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  const categories = Array.from(new Set(FAQ_ITEMS.map((item) => item.category)));
  return (
    <>
      <Header locale={locale} />
      <main id="conteudo" tabIndex={-1} className="pt-28 md:pt-36 pb-16 md:pb-24">
        <div className="container-custom max-w-4xl">
          <Link href={localizedHref("/", locale)} className="inline-flex text-sm text-blue-300 py-3 mb-5 underline underline-offset-4">{t("Início")}</Link>
          <div className="max-w-3xl mb-10">
            <span className="badge mb-4">{t("Clareza para contratar")}</span>
            <h1 className="font-sora font-bold text-4xl md:text-5xl mb-5">{t("Perguntas ")}<span className="text-gradient">{t("frequentes")}</span></h1>
            <p className="text-gray-300 text-lg leading-relaxed">{t("Da escolha do site ao que acontece depois da entrega. Encontre aqui o que vale conversar antes de começar.")}</p>
            <p className="text-gray-300 mt-4"><Link href={localizedHref("/atendimento", locale)} className="text-blue-300 underline underline-offset-4">{t("Veja como funciona o acompanhamento")}</Link>{t(", da coleta de materiais às solicitações depois da entrega.")}</p>
            <p className="text-gray-400 text-sm mt-4">{t("Valores, prazos e condições de cada projeto são formalizados em proposta escrita, conforme nossos ")}<Link href={localizedHref("/termos", locale)} className="text-blue-300 underline">{t("termos de uso")}</Link>{t(".")}</p>
          </div>
          <p className="text-gray-300 mb-8"><Link href={localizedHref("/criacao-de-sites/", locale)} className="text-blue-300 underline py-3 inline-block">{locale === "en" ? "Business websites" : "Criação de sites"}</Link>{" · "}<Link href={localizedHref("/landing-pages/", locale)} className="text-blue-300 underline py-3 inline-block">Landing pages</Link></p>
          <nav aria-label={t("Assuntos das perguntas frequentes")} className="flex flex-wrap gap-2 mb-12">
            {categories.map((category, index) => <a key={category} href={localizedHref(`#assunto-${index + 1}`, locale)} className="px-4 py-3 rounded-full border border-white/20 text-sm text-gray-200 hover:bg-white/10">{t(category)}</a>)}
          </nav>
          {categories.map((category, index) => (
            <section key={category} id={`assunto-${index + 1}`} className="mb-12">
              <h2 className="font-sora font-semibold text-xl md:text-2xl mb-5">{t(category)}</h2>
              <FaqList locale={locale} items={FAQ_ITEMS.filter((item) => item.category === category)} />
            </section>
          ))}
          <div className="rounded-2xl border border-brand-blue/30 bg-brand-blue/5 p-6 md:p-8">
            <h2 className="font-sora font-semibold text-2xl mb-3">{t("Vamos falar do seu projeto?")}</h2>
            <p className="text-gray-300 mb-6">{t("Conte o que você quer apresentar e qual é o próximo passo que espera do seu cliente.")}</p>
            <div className="flex flex-wrap gap-4"><Link href={localizedHref("/#contato", locale)} className="btn-primary">{t("Conversar sobre um orçamento ")}<ArrowRight size={17} aria-hidden="true" /></Link><Link href={localizedHref("/portfolio/odontohub", locale)} className="btn-outline">{t("Conhecer o OdontoHub")}</Link></div>
          </div>
        </div>
      </main>
      <Footer locale={locale} />
    </>
  );
}
