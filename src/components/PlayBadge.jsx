import { PLAY_URL } from "../data.js";

// Google's official "Get it on Google Play" badge, transparent padding trimmed.
export default function PlayBadge({ height = 52, className = "" }) {
  return (
    <a
      className={`play-badge ${className}`}
      href={PLAY_URL}
      target="_blank"
      rel="noopener"
      aria-label="Get TeamSavy on Google Play"
    >
      <img
        src="/google-play-badge.png"
        alt="Get it on Google Play"
        width={Math.round(height * 3.357)}
        height={height}
        style={{ height, width: "auto" }}
      />
    </a>
  );
}
