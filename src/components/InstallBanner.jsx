import useInstallPrompt from "../hooks/useInstallPrompt";

export default function InstallBanner() {
  const { canInstall, install, isInstalled } = useInstallPrompt();

  if (!canInstall || isInstalled) return null;

  return (
    <div className="install-banner" role="banner">
      <span>📲 Install as app — works offline too</span>
      <button className="install-btn" onClick={install}>Install</button>
      <button
        className="install-dismiss"
        aria-label="Dismiss"
        onClick={(e) => e.currentTarget.closest(".install-banner").remove()}
      >
        ✕
      </button>
    </div>
  );
}
