import { Link } from "react-router-dom";
import { useMemo } from "react";
import PageHeader from "../components/PageHeader";
import { SUBJECTS } from "../data/subjects";
import { ROADMAP } from "../data/roadmap";

const EXAM_DATE = new Date("2027-06-15T09:00:00");

function getDaysLeft() {
  return Math.max(0, Math.ceil((EXAM_DATE - new Date()) / (1000 * 60 * 60 * 24)));
}

function getCurrentPhase() {
  const today = new Date();
  for (const r of ROADMAP) {
    const s = new Date(r.start), e = new Date(r.end);
    e.setHours(23, 59, 59);
    if (today >= s && today <= e) return r;
  }
  if (today < new Date(ROADMAP[0].start)) return "PRE";
  if (today > new Date(ROADMAP[ROADMAP.length - 1].end)) return "POST";
  return null;
}

export default function Home() {
  const totalWeightage = useMemo(() => SUBJECTS.reduce((a, b) => a + b.weightage, 0), []);
  const totalStudyHours = useMemo(() => SUBJECTS.reduce((a, b) => a + b.hoursFirstRead + b.hoursRevision, 0), []);
  const daysLeft = useMemo(getDaysLeft, []);
  const currentPhase = useMemo(getCurrentPhase, []);

  const tiles = [
    { to: "/analysis", icon: "🔬", title: "Subject Analysis", desc: "19 subjects · weightage · difficulty · hours" },
    { to: "/resources", icon: "📚", title: "Paid Resources", desc: "Marrow vs PrepLadder vs DAMS comparison" },
    { to: "/free", icon: "🆓", title: "Free Resources", desc: "YouTube · Anki · PYQs · tools" },
    { to: "/smart-study", icon: "🧠", title: "Smart Study", desc: "10 evidence-based techniques" },
    { to: "/roadmap", icon: "🗺️", title: "13-Month Roadmap", desc: "7 phases · clear milestones" },
    { to: "/phase-1", icon: "📆", title: "Week-by-Week", desc: "Phase 1: 8 weeks · day-by-day" },
    { to: "/daily", icon: "📅", title: "Daily Cycle", desc: "Hour-by-hour smart schedule" },
    { to: "/tracker", icon: "✅", title: "Progress Tracker", desc: "Subjects · phases · daily tasks — synced to cloud" },
    { to: "/tips", icon: "💡", title: "Top 10 Tips", desc: "Non-negotiable rules to pass" },
  ];

  return (
    <>
      <PageHeader
        badge="TARGET · FMGE JUNE 2027"
        title="Your 13-Month FMGE Roadmap"
        subtitle="Full subject analysis · Resources · Smart study · Day-wise schedule · Progress tracker. Built for: Final-year MBBS, starting fresh."
      >
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">{daysLeft}</div>
            <div className="stat-label">Days to Exam</div>
          </div>
          <div className="stat">
            <div className="stat-num">{SUBJECTS.length}</div>
            <div className="stat-label">Subjects</div>
          </div>
          <div className="stat">
            <div className="stat-num">{totalWeightage}</div>
            <div className="stat-label">MCQs in exam</div>
          </div>
          <div className="stat">
            <div className="stat-num">150</div>
            <div className="stat-label">Pass mark</div>
          </div>
          <div className="stat">
            <div className="stat-num">~{totalStudyHours}+</div>
            <div className="stat-label">Study hrs plan</div>
          </div>
        </div>
      </PageHeader>

      {/* Current phase banner */}
      {currentPhase === "POST" ? (
        <div className="phase-banner phase-banner-post" style={{ backgroundColor: "#1e1b4b", borderColor: "#3730a3" }}>
          <span className="phase-banner-label">🎉 Roadmap Complete</span>
          <strong>The FMGE June 2027 Exam has passed!</strong>
          <span className="phase-banner-goal">Congratulations on completing the 13-month journey. We hope you aced it!</span>
        </div>
      ) : currentPhase === "PRE" ? (
        <div className="phase-banner phase-banner-pre">
          <span className="phase-banner-label">⏳ Prep mode</span>
          <strong>Phase 1 starts June 1, 2026 — {Math.ceil((new Date("2026-06-01") - new Date()) / 86400000)} days to go</strong>
          <span className="phase-banner-goal">Use this time to set up Marrow / Anki / study space. Read the roadmap.</span>
          <Link to="/roadmap" className="phase-banner-link">See the plan →</Link>
        </div>
      ) : currentPhase ? (
        <div className="phase-banner">
          <span className="phase-banner-label">📍 You are here</span>
          <strong>{currentPhase.phase}</strong>
          <span className="phase-banner-goal">{currentPhase.goal}</span>
          <Link to="/roadmap" className="phase-banner-link">View full roadmap →</Link>
        </div>
      ) : null}

      <section className="grid grid-3 home-grid">
        {tiles.map((t) => (
          <Link key={t.to} to={t.to} className="card tile">
            <div className="tile-icon">{t.icon}</div>
            <h3>{t.title}</h3>
            <p>{t.desc}</p>
          </Link>
        ))}
      </section>

      <section className="card callout-card">
        <h3>📌 The Big Truth</h3>
        <p>FMGE pass rate is 15–25% — not because the exam is brutal, but because most candidates under-prepare. A structured 12+ month plan, daily consistency, and active recall will put you well above pass mark.</p>
        <p style={{ marginTop: "0.8rem" }}>
          <strong>Start here:</strong>{" "}
          <Link to="/analysis">See subject weightage →</Link>
        </p>
      </section>
    </>
  );
}
