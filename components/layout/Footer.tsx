<<<<<<< HEAD
=======
import Link from "next/link";
>>>>>>> master
import { Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY, LINKS } from "@/lib/constants";

// ─── LINKS ESTÁTICOS DO FOOTER (não fazem parte dos dados centrais) ────
const footerLinks = {
  servicos: [
    { label: "Sites Institucionais", href: "/#servicos" },
    { label: "Landing Pages",        href: "/#servicos" },
    { label: "E-commerce",           href: "/#servicos" },
    { label: "Sistemas Web",         href: "/#servicos" },
    { label: "Manutenção de Sites",  href: "/#servicos" },
  ],
  empresa: [
    { label: "Sobre Nós",   href: LINKS.about }, // antes era "#sobre" (âncora inexistente); agora aponta para a página real
    { label: "Portfólio",   href: "/#portfolio" },
    { label: "Blog",        href: "/blog" },
    { label: "Contato",     href: "/#contato" },
    { label: "Privacidade", href: "/privacidade" },
  ],
};

// Ícones das redes sociais, com URL vinda de lib/constants.ts (LINKS)
const socialLinks = [
  { icon: Instagram, label: "Instagram", href: LINKS.instagram },
  { icon: Linkedin,  label: "LinkedIn",  href: LINKS.linkedin },
  { icon: Youtube,   label: "YouTube",   href: LINKS.youtube },
];

export function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/5">

      {/* ─── CONTEÚDO PRINCIPAL ─────────────────────────────────────── */}
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Coluna 1: Logo + Descrição */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* SUBSTITUA: Troque pelo componente <Image> com sua logo
                <Image src="/images/logo-text.png" alt="Digital S&D" width={140} height={36} className="mb-4" />
            */}
            <div className="flex items-center gap-1 mb-4">
              <span className="font-sora font-bold text-xl text-white">DIGITAL</span>
              <span className="font-sora font-bold text-xl text-brand-blue">S&D</span>
            </div>
            <p className="font-outfit text-gray-400 text-sm leading-relaxed mb-6">
              {COMPANY.tagline} {COMPANY.description}
            </p>

            {/* Redes sociais */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                             border border-white/10 text-gray-400
                             hover:border-brand-blue/50 hover:text-brand-blue hover:bg-brand-blue/10
                             transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Coluna 2: Serviços */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Serviços
            </h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.label}>
<<<<<<< HEAD
                  <a
=======
                  <Link
>>>>>>> master
                    href={link.href}
                    className="font-outfit text-sm text-gray-400 hover:text-white
                               transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue transition-colors" />
                    {link.label}
<<<<<<< HEAD
                  </a>
=======
                  </Link>
>>>>>>> master
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3: Empresa */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Empresa
            </h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
<<<<<<< HEAD
                  <a
=======
                  <Link
>>>>>>> master
                    href={link.href}
                    className="font-outfit text-sm text-gray-400 hover:text-white
                               transition-colors duration-200 flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand-blue/50 group-hover:bg-brand-blue transition-colors" />
                    {link.label}
<<<<<<< HEAD
                  </a>
=======
                  </Link>
>>>>>>> master
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4: Contato — lida de lib/constants.ts (COMPANY) */}
          <div>
            <h4 className="font-sora font-semibold text-white text-sm mb-5 uppercase tracking-wider">
              Contato
            </h4>
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
                  <span className="text-gray-600 text-xs">Atendimento remoto nacional</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ─── RODAPÉ INFERIOR ──────────────────────────────────────────── */}
      <div className="border-t border-white/5">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600 font-outfit">
            <p>© {COMPANY.year} {COMPANY.name}. Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
<<<<<<< HEAD
              <a href="/privacidade" className="hover:text-gray-400 transition-colors">Privacidade</a>
              <a href="/termos"      className="hover:text-gray-400 transition-colors">Termos de Uso</a>
=======
              <Link href="/privacidade" className="hover:text-gray-400 transition-colors">Privacidade</Link>
              <Link href="/termos"      className="hover:text-gray-400 transition-colors">Termos de Uso</Link>
>>>>>>> master
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
