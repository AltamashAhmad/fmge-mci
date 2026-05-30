import { useState, useEffect, useRef } from "react";
import PageHeader from "../components/PageHeader";
import { SMART_DAILY_CYCLE } from "../data/roadmap";

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

export default function DailyCycle() {
  const c = SMART_DAILY_CYCLE;
  const [now, setNow] = useState(getNowHHMM);
  const activeRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => setNow(getNowHHMM()), 30000);
    return () => clearInterval(id);
  }, []);

  // Scroll to active block once on mount
  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const activeIdx = getActiveIndex(c.blocks, now);

  return (
    <>
      <PageHeader
        title="📅 Smart Daily Cycle"
        subtitle={c.intro}
        badge={`NOW ${now}`}
      />

      <div className="daily">
        {c.blocks.map((d, i) => {
          const isActive = i === activeIdx;
          const isPast = i < activeIdx;
          return (
            <div
              key={d.time}
              ref={isActive ? activeRef : null}
              className={`daily-row${isActive ? " daily-active" : isPast ? " daily-past" : ""}`}
            >
              <div className="daily-time">
                {isActive && <span className="daily-now-dot" />}
                {d.time}
              </div>
              <div className="daily-task">
                <div className="daily-task-head">
                  <span className="daily-icon">{d.icon}</span>
                  <strong>{d.title}</strong>
                  {isActive && <span className="daily-active-badge">NOW</span>}
                </div>
                <span className="daily-detail">{d.detail}</span>
                {d.smart && <span className="daily-smart">⚡ {d.smart}</span>}
              </div>
            </div>
          );
        })}
      </div>

      <div className="callout">📊 {c.totals}</div>
    </>
  );
}
