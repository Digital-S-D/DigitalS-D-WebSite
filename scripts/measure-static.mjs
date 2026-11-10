import { readFile, stat, mkdir, writeFile } from 'node:fs/promises';
import { gzipSync } from 'node:zlib';
import { resolve, join } from 'node:path';
const directories = process.argv.slice(2);
const results = [];
for (const directory of directories) {
  const root = resolve(directory); const html = await readFile(join(root, 'index.html'), 'utf8');
  const paths = [...new Set([...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map(m => m[1]).filter(p => p.startsWith('/_next/')))];
  let decoded = 0; let gzip = 0;
  for (const path of paths) { const bytes = await readFile(join(root, path)); decoded += bytes.length; gzip += gzipSync(bytes).length; }
  results.push({ artifact: directory, generated: (await stat(join(root, 'index.html'))).mtime.toISOString(), scripts: paths.length, decodedJsBytes: decoded, estimatedGzipJsBytes: gzip });
}
await mkdir('docs/seo-geo', { recursive: true });
await writeFile('docs/seo-geo/etapa-3-recursos.json', JSON.stringify({ note: 'Export comparison only. Gzip is an offline estimate, not browser transfer, execution cost or Core Web Vitals.', results }, null, 2));
console.log(JSON.stringify(results));
