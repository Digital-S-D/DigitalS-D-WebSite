import type { Metadata } from "next";
import "@/app/globals.css";
import "@/app/design-system.css";
import { AnchorNavigation, FloatingContact, themeBootstrap } from "./SiteControls";
import { createTranslator, type Locale } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";
import { BASE_PATH, COMPANY } from "@/lib/constants";
import { Measurement } from './Measurement';

// Page titles, canonical URLs and share previews are defined per route.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: COMPANY.name,
  title: COMPANY.name,
  description: COMPANY.description,
  authors: [{ name: COMPANY.name }],
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  icons: {
    icon: `${BASE_PATH}/images/brand-icon.png`,
    shortcut: `${BASE_PATH}/images/brand-icon.png`,
    apple: `${BASE_PATH}/images/brand-icon.png`,
  },
};

export default function DocumentLayout({
  children, locale = "pt",
}: {
  children: React.ReactNode; locale?: Locale;
}) {
  return (
    <html lang={locale === "en" ? "en" : "pt-BR"} className="scroll-smooth" suppressHydrationWarning>
      <body className="font-outfit bg-brand-navy text-white antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:text-brand-navy focus:p-3">{createTranslator(locale)("Pular para o conteúdo")}</a>
        {children}
        <AnchorNavigation />
        <FloatingContact locale={locale} />
        <Measurement locale={locale} />
      </body>
    </html>
  );
}
