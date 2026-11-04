
import { type Locale } from "@/lib/i18n";
// ─── PÁGINA "SOBRE NÓS" ─────────────────────────────────────────────────
// Reutiliza Header e Footer (idênticos à Home) para manter a identidade
// visual e evitar duplicação de código.

import { pageMetadata } from "@/lib/seo";
import { Header, Footer } from "@/components/layout";
import {
  AboutHeroSection,
  MissionSection,
  PillarsSection,
  ProcessSection,
  TeamSection,
  AboutCtaSection,
} from "@/components/sections";

export const metadata = pageMetadata(
  "/sobre/",
  "Sobre a Digital S&D | Equipe e processo de trabalho",
  "Conheça a Digital S&D, seus fundadores Alvaro Marinho e Arthur Leite e as etapas de criação de sites e landing pages para pequenas empresas e profissionais autônomos.",
);

export default function AboutPage({ locale = "pt" }: { locale?: Locale } = {}) {
  return (
    <>
      <Header locale={locale} />
      <main id="conteudo" tabIndex={-1} className="relative overflow-hidden">
        <AboutHeroSection locale={locale} />
        <MissionSection locale={locale} />
        <PillarsSection locale={locale} />
        <ProcessSection locale={locale} />
        <TeamSection locale={locale} />
        <AboutCtaSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
