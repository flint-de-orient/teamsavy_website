import { motion } from "motion/react";
import { Check, FileCheck2, Fingerprint, GitBranch, Hash, ScanText } from "lucide-react";
import Spotlight from "../motion/Spotlight.jsx";
import Counter from "../motion/Counter.jsx";
import "./Bento.css";

function Tile({ id, span, accent, icon: Icon, label, title, text, d = 0, children }) {
  return (
    <Spotlight
      className={`tile card accent-${accent}`}
      style={{ "--span": span, "--d": `${d}ms` }}
      data-tile={id}
      data-reveal
    >
      <span className="tile-head">
        <span className="icon-tile">
          <Icon aria-hidden />
        </span>
        <span className="tile-label">{label}</span>
      </span>
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="tile-visual">{children}</div>
    </Spotlight>
  );
}

const files = [
  ["PF ECR", "Provident Fund"],
  ["ESI", "Contribution file"],
  ["PT", "Professional Tax"],
  ["Form 24Q", "TDS return"],
  ["Bank file", "Salary transfer"],
];

const listIn = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } };
const itemIn = {
  hidden: { opacity: 0, x: -14 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Bento() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">Built for Indian teams</span>
          <h2>The hard parts, already handled</h2>
          <p>Statutory files, attendance hardware, document checks and approval chains work out of the box.</p>
        </div>

        <div className="bento">
          <Tile
            id="compliance"
            span={7}
            accent="brand"
            icon={FileCheck2}
            label="Compliance"
            title="Every return file, from every payroll run"
            text="PF, ESI, Professional Tax and TDS are worked out per employee; the files your accountant needs come out of the same run."
          >
            <motion.ul className="b-files" variants={listIn} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.5 }}>
              {files.map(([f, sub]) => (
                <motion.li key={f} variants={itemIn}>
                  <span className="b-file-name">
                    <b>{f}</b>
                    <span>{sub}</span>
                  </span>
                  <motion.span
                    className="b-check"
                    variants={{ hidden: { scale: 0 }, show: { scale: 1, transition: { type: "spring", stiffness: 500, damping: 20 } } }}
                  >
                    <Check aria-hidden />
                  </motion.span>
                </motion.li>
              ))}
            </motion.ul>
          </Tile>

          <Tile
            id="numbers"
            span={5}
            d={80}
            accent="violet"
            icon={Hash}
            label="In numbers"
            title="One platform, the whole of HR"
            text="Everything below ships in the product today."
          >
            <dl className="b-numbers">
              <div>
                <dt>HR modules</dt>
                <dd>
                  <Counter to={8} />
                </dd>
              </div>
              <div>
                <dt>Leave types</dt>
                <dd>
                  <Counter to={8} />
                </dd>
              </div>
              <div>
                <dt>Statutory returns</dt>
                <dd>
                  <Counter to={4} />
                </dd>
              </div>
              <div>
                <dt>Attendance device types</dt>
                <dd>
                  <Counter to={3} />
                </dd>
              </div>
            </dl>
          </Tile>

          <Tile
            id="devices"
            span={4}
            accent="mint"
            icon={Fingerprint}
            label="Attendance"
            title="Any punch source"
            text="Biometric, face and card machines through eTimeOffice, or a selfie inside a geofence."
          >
            <div className="b-pulse">
              <span className="b-pulse-ring" />
              <span className="b-pulse-ring r2" />
              <span className="b-pulse-core">
                <Fingerprint aria-hidden />
              </span>
            </div>
            <ul className="b-chips">
              {["Biometric", "Face", "Card", "Selfie"].map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Tile>

          <Tile
            id="docs"
            span={4}
            d={80}
            accent="pink"
            icon={ScanText}
            label="Onboarding"
            title="Documents read for you"
            text="Aadhaar, PAN and bank details come straight off the uploads into the employee record."
          >
            <div className="b-doc">
              <span className="b-scan" />
              <span className="b-doc-photo" />
              <span className="b-doc-lines">
                <span>Aadhaar · XXXX XXXX 4821</span>
                <i />
                <i className="short" />
              </span>
            </div>
            <ul className="b-fields">
              <li>
                <Check aria-hidden /> Name
              </li>
              <li>
                <Check aria-hidden /> Date of birth
              </li>
              <li>
                <Check aria-hidden /> Address
              </li>
            </ul>
          </Tile>

          <Tile
            id="routing"
            span={4}
            d={160}
            accent="yellow"
            icon={GitBranch}
            label="Approvals"
            title="Requests that route themselves"
            text="Manager first, HR when your policy needs it. Everyone hears the decision on WhatsApp."
          >
            <ol className="b-route">
              <li>
                <span>Employee</span>
              </li>
              <li>
                <span>Manager</span>
              </li>
              <li className="is-last">
                <span>HR</span>
              </li>
            </ol>
          </Tile>
        </div>
      </div>
    </section>
  );
}
