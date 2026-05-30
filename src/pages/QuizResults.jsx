import { useLocation, useParams, Link, useNavigate } from "react-router-dom";
import { getSubjectBySlug, getTopicBySlug, getNextTopic } from "../data/quizSubjects";

export default function QuizResults() {
  const { subject, topic } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();

  const subj = getSubjectBySlug(subject);
  const topicData = getTopicBySlug(subject, topic);
  const nextTopic = getNextTopic(subject, topic);

  if (!state) {
    return (
      <div className="page-error">
        <p>No quiz data found. <Link to={`/quiz/${subject}/${topic}`}>Try quiz</Link></p>
      </div>
    );
  }

  const { questions, answers, score, total, mode, timeSpent } = state;
  const pct = Math.round((score / total) * 100);
  const grade = pct >= 80 ? "excellent" : pct >= 60 ? "good" : pct >= 40 ? "fair" : "poor";

  const gradeInfo = {
    excellent: { label: "Excellent! 🎯", color: "#10b981" },
    good: { label: "Good job! 👍", color: "#6366f1" },
    fair: { label: "Keep practicing 📚", color: "#f59e0b" },
    poor: { label: "Needs work 💪", color: "#ef4444" },
  };

  const wrongAnswers = questions.filter(
    (q) => answers[q.id] !== undefined && answers[q.id] !== q.answer
  );
  const unanswered = questions.filter((q) => answers[q.id] === undefined);

  function retryWrong() {
    // navigate back to quiz with only wrong questions
    navigate(`/quiz/${subject}/${topic}`, {
      state: { retryQuestions: wrongAnswers.map((q) => q.id) },
    });
  }

  return (
    <div className="results-page">
      {/* Score circle */}
      <div className="results-hero">
        <div className="score-circle" style={{ "--score-color": gradeInfo[grade].color }}>
          <svg viewBox="0 0 120 120" width="160" height="160">
            <circle cx="60" cy="60" r="52" fill="none" stroke="#1e2a4a" strokeWidth="10" />
            <circle
              cx="60" cy="60" r="52" fill="none"
              stroke={gradeInfo[grade].color} strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray={`${2 * Math.PI * 52}`}
              strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
              style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", transition: "stroke-dashoffset 0.8s ease" }}
            />
          </svg>
          <div className="score-circle-text">
            <span className="score-pct">{pct}%</span>
            <span className="score-fraction">{score}/{total}</span>
          </div>
        </div>

        <div className="results-summary">
          <h2 style={{ color: gradeInfo[grade].color }}>{gradeInfo[grade].label}</h2>
          <p className="results-subject">{subj?.name} — {topicData?.name}</p>
          {timeSpent && (
            <p className="results-time">⏱️ Time: {Math.floor(timeSpent / 60)}m {timeSpent % 60}s</p>
          )}
          <div className="results-breakdown">
            <span className="rb correct">✓ {score} Correct</span>
            <span className="rb wrong">✗ {wrongAnswers.length} Wrong</span>
            {unanswered.length > 0 && (
              <span className="rb skipped">— {unanswered.length} Skipped</span>
            )}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="results-actions">
        {wrongAnswers.length > 0 && (
          <button className="btn-retry-wrong" onClick={retryWrong}>
            🔁 Retry Wrong ({wrongAnswers.length})
          </button>
        )}
        {nextTopic && (
          <Link to={`/quiz/${subject}/${nextTopic.slug}`} className="btn-next-topic">
            Next: {nextTopic.name} →
          </Link>
        )}
        <Link to={`/quiz/${subject}`} className="btn-back-subject">
          ← Back to {subj?.name}
        </Link>
        <Link to="/quiz" className="btn-hub">Quiz Hub</Link>
      </div>

      {/* Per-question review */}
      <div className="results-review">
        <h3>Question Review</h3>
        {questions.map((q, i) => {
          const chosen = answers[q.id] ?? null;
          const isCorrect = chosen === q.answer;
          const isSkipped = chosen === null;

          return (
            <div key={q.id} className={`review-item ${isCorrect ? "rc" : isSkipped ? "rs" : "rw"}`}>
              <div className="ri-header">
                <span className="ri-num">Q{i + 1}</span>
                <span className={`ri-badge ${isCorrect ? "correct" : isSkipped ? "skipped" : "wrong"}`}>
                  {isCorrect ? "✓ Correct" : isSkipped ? "— Skipped" : "✗ Wrong"}
                </span>
                {q.year && <span className="ri-year">{q.year}</span>}
              </div>
              <p className="ri-q">{q.q}</p>
              <div className="ri-options">
                {q.options.map((opt, idx) => (
                  <div
                    key={idx}
                    className={`ri-opt ${idx === q.answer ? "ri-correct" : ""} ${chosen === idx && idx !== q.answer ? "ri-wrong" : ""}`}
                  >
                    <span className="ri-letter">{String.fromCharCode(65 + idx)}</span>
                    {opt.replace(/^[A-D]\.\s*/, "")}
                  </div>
                ))}
              </div>
              {q.explanation && (
                <div className="ri-explain">
                  <strong>💡</strong> {q.explanation}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
