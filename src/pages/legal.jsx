import { mount } from "../mount.jsx";
import PageHero from "../components/PageHero.jsx";
import JsonLd from "../components/JsonLd.jsx";
import { legalNav, SUPPORT_EMAIL } from "../data.js";
import { docs } from "../legal.jsx";
import { innerPage } from "../seo.js";
import "./pages.css";

// privacy-policy.html, terms-of-service.html and data-deletion.html all load
// this entry; <body data-doc> says which document to show.
export default function LegalPage({ docId }) {
  const doc = docs[docId];
  const path = legalNav.find((l) => l.id === docId).href;
  return (
    <>
      <JsonLd data={innerPage(path, doc.title)} />
      <PageHero
        eyebrow={<span className="hero-pill plain">Legal</span>}
        title={doc.title}
        lede={`Effective date: ${doc.effective}`}
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

if (!import.meta.env.SSR) {
  const docId = document.body.dataset.doc;
  mount("legal", () => <LegalPage docId={docId} />);
}
