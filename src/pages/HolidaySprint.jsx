import { useState, useEffect, useRef } from "react";
import { HOLIDAY_SPRINT_DAILY, HOLIDAY_SPRINT_MONTHS } from "../data/roadmap";

function getNowHHMM() {
  const n = new Date();
  return `${String(n.getHours()).padStart(2, "0")}:${String(n.getMinutes()).padStart(2, "0")}`;
}

function getActiveIndex(blocks, hhmm) {
  for (let i = blocks.length - 1; i >= 0; i--) {
    if (hhmm >= blocks[i].time) return i;
  }
  return -1;
}

export default function HolidaySprint() {
  const d = HOLIDAY_SPRINT_DAILY;
  const [tab, setTab] = useState("daily");
  const [now, setNow] = useState(getNowHHMM);
  const [openMonth, setOpenMonth] = useState(0);
  const activeRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setNow(getNowHHMM()), 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (tab === "daily" && activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [tab]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeIdx = getActiveIndex(d.blocks, now);

  return (
    <div className="hs-page">
      {/* ── Header ─────────────────────────────────── */}
      <div className="hs-header">
        <span className="hs-badge">🏖️ Holiday Sprint</span>
        <h1 className="hs-title">3-Month Intensive FMGE Schedule</h1>
        <p className="hs-sub">
          Fresh start · 10 hrs/day · 90 days · 900 focused hours · Covers Phase 1 + 2 + 3
        </p>
        <div className="hs-stats">
          <div className="hs-stat">
            <span className="hs-stat-icon">🕐</span>
            <strong>10 hrs</strong>
            <small>per day</small>
          </div>
          <div className="hs-stat">
            <span className="hs-stat-icon">📅</span>
            <strong>90 days</strong>
            <small>total</small>
          </div>
          <div className="hs-stat">
            <span className="hs-stat-icon">📚</span>
            <strong>12 subjects</strong>
            <small>covered</small>
          </div>
          <div className="hs-stat">
            <span className="hs-stat-icon">🧪</span>
            <strong>3 grand tests</strong>
            <small>milestones</small>
          </div>
        </div>
      </div>

      {/* ── Tabs ───────────────────────────────────── */}
      <div className="hs-tabs">
        <button
          className={`hs-tab${tab === "daily" ? " active" : ""}`}
          onClick={() => setTab("daily")}
        >
          📅 Daily Schedule
        </button>
        <button
          className={`hs-tab${tab === "plan" ? " active" : ""}`}
          onClick={() => setTab("plan")}
        >
          🗓️ 3-Month Plan
        </button>
      </div>

      {/* ── Daily Schedule Tab ─────────────────────── */}
      {tab === "daily" && (
        <div>
          {/* Hour breakdown summary */}
          <div className="hs-breakdown">
            {d.breakdown.map((b) => (
              <div key={b.activity} className="hs-breakdown-item">
                <span>{b.activity}</span>
                <strong>{b.hours} hrs</strong>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="daily">
            {d.blocks.map((block, i) => {
              const isActive = i === activeIdx;
              const isPast = i < activeIdx;
              return (
                <div
                  key={block.time}
                  ref={isActive ? activeRef : null}
                  className={`daily-row${isActive ? " daily-active" : isPast ? " daily-past" : ""}`}
                >
                  <div className="daily-time">
                    {isActive && <span className="daily-now-dot" />}
                    {block.time}
                  </div>
                  <div className="daily-task">
                    <div className="daily-task-head">
                      <span className="daily-icon">{block.icon}</span>
                      <strong>{block.title}</strong>
                      {isActive && <span className="daily-active-badge">NOW</span>}
                    </div>
                    <span className="daily-detail">{block.detail}</span>
                    {block.smart && <span className="daily-smart">⚡ {block.smart}</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="callout">📊 {d.totalFocused}</div>
        </div>
      )}

      {/* ── 3-Month Plan Tab ───────────────────────── */}
      {tab === "plan" && (
        <div className="hs-months">
          {HOLIDAY_SPRINT_MONTHS.map((month, mi) => (
            <div key={month.month} className="hs-month-card">
              {/* Month accordion header */}
              <button
                className="hs-month-header"
                style={{ "--month-color": month.color }}
                onClick={() => setOpenMonth(openMonth === mi ? -1 : mi)}
              >
                <div className="hs-month-left">
                  <span className="hs-month-num">Month {month.month}</span>
                  <span className="hs-month-label">{month.title}</span>
                </div>
                <div className="hs-month-right">
                  <div className="hs-month-chips">
                    {month.subjects.map((s) => (
                      <span key={s} className="hs-subject-chip">{s}</span>
                    ))}
                  </div>
                  <span className="hs-chevron">{openMonth === mi ? "▲" : "▼"}</span>
                </div>
              </button>

              {/* Month expanded body */}
              {openMonth === mi && (
                <div className="hs-month-body">
                  <div className="hs-month-info">
                    <p className="hs-month-goal">🎯 {month.goal}</p>
                    <div className="hs-month-meta">
                      <span>⏱️ <strong>{month.hours} hrs</strong> total</span>
                      <span>✅ {month.deliverable}</span>
                    </div>
                  </div>

                  {/* Week cards */}
                  <div className="hs-weeks">
                    {month.weeks.map((week) => (
                      <div
                        key={week.week}
                        className={`hs-week${week.isGrandTest ? " hs-week-gt" : ""}`}
                        style={{ "--month-color": month.color }}
                      >
                        <div className="hs-week-header">
                          <div>
                            <span className="hs-week-label">{week.week}</span>
                            <span className="hs-week-days">{week.days} · {week.hrs} hrs</span>
                          </div>
                          {week.isGrandTest && (
                            <span className="hs-gt-badge">🧪 Grand Test</span>
                          )}
                        </div>

                        <div className="hs-week-slots">
                          <div className="hs-slot">
                            <span className="hs-slot-label">Slot 1–2 (Morning)</span>
                            <p>{week.slot1}</p>
                          </div>
                          <div className="hs-slot">
                            <span className="hs-slot-label">Slot 3 + Evening</span>
                            <p>{week.slot2}</p>
                          </div>
                        </div>

                        <div className="hs-week-footer">
                          <span className="hs-extras">{week.extras}</span>
                          <span className="hs-test-tag">📝 {week.test}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Grand test callout */}
                  <div className="hs-gt-callout" style={{ "--month-color": month.color }}>
                    🧪 <strong>Milestone:</strong> {month.grandTest}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
