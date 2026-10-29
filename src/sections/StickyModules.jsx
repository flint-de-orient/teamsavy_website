import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check } from "lucide-react";
import { lifecycle } from "../data.js";
import { mocks } from "../components/Mocks.jsx";
import "./StickyModules.css";

const exploreLabel = {
  hire: "Explore hiring",
  appoint: "Explore appointment letters",
  onboard: "Explore onboarding",
  attendance: "Explore attendance",
  leave: "Explore leave",
  payroll: "Explore payroll",
};

// Scroll-driven product tour: module copy scrolls on the left while a pinned
// stage on the right swaps to that module's screen. On narrow screens each
// module simply shows its own screen underneath.
export default function StickyModules() {
  const [active, setActive] = useState(0);
  const blocks = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number(e.target.dataset.index));
      },
      { rootMargin: "-48% 0px -48% 0px" },
    );
    blocks.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  const m = lifecycle[active];
  const ActiveMock = mocks[m.id];

  return (
    <section className="section sticky-modules" id="product">
      <div className="container">
        <div className="section-head" data-reveal>
          <span className="eyebrow">The platform</span>
          <h2>Everything HR, in one place</h2>
          <p>
            From a candidate's first offer letter to their last day of leave approved, TeamSavy runs the whole
            employee lifecycle.
          </p>
        </div>

        <div className="sm-grid">
          <ol className="sm-list">
            {lifecycle.map((mod, i) => {
              const Icon = mod.icon;
              const InlineMock = mocks[mod.id];
              return (
                <li
                  key={mod.id}
                  ref={(el) => (blocks.current[i] = el)}
                  data-index={i}
                  className={`sm-block accent-${mod.accent}${i === active ? " is-active" : ""}`}
                >
                  <span className="sm-eyebrow">
                    <span className="icon-tile">
                      <Icon aria-hidden />
                    </span>
                    {String(i + 1).padStart(2, "0")} · {mod.label}
                  </span>
                  <h3>{mod.title}</h3>
                  <p>{mod.text}</p>
                  <ul className="sm-points">
                    {mod.points.slice(0, 3).map((p) => (
                      <li key={p}>
                        <Check aria-hidden />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <a className="link-arrow" href={`/features/#${mod.id}`}>
                    {exploreLabel[mod.id]}
                    <ArrowRight aria-hidden />
                  </a>
                  <div className="sm-inline-mock">
                    <InlineMock />
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="sm-sticky" aria-hidden>
            <div className={`sm-stage accent-${m.accent}`}>
              <div className="sm-progress">
                {lifecycle.map((mod, i) => (
                  <span key={mod.id} className={i <= active ? "is-on" : undefined} />
                ))}
              </div>
              <p className="sm-counter">
                <span>{String(active + 1).padStart(2, "0")}</span> / {String(lifecycle.length).padStart(2, "0")} · {m.label}
              </p>
              <AnimatePresence mode="wait">
                <motion.div
                  key={m.id}
                  className="sm-mock"
                  initial={{ opacity: 0, y: 36, scale: 0.97, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -24, scale: 0.98, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ActiveMock />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
