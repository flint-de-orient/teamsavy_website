import { mount } from "../mount.jsx";
import PageHero from "../components/PageHero.jsx";
import { legalNav, SUPPORT_EMAIL } from "../data.js";
import { docs, EFFECTIVE_DATE } from "../legal.jsx";
import "./pages.css";

// privacy-policy.html, terms-of-service.html and data-deletion.html all load
// this entry; <body data-doc> says which document to show.
const docId = document.body.dataset.doc;
const doc = docs[docId];

function LegalPage() {
  return (
    <>
      <PageHero
        eyebrow={<span className="hero-pill plain">Legal</span>}
        title={doc.title}
        lede={`Effective date: ${EFFECTIVE_DATE}`}
      />
      <section className="section">
        <div className="container legal-grid">
          <nav className="legal-nav" aria-label="Legal documents">
            {legalNav.map((l) => (
              <a key={l.id} href={l.href} aria-current={l.id === docId ? "page" : undefined}>
                {l.label}
              </a>
            ))}
            <p>
              Questions? <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
            </p>
          </nav>
          <article className="legal-body">{doc.body}</article>
        </div>
      </section>
    </>
  );
}

mount("legal", LegalPage);
