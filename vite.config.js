import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pages, SITE_URL } from "./site.config.js";

const root = fileURLToPath(new URL(".", import.meta.url));

// Adds the head tags every page shares, so the HTML entries stay tiny.
function sharedHead() {
  return {
    name: "teamsavy-shared-head",
    transformIndexHtml(html, ctx) {
      const file = ctx.path.replace(/^\//, "") || "index.html";
      const page = pages.find((p) => p.file === file || p.file === `${file}index.html`);
      if (!page) return html;
      const title = html.match(/<title>(.*?)<\/title>/)?.[1] ?? "TeamSavy";
      const url = SITE_URL + page.path;
      const meta = (attrs) => ({ tag: "meta", attrs, injectTo: "head" });
      return [
        meta({ name: "description", content: page.description }),
        meta({ name: "theme-color", content: "#0A2C9A" }),
        { tag: "link", attrs: { rel: "canonical", href: url }, injectTo: "head" },
        { tag: "link", attrs: { rel: "icon", type: "image/png", href: "/favicon.png" }, injectTo: "head" },
        { tag: "link", attrs: { rel: "apple-touch-icon", href: "/app/icon-192.png" }, injectTo: "head" },
        meta({ property: "og:type", content: "website" }),
        meta({ property: "og:site_name", content: "TeamSavy" }),
        meta({ property: "og:url", content: url }),
        meta({ property: "og:title", content: title }),
        meta({ property: "og:description", content: page.description }),
        meta({ property: "og:image", content: `${SITE_URL}/og-image.jpg` }),
        meta({ name: "twitter:card", content: "summary_large_image" }),
        meta({ name: "google-play-app", content: "app-id=com.teamsavy.teamsavy" }),
      ];
    },
  };
}

export default defineConfig({
  plugins: [react(), sharedHead()],
  build: {
    rollupOptions: {
      input: Object.fromEntries(pages.map((p) => [p.file.replace(/(\/index)?\.html$/, "") || "home", root + p.file])),
    },
  },
});
