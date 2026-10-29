import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource-variable/urbanist";
import "./styles/tokens.css";
import "./styles/base.css";
import "./motion/motion.css";
import Layout from "./components/Layout.jsx";

// Every HTML entry calls this with its page id (used for the active nav item).
export function mount(page, Page) {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <Layout page={page}>
        <Page />
      </Layout>
    </React.StrictMode>,
  );
}
