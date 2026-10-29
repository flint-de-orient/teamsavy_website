import { ArrowRight } from "lucide-react";
import { mount } from "../mount.jsx";
import PageHero from "../components/PageHero.jsx";
import JsonLd from "../components/JsonLd.jsx";
import { mocks } from "../components/Mocks.jsx";
import TiltIn from "../motion/TiltIn.jsx";
import Magnetic from "../motion/Magnetic.jsx";
import Spotlight from "../motion/Spotlight.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";
import Faq from "../sections/Faq.jsx";
import Cta from "../sections/Cta.jsx";
import { solutions } from "../solutions.js";
import { SIGNUP_URL, solutionsNav } from "../data.js";
import { faqPage, innerPage, metaFor, software } from "../seo.js";
import "../sections/Solutions.css";
import "./pages.css";

// One template for every keyword landing page (src/solutions.js).
export default function SolutionPage({ id }) {
  const s = solutions[id];
  const MockView = mocks[s.mock];
  const related = s.related.map((r) => solutionsNav.find((n) => n.id === r));
  const allFaqs = [s.intro, ...s.faqs];

  return (
    <>
      <JsonLd data={innerPage(s.path, s.label, software, faqPage(allFaqs))} />
      <PageHero
        className={`accent-${s.accent}`}
        eyebrow={<span className="hero-pill plain">{s.label}</span>}
        segments={s.segments}
        lede={s.lede}
        actions={
          <>
            <Magnetic>
              <a className="btn btn-primary btn-lg" href={SIGNUP_URL}>
                Get started
                <ArrowRight aria-hidden />
              </a>
            </Magnetic>
            <a className="btn btn-glass btn-lg" href="/contact/">
              Talk to us
            </a>
          </>
        }
        visual={
          <TiltIn className={`hero-mock-visual accent-${s.accent}`}>
            <span className="visual-glow" aria-hidden />
            <MockView />
          </TiltIn>
        }
      />

      <section className="section section-alt">
        <div className={`container answer accent-${s.accent}`}>
          <div data-reveal>
            <span className="eyebrow">In short</span>
            <h2>{s.intro.q}</h2>
          </div>
          <p className="answer-text" data-reveal style={{ "--d": "120ms" }}>
            {s.intro.a}
          </p>
        </div>
      </section>

      <FeatureCards eyebrow="What you get" title={s.featuresTitle} items={s.features} accent={s.accent} />

      <Faq items={s.faqs} title={`Questions about ${s.label.toLowerCase()}`} id={`faq-${id}`} />

      <section className="section section-alt">
        <div className="container">
          <div className="section-head" data-reveal>
            <span className="eyebrow">Keep exploring</span>
            <h2>More of TeamSavy</h2>
          </div>
          <ul className="related">
            {related.map((r, i) => (
              <Spotlight as="li" key={r.id} className="card" data-reveal style={{ "--d": `${i * 90}ms` }}>
                <a href={r.href}>
                  <h3>{r.label}</h3>
                  <p>{metaFor(r.href)?.description}</p>
                  <span className="link-arrow">
                    Learn more
                    <ArrowRight aria-hidden />
                  </span>
                </a>
              </Spotlight>
            ))}
          </ul>
        </div>
      </section>

      <Cta />
    </>
  );
}

if (!import.meta.env.SSR) {
  const id = document.body.dataset.solution;
  mount(id, () => <SolutionPage id={id} />);
}
