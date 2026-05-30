// ===== RENDER LOGIC =====

const phaseClass = (p) => {
  if (p.startsWith("Pre")) return "phase-pre";
  if (p.startsWith("Para")) return "phase-para";
  if (p.includes("Major")) return "phase-major";
  return "phase-short";
};

const rating = (val, kind) => {
  let html = '<span class="rating">';
  for (let i = 1; i <= 5; i++) {
    html += `<span class="dot ${kind} ${i <= val ? "on" : ""}"></span>`;
  }
  return html + "</span>";
};

// ===== TABLE =====
let currentSort = { key: "weightage", asc: false };
let currentFilter = "all";

function renderTable() {
  const tbody = document.querySelector("#subject-table tbody");
  let rows = [...SUBJECTS];
  if (currentFilter !== "all") rows = rows.filter((s) => s.phase === currentFilter);
  rows.sort((a, b) => {
    const v1 = a[currentSort.key], v2 = b[currentSort.key];
    if (typeof v1 === "string") return currentSort.asc ? v1.localeCompare(v2) : v2.localeCompare(v1);
    return currentSort.asc ? v1 - v2 : v2 - v1;
  });

  tbody.innerHTML = rows
    .map(
      (s) => `
    <tr>
      <td><strong>${s.name}</strong></td>
      <td><span class="phase-tag ${phaseClass(s.phase)}">${s.phase}</span></td>
      <td><strong>${s.weightage}</strong></td>
      <td>${rating(s.difficulty, "diff")}</td>
      <td>${rating(s.volume, "vol")}</td>
      <td>${rating(s.scoring, "score")}</td>
      <td>${s.hoursFirstRead} hrs</td>
    </tr>`
    )
    .join("");
}

document.querySelectorAll("#subject-table th").forEach((th) => {
  th.addEventListener("click", () => {
    const key = th.dataset.sort;
    if (!key) return;
    if (currentSort.key === key) currentSort.asc = !currentSort.asc;
    else { currentSort.key = key; currentSort.asc = false; }
    renderTable();
  });
});

document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.phase;
    renderTable();
  });
});

// ===== WEIGHTAGE BAR CHART =====
function renderChart() {
  const sorted = [...SUBJECTS].sort((a, b) => b.weightage - a.weightage);
  const max = sorted[0].weightage;
  document.getElementById("weightage-chart").innerHTML = sorted
    .map(
      (s) => `
    <div class="bar-row">
      <div class="bar-name">${s.name}</div>
      <div class="bar-track"><div class="bar-fill" style="width: ${(s.weightage / max) * 100}%"></div></div>
      <div class="bar-val">${s.weightage}</div>
    </div>`
    )
    .join("");
}

// ===== SUBJECT DEEP-DIVE CARDS =====
function renderSubjectCards() {
  const sorted = [...SUBJECTS].sort((a, b) => b.weightage - a.weightage);
  document.getElementById("subject-cards").innerHTML = sorted
    .map(
      (s) => `
    <div class="subj-card">
      <div class="subj-card-head">
        <div>
          <h4>${s.name}</h4>
          <span class="phase-tag ${phaseClass(s.phase)}">${s.phase}</span>
        </div>
        <div class="qs-badge">${s.weightage} Qs</div>
      </div>
      <div class="why">💭 ${s.whyHard}</div>
      <div class="hy-title">High-Yield Topics</div>
      <ul>${s.highYield.map((t) => `<li>${t}</li>`).join("")}</ul>
      <div class="resource">📚 ${s.resource}</div>
      <div class="resource" style="color: var(--text-mute);">
        ⏱️ ${s.hoursFirstRead}h first read + ${s.hoursRevision}h revision
      </div>
    </div>`
    )
    .join("");
}

// ===== RESOURCES =====
function renderResources() {
  document.getElementById("resource-grid").innerHTML = RESOURCES.map(
    (r) => `
    <div class="res-card">
      <h3>${r.name}</h3>
      <div class="best">Best for: ${r.bestFor}</div>
      <div class="pros"><strong>✅ Pros:</strong> ${r.pros.join(" · ")}</div>
      <div class="cons"><strong>⚠️ Cons:</strong> ${r.cons.join(" · ")}</div>
      <div class="verdict">${r.verdict}</div>
    </div>`
  ).join("");
}

// ===== HOURS =====
function renderHours() {
  const h = HOUR_RECOMMENDATION;
  document.getElementById("hour-recommendation").innerHTML = `
    <p class="muted">${h.status}</p>
    <div class="hours-grid">
      <div class="hour-card">
        <div class="hour-num">${h.weekdayHours} hrs/day</div>
        <p class="muted" style="margin: 0.5rem 0 1rem;">Weekdays (Mon–Sat) — focused study</p>
        ${h.breakdown.map((b) => `
          <div class="hour-row"><span>${b.activity}</span><span>${b.hours}h</span></div>`).join("")}
      </div>
      <div class="hour-card">
        <div class="hour-num">${h.weekendHours} hrs/day</div>
        <p class="muted" style="margin: 0.5rem 0 1rem;">Sundays (morning + afternoon)</p>
        <p>Use weekends to:</p>
        <ul style="padding-left: 1.2rem; color: var(--text-mute); margin: 0.6rem 0;">
          <li>Take 1 grand test (3 hrs)</li>
          <li>Review the week's mistakes</li>
          <li>Catch up on missed topics</li>
          <li>Re-revise hard concepts</li>
        </ul>
        <div class="callout" style="margin-top: 1rem;">📌 ${h.weeklyOff}</div>
      </div>
    </div>
    <div class="callout" style="margin-top: 1.5rem;">🧮 ${h.note}</div>
  `;
}

// ===== ROADMAP =====
function renderRoadmap() {
  document.getElementById("roadmap-timeline").innerHTML = ROADMAP.map(
    (r) => `
    <div class="tl-item">
      <div class="tl-phase">${r.phase}</div>
      <h3>${r.months}</h3>
      <div class="tl-goal">🎯 ${r.goal}</div>
      <div class="tl-subjects">${r.subjects.map((s) => `<span>${s}</span>`).join("")}</div>
      <div class="tl-deliv">✅ <strong>Deliverable:</strong> ${r.deliverable}</div>
    </div>`
  ).join("");
}

// ===== DAILY SCHEDULE =====
function renderDaily() {
  const c = SMART_DAILY_CYCLE;
  document.getElementById("daily-intro").textContent = c.intro;
  document.getElementById("daily-totals").innerHTML = "📊 " + c.totals;
  document.getElementById("daily-schedule").innerHTML = `
    <div class="daily">
      ${c.blocks
        .map(
          (d) => `
        <div class="daily-row">
          <div class="daily-time">${d.time}</div>
          <div class="daily-task">
            <span class="daily-icon">${d.icon}</span><strong>${d.title}</strong>
            <span class="daily-detail">${d.detail}</span>
            ${d.smart ? `<span class="daily-smart">⚡ ${d.smart}</span>` : ""}
          </div>
        </div>`
        )
        .join("")}
    </div>
  `;
}

// ===== FREE RESOURCES =====
function renderFree() {
  document.getElementById("free-resources").innerHTML = FREE_RESOURCES.map(
    (cat) => `
    <div class="free-cat">
      <h3>${cat.category}</h3>
      <div class="free-grid">
        ${cat.items
          .map(
            (i) => `
          <div class="free-item">
            <div class="free-name">${i.name}</div>
            <div class="free-note">${i.note}</div>
          </div>`
          )
          .join("")}
      </div>
    </div>`
  ).join("");
}

// ===== SMART STUDY =====
function renderSmart() {
  document.getElementById("smart-list").innerHTML = SMART_STUDY.map(
    (s) => `
    <div class="smart-card">
      <h3>${s.name}</h3>
      <div class="smart-row"><div class="smart-label">Why</div><div class="smart-val">${s.why}</div></div>
      <div class="smart-row"><div class="smart-label">How</div><div class="smart-val">${s.how}</div></div>
      <div class="smart-row"><div class="smart-label">When</div><div class="smart-val">${s.when}</div></div>
      <div class="smart-row"><div class="smart-label">Tools</div><div class="smart-val">${s.tools}</div></div>
    </div>`
  ).join("");
}

// ===== PHASE 1 WEEKS =====
function renderPhase1() {
  document.getElementById("phase1-weeks").innerHTML = PHASE1_WEEKS.map(
    (w) => `
    <div class="week-card">
      <div class="week-head">
        <h4>${w.week}</h4>
        <span class="week-date">${w.dates}</span>
      </div>
      <div class="slot-line"><span class="slot-tag">SLOT 1</span>${w.slot1}</div>
      <div class="slot-line"><span class="slot-tag">SLOT 2</span>${w.slot2}</div>
      <div class="slot-line" style="color: var(--text-mute); font-size: 0.85rem; margin-top: 0.6rem;">📌 ${w.extras}</div>
      <div class="week-test">🧪 <strong>Weekend Test:</strong> ${w.weekendTest}</div>
    </div>`
  ).join("");
}

// ===== WEEKLY RHYTHM =====
function renderWeekly() {
  document.getElementById("weekly-rhythm").innerHTML = WEEKLY_RHYTHM.map(
    (d) => `
    <div class="daily-row">
      <div class="daily-time">${d.day}</div>
      <div class="daily-task">
        <strong>${d.focus}</strong>
        <span class="daily-detail">${d.note}</span>
      </div>
    </div>`
  ).join("");
}

// ===== PHASE OUTLINES =====
function renderOutlines() {
  document.getElementById("phase-outlines").innerHTML = PHASE_OUTLINES.map(
    (p) => `
    <div class="outline-card">
      <h4>${p.phase}</h4>
      <ul>${p.weeks.map((w) => `<li>${w}</li>`).join("")}</ul>
    </div>`
  ).join("");
}

// ===== HAMBURGER =====
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => {
      navLinks.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
    })
  );
}

// ===== TIPS =====
function renderTips() {
  document.getElementById("tips-list").innerHTML = TIPS.map(
    (t) => `<div class="tip-card">${t}</div>`
  ).join("");
}

// ===== INIT =====
renderTable();
renderChart();
renderSubjectCards();
renderResources();
renderFree();
renderHours();
renderSmart();
renderRoadmap();
renderPhase1();
renderWeekly();
renderOutlines();
renderDaily();
renderTips();
