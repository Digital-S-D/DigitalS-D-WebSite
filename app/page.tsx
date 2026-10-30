// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────
// Graças aos barrel exports (index.ts), todos os componentes
// podem ser importados de uma única linha por pasta.

import { Header, Footer }         from "@/components/layout";
import {
  HeroSection,
  ProblemSection,
  ServicesSection,
  PortfolioSection,
  ContactSection,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Header />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
