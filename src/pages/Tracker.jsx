import { useMemo, useEffect, useRef, useState } from "react";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../contexts/AuthContext";
import PageHeader from "../components/PageHeader";
import useLocalStorage from "../hooks/useLocalStorage";
import { SUBJECTS } from "../data/subjects";
import { PHASE1_WEEKS, ROADMAP } from "../data/roadmap";

const today = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
};

const DEFAULT_TASKS = {
  recall: false, slot1: false, mcq1: false, slot2: false,
  mcq2: false, revision: false, mcqMix: false, feynman: false, sleep: false,
};
function genId() {
  return "u_" + Math.random().toString(36).slice(2, 11) + Date.now().toString(36);
}

export default function Tracker() {
  const { user } = useAuth();
  const [anonId] = useLocalStorage("fmge.userId", genId());
  // Use authenticated UID if logged in, otherwise fall back to anonymous ID
  const userId = user?.uid || anonId;
  const [subjectProgress, setSubjectProgress] = useLocalStorage("fmge.subjectProgress", {});
  const [weeklyDone, setWeeklyDone] = useLocalStorage("fmge.weeklyDone", {});
  const [phaseDone, setPhaseDone] = useLocalStorage("fmge.phaseDone", {});
  const [studyDays, setStudyDays] = useLocalStorage("fmge.studyDays", []);
  const [tasksToday, setTasksToday] = useLocalStorage("fmge.tasksToday." + today(), DEFAULT_TASKS);

  const [syncStatus, setSyncStatus] = useState("idle"); // idle | syncing | synced | error
  const [loaded, setLoaded] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); // Add hydration state
  const debounceRef = useRef(null);

  // ===== Firestore: load on mount or user change =====
  useEffect(() => {
    async function load() {
      setIsHydrated(false);
      try {
        const snap = await getDoc(doc(db, "users", userId));
        if (snap.exists()) {
          const d = snap.data();
          // Use remote data exclusively to prevent local default state from overwriting cloud state
          if (d.subjectProgress) setSubjectProgress(d.subjectProgress);
          if (d.weeklyDone) setWeeklyDone(d.weeklyDone);
          if (d.phaseDone) setPhaseDone(d.phaseDone);
          if (Array.isArray(d.studyDays)) setStudyDays(d.studyDays.sort());
          if (d.tasksToday?.[today()]) setTasksToday({ ...DEFAULT_TASKS, ...d.tasksToday[today()] });
        }
      } catch (_) {
        // offline — localStorage already provides the data
      } finally {
        setIsHydrated(true);
        setLoaded(true);
      }
    }
    if (user) {
      load();
    } else {
      setIsHydrated(true);
      setLoaded(true);
    }
  }, [userId, user]); // React to userId changes (e.g. login)

  // ===== Firestore: debounced sync on every change =====
  useEffect(() => {
    if (!loaded || !isHydrated) return; // Wait for remote data before syncing!
    if (!user) {
      setSyncStatus("guest");
      return;
    }
    setSyncStatus("syncing");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(async () => {
      try {
        await setDoc(doc(db, "users", user.uid), {
          subjectProgress,
          weeklyDone,
          phaseDone,
          studyDays,
          tasksToday: { [today()]: tasksToday },
          updatedAt: new Date().toISOString(),
        }, { merge: true });
        setSyncStatus("synced");
      } catch (err) {
        console.error("Firestore sync failed:", err);
        setSyncStatus("error");
      }
    }, 1500);
  }, [loaded, isHydrated, subjectProgress, weeklyDone, phaseDone, studyDays, tasksToday, user]); // eslint-disable-line react-hooks/exhaustive-deps

  // ===== Streak calc =====
  const { streak, totalDays } = useMemo(() => {
    const set = new Set(studyDays);
    let streak = 0;
    const d = new Date();
    while (true) {
      const key = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
      if (set.has(key)) { streak++; d.setDate(d.getDate() - 1); }
      else break;
    }
    return { streak, totalDays: studyDays.length };
  }, [studyDays]);

  const allTasksToday = Object.values(tasksToday).every(Boolean);

  function toggleSubject(name, level) {
    const cur = subjectProgress[name] || { firstRead: false, rev1: false, rev2: false };
    setSubjectProgress({ ...subjectProgress, [name]: { ...cur, [level]: !cur[level] } });
  }

  function toggleWeek(week) {
    setWeeklyDone({ ...weeklyDone, [week]: !weeklyDone[week] });
  }

  function togglePhase(phase) {
    setPhaseDone({ ...phaseDone, [phase]: !phaseDone[phase] });
  }

  function toggleTask(k) {
    const next = { ...tasksToday, [k]: !tasksToday[k] };
    setTasksToday(next);
    // If all done, log study day
    if (Object.values(next).every(Boolean) && !studyDays.includes(today())) {
      setStudyDays([...studyDays, today()]);
    }
  }

  // ===== Subject completion % =====
  const subjectStats = useMemo(() => {
    let firstRead = 0, rev1 = 0, rev2 = 0;
    SUBJECTS.forEach((s) => {
      const p = subjectProgress[s.name];
      if (p?.firstRead) firstRead++;
      if (p?.rev1) rev1++;
      if (p?.rev2) rev2++;
    });
    const n = SUBJECTS.length;
    return {
      firstReadPct: Math.round((firstRead / n) * 100),
      rev1Pct: Math.round((rev1 / n) * 100),
      rev2Pct: Math.round((rev2 / n) * 100),
      counts: { firstRead, rev1, rev2, total: n },
    };
  }, [subjectProgress]);

  function resetAll() {
    if (!confirm("Reset ALL progress? This cannot be undone.")) return;
    setSubjectProgress({});
    setWeeklyDone({});
    setPhaseDone({});
    setStudyDays([]);
    setTasksToday(DEFAULT_TASKS);
  }

  return (
    <>
      <PageHeader
        title="✅ Progress Tracker"
        subtitle="Your progress syncs to the cloud automatically. Works offline too — data saved on device + Firestore."
      >
        <div style={{ marginTop: "0.8rem", fontSize: "0.82rem" }}>
          {syncStatus === "syncing" && <span style={{ color: "var(--warn)" }}>⏳ Syncing to cloud…</span>}
          {syncStatus === "synced" && <span style={{ color: "var(--success)" }}>☁️ Synced to cloud</span>}
          {syncStatus === "guest" && <span style={{ color: "var(--text-mute)" }}>💾 Guest Mode — Saved locally</span>}
          {syncStatus === "error" && <span style={{ color: "var(--danger)" }}>⚠️ Sync Failed — Check network/permissions</span>}
          {syncStatus === "idle" && !loaded && <span style={{ color: "var(--text-mute)" }}>⏳ Loading…</span>}
        </div>
      </PageHeader>

      <div className="tracker-stats">
        <div className="stat-big">
          <div className="stat-big-num">{streak}</div>
          <div className="stat-big-label">🔥 Day Streak</div>
        </div>
        <div className="stat-big">
          <div className="stat-big-num">{totalDays}</div>
          <div className="stat-big-label">Total Study Days</div>
        </div>
        <div className="stat-big">
          <div className="stat-big-num">{subjectStats.firstReadPct}%</div>
          <div className="stat-big-label">1st Read · {subjectStats.counts.firstRead}/{subjectStats.counts.total}</div>
        </div>
        <div className="stat-big">
          <div className="stat-big-num">{subjectStats.rev1Pct}%</div>
          <div className="stat-big-label">Revision 1</div>
        </div>
        <div className="stat-big">
          <div className="stat-big-num">{subjectStats.rev2Pct}%</div>
          <div className="stat-big-label">Revision 2</div>
        </div>
      </div>

      <section className="tracker-section">
        <h2>📌 Today's Tasks ({today()})</h2>
        <p className="muted">Tick all 9 to log today as a study day.</p>
        <div className="grid grid-2">
          {[
            ["recall", "🔁 Recall sprint (30 min Anki + writing)"],
            ["slot1", "🎥 Study Slot 1 — Major subject (2 hrs)"],
            ["mcq1", "❓ MCQs on Slot 1 (25 Qs)"],
            ["slot2", "🎥 Study Slot 2 — Secondary subject (2 hrs)"],
            ["mcq2", "❓ MCQs on Slot 2 (25 Qs)"],
            ["revision", "🔁 Spaced revision (2-day / 7-day / 21-day)"],
            ["mcqMix", "❓ Mixed MCQ session (75 Qs)"],
            ["feynman", "✍️ Feynman slot — explain 1 hard topic"],
            ["sleep", "💤 Sleep by 22:30 (8 hrs)"],
          ].map(([k, label]) => (
            <label key={k} className={`task-row ${tasksToday[k] ? "done" : ""}`}>
              <input type="checkbox" checked={tasksToday[k] || false} onChange={() => toggleTask(k)} />
              <span>{label}</span>
            </label>
          ))}
        </div>
        {allTasksToday && <div className="callout success">🎉 Today logged. Streak preserved. See you tomorrow!</div>}
      </section>

      <section className="tracker-section">
        <h2>📚 Subject Completion</h2>
        <p className="muted">Track 1st read, 1st revision, 2nd revision per subject.</p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Phase</th>
                <th>Qs</th>
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
                    <td>{s.weightage}</td>
                    <td><input type="checkbox" checked={!!p.firstRead} onChange={() => toggleSubject(s.name, "firstRead")} /></td>
                    <td><input type="checkbox" checked={!!p.rev1} onChange={() => toggleSubject(s.name, "rev1")} /></td>
                    <td><input type="checkbox" checked={!!p.rev2} onChange={() => toggleSubject(s.name, "rev2")} /></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="tracker-section">
        <h2>📆 Phase 1 — Weekly Check-off</h2>
        <div className="grid grid-2">
          {PHASE1_WEEKS.map((w) => (
            <label key={w.week} className={`task-row ${weeklyDone[w.week] ? "done" : ""}`}>
              <input type="checkbox" checked={!!weeklyDone[w.week]} onChange={() => toggleWeek(w.week)} />
              <span>
                <strong>{w.week}</strong> · {w.dates}
                <span className="task-sub">Slot 1: {w.slot1.split(" — ")[0]} · Slot 2: {w.slot2.split(" — ")[0]}</span>
              </span>
            </label>
          ))}
        </div>
      </section>

      <section className="tracker-section">
        <h2>🗺️ Phase Completion</h2>
        <div className="grid grid-2">
          {ROADMAP.map((r) => (
            <label key={r.phase} className={`task-row ${phaseDone[r.phase] ? "done" : ""}`}>
              <input type="checkbox" checked={!!phaseDone[r.phase]} onChange={() => togglePhase(r.phase)} />
              <span>
                <strong>{r.phase}</strong>
                <span className="task-sub">{r.months}</span>
              </span>
            </label>
          ))}
        </div>
      </section>

      <button className="danger-btn" onClick={resetAll}>↺ Reset All Progress</button>
    </>
  );
}
