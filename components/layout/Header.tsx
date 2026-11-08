"use client";

import { createTranslator, localizedHref, type Locale } from "@/lib/i18n";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ThemeControl } from "./SiteControls";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Menu, X } from "lucide-react";
import { BASE_PATH, NAV_LINKS } from "@/lib/constants";

export function Header({ locale = "pt" }: { locale?: Locale } = {}) {
  const t = createTranslator(locale);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const desktop = window.matchMedia("(min-width: 1280px)");
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
    // Only backdrop clicks close the native dialog; Escape and the close
    // button remain the equivalent keyboard actions.
    const onBackdropClick = (event: MouseEvent) => {
      if (event.target === dialog) setMenuOpen(false);
    };
    dialog?.addEventListener("click", onBackdropClick);
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog?.removeEventListener("click", onBackdropClick);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#060D1A] backdrop-blur-xl border-b border-brand-blue/20 shadow-lg shadow-black/40" : "bg-brand-navy/95"
      }`}>
        <nav className="container-custom" aria-label={t("Navegação principal")}>
          <div className="flex items-center justify-between h-16 xl:h-20">
            <Link href={localizedHref("/#hero", locale)} onClick={closeMenu} aria-label={t("Digital S&D — início")} className="inline-flex items-center min-h-11">
              <Image src={`${BASE_PATH}/images/brand-icon.png`} alt={t("")} width={44} height={44} className="w-11 h-11 xl:hidden" />
              <Image src={`${BASE_PATH}/images/brand-logo.png`} alt={t("")} width={672} height={241} className="hidden xl:block w-32 h-auto" />
            </Link>
            <ul className="hidden xl:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={localizedHref(link.href, locale)} className="inline-flex min-h-11 items-center px-2 xl:px-4 py-2 font-outfit text-sm font-medium rounded-lg text-gray-200 hover:text-white hover:bg-white/10 transition-colors">{t(link.label)}</Link>
                </li>
              ))}
            </ul>
            <div className="hidden xl:flex items-center gap-2"><LanguageSwitcher locale={locale} /><ThemeControl locale={locale} /><Link href={localizedHref("/#contato", locale)} className="hidden xl:inline-flex btn-primary text-sm">{t("Solicitar orçamento")}</Link></div>
            <div className="flex xl:hidden items-center gap-1"><LanguageSwitcher locale={locale} /><ThemeControl locale={locale} />
            <button ref={triggerRef} type="button" onClick={() => setMenuOpen(true)} aria-label={t("Abrir menu")}
              aria-expanded={menuOpen} aria-controls="mobile-menu" aria-haspopup="dialog"
              className="xl:hidden w-11 h-11 flex items-center justify-center rounded-lg border border-white/20 text-white hover:bg-white/10">
              <Menu size={22} aria-hidden="true" />
            </button></div>
          </div>
        </nav>
      </header>
      <noscript>
        <nav aria-label={t("Navegação sem JavaScript")} className="xl:hidden relative z-10 mt-16 bg-brand-navy border-b border-white/10">
          <ul className="container-custom flex flex-wrap gap-x-5 gap-y-1 py-3">
            {NAV_LINKS.map((link) => (
              <li key={link.href}><a href={`${BASE_PATH}${localizedHref(link.href, locale)}`} className="inline-flex min-h-12 items-center text-sm text-blue-300 underline underline-offset-4">{t(link.label)}</a></li>
            ))}
          </ul>
        </nav>
        <style>{"header button[aria-controls=mobile-menu]{display:none!important}"}</style>
      </noscript>
      {/* O diálogo nativo mantém o foco no painel e torna o restante da página inerte. */}
      <dialog ref={dialogRef} id="mobile-menu" aria-labelledby="mobile-menu-title"
        onCancel={(event) => { event.preventDefault(); closeMenu(); }}
        onClose={() => {
          closeMenu();
          if (window.matchMedia("(max-width: 1279px)").matches) triggerRef.current?.focus({ preventScroll: true });
        }}
        className="fixed inset-y-0 left-auto right-0 m-0 h-dvh max-h-none w-80 max-w-[90vw] border-l border-white/10 bg-brand-navy text-white p-0 backdrop:bg-black/70 backdrop:backdrop-blur-sm">
        <div className="flex flex-col min-h-full">
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
            <h2 id="mobile-menu-title" className="font-sora font-bold">{t("Menu")}</h2>
            <button type="button" autoFocus onClick={closeMenu} aria-label={t("Fechar menu")} className="w-11 h-11 flex items-center justify-center rounded-lg hover:bg-white/10"><X size={22} aria-hidden="true" /></button>
          </div>
          <nav aria-label={t("Navegação mobile")} className="flex-1 px-4 py-6 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={localizedHref(link.href, locale)} onClick={closeMenu} className="px-4 py-3 font-outfit text-base font-medium text-gray-200 hover:text-white hover:bg-white/5 rounded-xl">{t(link.label)}</Link>
            ))}
          </nav>
          <div className="px-6 pb-8 pt-4 border-t border-white/10">
            <Link href={localizedHref("/#contato", locale)} onClick={closeMenu} className="btn-primary w-full justify-center text-sm">{t("Solicitar orçamento")}</Link>
            <p className="text-center text-gray-400 text-xs mt-3">{t("Converse com nossa equipe sobre seu projeto.")}</p>
          </div>
        </div>
      </dialog>
    </>
  );
}
