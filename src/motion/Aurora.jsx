import { motion } from "motion/react";
import "./motion.css";

// Slow-drifting brand light behind heroes: three blurred orbs, a fading grid
// and a touch of film grain. Purely decorative.
const drift = (duration) => ({ duration, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" });

export default function Aurora({ grid = true, className = "" }) {
  return (
    <div className={`aurora ${className}`} aria-hidden>
      <motion.span
        className="aurora-orb orb-blue"
        animate={{ x: [0, 90, -30], y: [0, 50, -20], scale: [1, 1.15, 0.95] }}
        transition={drift(20)}
      />
      <motion.span
        className="aurora-orb orb-violet"
        animate={{ x: [0, -110, 40], y: [0, -40, 60], scale: [1, 0.9, 1.12] }}
        transition={drift(24)}
      />
      <motion.span
        className="aurora-orb orb-lav"
        animate={{ x: [0, 60, -70], y: [0, -50, 20], scale: [1, 1.1, 0.92] }}
        transition={drift(28)}
      />
      {grid && <span className="aurora-grid" />}
      <span className="aurora-grain" />
    </div>
  );
}
