import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const NAV_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/quiz", label: "Quiz", icon: "🧠", quiz: true },
  { to: "/tracker", label: "Tracker" },
  { to: "/images", label: "Image Qs" },
  { to: "/analytics", label: "Analytics" },
];

const STUDY_LINKS = [
  { to: "/analysis", label: "Analysis" },
  { to: "/roadmap", label: "Roadmap" },
  { to: "/phase-1", label: "Week-by-Week" },
  { to: "/daily", label: "Daily Cycle" },
  { to: "/smart-study", label: "Smart Study" },
  { to: "/holiday-sprint", label: "🏖️ Holiday Sprint" },
];

const RESOURCE_LINKS = [
  { to: "/resources", label: "Paid Resources" },
  { to: "/free", label: "Free Resources" },
  { to: "/tips", label: "Tips" },
];

const ChevronIcon = () => (
  <svg className="nav-chevron" width="11" height="11" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

function NavDropdown({ label, links, open, onToggle }) {
  const ref = useRef(null);
  const location = useLocation();
  const isActive = links.some((l) => location.pathname === l.to);

  useEffect(() => {
    if (!open) return;
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) onToggle(false);
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open, onToggle]);

  return (
    <div className={`nav-dropdown${open ? " open" : ""}${isActive ? " active" : ""}`} ref={ref}>
      <button className={`nav-item nav-dropdown-trigger${isActive ? " active" : ""}`} onClick={() => onToggle(!open)}>
        {label} <ChevronIcon />
      </button>
      <div className="nav-dropdown-menu">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} className="nav-dropdown-item" onClick={() => onToggle(false)}>
            {l.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function Avatar({ user }) {
  return user.photoURL
    ? <img className="nav-avatar" src={user.photoURL} alt={user.displayName || "avatar"}
        referrerPolicy="no-referrer"
        onError={e => { e.target.style.display = "none"; e.target.nextSibling.style.display = "flex"; }} />
    : null;
}

function Initials({ user, hidden }) {
  return (
    <span className="nav-avatar-initials" style={hidden ? { display: "none" } : {}}>
      {(user.displayName || user.email || "U")[0].toUpperCase()}
    </span>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [studyOpen, setStudyOpen] = useState(false);
  const [resourceOpen, setResourceOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, signOut } = useAuth();

  useEffect(() => {
    setDrawerOpen(false);
    setStudyOpen(false);
    setResourceOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [drawerOpen]);

  async function handleSignOut() {
    await signOut();
    navigate("/");
  }

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav className="nav">
        {/* Logo */}
        <NavLink to="/" className="nav-logo" onClick={closeDrawer}>
          <span className="nav-logo-icon">⚕️</span>
          <span className="nav-logo-text">FMGE<strong>Roadmap</strong></span>
        </NavLink>

        {/* Desktop center nav */}
        <div className="nav-center">
          {NAV_LINKS.map(({ to, label, icon, end, quiz }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) => `nav-item${isActive ? " active" : ""}${quiz ? " nav-item-quiz" : ""}`}>
              {icon && <span>{icon}</span>}{label}
            </NavLink>
          ))}
          <NavDropdown label="Study" links={STUDY_LINKS} open={studyOpen} onToggle={setStudyOpen} />
          <NavDropdown label="Resources" links={RESOURCE_LINKS} open={resourceOpen} onToggle={setResourceOpen} />
        </div>

        {/* Desktop right — auth */}
        <div className="nav-right">
          {user ? (
            <div className="nav-user">
              <Avatar user={user} />
              <Initials user={user} hidden={!!user.photoURL} />
              <span className="nav-username">{user.displayName?.split(" ")[0] || user.email?.split("@")[0] || "You"}</span>
              <button className="nav-signout" onClick={handleSignOut}>Sign out</button>
            </div>
          ) : (
            <NavLink to="/auth" className="nav-signin-btn">Sign in</NavLink>
          )}
        </div>

        {/* Mobile: avatar + hamburger */}
        <div className="nav-mobile-actions">
          {user && (
            <button className="nav-avatar-btn" onClick={() => setDrawerOpen(v => !v)} aria-label="Menu">
              <Avatar user={user} />
              <Initials user={user} hidden={!!user.photoURL} />
            </button>
          )}
          <button
            className={`nav-hamburger${drawerOpen ? " open" : ""}`}
            aria-label="Toggle menu" aria-expanded={drawerOpen}
            onClick={() => setDrawerOpen(v => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      {drawerOpen && <div className="nav-backdrop" onClick={closeDrawer} />}

      {/* Mobile drawer */}
      <div className={`nav-drawer${drawerOpen ? " open" : ""}`}>
        <div className="nav-drawer-section">
          {NAV_LINKS.map(({ to, label, icon, end }) => (
            <NavLink key={to} to={to} end={end}
              className={({ isActive }) => `nav-drawer-item${isActive ? " active" : ""}`}
              onClick={closeDrawer}>
              {icon && <span className="nav-drawer-icon">{icon}</span>}{label}
            </NavLink>
          ))}
        </div>
        <div className="nav-drawer-divider" />
        <div className="nav-drawer-section">
          <p className="nav-drawer-group">Study</p>
          {STUDY_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nav-drawer-item${isActive ? " active" : ""}`}
              onClick={closeDrawer}>{l.label}</NavLink>
          ))}
        </div>
        <div className="nav-drawer-divider" />
        <div className="nav-drawer-section">
          <p className="nav-drawer-group">Resources</p>
          {RESOURCE_LINKS.map((l) => (
            <NavLink key={l.to} to={l.to}
              className={({ isActive }) => `nav-drawer-item${isActive ? " active" : ""}`}
              onClick={closeDrawer}>{l.label}</NavLink>
          ))}
        </div>
        <div className="nav-drawer-divider" />
        <div className="nav-drawer-section nav-drawer-auth">
          {user ? (
            <div className="nav-drawer-user">
              <Avatar user={user} />
              <Initials user={user} hidden={!!user.photoURL} />
              <div className="nav-drawer-user-info">
                <span className="nav-drawer-user-name">{user.displayName || user.email?.split("@")[0] || "You"}</span>
                <span className="nav-drawer-user-email">{user.email}</span>
              </div>
              <button className="nav-signout" onClick={handleSignOut} style={{ marginLeft: "auto" }}>Sign out</button>
            </div>
          ) : (
            <NavLink to="/auth" className="nav-signin-btn" style={{ width: "100%", justifyContent: "center" }} onClick={closeDrawer}>
              Sign in
            </NavLink>
          )}
        </div>
      </div>
    </>
  );
}
