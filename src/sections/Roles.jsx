import { roles } from "../data.js";
import Spotlight from "../motion/Spotlight.jsx";
import "./Roles.css";

export default function Roles({ items = roles, title = "One workspace, the right view for each person" }) {
  return (
    <section className="section roles">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Roles</span>
          <h2>{title}</h2>
        </div>
        <ul className="roles-grid">
          {items.map((r, i) => (
            <Spotlight as="li" key={r.role} className="card role-card" data-reveal style={{ "--d": `${i * 90}ms` }}>
              <span className="role-num">{String(i + 1).padStart(2, "0")}</span>
              <h3>{r.role}</h3>
              <p>{r.text}</p>
            </Spotlight>
          ))}
        </ul>
      </div>
    </section>
  );
}
