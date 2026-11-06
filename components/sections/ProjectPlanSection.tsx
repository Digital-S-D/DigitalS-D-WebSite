
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { BASE_PATH, TEAM_MEMBERS } from "@/lib/constants";
import { PROJECT_AGREEMENTS } from "@/lib/offers";
import { CUSTOMER_CARE } from "@/lib/customer-care";

export function ProjectPlanSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  const summaries = ["Conte seu objetivo; ajudamos a organizar o pedido.", "Receba a proposta, reúna os materiais e aprove as versões.", "Receba os acessos e as orientações para atualizar seu site."];
  return (
    <section id="como-funciona" className="py-16 md:py-24 bg-brand-black">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <span className="badge mb-4">{t("Acompanhamento em linguagem simples")}</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl mb-4">
            {t("Você não precisa ")}<span className="text-gradient">{t("entender de tecnologia.")}</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            {t("Você conhece o seu negócio. A equipe Digital S&D ajuda a transformar essa necessidade em um site, orientando materiais, escolhas e aprovações.")}</p>
        </div>
        <ol className="grid md:grid-cols-3 gap-8">
          {PROJECT_AGREEMENTS.map((item, index) => (
            <li key={item.title} className="border-t border-white/20 pt-5">
              <span className="text-blue-300 text-sm">{t("0")}{t(index + 1)}</span>
              <h3 className="font-sora font-semibold text-xl my-3">{t(item.title)}</h3>
              <p className="text-gray-300 leading-relaxed md:hidden">{t(summaries[index])}</p>
              <p className="hidden md:block text-gray-300 leading-relaxed">{t(item.description)}</p>
            </li>
          ))}
        </ol>
        <div className="hidden md:flex mt-10 rounded-2xl border border-blue-400/25 bg-brand-blue/10 p-5 md:p-7 flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="flex items-start gap-3 max-w-2xl">
            <MessageCircle size={22} className="shrink-0 text-blue-300 mt-1" aria-hidden="true" />
            <div>
              <h3 className="font-semibold mb-2">{t("Uma equipe para conversar e tirar dúvidas")}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{t(CUSTOMER_CARE.replyDescription)}</p>
              <p className="text-gray-400 text-sm mt-2">{t("O prazo para executar uma alteração é informado após a avaliação do pedido.")}</p>
            </div>
          </div>
          <Link href={localizedHref("/atendimento", locale)} className="btn-outline justify-center shrink-0">
            {t("Entender o acompanhamento ")}<ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
        <Link href={localizedHref("/atendimento", locale)} className="inline-flex md:hidden min-h-12 items-center gap-2 mt-4 text-blue-300 underline underline-offset-4">{t("Entender o acompanhamento ")}<ArrowRight size={17} aria-hidden="true" /></Link>
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2 shrink-0">
              {TEAM_MEMBERS.filter((member) => member.photoSrc).map((member) => (
                <Image key={member.name} src={`${BASE_PATH}/images/team/${member.photoSrc}`} alt={t(member.name)} width={56} height={56} className="w-14 h-14 object-cover rounded-full border-2 border-brand-black" />
              ))}
            </div>
            <p className="text-gray-300 text-sm max-w-sm">
              <span className="text-white font-semibold">{t(TEAM_MEMBERS.map((member) => member.name).join(" e "))}{t(", fundadores da Digital S&D.")}</span><br />
              {t("Conheça a equipe por trás do trabalho.")}</p>
          </div>
          <Link href={localizedHref("/sobre", locale)} className="inline-flex items-center gap-2 py-3 text-blue-300 underline underline-offset-4">
            {t("Conhecer a equipe ")}<ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
