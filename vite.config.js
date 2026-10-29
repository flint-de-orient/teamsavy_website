import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pages, SITE_URL } from "./site.config.js";

const root = fileURLToPath(new URL(".", import.meta.url));

const pageFor = (ctxPath) => {
  const file = ctxPath.replace(/^\//, "") || "index.html";
  return pages.find((p) => p.file === file || p.file === `${file}index.html`);
};

const escape = (s) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");

// Sets <title>, lang and the head tags every page shares from site.config.js,
// so the HTML entries stay tiny.
function sharedHead() {
  return {
    name: "teamsavy-shared-head",
    transformIndexHtml(html, ctx) {
      const page = pageFor(ctx.path);
      if (!page) return html;
      const url = SITE_URL + page.path;
      const meta = (attrs) => ({ tag: "meta", attrs, injectTo: "head" });
      const link = (attrs) => ({ tag: "link", attrs, injectTo: "head" });
      return {
        html: html
          .replace('<html lang="en">', '<html lang="en-IN">')
          .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`),
        tags: [
          meta({ name: "description", content: page.description }),
          meta({ name: "robots", content: page.noindex ? "noindex, follow" : "index, follow, max-image-preview:large" }),
          meta({ name: "theme-color", content: "#05060f" }),
          ...(page.noindex ? [] : [link({ rel: "canonical", href: url })]),
          link({ rel: "icon", type: "image/png", href: "/favicon.png" }),
          link({ rel: "apple-touch-icon", href: "/app/icon-192.png" }),
          meta({ property: "og:type", content: "website" }),
          meta({ property: "og:site_name", content: "TeamSavy" }),
          meta({ property: "og:locale", content: "en_IN" }),
          meta({ property: "og:url", content: url }),
          meta({ property: "og:title", content: page.title }),
          meta({ property: "og:description", content: page.description }),
          meta({ property: "og:image", content: `${SITE_URL}/og-image.jpg` }),
          meta({ property: "og:image:width", content: "1024" }),
          meta({ property: "og:image:height", content: "500" }),
          meta({ name: "twitter:card", content: "summary_large_image" }),
          meta({ name: "twitter:title", content: page.title }),
          meta({ name: "twitter:description", content: page.description }),
          meta({ name: "twitter:image", content: `${SITE_URL}/og-image.jpg` }),
          meta({ name: "google-play-app", content: "app-id=com.teamsavy.teamsavy" }),
        ],
      };
    },
  };
}

export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), sharedHead()],
  // Font packages are CSS-only; bundle them so the SSR build drops them.
  ssr: { noExternal: [/^@fontsource/] },
  build: isSsrBuild
    ? {}
    : {
        rollupOptions: {
          input: Object.fromEntries(
            pages.map((p) => [p.file.replace(/(\/index)?\.html$/, "") || "home", root + p.file]),
          ),
        },
      },
}));
