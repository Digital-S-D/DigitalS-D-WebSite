
import { createTranslator, type Locale } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/offers";

type FaqItem = (typeof FAQ_ITEMS)[number];

export function FaqList({ locale = "pt", items }: { items: readonly FaqItem[] } & { locale?: Locale }) {
  const t = createTranslator(locale);
  return (
    <div className="divide-y divide-white/15 border-y border-white/15">
      {items.map((item) => (
        <details key={item.id} id={item.id} className="group scroll-mt-28">
          <summary className="flex items-start justify-between gap-5 cursor-pointer list-none py-5 rounded-sm [&::-webkit-details-marker]:hidden">
            <h3 className="font-sora font-semibold text-base md:text-lg leading-relaxed">{t(item.question)}</h3>
            <ChevronDown size={20} className="shrink-0 mt-1 text-blue-300 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <p className="text-gray-300 leading-relaxed pb-6 pr-2 md:pr-10">{t(item.answer)}</p>
        </details>
      ))}
    </div>
  );
}
