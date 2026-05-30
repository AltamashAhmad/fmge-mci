import PageHeader from "../components/PageHeader";
import { SMART_STUDY } from "../data/smartStudy";

export default function SmartStudy() {
  return (
    <>
      <PageHeader
        title="🧠 Smart Study Techniques"
        subtitle="Evidence-based methods. These multiply your output without adding study hours. Use ALL of them — not pick one."
      />

      <div className="grid grid-2">
        {SMART_STUDY.map((s) => (
          <div key={s.name} className="smart-card">
            <h3>{s.name}</h3>
            <div className="smart-row"><div className="smart-label">Why</div><div className="smart-val">{s.why}</div></div>
            <div className="smart-row"><div className="smart-label">How</div><div className="smart-val">{s.how}</div></div>
            <div className="smart-row"><div className="smart-label">When</div><div className="smart-val">{s.when}</div></div>
            <div className="smart-row"><div className="smart-label">Tools</div><div className="smart-val">{s.tools}</div></div>
          </div>
        ))}
      </div>

      <div className="callout">
        🎯 <strong>The Big 3 (if you only adopt 3):</strong>{" "}
        <strong>Active Recall</strong> + <strong>Spaced Repetition (Anki)</strong> + <strong>PYQ-First Approach</strong>.
        These three alone separate toppers from average scorers.
      </div>
    </>
  );
}
