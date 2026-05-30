import PageHeader from "../components/PageHeader";
import { RESOURCES } from "../data/resources";

export default function Resources() {
  return (
    <>
      <PageHeader title="📚 Paid Resource Comparison" subtitle="Based on FMGE topper surveys (2023–2025) and current FMGE-specific content depth." />

      <div className="grid grid-2">
        {RESOURCES.map((r) => (
          <div key={r.name} className="res-card">
            <h3>{r.name}</h3>
            <div className="best">Best for: {r.bestFor}</div>
            <div className="pros"><strong>✅ Pros:</strong> {r.pros.join(" · ")}</div>
            <div className="cons"><strong>⚠️ Cons:</strong> {r.cons.join(" · ")}</div>
            <div className="verdict">{r.verdict}</div>
          </div>
        ))}
      </div>

      <div className="callout">
        <strong>Recommendation for you:</strong> Get <strong>Marrow FMGE plan</strong> as primary
        (best Q-bank + FMGE filter). Optionally supplement with <strong>PrepLadder V-notes</strong>
        for Surgery/OBGY if you prefer notes-style learning.
      </div>
    </>
  );
}
