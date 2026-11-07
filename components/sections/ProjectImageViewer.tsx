"use client";

import Image, { type ImageProps } from "next/image";
import { createContext, useContext, useEffect, useId, useRef, useState, type ReactNode } from "react";
import { type Locale } from "@/lib/i18n";
import "./project-image-viewer.css";

type Picture = { src: string; alt: string; caption: string };
const ViewerContext = createContext<(button: HTMLButtonElement) => void>(() => {});

export function ProjectImage({ locale = "pt", ...props }: ImageProps & { locale?: Locale }) {
  const open = useContext(ViewerContext);
  return <button type="button" data-viewer-src={String(props.src)} data-viewer-alt={props.alt}
    aria-label={`${locale === "en" ? "Enlarge image" : "Ampliar imagem"}: ${props.alt}`}
    className="block w-full rounded-xl cursor-zoom-in" onClick={(event) => open(event.currentTarget)}>
    <Image {...props} />
  </button>;
}

export function ProjectImageViewer({ children, locale = "pt" }: { children: ReactNode; locale?: Locale }) {
  const english = locale === "en";
  const root = useRef<HTMLDivElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const origin = useRef<HTMLButtonElement | null>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const [pictures, setPictures] = useState<Picture[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);
  const [failed, setFailed] = useState(false);
  const titleId = useId();
  const historyKey = useId();
  const isOpen = selected !== null;
  const picture = selected === null ? null : pictures[selected];
  const pointerStart = useRef<EventTarget | null>(null);

  function open(button: HTMLButtonElement) {
    const buttons = [...(root.current?.querySelectorAll<HTMLButtonElement>("button[data-viewer-src]") ?? [])];
    origin.current = button;
    setPictures(buttons.map((item) => ({ src: item.dataset.viewerSrc!, alt: item.dataset.viewerAlt!,
      caption: item.closest("figure")?.querySelector("figcaption")?.textContent ?? item.dataset.viewerAlt! })));
    setSelected(buttons.indexOf(button));
    setZoom(1);
    setFailed(false);
  }

  // A history entry lets mobile Back dismiss the viewer without leaving the project.
  useEffect(() => {
    if (!isOpen) return;
    const modal = dialog.current!;
    const savedState = window.history.state;
    window.history.pushState({ ...savedState, imageViewer: historyKey }, "");
    const previousOverflow = document.body.style.overflow;
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    modal.showModal();
    const onBack = () => setSelected(null);
    const stage = viewport.current!;
    const onPointerDown = (event: PointerEvent) => { pointerStart.current = event.target; };
    const onBlackClick = (event: MouseEvent) => {
      if (event.target === stage && pointerStart.current === stage) window.history.back();
    };
    stage.addEventListener("pointerdown", onPointerDown);
    stage.addEventListener("click", onBlackClick);
    window.addEventListener("popstate", onBack);
    return () => {
      window.removeEventListener("popstate", onBack);
      stage.removeEventListener("pointerdown", onPointerDown);
      stage.removeEventListener("click", onBlackClick);
      modal.close();
      document.body.style.overflow = previousOverflow;
      // Remove our marker if the route unmounts without a Back event.
      if (window.history.state?.imageViewer === historyKey) window.history.replaceState(savedState, "");
      origin.current?.focus({ preventScroll: true });
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [isOpen, historyKey]);

  function close() { window.history.back(); }
  function move(direction: number) {
    setSelected((current) => current === null ? null : (current + direction + pictures.length) % pictures.length);
    setZoom(1);
    setFailed(false);
    viewport.current?.scrollTo(0, 0);
  }

  return <ViewerContext.Provider value={open}>
    <div ref={root}>{children}</div>
    <dialog ref={dialog} className="project-viewer" aria-labelledby={titleId}
      onCancel={(event) => { event.preventDefault(); close(); }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); }
        if (event.key === "ArrowRight") { event.preventDefault(); move(1); }
      }}>
      <div className="project-viewer-toolbar">
        <h2 id={titleId}>{english ? "Image viewer" : "Visualizador de imagens"}</h2>
        <button type="button" autoFocus onClick={close}>{english ? "Close" : "Fechar"} ✕</button>
      </div>
      {/* Close only when a tap starts AND ends on black space, never after dragging an image. */}
      <div ref={viewport} className="project-viewer-stage" data-zoomed={zoom > 1 || undefined}>
        {picture && (failed ? <p role="alert">{english ? "Image unavailable. Try another image or close the viewer." : "Imagem indisponível. Tente outra imagem ou feche o visualizador."}</p> :
          <Image key={picture.src} src={picture.src} alt={picture.alt} width={1600} height={1200} unoptimized
            draggable={false} onError={() => setFailed(true)} className="project-viewer-image"
            style={zoom === 1 ? undefined : { width: `${zoom * 100}%`, maxWidth: "none", maxHeight: "none", flexShrink: 0 }} />)}
      </div>
      <div className="project-viewer-controls">
        <button type="button" onClick={() => move(-1)} aria-label={english ? "Previous image" : "Imagem anterior"}>←</button>
        <span aria-live="polite">{selected === null ? 0 : selected + 1} / {pictures.length}</span>
        <button type="button" onClick={() => move(1)} aria-label={english ? "Next image" : "Próxima imagem"}>→</button>
        <button type="button" disabled={zoom === 1} onClick={() => setZoom((value) => Math.max(1, value - 0.5))} aria-label={english ? "Zoom out" : "Reduzir"}>−</button>
        <button type="button" onClick={() => setZoom(1)}>{english ? "Fit" : "Ajustar"}</button>
        <button type="button" disabled={zoom === 3} onClick={() => setZoom((value) => Math.min(3, value + 0.5))} aria-label={english ? "Zoom in" : "Ampliar"}>+</button>
      </div>
      <p className="project-viewer-caption">{picture?.caption}</p>
    </dialog>
  </ViewerContext.Provider>;
}
