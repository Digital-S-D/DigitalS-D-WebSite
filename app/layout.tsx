import type { Metadata } from "next";
import "./globals.css";
import { BASE_PATH } from "@/lib/constants";

// ─── METADADOS DO SITE ─────────────────────────────────────────────────
// SUBSTITUA: Atualize título, descrição, URL e imagem OG com seus dados reais
export const metadata: Metadata = {
  title: "Digital S&D | Desenvolvimento Web para PMEs",
  description:
    "Criamos sites modernos, rápidos e focados em vendas para pequenas e médias empresas. Transforme sua presença digital em uma máquina de gerar clientes.",
  keywords: [
    "desenvolvimento web",
    "sites para empresas",
    "agência digital",
    "landing page",
    "e-commerce",
    "PME",
  ],
  authors: [{ name: "Digital S&D" }],
  // SUBSTITUA: Adicione a URL real do seu domínio
  metadataBase: new URL("https://www.digitalsed.com.br"),
  openGraph: {
    title: "Digital S&D | Desenvolvimento Web para PMEs",
    description:
      "Criamos sites modernos, rápidos e focados em vendas para pequenas e médias empresas.",
    // SUBSTITUA: Adicione a URL real do site
    url: "https://www.digitalsed.com.br",
    siteName: "Digital S&D",
    type: "website",
    // SUBSTITUA: Adicione caminho para imagem OG em /public/og-image.jpg (1200x630px)
    images: [{ url: `${BASE_PATH}/og-image.jpg`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital S&D | Desenvolvimento Web para PMEs",
    description:
      "Criamos sites modernos, rápidos e focados em vendas para pequenas e médias empresas.",
  },
  icons: {
    // Favicon: logo ícone da Digital S&D
    icon: `${BASE_PATH}/images/logo-icone.png`,
    shortcut: `${BASE_PATH}/images/logo-icone.png`,
    apple: `${BASE_PATH}/images/logo-icone.png`,
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
        {children}
      </body>
    </html>
  );
}
