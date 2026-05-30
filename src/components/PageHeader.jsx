export default function PageHeader({ badge, title, subtitle, children }) {
  return (
    <header className="page-header">
      {badge && <span className="badge">{badge}</span>}
      <h1>{title}</h1>
      {subtitle && <p className="subtitle">{subtitle}</p>}
      {children}
    </header>
  );
}
