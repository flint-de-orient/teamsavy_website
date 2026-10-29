import { compliance } from "../data.js";
import "./Compliance.css";

export default function Compliance() {
  return (
    <section className="section" id="compliance">
      <div className="container comp-grid">
        <div className="comp-head" data-reveal>
          <span className="eyebrow">Statutory compliance</span>
          <h2>Every deduction worked out, every file ready.</h2>
          <p>
            Statutory deductions are calculated on every payroll run, and the files your accountant needs come out of
            the same run. No second spreadsheet at month-end.
          </p>
        </div>

        <ul className="comp-list" data-reveal>
          {compliance.map((c) => (
            <li key={c.name}>
              <h3>{c.name}</h3>
              <p>{c.detail}</p>
              <span className="comp-tag">{c.tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
