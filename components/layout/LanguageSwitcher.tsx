"use client";

import { usePathname } from "next/navigation";
import { BASE_PATH } from "@/lib/constants";
import { localePath, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const path = BASE_PATH && pathname.startsWith(BASE_PATH) ? pathname.slice(BASE_PATH.length) || "/" : pathname;
  return (
    <nav aria-label={locale === "en" ? "Language" : "Idioma"} className="inline-flex shrink-0 items-center text-sm">
      {(["pt", "en"] as const).map((language, index) => (
        <span key={language} className="inline-flex items-center">
          {index > 0 && <span aria-hidden="true" className="text-gray-500">|</span>}
          <a href={`${BASE_PATH}${localePath(path, language)}`} hrefLang={language === "pt" ? "pt-BR" : "en"} lang={language === "pt" ? "pt-BR" : "en"}
            aria-label={language === "pt" ? "Português" : "English"} aria-current={language === locale ? "page" : undefined}
            onClick={(event) => { event.currentTarget.href = `${BASE_PATH}${localePath(path, language)}${window.location.search}${window.location.hash}`; }}
            className={`inline-flex min-h-11 min-w-11 items-center justify-center rounded-lg hover:bg-white/10 ${language === locale ? "text-white font-semibold underline underline-offset-4" : "text-gray-300"}`}>
            {language === "pt" ? "PT" : "EN"}
          </a>
        </span>
      ))}
    </nav>
  );
}
