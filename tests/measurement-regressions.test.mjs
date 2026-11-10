import assert from 'node:assert/strict';
import { test } from 'node:test';
let scenario = 0;
async function fixture(t) {
  process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED = 'true';
  const store = new Map(); const requests = []; let now = 100000;
  for (const [key, value] of Object.entries({
    location: new URL('https://digitalsd.com.br/criacao-de-sites/'),
    document: { referrer: 'https://google.com/search?q=private' },
    sessionStorage: { getItem: k => store.get(k) || null, setItem: (k,v) => store.set(k,v), removeItem: k => store.delete(k) },
  })) { const descriptor = Object.getOwnPropertyDescriptor(globalThis, key); Object.defineProperty(globalThis,key,{value,writable:true,configurable:true}); t.after(()=>{if(descriptor)Object.defineProperty(globalThis,key,descriptor);else delete globalThis[key];}); }
  t.mock.method(Date,'now',()=>now);
  t.mock.method(globalThis,'fetch',async(url,options)=>{requests.push(JSON.parse(options.body));return new Response(null,{status:204});});
  const m = await import(`../lib/measurement-browser.ts?regression=${scenario++}`);
  m.captureEntry(); m.setMeasurementAllowed(true);
  t.after(()=>m.setMeasurementAllowed(false));
  return { m, store, requests, advance: ms => { now += ms; } };
}
test('entry expires after 31 inactive minutes before the first event, with or without activity callback', async t => {
  const {m,advance,requests}=await fixture(t);
  advance(31*60000); m.expireMeasurement(); m.measure('contact_click','whatsapp');
  assert.equal(requests[0].source,'unknown'); assert.equal(requests[0].attribution_basis,'unavailable');
});
test('first event itself enforces expiry without a previous timer or activity callback', async t => {
  const {m,advance,requests}=await fixture(t);advance(31*60000);m.measure('contact_start');
  assert.equal(requests[0].source,'unknown');
});
test('a full storage write failure downgrades the event and subsequent events to unknown', async t => {
  const {m,requests}=await fixture(t);
  t.mock.method(sessionStorage,'setItem',(_key,value)=>{if(value!=='{}')throw new Error('quota');});
  m.measure('contact_start');m.measure('contact_registered');
  assert.equal(requests.length,2);for(const event of requests){assert.equal(event.source,'unknown');assert.equal(event.attribution_basis,'unavailable');}
});
test('missing AbortSignal.timeout uses the portable controller without throwing', async t => {
  const {m,requests}=await fixture(t);
  const descriptor=Object.getOwnPropertyDescriptor(AbortSignal,'timeout');
  Object.defineProperty(AbortSignal,'timeout',{value:undefined,configurable:true});
  t.after(()=>Object.defineProperty(AbortSignal,'timeout',descriptor));
  assert.equal(AbortSignal.timeout,undefined);
  assert.doesNotThrow(()=>assert.equal(m.measure('contact_start'),true));assert.equal(requests.length,1);
});
test('synchronous transport failures never propagate from start, error or accepted-contact telemetry', async t => {
  const {m}=await fixture(t);t.mock.method(globalThis,'fetch',()=>{throw new TypeError('transport unavailable');});
  for(const name of ['contact_start','contact_registered'])assert.doesNotThrow(()=>assert.equal(m.measure(name),false));
  assert.doesNotThrow(()=>assert.equal(m.measure('contact_error','form','delivery'),false));
  assert.doesNotThrow(()=>m.expireMeasurement());
});
