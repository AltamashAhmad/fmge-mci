import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" style={{ flexShrink: 0 }}>
    <path fill="#4285F4" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.1 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.4 7.3 28.9 5 24 5 12.95 5 4 13.95 4 25s8.95 20 20 20 20-8.95 20-20c0-1.3-.1-2.7-.4-3.9z"/>
    <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.7 16 19 13 24 13c2.8 0 5.3 1 7.2 2.8l5.7-5.7C33.4 7.3 28.9 5 24 5 16.3 5 9.7 9.3 6.3 14.7z"/>
    <path fill="#FBBC05" d="M24 45c4.8 0 9.2-1.8 12.5-4.8l-6.2-5.2C28.5 36.6 26.3 37.5 24 37.5c-5.2 0-9.6-3-11.4-7.5l-6.6 5C9.5 41.2 16.2 45 24 45z"/>
    <path fill="#EA4335" d="M43.6 20.1H42V20H24v8h11.3c-.9 2.5-2.5 4.6-4.7 5.9l6.2 5.2C42.1 35.8 44 30.8 44 25c0-1.3-.1-2.7-.4-3.9z"/>
  </svg>
);

const FEATURES = [
  { icon: "☁️", text: "Scores sync across all devices" },
  { icon: "📊", text: "Track your progress & streaks" },
  { icon: "🔖", text: "Bookmarks saved permanently" },
];

export default function AuthPage() {
  const { signInWithGoogle, signInWithEmail, signUpWithEmail, authError, setAuthError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/quiz";

  const [tab, setTab] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);

  function clearFields() {
    setEmail(""); setPassword(""); setName(""); setAuthError(null); setShowPass(false);
  }

  function switchTab(t) { setTab(t); clearFields(); }

  async function handleGoogle() {
    setLoading(true);
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch { /* error displayed via authError */ } finally { setLoading(false); }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (tab === "login") {
        await signInWithEmail(email, password);
      } else {
        await signUpWithEmail(email, password, name);
      }
      navigate(from, { replace: true });
    } catch { /* error displayed via authError */ } finally { setLoading(false); }
  }

  return (
    <div className="auth-page">
      <div className="auth-split">
        {/* Left panel — branding */}
        <div className="auth-panel-left">
          <div className="auth-brand">
            <span className="auth-brand-icon">⚕️</span>
            <div>
              <div className="auth-brand-name">FMGE<span>Roadmap</span></div>
              <div className="auth-brand-sub">India's #1 FMGE prep platform</div>
            </div>
          </div>
          <div className="auth-features">
            {FEATURES.map(f => (
              <div key={f.text} className="auth-feature-item">
                <span className="auth-feature-icon">{f.icon}</span>
                <span>{f.text}</span>
              </div>
            ))}
          </div>
          <div className="auth-panel-deco" aria-hidden="true">
            <div className="auth-deco-ring auth-deco-ring-1" />
            <div className="auth-deco-ring auth-deco-ring-2" />
          </div>
        </div>

        {/* Right panel — form */}
        <div className="auth-panel-right">
          <div className="auth-card">
            <h1 className="auth-heading">
              {tab === "login" ? "Welcome back" : "Create account"}
            </h1>
            <p className="auth-subheading">
              {tab === "login"
                ? "Sign in to continue your FMGE journey"
                : "Start your FMGE preparation today"}
            </p>

            {/* Google button — prominent */}
            <button className="google-btn" onClick={handleGoogle} disabled={loading}>
              <GoogleIcon />
              <span>Continue with Google</span>
            </button>

            <div className="auth-divider"><span>or use email</span></div>

            {/* Tab switcher */}
            <div className="auth-tabs">
              <button
                className={`auth-tab ${tab === "login" ? "active" : ""}`}
                onClick={() => switchTab("login")}
              >Sign In</button>
              <button
                className={`auth-tab ${tab === "register" ? "active" : ""}`}
                onClick={() => switchTab("register")}
              >Register</button>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {tab === "register" && (
                <div className="auth-field">
                  <label htmlFor="auth-name">Full Name</label>
                  <input
                    id="auth-name"
                    type="text"
                    placeholder="Dr. Your Name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                    autoComplete="name"
                  />
                </div>
              )}
              <div className="auth-field">
                <label htmlFor="auth-email">Email</label>
                <input
                  id="auth-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                />
              </div>
              <div className="auth-field">
                <label htmlFor="auth-password">Password</label>
                <div className="auth-pass-wrap">
                  <input
                    id="auth-password"
                    type={showPass ? "text" : "password"}
                    placeholder={tab === "register" ? "Min. 6 characters" : "Your password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    minLength={6}
                    autoComplete={tab === "login" ? "current-password" : "new-password"}
                  />
                  <button type="button" className="auth-pass-toggle" onClick={() => setShowPass(v => !v)} tabIndex={-1}>
                    {showPass ? "🙈" : "👁️"}
                  </button>
                </div>
              </div>

              {authError && (
                <div className="auth-error" role="alert">
                  <span>⚠️</span> {authError}
                </div>
              )}

              <button type="submit" className="auth-submit" disabled={loading}>
                {loading
                  ? <><span className="auth-spinner" /> Please wait…</>
                  : tab === "login" ? "Sign In" : "Create Account"
                }
              </button>
            </form>

            <div className="auth-footer">
              <button className="auth-guest-link" onClick={() => navigate(from, { replace: true })}>
                Continue as guest →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
