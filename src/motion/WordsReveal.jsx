import { motion } from "motion/react";

// Headline whose words rise out of a blur one after another.
// `segments`: [{ text, className? }] — a className (e.g. "grad-text") styles
// every word of that segment.
export default function WordsReveal({ as: Tag = "h1", segments, className, delay = 0.1, stagger = 0.07 }) {
  let n = 0;
  const words = segments.flatMap((s, si) =>
    s.text
      .split(" ")
      .filter(Boolean)
      .map((w) => ({ w, className: s.className, key: `${si}-${n++}` })),
  );
  return (
    <Tag className={className} aria-label={segments.map((s) => s.text).join(" ")}>
      {words.map((word, i) => (
        <span key={word.key} aria-hidden>
          <motion.span
            className={`wr-word ${word.className ?? ""}`}
            initial={{ opacity: 0, y: "0.4em", filter: "blur(12px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: delay + i * stagger, ease: [0.16, 1, 0.3, 1] }}
          >
            {word.w}
          </motion.span>
          {i < words.length - 1 ? " " : null}
        </span>
      ))}
    </Tag>
  );
}
