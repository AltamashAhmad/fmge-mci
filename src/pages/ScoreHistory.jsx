import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QUIZ_SUBJECTS } from "../data/quizSubjects";
import { useQuizScore } from "../hooks/useQuizScore";
import { useAuth } from "../contexts/AuthContext";

const MODES = ["All", "practice", "mock", "grand"];
const SUBJECTS = ["All", ...QUIZ_SUBJECTS.map((s) => s.slug)];

export default function ScoreHistory() {
  const { loading: authLoading } = useAuth();
  const { loadHistory } = useQuizScore();
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterMode, setFilterMode] = useState("All");
  const [filterSubject, setFilterSubject] = useState("All");

  useEffect(() => {
    if (authLoading) return; // wait for auth to settle before fetching
    setLoading(true);
    loadHistory(100)
      .then(setHistory)
      .catch(() => setHistory([]))
      .finally(() => setLoading(false));
  }, [authLoading, loadHistory]);

  if (loading) {
    return <div className="loading-page"><span className="spinner" /> Loading history...</div>;
  }

  const filtered = history.filter((h) => {
    if (filterMode !== "All" && h.mode !== filterMode) return false;
    if (filterSubject !== "All" && h.subject !== filterSubject) return false;
    return true;
  });

  function formatDate(ts) {
    if (!ts) return "";
    const d = ts.toDate ? ts.toDate() : new Date(ts);
    return d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
  }

  function getSubjectLabel(slug) {
    const s = QUIZ_SUBJECTS.find((x) => x.slug === slug);
    return s ? `${s.icon} ${s.name}` : slug;
  }

  return (
    <div className="score-history-page">
      <div className="sh-header">
        <h1>📜 Score History</h1>
        <div className="sh-filters">
          <select value={filterMode} onChange={(e) => setFilterMode(e.target.value)}>
            {MODES.map((m) => <option key={m} value={m}>{m === "All" ? "All Modes" : m.charAt(0).toUpperCase() + m.slice(1)}</option>)}
          </select>
          <select value={filterSubject} onChange={(e) => setFilterSubject(e.target.value)}>
            <option value="All">All Subjects</option>
            {QUIZ_SUBJECTS.filter((s) => history.some((h) => h.subject === s.slug)).map((s) => (
              <option key={s.slug} value={s.slug}>{s.name}</option>
            ))}
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="sh-empty">
          <p>No records match these filters.</p>
          <Link to="/quiz">Start a quiz</Link>
        </div>
      ) : (
        <div className="sh-table-wrap">
          <table className="sh-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Topic</th>
                <th>Mode</th>
                <th>Score</th>
                <th>%</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((h, i) => (
                <tr key={h.id || i} className={h.pct >= 60 ? "row-pass" : "row-fail"}>
                  <td>{i + 1}</td>
                  <td>{getSubjectLabel(h.subject)}</td>
                  <td>{h.topic}</td>
                  <td><span className={`mode-chip mode-${h.mode}`}>{h.mode}</span></td>
                  <td>{h.score}/{h.total}</td>
                  <td>
                    <span className={`pct-chip ${h.pct >= 60 ? "pass" : "fail"}`}>{h.pct}%</span>
                  </td>
                  <td>
                    {h.timeSpent
                      ? `${Math.floor(h.timeSpent / 60)}m ${h.timeSpent % 60}s`
                      : "—"}
                  </td>
                  <td>{formatDate(h.ts)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="sh-links">
        <Link to="/analytics">📊 Analytics</Link>
        <Link to="/quiz">Quiz Hub</Link>
      </div>
    </div>
  );
}
