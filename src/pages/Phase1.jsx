import { useMemo } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { PHASE1_WEEKS, WEEKLY_RHYTHM, PHASE_OUTLINES } from "../data/roadmap";

function getWeekStatus(startDate) {
  const today = new Date();
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);
  if (today >= start && today < end) return "active";
  if (today < start) return "upcoming";
  return "done";
}

export default function Phase1() {
  const weekStatuses = useMemo(
    () => PHASE1_WEEKS.map((w) => getWeekStatus(w.startDate)),
    []
  );
  const activeWeekIndex = weekStatuses.indexOf("active");
  const firstUpcomingIndex = weekStatuses.indexOf("upcoming");

  return (
    <>
      <PageHeader
        title="📆 Week-by-Week Plan"
        subtitle="Phase 1 in full detail. Higher-phase outlines are below — they expand when you arrive."
      />

      <h2>Phase 1 — 8 Weeks (Jun–Jul 2026)</h2>

      {activeWeekIndex === -1 && firstUpcomingIndex === 0 && (
        <div className="callout" style={{ marginBottom: "1.5rem" }}>
          ⏳ <strong>Phase 1 starts June 1, 2026.</strong> Use the remaining days to set up Anki, get Marrow access, and organize your study space.
        </div>
      )}
      {activeWeekIndex === -1 && firstUpcomingIndex === -1 && weekStatuses.every(s => s === "done") && (
        <div className="callout success" style={{ marginBottom: "1.5rem" }}>
          🎉 <strong>Phase 1 complete!</strong> Head to <Link to="/roadmap">the Roadmap</Link> for Phase 2.
        </div>
      )}

      <div className="grid grid-2">
        {PHASE1_WEEKS.map((w, i) => {
          const status = weekStatuses[i];
          return (
            <div key={w.week} className={`week-card week-${status}`}>
              <div className="week-head">
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <h4>{w.week}</h4>
                  {status === "active" && <span className="week-status-badge week-badge-active">▶ NOW</span>}
                  {status === "done" && <span className="week-status-badge week-badge-done">✓ Done</span>}
                  {status === "upcoming" && i === firstUpcomingIndex && (
                    <span className="week-status-badge week-badge-next">Next</span>
                  )}
                </div>
                <span className="week-date">{w.dates}</span>
              </div>
              <div className="slot-line"><span className="slot-tag">SLOT 1</span>{w.slot1}</div>
              <div className="slot-line"><span className="slot-tag">SLOT 2</span>{w.slot2}</div>
              <div className="slot-line small muted">📌 {w.extras}</div>
              <div className="week-test">🧪 <strong>Weekend Test:</strong> {w.weekendTest}</div>
            </div>
          );
        })}
      </div>

      <h2 style={{ marginTop: "3rem" }}>📋 Weekly Rhythm (Mon → Sun)</h2>
      <p className="muted">This rhythm repeats every week across all 13 months.</p>
      <div className="daily">
        {WEEKLY_RHYTHM.map((d) => (
          <div key={d.day} className="daily-row">
            <div className="daily-time">{d.day}</div>
            <div className="daily-task">
              <div className="daily-task-head">
                <strong>{d.focus}</strong>
              </div>
              <span className="daily-detail">{d.note}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "3rem" }}>🚀 Phases 2–7 Outline</h2>
      <div className="grid grid-2">
        {PHASE_OUTLINES.map((p) => (
          <div key={p.phase} className="outline-card">
            <h4>{p.phase}</h4>
            <ul>{p.weeks.map((w, i) => <li key={i}>{w}</li>)}</ul>
          </div>
        ))}
      </div>
    </>
  );
}
