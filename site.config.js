// One entry per HTML page — the single source for build inputs, <title>,
// meta description, the sitemap and pre-rendering.
//   view:  which React view renders the page (see src/entry-server.jsx)
//   props: props for that view (legal doc / solution id)
//   nav:   which header item is active
// The three legal pages keep their old .html URLs: the Play Store listing
// and Meta's WhatsApp app review link to them.
export const SITE_URL = "https://teamsavy.com";

export const pages = [
  {
    file: "index.html",
    path: "/",
    view: "home",
    nav: "home",
    priority: 1.0,
    title: "TeamSavy — AI-Powered HR Management Software for India",
    description:
      "TeamSavy is AI-powered HR management software for Indian businesses: attendance, leave, hiring and PF/ESI payroll, with payslips and approvals on WhatsApp.",
  },
  {
    file: "features/index.html",
    path: "/features/",
    view: "features",
    nav: "features",
    priority: 0.9,
    title: "HR Software Features: Hiring to Payroll | TeamSavy",
    description:
      "Recruitment, appointment letters, onboarding, attendance, leave and payroll in one HR management system built for Indian companies.",
  },
  {
    file: "ai-hr-software/index.html",
    path: "/ai-hr-software/",
    view: "solution",
    props: { id: "ai" },
    nav: "ai",
    priority: 0.9,
    title: "AI HR Software for Indian Businesses | TeamSavy",
    description:
      "AI-powered HR software that reads résumés and Aadhaar, PAN and bank documents, scores candidates, writes exam questions and drafts HR notices.",
  },
  {
    file: "attendance-management-software/index.html",
    path: "/attendance-management-software/",
    view: "solution",
    props: { id: "attendance" },
    priority: 0.9,
    title: "Attendance Management Software: Biometric & GPS | TeamSavy",
    description:
      "Track attendance from biometric, face and card machines or a selfie inside a geofence, with shifts, late marks, regularization and WhatsApp alerts.",
  },
  {
    file: "leave-management-software/index.html",
    path: "/leave-management-software/",
    view: "solution",
    props: { id: "leave" },
    priority: 0.9,
    title: "Leave Management Software with WhatsApp Approvals | TeamSavy",
    description:
      "Online leave management for Indian companies: leave balances, manager-to-HR approvals, encashment and every decision delivered on WhatsApp.",
  },
  {
    file: "recruitment-software/index.html",
    path: "/recruitment-software/",
    view: "solution",
    props: { id: "recruitment" },
    priority: 0.9,
    title: "Recruitment Software with AI Résumé Screening | TeamSavy",
    description:
      "Post jobs, read résumés with AI, score candidates, run online MCQ exams and panel interviews, and send offer letters on WhatsApp.",
  },
  {
    file: "payroll/index.html",
    path: "/payroll/",
    view: "payroll",
    nav: "payroll",
    priority: 0.9,
    title: "Payroll Software for India: PF, ESI, PT & TDS | TeamSavy",
    description:
      "Payroll software for Indian companies with PF ECR, ESI, Professional Tax and Form 24Q files, old vs new tax regime comparison and payslips on WhatsApp.",
  },
  {
    file: "whatsapp/index.html",
    path: "/whatsapp/",
    view: "whatsapp",
    nav: "whatsapp",
    priority: 0.8,
    title: "WhatsApp HR Software: Payslips & Approvals | TeamSavy",
    description:
      "Payslips, leave decisions, office orders and attendance alerts delivered to each employee on WhatsApp, with sign-in by WhatsApp code.",
  },
  {
    file: "mobile-app/index.html",
    path: "/mobile-app/",
    view: "mobile-app",
    nav: "mobile-app",
    priority: 0.8,
    title: "HR App for Android: Attendance, Leave, Payslips | TeamSavy",
    description:
      "Get the TeamSavy HR app on Google Play: selfie punch-in, leave, payslips, expenses and tasks for employees, managers and HR.",
  },
  {
    file: "contact/index.html",
    path: "/contact/",
    view: "contact",
    nav: "contact",
    priority: 0.6,
    title: "Contact TeamSavy: HR Software Sales & Support",
    description: "Talk to the TeamSavy team, get started or find answers to common questions about our HR software.",
  },
  {
    file: "privacy-policy.html",
    path: "/privacy-policy.html",
    view: "legal",
    props: { docId: "privacy" },
    priority: 0.3,
    title: "Privacy Policy — TeamSavy",
    description: "How TeamSavy collects, uses and protects information, including WhatsApp Business Platform messaging.",
  },
  {
    file: "terms-of-service.html",
    path: "/terms-of-service.html",
    view: "legal",
    props: { docId: "terms" },
    priority: 0.3,
    title: "Terms of Service — TeamSavy",
    description: "The terms that govern access to and use of TeamSavy.",
  },
  {
    file: "data-deletion.html",
    path: "/data-deletion.html",
    view: "legal",
    props: { docId: "deletion" },
    priority: 0.3,
    title: "Data Deletion — TeamSavy",
    description: "How employees, candidates and tenant administrators can request deletion of their TeamSavy data.",
  },
  {
    file: "404.html",
    path: "/404.html",
    view: "notfound",
    noindex: true,
    title: "Page not found — TeamSavy",
    description: "This page doesn't exist. Find TeamSavy's HR software features, payroll, attendance and leave pages here.",
  },
];
