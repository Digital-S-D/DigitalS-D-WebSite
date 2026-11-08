
import { type Locale } from "@/lib/i18n";
// ─── PÁGINA PRINCIPAL ─────────────────────────────────────────────────
// Graças aos barrel exports (index.ts), todos os componentes
// podem ser importados de uma única linha por pasta.

import "./home-design.css";
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

export default function HomePage({ locale = "pt" }: { locale?: Locale } = {}) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION).replace(/</g, "\\u003c") }} />
      <Header locale={locale} />
      <main id="conteudo" tabIndex={-1} className="home-page relative overflow-hidden">
        <HeroSection locale={locale} />
        <ServicesSection locale={locale} />
        <PortfolioSection locale={locale} />
        <ProjectPlanSection locale={locale} />
        <FaqSection locale={locale} />
        <ContactSection locale={locale} />
      </main>
      <Footer locale={locale} />
    </>
  );
}
