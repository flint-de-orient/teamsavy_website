import { ArrowRight, Briefcase, CalendarCheck, Fingerprint, MessageCircle, Sparkles, Wallet } from "lucide-react";
import Spotlight from "../motion/Spotlight.jsx";
import { solutionsNav } from "../data.js";
import { metaFor } from "../seo.js";
import "./Solutions.css";

const look = {
  ai: [Sparkles, "violet"],
  attendance: [Fingerprint, "mint"],
  leave: [CalendarCheck, "yellow"],
  recruitment: [Briefcase, "blue"],
  payroll: [Wallet, "brand"],
  whatsapp: [MessageCircle, "wa"],
};

// Links to every keyword landing page, so visitors and crawlers find them.
export default function Solutions() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Solutions</span>
          <h2>HR software for every part of the job</h2>
          <p>Start with the problem you have today. Every part works on its own and better together.</p>
        </div>
        <ul className="solutions">
          {solutionsNav.map((s, i) => {
            const [Icon, accent] = look[s.id];
            return (
              <Spotlight
                as="li"
                key={s.id}
                className={`card accent-${accent}`}
                data-reveal
                style={{ "--d": `${(i % 3) * 90}ms` }}
              >
                <a href={s.href}>
                  <span className="icon-tile">
                    <Icon aria-hidden />
                  </span>
                  <h3>{s.label}</h3>
                  <p>{metaFor(s.href)?.description}</p>
                  <span className="link-arrow">
                    Learn more
                    <ArrowRight aria-hidden />
                  </span>
                </a>
              </Spotlight>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
