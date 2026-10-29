import { mount } from "../mount.jsx";
import JsonLd from "../components/JsonLd.jsx";
import HomeHero from "../sections/HomeHero.jsx";
import Marquee from "../sections/Marquee.jsx";
import Statement from "../sections/Statement.jsx";
import StickyModules from "../sections/StickyModules.jsx";
import WhatsAppBand from "../sections/WhatsAppBand.jsx";
import Bento from "../sections/Bento.jsx";
import Solutions from "../sections/Solutions.jsx";
import Steps from "../sections/Steps.jsx";
import AppBand from "../sections/AppBand.jsx";
import Faq from "../sections/Faq.jsx";
import Cta from "../sections/Cta.jsx";
import { homeFaqs, steps } from "../data.js";
import { faqPage, graph, metaFor, mobileApp, organization, software, webPage, website } from "../seo.js";
import "./pages.css";

const meta = metaFor("/");

export default function Home() {
  return (
    <>
      <JsonLd
        data={graph(organization, website, software, mobileApp, webPage(meta.title, "/", meta.description), faqPage(homeFaqs))}
      />
      <HomeHero />
      <Marquee />
      <Statement />
      <StickyModules />
      <WhatsAppBand />
      <Bento />
      <Solutions />
      <Steps eyebrow="How it works" title="Up and running in three steps" items={steps} />
      <AppBand />
      <Faq items={homeFaqs} title="HR software questions, answered" id="home-faq" />
      <Cta />
    </>
  );
}

if (!import.meta.env.SSR) mount("home", Home);
