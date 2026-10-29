# teamsavy.com

Marketing site for TeamSavy. Vite + React, plain CSS, no backend. Multi-page:
each page is its own HTML file, so it works on any static host without rewrites.

```
npm install
npm run dev       # local dev server
npm run build     # static site in dist/ — upload the whole folder
```

`npm run build` does three things: the normal client build, a server build of
`src/entry-server.jsx`, and `scripts/prerender.mjs`, which writes every page's full
HTML into `dist/` (so Google and AI crawlers read the content without JavaScript),
preloads the first-screen fonts and generates `dist/sitemap.xml`. The browser then
hydrates that HTML.

| URL | Entry | Script |
|---|---|---|
| `/` | `index.html` | `src/pages/home.jsx` |
| `/features/` | `features/index.html` | `src/pages/features.jsx` |
| `/ai-hr-software/` | `ai-hr-software/index.html` | `src/pages/solution.jsx` (`ai`) |
| `/attendance-management-software/` | `attendance-management-software/index.html` | `src/pages/solution.jsx` (`attendance`) |
| `/leave-management-software/` | `leave-management-software/index.html` | `src/pages/solution.jsx` (`leave`) |
| `/recruitment-software/` | `recruitment-software/index.html` | `src/pages/solution.jsx` (`recruitment`) |
| `/whatsapp/` | `whatsapp/index.html` | `src/pages/whatsapp.jsx` |
| `/payroll/` | `payroll/index.html` | `src/pages/payroll.jsx` |
| `/mobile-app/` | `mobile-app/index.html` | `src/pages/mobile-app.jsx` |
| `/contact/` | `contact/index.html` | `src/pages/contact.jsx` |
| `/privacy-policy.html` | `privacy-policy.html` | `src/pages/legal.jsx` |
| `/terms-of-service.html` | `terms-of-service.html` | `src/pages/legal.jsx` |
| `/data-deletion.html` | `data-deletion.html` | `src/pages/legal.jsx` |
| `/404.html` | `404.html` | `src/pages/notfound.jsx` |

- **Keep the three legal URLs.** The Google Play listing links to `/privacy-policy.html`, and Meta's WhatsApp
  Business review uses the privacy and data-deletion pages. Their text lives in `src/legal.jsx`.
- **Adding a page:** create the HTML entry, add it to `site.config.js` (title, description, view), add the view to
  `src/entry-server.jsx`, and write `src/pages/<name>.jsx` exporting the page and ending in
  `if (!import.meta.env.SSR) mount("<nav id>", Page)`.
- **SEO / GEO:**
  - `site.config.js` holds every page's `<title>` and meta description; keep titles under 60 characters.
  - Keyword landing pages (AI HR software, attendance, leave, recruitment) are all rendered by `src/pages/solution.jsx`
    from `src/solutions.js`. A new one needs an entry there, in `site.config.js`, and an HTML file with
    `data-solution="<id>"`.
  - Structured data (schema.org JSON-LD) is built in `src/seo.js`.
  - `public/robots.txt` allows search engines and AI crawlers; `public/llms.txt` is a plain summary for AI
    assistants. Update it when features change.
- **Copy** lives in `src/data.js`. Every claim matches a shipped feature of the web app or the Play Store listing;
  keep it that way.
- **Design tokens** are in `src/styles/tokens.css`: dark & cinematic (near-black navy, the logo's blue→violet as
  light). Module accent colours come from the product's own palette. Product mock-ups use the web app's own dark
  theme tokens (scoped on `.mock`); the Android app screens stay light.
- **Motion** uses [Motion](https://motion.dev) (`motion/react`). Reusable pieces live in `src/motion/`: `WordsReveal`
  (headline words), `ScrollWords` (scroll-lit statement), `Spotlight` (cursor-lit cards), `Magnetic` (buttons),
  `Counter`, `Aurora` (hero light) and `TiltIn`. `Layout` wraps everything in `MotionConfig reducedMotion="user"`,
  and simple blocks fade in through the `data-reveal` attribute.
- Play Store link, support email and app URLs are constants at the top of `src/data.js`.
- `public/google-play-badge.png` is Google's official badge; `public/app/play-qr.svg` was generated with
  `npx qrcode -t svg -o public/app/play-qr.svg "<play url>"`.
