// Build-time renderer: scripts/prerender.mjs calls render() for every page in
// site.config.js and writes the HTML into dist/, so search engines and AI
// crawlers get the full content without running JavaScript.
import { renderToString } from "react-dom/server";
import Layout from "./components/Layout.jsx";
import Home from "./pages/home.jsx";
import Features from "./pages/features.jsx";
import WhatsAppPage from "./pages/whatsapp.jsx";
import PayrollPage from "./pages/payroll.jsx";
import MobileAppPage from "./pages/mobile-app.jsx";
import ContactPage from "./pages/contact.jsx";
import LegalPage from "./pages/legal.jsx";
import SolutionPage from "./pages/solution.jsx";
import NotFound from "./pages/notfound.jsx";

const views = {
  home: Home,
  features: Features,
  whatsapp: WhatsAppPage,
  payroll: PayrollPage,
  "mobile-app": MobileAppPage,
  contact: ContactPage,
  legal: LegalPage,
  solution: SolutionPage,
  notfound: NotFound,
};

export function render(page) {
  const View = views[page.view];
  if (!View) throw new Error(`No view "${page.view}" for ${page.file}`);
  const navId = page.nav ?? page.props?.id ?? page.view;
  return renderToString(
    <Layout page={navId}>
      <View {...page.props} />
    </Layout>,
  );
}
