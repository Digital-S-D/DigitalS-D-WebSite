"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BASE_PATH, NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => { if (desktop.matches) setMenuOpen(false); };
    desktop.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      desktop.removeEventListener("change", onResize);
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!menuOpen) { dialog?.close(); return; }
    const previousOverflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#060D1A] backdrop-blur-xl border-b border-brand-blue/20 shadow-lg shadow-black/40" : "bg-brand-navy/95"
      }`}>
        <nav className="container-custom" aria-label="Navegação principal">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/#hero" onClick={closeMenu} aria-label="Digital S&D — início" className="inline-flex items-center min-h-11">
              <Image src={`${BASE_PATH}/images/brand-icon.png`} alt="" width={44} height={44} className="w-11 h-11 lg:hidden" />
              <Image src={`${BASE_PATH}/images/brand-logo.png`} alt="" width={672} height={241} className="hidden lg:block w-32 h-auto" />
            </Link>
            <ul className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="inline-flex min-h-11 items-center px-4 py-2 font-outfit text-sm font-medium rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
            <Link href="/#contato" className="hidden lg:inline-flex btn-primary text-sm">Solicitar orçamento</Link>
            <button ref={triggerRef} type="button" onClick={() => setMenuOpen(true)} aria-label="Abrir menu"
              aria-expanded={menuOpen} aria-controls="mobile-menu" aria-haspopup="dialog"
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10">
              <Menu size={22} aria-hidden="true" />
            </button>
          </div>
        </nav>
      </header>
      {/* O diálogo nativo mantém o foco no painel e torna o restante da página inerte. */}
      <dialog ref={dialogRef} id="mobile-menu" aria-labelledby="mobile-menu-title"
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}
        onClose={() => {
          closeMenu();
          if (window.matchMedia("(max-width: 1023px)").matches) triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => { if (event.target === event.currentTarget) closeMenu(); }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-80 max-w-[90vw] border-l border-white/10 bg-brand-navy text-white p-0 backdrop:bg-black/70 backdrop:backdrop-blur-sm">
        <div className="flex flex-col min-h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h2 id="mobile-menu-title" className="font-sora font-bold">Menu</h2>
            <button type="button" autoFocus onClick={closeMenu} aria-label="Fechar menu" className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/10"><X size={22} aria-hidden="true" /></button>
          </div>
          <nav aria-label="Navegação mobile" className="flex-1 px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={closeMenu} className="px-4 py-3 font-outfit text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-xl">{link.label}</Link>
            ))}
          </nav>
          <div className="px-6 pb-8 pt-4 border-t border-white/10">
            <Link href="/#contato" onClick={closeMenu} className="btn-primary w-full justify-center text-sm">Solicitar orçamento</Link>
            <p className="text-center text-gray-400 text-xs mt-3">Converse com nossa equipe sobre seu projeto.</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
