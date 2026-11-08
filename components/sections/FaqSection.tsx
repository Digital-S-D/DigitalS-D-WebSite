
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/offers";
import { FaqList } from "./FaqList";

export function FaqSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return (
    <section id="duvidas" className="home-light home-faq py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <span className="badge mb-4">{t("Antes de contratar")}</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4">{t("Vamos tirar ")}<span className="text-gradient">{t("suas dúvidas.")}</span></h2>
          <p className="text-gray-300 mb-8">{t("Da primeira conversa às atualizações depois da entrega, entenda como a equipe orienta você e como pedir ajuda.")}</p>
          <FaqList locale={locale} items={["site-ou-landing-page", "prazo", "suporte"].map((id) => FAQ_ITEMS.find((item) => item.id === id)!)} />
          <Link href={localizedHref("/perguntas-frequentes", locale)} className="inline-flex gap-2 items-center text-blue-300 py-4 mt-4 underline underline-offset-4">{t("Ver todas as perguntas ")}<ArrowRight size={17} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
