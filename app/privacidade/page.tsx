// ─── PÁGINA "POLÍTICA DE PRIVACIDADE" (/privacidade) ────────────────────
// Os textos ficam em lib/legal.ts (PRIVACY_POLICY).

import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { LegalDocumentSection } from "@/components/sections";
import { PRIVACY_POLICY } from "@/lib/legal";

export const metadata: Metadata = {
  title: PRIVACY_POLICY.metaTitle,
  description: PRIVACY_POLICY.description,
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="relative overflow-hidden">
        <LegalDocumentSection doc={PRIVACY_POLICY} />
      </main>
      <Footer />
    </>
  );
}
