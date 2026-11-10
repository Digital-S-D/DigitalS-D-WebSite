"use client";
import { visit, classify, TTL, publicPaths, validEvent } from './acquisition.mjs';

export const measurementEnabled = process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED === 'true';
const key = 'dsd-measurement-v1';
let allowed = false;
let state: ReturnType<typeof visit> | undefined;
let entry: { attribution: ReturnType<typeof classify>; navigation: string } | undefined;
let captured = false;

export function captureEntry(navigationOverride?: string) {
  if (!measurementEnabled || entry) return;
  entry = { attribution: classify(location.href, document.referrer), navigation: navigationOverride || (captured ? 'back_forward' : (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)?.type || 'navigate') };
  captured = true;
}
export function setMeasurementAllowed(value: boolean) {
  allowed = value && measurementEnabled;
  state = undefined;
  try { sessionStorage.removeItem(key); } catch { /* No alternative persistence. */ }
  // Permission lasts in this document only; navigation/reload requires opt-in again.
  // This avoids persistent consent identifiers and inherited permission in duplicated tabs.
  if (!allowed) entry = undefined;
}
export function measure(event: string, channel = 'form', errorCategory?: string) {
  if (!measurementEnabled || !allowed || !entry) return false;
  const now = Date.now(); let available = true;
  let saved = state;
  try {
    if (!saved) saved = JSON.parse(sessionStorage.getItem(key) || 'null');
    sessionStorage.setItem(key, '{}');
  } catch { available = false; }
  state = visit({ saved, now, url: '', referrer: '', initial: entry.attribution, storageAvailable: available, navigation: entry.navigation });
  const page = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
  if (!publicPaths.includes(page)) return false;
  const data = { event, page, locale: page.startsWith('/en/') ? 'en' : 'pt', contact_channel: channel, ...state.attribution, ...(errorCategory ? { error_category: errorCategory } : {}) };
  try { if (available) sessionStorage.setItem(key, JSON.stringify(state)); } catch { /* No fallback storage. */ }
  if (!validEvent(data)) return false;
  // Exact JSON only: no SDK, automatic pageview, raw URL/referrer, or provider enrichment.
  void fetch('/api/measure', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), credentials: 'omit', referrerPolicy: 'no-referrer', signal: AbortSignal.timeout(3000) }).catch(() => {});
  return true;
}
export function expireMeasurement() {
  if (!allowed || !state) return;
  const now = Date.now();
  if (now - state.lastActive >= TTL) state = { attribution: { source: 'unknown', medium: 'unknown', attribution_basis: 'unavailable' }, lastActive: now };
  else state.lastActive = now;
  try { sessionStorage.setItem(key, JSON.stringify(state)); } catch { state = { attribution: { source: 'unknown', medium: 'unknown', attribution_basis: 'unavailable' }, lastActive: now }; }
}
