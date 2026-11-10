import { validEvent } from './acquisition.mjs';
const answer = status => new Response(null, { status, headers: { 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
export async function collect({ request, env }) {
  try {
    if (request.method !== 'POST') return answer(405);
    if (env.MEASUREMENT_ENABLED !== 'true' || !env.MEASUREMENT_DB || !env.MEASUREMENT_RATE_SECRET || env.MEASUREMENT_RATE_SECRET.length < 32) return answer(503);
    const origin = request.headers.get('origin');
    const allowed = (env.MEASUREMENT_ORIGINS || 'https://digitalsd.com.br').split(',').map(s => s.trim());
    if (!allowed.includes(origin) || new URL(request.url).origin !== origin) return answer(403);
    if (!/^application\/json(?:;|$)/i.test(request.headers.get('content-type') || '')) return answer(415);
    const reader = request.body?.getReader(); if (!reader) return answer(400);
    const bytes = []; let size = 0;
    while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 2048) { await reader.cancel(); return answer(413); } bytes.push(...value); }
    let data;
    try { data = JSON.parse(new TextDecoder().decode(new Uint8Array(bytes))); } catch { return answer(400); }
    if (!validEvent(data)) return answer(400);
    const db = env.MEASUREMENT_DB; const now = Date.now(); const bucket = Math.floor(now / 60000);
    // Abuse protection only: a rotating HMAC, never the raw IP or an analytics ID.
    const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(env.MEASUREMENT_RATE_SECRET), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
    const digest = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(`${bucket}:${request.headers.get('CF-Connecting-IP') || 'unknown'}`));
    const subject = [...new Uint8Array(digest)].map(x => x.toString(16).padStart(2, '0')).join('');
    const rate = await db.prepare('INSERT INTO measurement_rate(subject,bucket,n) VALUES(?,?,1) ON CONFLICT(subject,bucket) DO UPDATE SET n=n+1 RETURNING n').bind(subject, bucket).first();
    if (rate.n > 20) return answer(429);
    await db.prepare('INSERT INTO measurement_counts(day,page,locale,event,channel,source,medium,basis,campaign,error,n) VALUES(?,?,?,?,?,?,?,?,?,?,1) ON CONFLICT(day,page,locale,event,channel,source,medium,basis,campaign,error) DO UPDATE SET n=n+1')
      .bind(new Date(now).toISOString().slice(0, 10), data.page, data.locale, data.event, data.contact_channel, data.source, data.medium, data.attribution_basis, data.campaign_id || '', data.error_category || '').run();
    return answer(204);
  } catch { return answer(503); }
}

export async function cleanup(env, now = Date.now()) {
  if (!env.MEASUREMENT_DB) throw new Error('Missing measurement database');
  await env.MEASUREMENT_DB.batch([
    env.MEASUREMENT_DB.prepare('DELETE FROM measurement_rate WHERE bucket<?').bind(Math.floor(now / 60000) - 120),
    env.MEASUREMENT_DB.prepare('DELETE FROM measurement_counts WHERE day<?').bind(new Date(now - 90 * 86400000).toISOString().slice(0, 10)),
  ]);
}
