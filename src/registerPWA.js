// PWA service-worker registration.
//
// Goal: when a new version is deployed, update silently in the background and
// reload to the fresh version ONLY when the user re-opens / refocuses the app —
// never while they're actively using it (e.g. mid-quiz).

import { registerSW } from "virtual:pwa-register";

let refreshPending = false;
let swRegistration = null;

const updateSW = registerSW({
  // A new version finished installing and is waiting. Don't reload now —
  // just flag it. We apply it the next time the app regains focus.
  onNeedRefresh() {
    refreshPending = true;
  },
  onRegisteredSW(_swUrl, registration) {
    if (!registration) return;
    swRegistration = registration;
    // Periodically check for a new SW for long-open sessions (every 60 min).
    setInterval(() => {
      registration.update().catch(() => {});
    }, 60 * 60 * 1000);
  },
});

// Apply a pending update by skipping the waiting SW and reloading.
function applyPendingUpdate() {
  if (!refreshPending) return;
  refreshPending = false;
  // updateSW(true) sends SKIP_WAITING and reloads once the new SW takes control.
  updateSW(true);
}

// Check for a new SW (downloads it into "waiting" if available).
function checkForUpdate() {
  if (swRegistration) swRegistration.update().catch(() => {});
}

// When the user comes back to the app: reload if an update is ready,
// otherwise check so it's ready for next time.
function onRegainFocus() {
  if (refreshPending) applyPendingUpdate();
  else checkForUpdate();
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") {
    onRegainFocus();
  } else {
    // Tab hidden — prefetch any new SW while away so it's ready on return.
    checkForUpdate();
  }
});

window.addEventListener("focus", onRegainFocus);
