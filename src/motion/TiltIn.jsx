import { motion } from "motion/react";

// Hero visuals enter tilted back in 3D and settle flat.
export default function TiltIn({ children, className = "", delay = 0.35 }) {
  return (
    <div className={`tilt-in ${className}`} style={{ perspective: 1400 }}>
      <motion.div
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0, rotateX: 22, y: 70, scale: 0.94 }}
        animate={{ opacity: 1, rotateX: 0, y: 0, scale: 1 }}
        transition={{ duration: 1.3, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
