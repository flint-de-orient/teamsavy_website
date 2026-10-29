import { motion } from "motion/react";
import { Check, MapPin, ScanFace, Smartphone } from "lucide-react";
import { mount } from "../mount.jsx";
import JsonLd from "../components/JsonLd.jsx";
import { innerPage, mobileApp } from "../seo.js";
import PageHero from "../components/PageHero.jsx";
import PlayBadge from "../components/PlayBadge.jsx";
import { DashboardScreen, PayslipScreen, PunchScreen, ScreenshotPhone } from "../components/AppScreens.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";
import Roles from "../sections/Roles.jsx";
import { appAudiences, appFeatures, APP_URL } from "../data.js";
import "./pages.css";

const ease = [0.16, 1, 0.3, 1];

function QrCard({ glass = false }) {
  return (
    <div className={`qr-card${glass ? " is-glass" : ""}`}>
      <img src="/app/play-qr.svg" alt="QR code linking to TeamSavy on Google Play" width="84" height="84" />
      <span>
        <b>Scan to install</b>
        Point your Android phone's camera here
      </span>
    </div>
  );
}

// Three phones that start stacked in the middle and fan out.
function Fan() {
  const side = (dir) => ({
    initial: { opacity: 0, x: dir * -150, rotate: 0, scale: 0.92 },
    animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
    transition: { duration: 1.2, delay: 0.55, ease },
  });
  return (
    <div className="app-fan">
      <span className="visual-glow" aria-hidden />
      <div className="fan-slot fan-left">
        <motion.div {...side(-1)}>
          <ScreenshotPhone src="/app/login.webp" alt="TeamSavy app sign-in screen" />
        </motion.div>
      </div>
      <div className="fan-slot fan-right">
        <motion.div {...side(1)}>
          <PayslipScreen />
        </motion.div>
      </div>
      <div className="fan-slot fan-center">
        <motion.div initial={{ opacity: 0, y: 90 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1, delay: 0.3, ease }}>
          <DashboardScreen />
        </motion.div>
      </div>
    </div>
  );
}

export default function MobileAppPage() {
  return (
    <>
      <JsonLd data={innerPage("/mobile-app/", "Mobile app", mobileApp)} />
      <PageHero
        className="app-hero"
        eyebrow={
          <span className="app-listing">
            <img src="/app/icon-192.png" alt="" width="56" height="56" />
            <span>
              <b>Teamsavy – HR Management</b>
              Android app on Google Play
            </span>
          </span>
        }
        segments={[{ text: "Your whole HR," }, { text: "in your pocket.", className: "grad-text" }]}
        lede="For employees, managers and HR teams. Punch in with a selfie, apply for leave, download payslips and claim expenses, all from the TeamSavy app."
        actions={
          <>
            <PlayBadge height={60} />
            <QrCard glass />
          </>
        }
        visual={<Fan />}
      />

      <FeatureCards
        eyebrow="Inside the app"
        title="Built for the way your team works"
        items={appFeatures}
        columns={4}
        accent="violet"
        alt
      />

      <section className="section">
        <div className="container split is-flipped">
          <div className="split-copy accent-mint" data-reveal>
            <span className="eyebrow">Attendance</span>
            <h2>A punch-in that checks itself</h2>
            <p>
              Field and branch staff punch in from the app with a selfie. TeamSavy matches it against their enrolment
              photo and checks they are inside an office geofence; anything that doesn't fit goes to HR for review.
            </p>
            <ul className="check-list">
              <li>
                <ScanFace aria-hidden /> Selfie matched against the enrolment photo
              </li>
              <li>
                <MapPin aria-hidden /> Location checked against your office geofences
              </li>
              <li>
                <Check aria-hidden /> Late, early and absent alerts on WhatsApp
              </li>
            </ul>
          </div>
          <div className="split-phone" data-reveal style={{ "--d": "120ms" }}>
            <PunchScreen />
          </div>
        </div>
      </section>

      <Roles items={appAudiences} title="One app for everyone in the company" />

      <section className="section">
        <div className="container">
          <div className="download-band" data-reveal>
            <img className="download-icon" src="/app/icon-192.png" alt="" width="96" height="96" />
            <div className="download-copy">
              <h2>Get TeamSavy for Android</h2>
              <p>
                Sign in with the same account you use on the web. On iPhone? Open <a href={APP_URL}>app.teamsavy.com</a>{" "}
                in Safari.
              </p>
            </div>
            <div className="download-actions">
              <PlayBadge height={56} />
              <QrCard />
            </div>
          </div>
        </div>
      </section>

      <section className="app-note">
        <div className="container app-note-row" data-reveal>
          <Smartphone aria-hidden />
          <p>
            New to TeamSavy? The app is for companies already using TeamSavy. <a href="/contact/">Talk to us</a> or{" "}
            <a href="/features/">see what TeamSavy does</a> first.
          </p>
        </div>
      </section>
    </>
  );
}

if (!import.meta.env.SSR) mount("mobile-app", MobileAppPage);
