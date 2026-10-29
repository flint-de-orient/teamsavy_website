import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { LOGIN_URL, SIGNUP_URL } from "../data.js";
import Mark from "../components/Mark.jsx";
import PlayBadge from "../components/PlayBadge.jsx";
import Aurora from "../motion/Aurora.jsx";
import Magnetic from "../motion/Magnetic.jsx";
import "./Cta.css";

export default function Cta({ title, text }) {
  return (
    <section className="cta-wrap">
      <div className="container">
        <div className="cta" data-reveal>
          <Aurora grid={false} />
          <motion.div
            className="cta-mark-wrap"
            aria-hidden
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <Mark className="cta-mark" />
          </motion.div>
          <h2>
            {title ?? "Run your HR from one place."}
          </h2>
          <p>{text ?? "Set up your company, add your team and send your first payslips on WhatsApp."}</p>
          <div className="cta-actions">
            <Magnetic>
              <a className="btn btn-primary btn-lg" href={SIGNUP_URL}>
                Get started
                <ArrowRight aria-hidden />
              </a>
            </Magnetic>
            <PlayBadge height={54} />
          </div>
          <a className="cta-login" href={LOGIN_URL}>
            Already using TeamSavy? Log in
          </a>
        </div>
      </div>
    </section>
  );
}
