import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem 1rem" }}>
      <h1 style={{ fontSize: "3rem" }}>404</h1>
      <p className="muted">That page doesn't exist.</p>
      <Link to="/" className="filter-btn active" style={{ display: "inline-block", marginTop: "1rem" }}>← Back to Home</Link>
    </div>
  );
}
