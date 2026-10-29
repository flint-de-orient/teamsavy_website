import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";
import { ArrowRight, CalendarCheck, Check, Megaphone } from "lucide-react";
import Aurora from "../motion/Aurora.jsx";
import WordsReveal from "../motion/WordsReveal.jsx";
import Magnetic from "../motion/Magnetic.jsx";
import ChatPhone, { PayrollCard, PunchCard } from "../components/ChatPhone.jsx";
import PlayBadge from "../components/PlayBadge.jsx";
import { SIGNUP_URL } from "../data.js";
import "../components/PageHero.css";
import "./HomeHero.css";

const ease = [0.16, 1, 0.3, 1];
const rise = (delay) => ({
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 0.9, delay, ease },
});

function LeaveCard() {
  return (
    <div className="float-card note-card" aria-hidden>
      <span className="note-icon accent-yellow">
        <CalendarCheck />
      </span>
      <span className="note-text">
        <b>Leave approved</b>
        <span>2 days Casual Leave · Rohit Sen</span>
      </span>
      <Check className="note-tick" />
    </div>
  );
}

function OrderCard() {
  return (
    <div className="float-card note-card" aria-hidden>
      <span className="note-icon accent-violet">
        <Megaphone />
      </span>
      <span className="note-text">
        <b>Office order published</b>
        <span>OO/2026/041 · sent on WhatsApp</span>
      </span>
    </div>
  );
}

// One floating card: drifts with the mouse (by depth) and with the scroll.
function Slot({ className, depth, mx, my, scroll, lift, delay, children }) {
  const x = useTransform(mx, (v) => v * depth);
  const yMouse = useTransform(my, (v) => v * depth);
  const yScroll = useTransform(scroll, [0, 1], [0, lift]);
  const y = useTransform(() => yMouse.get() + yScroll.get());
  return (
    <motion.div
      className={`float-slot ${className}`}
      style={{ x, y }}
      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export default function HomeHero() {
  const stageRef = useRef(null);
  const heroRef = useRef(null);

  // Mouse position over the hero, -0.5 … 0.5, smoothed
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 60, damping: 18 });
  const my = useSpring(rawY, { stiffness: 60, damping: 18 });
  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    const r = heroRef.current.getBoundingClientRect();
    rawX.set((e.clientX - r.left) / r.width - 0.5);
    rawY.set((e.clientY - r.top) / r.height - 0.5);
  };

  // Stage tilts from 3D to flat as it scrolls into place, then drifts up
  const { scrollYProgress: enter } = useScroll({ target: stageRef, offset: ["start end", "center center"] });
  const { scrollYProgress: leave } = useScroll({ target: stageRef, offset: ["center center", "end start"] });
  const rotateX = useTransform(enter, [0, 1], [26, 0]);
  const scale = useTransform(enter, [0, 1], [0.88, 1]);
  const phoneTiltY = useTransform(mx, (v) => v * 10);
  const phoneTiltX = useTransform(my, (v) => v * -8);

  return (
    <section className="home-hero" ref={heroRef} onPointerMove={onMove}>
      <Aurora />
      <div className="container home-hero-copy">
        <motion.a className="hero-pill" href="/mobile-app/" {...rise(0)}>
          <b>New</b> The TeamSavy app is on Google Play
          <ArrowRight aria-hidden />
        </motion.a>
        <WordsReveal
          className="home-title"
          delay={0.15}
          segments={[{ text: "Your HR, delivered" }, { text: "on WhatsApp.", className: "grad-text" }]}
        />
        <motion.p className="home-lede" {...rise(0.6)}>
          TeamSavy is AI-powered HR management software for Indian businesses. It runs the whole employee lifecycle,
          from hiring and attendance to leave and payroll, and sends every payslip, approval and office order to your
          team's WhatsApp.
        </motion.p>
        <motion.div className="home-actions" {...rise(0.72)}>
          <Magnetic>
            <a className="btn btn-primary btn-lg" href={SIGNUP_URL}>
              Get started
              <ArrowRight aria-hidden />
            </a>
          </Magnetic>
          <PlayBadge height={54} />
        </motion.div>
        <motion.ul className="hero-facts home-facts" {...rise(0.84)}>
          <li>
            <Check aria-hidden /> PF, ESI, PT and Form 24Q built in
          </li>
          <li>
            <Check aria-hidden /> Works with your biometric device
          </li>
          <li>
            <Check aria-hidden /> Nothing for employees to install
          </li>
        </motion.ul>
      </div>

      <div className="hero-stage" ref={stageRef}>
        <motion.div className="stage-inner" style={{ rotateX, scale }}>
          <span className="stage-rings" aria-hidden />
          <span className="stage-glow" aria-hidden />
          <motion.div
            className="stage-phone"
            style={{ rotateY: phoneTiltY, rotateX: phoneTiltX }}
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.35, ease }}
          >
            <ChatPhone />
          </motion.div>
          <Slot className="slot-tl" depth={-38} mx={mx} my={my} scroll={leave} lift={-120} delay={1.1}>
            <PunchCard />
          </Slot>
          <Slot className="slot-bl" depth={-24} mx={mx} my={my} scroll={leave} lift={-60} delay={1.35}>
            <PayrollCard />
          </Slot>
          <Slot className="slot-tr" depth={30} mx={mx} my={my} scroll={leave} lift={-140} delay={1.25}>
            <LeaveCard />
          </Slot>
          <Slot className="slot-br" depth={44} mx={mx} my={my} scroll={leave} lift={-80} delay={1.5}>
            <OrderCard />
          </Slot>
        </motion.div>
      </div>
    </section>
  );
}
