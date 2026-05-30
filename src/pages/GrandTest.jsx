import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { QUIZ_SUBJECTS } from "../data/quizSubjects";
import { getQuestions } from "../data/questions/index";
import { useQuizScore } from "../hooks/useQuizScore";
import QuizCard from "../components/QuizCard";
import TimerBar from "../components/TimerBar";

const QUESTION_COUNTS = [50, 100, 150, 200];

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function GrandTest() {
  const navigate = useNavigate();
  const { saveAttempt } = useQuizScore();

  const [selectedSubjects, setSelectedSubjects] = useState(
    new Set(QUIZ_SUBJECTS.filter((s) => getQuestions(s.slug).length > 0).map((s) => s.slug))
  );
  const [qCount, setQCount] = useState(50);
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timerRunning, setTimerRunning] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [startTime, setStartTime] = useState(null);
  const [results, setResults] = useState(null);

  const totalSeconds = questions.length * 90; // 90s per question total pool

  function toggleSubject(slug) {
    setSelectedSubjects((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  }

  function buildQuestions() {
    const pool = [];
    for (const slug of selectedSubjects) {
      const qs = getQuestions(slug);
      pool.push(...qs);
    }
    return shuffleArray(pool).slice(0, qCount);
  }

  function startTest() {
    const qs = buildQuestions();
    if (qs.length === 0) return;
    setQuestions(qs);
    setCurrentIdx(0);
    setAnswers({});
    setStartTime(Date.now());
    setTimerRunning(true);
    setStarted(true);
    setSubmitted(false);
  }

  const handleTimeUp = useCallback(() => {
    setTimerRunning(false);
    finalize({});
  }, []);

  function handleSelect(qId, idx) {
    setAnswers((prev) => ({ ...prev, [qId]: idx }));
  }

  async function finalize(extraAnswers) {
    const finalAnswers = { ...answers, ...extraAnswers };
    const timeSpent = startTime ? Math.round((Date.now() - startTime) / 1000) : null;
    const score = questions.filter((q) => finalAnswers[q.id] === q.answer).length;
    const total = questions.length;

    try {
      await saveAttempt({
        subject: "grand-test",
        topic: "all",
        mode: "grand",
        score,
        total,
        pct: Math.round((score / total) * 100),
        timeSpent,
        answers: questions.map((q) => ({
          qId: q.id,
          chosen: finalAnswers[q.id] ?? null,
          correct: q.answer,
        })),
      });
    } catch { /* guest mode */ }

    setResults({ score, total, timeSpent, finalAnswers });
    setSubmitted(true);
    setTimerRunning(false);
  }

  // Results view
  if (submitted && results) {
    const { score, total, timeSpent, finalAnswers } = results;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="grand-results">
        <h1>Grand Test Results</h1>
        <div className="gt-score-banner" style={{ "--pct-color": pct >= 60 ? "#10b981" : pct >= 40 ? "#f59e0b" : "#ef4444" }}>
          <span className="gt-pct">{pct}%</span>
          <span className="gt-fraction">{score} / {total} correct</span>
          {timeSpent && <span className="gt-time">Time: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s</span>}
        </div>
        <div className="gt-actions">
          <button onClick={() => { setStarted(false); setSubmitted(false); }} className="btn-retry">
            🔁 New Test
          </button>
          <button onClick={() => navigate("/quiz")} className="btn-hub">
            📊 Quiz Hub
          </button>
          <button onClick={() => navigate("/analytics")} className="btn-analytics">
            📈 Analytics
          </button>
        </div>
        <div className="gt-review">
          <h3>Review</h3>
          {questions.map((q, i) => {
            const chosen = finalAnswers[q.id] ?? null;
            const ok = chosen === q.answer;
            return (
              <div key={q.id} className={`review-item ${ok ? "rc" : "rw"}`}>
                <div className="ri-header">
                  <span className="ri-num">Q{i + 1}</span>
                  <span className={`ri-badge ${ok ? "correct" : "wrong"}`}>{ok ? "✓" : "✗"}</span>
                  {q.year && <span className="ri-year">{q.year}</span>}
                </div>
                <p className="ri-q">{q.q}</p>
                {q.explanation && <div className="ri-explain"><strong>💡</strong> {q.explanation}</div>}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active test
  if (started && questions.length > 0) {
    const q = questions[currentIdx];
    return (
      <div className="grand-test-active">
        <div className="gt-header">
          <span className="gt-label">Grand Test</span>
          <TimerBar durationSeconds={totalSeconds} running={timerRunning} onTimeUp={handleTimeUp} />
          <button className="gt-submit-btn" onClick={() => finalize({})}>Submit Test</button>
        </div>
        <div className="tq-progress-bar">
          <div className="tq-progress-fill" style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }} />
        </div>
        <QuizCard
          question={q}
          selectedIndex={answers[q.id] ?? null}
          showResult={false}
          onSelect={(idx) => handleSelect(q.id, idx)}
          questionNumber={currentIdx + 1}
          totalQuestions={questions.length}
        />
        <div className="tq-nav">
          <button className="tq-nav-btn" onClick={() => setCurrentIdx((i) => Math.max(0, i - 1))} disabled={currentIdx === 0}>← Prev</button>
          <button className="tq-nav-btn primary" onClick={() => setCurrentIdx((i) => Math.min(questions.length - 1, i + 1))} disabled={currentIdx === questions.length - 1}>Next →</button>
        </div>
        <div className="tq-dots">
          {questions.map((q2, i) => (
            <button key={q2.id} className={`tq-dot ${i === currentIdx ? "current" : ""} ${answers[q2.id] !== undefined ? "answered" : ""}`} onClick={() => setCurrentIdx(i)} />
          ))}
        </div>
      </div>
    );
  }

  // Setup screen
  const availableSubjects = QUIZ_SUBJECTS.filter((s) => getQuestions(s.slug).length > 0);
  const totalAvailable = availableSubjects.reduce(
    (a, s) => selectedSubjects.has(s.slug) ? a + getQuestions(s.slug).length : a, 0
  );

  return (
    <div className="grand-test-setup">
      <div className="gt-hero">
        <h1>🎯 FMGE Grand Test</h1>
        <p>Simulate the real FMGE exam. Mixed subjects, timed, randomized questions.</p>
      </div>

      <div className="gt-config">
        {/* Question count */}
        <div className="gt-section">
          <h3>Number of Questions</h3>
          <div className="qcount-row">
            {QUESTION_COUNTS.map((n) => (
              <button
                key={n}
                className={`qcount-btn ${qCount === n ? "active" : ""} ${n > totalAvailable ? "disabled" : ""}`}
                onClick={() => n <= totalAvailable && setQCount(n)}
              >
                {n}
              </button>
            ))}
            <span className="qcount-info">{totalAvailable} available</span>
          </div>
        </div>

        {/* Subject selector */}
        <div className="gt-section">
          <h3>Select Subjects</h3>
          <div className="gt-subject-grid">
            {availableSubjects.map((s) => (
              <button
                key={s.slug}
                className={`gt-subj-btn ${selectedSubjects.has(s.slug) ? "selected" : ""}`}
                onClick={() => toggleSubject(s.slug)}
                style={{ "--subj-color": s.color }}
              >
                <span>{s.icon}</span>
                <span>{s.name}</span>
                <span className="gt-subj-count">{getQuestions(s.slug).length}Q</span>
              </button>
            ))}
          </div>
        </div>

        <button
          className="gt-start-btn"
          onClick={startTest}
          disabled={selectedSubjects.size === 0 || totalAvailable < qCount}
        >
          Start Grand Test ({qCount} Questions)
        </button>
      </div>
    </div>
  );
}
