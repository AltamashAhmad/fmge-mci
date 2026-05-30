import { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import { Rating, PhaseTag } from "../components/Atoms";
import { SUBJECTS } from "../data/subjects";

const PHASES = ["all", "Pre-clinical", "Para-clinical", "Clinical (Major)", "Clinical (Short)"];

export default function Analysis() {
  const [filter, setFilter] = useState("all");
  const [sortKey, setSortKey] = useState("weightage");
  const [asc, setAsc] = useState(false);

  const rows = useMemo(() => {
    let r = [...SUBJECTS];
    if (filter !== "all") r = r.filter((s) => s.phase === filter);
    r.sort((a, b) => {
      const v1 = a[sortKey], v2 = b[sortKey];
      if (typeof v1 === "string") return asc ? v1.localeCompare(v2) : v2.localeCompare(v1);
      return asc ? v1 - v2 : v2 - v1;
    });
    return r;
  }, [filter, sortKey, asc]);

  const sorted = useMemo(() => [...SUBJECTS].sort((a, b) => b.weightage - a.weightage), []);
  const max = sorted[0].weightage;

  function handleSort(key) {
    if (sortKey === key) setAsc(!asc);
    else { setSortKey(key); setAsc(false); }
  }

  return (
    <>
      <PageHeader title="🔬 Subject-wise Analysis" subtitle="Weightage averages from past FMGE papers (2019–2025). Difficulty / Volume / Scoring rated 1–5." />

      <div className="filters">
        {PHASES.map((p) => (
          <button key={p} className={`filter-btn ${filter === p ? "active" : ""}`} onClick={() => setFilter(p)}>
            {p === "all" ? "All" : p}
          </button>
        ))}
      </div>

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th onClick={() => handleSort("name")}>Subject</th>
              <th onClick={() => handleSort("phase")}>Phase</th>
              <th onClick={() => handleSort("weightage")}>Qs/300 ⬇</th>
              <th onClick={() => handleSort("difficulty")}>Difficulty</th>
              <th onClick={() => handleSort("volume")}>Volume</th>
              <th onClick={() => handleSort("scoring")}>Scoring</th>
              <th onClick={() => handleSort("hoursFirstRead")}>Hours (1st)</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((s) => (
              <tr key={s.name}>
                <td><strong>{s.name}</strong></td>
                <td><PhaseTag phase={s.phase} /></td>
                <td><strong>{s.weightage}</strong></td>
                <td><Rating value={s.difficulty} kind="diff" /></td>
                <td><Rating value={s.volume} kind="vol" /></td>
                <td><Rating value={s.scoring} kind="score" /></td>
                <td>{s.hoursFirstRead} hrs</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={{ marginTop: "3rem" }}>📊 Weightage Distribution</h2>
      <div className="chart">
        {sorted.map((s) => (
          <div key={s.name} className="bar-row">
            <div className="bar-name">{s.name}</div>
            <div className="bar-track"><div className="bar-fill" style={{ width: `${(s.weightage / max) * 100}%` }} /></div>
            <div className="bar-val">{s.weightage}</div>
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "3rem" }}>🎴 Deep-dive Cards</h2>
      <div className="grid grid-2">
        {sorted.map((s) => (
          <div key={s.name} className="subj-card">
            <div className="subj-card-head">
              <div>
                <h4>{s.name}</h4>
                <PhaseTag phase={s.phase} />
              </div>
              <div className="qs-badge">{s.weightage} Qs</div>
            </div>
            <div className="why">💭 {s.whyHard}</div>
            <div className="hy-title">High-Yield Topics</div>
            <ul>{s.highYield.map((t) => <li key={t}>{t}</li>)}</ul>
            <div className="resource">📚 {s.resource}</div>
            <div className="resource muted-resource">⏱️ {s.hoursFirstRead}h first read + {s.hoursRevision}h revision</div>
          </div>
        ))}
      </div>
    </>
  );
}
