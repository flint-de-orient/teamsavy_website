import { useRef } from "react";
import { motion, useSpring } from "motion/react";

// Pulls its child gently toward a mouse cursor; springs back on leave.
export default function Magnetic({ children, strength = 0.28, className = "" }) {
  const ref = useRef(null);
  const spring = { stiffness: 260, damping: 18, mass: 0.5 };
  const x = useSpring(0, spring);
  const y = useSpring(0, spring);

  const move = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const leave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.span ref={ref} className={`magnetic ${className}`} style={{ x, y }} onPointerMove={move} onPointerLeave={leave}>
      {children}
    </motion.span>
  );
}
