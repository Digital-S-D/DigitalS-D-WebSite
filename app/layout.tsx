import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL } from "@/lib/seo";
import { BASE_PATH, COMPANY } from "@/lib/constants";

// Page titles, canonical URLs and share previews are defined per route.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: COMPANY.name,
  title: COMPANY.name,
  description: COMPANY.description,
  authors: [{ name: COMPANY.name }],
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  icons: {
    icon: `${BASE_PATH}/images/brand-icon.png`,
    shortcut: `${BASE_PATH}/images/brand-icon.png`,
    apple: `${BASE_PATH}/images/brand-icon.png`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-outfit bg-brand-navy text-white antialiased">
        <a href="#conteudo" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-lg focus:bg-white focus:text-brand-navy focus:p-3">Pular para o conteúdo</a>
        {children}
      </body>
    </html>
  );
}
