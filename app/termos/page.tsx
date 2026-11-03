// ─── PÁGINA "TERMOS DE USO" (/termos) ───────────────────────────────────
// Os textos ficam em lib/legal.ts (TERMS_OF_USE).

import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { LegalDocumentSection } from "@/components/sections";
import { TERMS_OF_USE } from "@/lib/legal";

export const metadata: Metadata = {
  title: TERMS_OF_USE.metaTitle,
  description: TERMS_OF_USE.description,
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="relative overflow-hidden">
        <LegalDocumentSection doc={TERMS_OF_USE} />
      </main>
      <Footer />
    </>
  );
}
