import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

// A paragraph whose words light up as it scrolls through the viewport.
// Segments marked `strike` get a line drawn through them once lit, then dim.
// With reduced motion it renders as plain text with ordinary strikethroughs.
export default function ScrollWords({ segments, className }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  // Switch to the static version only after hydration, so it matches the
  // pre-rendered (animated) markup first.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.35"] });

  if (reduce && mounted) {
    return (
      <p className={className}>
        {segments.map((seg, si) => (
          <span key={si}>
            {si > 0 && !/^[,.;:]/.test(seg.text) ? " " : ""}
            {seg.strike ? <s className="sw-static">{seg.text}</s> : seg.text}
          </span>
        ))}
      </p>
    );
  }

  const total = segments.reduce((sum, s) => sum + s.text.split(" ").filter(Boolean).length, 0);
  const span = 0.82 / total; // words fill the first 82% of the scroll; strikes draw after
  let index = 0;

  return (
    <p ref={ref} className={className}>
      {segments.map((seg, si) => {
        const words = seg.text.split(" ").filter(Boolean);
        const first = index;
        index += words.length;
        const segEnd = index * span;
        const space = si > 0 && !/^[,.;:]/.test(seg.text) ? " " : "";
        const content = words.map((w, wi) => (
          <Word key={wi} progress={scrollYProgress} start={(first + wi) * span} end={(first + wi + 1) * span} dim={seg.strike}>
            {w}
            {wi < words.length - 1 ? " " : ""}
          </Word>
        ));
        return (
          <span key={si}>
            {space}
            {seg.strike ? (
              <s className="sw-strike">
                {content}
                <StrikeLine progress={scrollYProgress} start={segEnd} />
              </s>
            ) : (
              content
            )}
          </span>
        );
      })}
    </p>
  );
}

function Word({ progress, start, end, dim, children }) {
  const opacity = useTransform(progress, dim ? [start, end, end + 0.12] : [start, end], dim ? [0.12, 1, 0.45] : [0.12, 1]);
  return <motion.span style={{ opacity }}>{children}</motion.span>;
}

function StrikeLine({ progress, start }) {
  const scaleX = useTransform(progress, [start, start + 0.1], [0, 1]);
  return <motion.span className="sw-line" style={{ scaleX }} aria-hidden />;
}
