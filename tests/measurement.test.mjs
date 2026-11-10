import assert from 'node:assert/strict';
import { test } from 'node:test';
import { DatabaseSync } from 'node:sqlite';
import { readFile } from 'node:fs/promises';
import { classify, visit, validEvent, TTL } from '../lib/acquisition.mjs';
import { collect, cleanup } from '../lib/measurement-server.mjs';
const event = { event: 'contact_click', page: '/criacao-de-sites/', locale: 'pt', contact_channel: 'whatsapp', ...classify('https://digitalsd.com.br/', 'https://google.com/search?q=private') };
test('categorises origins without treating search as organic or AI links as recommendations', () => {
  for (const [host, source, medium] of [['www.google.com.br','google','search_unclassified'],['bing.com','bing','search_unclassified'],['chatgpt.com','chatgpt','ai_referral'],['perplexity.ai','perplexity','ai_referral'],['l.facebook.com','facebook','referral'],['google.com.evil.example','other_external','referral']]) {
    const a = classify('https://digitalsd.com.br/?utm_source=ana@example.com', `https://${host}/private?token=sensitive`);
    assert.equal(a.source, source); assert.equal(a.medium, medium); assert.doesNotMatch(JSON.stringify(a), /private|token|sensitive|example.com/);
  }
  assert.equal(classify('https://digitalsd.com.br/', '').source, 'direct_or_unknown');
  assert.equal(classify('https://digitalsd.com.br/', 'invalid').source, 'unknown');
  const approved = [{ tags: ['google','cpc','launch'], source: 'google', medium: 'paid_search', id: 'launch' }];
  assert.equal(classify('https://digitalsd.com.br/?utm_source=google&utm_medium=cpc&utm_campaign=launch','',approved).medium,'paid_search');
  assert.equal(classify('https://digitalsd.com.br/?utm_source=google&utm_source=evil&utm_medium=cpc&utm_campaign=launch','',approved).source,'direct_or_unknown');
});
test('preserves categorical acquisition within window, expires safely and handles history/storage failure', () => {
  const first = visit({ now:100, url:'https://digitalsd.com.br/', referrer:'https://bing.com/' });
  const saved = {...first, attribution:{...first.attribution, raw:'private'}};
  const next = visit({ saved, now:200, url:'https://digitalsd.com.br/en/', referrer:'https://digitalsd.com.br/' });
  assert.equal(next.attribution.source,'bing'); assert.equal(next.attribution.raw,undefined);
  assert.equal(visit({ saved:first, now:100+TTL, url:'',referrer:'' }).attribution.source,'unknown');
  for (const navigation of ['reload','back_forward']) assert.equal(visit({now:200,url:'https://digitalsd.com.br/',referrer:'https://google.com/',navigation}).attribution.source,'unknown');
  assert.equal(visit({now:200,url:'',referrer:'',storageAvailable:false}).attribution.source,'unknown');
  assert.equal(visit({now:200,url:'https://digitalsd.com.br/',referrer:'https://www.digitalsd.com.br/'}).attribution.source,'unknown');
});
test('rejects unknown fields, paths, campaigns, locale and fabricated attribution combinations', () => {
  assert.ok(validEvent(event));
  assert.equal(validEvent({...event, source: 'constructor'}), false);
  assert.equal(validEvent({...event, source: '__proto__'}), false);
  for (const input of [{...event,email:'private'}, {...event,page:'/criacao-de-sites/?email=private'}, {...event,locale:'en'}, {...event,medium:'organic'}, {...event,campaign_id:'private'}, {...event,event:'pageview'}, {...event,event:'contact_registered'}]) assert.ok(!validEvent(input));
});
test('collector aggregates only allowed categories, fails closed, limits abuse and cleans independently', async t => {
  const sql = new DatabaseSync(':memory:'); t.after(()=>sql.close());
  sql.exec(await readFile(new URL('../migrations/0001_measurement.sql',import.meta.url),'utf8'));
  const db = { prepare(query) { const st=sql.prepare(query); return { bind(...args) { return { first:async()=>st.get(...args),run:async()=>st.run(...args) }; } }; },async batch(statements) { for(const st of statements) await st.run(); } };
  const env={MEASUREMENT_ENABLED:'true',MEASUREMENT_DB:db,MEASUREMENT_RATE_SECRET:'s'.repeat(32)};
  const call=(data=event, options={})=>collect({env,request:new Request('https://digitalsd.com.br/api/measure',{method:'POST',headers:{Origin:'https://digitalsd.com.br','Content-Type':'application/json','CF-Connecting-IP':'192.0.2.1',...options},body:JSON.stringify(data)})});
  assert.equal((await call({...event,message:'secret'})).status,400);
  assert.equal((await call(event,{Origin:'https://evil.example'})).status,403);
  assert.equal((await call({...event,extra:'a'.repeat(3000)})).status,413);
  for(let i=0;i<20;i++) assert.equal((await call()).status,204);
  assert.equal((await call()).status,429);
  const row=sql.prepare('SELECT * FROM measurement_counts').get();assert.equal(row.n,20);
  assert.doesNotMatch(JSON.stringify(row),/192\.0\.2|search\?q/);
  await cleanup(env,Date.now()+91*86400000);assert.equal(sql.prepare('SELECT count(*) AS n FROM measurement_counts').get().n,0);
  assert.equal((await collect({env:{...env,MEASUREMENT_ENABLED:'false'},request:new Request('https://digitalsd.com.br/api/measure',{method:'POST'})})).status,503);
});
