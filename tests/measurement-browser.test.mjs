import assert from 'node:assert/strict';
import { test } from 'node:test';
test('browser sends no event before permission and transmits exact safe JSON without automatic URL/referrer', async t => {
  process.env.NEXT_PUBLIC_MEASUREMENT_ENABLED='true';
  const store=new Map();const requests=[];
  const originals={location:globalThis.location,document:globalThis.document,sessionStorage:globalThis.sessionStorage,fetch:globalThis.fetch};
  Object.assign(globalThis,{location:new URL('https://digitalsd.com.br/criacao-de-sites/?email=private@example.com'),document:{referrer:'https://google.com/search?q=private'},sessionStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v),removeItem:k=>store.delete(k)},fetch:async(url,options)=>{requests.push({url,options});return new Response(null,{status:204});}});
  t.after(()=>Object.assign(globalThis,originals));
  const m=await import('../lib/measurement-browser.ts');m.captureEntry();m.measure('contact_click','whatsapp');assert.equal(requests.length,0);assert.equal(store.size,0);
  m.setMeasurementAllowed(true);m.measure('contact_click','whatsapp');assert.equal(requests.length,1);
  assert.equal(requests[0].url,'/api/measure');assert.equal(requests[0].options.referrerPolicy,'no-referrer');assert.equal(requests[0].options.credentials,'omit');
  assert.doesNotMatch(requests[0].options.body,/private|example.com|https:|\?/);
  assert.equal(JSON.parse(requests[0].options.body).source,'google');
  m.setMeasurementAllowed(false);m.measure('contact_registered');assert.equal(requests.length,1);assert.equal(store.size,0);
  m.captureEntry();m.setMeasurementAllowed(true);m.measure('contact_click','email');
  assert.equal(JSON.parse(requests[1].options.body).source,'unknown');
  m.setMeasurementAllowed(false);
});
