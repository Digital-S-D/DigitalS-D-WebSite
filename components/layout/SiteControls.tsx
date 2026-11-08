"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { BASE_PATH, COMPANY, LINKS } from "@/lib/constants";
import { localizedHref, type Locale } from "@/lib/i18n";

export const themeBootstrap = `(function(){try{var m=localStorage.getItem('sd-theme')||'system';if(!['light','dark','system'].includes(m))m='system';document.documentElement.dataset.themeMode=m;document.documentElement.dataset.theme=m==='system'?(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'):m}catch(e){}})()`;

export function ThemeControl({ locale }: { locale: Locale }) {
  const [mode, setMode] = useState("system");
  useEffect(() => {
    const media = matchMedia("(prefers-color-scheme: dark)");
    const update = () => {
      let saved = document.documentElement.dataset.themeMode || "system";
      try { saved = localStorage.getItem("sd-theme") || "system"; } catch { /* System fallback works without storage. */ }
      if (!["light", "dark", "system"].includes(saved)) saved = "system";
      setMode(saved);
      document.documentElement.dataset.themeMode = saved;
      document.documentElement.dataset.theme = saved === "system" ? (media.matches ? "dark" : "light") : saved;
    };
    update();
    media.addEventListener("change", update);
    window.addEventListener("storage", update);
    window.addEventListener("sd-theme-change", update);
    return () => { media.removeEventListener("change", update); window.removeEventListener("storage", update); window.removeEventListener("sd-theme-change", update); };
  }, []);
  return <select className="theme-control" aria-label={locale === "en" ? "Color theme" : "Tema de cores"} value={mode} onChange={(event) => {
    const next = event.target.value;
    document.documentElement.dataset.themeMode = next;
    document.documentElement.dataset.theme = next === "system" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : next;
    setMode(next);
    try { localStorage.setItem("sd-theme", next); } catch { /* Still apply the preference for this page. */ }
    window.dispatchEvent(new Event("sd-theme-change"));
  }}>
    <option value="system">{locale === "en" ? "System" : "Sistema"}</option>
    <option value="light">{locale === "en" ? "Light" : "Claro"}</option>
    <option value="dark">{locale === "en" ? "Dark" : "Escuro"}</option>
  </select>;
}

/** Repeated clicks scroll again; modified clicks retain normal browser behavior. */
export function AnchorNavigation() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      const link = (event.target as Element)?.closest<HTMLAnchorElement>("a[href]");
      if (!link || link.target === "_blank" || link.hasAttribute("download")) return;
      const destination = new URL(link.href, location.href);
      if (destination.origin !== location.origin || destination.pathname.replace(/\/$/, "") !== location.pathname.replace(/\/$/, "") || destination.search !== location.search || !destination.hash) return;
      let id: string;
      try { id = decodeURIComponent(destination.hash.slice(1)); } catch { return; }
      const target = document.getElementById(id);
      if (!target) return;
      event.preventDefault();
      if (location.hash !== destination.hash) history.pushState(history.state, "", destination.href);
      // Close handlers run before scrolling, so a mobile dialog cannot retain the scroll lock.
      requestAnimationFrame(() => target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth", block: "start" }));
    };
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);
  return null;
}

export function FloatingContact({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const en = locale === "en";
  useEffect(() => {
    if (open) root.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const contact = document.getElementById("contato");
    const observer = new IntersectionObserver(([entry]) => { setHidden(entry.isIntersecting); if (entry.isIntersecting) setOpen(false); });
    if (contact) observer.observe(contact);
    const outside = (event: PointerEvent) => { if (!root.current?.contains(event.target as Node)) setOpen(false); };
    const escape = (event: KeyboardEvent) => { if (open && event.key === "Escape") { setOpen(false); trigger.current?.focus(); } };
    document.addEventListener("pointerdown", outside);
    document.addEventListener("keydown", escape);
    return () => { observer.disconnect(); document.removeEventListener("pointerdown", outside); document.removeEventListener("keydown", escape); };
  }, [open]);
  return <div ref={root} className="floating-contact" hidden={hidden}>
    {open && <section id="contact-options" className="contact-popover" aria-label={en ? "Contact options" : "Opções de contato"}>
      <p>{en ? "Let's talk about your project" : "Vamos conversar sobre seu projeto"}</p>
      <a href={localizedHref(LINKS.whatsappOrcamento, locale)} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a>
      <a href={`mailto:${COMPANY.email}`}>{en ? "Send email" : "Enviar e-mail"}</a>
      <a onClick={() => setOpen(false)} href={`${BASE_PATH}${localizedHref("/#contato", locale)}`}>{en ? "Request a quote" : "Solicitar orçamento"}</a>
    </section>}
    <button ref={trigger} type="button" aria-expanded={open} aria-controls={open ? "contact-options" : undefined} onClick={() => setOpen(!open)}>
      {open ? <X size={22} aria-hidden="true" /> : <MessageCircle size={22} aria-hidden="true" />}{en ? (open ? "Close" : "Contact") : (open ? "Fechar" : "Contato")}
    </button>
  </div>;
}
