import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";
import { BASE_PATH } from "@/lib/constants";

export function HeroSection({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  return <section id="hero" className="home-hero home-light">
    <div className="container-custom hero-layout">
      <div className="hero-copy">
        <span className="eyebrow">{t("Design e desenvolvimento web")}</span>
        <h1>{t("Seu negócio merece ")}<span>{t("uma presença à altura.")}</span></h1>
        <p>{t("Criamos sites e landing pages com identidade, clareza e orientação em cada etapa.")}</p>
        <div className="hero-actions">
          <a href="#contato" className="btn-primary">{t("Conversar sobre meu projeto")}<ArrowRight size={18} aria-hidden="true" /></a>
          <a href="#portfolio" className="home-text-link">{t("Ver projetos")}<ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <ul className="hero-benefits">{["Orientação em cada etapa", "Design para sua marca", "Adaptado ao celular"].map(item => <li key={item}><CheckCircle size={16} aria-hidden="true" />{t(item)}</li>)}</ul>
      </div>
      {/* Actual desktop and mobile captures demonstrate the same project. */}
      <Link href={localizedHref("/portfolio/alvorada", locale)} className="hero-showcase" aria-label={t("Conhecer o projeto demonstrativo Construtora Alvorada")}>
        <div className="showcase-halo" aria-hidden="true" />
        <div className="browser-frame"><div className="browser-bar" aria-hidden="true"><i /><i /><i /><span>alvorada.demo</span></div>
          <Image src={`${BASE_PATH}/images/portfolio/alvorada/visao-geral.webp`} alt={t("Captura real da Alvorada no computador")} width={1440} height={960} preload sizes="(min-width: 1024px) 560px, 90vw" />
        </div>
        <div className="phone-frame"><Image src={`${BASE_PATH}/images/portfolio/alvorada/mobile.webp`} alt={t("Captura real da Alvorada no celular")} width={375} height={812} sizes="(min-width: 1024px) 160px, 100px" /></div>
        <span className="showcase-caption">{t("Projeto demonstrativo · Desktop e mobile")}<ArrowRight size={16} aria-hidden="true" /></span>
      </Link>
    </div>
  </section>;
}
