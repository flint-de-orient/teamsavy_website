import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import PlayBadge from "../components/PlayBadge.jsx";
import { PunchScreen, ScreenshotPhone } from "../components/AppScreens.jsx";
import "./AppBand.css";

export default function AppBand() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const backY = useTransform(scrollYProgress, [0, 1], [120, -60]);
  const frontY = useTransform(scrollYProgress, [0, 1], [200, -120]);

  return (
    <section className="section app-band-section">
      <div className="container">
        <div className="app-band" ref={ref}>
          <div className="app-band-copy" data-reveal>
            <span className="eyebrow">Now on Google Play</span>
            <h2>Your whole HR, in your pocket</h2>
            <p>
              The TeamSavy app for Android puts attendance, leave, payslips, expenses and tasks on every employee's
              phone, and lets HR and managers approve on the go.
            </p>
            <ul className="app-band-list">
              {["Punch in with a selfie", "Apply for leave in seconds", "Payslips on demand", "Sign in with a WhatsApp code"].map(
                (t) => (
                  <li key={t}>
                    <Check aria-hidden />
                    {t}
                  </li>
                ),
              )}
            </ul>
            <div className="app-band-actions">
              <PlayBadge height={54} />
              <div className="app-band-qr">
                <img src="/app/play-qr.svg" alt="QR code linking to TeamSavy on Google Play" width="72" height="72" />
                <span>Scan to install on Android</span>
              </div>
            </div>
            <a className="link-arrow" href="/mobile-app/">
              Tour the app
              <ArrowRight aria-hidden />
            </a>
          </div>

          <div className="app-band-phones">
            <motion.div className="band-slot back" style={{ y: backY }}>
              <ScreenshotPhone src="/app/login.webp" alt="TeamSavy app sign-in screen" />
            </motion.div>
            <motion.div className="band-slot front" style={{ y: frontY }}>
              <PunchScreen />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
