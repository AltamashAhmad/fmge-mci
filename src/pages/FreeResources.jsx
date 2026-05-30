import PageHeader from "../components/PageHeader";
import { FREE_RESOURCES } from "../data/resources";

export default function FreeResources() {
  return (
    <>
      <PageHeader
        title="🆓 Free Resources (Zero Cost)"
        subtitle="If budget is tight, you can build a full FMGE prep using only these. Many toppers have passed with $0 spent on coaching."
      />

      {FREE_RESOURCES.map((cat) => (
        <div key={cat.category} className="free-cat">
          <h3>{cat.category}</h3>
          <div className="free-grid">
            {cat.items.map((i) => (
              <a
                key={i.name}
                href={i.url || undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`free-item ${!i.url ? "free-item-static" : ""}`}
              >
                <div className="free-name">{i.name} {i.url && <span className="ext">↗</span>}</div>
                <div className="free-note">{i.note}</div>
              </a>
            ))}
          </div>
        </div>
      ))}

      <div className="callout">
        💡 <strong>Smart play:</strong> Start with free resources for Month 1. Once you've built the habit
        and know your weak subjects, invest in Marrow (or just its Q-bank) for the final 9 months.
      </div>
    </>
  );
}
