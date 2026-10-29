import { motion } from "motion/react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import "./WhatsAppBand.css";

const notifications = [
  { when: "now", title: "Pay slip · September 2026", body: "Your pay slip is ready. Net pay credited: ₹43,720." },
  { when: "12m", title: "Leave approved", body: "2 days Casual Leave, 05–06 Nov 2026, approved by Rohit Sen." },
  { when: "1h", title: "Task assigned", body: "Submit the October branch report. Due 31 Oct." },
  { when: "3h", title: "New office order", body: "OO/2026/041: Holiday list for 2027 has been published." },
];

const stack = { hidden: {}, show: { transition: { staggerChildren: 0.16, delayChildren: 0.15 } } };
const note = {
  hidden: { opacity: 0, x: 60, scale: 0.96, filter: "blur(8px)" },
  show: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 160, damping: 20 } },
};

export default function WhatsAppBand() {
  return (
    <section className="wa-band">
      <div className="wa-band-glow" aria-hidden />
      <div className="container wa-band-grid">
        <div className="wa-band-copy accent-wa" data-reveal>
          <span className="eyebrow">WhatsApp-first</span>
          <h2>HR updates your team will actually open.</h2>
          <p>
            Salary slips, leave decisions, office orders and circulars reach each employee on WhatsApp instead of
            sitting unread in email. Every message carries a button that opens the exact document.
          </p>
          <p className="wa-band-assure">
            <ShieldCheck aria-hidden />
            Sent one-to-one as approved WhatsApp Business messages, never into a group chat.
          </p>
          <a className="link-arrow" href="/whatsapp/">
            See everything TeamSavy sends
            <ArrowRight aria-hidden />
          </a>
        </div>

        <motion.ul
          className="notif-stack"
          aria-label="Example WhatsApp notifications from TeamSavy HR"
          variants={stack}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
        >
          {notifications.map((n) => (
            <motion.li key={n.title} variants={note}>
              <span className="notif-app" aria-hidden>
                <MessageCircle />
              </span>
              <span className="notif-text">
                <span className="notif-top">
                  <b>TeamSavy HR</b>
                  <span>{n.when}</span>
                </span>
                <b>{n.title}</b>
                <span>{n.body}</span>
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
