// One entry per HTML page. Used by vite.config.js for the build inputs and
// to inject the shared <head> tags (description, Open Graph, icons).
// The three legal pages keep their old .html URLs: the Play Store listing
// and Meta's WhatsApp app review link to them.
export const SITE_URL = "https://teamsavy.com";

export const pages = [
  {
    file: "index.html",
    path: "/",
    description:
      "TeamSavy runs HR for Indian teams: recruitment, appointment letters, attendance, leave and payroll with PF, ESI, PT and Form 24Q, with every update delivered on WhatsApp.",
  },
  {
    file: "features/index.html",
    path: "/features/",
    description:
      "Recruitment, appointment letters, onboarding, attendance, leave and payroll in one HR platform built for Indian companies.",
  },
  {
    file: "whatsapp/index.html",
    path: "/whatsapp/",
    description:
      "Payslips, leave decisions, office orders and attendance alerts delivered to each employee on WhatsApp, with sign-in by WhatsApp code.",
  },
  {
    file: "payroll/index.html",
    path: "/payroll/",
    description:
      "Indian payroll with PF ECR, ESI, Professional Tax and Form 24Q files generated from every run, old vs new tax regime comparison and bank files.",
  },
  {
    file: "mobile-app/index.html",
    path: "/mobile-app/",
    description:
      "Get the TeamSavy app on Google Play: selfie punch-in, leave, payslips, expenses and tasks for employees, managers and HR.",
  },
  {
    file: "contact/index.html",
    path: "/contact/",
    description: "Talk to the TeamSavy team, get started or find answers to common questions.",
  },
  {
    file: "privacy-policy.html",
    path: "/privacy-policy.html",
    description: "How TeamSavy collects, uses and protects information, including WhatsApp Business Platform messaging.",
  },
  {
    file: "terms-of-service.html",
    path: "/terms-of-service.html",
    description: "The terms that govern access to and use of TeamSavy.",
  },
  {
    file: "data-deletion.html",
    path: "/data-deletion.html",
    description: "How employees, candidates and tenant administrators can request deletion of their TeamSavy data.",
  },
];
