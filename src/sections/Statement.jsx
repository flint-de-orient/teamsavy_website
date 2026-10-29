import ScrollWords from "../motion/ScrollWords.jsx";
import "./Statement.css";

export default function Statement() {
  return (
    <section className="statement" aria-label="What TeamSavy replaces">
      <div className="container">
        <span className="eyebrow">Why TeamSavy</span>
        <ScrollWords
          className="statement-text"
          segments={[
            { text: "One login replaces the" },
            { text: "attendance register", strike: true },
            { text: ", the" },
            { text: "offer-letter Word file", strike: true },
            { text: ", the" },
            { text: "leave spreadsheet", strike: true },
            { text: "and the" },
            { text: "“Office Updates” group chat", strike: true },
            { text: "." },
          ]}
        />
      </div>
    </section>
  );
}
