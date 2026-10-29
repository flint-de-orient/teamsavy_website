import { BatteryFull, ChevronLeft, ExternalLink, Mic, Send, Signal, Smile, Wifi, MapPin } from "lucide-react";
import { chat } from "../data.js";
import Mark from "./Mark.jsx";
import "./Phone.css";
import "./ChatPhone.css";

// A WhatsApp chat with "TeamSavy HR". Messages arrive one by one on load.
export default function ChatPhone({ messages = chat }) {
  return (
    <div
      className="phone chat-phone"
      role="img"
      aria-label="A WhatsApp chat with TeamSavy HR showing a leave approval, an office order, an on-time punch-in message and a pay slip."
    >
      <div className="phone-screen" aria-hidden>
        <div className="wa-status">
          <span>10:02</span>
          <span className="wa-status-icons">
            <Signal />
            <Wifi />
            <BatteryFull />
          </span>
        </div>
        <div className="wa-header">
          <ChevronLeft className="wa-back" />
          <span className="wa-avatar">
            <Mark />
          </span>
          <span className="wa-who">
            <strong>TeamSavy HR</strong>
            <span>Business account</span>
          </span>
        </div>

        <div className="wa-body">
          {messages.map((m, i) => (
            <div className="wa-group" key={i} style={{ "--i": i }}>
              {m.day && <span className="wa-day">{m.day}</span>}
              <div className="wa-msg">
                {m.title && <p className="wa-title">{m.title}</p>}
                <p>{m.body}</p>
                {m.sign && <p className="wa-sign">— {m.sign}</p>}
                <span className="wa-meta">{m.time}</span>
                {m.button && (
                  <span className="wa-btn">
                    <ExternalLink />
                    {m.button}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="wa-input">
          <span className="wa-field">
            <Smile />
            Message
          </span>
          <span className="wa-mic">
            <Mic />
          </span>
        </div>
      </div>
    </div>
  );
}

export function PayrollCard() {
  return (
    <div className="float-card payroll-card" aria-hidden>
      <div className="float-card-top">
        <span>Payroll · Sep 2026</span>
        <span className="float-chip">Locked</span>
      </div>
      <p className="float-amount">₹16,21,940</p>
      <p className="float-sub">Net pay for 48 employees</p>
      <p className="float-foot">
        <Send />
        48 payslips sent on WhatsApp
      </p>
    </div>
  );
}

export function PunchCard() {
  return (
    <div className="float-card punch-card" aria-hidden>
      <span className="punch-icon">
        <MapPin />
      </span>
      <span className="punch-text">
        <b>Ananya punched in · 09:52</b>
        <span>Selfie matched · inside Salt Lake Office</span>
      </span>
    </div>
  );
}
