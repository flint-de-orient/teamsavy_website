import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { faqs, SUPPORT_EMAIL } from "../data.js";
import "./Faq.css";

export default function Faq({ items = faqs, title = "Questions HR teams ask us", id = "faq" }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="section" id={id}>
      <div className="container faq-grid">
        <div className="faq-head" data-reveal>
          <span className="eyebrow">FAQ</span>
          <h2>{title}</h2>
          <p>
            Something else? Write to <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>.
          </p>
        </div>
        <div className="faq-list" data-reveal>
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className={`faq-item${isOpen ? " is-open" : ""}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-${id}-${i}`}
                    id={`faq-q-${id}-${i}`}
                    onClick={() => setOpen(isOpen ? -1 : i)}
                  >
                    {f.q}
                    <motion.span className="faq-icon" animate={{ rotate: isOpen ? 45 : 0 }} transition={{ type: "spring", stiffness: 400, damping: 26 }}>
                      <Plus aria-hidden />
                    </motion.span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${id}-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${id}-${i}`}
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
