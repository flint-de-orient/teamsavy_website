import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/urbanist";
import "./styles/tokens.css";
import "./styles/base.css";
import "./motion/motion.css";
import Layout from "./components/Layout.jsx";

// Every HTML entry calls this with its page id (used for the active nav item).
// Built pages arrive pre-rendered (scripts/prerender.mjs), so React hydrates
// the existing markup; the dev server starts empty and renders from scratch.
export function mount(page, Page) {
  const root = document.getElementById("root");
  const app = (
    <React.StrictMode>
      <Layout page={page}>
        <Page />
      </Layout>
    </React.StrictMode>
  );
  if (root.hasChildNodes()) hydrateRoot(root, app);
  else createRoot(root).render(app);
}
