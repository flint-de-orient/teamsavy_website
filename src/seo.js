// schema.org structured data. Search engines and AI answer engines read this
// to understand what TeamSavy is; every value must stay true.
import { SITE_URL, pages } from "../site.config.js";
import { COMPANY, PLAY_URL, SUPPORT_EMAIL } from "./data.js";

const ORG_ID = `${SITE_URL}/#organization`;
const SITE_ID = `${SITE_URL}/#website`;
const APP_ID = `${SITE_URL}/#software`;

export const DEFINITION =
  "TeamSavy is AI-powered HR management software for Indian businesses. It covers recruitment, appointment letters, onboarding, attendance, leave, payroll with PF, ESI, Professional Tax and TDS, expenses, tasks and KPIs, and delivers payslips, approvals and office orders to employees on WhatsApp.";

export const organization = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: "TeamSavy",
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/favicon.png`,
  slogan: "Smarter HR. Stronger Teams.",
  email: SUPPORT_EMAIL,
  parentOrganization: { "@type": "Organization", name: COMPANY.replace(/\.$/, "") },
  areaServed: { "@type": "Country", name: "India" },
  sameAs: [PLAY_URL],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: SUPPORT_EMAIL,
    areaServed: "IN",
    availableLanguage: ["en"],
  },
};

export const website = {
  "@type": "WebSite",
  "@id": SITE_ID,
  name: "TeamSavy",
  url: `${SITE_URL}/`,
  inLanguage: "en-IN",
  publisher: { "@id": ORG_ID },
};

export const software = {
  "@type": "SoftwareApplication",
  "@id": APP_ID,
  name: "TeamSavy",
  description: DEFINITION,
  url: `${SITE_URL}/`,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "HR management software",
  operatingSystem: "Web browser, Android",
  publisher: { "@id": ORG_ID },
  featureList: [
    "AI résumé reading and candidate match scores",
    "AI-generated MCQ exam questions",
    "AI reading of Aadhaar, PAN, bank statements and certificates",
    "AI drafting of circulars, notices and office orders",
    "Appointment letters with approval and WhatsApp delivery",
    "Attendance from biometric, face and card devices or selfie punch with geofence",
    "Leave management with manager-to-HR approval routing",
    "Payroll with PF ECR, ESI, Professional Tax and Form 24Q files",
    "Old vs new tax regime comparison",
    "Payslips, approvals and office orders on WhatsApp",
    "Expense claims with Cashfree payouts",
    "Tasks and KPIs",
  ],
};

export const mobileApp = {
  "@type": "MobileApplication",
  name: "Teamsavy – HR Management",
  operatingSystem: "Android",
  applicationCategory: "BusinessApplication",
  downloadUrl: PLAY_URL,
  installUrl: PLAY_URL,
  publisher: { "@id": ORG_ID },
};

export const faqPage = (items) => ({
  "@type": "FAQPage",
  mainEntity: items.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbs = (name, path) => ({
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
    { "@type": "ListItem", position: 2, name, item: `${SITE_URL}${path}` },
  ],
});

export const webPage = (name, path, description) => ({
  "@type": "WebPage",
  "@id": `${SITE_URL}${path}#webpage`,
  url: `${SITE_URL}${path}`,
  name,
  description,
  inLanguage: "en-IN",
  isPartOf: { "@id": SITE_ID },
  about: { "@id": APP_ID },
});

export const graph = (...nodes) => ({ "@context": "https://schema.org", "@graph": nodes });

// Title + description of a page, from site.config.js
export const metaFor = (path) => pages.find((p) => p.path === path);

// WebPage + breadcrumb (+ any extra nodes) for an inner page
export const innerPage = (path, name, ...extra) => {
  const m = metaFor(path);
  return graph(organization, webPage(m.title, path, m.description), breadcrumbs(name, path), ...extra);
};
