import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { doc, getDoc, collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import PageHeader from "../components/PageHeader";
import { SUBJECTS } from "../data/subjects";
import { ROADMAP, PHASE1_WEEKS } from "../data/roadmap";

export default function AdminUserDetails() {
  const { uid } = useParams();
  const { user, isAdmin, loading: authLoading } = useAuth();
  
  const [targetUser, setTargetUser] = useState(null);
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!isAdmin || !uid) return;

    async function fetchData() {
      try {
        // Fetch User Doc
        const userSnap = await getDoc(doc(db, "users", uid));
        if (!userSnap.exists()) {
          setError("User not found in database.");
          setLoading(false);
          return;
        }
        setTargetUser({ id: userSnap.id, ...userSnap.data() });

        // Fetch Attempts
        const attemptsQ = query(collection(db, "users", uid, "attempts"), orderBy("ts", "desc"));
        const attemptsSnap = await getDocs(attemptsQ);
        setAttempts(attemptsSnap.docs.map(d => ({ id: d.id, ...d.data() })));
        
      } catch (err) {
        console.error(err);
        setError("Failed to fetch user data. Check permissions.");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [uid, isAdmin]);

  if (authLoading) return <div className="page-loading"><div className="spinner" /></div>;
  if (!user || !isAdmin) return <Navigate to="/" replace />;

  if (loading) return <div className="page-loading"><div className="spinner" /> Loading full profile...</div>;
  if (error) return <div className="page-error"><p>{error}</p><Link to="/admin">Back to Admin</Link></div>;

  const subjectProgress = targetUser.subjectProgress || {};
  const phaseDone = targetUser.phaseDone || {};
  const streak = targetUser.stats?.currentStreak || 0;
  const totalDays = Array.isArray(targetUser.studyDays) ? targetUser.studyDays.length : 0;
  
  const totalAttempted = targetUser.stats?.totalAttempted || 0;
  const totalCorrect = targetUser.stats?.totalCorrect || 0;
  const accuracy = totalAttempted > 0 ? Math.round((totalCorrect / totalAttempted) * 100) : 0;

  const weeklyDone = targetUser.weeklyDone || {};
  const tasksTodayMap = targetUser.tasksToday || {};
  // Find the most recent date string in tasksToday
  const taskDates = Object.keys(tasksTodayMap).sort((a, b) => new Date(b) - new Date(a));
  const mostRecentTaskDate = taskDates[0] || null;
  const recentTasks = mostRecentTaskDate ? tasksTodayMap[mostRecentTaskDate] : null;

  let activeStr = "Unknown";
  if (targetUser.lastActive?.toDate) {
    activeStr = targetUser.lastActive.toDate().toLocaleString();
  } else if (targetUser.updatedAt) {
    activeStr = new Date(targetUser.updatedAt).toLocaleString();
  }

  return (
    <div className="admin-user-details">
      <PageHeader 
        title={`👤 ${targetUser.profile?.name || "Anonymous User"}`} 
        subtitle={
          <>
            <div>{targetUser.profile?.email || "No email available"}</div>
            <div style={{ marginTop: '0.4rem', fontSize: '0.85rem', color: 'var(--primary)' }}>
              🕒 Last Active: {activeStr}
            </div>
          </>
        }
      >
        <Link to="/admin" className="btn-back" style={{ display: 'inline-block', marginTop: '1rem' }}>← Back to Dashboard</Link>
      </PageHeader>

      {/* OVERVIEW STATS */}
      <div className="tracker-stats" style={{ marginBottom: "2rem" }}>
        <div className="stat-big">
          <div className="stat-big-num">{streak}</div>
          <div className="stat-big-label">🔥 Day Streak</div>
        </div>
        <div className="stat-big">
          <div className="stat-big-num">{totalDays}</div>
          <div className="stat-big-label">Total Study Days</div>
        </div>
        <div className="stat-big">
          <div className="stat-big-num">{totalAttempted}</div>
          <div className="stat-big-label">Total Qs Attempted</div>
        </div>
        <div className="stat-big">
          <div className="stat-big-num">{accuracy}%</div>
          <div className="stat-big-label">Overall Accuracy</div>
        </div>
      </div>

      {/* TRACKER READ-ONLY */}
      <section className="tracker-section">
        <h2>📚 Subject Progress (Read Only)</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Phase</th>
                <th>1st Read</th>
                <th>Rev 1</th>
                <th>Rev 2</th>
              </tr>
            </thead>
            <tbody>
              {SUBJECTS.map((s) => {
                const p = subjectProgress[s.name] || {};
                return (
                  <tr key={s.name}>
                    <td><strong>{s.name}</strong></td>
                    <td>{s.phase}</td>
                    <td>{p.firstRead ? "✅" : "—"}</td>
                    <td>{p.rev1 ? "✅" : "—"}</td>
                    <td>{p.rev2 ? "✅" : "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="tracker-section">
        <h2>🗺️ Phase Completion (Read Only)</h2>
        <div className="grid grid-2">
          {ROADMAP.map((r) => (
            <div key={r.phase} className={`task-row ${phaseDone[r.phase] ? "done" : ""}`} style={{ pointerEvents: 'none' }}>
              <input type="checkbox" readOnly checked={!!phaseDone[r.phase]} />
              <span>
                <strong>{r.phase}</strong>
                <span className="task-sub">{r.months}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="tracker-section">
        <h2>📆 Phase 1 — Weekly Check-off (Read Only)</h2>
        <div className="grid grid-2">
          {PHASE1_WEEKS.map((w) => (
            <div key={w.week} className={`task-row ${weeklyDone[w.week] ? "done" : ""}`} style={{ pointerEvents: 'none' }}>
              <input type="checkbox" readOnly checked={!!weeklyDone[w.week]} />
              <span>
                <strong>{w.week}</strong> · {w.dates}
                <span className="task-sub">Slot 1: {w.slot1.split(" — ")[0]} · Slot 2: {w.slot2.split(" — ")[0]}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {recentTasks && (
        <section className="tracker-section">
          <h2>📌 Tasks Logged On ({mostRecentTaskDate})</h2>
          <div className="grid grid-2">
            {Object.entries(recentTasks).map(([k, isDone]) => (
              <div key={k} className={`task-row ${isDone ? "done" : ""}`} style={{ pointerEvents: 'none' }}>
                <input type="checkbox" readOnly checked={!!isDone} />
                <span style={{ textTransform: "capitalize" }}>{k.replace(/([A-Z])/g, ' $1')}</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SCORE HISTORY */}
      <section className="tracker-section">
        <h2>📊 Score History ({attempts.length} attempts)</h2>
        {attempts.length === 0 ? (
          <p className="muted">This user hasn't completed any quizzes yet.</p>
        ) : (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Subject</th>
                  <th>Topic</th>
                  <th>Mode</th>
                  <th>Score</th>
                  <th>Accuracy</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map(a => {
                  const dateStr = a.ts?.toDate ? a.ts.toDate().toLocaleString() : "Unknown";
                  return (
                    <tr key={a.id}>
                      <td>{dateStr}</td>
                      <td style={{ textTransform: "capitalize" }}>{a.subject}</td>
                      <td>{a.topic || "Full Subject"}</td>
                      <td style={{ textTransform: "capitalize" }}>{a.mode}</td>
                      <td><strong>{a.score}/{a.total}</strong></td>
                      <td>{a.pct}%</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </section>

    </div>
  );
}
