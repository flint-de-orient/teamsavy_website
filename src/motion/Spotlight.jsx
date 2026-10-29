import { motion, useMotionTemplate, useMotionValue } from "motion/react";

// A card with a soft light and a glowing border edge that follow the cursor.
// Colour comes from the nearest `--accent-rgb` (module accent classes).
export default function Spotlight({ as = "div", className = "", children, ...rest }) {
  const x = useMotionValue(-999);
  const y = useMotionValue(-999);
  const fill = useMotionTemplate`radial-gradient(460px circle at ${x}px ${y}px, rgba(var(--accent-rgb, 124, 156, 255), 0.14), transparent 70%)`;
  const edge = useMotionTemplate`radial-gradient(240px circle at ${x}px ${y}px, rgba(var(--accent-rgb, 124, 156, 255), 0.8), transparent 70%)`;
  const Comp = motion[as];

  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  };
  const leave = () => {
    x.set(-999);
    y.set(-999);
  };

  return (
    <Comp className={`spot ${className}`} onPointerMove={move} onPointerLeave={leave} {...rest}>
      <motion.span className="spot-fill" style={{ background: fill }} aria-hidden />
      <motion.span className="spot-edge" style={{ background: edge }} aria-hidden />
      {children}
    </Comp>
  );
}
