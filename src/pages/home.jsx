import { mount } from "../mount.jsx";
import HomeHero from "../sections/HomeHero.jsx";
import Marquee from "../sections/Marquee.jsx";
import Statement from "../sections/Statement.jsx";
import StickyModules from "../sections/StickyModules.jsx";
import WhatsAppBand from "../sections/WhatsAppBand.jsx";
import Bento from "../sections/Bento.jsx";
import Steps from "../sections/Steps.jsx";
import AppBand from "../sections/AppBand.jsx";
import Cta from "../sections/Cta.jsx";
import { steps } from "../data.js";
import "./pages.css";

function Home() {
  return (
    <>
      <HomeHero />
      <Marquee />
      <Statement />
      <StickyModules />
      <WhatsAppBand />
      <Bento />
      <Steps eyebrow="How it works" title="Up and running in three steps" items={steps} />
      <AppBand />
      <Cta />
    </>
  );
}

mount("home", Home);
