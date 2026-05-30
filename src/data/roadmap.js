export const HOUR_RECOMMENDATION = {
  status: "Final year MBBS · Starting fresh · 13 months to FMGE June 2027",
  weekdayHours: 8,
  weekendHours: 10,
  breakdown: [
    { activity: "Video lectures (1.5x speed)", hours: 3.0 },
    { activity: "Note-making / annotation", hours: 1.5 },
    { activity: "Q-bank MCQs (topic-wise)", hours: 2.0 },
    { activity: "Active revision (yesterday + last week)", hours: 1.0 },
    { activity: "Buffer / mistakes review", hours: 0.5 },
  ],
  weeklyOff: "Sunday evening OFF (mental health > marathon)",
  note: "Total ≈ 56 hrs/week × 52 weeks ≈ 2900 hrs over 13 months — enough for 1× + 2 revisions + tests.",
};

export const ROADMAP = [
  { phase: "Phase 1 — Foundation", months: "Month 1–2 (Jun–Jul 2026)", start: "2026-06-01", end: "2026-07-31", goal: "Pre-clinical + lightweight para-clinical. Build study habit.", subjects: ["Anatomy", "Physiology", "Biochemistry", "Forensic Medicine"], deliverable: "All Phase 1 subjects done 1×. Subject tests scored." },
  { phase: "Phase 2 — Para-clinical Core", months: "Month 3–5 (Aug–Oct 2026)", start: "2026-08-01", end: "2026-10-31", goal: "The 'big 3' of para-clinical.", subjects: ["Pathology", "Pharmacology", "Microbiology"], deliverable: "Patho/Pharma/Micro done 1×. Grand test #1." },
  { phase: "Phase 3 — PSM + Shorts", months: "Month 6–7 (Nov–Dec 2026)", start: "2026-11-01", end: "2026-12-31", goal: "PSM (highest weightage) + knock out short subjects.", subjects: ["PSM", "Ophthalmology", "ENT", "Dermatology", "Psychiatry"], deliverable: "PSM done + all shorts done. Grand test #2." },
  { phase: "Phase 4 — Clinical Majors", months: "Month 8–10 (Jan–Mar 2027)", start: "2027-01-01", end: "2027-03-31", goal: "Medicine, Surgery, OBGY, Pediatrics + remaining shorts.", subjects: ["Medicine", "Surgery", "Obstetrics & Gynecology", "Pediatrics", "Orthopedics", "Anesthesia", "Radiology"], deliverable: "Full syllabus = COMPLETE. Grand test #3." },
  { phase: "Phase 5 — Revision 1", months: "Month 11 (Apr 2027)", start: "2027-04-01", end: "2027-04-30", goal: "Speed revision via M-Ready / Rapid Revision videos.", subjects: ["ALL — quick pass"], deliverable: "Every subject revised once. Weekly grand tests." },
  { phase: "Phase 6 — Revision 2 + Tests", months: "Month 12 (May 2027)", start: "2027-05-01", end: "2027-05-31", goal: "Deep revision of weak areas + full-length test marathon.", subjects: ["Weak subjects", "PYQs last 10 years"], deliverable: "≥15 full mocks. Score 180+/300 consistently." },
  { phase: "Phase 7 — Final Sprint", months: "Month 13 (Jun 2027)", start: "2027-06-01", end: "2027-06-30", goal: "PYQs only + image-based + one-liners. NO new topics.", subjects: ["PYQs", "One-liners", "Image bank"], deliverable: "EXAM. Pass with confidence." },
];

export const WEEKLY_RHYTHM = [
  { day: "Mon", focus: "New topics — Major + Secondary subject", note: "Full 8 hrs. Set the week's tone." },
  { day: "Tue", focus: "New topics + first revision of Monday's content", note: "Same structure." },
  { day: "Wed", focus: "New topics + MCQ-heavy day (100+ Qs)", note: "Identify weak topics." },
  { day: "Thu", focus: "New topics + revisit Wed's weak topics", note: "Adjust pace if behind." },
  { day: "Fri", focus: "New topics + chapter-end mini-tests", note: "30-Q subject test per slot." },
  { day: "Sat", focus: "NO new topics. FULL DAY revision + Mistakes Journal", note: "What 90% skip — and why they fail." },
  { day: "Sun", focus: "Morning: Grand Test (3 hrs) → Review → Evening OFF", note: "Mental health day." },
];

export const PHASE1_WEEKS = [
  { week: "Week 1", startDate: "2026-06-01", dates: "Jun 1–7, 2026", slot1: "Anatomy — Upper Limb (osteology, brachial plexus, axilla)", slot2: "Physiology — General + Body fluids", extras: "Setup Anki, Marrow account. 50 MCQs/day.", weekendTest: "Anatomy Upper Limb (50 Qs)" },
  { week: "Week 2", startDate: "2026-06-08", dates: "Jun 8–14", slot1: "Anatomy — Lower Limb + Thorax wall", slot2: "Physiology — Nerve-Muscle physiology", extras: "First Anki review cycle. 75 MCQs/day.", weekendTest: "Lower Limb + N-M (50 Qs)" },
  { week: "Week 3", startDate: "2026-06-15", dates: "Jun 15–21", slot1: "Anatomy — Abdomen + Pelvis", slot2: "Physiology — CVS", extras: "Mind map every chapter. 75 MCQs/day.", weekendTest: "Abdomen + CVS (50 Qs)" },
  { week: "Week 4", startDate: "2026-06-22", dates: "Jun 22–28", slot1: "Anatomy — Head & Neck + Embryology", slot2: "Physiology — Respiratory", extras: "Flowchart for each embryo system.", weekendTest: "H&N + Embryo + Respi (75 Qs)" },
  { week: "Week 5", startDate: "2026-06-29", dates: "Jun 29 – Jul 5", slot1: "Anatomy — Neuroanatomy + Histology (FINISH!)", slot2: "Physiology — Renal + GIT", extras: "🎉 Anatomy DONE 1×.", weekendTest: "Neuro + Renal (75 Qs)" },
  { week: "Week 6", startDate: "2026-07-06", dates: "Jul 6–12", slot1: "Biochemistry — Carbs + Lipids + Proteins metabolism", slot2: "Physiology — Endocrine + Reproduction (FINISH!)", extras: "🎉 Physio DONE 1×. 100 MCQs/day.", weekendTest: "Metabolism + Endo (75 Qs)" },
  { week: "Week 7", startDate: "2026-07-13", dates: "Jul 13–19", slot1: "Biochemistry — Vitamins, Enzymes, Molecular biology", slot2: "Forensic Medicine — IPC, asphyxia, wounds", extras: "Biochem mnemonics → pin to wall.", weekendTest: "Vitamins + Forensic (75 Qs)" },
  { week: "Week 8", startDate: "2026-07-20", dates: "Jul 20–26", slot1: "Biochemistry — IEM + Clinical biochem (FINISH!)", slot2: "Forensic Medicine — Toxicology + ID (FINISH!)", extras: "🎉 Phase 1 COMPLETE.", weekendTest: "GRAND TEST #1 (200 Qs, 3 hrs)" },
];

export const PHASE_OUTLINES = [
  { phase: "Phase 2 — Para-clinical Core (Aug–Oct 2026, 12 wk)", weeks: ["Wk 1–5: Pathology (General → Heme → Systemic)", "Wk 6–9: Pharmacology (Gen → ANS → AMs → CVS → Special)", "Wk 10–12: Microbiology (Immuno → Bact → Virol → Parasito)", "Every Sunday: rotating GT. End: GT #2."] },
  { phase: "Phase 3 — PSM + Shorts (Nov–Dec 2026, 8 wk)", weeks: ["Wk 1–4: PSM (Biostats → Epi → CD → NCD → NHP → Nutr → MCH)", "Wk 5: Ophthalmology", "Wk 6: ENT", "Wk 7: Derma + Psych", "Wk 8: Revision + GT #3"] },
  { phase: "Phase 4 — Clinical Majors (Jan–Mar 2027, 12 wk)", weeks: ["Wk 1–4: Medicine (ID → Cardio → Endo → Nephro → Heme → Rheum → Neuro)", "Wk 5–8: Surgery (GI → Breast → Thy → Hernia → Vasc → Trauma → Uro)", "Wk 9–10: OBGY", "Wk 11: Pediatrics", "Wk 12: Ortho + Anes + Radio + GT #4"] },
  { phase: "Phase 5 — Revision 1 (Apr 2027, 4 wk)", weeks: ["Wk 1: Pre-clin + Para-clin via M-Ready", "Wk 2: PSM + Shorts rapid", "Wk 3: Clinical Majors rapid", "Wk 4: 2× full mocks + analysis"] },
  { phase: "Phase 6 — Revision 2 + Tests (May 2027, 4 wk)", weeks: ["Wk 1–3: Weak subjects deep dive + PYQs 10 yrs", "Wk 4: 4× full mocks", "Target: 180+/300 consistently."] },
  { phase: "Phase 7 — Final Sprint (Jun 2027, 2 wk)", weeks: ["Days 1–10: PYQs last 5 yrs + one-liners + image bank", "Days 11–13: Light revision. Sleep early.", "Exam Day: ✅"] },
];

export const SMART_DAILY_CYCLE = {
  intro: "Same template every day, content changes per phase. Bakes in active recall + spaced repetition + Pomodoro.",
  totals: "Total focused study ≈ 8 hrs · Recall/Revision ≈ 1.5 hrs · MCQs ≈ 3 hrs · Sleep 8 hrs · Exercise 45 min",
  blocks: [
    { time: "06:30", icon: "☀️", title: "Wake + Hydrate", detail: "500 ml water. No phone 15 min. Stretch.", smart: "Cortisol peak — hard concepts later." },
    { time: "07:00", icon: "🔁", title: "Recall Sprint (30 min)", detail: "Anki due cards. Then close notes, write yesterday's lectures on blank page.", smart: "Active Recall + Spaced Repetition" },
    { time: "07:30", icon: "🍳", title: "Breakfast (30 min)", detail: "Protein + carbs. No scrolling. Optional 1.5x lecture audio.", smart: "Passive learning bonus." },
    { time: "08:00", icon: "🎥", title: "STUDY SLOT 1 — New Topic A (2 hrs)", detail: "4 Pomodoros: 25 min video → 5 min break × 4. 3-line summary after each.", smart: "Pomodoro + Active Recall" },
    { time: "10:00", icon: "☕", title: "Break (30 min)", detail: "Walk outside, eyes far. Snack + water.", smart: "Eye rest sustains focus." },
    { time: "10:30", icon: "📝", title: "Note + MCQ on Slot 1 (1.5 hrs)", detail: "1-page mind map. 25 MCQs topic-wise. Log mistakes.", smart: "Mind Map + Mistakes Journal" },
    { time: "12:00", icon: "🍱", title: "Lunch + Power Nap (1.5 hrs)", detail: "30 min eat, 20 min walk, 30 min nap MAX. Set 2 alarms.", smart: "Nap consolidates AM learning." },
    { time: "13:30", icon: "🎥", title: "STUDY SLOT 2 — New Topic B (2 hrs)", detail: "Secondary subject. Same Pomodoro structure.", smart: "Interleaving" },
    { time: "15:30", icon: "🍵", title: "Break (15 min)", detail: "Tea, eyes off screen.", smart: "" },
    { time: "15:45", icon: "📝", title: "Note + MCQ on Slot 2 (1.25 hrs)", detail: "Mind map + 25 MCQs.", smart: "" },
    { time: "17:00", icon: "🚶", title: "Walk / Exercise (45 min)", detail: "30 min brisk walk or workout. Optional recall audio.", smart: "BDNF boost = better memory." },
    { time: "17:45", icon: "🔁", title: "Spaced Revision (1 hr)", detail: "Topics from 2-day, 7-day, 21-day ago. Just headings + mind maps.", smart: "Spaced Repetition" },
    { time: "18:45", icon: "🍽️", title: "Dinner + Family (1 hr)", detail: "Real break. No study talk.", smart: "Prevents burnout." },
    { time: "19:45", icon: "❓", title: "Mixed MCQ Session (1.5 hrs)", detail: "75 mixed-subject MCQs. 60 sec/Q. Review every wrong.", smart: "Interleaving + Mistakes Journal" },
    { time: "21:15", icon: "✍️", title: "Feynman Slot (30 min)", detail: "Explain 1 hard topic OUT LOUD. Catch gaps.", smart: "Feynman Technique" },
    { time: "21:45", icon: "📋", title: "Plan Tomorrow (15 min)", detail: "3 specific tasks. Books/tabs ready.", smart: "Reduces AM decision fatigue." },
    { time: "22:00", icon: "💤", title: "Sleep (8.5 hrs)", detail: "No screen. Light reading. Lights out by 22:30.", smart: "Sleep = where memory is stored." },
  ],
};

// ─── HOLIDAY SPRINT ──────────────────────────────────────────
// Standalone 3-month 10-hr/day intensive schedule.
// Completely separate from the main roadmap above.

export const HOLIDAY_SPRINT_DAILY = {
  title: "10-Hour Holiday Sprint — Daily Schedule",
  tagline: "90 days · 10 hrs/day · 900 hrs focused study · Phases 1-3 compressed",
  totalFocused: "Focused study = 10 hrs · Sleep = 8 hrs · MCQs ≥ 75/day · Anki every morning",
  breakdown: [
    { activity: "New topic lectures (1.5× speed)", hours: 4.5 },
    { activity: "Notes + topic-wise MCQs (after each slot)", hours: 3.0 },
    { activity: "Mixed MCQ session (evening)", hours: 1.5 },
    { activity: "Spaced revision (7-day + 21-day topics)", hours: 1.0 },
  ],
  blocks: [
    { time: "06:00", icon: "☀️", title: "Wake + Hydrate", detail: "500 ml water. Light stretch 10 min. No phone.", smart: "Cortisol peak — prime time for hard content. Don't waste it on scrolling." },
    { time: "06:30", icon: "🔁", title: "Recall Sprint (30 min)", detail: "Anki due cards (10 min). Then close all notes — write yesterday's topics from memory on a blank page.", smart: "Active recall + spaced repetition before new learning." },
    { time: "07:00", icon: "🍳", title: "Breakfast (30 min)", detail: "Protein + carbs. No scrolling. Optional 1.5× lecture audio in background.", smart: "Passive reinforcement during meals." },
    { time: "07:30", icon: "🎥", title: "Study Slot 1 — New Topic A (2.5 hrs)", detail: "5 Pomodoros (25 min lecture → 5 min break). Write a 3-line summary after each Pomodoro.", smart: "Pomodoro + Active Recall per block." },
    { time: "10:00", icon: "🚶", title: "Break (20 min)", detail: "Walk outside, eyes far, water + snack. No phone.", smart: "Micro-recovery sustains 10-hr study days without burnout." },
    { time: "10:20", icon: "📝", title: "Notes + MCQs — Slot 1 (1.5 hrs)", detail: "1-page mind map of Slot 1 topic. Solve 30–40 topic-wise MCQs. Log every wrong answer in Mistakes Journal.", smart: "Mind mapping + test-enhanced learning." },
    { time: "11:50", icon: "☕", title: "Mini Break (10 min)", detail: "Water, stretch, breathe.", smart: "" },
    { time: "12:00", icon: "🎥", title: "Study Slot 2 — New Topic B (2 hrs)", detail: "Different subject from Slot 1 — interleaving. 4 Pomodoros (25 min + 5 min break each).", smart: "Interleaving reduces false confidence and boosts retention." },
    { time: "14:00", icon: "🍱", title: "Lunch + Walk + Nap (1.5 hrs)", detail: "30 min eat, 20 min walk outside, 30 min power nap. Set 2 alarms — nap no longer than 30 min.", smart: "Nap consolidates morning learning. Non-negotiable for 10-hr days." },
    { time: "15:30", icon: "🔄", title: "Study Slot 3 — Revision + Weak Topics (1.5 hrs)", detail: "Revisit topics flagged in morning MCQs + topics from 2 days ago. Mind map refresh — no full re-reading.", smart: "This is the slot that separates 60% scorers from 75% scorers." },
    { time: "17:00", icon: "🏃", title: "Walk / Exercise (45 min)", detail: "30–45 min brisk walk or workout. Optional lecture audio. No intense exercise on test days.", smart: "BDNF release = measurably better memory consolidation for the next 24 hrs." },
    { time: "17:45", icon: "❓", title: "Mixed MCQ Session (1.5 hrs)", detail: "75 mixed-subject MCQs from all topics covered so far. 60 sec/Q strict timer. Review every wrong answer.", smart: "Interleaved retrieval practice — the single highest ROI study activity." },
    { time: "19:15", icon: "🍽️", title: "Dinner + Family Time (45 min)", detail: "Full break. No study talk. Recharge socially.", smart: "Prevents burnout over 90 days. Relationships > marks." },
    { time: "20:00", icon: "🔁", title: "Spaced Revision (1 hr)", detail: "Topics from exactly 7 days ago + 21 days ago. Use headings + mind maps only — absolutely no re-reading full notes.", smart: "Spaced repetition peak window — most efficient revision you can do." },
    { time: "21:00", icon: "✍️", title: "Feynman + Plan Tomorrow (30 min)", detail: "Explain 1 hard topic OUT LOUD as if teaching a 10-year-old. Note every gap. Then write tomorrow's 3 specific tasks.", smart: "Feynman Technique exposes the illusion of knowing." },
    { time: "21:30", icon: "😌", title: "Wind Down (30 min)", detail: "No screens. Light fiction or music. Prepare tomorrow's books/tabs.", smart: "" },
    { time: "22:00", icon: "💤", title: "Sleep (8 hrs)", detail: "Lights out by 22:00. Non-negotiable. Sleep is where memory is actually stored.", smart: "8 hrs is mandatory — not optional — for 90-day sprint retention." },
  ],
};

export const HOLIDAY_SPRINT_MONTHS = [
  {
    month: 1,
    title: "Month 1 — Pre-clinical Foundation",
    color: "#818cf8",
    goal: "Build the foundation. Cover all pre-clinical subjects in 28 days. Establish Anki deck, Mistakes Journal, and Pomodoro habit from Day 1.",
    hours: 280,
    subjects: ["Anatomy", "Physiology", "Biochemistry", "Forensic Medicine"],
    deliverable: "All Phase 1 subjects done 1×. Grand Test #1 scored.",
    grandTest: "Grand Test #1 — 150 Qs, 2.5 hrs (Pre-clinical only) — end of Week 4",
    weeks: [
      {
        week: "Week 1", days: "Day 1–7", hrs: 70,
        slot1: "Anatomy — Upper Limb (osteology, brachial plexus, axilla, shoulder, arm, forearm, hand, nerve injuries)",
        slot2: "Anatomy — Lower Limb (hip, thigh, leg, foot, femoral triangle, popliteal fossa, nerve injury patterns)",
        extras: "Set up Anki + Marrow/DAMS. 50 MCQs/day. Draw every nerve supply map by hand instead of just reading.",
        test: "Upper + Lower Limb (60 Qs)",
      },
      {
        week: "Week 2", days: "Day 8–14", hrs: 70,
        slot1: "Anatomy — Thorax (heart, great vessels, lungs, mediastinum) + Abdomen & Pelvis (organs, peritoneum, vessels)",
        slot2: "Anatomy — Head & Neck (cranial nerves, triangles, orbit, ear) + Embryology (all systems)",
        extras: "Cranial nerve table must be memorised cold. Draw cross-sections. 75 MCQs/day.",
        test: "Thorax + Abdomen + H&N + Embryology (75 Qs)",
      },
      {
        week: "Week 3", days: "Day 15–21", hrs: 70,
        slot1: "Anatomy — Neuroanatomy (ascending/descending tracts, basal ganglia, cerebellum, blood supply) + Histology (DONE 🎉)",
        slot2: "Physiology — General physiology + Body fluids + Nerve-Muscle + CVS + Respiratory",
        extras: "🎉 Anatomy DONE 1×. Start Physio Anki deck. 100 MCQs/day.",
        test: "Neuroanatomy + CVS Physiology (75 Qs)",
      },
      {
        week: "Week 4", days: "Day 22–28", hrs: 70,
        slot1: "Physiology — Renal + GIT + Endocrine + Reproduction (DONE 🎉) + Biochemistry — Metabolism (Carbs, Lipids, Proteins, TCA, ETC)",
        slot2: "Biochemistry — Vitamins + Enzymes + Mol Biology + IEM + Clinical Biochem (DONE 🎉) + Forensic Medicine — IPC + Asphyxia + Wounds + Toxicology + Identification (DONE 🎉)",
        extras: "🎉 PHASE 1 COMPLETE. GT #1 on Day 28. Review Anki deck. Focus on wrong answers.",
        test: "GRAND TEST #1 — 150 Qs (All Phase 1)",
        isGrandTest: true,
      },
    ],
  },
  {
    month: 2,
    title: "Month 2 — Para-clinical Core",
    color: "#34d399",
    goal: "Tackle the 3 hardest para-clinical subjects. Pathology is the backbone of clinical medicine — don't rush it. Every topic links to patient presentations.",
    hours: 280,
    subjects: ["Pathology", "Pharmacology", "Microbiology"],
    deliverable: "Para-clinical trilogy done 1×. Grand Test #2 scored.",
    grandTest: "Grand Test #2 — 200 Qs, 3 hrs (Phase 1 + Phase 2 combined) — end of Week 8",
    weeks: [
      {
        week: "Week 5", days: "Day 29–35", hrs: 70,
        slot1: "Pathology — General (cell injury, inflammation, repair, neoplasia, haemodynamics, immunopathology)",
        slot2: "Pathology — Haematology (iron/B12/folate anemias, haemolytic anemias, leukaemias, lymphomas, bleeding disorders)",
        extras: "Pathology = 23 marks in FMGE. Don't skim. 75 MCQs/day. Histopathology images — visual memory.",
        test: "General Path + Haematology (75 Qs)",
      },
      {
        week: "Week 6", days: "Day 36–42", hrs: 70,
        slot1: "Pathology — Systemic: CVS (MI, IE, rheumatic heart) + Respiratory (TB, CA lung, pneumonia) + Renal (GN, NS, CKD)",
        slot2: "Pathology — GIT + Liver + Breast + Thyroid + CNS + Bone (DONE 🎉)",
        extras: "🎉 Pathology DONE 1×. 100 MCQs/day. Do a Pathology mini-test before moving on.",
        test: "Systemic Pathology full (100 Qs)",
      },
      {
        week: "Week 7", days: "Day 43–49", hrs: 70,
        slot1: "Pharmacology — General (pharmacokinetics, pharmacodynamics, receptors) + ANS (cholinergics, adrenergics, blockers) + Autacoids",
        slot2: "Pharmacology — Antimicrobials (beta-lactams, aminoglycosides, macrolides, fluoroquinolones, antivirals, antifungals, antiparasitic)",
        extras: "Pharma is the toughest — drug mechanisms in table format. Recent drugs list is high yield. 75 MCQs/day.",
        test: "ANS + Antimicrobials (75 Qs)",
      },
      {
        week: "Week 8", days: "Day 50–56", hrs: 70,
        slot1: "Pharmacology — CVS + CNS + Endocrine + Anti-cancer + Miscellaneous + Recent advances (DONE 🎉) + Microbiology — Immunology + Bacteriology (Gram+ve, Gram-ve, Mycobacteria)",
        slot2: "Microbiology — Virology (Hepatitis, HIV staging, Herpesviruses, respiratory viruses) + Parasitology (Malaria, Amoeba, Helminths) + Mycology (DONE 🎉)",
        extras: "🎉 PHASE 2 COMPLETE. GT #2 on Day 56. Hepatitis serology chart + HIV staging must be cold.",
        test: "GRAND TEST #2 — 200 Qs (Phase 1 + Phase 2)",
        isGrandTest: true,
      },
    ],
  },
  {
    month: 3,
    title: "Month 3 — PSM + Short Subjects + Revision",
    color: "#f59e0b",
    goal: "PSM has the single highest FMGE weightage — treat it like a major subject, not a 'short'. Short subjects are easy marks if done properly. Then consolidate everything with a full 3-phase revision.",
    hours: 280,
    subjects: ["PSM / Community Medicine", "Ophthalmology", "ENT", "Dermatology", "Psychiatry"],
    deliverable: "PSM + all short subjects done 1×. All 3 phases revised. Grand Test #3 scored.",
    grandTest: "Grand Test #3 — 300 Qs, 3.5 hrs (Full mock — All 3 Phases) — Day 90",
    weeks: [
      {
        week: "Week 9", days: "Day 57–63", hrs: 70,
        slot1: "PSM — Biostatistics (mean/SD/SE, sensitivity/specificity/PPV/NPV, RR/OR/AR, study designs, p-value, confidence intervals)",
        slot2: "PSM — Epidemiology (disease frequency measures, epidemic investigation, communicable disease control, screening, surveillance, herd immunity)",
        extras: "PSM = 28 marks. Biostats questions are numerical — practice with actual numbers, not just formulas. 75 MCQs/day.",
        test: "Biostats + Epidemiology (75 Qs)",
      },
      {
        week: "Week 10", days: "Day 64–70", hrs: 70,
        slot1: "PSM — National Health Programs (NTEP/TB, NVBDCP/Malaria, NACP/HIV, NCD programs, NPHCE) + UIP Vaccines + Cold chain + RCH + Nutrition",
        slot2: "PSM — MCH + Demography + Environment health + Occupational health + Health planning & administration (DONE 🎉) + Ophthalmology complete (cataract, glaucoma, retina, refractive errors, red eye, squint)",
        extras: "🎉 PSM DONE 1×. Revise PSM again in Week 12 — it's that important. Ophtho = image recognition. 100 MCQs/day.",
        test: "PSM National Programs + Ophthalmology (75 Qs)",
      },
      {
        week: "Week 11", days: "Day 71–77", hrs: 70,
        slot1: "ENT — complete (CSOM types, otitis media, audiometry, sinusitis, CA larynx, vertigo DDx, nasal polyp) + Dermatology — complete (psoriasis, lichen planus, pemphigus/pemphigoid, STDs, leprosy, melanoma)",
        slot2: "Psychiatry — complete (schizophrenia, mood disorders, anxiety disorders, substance use, antipsychotics, ECT) + Orthopaedics basics (fracture types, bone tumours, TB spine, Paget's) — BONUS high-yield",
        extras: "🎉 ALL SHORT SUBJECTS DONE. Mix all subjects for MCQs. 100 MCQs/day. Derma + Ophtho = image Qs.",
        test: "ENT + Derma + Psych (75 Qs)",
      },
      {
        week: "Week 12", days: "Day 78–90", hrs: 70,
        slot1: "Day 78–81: Phase 1 rapid revision (Anki + mind maps only). Day 82–85: Phase 2 rapid revision (Patho + Pharma + Micro). Day 86–88: Phase 3 rapid revision (PSM + all shorts).",
        slot2: "Day 89: Mixed mock test (200 Qs, timed). Day 90: GT #3 — 300 Qs, 3.5 hrs. DEEP analysis of every wrong answer. Categorise by subject.",
        extras: "🎯 3-MONTH SPRINT COMPLETE. 900 hrs of focused study. You have covered 7 of the 13 months of the regular roadmap. This is an extraordinary achievement.",
        test: "GRAND TEST #3 — 300 Qs, 3.5 hrs (All 3 Phases — FINAL MOCK)",
        isGrandTest: true,
      },
    ],
  },
];
