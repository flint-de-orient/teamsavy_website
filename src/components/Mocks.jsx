// Static product mock-ups for the lifecycle tabs. Illustrative data only —
// names and figures are realistic for a 48-person Kolkata company.
import {
  ChevronRight,
  Check,
  Camera,
  CreditCard,
  FileText,
  Fingerprint,
  GraduationCap,
  IdCard,
  Landmark,
  MapPin,
  Paperclip,
  ScanFace,
  Smartphone,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import "./Mocks.css";

function MockHead({ trail, current, chip }) {
  return (
    <div className="mock-head">
      <span className="crumb">
        {trail}
        <ChevronRight aria-hidden />
        <b>{current}</b>
      </span>
      {chip}
    </div>
  );
}

const Chip = ({ tone = "neutral", children }) => <span className={`chip chip-${tone}`}>{children}</span>;

function HireMock() {
  const funnel = [
    ["Applied", 128],
    ["MCQ exam", 64],
    ["Interview", 18],
    ["Fitness", 9],
    ["Selected", 4],
  ];
  return (
    <div className="mock" aria-label="Example: a job with its selection rounds" role="img">
      <MockHead trail="Jobs" current="Field Sales Executive" chip={<Chip tone="success">Open</Chip>} />
      <p className="mock-sub">Kolkata · Full-time · 4 rounds</p>
      <ol className="funnel">
        {funnel.map(([label, n]) => (
          <li key={label}>
            <span className="funnel-label">{label}</span>
            <span className="funnel-track">
              <span style={{ width: `${Math.max((n / 128) * 100, 3)}%` }} />
            </span>
            <span className="funnel-n">{n}</span>
          </li>
        ))}
      </ol>
      <ul className="mock-rows">
        <li>
          <span className="row-main">
            <b>Arindam Paul</b>
            <span>Interview · panel of 3</span>
          </span>
          <span className="row-figure">8.4 / 10</span>
          <Chip tone="success">Scored</Chip>
        </li>
        <li>
          <span className="row-main">
            <b>Sneha Roy</b>
            <span>MCQ exam · 50 questions</span>
          </span>
          <span className="row-figure">41 / 50</span>
          <Chip tone="success">Passed</Chip>
        </li>
        <li>
          <span className="row-main">
            <b>Imran Ali</b>
            <span>Physical fitness</span>
          </span>
          <span className="row-figure">30 Oct</span>
          <Chip tone="brand">Scheduled</Chip>
        </li>
      </ul>
    </div>
  );
}

function AppointMock() {
  const ctc = [
    ["Basic", "18,000"],
    ["HRA", "7,200"],
    ["Special allowance", "4,800"],
  ];
  const steps = ["Drafted", "Approved", "Sent on WhatsApp", "Accepted"];
  return (
    <div className="mock" aria-label="Example: an appointment letter and its approval trail" role="img">
      <MockHead trail="Appointments" current="TS/APPT/2026/118" chip={<Chip tone="success">Accepted</Chip>} />
      <div className="letter">
        <p className="letter-date">28 October 2026</p>
        <p className="letter-to">Dear Rahul Das,</p>
        <p className="letter-body">
          We are pleased to appoint you as <b>Accounts Executive</b> at our Salt Lake office, effective 2 November
          2026, on the terms set out below.
        </p>
        <table className="letter-ctc">
          <tbody>
            {ctc.map(([k, v]) => (
              <tr key={k}>
                <td>{k}</td>
                <td>₹{v}</td>
              </tr>
            ))}
            <tr className="letter-total">
              <td>Monthly gross</td>
              <td>₹30,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <ol className="trail">
        {steps.map((s) => (
          <li key={s}>
            <span className="trail-dot">
              <Check aria-hidden />
            </span>
            {s}
          </li>
        ))}
      </ol>
    </div>
  );
}

function OnboardMock() {
  const docs = [
    [IdCard, "Aadhaar card", "XXXX XXXX 4821 · name, DOB, address", "success", "Read"],
    [CreditCard, "PAN card", "ABCPD••••F", "success", "Read"],
    [Landmark, "Bank statement", "SBIN0001234 · A/c ••••6620", "success", "Read"],
    [GraduationCap, "Graduation certificate", "B.Com, University of Calcutta", "warning", "Check"],
    [Camera, "Photo for ID card", "Waiting for upload", "neutral", "Pending"],
  ];
  return (
    <div className="mock" aria-label="Example: onboarding documents with details read automatically" role="img">
      <MockHead trail="Employees" current="Rahul Das" chip={<Chip tone="brand">4 of 5 documents</Chip>} />
      <div className="progress" aria-hidden>
        <span style={{ width: "80%" }} />
      </div>
      <ul className="mock-rows">
        {docs.map(([Icon, name, detail, tone, status]) => (
          <li key={name}>
            <span className="row-icon">
              <Icon aria-hidden />
            </span>
            <span className="row-main">
              <b>{name}</b>
              <span>{detail}</span>
            </span>
            <Chip tone={tone}>{status}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AttendanceMock() {
  const stats = [
    ["Present", 45],
    ["Late", 3],
    ["On leave", 2],
    ["Absent", 1],
  ];
  const punches = [
    ["Priya Mehta", "09:31", ScanFace, "Face device", "success", "On time"],
    ["Ananya Ghosh", "09:52", Fingerprint, "Biometric", "success", "On time"],
    ["Imran Ali", "10:14", Smartphone, "Selfie · Salt Lake", "warning", "Late 14 min"],
    ["Sourav Dey", "10:02", MapPin, "Selfie · outside geofence", "danger", "Review"],
  ];
  return (
    <div className="mock" aria-label="Example: today's attendance with punches from devices and phones" role="img">
      <MockHead trail="Attendance" current="Today" chip={<span className="mock-date">Wed, 28 Oct</span>} />
      <dl className="stats">
        {stats.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <ul className="mock-rows">
        {punches.map(([name, time, Icon, source, tone, status]) => (
          <li key={name}>
            <span className="row-main">
              <b>{name}</b>
              <span className="row-source">
                <Icon aria-hidden />
                {source}
              </span>
            </span>
            <span className="row-figure">{time}</span>
            <Chip tone={tone}>{status}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LeaveMock() {
  return (
    <div className="mock" aria-label="Example: a leave request moving from manager to HR" role="img">
      <MockHead trail="Leave" current="Approvals" chip={<Chip tone="warning">1 waiting for HR</Chip>} />
      <div className="leave-card">
        <div className="leave-top">
          <span className="row-main">
            <b>Sourav Dey · Earned leave</b>
            <span>Mon 16 Nov – Fri 20 Nov 2026 · 5 days</span>
          </span>
        </div>
        <ol className="route">
          <li className="is-done">
            <span className="route-dot">
              <Check aria-hidden />
            </span>
            <span>
              <b>Applied</b>
              <span>26 Oct</span>
            </span>
          </li>
          <li className="is-done">
            <span className="route-dot">
              <Check aria-hidden />
            </span>
            <span>
              <b>Rohit Sen</b>
              <span>Manager · approved</span>
            </span>
          </li>
          <li className="is-current">
            <span className="route-dot" />
            <span>
              <b>HR final approval</b>
              <span>Waiting</span>
            </span>
          </li>
        </ol>
        <div className="leave-foot">
          <span className="leave-balance">
            Earned leave balance <b>12.5</b> → <b>7.5</b> days
          </span>
          <span className="mini-actions">
            <span className="mini-btn mini-btn-secondary">Reject</span>
            <span className="mini-btn mini-btn-primary">Approve</span>
          </span>
        </div>
      </div>
      <ul className="mock-rows">
        <li>
          <span className="row-main">
            <b>Ananya Ghosh · Casual leave</b>
            <span>5–6 Nov · 2 days</span>
          </span>
          <Chip tone="success">Approved</Chip>
        </li>
        <li>
          <span className="row-main">
            <b>Imran Ali · Sick leave</b>
            <span className="row-source">
              27 Oct · 1 day · <Paperclip aria-hidden /> medical certificate
            </span>
          </span>
          <Chip tone="success">Approved</Chip>
        </li>
      </ul>
    </div>
  );
}

function PayrollMock() {
  const deductions = [
    ["PF (employee share)", "66,300"],
    ["ESI (employee share)", "4,860"],
    ["Professional Tax", "9,600"],
    ["TDS", "1,27,180"],
  ];
  const files = ["PF ECR", "ESI", "PT", "Form 24Q", "Bank file"];
  return (
    <div className="mock" aria-label="Example: an October payroll run with statutory deductions and files" role="img">
      <MockHead trail="Payroll" current="October 2026" chip={<Chip tone="brand">Ready to lock</Chip>} />
      <dl className="pay-summary">
        <div>
          <dt>Gross</dt>
          <dd>₹18,42,500</dd>
        </div>
        <div>
          <dt>Deductions</dt>
          <dd>₹2,07,940</dd>
        </div>
        <div className="is-net">
          <dt>Net pay · 48 employees</dt>
          <dd>₹16,34,560</dd>
        </div>
      </dl>
      <table className="pay-table">
        <tbody>
          {deductions.map(([k, v]) => (
            <tr key={k}>
              <td>{k}</td>
              <td>₹{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pay-files">
        <span className="pay-files-label">Generated with this run</span>
        <ul>
          {files.map((f) => (
            <li key={f}>
              <FileText aria-hidden />
              {f}
            </li>
          ))}
        </ul>
      </div>
      <div className="pay-foot">
        <span>Payslips go to each employee on WhatsApp</span>
        <span className="mini-btn mini-btn-primary">Lock &amp; send 48 payslips</span>
      </div>
    </div>
  );
}

const draftLines = [
  "Circular No. CIR/2026/052 · 29 October 2026",
  "Subject: Holiday list for the calendar year 2027",
  "All employees are informed that the list of holidays for 2027 has been approved and is attached to this circular. Holidays falling on a weekly off will not be substituted.",
  "Leave applications around these dates should reach your reporting manager at least seven days in advance.",
];

function AiMock() {
  return (
    <div className="mock" role="img" aria-label="Example: AI drafting a holiday-list circular from a one-line topic">
      <MockHead trail="Notices" current="New circular" chip={<Chip tone="brand">Drafted by AI</Chip>} />
      <div className="ai-topic">
        <Sparkles aria-hidden />
        <span>
          <small>Topic</small>
          Holiday list for 2027, apply for leave a week ahead
        </span>
      </div>
      <motion.div
        className="ai-draft"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.35, delayChildren: 0.2 } } }}
      >
        {draftLines.map((line, i) => (
          <motion.p
            key={i}
            className={i < 2 ? "ai-draft-meta" : undefined}
            variants={{
              hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
              show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6 } },
            }}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
      <div className="pay-foot">
        <span>Uses your company details and leave policy</span>
        <span className="mini-actions">
          <span className="mini-btn mini-btn-secondary">Edit</span>
          <span className="mini-btn mini-btn-primary">Publish</span>
        </span>
      </div>
    </div>
  );
}

export const mocks = {
  ai: AiMock,
  hire: HireMock,
  appoint: AppointMock,
  onboard: OnboardMock,
  attendance: AttendanceMock,
  leave: LeaveMock,
  payroll: PayrollMock,
};
