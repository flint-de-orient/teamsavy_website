import { whatsappMoments } from "../data.js";
import Spotlight from "../motion/Spotlight.jsx";
import "./MomentsGrid.css";

export default function MomentsGrid() {
  return (
    <section className="section moments-section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Every moment covered</span>
          <h2>What TeamSavy sends on WhatsApp</h2>
          <p>Each of these goes out automatically when the matching thing happens in TeamSavy.</p>
        </div>
        <ul className="moments accent-wa">
          {whatsappMoments.map(({ group, icon: Icon, items }, i) => (
            <Spotlight as="li" key={group} className="card" data-reveal style={{ "--d": `${(i % 4) * 80}ms` }}>
              <span className="icon-tile">
                <Icon aria-hidden />
              </span>
              <h3>{group}</h3>
              <ul>
                {items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </Spotlight>
          ))}
        </ul>
      </div>
    </section>
  );
}
