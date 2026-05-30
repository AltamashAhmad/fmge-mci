import { useMemo } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { ROADMAP, HOUR_RECOMMENDATION } from "../data/roadmap";
import useLocalStorage from "../hooks/useLocalStorage";

function getPhaseStatus(start, end) {
  const today = new Date();
  const s = new Date(start);
  const e = new Date(end);
  e.setHours(23, 59, 59);
  if (today >= s && today <= e) return "active";
  if (today < s) return "upcoming";
  return "done";
}

export default function Roadmap() {
  const h = HOUR_RECOMMENDATION;
  const [phaseDone] = useLocalStorage("fmge.phaseDone", {});

  const phases = useMemo(() =>
    ROADMAP.map((r) => ({
      ...r,
      status: getPhaseStatus(r.start, r.end),
      tracked: !!phaseDone[r.phase],
    })),
    [phaseDone]
  );

  const activePhase = phases.find((p) => p.status === "active");

  return (
    <>
      <PageHeader
        title="🗺️ The 13-Month Roadmap"
        subtitle="7 phases · Each phase builds on the last · Test after every phase."
      />

      {activePhase && (
        <div className="phase-banner" style={{ marginBottom: "2rem" }}>
          <span className="phase-banner-label">📍 Active now</span>
          <strong>{activePhase.phase}</strong>
          <span className="phase-banner-goal">{activePhase.goal}</span>
          <Link to="/tracker" className="phase-banner-link">Track progress →</Link>
        </div>
      )}

      <h2>⏰ How Many Hours?</h2>
      <p className="muted">{h.status}</p>
      <div className="hours-grid">
        <div className="hour-card">
          <div className="hour-num">{h.weekdayHours} hrs/day</div>
          <p className="muted small-margin">Weekdays (Mon–Sat)</p>
          {h.breakdown.map((b) => (
            <div key={b.activity} className="hour-row">
              <span>{b.activity}</span>
              <span>{b.hours}h</span>
            </div>
          ))}
        </div>
        <div className="hour-card">
          <div className="hour-num">{h.weekendHours} hrs/day</div>
          <p className="muted small-margin">Sundays (morning + afternoon)</p>
          <p>Use weekends to:</p>
          <ul className="hours-list">
            <li>Take 1 grand test (3 hrs)</li>
            <li>Review the week&apos;s mistakes</li>
            <li>Catch up on missed topics</li>
            <li>Re-revise hard concepts</li>
          </ul>
          <div className="callout small">📌 {h.weeklyOff}</div>
        </div>
      </div>
      <div className="callout">🧮 {h.note}</div>

      <h2 style={{ marginTop: "3rem" }}>📍 The 7 Phases</h2>
      <div className="timeline">
        {phases.map((r) => (
          <div
            key={r.phase}
            className={`tl-item tl-${r.status}${r.tracked ? " tl-tracked" : ""}`}
          >
            <div className="tl-phase-row">
              <span className="tl-phase">{r.phase}</span>
              {r.status === "active" && <span className="tl-badge tl-badge-active">▶ NOW</span>}
              {r.status === "done" && !r.tracked && <span className="tl-badge tl-badge-done">Past</span>}
              {r.tracked && <span className="tl-badge tl-badge-tracked">✓ Marked done</span>}
            </div>
            <h3>{r.months}</h3>
            <div className="tl-goal">🎯 {r.goal}</div>
            <div className="tl-subjects">
              {r.subjects.map((s) => <span key={s}>{s}</span>)}
            </div>
            <div className="tl-deliv">✅ <strong>Deliverable:</strong> {r.deliverable}</div>
          </div>
        ))}
      </div>

      <div className="callout" style={{ marginTop: "2rem" }}>
        ✅ Mark phases complete in your <Link to="/tracker">Progress Tracker</Link> to track your journey.
      </div>
    </>
  );
}
