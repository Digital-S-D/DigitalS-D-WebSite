// ─── PÁGINA "SOBRE NÓS" ─────────────────────────────────────────────────
// Reutiliza Header e Footer (idênticos à Home) para manter a identidade
// visual e evitar duplicação de código.

import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import {
  AboutHeroSection,
  MissionSection,
  PillarsSection,
  ProcessSection,
  TeamSection,
  AboutCtaSection,
} from "@/components/sections";

// SUBSTITUA: Ajuste título e descrição para SEO desta página específica
export const metadata: Metadata = {
  title: "Sobre Nós | Digital S&D",
  description:
    "Conheça a história, a missão e o processo de trabalho por trás da Digital S&D — a agência que constrói pontes entre pequenas empresas e seus clientes.",
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <AboutHeroSection />
      <MissionSection />
      <PillarsSection />
      <ProcessSection />
      <TeamSection />
      <AboutCtaSection />
      <Footer />
    </main>
  );
}
