// Keyword landing pages. Each one answers a search ("attendance management
// software", "AI HR software", …) with real product facts from flintdoc-hr.
// `intro` is written as a direct answer so search and AI engines can quote it.
import {
  Banknote,
  CalendarDays,
  Clock,
  FilePen,
  FileSignature,
  Fingerprint,
  Gauge,
  GitBranch,
  IdCard,
  Link2,
  ListChecks,
  MapPin,
  MessageCircle,
  Palette,
  Paperclip,
  PenLine,
  ScanFace,
  ScanText,
  Users,
  Wallet,
} from "lucide-react";

export const solutions = {
  ai: {
    path: "/ai-hr-software/",
    label: "AI HR software",
    accent: "violet",
    mock: "ai",
    segments: [{ text: "AI-powered HR software" }, { text: "that does the reading for you.", className: "grad-text" }],
    lede: "TeamSavy uses Google Gemini to read résumés and identity documents, score candidates, write exam questions and draft HR notices, so your team checks and approves instead of typing.",
    intro: {
      q: "What makes TeamSavy AI-powered HR software?",
      a: "TeamSavy is HR management software for Indian companies with AI built into the slowest, most manual parts of HR. When a candidate uploads a résumé, AI fills in their details. When a new joiner uploads Aadhaar, PAN or a bank statement, AI reads the fields into their employee record. Recruiters get an AI match score for each candidate against the job, MCQ exam questions can be generated from a topic, and HR can turn a one-line topic into a formal circular or office order. The AI fills in and suggests; your team checks and decides.",
    },
    featuresTitle: "Six places AI saves your HR team time",
    features: [
      {
        icon: ScanText,
        title: "Résumés read automatically",
        text: "Candidates upload a résumé and the application fills itself: education, experience and contact details.",
      },
      {
        icon: Gauge,
        title: "Candidate match scores",
        text: "Every applicant is scored against the job's qualification, experience and industry requirements, with a short reason.",
      },
      {
        icon: ListChecks,
        title: "Exam questions on demand",
        text: "Generate multiple-choice questions for an online screening exam from a topic, then edit them before use.",
      },
      {
        icon: IdCard,
        title: "Aadhaar, PAN and bank details",
        text: "Aadhaar, PAN, bank statements and degree certificates are read straight into the employee record.",
      },
      {
        icon: PenLine,
        title: "Notices drafted for you",
        text: "Type a short topic and get a formal circular, notice or office order written with your company and policy details.",
      },
      {
        icon: Palette,
        title: "ID card designs",
        text: "AI suggests the fields and a design for your employee ID card, ready to generate for everyone.",
      },
    ],
    faqs: [
      { q: "Which AI does TeamSavy use?", a: "TeamSavy's AI features run on Google Gemini models." },
      {
        q: "Does the AI make hiring decisions?",
        a: "No. It reads résumés and gives each candidate a match score with a reason. Your recruiters and interview panel decide who moves forward.",
      },
      {
        q: "Which documents can TeamSavy read with AI?",
        a: "Résumés, Aadhaar cards, PAN cards, bank statements and qualification certificates.",
      },
      {
        q: "Can the AI write HR notices in our company's context?",
        a: "Yes. TeamSavy drafts circulars, notices and office orders using your company details and leave policy, and HR edits the draft before publishing it.",
      },
    ],
    related: ["recruitment", "attendance", "payroll"],
  },

  attendance: {
    path: "/attendance-management-software/",
    label: "Attendance management software",
    accent: "mint",
    mock: "attendance",
    segments: [{ text: "Attendance management software" }, { text: "for every kind of punch.", className: "grad-text" }],
    lede: "Connect biometric, face-recognition and card machines, or let staff punch from their phone with a selfie inside a geofence. TeamSavy works out late marks, absences and corrections against your policy.",
    intro: {
      q: "What is attendance management software?",
      a: "Attendance management software records when employees start and finish work and turns those punches into attendance for payroll. TeamSavy collects punches from biometric, face-recognition and card devices connected through eTimeOffice, and from a selfie punch in the Android app or a phone browser with a face check and a location check against your office geofences. It then applies your shifts, grace periods and deduction rules automatically, and sends attendance alerts to employees on WhatsApp.",
    },
    featuresTitle: "Everything between the punch and the payslip",
    features: [
      {
        icon: Fingerprint,
        title: "Biometric, face and card devices",
        text: "Punches sync from biometric, face-recognition and NFC card machines through eTimeOffice.",
      },
      {
        icon: ScanFace,
        title: "Selfie punch with face check",
        text: "Field staff punch from their phone; the selfie is matched against their enrolment photo.",
      },
      {
        icon: MapPin,
        title: "Geofenced locations",
        text: "Draw a geofence for every office or site. Punches outside it are flagged for HR to review.",
      },
      {
        icon: Clock,
        title: "Shifts and grace periods",
        text: "Set shifts, late-arrival and early-departure grace minutes, and how late marks turn into deductions.",
      },
      {
        icon: FilePen,
        title: "Regularization requests",
        text: "Missed a punch? Employees request a correction and it goes for approval.",
      },
      {
        icon: MessageCircle,
        title: "WhatsApp attendance alerts",
        text: "Employees hear when they arrive on time or late, leave early or are marked absent.",
      },
    ],
    faqs: [
      {
        q: "Which attendance machines work with TeamSavy?",
        a: "Biometric, face-recognition and NFC card devices connected through eTimeOffice.",
      },
      {
        q: "Can employees mark attendance from their phone?",
        a: "Yes. In the TeamSavy Android app or a phone browser they punch with a selfie, and the location is checked against your office geofences.",
      },
      {
        q: "What happens when someone punches outside the office location?",
        a: "The punch is flagged for HR review, and HR gets a WhatsApp alert to review and approve it.",
      },
      {
        q: "Does attendance flow into payroll?",
        a: "Yes. Payroll runs on top of attendance and leave, so late deductions and loss-of-pay days appear on the payslip automatically.",
      },
    ],
    related: ["leave", "payroll", "ai"],
  },

  leave: {
    path: "/leave-management-software/",
    label: "Leave management software",
    accent: "yellow",
    mock: "leave",
    segments: [{ text: "Leave management software" }, { text: "that routes itself.", className: "grad-text" }],
    lede: "Employees apply in a few taps, the manager and then HR approve in order, balances update on their own, and every decision reaches the employee on WhatsApp.",
    intro: {
      q: "What is leave management software?",
      a: "Leave management software replaces the leave register and approval emails. In TeamSavy, each leave request goes to the employee's reporting manager and, for leave types your policy marks, on to HR for the final say. Balances for earned, casual, sick and other leave update on approval, the company holiday calendar is built in, and approved leave flows into attendance and payroll. The employee is told on WhatsApp when the application is received, approved or rejected.",
    },
    featuresTitle: "From the request to the payslip",
    features: [
      {
        icon: CalendarDays,
        title: "Eight leave types",
        text: "Earned, casual, sick, maternity, paternity, bereavement, compensatory off and leave without pay.",
      },
      {
        icon: GitBranch,
        title: "Manager-to-HR routing",
        text: "Requests go to the reporting manager first, then to HR where your policy needs a final approval.",
      },
      {
        icon: Wallet,
        title: "Live balances",
        text: "Employees see what they have left before applying; balances update the moment leave is approved.",
      },
      {
        icon: Paperclip,
        title: "Certificates attached",
        text: "A medical or fitness certificate can be attached to a leave application.",
      },
      {
        icon: Banknote,
        title: "Leave encashment",
        text: "Employees request encashment of earned leave, with its own approval before it reaches payroll.",
      },
      {
        icon: MessageCircle,
        title: "Decisions on WhatsApp",
        text: "Received, approved, or rejected with the reason, each with a link to your leave policy.",
      },
    ],
    faqs: [
      {
        q: "Which leave types does TeamSavy support?",
        a: "Earned, casual, sick, maternity, paternity and bereavement leave, compensatory off and leave without pay.",
      },
      {
        q: "Can HR give the final approval after the manager?",
        a: "Yes. The reporting manager approves first, and leave types that need HR's final say, such as earned leave, then go to HR.",
      },
      {
        q: "How do employees apply for leave?",
        a: "From the TeamSavy Android app or app.teamsavy.com in any browser, with their current balance shown before they apply.",
      },
      {
        q: "Is leave without pay deducted automatically?",
        a: "Yes. Leave without pay becomes loss-of-pay days on the payslip when payroll runs.",
      },
    ],
    related: ["attendance", "payroll", "whatsapp"],
  },

  recruitment: {
    path: "/recruitment-software/",
    label: "Recruitment software",
    accent: "violet",
    mock: "hire",
    segments: [{ text: "Recruitment software" }, { text: "with AI résumé screening.", className: "grad-text" }],
    lede: "Publish a job with its own application link, let AI read every résumé and score each candidate, run online MCQ exams and panel interviews, then send the offer letter on WhatsApp.",
    intro: {
      q: "What is recruitment software?",
      a: "Recruitment software, also called an applicant tracking system, keeps every opening, application and selection round in one place. TeamSavy adds AI where screening takes longest: résumés are read into the application, each candidate gets a match score against the job's requirements, and MCQ questions can be generated for the online exam round. Selected candidates receive an appointment letter on WhatsApp that they can download and accept, and then move straight into onboarding.",
    },
    featuresTitle: "Every round of hiring in one place",
    features: [
      {
        icon: Link2,
        title: "An application link per job",
        text: "Share one link; candidates verify their WhatsApp number and apply from their phone.",
      },
      {
        icon: ScanText,
        title: "AI résumé reading",
        text: "Details are pulled from the uploaded résumé so candidates don't have to retype them.",
      },
      {
        icon: Gauge,
        title: "AI match score",
        text: "Each candidate is scored against qualification, experience and industry requirements, with a reason.",
      },
      {
        icon: ListChecks,
        title: "Online MCQ exams",
        text: "Build exams from AI-generated or your own questions; answers are scored automatically.",
      },
      {
        icon: Users,
        title: "Interview panels",
        text: "Every interviewer fills a scorecard, with physical and medical fitness rounds when the role needs them.",
      },
      {
        icon: FileSignature,
        title: "Offer letters on WhatsApp",
        text: "Approved appointment letters reach the candidate with buttons to download and accept.",
      },
    ],
    faqs: [
      {
        q: "Can TeamSavy screen résumés automatically?",
        a: "TeamSavy reads résumés with AI and gives each candidate a match score with a reason. Your team decides who goes ahead.",
      },
      {
        q: "Which selection rounds can we set up?",
        a: "Online MCQ exams, interviews with panel scorecards, and physical and medical fitness rounds, in the order you choose.",
      },
      {
        q: "How do candidates hear about results?",
        a: "Round results and offer letters are sent to candidates on WhatsApp.",
      },
      {
        q: "What happens after a candidate accepts the offer?",
        a: "They move into onboarding, upload their joining documents, and TeamSavy reads the details into their employee record.",
      },
    ],
    related: ["ai", "attendance", "leave"],
  },
};
