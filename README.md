# teamsavy.com

Marketing site for TeamSavy. Vite + React, plain CSS, no backend. Multi-page:
each page is its own HTML file, so it works on any static host without rewrites.

```
npm install
npm run dev       # local dev server
npm run build     # static site in dist/ — upload the whole folder
```

| URL | Entry | Script |
|---|---|---|
| `/` | `index.html` | `src/pages/home.jsx` |
| `/features/` | `features/index.html` | `src/pages/features.jsx` |
| `/whatsapp/` | `whatsapp/index.html` | `src/pages/whatsapp.jsx` |
| `/payroll/` | `payroll/index.html` | `src/pages/payroll.jsx` |
| `/mobile-app/` | `mobile-app/index.html` | `src/pages/mobile-app.jsx` |
| `/contact/` | `contact/index.html` | `src/pages/contact.jsx` |
| `/privacy-policy.html` | `privacy-policy.html` | `src/pages/legal.jsx` |
| `/terms-of-service.html` | `terms-of-service.html` | `src/pages/legal.jsx` |
| `/data-deletion.html` | `data-deletion.html` | `src/pages/legal.jsx` |

- **Keep the three legal URLs.** The Google Play listing links to `/privacy-policy.html`, and Meta's WhatsApp
  Business review uses the privacy and data-deletion pages. Their text lives in `src/legal.jsx`.
- **Adding a page:** create the HTML entry, add it to `site.config.js` (description for the shared `<head>` tags),
  and write `src/pages/<name>.jsx` ending in `mount("<nav id>", Page)`.
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
