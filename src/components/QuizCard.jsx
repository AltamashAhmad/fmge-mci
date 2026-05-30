import WikiImage from "./WikiImage";

// state: "neutral" | "selected" | "correct" | "wrong" | "reveal"
// In Practice mode: state flips to correct/wrong after selection.
// In Mock mode: all show as "selected" until submitted, then reveal.

export default function QuizCard({
  question,
  selectedIndex,
  onSelect,
  showResult = false,
  questionNumber,
  totalQuestions,
  bookmarked = false,
  onBookmark,
}) {
  const { q, options, answer, explanation, year, img, tags } = question;

  function getOptionClass(idx) {
    if (!showResult) {
      return selectedIndex === idx ? "opt selected" : "opt";
    }
    // After reveal
    if (idx === answer) return "opt correct";
    if (selectedIndex === idx && idx !== answer) return "opt wrong";
    return "opt";
  }

  return (
    <div className="quiz-card">
      {/* Header */}
      <div className="qcard-header">
        {questionNumber != null && (
          <span className="qcard-num">Q{questionNumber}{totalQuestions ? ` / ${totalQuestions}` : ""}</span>
        )}
        <div className="qcard-badges">
          {year && <span className="badge-pyq">📋 {year}</span>}
          {tags?.includes("high-yield") && <span className="badge-hy">⭐ High Yield</span>}
        </div>
        {onBookmark && (
          <button
            className={`qcard-bookmark ${bookmarked ? "active" : ""}`}
            onClick={onBookmark}
            aria-label="Bookmark"
          >
            {bookmarked ? "🔖" : "📄"}
          </button>
        )}
      </div>

      {/* Question text */}
      <p className="qcard-question">{q}</p>

      {/* Image (if any) */}
      {img && (
        <div className="qcard-image">
          <WikiImage slug={img} alt={q.slice(0, 60)} />
        </div>
      )}

      {/* Options */}
      <div className="qcard-options">
        {options.map((opt, idx) => (
          <button
            key={idx}
            className={getOptionClass(idx)}
            onClick={() => !showResult && onSelect?.(idx)}
            disabled={showResult}
          >
            <span className="opt-letter">{String.fromCharCode(65 + idx)}</span>
            <span className="opt-text">{opt.replace(/^[A-D]\.\s*/, "")}</span>
            {showResult && idx === answer && (
              <span className="opt-icon">✓</span>
            )}
            {showResult && selectedIndex === idx && idx !== answer && (
              <span className="opt-icon">✗</span>
            )}
          </button>
        ))}
      </div>

      {/* Explanation — shown after reveal */}
      {showResult && explanation && (
        <div className="qcard-explanation">
          <span className="explain-label">💡 Explanation</span>
          <p>{explanation}</p>
        </div>
      )}
    </div>
  );
}
