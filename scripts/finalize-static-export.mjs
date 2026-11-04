import { readdir, readFile, copyFile } from "node:fs/promises";
import { resolve, relative, join, sep } from "node:path";

// Next.js #85374: Windows exports may place RSC segments in nested
// __next.* directories, while the browser requests a flat, dotted name.
// Keep the originals and add the exact aliases requested by the router.
const exportDirectory = resolve("out");

async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const groups = await Promise.all(entries.map((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? filesIn(path) : entry.isFile() ? [path] : [];
  }));
  return groups.flat();
}

let aliases = 0;
for (const source of await filesIn(exportDirectory)) {
  if (!source.endsWith(".txt")) continue;
  const parts = relative(exportDirectory, source).split(sep);
  const segmentIndex = parts.findIndex((part) => part.startsWith("__next."));
  if (segmentIndex < 0 || segmentIndex === parts.length - 1) continue;
  const destination = join(exportDirectory, ...parts.slice(0, segmentIndex), parts.slice(segmentIndex).join("."));
  const content = await readFile(source);
  try {
    const existing = await readFile(destination);
    if (!existing.equals(content)) throw new Error(`Conflicting RSC export: ${destination}`);
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    await copyFile(source, destination);
    aliases += 1;
  }
}
console.log(`Static export ready: ${aliases} RSC path aliases added.`);
