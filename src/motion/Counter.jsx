import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

// Counts up from zero the first time it scrolls into view. The markup (and
// the pre-rendered HTML crawlers read) holds the real number; only the
// browser resets it to 0 before counting.
export default function Counter({ to, suffix = "", duration = 1.8 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });
  const reduce = useReducedMotion();

  useEffect(() => {
    if (!reduce && ref.current) ref.current.textContent = `0${suffix}`;
  }, [reduce, suffix]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to, suffix, duration]);

  return (
    <span ref={ref} className="counter">
      {to}
      {suffix}
    </span>
  );
}
