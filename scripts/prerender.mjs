// Runs after `vite build` and `vite build --ssr`:
//   1. renders every page in site.config.js into its dist/*.html
//   2. preloads the two fonts the first screen needs
//   3. writes dist/sitemap.xml
import { readFileSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { fileURLToPath, pathToFileURL } from "node:url";
import { pages, SITE_URL } from "../site.config.js";

const root = fileURLToPath(new URL("..", import.meta.url));
const dist = `${root}dist/`;
const { render } = await import(pathToFileURL(`${root}dist-ssr/entry-server.js`).href);

// Latin subsets of the display and body fonts, as emitted by the client build
const assets = readdirSync(`${dist}assets`);
const preloads = ["bricolage-grotesque-latin-wght-normal", "inter-latin-wght-normal"]
  .map((name) => assets.find((f) => f.startsWith(name) && f.endsWith(".woff2")))
  .filter(Boolean)
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin>`)
  .join("\n    ");

for (const page of pages) {
  const file = dist + page.file;
  let html = readFileSync(file, "utf8");
  const app = render(page);
  if (!html.includes('<div id="root"></div>')) throw new Error(`No empty #root in ${page.file}`);
  html = html.replace('<div id="root"></div>', `<div id="root">${app}</div>`);
  html = html.replace("</title>", `</title>\n    ${preloads}`);
  writeFileSync(file, html);
  console.log(`prerendered ${page.path}  (${Math.round(app.length / 1024)} kB)`);
}

const today = new Date().toISOString().slice(0, 10);
const urls = pages
  .filter((p) => !p.noindex)
  .map(
    (p) =>
      `  <url>\n    <loc>${SITE_URL}${p.path}</loc>\n    <lastmod>${today}</lastmod>\n    <priority>${(p.priority ?? 0.5).toFixed(1)}</priority>\n  </url>`,
  )
  .join("\n");
writeFileSync(
  `${dist}sitemap.xml`,
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);
console.log(`sitemap.xml: ${pages.filter((p) => !p.noindex).length} URLs`);

rmSync(`${root}dist-ssr`, { recursive: true, force: true });
