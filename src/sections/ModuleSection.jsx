import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { mocks } from "../components/Mocks.jsx";
import "./ModuleSection.css";

// One lifecycle module on the Features page: copy on one side, its screen on
// an accent-lit stage on the other. The screen drifts against the scroll.
export default function ModuleSection({ module: m, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rotate = useTransform(scrollYProgress, [0, 1], [index % 2 ? 2 : -2, index % 2 ? -1 : 1]);
  const MockView = mocks[m.id];
  const Icon = m.icon;

  return (
    <section ref={ref} id={m.id} className={`module accent-${m.accent}${index % 2 ? " is-flipped" : ""}`}>
      <div className="container module-grid">
        <div className="module-copy" data-reveal>
          <span className="module-eyebrow">
            <span className="icon-tile">
              <Icon aria-hidden />
            </span>
            {String(index + 1).padStart(2, "0")} · {m.label}
          </span>
          <h2>{m.title}</h2>
          <p>{m.text}</p>
          <ul>
            {m.points.map((p) => (
              <li key={p}>
                <Check aria-hidden />
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div className="module-stage" data-reveal style={{ "--d": "120ms" }}>
          <motion.div style={{ y, rotate }}>
            <MockView />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
