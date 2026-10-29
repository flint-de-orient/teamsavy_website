// All site copy lives here. Every claim maps to a shipped feature of the
// TeamSavy web app (flintdoc-hr), the Android app's Play Store listing, or the
// published legal pages — keep it that way when editing.
import {
  Briefcase,
  CalendarCheck,
  CalendarDays,
  Clock,
  FileSignature,
  Fingerprint,
  IdCard,
  KeyRound,
  LayoutDashboard,
  ListChecks,
  Megaphone,
  PiggyBank,
  Receipt,
  ScanFace,
  ShieldCheck,
  UserPlus,
  Users,
  Wallet,
  FolderCheck,
  Landmark,
  Scale,
  Banknote,
  Smartphone,
  Mail,
  BadgeCheck,
} from "lucide-react";

export const APP_URL = "https://app.teamsavy.com";
export const SIGNUP_URL = `${APP_URL}/signup`;
export const LOGIN_URL = `${APP_URL}/login`;
export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.teamsavy.teamsavy&hl=en_IN";
export const SUPPORT_EMAIL = "support@teamsavy.com";
export const COMPANY = "Flint De Orient Marketing & Technology Pvt. Ltd.";

export const nav = [
  { id: "features", label: "Features", href: "/features/" },
  { id: "ai", label: "AI", href: "/ai-hr-software/" },
  { id: "whatsapp", label: "WhatsApp", href: "/whatsapp/" },
  { id: "payroll", label: "Payroll", href: "/payroll/" },
  { id: "mobile-app", label: "Mobile app", href: "/mobile-app/" },
  { id: "contact", label: "Contact", href: "/contact/" },
];

// Keyword landing pages (footer "Solutions" column and in-page links)
export const solutionsNav = [
  { id: "ai", label: "AI HR software", href: "/ai-hr-software/" },
  { id: "attendance", label: "Attendance management", href: "/attendance-management-software/" },
  { id: "leave", label: "Leave management", href: "/leave-management-software/" },
  { id: "recruitment", label: "Recruitment software", href: "/recruitment-software/" },
  { id: "payroll", label: "Payroll software", href: "/payroll/" },
  { id: "whatsapp", label: "WhatsApp HR", href: "/whatsapp/" },
];

export const legalNav = [
  { id: "privacy", label: "Privacy Policy", href: "/privacy-policy.html" },
  { id: "terms", label: "Terms of Service", href: "/terms-of-service.html" },
  { id: "deletion", label: "Data Deletion", href: "/data-deletion.html" },
];

// Hero phone — paraphrased from the approved WhatsApp templates
// (leave_approval, new_order, arrived_in_time, pay_slip). Oldest first; the
// chat is bottom-anchored like a real one, so the top message may be cropped.
export const chat = [
  {
    day: "Yesterday",
    time: "11:47",
    title: "Leave approved",
    body: "Hi Ananya, your application for 2 days Casual Leave from 05 Nov to 06 Nov 2026 has been approved by Rohit Sen.",
    sign: "Department of HR",
    button: "Leave Policy",
  },
  {
    time: "16:40",
    title: "New office order",
    body: "Office Order OO/2026/041: Holiday list for 2027 has been published. Please go through it.",
    button: "View Order",
  },
  {
    day: "Today",
    time: "09:52",
    body: "Good morning Ananya! You punched in at 09:52 AM, on time. Have a great day.",
  },
  {
    time: "10:02",
    title: "Pay slip · September 2026",
    body: "Hi Ananya, your pay slip for September 2026 is ready. Net pay credited: ₹43,720.",
    button: "View Pay Slip",
  },
];

// `accent` picks a module colour from the product's own accent palette.
export const lifecycle = [
  {
    id: "hire",
    label: "Hire",
    accent: "violet",
    icon: Briefcase,
    title: "Post a job and run every selection round",
    short: "Application links, MCQ exams, panel interviews and fitness rounds.",
    text: "Publish an opening with its own application link. Candidates verify their WhatsApp number and upload a résumé that TeamSavy reads for you, then move through the rounds you set.",
    points: [
      "Online MCQ exams, scored automatically",
      "Panel interviews with a scorecard per interviewer",
      "Physical and medical fitness rounds",
      "Round results sent to candidates on WhatsApp",
    ],
  },
  {
    id: "appoint",
    label: "Appoint",
    accent: "blue",
    icon: FileSignature,
    title: "Appointment letters built from your own clauses",
    short: "Letters from your pay bands and clauses, accepted from WhatsApp.",
    text: "Pick a pay band, adjust allowances, and the letter is drafted from your company's standard clauses. After approval it reaches the candidate on WhatsApp with buttons to download the PDF and accept.",
    points: [
      "Pay bands with allowance-by-allowance breakdown",
      "Approval before anything goes out",
      "Accept or withdraw from a secure link",
      "Unaccepted offers expire on their own",
    ],
  },
  {
    id: "onboard",
    label: "Onboard",
    accent: "pink",
    icon: FolderCheck,
    title: "Joining documents, read for you",
    short: "Aadhaar, PAN and bank details read straight off the uploads.",
    text: "New joiners upload their Aadhaar, PAN, bank statement and certificates. TeamSavy reads the details off each document and fills the employee record for HR to check.",
    points: [
      "Aadhaar, PAN and bank details extracted from uploads",
      "Qualification certificates checked in",
      "Employee ID cards generated from your design",
      "One record: designation, pay band, reporting line, history",
    ],
  },
  {
    id: "attendance",
    label: "Attendance",
    accent: "mint",
    icon: Fingerprint,
    title: "Every punch, from any source",
    short: "Biometric devices, or a selfie inside a geofence.",
    text: "Connect biometric, face-recognition or card machines, or let field staff punch from their phone with a selfie inside a geofenced location. Late marks and absences follow your attendance policy.",
    points: [
      "Device sync through eTimeOffice",
      "Selfie punch with face check and geofence",
      "Shifts, grace periods and late deductions",
      "Regularization requests for missed punches",
    ],
  },
  {
    id: "leave",
    label: "Leave",
    accent: "yellow",
    icon: CalendarCheck,
    title: "Leave that routes itself",
    short: "Manager-to-HR approvals with live balances.",
    text: "Requests go to the reporting manager and, where your policy needs it, on to HR for the final say. Balances update on approval and the calendar shows your company holidays.",
    points: [
      "Earned, casual, sick, maternity, paternity, comp-off and more",
      "Manager-to-HR approval routing",
      "Leave policy PDF one tap away on WhatsApp",
      "Leave encashment requests and approvals",
    ],
  },
  {
    id: "payroll",
    label: "Payroll",
    accent: "brand",
    icon: Wallet,
    title: "Payroll that closes with returns ready",
    short: "PF, ESI, PT and TDS worked out, return files generated.",
    text: "Run payroll on top of attendance and leave, with PF, ESI, Professional Tax and TDS worked out per employee. Payslips go out on WhatsApp; bank files and statutory returns come with the run.",
    points: [
      "Salary structures and pay bands",
      "PF ECR, ESI, PT and Form 24Q files",
      "Bank transfer files in your bank's format",
      "Expense reimbursements paid out through Cashfree",
    ],
  },
];

export const extras = [
  {
    icon: ListChecks,
    title: "Tasks & KPIs",
    text: "Assign work with due dates, verify what comes back and keep a KPI score for every employee.",
  },
  {
    icon: Megaphone,
    title: "Notices & office orders",
    text: "Publish circulars, notices and numbered office orders to the whole company or a chosen group.",
  },
  {
    icon: Receipt,
    title: "Expense claims",
    text: "Employees claim with the bill attached; approvers pass it in full or in part before it is paid out.",
  },
  {
    icon: Clock,
    title: "Shifts & locations",
    text: "Set shifts and office locations, each with its own geofence, for every branch you run.",
  },
  {
    icon: IdCard,
    title: "Employee ID cards",
    text: "Design your company ID card once and generate one for every employee.",
  },
  {
    icon: PiggyBank,
    title: "Gratuity & encashment",
    text: "A gratuity ledger per employee, and leave encashment requests with their own approvals.",
  },
];

export const steps = [
  {
    title: "Create your workspace",
    text: `Sign up and add your company, PF and ESI settings and leave policy.`,
  },
  {
    title: "Bring in your team",
    text: "Add employees or onboard new joiners. Each one gets a WhatsApp welcome and their own login.",
  },
  {
    title: "Run HR from one place",
    text: "Approve leave, run payroll and publish notices. TeamSavy delivers each update on WhatsApp.",
  },
];

// Grouped from the WhatsApp Business templates the app sends.
export const whatsappMoments = [
  { group: "Hiring", icon: Briefcase, items: ["Offer letter with Download and Accept buttons", "Selection round results"] },
  { group: "Joining", icon: UserPlus, items: ["Welcome message on the first day", "New-joiner alert for the team"] },
  {
    group: "Attendance",
    icon: Fingerprint,
    items: ["Arrived on time, or late", "Left on time, or early", "Marked absent", "Punch outside the geofence, for review"],
  },
  {
    group: "Leave",
    icon: CalendarCheck,
    items: ["Application received", "Approved, with leave policy link", "Rejected, with the reason"],
  },
  { group: "Pay", icon: Wallet, items: ["Pay slip with download link", "Reimbursement approved, part-approved or paid"] },
  {
    group: "Work",
    icon: ListChecks,
    items: ["Task assigned, due and overdue", "Task submitted, verified or sent back", "KPI score updated"],
  },
  { group: "Company", icon: Megaphone, items: ["Office orders, circulars and notices"] },
  { group: "Sign-in", icon: KeyRound, items: ["One-time login code with a Copy button"] },
];

export const whatsappSteps = [
  {
    title: "Something happens in TeamSavy",
    text: "HR approves a leave, locks a payroll run or publishes an office order.",
  },
  {
    title: "The employee gets a WhatsApp message",
    text: "An approved WhatsApp Business template goes to that one person's number.",
  },
  {
    title: "One tap opens the document",
    text: "Each message carries a button to the exact payslip, order, letter or leave policy.",
  },
];

export const whatsappAssurances = [
  {
    icon: Users,
    title: "One-to-one, never a group",
    text: "Each message goes only to the employee or candidate it is about.",
  },
  {
    icon: BadgeCheck,
    title: "The official Business Platform",
    text: "Pre-approved message templates, sent through Meta's WhatsApp Business Platform.",
  },
  {
    icon: KeyRound,
    title: "Verified numbers",
    text: "Employees confirm their WhatsApp number with a one-time code before they can sign in with it.",
  },
  {
    icon: Mail,
    title: "Email still works",
    text: "Offer letters, invites and password resets also go by email, so nobody is left out.",
  },
];

export const compliance = [
  {
    name: "Provident Fund",
    detail: "Employee and employer share on every run, with the ECR file ready to upload.",
    tag: "PF ECR",
  },
  {
    name: "ESI",
    detail: "Contributions worked out for eligible staff, with the monthly contribution file ready.",
    tag: "ESI",
  },
  {
    name: "Professional Tax",
    detail: "Deducted by your state's slabs, with the PT return generated from the same run.",
    tag: "PT",
  },
  {
    name: "Income tax (TDS)",
    detail: "Old and new regime compared for each employee; employees submit their declarations themselves.",
    tag: "Form 24Q",
  },
  {
    name: "Gratuity",
    detail: "A running ledger for every employee, so the liability is never a year-end surprise.",
    tag: "Ledger",
  },
  {
    name: "Salary transfer",
    detail: "Bank files in the format your bank expects, and expense payouts through Cashfree.",
    tag: "Bank file",
  },
];

export const moneyOut = [
  {
    icon: Landmark,
    title: "Bank transfer files",
    text: "Salary files generated in the template your bank accepts, straight from the locked run.",
  },
  {
    icon: Banknote,
    title: "Expense payouts",
    text: "Approved reimbursements paid out through Cashfree, with the employee told on WhatsApp.",
  },
  {
    icon: CalendarDays,
    title: "Leave encashment",
    text: "Employees request encashment of earned leave; approved amounts flow into their pay.",
  },
  {
    icon: Scale,
    title: "Gratuity ledger",
    text: "Gratuity accrues month by month for every employee, visible on the payslip.",
  },
];

// From the Play Store listing captions.
export const appFeatures = [
  { icon: LayoutDashboard, title: "Everything at a glance", text: "Attendance, leave and tasks for today, on one screen." },
  { icon: ScanFace, title: "Punch in with a selfie", text: "Location-checked attendance in one tap." },
  { icon: CalendarDays, title: "Apply for leave in seconds", text: "Track balances and approvals live." },
  { icon: Wallet, title: "Payslips on demand", text: "View and download every month's pay." },
  { icon: Receipt, title: "Claim expenses on the go", text: "Snap the bill and follow it to payout." },
  { icon: ListChecks, title: "Stay on top of your work", text: "Tasks and KPIs, assigned and tracked." },
  { icon: KeyRound, title: "Sign in your way", text: "With your password or a WhatsApp code." },
  { icon: ShieldCheck, title: "HR on the move", text: "Approve leave and check the dashboard from anywhere." },
];

export const appAudiences = [
  {
    role: "Employees",
    text: "Punch in, apply for leave, claim expenses and download payslips without asking HR.",
  },
  {
    role: "Managers",
    text: "Approve leave and regularizations for your team and keep tasks moving.",
  },
  {
    role: "HR teams",
    text: "See who is in, what is pending and what needs your approval, wherever you are.",
  },
];

export const roles = [
  {
    role: "Owners & admins",
    text: "Company settings, policies, payroll sign-off and every report, across all locations.",
  },
  {
    role: "HR team",
    text: "Letters, employee records, attendance overrides, the leave queue, payroll runs and returns.",
  },
  {
    role: "Managers",
    text: "Approve leave, regularizations and expenses for their team; assign tasks and review KPIs.",
  },
  {
    role: "Employees",
    text: "Punch in, apply for leave, claim expenses, declare tax savings and download payslips.",
  },
];

export const contactOptions = [
  {
    icon: Mail,
    title: "Email support",
    text: "Questions about your account, a feature, a plan or your data.",
    action: { label: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
  },
  {
    icon: Briefcase,
    title: "Get started",
    text: "Set up your company in TeamSavy and invite your team.",
    action: { label: "Sign up", href: SIGNUP_URL },
  },
  {
    icon: Smartphone,
    title: "Get the Android app",
    text: "Punch in, apply for leave and download payslips from your phone.",
    action: { label: "Open Google Play", href: PLAY_URL },
  },
];

export const faqs = [
  {
    q: "Do employees need to install anything?",
    a: "No. Updates reach them on WhatsApp, and TeamSavy works in any phone browser. Android users can also install the TeamSavy app from Google Play.",
  },
  {
    q: "Is there a mobile app?",
    a: "Yes, on Google Play for Android. Employees punch in with a selfie, apply for leave, download payslips and claim expenses; HR and managers can approve from their phone. On iPhone, open app.teamsavy.com in the browser.",
  },
  {
    q: "Does TeamSavy handle PF, ESI, Professional Tax and TDS?",
    a: "Yes. Each payroll run works them out per employee and generates the PF ECR, ESI contribution, Professional Tax and Form 24Q files.",
  },
  {
    q: "Can we keep our existing attendance machine?",
    a: "TeamSavy connects to biometric, face-recognition and card devices through eTimeOffice. Field staff can also punch from their phone with a selfie inside a geofenced location.",
  },
  {
    q: "How does leave approval work?",
    a: "A request goes to the employee's reporting manager first. Leave types that need HR's final say, such as earned leave, move on to HR. The employee hears the decision on WhatsApp.",
  },
  {
    q: "Who controls our employees' data?",
    a: "Your organization does. TeamSavy processes employee and candidate data on your behalf, keeps each company's data separate, and does not sell personal information. The Privacy Policy has the details.",
  },
  {
    q: "How do we get started?",
    a: `Sign up at app.teamsavy.com to set up your company, or write to ${SUPPORT_EMAIL} and we will walk you through it and help you pick the plan that fits your team.`,
  },
];

export const payrollFaqs = [
  faqs[2],
  {
    q: "Does TeamSavy compare the old and new tax regimes?",
    a: "Yes. Employees declare their investments, insurance and rent, see their tax under both regimes side by side, and TDS is deducted on the regime they choose.",
  },
  {
    q: "Can TeamSavy create salary transfer files for our bank?",
    a: "Yes. Bank transfer files are generated in your bank's template from the locked payroll run, and approved expense claims can be paid out through Cashfree.",
  },
  {
    q: "How do employees get their payslips?",
    a: "Each payslip goes to the employee on WhatsApp when the run is locked, and every month's payslip stays in the Android app and on the web with a Download PDF button.",
  },
];

// Home page FAQ: written as direct answers, the way people (and AI
// assistants) ask about HR software.
export const homeFaqs = [
  {
    q: "What is TeamSavy?",
    a: "TeamSavy is AI-powered HR management software for Indian businesses. It covers recruitment, appointment letters, onboarding, attendance, leave, payroll with PF, ESI, Professional Tax and TDS, expenses, tasks and KPIs, and delivers payslips, approvals and office orders to employees on WhatsApp. It runs in the browser at app.teamsavy.com and as an Android app.",
  },
  {
    q: "Is TeamSavy AI-powered HR software?",
    a: "Yes. TeamSavy uses Google Gemini to read résumés, Aadhaar, PAN, bank statements and certificates, to score candidates against a job, to generate MCQ exam questions and to draft circulars, notices and office orders. The AI fills in and suggests; your team checks and decides.",
  },
  faqs[2],
  faqs[3],
  faqs[0],
  {
    q: "Who makes TeamSavy?",
    a: `TeamSavy is a product of ${COMPANY}, an Indian company. Support is at ${SUPPORT_EMAIL}.`,
  },
];
