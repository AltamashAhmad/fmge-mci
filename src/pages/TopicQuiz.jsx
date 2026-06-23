import { useState, useCallback, useMemo } from "react";
import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { getSubjectBySlug, getTopicBySlug } from "../data/quizSubjects";
import { getTopicQuestions, getMockQuestions } from "../data/questions/index";
import { useQuizScore } from "../hooks/useQuizScore";
import { useBookmarks } from "../hooks/useBookmarks";
import QuizCard from "../components/QuizCard";
import TimerBar from "../components/TimerBar";

const MODES = ["practice", "mock"];

export default function TopicQuiz() {
  const { subject, topic } = useParams();
  const navigate = useNavigate();
  const { state } = useLocation();

  const subj = getSubjectBySlug(subject);
  const topicData = getTopicBySlug(subject, topic);

  const [mode, setMode] = useState("practice");
  const [started, setStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({}); // qId → selectedIndex
  const [revealed, setRevealed] = useState({}); // qId → true (practice only)
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [startTime, setStartTime] = useState(null);

  const { saveAttempt } = useQuizScore();
  const { bookmarks, toggleBookmark } = useBookmarks();

  const allTopicQs = useMemo(() => {
    const qs = getTopicQuestions(subject, topic);
    if (state?.retryQuestions) {
      return qs.filter(q => state.retryQuestions.includes(q.id));
    }
    return qs;
  }, [subject, topic, state?.retryQuestions]);

  function startQuiz(selectedMode) {
    setMode(selectedMode);
    const qs = selectedMode === "mock"
      ? getMockQuestions(subject, topic, 10)
      : allTopicQs;
    setQuestions(qs);
    setCurrentIdx(0);
    setAnswers({});
    setRevealed({});
    setTimerRunning(selectedMode === "mock");
    setTimeUp(false);
    setStartTime(Date.now());
    setStarted(true);
  }

  const handleTimeUp = useCallback(() => {
    setTimerRunning(false);
    setTimeUp(true);
  }, []);

  function handleSelect(qId, idx) {
    setAnswers((prev) => ({ ...prev, [qId]: idx }));
    if (mode === "practice") {
      setRevealed((prev) => ({ ...prev, [qId]: true }));
    }
  }

  function nextQuestion() {
    if (currentIdx < questions.length - 1) setCurrentIdx((i) => i + 1);
  }

  function prevQuestion() {
    if (currentIdx > 0) setCurrentIdx((i) => i - 1);
  }

  async function submitQuiz() {
    const timeSpent = startTime ? Math.round((Date.now() - startTime) / 1000) : null;
    const answerList = questions.map((q) => ({
      qId: q.id,
      chosen: answers[q.id] ?? null,
      correct: q.answer,
    }));
    const score = answerList.filter((a) => a.chosen === a.correct).length;
    const total = questions.length;

    try {
      await saveAttempt({
        subject,
        topic,
        mode,
        score,
        total,
        pct: Math.round((score / total) * 100),
        timeSpent,
        answers: answerList,
      });
    } catch {
      // non-critical — guest mode
    }

    navigate(`/quiz/${subject}/${topic}/results`, {
      state: { questions, answers, score, total, mode, timeSpent },
    });
  }

  if (!subj || !topicData) {
    return (
      <div className="page-error">
        <p>Topic not found. <Link to={`/quiz/${subject}`}>Back</Link></p>
      </div>
    );
  }

  if (allTopicQs.length === 0) {
    return (
      <div className="tq-empty-page">
        <span className="tq-empty-icon">⏳</span>
        <h2>{topicData.name}</h2>
        <p>Questions for this topic are coming soon. Check back later!</p>
        <Link to={`/quiz/${subject}`} className="btn-back">← Back to {subj.name}</Link>
      </div>
    );
  }

  // Mode selection screen
  if (!started) {
    return (
      <div className="tq-mode-select">
        <Link to={`/quiz/${subject}`} className="sq-back">← {subj.name}</Link>
        <div className="tq-mode-hero">
          <span className="tq-icon">{subj.icon}</span>
          <h1>{topicData.name}</h1>
          <p className="tq-meta">
            {allTopicQs.length} questions · {topicData.pyqCount} PYQ tagged
          </p>
        </div>
        <div className="mode-cards">
          <button className="mode-card" onClick={() => startQuiz("practice")}>
            <span className="mode-icon">📖</span>
            <h3>Practice Mode</h3>
            <p>All {allTopicQs.length} questions. Instant feedback with explanation after each answer.</p>
            <span className="mode-badge">No time limit</span>
          </button>
          <button className="mode-card mode-card-mock" onClick={() => startQuiz("mock")}>
            <span className="mode-icon">⏱️</span>
            <h3>Mock Test</h3>
            <p>10 random questions. 90 seconds each. Submit at the end for score.</p>
            <span className="mode-badge">90s / question</span>
          </button>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIdx];
  const isLastQ = currentIdx === questions.length - 1;
  const allAnswered = questions.every((q) => answers[q.id] !== undefined);

  return (
    <div className="topic-quiz">
      {/* Progress */}
      <div className="tq-progress-bar">
        <div
          className="tq-progress-fill"
          style={{ width: `${((currentIdx + 1) / questions.length) * 100}%` }}
        />
      </div>

      {/* Header */}
      <div className="tq-header">
        <div className="tq-header-left">
          <Link to={`/quiz/${subject}`} className="tq-back">← {subj.name}</Link>
          <span className="tq-topic-name">{topicData.name}</span>
          <span className={`tq-mode-badge ${mode}`}>
            {mode === "mock" ? "⏱️ Mock" : "📖 Practice"}
          </span>
        </div>
        {mode === "mock" && (
          <TimerBar
            durationSeconds={90}
            running={timerRunning && !timeUp}
            onTimeUp={handleTimeUp}
            key={currentIdx} // reset timer per question
          />
        )}
      </div>

      {/* Question card */}
      <QuizCard
        question={currentQ}
        selectedIndex={answers[currentQ.id] ?? null}
        showResult={mode === "practice" ? !!revealed[currentQ.id] : false}
        onSelect={(idx) => handleSelect(currentQ.id, idx)}
        questionNumber={currentIdx + 1}
        totalQuestions={questions.length}
        bookmarked={bookmarks.has(currentQ.id)}
        onBookmark={() => toggleBookmark(currentQ.id, { subjectSlug: subject, topicSlug: topic })}
      />

      {/* Navigation */}
      <div className="tq-nav">
        <button className="tq-nav-btn" onClick={prevQuestion} disabled={currentIdx === 0}>
          ← Prev
        </button>

        {!isLastQ && (
          <button
            className="tq-nav-btn primary"
            onClick={nextQuestion}
            disabled={mode === "practice" ? !revealed[currentQ.id] : false}
          >
            Next →
          </button>
        )}

        {(mode === "mock" || isLastQ) && (
          <button
            className="tq-submit-btn"
            onClick={submitQuiz}
            disabled={mode === "mock" ? false : !allAnswered}
          >
            {mode === "mock" || isLastQ ? "Submit Quiz" : "→"}
          </button>
        )}
      </div>

      {/* Question navigator dots */}
      <div className="tq-dots">
        {questions.map((q, i) => (
          <button
            key={q.id}
            className={`tq-dot ${i === currentIdx ? "current" : ""} ${answers[q.id] !== undefined ? "answered" : ""}`}
            onClick={() => setCurrentIdx(i)}
          />
        ))}
      </div>
    </div>
  );
}
