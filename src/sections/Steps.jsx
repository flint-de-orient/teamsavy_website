import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./Steps.css";

// Numbered steps joined by a line that draws itself as the section scrolls;
// each number lights up when the line reaches it.
export default function Steps({ items, eyebrow, title }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.8", "end 0.55"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="section steps-section">
      <div className="container">
        <div className="section-head center" data-reveal>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
        </div>
        <div className="steps-wrap" ref={ref}>
          <div className="steps-line" aria-hidden>
            <motion.span style={{ scaleX }} />
          </div>
          <ol className="steps">
            {items.map((s, i) => (
              <Step key={s.title} step={s} index={i} count={items.length} progress={scrollYProgress} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Step({ step, index, count, progress }) {
  const at = count > 1 ? index / (count - 1) : 0;
  const on = useTransform(progress, [at - 0.08, at], [0, 1]);
  return (
    <li data-reveal style={{ "--d": `${index * 120}ms` }}>
      <motion.span className="step-num" style={{ "--on": on }}>
        {String(index + 1).padStart(2, "0")}
      </motion.span>
      <div className="step-body">
        <h3>{step.title}</h3>
        <p>{step.text}</p>
      </div>
    </li>
  );
}
