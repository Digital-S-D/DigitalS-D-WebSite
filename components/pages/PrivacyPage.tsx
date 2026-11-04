
import { type Locale } from "@/lib/i18n";
// ─── PÁGINA "POLÍTICA DE PRIVACIDADE" (/privacidade) ────────────────────
// Os textos ficam em lib/legal.ts (PRIVACY_POLICY).

import { pageMetadata } from "@/lib/seo";
import { Header, Footer } from "@/components/layout";
import { LegalDocumentSection } from "@/components/sections";
import { PRIVACY_POLICY } from "@/lib/legal";

export const metadata = pageMetadata(
  "/privacidade/",
  PRIVACY_POLICY.metaTitle,
  PRIVACY_POLICY.description,
);

export default function PrivacyPage({ locale = "pt" }: { locale?: Locale } = {}) {
  return (
    <>
      <Header locale={locale} />
      <main id="conteudo" tabIndex={-1} className="relative overflow-hidden">
        <LegalDocumentSection locale={locale} doc={PRIVACY_POLICY} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
