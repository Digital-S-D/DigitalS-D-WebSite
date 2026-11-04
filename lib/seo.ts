import type { Metadata } from "next";
import { COMPANY, TEAM_MEMBERS } from "./constants";

// The public domain remains canonical for previews and subdirectory builds.
export const SITE_URL = "https://digitalsd.com.br";

export const PUBLIC_PATHS = [
  "/",
  "/atendimento/",
  "/perguntas-frequentes/",
  "/sobre/",
  "/portfolio/odontohub/",
  "/portfolio/alvorada/",
  "/portfolio/advocacia-digital/",
  "/privacidade/",
  "/termos/",
] as const;

export function siteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).href;
}

type ShareImage = { url: string; width: number; height: number; alt: string };

export function pageMetadata(
  path: string,
  title: string,
  description: string,
  image: ShareImage = {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: "Digital S&D — Sites e landing pages",
  },
): Metadata {
  const url = siteUrl(path);
  const shareImage = { ...image, url: siteUrl(image.url) };
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title, description, url,
      siteName: COMPANY.name,
      locale: "pt_BR",
      type: "website",
      images: [shareImage],
    },
    twitter: { card: "summary_large_image", title, description, images: [shareImage.url] },
  };
}

// Only facts also presented on the site. Do not add unverified profiles,
// ratings, legal identifiers, opening hours or a street address.
export const ORGANIZATION = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": siteUrl("/#organization"),
  name: COMPANY.name,
  url: siteUrl("/"),
  description: COMPANY.description,
  logo: {
    "@type": "ImageObject",
    url: siteUrl("/images/brand-logo.png"),
    width: 672,
    height: 241,
  },
  email: COMPANY.email,
  telephone: `+${COMPANY.whatsapp}`,
  founder: TEAM_MEMBERS.map((member) => ({ "@type": "Person", name: member.name })),
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Atendimento ao cliente",
    email: COMPANY.email,
    telephone: `+${COMPANY.whatsapp}`,
    availableLanguage: "pt-BR",
    url: siteUrl("/atendimento/"),
  },
};
