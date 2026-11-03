// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────
// Graças aos barrel exports (index.ts), todos os componentes
// podem ser importados de uma única linha por pasta.

import { Header, Footer }         from "@/components/layout";
import {
  HeroSection,
  PortfolioSection,
  ProjectPlanSection,
  FaqSection,
  ServicesSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="relative overflow-hidden">
        <HeroSection />
        <PortfolioSection />
        <ServicesSection />
        <ProjectPlanSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
