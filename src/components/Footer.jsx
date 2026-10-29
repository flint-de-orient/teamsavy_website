import { COMPANY, legalNav, LOGIN_URL, nav, SIGNUP_URL, solutionsNav, SUPPORT_EMAIL } from "../data.js";
import PlayBadge from "./PlayBadge.jsx";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/logo-white.svg" alt="TeamSavy" width="140" height="28" />
            <p>Smarter HR. Stronger Teams.</p>
            <PlayBadge height={44} />
          </div>

          <nav aria-label="Product">
            <h2>Product</h2>
            <ul>
              {nav
                .filter((n) => n.id !== "contact" && n.id !== "ai")
                .map((n) => (
                  <li key={n.id}>
                    <a href={n.href}>{n.label}</a>
                  </li>
                ))}
            </ul>
          </nav>

          <nav aria-label="Solutions">
            <h2>Solutions</h2>
            <ul>
              {solutionsNav.map((s) => (
                <li key={s.id}>
                  <a href={s.href}>{s.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Account">
            <h2>Account</h2>
            <ul>
              <li>
                <a href={SIGNUP_URL}>Get started</a>
              </li>
              <li>
                <a href={LOGIN_URL}>Log in</a>
              </li>
              <li>
                <a href="/contact/">Contact</a>
              </li>
              <li>
                <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
              </li>
            </ul>
          </nav>

          <nav aria-label="Legal">
            <h2>Legal</h2>
            <ul>
              {legalNav.map((l) => (
                <li key={l.id}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} TeamSavy. All rights reserved.</p>
          <p>TeamSavy is a product of {COMPANY}</p>
        </div>
      </div>
      <p className="footer-wordmark" aria-hidden>
        TeamSavy
      </p>
    </footer>
  );
}
