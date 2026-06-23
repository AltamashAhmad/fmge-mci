import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { QUIZ_SUBJECTS } from "../data/quizSubjects";
import { getQuestions } from "../data/questions/index";
import { useQuizScore } from "../hooks/useQuizScore";
import CompletionRing from "../components/CompletionRing";

export default function QuizHub() {
  const { loadSummary } = useQuizScore();
  const [summaries, setSummaries] = useState({});

  useEffect(() => {
    async function fetchSummaries() {
      const result = {};
      for (const subj of QUIZ_SUBJECTS) {
        try {
          const s = await loadSummary(subj.slug);
          result[subj.slug] = s;
        } catch {
          result[subj.slug] = null;
        }
      }
      setSummaries(result);
    }
    fetchSummaries();
  }, []);

  // Total stats
  const totalTopics = QUIZ_SUBJECTS.reduce((a, s) => a + s.topics.length, 0);
  const totalQuestions = QUIZ_SUBJECTS.reduce(
    (a, s) => a + getQuestions(s.slug).length,
    0
  );
  const totalPYQs = QUIZ_SUBJECTS.reduce(
    (a, s) => a + s.topics.reduce((b, t) => b + (t.pyqCount || 0), 0),
    0
  );

  function getCompletion(slug) {
    const subj = QUIZ_SUBJECTS.find((s) => s.slug === slug);
    if (!subj) return 0;
    const summary = summaries[slug];
    if (!summary?.bestByTopic) return 0;
    const attempted = Object.keys(summary.bestByTopic).length;
    return Math.round((attempted / subj.topics.length) * 100);
  }

  function getBestAccuracy(slug) {
    const summary = summaries[slug];
    if (!summary?.accuracy) return null;
    return Math.round(summary.accuracy);
  }

  return (
    <div className="quiz-hub">
      {/* Hero */}
      <div className="hub-hero">
        <h1>MCQ Practice</h1>
        <p className="hub-tagline">
          FMGE-focused questions. PYQ-tagged. Explained. All 23 subjects.
        </p>
        <div className="hub-stats-row">
          <div className="hub-stat">
            <span className="hub-stat-val">{QUIZ_SUBJECTS.length}</span>
            <span className="hub-stat-label">Subjects</span>
          </div>
          <div className="hub-stat">
            <span className="hub-stat-val">{totalTopics}</span>
            <span className="hub-stat-label">Topics</span>
          </div>
          <div className="hub-stat">
            <span className="hub-stat-val">
              {totalQuestions > 0 ? totalQuestions.toLocaleString() : "7,500+"}
            </span>
            <span className="hub-stat-label">Questions</span>
          </div>
          <div className="hub-stat">
            <span className="hub-stat-val">{totalPYQs}</span>
            <span className="hub-stat-label">PYQ Tags</span>
          </div>
        </div>
        <Link to="/grand-test" className="btn-grand-test">
          🎯 Start Grand Test (FMGE Simulation)
        </Link>
      </div>

      {/* Subject grid */}
      <div className="hub-grid">
        {QUIZ_SUBJECTS.map((subj) => {
          const pct = getCompletion(subj.slug);
          const acc = getBestAccuracy(subj.slug);
          const qCount = getQuestions(subj.slug).length;
          const hasContent = qCount > 0;

          return (
            <Link
              key={subj.slug}
              to={`/quiz/${subj.slug}`}
              className={`hub-card ${hasContent ? "" : "hub-card-empty"}`}
              style={{ "--subj-color": subj.color }}
            >
              <div className="hub-card-top">
                <span className="hub-card-icon">{subj.icon}</span>
                <CompletionRing pct={pct} size={48} color={subj.color} />
              </div>
              <div className="hub-card-info">
                <h3>{subj.name}</h3>
                <p className="hub-card-meta">
                  {subj.topics.length} topics
                  {hasContent ? ` · ${qCount} Qs` : " · Coming soon"}
                </p>
                {acc !== null && (
                  <p className="hub-card-acc">Best accuracy: {acc}%</p>
                )}
                {!hasContent && (
                  <span className="hub-coming-soon">⏳ Content loading</span>
                )}
              </div>
              <div
                className="hub-card-bar"
                style={{ background: subj.color, opacity: 0.15 + (subj.weightage / 33) * 0.3 }}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
