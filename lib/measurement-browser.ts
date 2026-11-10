"use client";
import { visit, classify, TTL, publicPaths, validEvent } from './acquisition.mjs';

export const measurementEnabled = process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED === 'true';
const key = 'dsd-measurement-v1';
const unknownState = (now: number) => ({ attribution: { source: 'unknown', medium: 'unknown', attribution_basis: 'unavailable' }, lastActive: now });
let allowed = false;
let state: ReturnType<typeof visit> | undefined;
let entry: { attribution: ReturnType<typeof classify>; navigation: string; lastActive: number } | undefined;
let captured = false;

export function captureEntry(navigationOverride?: string) {
  if (!measurementEnabled || entry) return;
  try {
    entry = { attribution: classify(location.href, document.referrer), navigation: navigationOverride || (captured ? 'back_forward' : (performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined)?.type || 'navigate'), lastActive: Date.now() };
    captured = true;
  } catch { entry = { ...unknownState(Date.now()), navigation: 'back_forward' }; captured = true; }
}
export function setMeasurementAllowed(value: boolean) {
  allowed = value && measurementEnabled;
  state = undefined;
  try { sessionStorage.removeItem(key); } catch { /* No alternative persistence. */ }
  // Start the activity clock before the first event, retaining the entry time.
  if (allowed && entry) state = visit({ saved: undefined, now: entry.lastActive, url: '', referrer: '', initial: entry.attribution, navigation: entry.navigation });
  if (!allowed) entry = undefined;
}

function persist(now: number) {
  try { sessionStorage.setItem(key, JSON.stringify(state)); }
  catch {
    state = unknownState(now);
    try { sessionStorage.removeItem(key); } catch { /* No fallback storage. */ }
  }
}

// Optional telemetry must never throw into contact handlers, even synchronously.
export function measure(event: string, channel = 'form', errorCategory?: string): boolean {
  try {
    if (!measurementEnabled || !allowed || !entry) return false;
    const now = Date.now(); let available = true;
    let saved = state;
    try { if (!saved) saved = JSON.parse(sessionStorage.getItem(key) || 'null'); }
    catch { available = false; }
    state = visit({ saved, now, url: '', referrer: '', initial: entry.attribution, storageAvailable: available, navigation: entry.navigation });
    const page = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
    if (!publicPaths.includes(page)) return false;
    // The final write must succeed before attributing the event to a known source.
    if (available) persist(now);
    const data = { event, page, locale: page.startsWith('/en/') ? 'en' : 'pt', contact_channel: channel, ...state!.attribution, ...(errorCategory ? { error_category: errorCategory } : {}) };
    if (!validEvent(data)) return false;
    const controller = typeof AbortController === 'function' ? new AbortController() : undefined;
    const timer = controller ? setTimeout(() => controller.abort(), 3000) : undefined;
    try {
      const request = fetch('/api/measure', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data), credentials: 'omit', referrerPolicy: 'no-referrer', ...(controller ? { signal: controller.signal } : {}) });
      void Promise.resolve(request).catch(() => {}).finally(() => clearTimeout(timer));
    } catch { clearTimeout(timer); return false; }
    return true;
  } catch { return false; }
}
export function expireMeasurement() {
  try {
    if (!allowed || !state) return;
    const now = Date.now();
    if (now < state.lastActive || now - state.lastActive >= TTL) state = unknownState(now);
    else state.lastActive = now;
    persist(now);
  } catch { /* Telemetry cannot interrupt navigation or user input. */ }
}
