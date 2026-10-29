// HTML renditions of TeamSavy Android app screens, using the app's own
// labels (punch_screen.dart, payslips.dart, dashboard_screen.dart) and its
// "Atelier" palette. Figures are illustrative.
import {
  BatteryFull,
  Bell,
  CalendarDays,
  Camera,
  ChevronLeft,
  Download,
  FileSignature,
  Home,
  LayoutGrid,
  Menu,
  Signal,
  Users,
  Wallet,
  Wifi,
  Fingerprint,
  CalendarCheck,
} from "lucide-react";
import "./Phone.css";
import "./AppScreens.css";

function StatusBar({ time = "9:41" }) {
  return (
    <div className="app-status">
      <span>{time}</span>
      <span className="app-status-icons">
        <Signal />
        <Wifi />
        <BatteryFull />
      </span>
    </div>
  );
}

function TabBar({ active }) {
  const tabs = [
    ["home", Home, "Home"],
    ["attendance", Fingerprint, "Attendance"],
    ["leave", CalendarCheck, "Leave"],
    ["payslips", Wallet, "Payslips"],
    ["more", LayoutGrid, "More"],
  ];
  return (
    <div className="app-tabs">
      {tabs.map(([id, Icon, label]) => (
        <span key={id} className={id === active ? "is-active" : undefined}>
          <Icon />
          {label}
        </span>
      ))}
    </div>
  );
}

export function AppPhone({ label, className = "", style, children }) {
  return (
    <div className={`phone app-phone ${className}`} role="img" aria-label={label} style={style}>
      <div className="phone-screen app-screen" aria-hidden>
        {children}
      </div>
    </div>
  );
}

export function ScreenshotPhone({ src, alt, className = "", style }) {
  return (
    <div className={`phone ${className}`} style={style}>
      <div className="phone-screen">
        <img src={src} alt={alt} loading="lazy" width="540" height="1200" />
      </div>
    </div>
  );
}

export function PunchScreen(props) {
  return (
    <AppPhone label="TeamSavy app: punch in with a selfie, inside the Salt Lake Office geofence" {...props}>
      <StatusBar time="9:51" />
      <div className="app-bar">
        <ChevronLeft />
        <b>Attendance</b>
      </div>
      <div className="app-body">
        <p className="app-date">Wednesday, 28 Oct · Shift 10:00 – 19:00</p>
        <div className="selfie">
          <span className="selfie-oval" />
          <span className="selfie-hint">Capture a selfie to punch in/out.</span>
        </div>
        <span className="app-chip app-chip-mint">
          <i /> Inside · Salt Lake Office
        </span>
        <div className="app-pair">
          <div>
            <span>First Punch</span>
            <b>—</b>
          </div>
          <div>
            <span>Last Punch</span>
            <b>—</b>
          </div>
        </div>
        <span className="app-btn">
          <Camera /> Punch In
        </span>
      </div>
      <TabBar active="attendance" />
    </AppPhone>
  );
}

export function PayslipScreen(props) {
  const earnings = [
    ["Basic", "24,000"],
    ["HRA", "9,600"],
    ["Special / Other Allowance", "13,200"],
  ];
  const deductions = [
    ["Provident Fund", "2,880"],
    ["Professional Tax", "200"],
    ["Income Tax (TDS)", "0"],
  ];
  return (
    <AppPhone label="TeamSavy app: September 2026 payslip with net pay ₹43,720 and a Download PDF button" {...props}>
      <StatusBar time="10:04" />
      <div className="app-bar">
        <ChevronLeft />
        <b>Payslip — Sep 2026</b>
      </div>
      <div className="app-body">
        <div className="net-card">
          <span>Net Pay</span>
          <b>₹43,720</b>
          <small>Ananya Ghosh · September 2026</small>
        </div>
        <div className="app-card">
          <p className="app-card-title">Earnings</p>
          {earnings.map(([k, v]) => (
            <p key={k} className="app-line">
              <span>{k}</span>
              <span>₹{v}</span>
            </p>
          ))}
          <p className="app-line app-line-total">
            <span>Gross</span>
            <span>₹46,800</span>
          </p>
        </div>
        <div className="app-card">
          <p className="app-card-title">Deductions</p>
          {deductions.map(([k, v]) => (
            <p key={k} className="app-line">
              <span>{k}</span>
              <span>₹{v}</span>
            </p>
          ))}
        </div>
        <span className="app-btn">
          <Download /> Download PDF
        </span>
      </div>
      <TabBar active="payslips" />
    </AppPhone>
  );
}

export function DashboardScreen(props) {
  const stats = [
    [Users, "Active Employees", "48", "blue"],
    [CalendarDays, "Pending Leave", "3", "yellow"],
    [FileSignature, "Issued This Month", "4", "violet"],
    [Wallet, "Total Appointments", "52", "mint"],
  ];
  return (
    <AppPhone label="TeamSavy app: HR dashboard with active employees, pending leave and recent appointments" {...props}>
      <StatusBar time="9:30" />
      <div className="app-bar">
        <Menu />
        <b>Dashboard</b>
        <Bell className="app-bar-end" />
      </div>
      <div className="app-body">
        <p className="app-hello">
          Good morning, <b>Priya</b>
        </p>
        <div className="app-stats">
          {stats.map(([Icon, label, value, tone]) => (
            <div key={label} className={`accent-${tone}`}>
              <span className="app-stat-icon">
                <Icon />
              </span>
              <b>{value}</b>
              <span>{label}</span>
            </div>
          ))}
        </div>
        <div className="app-card">
          <p className="app-card-title">
            Pending Leave Requests <em>View all</em>
          </p>
          <p className="app-row">
            <span>
              <b>Sourav Dey</b>
              <small>Earned leave · 5 days</small>
            </span>
            <span className="app-chip app-chip-yellow">Pending HR</span>
          </p>
          <p className="app-row">
            <span>
              <b>Imran Ali</b>
              <small>Casual leave · 1 day</small>
            </span>
            <span className="app-chip app-chip-blue">Pending Manager</span>
          </p>
        </div>
      </div>
      <TabBar active="home" />
    </AppPhone>
  );
}
