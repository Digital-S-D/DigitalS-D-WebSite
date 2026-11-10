"use client";
import { useEffect, useState } from 'react';
import { captureEntry, expireMeasurement, measure, measurementEnabled, setMeasurementAllowed } from '@/lib/measurement-browser';

export function Measurement({ locale }: { locale: 'pt' | 'en' }) {
  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    if (!measurementEnabled) return;
    captureEntry();
    const click = (event: MouseEvent) => {
      const anchor = (event.target as Element)?.closest?.('a[href]');
      if (!anchor) return;
      try {
        const url = new URL(anchor.getAttribute('href')!, location.origin);
        if (url.protocol === 'mailto:') measure('contact_click', 'email');
        else if (url.protocol === 'https:' && url.hostname === 'wa.me') measure('contact_click', 'whatsapp');
      } catch { /* Ignore invalid links. */ }
    };
    let lastTouch = 0;
    const activity = () => { if (Date.now() - lastTouch > 1000) { expireMeasurement(); lastTouch = Date.now(); } };
    const hide = () => { setMeasurementAllowed(false); setAllowed(false); };
    const show = (event: PageTransitionEvent) => { if (event.persisted) { hide(); captureEntry('back_forward'); } };
    document.addEventListener('click', click);
    document.addEventListener('pointerdown', activity, { passive: true });
    document.addEventListener('keydown', activity);
    document.addEventListener('scroll', activity, { passive: true });
    window.addEventListener('pageshow', show);
    window.addEventListener('pagehide', hide);
    return () => {
      document.removeEventListener('click', click); document.removeEventListener('pointerdown', activity);
      document.removeEventListener('keydown', activity); document.removeEventListener('scroll', activity);
      window.removeEventListener('pageshow', show); window.removeEventListener('pagehide', hide); setMeasurementAllowed(false);
    };
  }, []);
  if (!measurementEnabled) return null;
  return <div className="container-custom py-4 text-sm text-gray-300">
    <p>{locale === 'en' ? 'Optional contact measurement: only categories of origin, page and action are sent. No form contents. Permission lasts until this page is reloaded or closed.' : 'Medição opcional de contatos: enviamos apenas categorias de origem, página e ação. Sem o conteúdo do formulário. A permissão dura até recarregar ou fechar esta página.'}</p>
    <button type="button" aria-pressed={allowed} onClick={() => { captureEntry(); setMeasurementAllowed(!allowed); setAllowed(!allowed); }} className="text-blue-300 underline py-3">{locale === 'en' ? (allowed ? 'Disable optional measurement' : 'Allow optional measurement') : (allowed ? 'Desativar medição opcional' : 'Permitir medição opcional')}</button>
  </div>;
}
