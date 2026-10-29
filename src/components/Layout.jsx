import { useEffect } from "react";
import { MotionConfig } from "motion/react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

export default function Layout({ page, children }) {
  useReveal();
  return (
    // "user": transform animations switch off for visitors who ask for reduced motion
    <MotionConfig reducedMotion="user">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header page={page} />
      <main id="main">{children}</main>
      <Footer />
    </MotionConfig>
  );
}

// Fades [data-reveal] elements in the first time they scroll into view.
function useReveal() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("js-reveal");
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
