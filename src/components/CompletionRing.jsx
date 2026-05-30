// SVG circle progress ring showing completion percentage.
// Used on subject cards in QuizHub.

export default function CompletionRing({
  pct = 0,
  size = 56,
  strokeWidth = 5,
  color,
  label,
}) {
  const r = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * r;
  const offset = circumference - (pct / 100) * circumference;

  const ringColor = color || (pct === 0 ? "#2a3360" : pct < 50 ? "#f59e0b" : pct < 100 ? "#6366f1" : "#10b981");

  return (
    <div className="completion-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size}>
        {/* Background track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="#2a3360"
          strokeWidth={strokeWidth}
        />
        {/* Progress arc */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={ringColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%", transition: "stroke-dashoffset 0.5s ease" }}
        />
      </svg>
      <span className="ring-label">{label ?? `${Math.round(pct)}%`}</span>
    </div>
  );
}
