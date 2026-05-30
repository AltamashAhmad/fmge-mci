import { useEffect, useRef, useState } from "react";

// Animated countdown bar — 90 seconds for mock test, configurable via props.
// Calls onTimeUp() when it reaches 0.

export default function TimerBar({
  durationSeconds = 90,
  running = true,
  onTimeUp,
}) {
  const [secondsLeft, setSecondsLeft] = useState(durationSeconds);
  const intervalRef = useRef(null);

  useEffect(() => {
    setSecondsLeft(durationSeconds);
  }, [durationSeconds]);

  useEffect(() => {
    if (!running) {
      clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current);
          onTimeUp?.();
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [running, onTimeUp]);

  const pct = (secondsLeft / durationSeconds) * 100;
  const colorClass =
    pct > 60 ? "timer-green" : pct > 25 ? "timer-yellow" : "timer-red";

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;
  const timeStr = `${mins}:${String(secs).padStart(2, "0")}`;

  return (
    <div className="timer-bar-wrap">
      <div className={`timer-track ${colorClass}`}>
        <div className="timer-fill" style={{ width: `${pct}%` }} />
      </div>
      <span className={`timer-label ${colorClass}`}>{timeStr}</span>
    </div>
  );
}
