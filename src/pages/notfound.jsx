import { ArrowRight } from "lucide-react";
import { mount } from "../mount.jsx";
import PageHero from "../components/PageHero.jsx";
import { nav, solutionsNav } from "../data.js";
import "./pages.css";

export default function NotFound() {
  const links = [{ id: "home", label: "Home", href: "/" }, ...nav, ...solutionsNav.filter((s) => !nav.some((n) => n.href === s.href))];
  return (
    <PageHero
      eyebrow={<span className="hero-pill plain">404</span>}
      segments={[{ text: "This page" }, { text: "doesn't exist.", className: "grad-text" }]}
      lede="The link may be old or mistyped. Here is where you can go instead."
      after={
        <ul className="nf-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>
                {l.label}
                <ArrowRight aria-hidden />
              </a>
            </li>
          ))}
        </ul>
      }
    />
  );
}

if (!import.meta.env.SSR) mount("notfound", NotFound);
