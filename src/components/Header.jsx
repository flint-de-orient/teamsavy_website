import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { nav, LOGIN_URL, SIGNUP_URL } from "../data.js";
import PlayBadge from "./PlayBadge.jsx";
import "./Header.css";

// A floating glass bar. A pill slides under whichever link is hovered,
// resting on the current page otherwise.
export default function Header({ page }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(null);
  const pill = hover ?? page;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="container">
        <div className="header-bar">
          <a href="/" className="header-logo" aria-label="TeamSavy home">
            <img src="/logo-white.svg" alt="TeamSavy" width="140" height="28" />
          </a>

          <nav className="header-nav" aria-label="Main" onMouseLeave={() => setHover(null)}>
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                aria-current={page === item.id ? "page" : undefined}
                onMouseEnter={() => setHover(item.id)}
                onFocus={() => setHover(item.id)}
                onBlur={() => setHover(null)}
              >
                {pill === item.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="nav-pill"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="nav-label">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="header-actions">
            <a className="btn btn-ghost" href={LOGIN_URL}>
              Log in
            </a>
            <a className="btn btn-primary header-cta" href={SIGNUP_URL}>
              Get started
            </a>
          </div>

          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X aria-hidden /> : <Menu aria-hidden />}
            <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="container" aria-label="Mobile">
              {[{ id: "home", label: "Home", href: "/" }, ...nav].map((item, i) => (
                <motion.a
                  key={item.id}
                  href={item.href}
                  aria-current={page === item.id ? "page" : undefined}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.04 * i + 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {item.label}
                  <ArrowRight aria-hidden />
                </motion.a>
              ))}
              <motion.div
                className="mobile-actions"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <a className="btn btn-glass btn-lg" href={LOGIN_URL}>
                  Log in
                </a>
                <a className="btn btn-primary btn-lg" href={SIGNUP_URL}>
                  Get started
                </a>
                <PlayBadge height={48} />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
