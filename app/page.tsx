// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────
// Graças aos barrel exports (index.ts), todos os componentes
// podem ser importados de uma única linha por pasta.

import { Header, Footer }         from "@/components/layout";
import { ORGANIZATION, pageMetadata } from "@/lib/seo";
import {
  HeroSection,
  PortfolioSection,
  ProjectPlanSection,
  FaqSection,
  ServicesSection,
  ContactSection,
} from "@/components/sections";

export const metadata = pageMetadata(
  "/",
  "Digital S&D | Sites e landing pages para empresas",
  "Sites e landing pages para pequenas empresas e profissionais autônomos. A equipe Digital S&D orienta você do planejamento à entrega. Conheça os projetos e peça um orçamento.",
);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION).replace(/</g, "\\u003c") }} />
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
