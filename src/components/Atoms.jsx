export function Rating({ value, kind }) {
  return (
    <span className="rating">
      {[1, 2, 3, 4, 5].map((i) => (
        <span key={i} className={`dot ${kind} ${i <= value ? "on" : ""}`} />
      ))}
    </span>
  );
}

export function PhaseTag({ phase }) {
  const cls =
    phase.startsWith("Pre") ? "phase-pre"
      : phase.startsWith("Para") ? "phase-para"
        : phase.includes("Major") ? "phase-major"
          : "phase-short";
  return <span className={`phase-tag ${cls}`}>{phase}</span>;
}
