import { ArrowRight, Check, Copy } from "lucide-react";
import { mount } from "../mount.jsx";
import JsonLd from "../components/JsonLd.jsx";
import { innerPage } from "../seo.js";
import PageHero from "../components/PageHero.jsx";
import ChatPhone, { PunchCard } from "../components/ChatPhone.jsx";
import { ScreenshotPhone } from "../components/AppScreens.jsx";
import TiltIn from "../motion/TiltIn.jsx";
import Magnetic from "../motion/Magnetic.jsx";
import Steps from "../sections/Steps.jsx";
import MomentsGrid from "../sections/MomentsGrid.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";
import Cta from "../sections/Cta.jsx";
import { SIGNUP_URL, whatsappAssurances, whatsappSteps } from "../data.js";
import "./pages.css";

export default function WhatsAppPage() {
  return (
    <>
      <JsonLd data={innerPage("/whatsapp/", "WhatsApp HR")} />
      <PageHero
        eyebrow={<span className="hero-pill plain">WhatsApp-first HR</span>}
        segments={[{ text: "HR updates your team will" }, { text: "actually open.", className: "grad-text" }]}
        lede="Salary slips, leave decisions, office orders and attendance alerts reach each employee on WhatsApp, with a button that opens the exact document. No buried emails, no group-chat noise."
        actions={
          <>
            <Magnetic>
              <a className="btn btn-primary btn-lg" href={SIGNUP_URL}>
                Get started
                <ArrowRight aria-hidden />
              </a>
            </Magnetic>
            <a className="btn btn-glass btn-lg" href="#moments">
              See what gets sent
            </a>
          </>
        }
        visual={
          <TiltIn className="hero-phone-visual">
            <span className="visual-glow" aria-hidden />
            <ChatPhone />
            <div className="visual-card">
              <PunchCard />
            </div>
          </TiltIn>
        }
      />

      <Steps eyebrow="How it works" title="From a click in TeamSavy to their phone" items={whatsappSteps} />

      <div id="moments">
        <MomentsGrid />
      </div>

      <section className="section section-alt">
        <div className="container split">
          <div className="split-copy accent-wa" data-reveal>
            <span className="eyebrow">Sign-in</span>
            <h2>No password to remember</h2>
            <p>
              Employees can sign in to TeamSavy with a one-time code sent to their WhatsApp, on the web or in the
              Android app. The message has a Copy code button, so it takes one tap.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden /> Number confirmed once with a code
              </li>
              <li>
                <Check aria-hidden /> Works on app.teamsavy.com and the Android app
              </li>
              <li>
                <Check aria-hidden /> Password sign-in is still there when they want it
              </li>
            </ul>
          </div>
          <div className="otp-visual" data-reveal style={{ "--d": "120ms" }}>
            <ScreenshotPhone className="otp-phone" src="/app/login.webp" alt="TeamSavy app sign-in with Password and WhatsApp tabs" />
            <div className="otp-bubble" aria-hidden>
              <span className="otp-from">TeamSavy HR</span>
              <p>
                <b>482913</b> is your verification code. For your security, do not share this code.
              </p>
              <span className="otp-btn">
                <Copy />
                Copy code
              </span>
            </div>
          </div>
        </div>
      </section>

      <FeatureCards
        eyebrow="Built to be trusted"
        title="Careful with every message"
        items={whatsappAssurances}
        columns={4}
        accent="wa"
      />
      <Cta />
    </>
  );
}

if (!import.meta.env.SSR) mount("whatsapp", WhatsAppPage);
