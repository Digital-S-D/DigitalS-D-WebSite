import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import { PRIMARY_SERVICES } from "@/lib/offers";
import { BASE_PATH, COMPANY, LINKS } from "@/lib/constants";

// ─── LINKS ESTÁTICOS DO FOOTER (não fazem parte dos dados centrais) ────
const footerLinks = {
  servicos: [
    ...PRIMARY_SERVICES.map((service) => ({ label: service.title, href: `/#${service.id}` })),
    { label: "Soluções complementares", href: "/#solucoes-complementares" },
  ],
  empresa: [
    { label: "Sobre Nós",   href: LINKS.about }, // antes era "#sobre" (âncora inexistente); agora aponta para a página real
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Atendimento e acompanhamento", href: "/atendimento" },
    { label: "Perguntas frequentes", href: "/perguntas-frequentes" },
    { label: "Contato",     href: "/#contato" },
    { label: "Privacidade", href: "/privacidade" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">

      {/* ─── CONTEÚDO PRINCIPAL ─────────────────────────────────────── */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Coluna 1: Logo + Descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image src={`${BASE_PATH}/images/brand-logo.png`} alt="Digital S&D" width={672} height={241} className="w-36 h-auto mb-4" />
            <p className="font-outfit text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY.tagline} {COMPANY.description}
            </p>

          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h2 className="font-sora font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Serviços
            </h2>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-outfit text-sm text-gray-400 hover:text-white
                               transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h2 className="font-sora font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Empresa
            </h2>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-outfit text-sm text-gray-400 hover:text-white
                               transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato — lida de lib/constants.ts (COMPANY) */}
          <div>
            <h2 className="font-sora font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Contato
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-brand-blue mt-0.5 shrink-0" />
                <a href={`mailto:${COMPANY.email}`}
                   className="font-outfit text-sm text-gray-400 hover:text-white transition-colors">
                  {COMPANY.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-brand-blue mt-0.5 shrink-0" />
                <a href={LINKS.whatsappOrcamento}
                   target="_blank" rel="noopener noreferrer"
                   className="font-outfit text-sm text-gray-400 hover:text-white transition-colors">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-brand-blue mt-0.5 shrink-0" />
                <span className="font-outfit text-sm text-gray-400">
                  {COMPANY.city}<br />
                  <span className="text-gray-400 text-xs">Atendimento remoto nacional</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── RODAPÉ INFERIOR ──────────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 font-outfit">
            <p>© {COMPANY.year} {COMPANY.name}. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <Link href="/privacidade" className="hover:text-gray-400 transition-colors">Privacidade</Link>
              <Link href="/termos"      className="hover:text-gray-400 transition-colors">Termos de Uso</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
