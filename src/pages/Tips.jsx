import PageHeader from "../components/PageHeader";
import { TIPS } from "../data/smartStudy";

export default function Tips() {
  return (
    <>
      <PageHeader title="💡 10 Non-Negotiable Tips" subtitle="The rules that separate FMGE passers from failures." />
      <div className="grid grid-2">
        {TIPS.map((t, i) => (
          <div key={i} className="tip-card">{t}</div>
        ))}
      </div>
    </>
  );
}
