import { ArrowRight, Check } from "lucide-react";
import { mount } from "../mount.jsx";
import JsonLd from "../components/JsonLd.jsx";
import { faqPage, innerPage } from "../seo.js";
import PageHero from "../components/PageHero.jsx";
import { mocks } from "../components/Mocks.jsx";
import { PayslipScreen } from "../components/AppScreens.jsx";
import TiltIn from "../motion/TiltIn.jsx";
import Magnetic from "../motion/Magnetic.jsx";
import Compliance from "../sections/Compliance.jsx";
import FeatureCards from "../sections/FeatureCards.jsx";
import Faq from "../sections/Faq.jsx";
import Cta from "../sections/Cta.jsx";
import { moneyOut, payrollFaqs, SIGNUP_URL } from "../data.js";
import "./pages.css";

const PayrollMock = mocks.payroll;

function TaxMock() {
  return (
    <div className="mock tax-mock" role="img" aria-label="Example: old and new tax regime compared for one employee">
      <div className="mock-head">
        <span className="crumb">
          Tax preview <b>· Sudip Banerjee</b>
        </span>
        <span className="chip chip-brand">Annual estimate</span>
      </div>
      <div className="tax-compare">
        <div>
          <span>Old regime</span>
          <b>₹2,76,930</b>
          <small>Taxable ₹15,12,600</small>
        </div>
        <div className="is-better">
          <span>
            New regime <em>Better</em>
          </span>
          <b>₹1,63,280</b>
          <small>Taxable ₹17,85,000</small>
        </div>
      </div>
      <p className="tax-save">
        <Check aria-hidden /> The new regime saves ₹1,13,650 a year
      </p>
      <div className="tax-decl">
        <span className="pay-files-label">Declared by the employee</span>
        <ul>
          <li>80C investments · ₹1,50,000</li>
          <li>80D health insurance · ₹25,000</li>
          <li>House rent · ₹20,000 a month</li>
        </ul>
      </div>
    </div>
  );
}

export default function PayrollPage() {
  return (
    <>
      <JsonLd data={innerPage("/payroll/", "Payroll software", faqPage(payrollFaqs))} />
      <PageHero
        eyebrow={<span className="hero-pill plain">Payroll &amp; compliance</span>}
        segments={[{ text: "Indian payroll, with the" }, { text: "return files ready.", className: "grad-text" }]}
        lede="Run payroll on top of attendance and leave. PF, ESI, Professional Tax and TDS are worked out per employee, payslips go out on WhatsApp, and the statutory files come with the run."
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
          <TiltIn className="hero-mock-visual">
            <span className="visual-glow" aria-hidden />
            <PayrollMock />
          </TiltIn>
        }
      />

      <Compliance />

      <section className="section section-alt">
        <div className="container split">
          <div className="split-copy" data-reveal>
            <span className="eyebrow">Income tax</span>
            <h2>Old or new regime? TeamSavy shows the difference.</h2>
            <p>
              Employees declare their investments, insurance and rent in TeamSavy. Each person sees their tax under
              both regimes side by side before choosing, and TDS is deducted on the regime they pick.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden /> Self-service tax declarations
              </li>
              <li>
                <Check aria-hidden /> Per-employee regime comparison
              </li>
              <li>
                <Check aria-hidden /> Form 24Q from the same data
              </li>
            </ul>
          </div>
          <div className="split-visual" data-reveal style={{ "--d": "120ms" }}>
            <TaxMock />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split is-flipped">
          <div className="split-copy" data-reveal>
            <span className="eyebrow">Payslips</span>
            <h2>Payslips your people can actually read</h2>
            <p>
              Earnings, deductions and employer contributions laid out plainly, delivered on WhatsApp the moment the run
              is locked, and always there in the app with a Download PDF button.
            </p>
            <ul className="check-list">
              <li>
                <Check aria-hidden /> Sent to each employee on WhatsApp
              </li>
              <li>
                <Check aria-hidden /> Every month's payslip in the Android app
              </li>
              <li>
                <Check aria-hidden /> Employer PF, ESI and gratuity shown separately
              </li>
            </ul>
          </div>
          <div className="split-phone" data-reveal style={{ "--d": "120ms" }}>
            <PayslipScreen />
          </div>
        </div>
      </section>

      <FeatureCards eyebrow="Money out" title="From payroll run to bank account" items={moneyOut} columns={4} alt />
      <Faq items={payrollFaqs} title="Payroll software questions" id="payroll-faq" />
      <Cta />
    </>
  );
}

if (!import.meta.env.SSR) mount("payroll", PayrollPage);
