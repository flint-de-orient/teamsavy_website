import { ArrowRight } from "lucide-react";
import { mount } from "../mount.jsx";
import PageHero from "../components/PageHero.jsx";
import Magnetic from "../motion/Magnetic.jsx";
import ModuleSection from "../sections/ModuleSection.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";
import Roles from "../sections/Roles.jsx";
import Cta from "../sections/Cta.jsx";
import { extras, lifecycle, SIGNUP_URL } from "../data.js";
import "./pages.css";

function Features() {
  return (
    <>
      <PageHero
        eyebrow={<span className="hero-pill plain">Features</span>}
        segments={[{ text: "Everything HR," }, { text: "in one place.", className: "grad-text" }]}
        lede="Six modules that hand off to each other, from the first job post to the monthly payroll run, so nothing is typed twice."
        actions={
          <Magnetic>
            <a className="btn btn-primary btn-lg" href={SIGNUP_URL}>
              Get started
              <ArrowRight aria-hidden />
            </a>
          </Magnetic>
        }
        after={
          <nav className="module-chips" aria-label="Modules">
            {lifecycle.map(({ id, label, accent, icon: Icon }) => (
              <a key={id} href={`#${id}`} className={`accent-${accent}`}>
                <Icon aria-hidden />
                {label}
              </a>
            ))}
          </nav>
        }
      />
      {lifecycle.map((m, i) => (
        <ModuleSection key={m.id} module={m} index={i} />
      ))}
      <FeatureCards
        eyebrow="Also included"
        title="And the rest of HR, too"
        intro="The everyday pieces that usually live in a separate spreadsheet or a WhatsApp group."
        items={extras}
        alt
      />
      <Roles />
      <Cta />
    </>
  );
}

mount("features", Features);
