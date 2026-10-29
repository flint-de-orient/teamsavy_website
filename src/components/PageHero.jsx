import { motion } from "motion/react";
import Aurora from "../motion/Aurora.jsx";
import WordsReveal from "../motion/WordsReveal.jsx";
import "./PageHero.css";

const ease = [0.16, 1, 0.3, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease },
});

// The hero every page opens with. Pass `segments` for a word-by-word
// headline, or `title` for a plain one.
export default function PageHero({ eyebrow, title, segments, lede, actions, after, visual, className = "" }) {
  const words = segments ? segments.reduce((n, s) => n + s.text.split(" ").length, 0) : 3;
  const t = 0.15 + words * 0.07;
  return (
    <section className={`page-hero ${visual ? "has-visual" : "is-compact"} ${className}`}>
      <Aurora />
      <div className="container page-hero-grid">
        <div className="page-hero-copy">
          {eyebrow && (
            <motion.div className="page-hero-eyebrow" {...rise(0)}>
              {eyebrow}
            </motion.div>
          )}
          {segments ? <WordsReveal segments={segments} delay={0.12} /> : <motion.h1 {...rise(0.1)}>{title}</motion.h1>}
          {lede && (
            <motion.p className="page-hero-lede" {...rise(t)}>
              {lede}
            </motion.p>
          )}
          {actions && (
            <motion.div className="page-hero-actions" {...rise(t + 0.12)}>
              {actions}
            </motion.div>
          )}
          {after && <motion.div {...rise(t + 0.24)}>{after}</motion.div>}
        </div>
        {visual && <div className="page-hero-visual">{visual}</div>}
      </div>
    </section>
  );
}
