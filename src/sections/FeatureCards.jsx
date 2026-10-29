import Spotlight from "../motion/Spotlight.jsx";
import "./FeatureCards.css";

// A grid of icon + title + text cards with a cursor spotlight.
export default function FeatureCards({ items, eyebrow, title, intro, columns = 3, accent = "brand", alt = false }) {
  return (
    <section className={`section${alt ? " section-alt" : ""}`}>
      <div className="container">
        {title && (
          <div className="section-head" data-reveal>
            {eyebrow && <span className="eyebrow">{eyebrow}</span>}
            <h2>{title}</h2>
            {intro && <p>{intro}</p>}
          </div>
        )}
        <ul className={`fcards accent-${accent}`} style={{ "--cols": columns }}>
          {items.map(({ icon: Icon, title: t, text }, i) => (
            <Spotlight as="li" key={t} className="card" data-reveal style={{ "--d": `${(i % columns) * 90}ms` }}>
              <span className="icon-tile">
                <Icon aria-hidden />
              </span>
              <h3>{t}</h3>
              <p>{text}</p>
            </Spotlight>
          ))}
        </ul>
      </div>
    </section>
  );
}
