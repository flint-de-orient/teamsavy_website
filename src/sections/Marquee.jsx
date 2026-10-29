import "./Marquee.css";

// What TeamSavy covers, scrolling past. Every item is a real feature or
// integration of the product.
const items = [
  "PF ECR",
  "ESI",
  "Professional Tax",
  "Form 24Q",
  "Gratuity ledger",
  "Aadhaar & PAN read from uploads",
  "eTimeOffice devices",
  "Selfie punch with face check",
  "Geofenced locations",
  "Cashfree payouts",
  "WhatsApp Business Platform",
  "Old vs new tax regime",
];

export default function Marquee() {
  const row = (hidden) => (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
  return (
    <section className="marquee" aria-label="Built for Indian HR">
      <p className="marquee-label">Built for Indian HR</p>
      <div className="marquee-track">
        {row(false)}
        {row(true)}
      </div>
    </section>
  );
}
