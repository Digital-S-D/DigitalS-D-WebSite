"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled,  setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#060D1A] backdrop-blur-xl border-b border-brand-blue/20 shadow-lg shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* LOGO ─────────────────────────────────────────────────────
                SUBSTITUA: Descomente o <Image> abaixo e remova o placeholder.
                Arquivo: /public/images/logo-texto.png  (desktop)
                Arquivo: /public/images/logo-icone.png  (mobile)
            ──────────────────────────────────────────────────────────── */}
            <a href="/#hero" onClick={closeMenu} className="flex items-center gap-2">
              {/* Ícone mobile */}
              <div className="w-9 h-9 md:hidden bg-brand-blue/20 border border-brand-blue/40
                              rounded-lg flex items-center justify-center text-brand-blue
                              font-sora font-bold text-sm">
                SD
              </div>
              {/* Logo texto desktop */}
              {/* <Image src="/images/logo-texto.png" alt="Digital S&D" width={160} height={40} className="hidden md:block h-8 w-auto" /> */}
              <div className="hidden md:flex items-center gap-1">
                <span className={`font-sora font-bold text-lg transition-colors duration-300 ${scrolled ? "text-white" : "text-white/90"}`}>
                  DIGITAL
                </span>
                <span className="font-sora font-bold text-lg text-brand-blue">S&D</span>
              </div>
            </a>

            {/* Links desktop — lidos de lib/constants.ts */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`px-4 py-2 font-outfit text-sm font-medium rounded-lg transition-all duration-200
                               hover:text-white hover:bg-white/10
                               ${scrolled ? "text-gray-100" : "text-gray-300"}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA desktop — SUBSTITUA href pelo seu WhatsApp */}
            <a href="/#contato" className="hidden md:inline-flex btn-primary text-sm">
              Solicitar Orçamento
            </a>

            {/* Botão hambúrguer mobile */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg
                         border border-white/10 text-white hover:border-brand-blue/50
                         hover:bg-brand-blue/10 transition-all duration-200"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            >
              <span className={`absolute transition-all duration-200 ${menuOpen ? "opacity-100" : "opacity-0 rotate-90"}`}>
                <X size={20} />
              </span>
              <span className={`absolute transition-all duration-200 ${menuOpen ? "opacity-0 -rotate-90" : "opacity-100"}`}>
                <Menu size={20} />
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={closeMenu} />
        <div className={`absolute top-0 right-0 h-full w-72 bg-brand-navy border-l border-white/10
                         flex flex-col transition-transform duration-300 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <span className="font-sora font-bold text-white">Menu</span>
            <button onClick={closeMenu}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors text-gray-400">
              <X size={18} />
            </button>
          </div>
          <nav className="flex-1 px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={closeMenu}
                className="px-4 py-3 font-outfit text-base font-medium text-gray-200
                           hover:text-white hover:bg-white/5 rounded-xl transition-all duration-200">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="px-6 pb-8 pt-4 border-t border-white/10">
            {/* SUBSTITUA href pelo seu WhatsApp */}
            <a href="/#contato" onClick={closeMenu} className="btn-primary w-full justify-center text-sm">
              Solicitar Orçamento
            </a>
            <p className="text-center text-gray-500 text-xs font-outfit mt-3">Resposta em até 24h úteis</p>
          </div>
        </div>
      </div>
    </>
  );
}
