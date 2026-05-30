import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getSubjectBySlug } from "../data/quizSubjects";
import { getTopicQuestions } from "../data/questions/index";
import { useQuizScore } from "../hooks/useQuizScore";
import CompletionRing from "../components/CompletionRing";

const FILTERS = ["All", "PYQ Only", "Weak Topics"];

export default function SubjectQuiz() {
  const { subject } = useParams();
  const subj = getSubjectBySlug(subject);
  const { loadSummary } = useQuizScore();
  const [summary, setSummary] = useState(null);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    loadSummary(subject).then(setSummary).catch(() => setSummary(null));
  }, [subject]);

  if (!subj) {
    return (
      <div className="page-error">
        <p>Subject not found. <Link to="/quiz">Back to Quiz Hub</Link></p>
      </div>
    );
  }

  function getBestForTopic(topicSlug) {
    return summary?.bestByTopic?.[topicSlug] || null;
  }

  function getFilteredTopics() {
    if (filter === "PYQ Only") {
      return subj.topics.filter((t) => t.pyqCount > 0);
    }
    if (filter === "Weak Topics") {
      return subj.topics.filter((t) => {
        const best = getBestForTopic(t.slug);
        return !best || best.best < 60;
      });
    }
    return subj.topics;
  }

  const filtered = getFilteredTopics();

  return (
    <div className="subject-quiz">
      {/* Header */}
      <div className="sq-header" style={{ "--subj-color": subj.color }}>
        <Link to="/quiz" className="sq-back">← Back to Quiz Hub</Link>
        <div className="sq-title-row">
          <span className="sq-icon">{subj.icon}</span>
          <div>
            <h1>{subj.name}</h1>
            <p className="sq-meta">
              {subj.topics.length} topics · Weightage: {subj.weightage}%
              {subj.phase && ` · Phase ${subj.phase}`}
            </p>
          </div>
        </div>
        <div className="sq-filters">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-chip ${filter === f ? "active" : ""}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Topic grid */}
      {filtered.length === 0 ? (
        <p className="sq-empty">No topics match this filter.</p>
      ) : (
        <div className="topic-grid">
          {filtered.map((topic) => {
            const qs = getTopicQuestions(subject, topic.slug);
            const best = getBestForTopic(topic.slug);
            const pct = best ? best.best : 0;
            const attempted = best ? best.count : 0;
            const hasContent = qs.length > 0;

            return (
              <Link
                key={topic.slug}
                to={`/quiz/${subject}/${topic.slug}`}
                className={`topic-card ${!hasContent ? "topic-card-empty" : ""}`}
              >
                <div className="tc-top">
                  <CompletionRing
                    pct={pct}
                    size={44}
                    color={subj.color}
                    label={attempted > 0 ? `${pct}%` : "—"}
                  />
                  <div className="tc-info">
                    <h3>{topic.name}</h3>
                    <p className="tc-meta">
                      {hasContent ? `${qs.length} Qs` : "Coming soon"}
                      {topic.pyqCount > 0 && ` · ${topic.pyqCount} PYQ`}
                    </p>
                  </div>
                </div>
                <div className="tc-bottom">
                  <div className="tc-difficulty">
                    {"★".repeat(topic.difficulty)}{"☆".repeat(5 - topic.difficulty)}
                  </div>
                  {attempted > 0 && (
                    <span className="tc-attempts">{attempted} attempt{attempted !== 1 ? "s" : ""}</span>
                  )}
                  {!hasContent && (
                    <span className="tc-soon">⏳</span>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
