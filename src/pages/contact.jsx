import { useState } from "react";
import { ArrowRight, Building2, Mail, Send } from "lucide-react";
import { mount } from "../mount.jsx";
import JsonLd from "../components/JsonLd.jsx";
import { faqPage, innerPage } from "../seo.js";
import PageHero from "../components/PageHero.jsx";
import PlayBadge from "../components/PlayBadge.jsx";
import Spotlight from "../motion/Spotlight.jsx";
import Faq from "../sections/Faq.jsx";
import { COMPANY, contactOptions, faqs, LOGIN_URL, SUPPORT_EMAIL } from "../data.js";
import "./pages.css";

const sizes = ["1–20", "21–50", "51–200", "201–500", "500+"];

// No backend: the form composes an email to support in the visitor's mail app.
function ContactForm() {
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const v = Object.fromEntries([...f.entries()].map(([k, val]) => [k, String(val).trim()]));
    const next = {};
    if (!v.name) next.name = "Please tell us your name.";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) next.email = "Enter an email address we can reply to, like you@company.com.";
    if (!v.message) next.message = "Add a line about what you need.";
    setErrors(next);
    if (Object.keys(next).length) {
      e.currentTarget.querySelector(`[name="${Object.keys(next)[0]}"]`)?.focus();
      return;
    }
    const subject = `TeamSavy enquiry${v.company ? ` from ${v.company}` : ""}`;
    const body = [
      v.message,
      "",
      `Name: ${v.name}`,
      `Email: ${v.email}`,
      v.company && `Company: ${v.company}`,
      v.size && `Team size: ${v.size}`,
    ]
      .filter((l) => l !== undefined && l !== "")
      .join("\n");
    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field = (name) => ({
    name,
    id: `f-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `e-${name}` : undefined,
  });
  const Err = ({ name }) =>
    errors[name] ? (
      <p className="field-error" id={`e-${name}`}>
        {errors[name]}
      </p>
    ) : null;

  return (
    <form className="contact-form" onSubmit={onSubmit} noValidate data-reveal>
      <h2>Send us a message</h2>
      <p className="form-note">This opens your email app with the message filled in, addressed to {SUPPORT_EMAIL}.</p>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-name">Your name</label>
          <input {...field("name")} autoComplete="name" />
          <Err name="name" />
        </div>
        <div className="field">
          <label htmlFor="f-email">Work email</label>
          <input {...field("email")} type="email" autoComplete="email" inputMode="email" />
          <Err name="email" />
        </div>
      </div>
      <div className="field-row">
        <div className="field">
          <label htmlFor="f-company">
            Company <span>(optional)</span>
          </label>
          <input {...field("company")} autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="f-size">
            Team size <span>(optional)</span>
          </label>
          <select {...field("size")} defaultValue="">
            <option value="">Select</option>
            {sizes.map((s) => (
              <option key={s} value={s}>
                {s} employees
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="field">
        <label htmlFor="f-message">How can we help?</label>
        <textarea {...field("message")} rows={5} />
        <Err name="message" />
      </div>
      <button className="btn btn-primary btn-lg" type="submit">
        <Send aria-hidden />
        Write the email
      </button>
      {sent && (
        <p className="form-sent" role="status">
          Your email app should have opened. If it didn't, write to{" "}
          <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> directly.
        </p>
      )}
    </form>
  );
}

export default function ContactPage() {
  return (
    <>
      <JsonLd data={innerPage("/contact/", "Contact", faqPage(faqs))} />
      <PageHero
        eyebrow={<span className="hero-pill plain">Contact</span>}
        segments={[{ text: "Talk to the" }, { text: "TeamSavy team.", className: "grad-text" }]}
        lede="Questions about features, plans or your data? Write to us, or sign up and see TeamSavy for yourself."
      />

      <section className="section contact-options-section">
        <div className="container">
          <ul className="contact-options">
            {contactOptions.map(({ icon: Icon, title, text, action }, i) => (
              <Spotlight as="li" key={title} className="card" data-reveal style={{ "--d": `${i * 90}ms` }}>
                <span className="icon-tile">
                  <Icon aria-hidden />
                </span>
                <h2>{title}</h2>
                <p>{text}</p>
                <a className="link-arrow" href={action.href}>
                  {action.label}
                  <ArrowRight aria-hidden />
                </a>
              </Spotlight>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container contact-grid">
          <ContactForm />
          <aside className="contact-aside" data-reveal style={{ "--d": "120ms" }}>
            <div>
              <h3>
                <Building2 aria-hidden /> Company
              </h3>
              <p>TeamSavy is a product of {COMPANY}</p>
            </div>
            <div>
              <h3>
                <Mail aria-hidden /> Support
              </h3>
              <p>
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </p>
            </div>
            <div>
              <h3>Already a customer?</h3>
              <p>
                <a href={LOGIN_URL}>Log in to app.teamsavy.com</a>
              </p>
              <PlayBadge height={44} />
            </div>
            <div>
              <h3>Your data</h3>
              <p>
                Read our <a href="/privacy-policy.html">Privacy Policy</a> or how to{" "}
                <a href="/data-deletion.html">request data deletion</a>.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <Faq />
    </>
  );
}

if (!import.meta.env.SSR) mount("contact", ContactPage);
