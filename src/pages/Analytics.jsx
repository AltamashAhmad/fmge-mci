import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QUIZ_SUBJECTS } from "../data/quizSubjects";
import { useQuizScore } from "../hooks/useQuizScore";
import { useAuth } from "../contexts/AuthContext";

export default function Analytics() {
  const { loading: authLoading } = useAuth();
  const { loadHistory } = useQuizScore();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (authLoading) return; // wait for auth to settle before fetching
    setLoading(true);
    loadHistory(50)
      .then(setHistory)
      .catch(() => setHistory([]))
      .finally(() => setLoading(false));
  }, [authLoading, loadHistory]);

  if (loading) {
    return <div className="loading-page"><span className="spinner" /> Loading analytics...</div>;
  }

  if (history.length === 0) {
    return (
      <div className="analytics-empty">
        <span className="empty-icon">📊</span>
        <h2>No quiz attempts yet</h2>
        <p>Complete some quizzes to see your analytics.</p>
        <Link to="/quiz" className="btn-start-quiz">Start Practicing</Link>
      </div>
    );
  }

  // Overall stats
  const totalAttempted = history.length;
  const totalScore = history.reduce((a, h) => a + h.score, 0);
  const totalQs = history.reduce((a, h) => a + h.total, 0);
  const overallPct = totalQs > 0 ? Math.round((totalScore / totalQs) * 100) : 0;

  // Per-subject accuracy
  const subjMap = {};
  for (const h of history) {
    if (!h.subject || h.subject === "grand-test") continue;
    if (!subjMap[h.subject]) subjMap[h.subject] = { score: 0, total: 0 };
    subjMap[h.subject].score += h.score;
    subjMap[h.subject].total += h.total;
  }
  const subjStats = Object.entries(subjMap)
    .map(([slug, { score, total }]) => {
      const subj = QUIZ_SUBJECTS.find((s) => s.slug === slug);
      return {
        slug,
        name: subj?.name || slug,
        icon: subj?.icon || "📚",
        color: subj?.color || "#6366f1",
        pct: total > 0 ? Math.round((score / total) * 100) : 0,
        total,
      };
    })
    .sort((a, b) => b.total - a.total);

  // Weak subjects (< 60%)
  const weakSubjects = subjStats.filter((s) => s.pct < 60);

  // Recent 7 attempts for sparkline
  const recent = history.slice(0, 7).reverse();

  return (
    <div className="analytics-page">
      <h1>📊 Analytics</h1>

      {/* Overall stats */}
      <div className="analytics-stats-row">
        <div className="stat-card">
          <span className="stat-val">{overallPct}%</span>
          <span className="stat-label">Overall Accuracy</span>
        </div>
        <div className="stat-card">
          <span className="stat-val">{totalAttempted}</span>
          <span className="stat-label">Sessions</span>
        </div>
        <div className="stat-card">
          <span className="stat-val">{totalQs}</span>
          <span className="stat-label">Qs Attempted</span>
        </div>
        <div className="stat-card">
          <span className="stat-val">{totalScore}</span>
          <span className="stat-label">Correct</span>
        </div>
      </div>

      {/* Trend */}
      {recent.length > 1 && (
        <div className="analytics-section">
          <h2>Recent Performance</h2>
          <div className="trend-bars">
            {recent.map((h, i) => (
              <div key={i} className="trend-bar-wrap">
                <div
                  className="trend-bar"
                  style={{
                    height: `${h.pct}%`,
                    background: h.pct >= 60 ? "#10b981" : h.pct >= 40 ? "#f59e0b" : "#ef4444",
                  }}
                />
                <span className="trend-label">{h.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Weak subjects */}
      {weakSubjects.length > 0 && (
        <div className="analytics-section">
          <h2>⚠️ Weak Areas (below 60%)</h2>
          <div className="weak-list">
            {weakSubjects.map((s) => (
              <Link key={s.slug} to={`/quiz/${s.slug}`} className="weak-item">
                <span className="weak-icon">{s.icon}</span>
                <div className="weak-info">
                  <span className="weak-name">{s.name}</span>
                  <div className="weak-bar-track">
                    <div className="weak-bar-fill" style={{ width: `${s.pct}%`, background: s.color }} />
                  </div>
                </div>
                <span className="weak-pct" style={{ color: s.pct < 40 ? "#ef4444" : "#f59e0b" }}>{s.pct}%</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Subject accuracy bars */}
      <div className="analytics-section">
        <h2>Subject Performance</h2>
        <div className="subj-bars">
          {subjStats.map((s) => (
            <div key={s.slug} className="subj-bar-row">
              <span className="sb-icon">{s.icon}</span>
              <Link to={`/quiz/${s.slug}`} className="sb-name">{s.name}</Link>
              <div className="sb-track">
                <div
                  className="sb-fill"
                  style={{
                    width: `${s.pct}%`,
                    background: s.pct >= 60 ? "#10b981" : s.pct >= 40 ? "#f59e0b" : "#ef4444",
                  }}
                />
              </div>
              <span className="sb-pct">{s.pct}%</span>
              <span className="sb-total">{s.total}Q</span>
            </div>
          ))}
        </div>
      </div>

      <div className="analytics-links">
        <Link to="/scores" className="btn-view-history">View Full History</Link>
        <Link to="/quiz" className="btn-quiz-hub">Quiz Hub</Link>
      </div>
    </div>
  );
}
