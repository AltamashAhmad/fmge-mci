import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { useBookmarks } from "../hooks/useBookmarks";
import { ALL_QUESTIONS } from "../data/questions/index";
import { getSubjectBySlug, getTopicBySlug } from "../data/quizSubjects";
import QuizCard from "../components/QuizCard";

export default function Bookmarks() {
  const { bookmarks, toggleBookmark } = useBookmarks();
  const [revealed, setRevealed] = useState({});

  // Flatten all questions across all subjects and filter by bookmark IDs
  const bookmarkedQuestions = useMemo(() => {
    const allQs = Object.values(ALL_QUESTIONS).flat();
    return allQs.filter((q) => bookmarks.has(q.id));
  }, [bookmarks]);

  function handleSelect(qId, idx) {
    // We just reveal the answer when an option is clicked, no strict scoring needed here
    setRevealed((prev) => ({ ...prev, [qId]: true }));
  }

  function handleReveal(qId) {
    setRevealed((prev) => ({ ...prev, [qId]: true }));
  }

  if (bookmarkedQuestions.length === 0) {
    return (
      <div className="analytics-empty">
        <span className="empty-icon">🔖</span>
        <h2>No Bookmarks Yet</h2>
        <p>When you bookmark questions during quizzes, they will appear here for review.</p>
        <Link to="/quiz" className="btn-start-quiz">Go to Quiz Hub</Link>
      </div>
    );
  }

  // Group questions by subject for easier review
  const grouped = bookmarkedQuestions.reduce((acc, q) => {
    let subjectSlug = "unknown";
    for (const [slug, qs] of Object.entries(ALL_QUESTIONS)) {
      if (qs.some((x) => x.id === q.id)) {
        subjectSlug = slug;
        break;
      }
    }
    
    if (!acc[subjectSlug]) acc[subjectSlug] = [];
    acc[subjectSlug].push(q);
    return acc;
  }, {});

  return (
    <div className="bookmarks-page">
      <div className="page-header" style={{ marginBottom: "2rem", textAlign: "left", alignItems: "flex-start", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔖 Saved Bookmarks</h1>
        <p className="muted">Review and master the {bookmarkedQuestions.length} questions you saved.</p>
      </div>

      <div className="bookmarks-list">
        {Object.entries(grouped).map(([subjectSlug, qs]) => {
          const subj = getSubjectBySlug(subjectSlug);
          return (
            <div key={subjectSlug} className="bookmark-subject-group" style={{ marginBottom: "3rem" }}>
              <h2 style={{ display: "flex", alignItems: "center", gap: "0.5rem", borderBottom: "2px solid #e2e8f0", paddingBottom: "0.5rem", marginBottom: "1.5rem" }}>
                <span>{subj?.icon || "📚"}</span>
                {subj?.name || "Other"}
                <span style={{ fontSize: "0.9rem", color: "#64748b", marginLeft: "auto", fontWeight: "normal" }}>
                  {qs.length} Qs
                </span>
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                {qs.map((q) => {
                  const isRevealed = !!revealed[q.id];
                  const topicData = getTopicBySlug(subjectSlug, q.topic);
                  return (
                    <div key={q.id} className="bookmark-card-wrapper" style={{ position: "relative" }}>
                      <div style={{ position: "absolute", top: "-14px", left: "15px", background: "#f1f5f9", padding: "4px 12px", borderRadius: "12px", fontSize: "0.8rem", color: "#475569", zIndex: 1, border: "1px solid #cbd5e1", fontWeight: "bold" }}>
                        {topicData?.name || q.topic}
                      </div>
                      <QuizCard
                        question={q}
                        selectedIndex={isRevealed ? q.answer : null} // pre-select correct if revealed
                        showResult={isRevealed}
                        onSelect={(idx) => handleSelect(q.id, idx)}
                        questionNumber={null}
                        totalQuestions={null}
                        bookmarked={bookmarks.has(q.id)}
                        onBookmark={() => toggleBookmark(q.id, { subjectSlug, topicSlug: q.topic })}
                      />
                      {!isRevealed && (
                        <button 
                          onClick={() => handleReveal(q.id)}
                          style={{
                            marginTop: "0.75rem",
                            padding: "0.5rem 1rem",
                            background: "#e2e8f0",
                            border: "none",
                            borderRadius: "6px",
                            cursor: "pointer",
                            fontSize: "0.9rem",
                            fontWeight: "500",
                            transition: "background 0.2s"
                          }}
                          onMouseEnter={(e) => e.target.style.background = "#cbd5e1"}
                          onMouseLeave={(e) => e.target.style.background = "#e2e8f0"}
                        >
                          👁️ Reveal Answer
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
