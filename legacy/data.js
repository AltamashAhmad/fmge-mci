// FMGE / MBBS subject analysis data
// Sources: Aggregated from past FMGE papers (2019-2025), NMC FMGE pattern,
// and coaching analytics (Marrow, PrepLadder FMGE reports).
// Note: Weightage varies ±3 Qs per attempt. Total paper = 300 MCQs, pass = 150 (50%).

const SUBJECTS = [
  // === PRE-CLINICAL ===
  {
    name: "Anatomy",
    phase: "Pre-clinical",
    weightage: 17,                 // Average Qs / 300
    difficulty: 4,                 // 1=easy, 5=hard
    volume: 5,                     // 1=small, 5=huge
    scoring: 3,                    // 1=low ROI, 5=high ROI
    hoursFirstRead: 110,
    hoursRevision: 35,
    whyHard: "Massive recall load — embryology, neuroanatomy, histology. Low retention if not revised.",
    highYield: ["Upper limb brachial plexus", "Lower limb nerves", "Cranial nerves", "Embryology of heart/gut", "Neuroanatomy tracts"],
    resource: "Marrow (Dr Ashwani Kumar) — gold standard for FMGE Anatomy"
  },
  {
    name: "Physiology",
    phase: "Pre-clinical",
    weightage: 11,
    difficulty: 3,
    volume: 3,
    scoring: 4,
    hoursFirstRead: 70,
    hoursRevision: 22,
    whyHard: "Conceptual — CVS, Respiratory, Renal need understanding not mugging.",
    highYield: ["Cardiac cycle & ECG", "Acid-base", "Renal clearance", "Endocrine axes", "Nerve-muscle physiology"],
    resource: "Marrow (Dr Soumen Manna) OR PrepLadder (Dr Soumen)"
  },
  {
    name: "Biochemistry",
    phase: "Pre-clinical",
    weightage: 11,
    difficulty: 4,
    volume: 3,
    scoring: 4,
    hoursFirstRead: 65,
    hoursRevision: 20,
    whyHard: "Enzyme names, metabolic pathways, vitamin deficiencies — pure memorization.",
    highYield: ["Glycolysis/TCA/ETC", "Urea cycle", "Vitamins (B-complex, fat-soluble)", "Inborn errors of metabolism", "Molecular biology basics"],
    resource: "Marrow (Dr Gobind Rai Garg)"
  },

  // === PARA-CLINICAL ===
  {
    name: "Pathology",
    phase: "Para-clinical",
    weightage: 23,
    difficulty: 4,
    volume: 4,
    scoring: 5,
    hoursFirstRead: 120,
    hoursRevision: 40,
    whyHard: "Backbone of clinicals. Huge — general + systemic + hematology.",
    highYield: ["Inflammation & repair", "Neoplasia", "Hematology (anemias, leukemias)", "CVS path (MI, IE)", "Renal path (GN, NS)"],
    resource: "Marrow (Dr Sparsh Gupta) — most loved FMGE faculty"
  },
  {
    name: "Pharmacology",
    phase: "Para-clinical",
    weightage: 18,
    difficulty: 5,
    volume: 4,
    scoring: 4,
    hoursFirstRead: 95,
    hoursRevision: 32,
    whyHard: "#1 hardest per aspirant surveys — drug names, MOA, side effects, newest molecules.",
    highYield: ["ANS pharmacology", "Antimicrobials", "CVS drugs", "Anti-cancer", "Recent drug approvals"],
    resource: "Marrow (Dr Ranjan Patel / Dr Gobind Rai Garg)"
  },
  {
    name: "Microbiology",
    phase: "Para-clinical",
    weightage: 15,
    difficulty: 4,
    volume: 4,
    scoring: 4,
    hoursFirstRead: 80,
    hoursRevision: 26,
    whyHard: "Endless bug names + virology + immunology. Easy to forget.",
    highYield: ["Immunology basics", "Gram +ve cocci", "Mycobacteria & TB", "Hepatitis viruses", "HIV", "Parasitology (malaria, amoeba)"],
    resource: "Marrow (Dr Apurba Sastry / Dr Prashant)"
  },
  {
    name: "Forensic Medicine",
    phase: "Para-clinical",
    weightage: 10,
    difficulty: 2,
    volume: 2,
    scoring: 5,
    hoursFirstRead: 35,
    hoursRevision: 12,
    whyHard: "Small but tricky — IPC sections, asphyxia, toxicology poisons.",
    highYield: ["IPC/CrPC sections", "Asphyxial deaths", "Wounds", "Common poisons (OPC, snake)", "Identification"],
    resource: "Marrow (Dr Sumit Seth) — finish in 2 weeks"
  },
  {
    name: "PSM / Community Medicine",
    phase: "Para-clinical",
    weightage: 28,
    difficulty: 4,
    volume: 5,
    scoring: 5,
    hoursFirstRead: 120,
    hoursRevision: 45,
    whyHard: "HIGHEST WEIGHTAGE. Volume is huge — biostats, epidemiology, national programs, nutrition. Aspirants underestimate it.",
    highYield: ["Biostatistics & study designs", "Epidemiology of communicable diseases", "National Health Programs (RNTCP/NTEP, RCH, UIP)", "Nutrition & demography", "Vaccines & cold chain"],
    resource: "Marrow (Dr Vivek Jain) — non-negotiable for FMGE"
  },

  // === CLINICAL — MAJORS ===
  {
    name: "Medicine",
    phase: "Clinical (Major)",
    weightage: 33,
    difficulty: 5,
    volume: 5,
    scoring: 5,
    hoursFirstRead: 160,
    hoursRevision: 55,
    whyHard: "Vastest subject. Integrates path, pharma, micro. Highest single-subject weightage.",
    highYield: ["Infectious diseases", "Cardiology (IHD, HF, arrhythmia)", "Endocrinology (DM, thyroid)", "Nephrology (AKI, CKD, GN)", "Hematology", "Rheumatology", "Neurology (stroke, epilepsy)"],
    resource: "Marrow (Dr Deepak Marwah / Dr Mukul Bhatia)"
  },
  {
    name: "Surgery",
    phase: "Clinical (Major)",
    weightage: 28,
    difficulty: 4,
    volume: 5,
    scoring: 4,
    hoursFirstRead: 130,
    hoursRevision: 45,
    whyHard: "Wide — GI, breast, thyroid, urology, vascular, trauma. Image-based Qs increasing.",
    highYield: ["GI surgery (CA stomach, colon, pancreas)", "Breast lumps", "Thyroid", "Hernia", "Trauma & shock", "Burns"],
    resource: "Marrow (Dr Rajamahendran / Dr Pritesh Singh)"
  },
  {
    name: "Obstetrics & Gynecology",
    phase: "Clinical (Major)",
    weightage: 28,
    difficulty: 4,
    volume: 5,
    scoring: 5,
    hoursFirstRead: 130,
    hoursRevision: 45,
    whyHard: "Two subjects in one. High-yield + scoring if done right.",
    highYield: ["Normal & abnormal labor", "PPH & APH", "Pre-eclampsia", "Contraception", "PCOS, fibroid, endometriosis", "CA cervix & screening"],
    resource: "Marrow (Dr Sakshi Arora Hans)"
  },
  {
    name: "Pediatrics",
    phase: "Clinical (Major)",
    weightage: 18,
    difficulty: 3,
    volume: 4,
    scoring: 5,
    hoursFirstRead: 85,
    hoursRevision: 28,
    whyHard: "Doable but lots of milestones, vaccines (overlap PSM), nutrition.",
    highYield: ["Neonatology (NRP, jaundice, sepsis)", "Immunization schedule", "Growth & development", "IMNCI", "Pediatric infections"],
    resource: "Marrow (Dr Meenakshi Bothra / Dr Praveen Kumar)"
  },

  // === CLINICAL — SHORTS ===
  {
    name: "Ophthalmology",
    phase: "Clinical (Short)",
    weightage: 11,
    difficulty: 3,
    volume: 3,
    scoring: 5,
    hoursFirstRead: 50,
    hoursRevision: 18,
    whyHard: "Image-heavy. Scoring once visual concepts click.",
    highYield: ["Cataract", "Glaucoma", "Retinal detachment & diabetic retinopathy", "Refractive errors", "Red eye DDx"],
    resource: "Marrow (Dr Ruchi Rai)"
  },
  {
    name: "ENT",
    phase: "Clinical (Short)",
    weightage: 11,
    difficulty: 3,
    volume: 3,
    scoring: 5,
    hoursFirstRead: 50,
    hoursRevision: 18,
    whyHard: "Anatomy-dependent. Otology is tricky.",
    highYield: ["CSOM & otitis media", "Hearing loss & audiometry", "Sinusitis", "CA larynx", "Vertigo DDx"],
    resource: "Marrow (Dr Manisha Budhiraja)"
  },
  {
    name: "Orthopedics",
    phase: "Clinical (Short)",
    weightage: 7,
    difficulty: 3,
    volume: 3,
    scoring: 4,
    hoursFirstRead: 35,
    hoursRevision: 12,
    whyHard: "Fracture patterns, named injuries, image-based.",
    highYield: ["Common fractures (Colles, scaphoid, NOF)", "Bone tumors", "Spine (TB, disc prolapse)", "Pediatric ortho (DDH, Perthes)"],
    resource: "Marrow (Dr Apurv Mehra)"
  },
  {
    name: "Anesthesia",
    phase: "Clinical (Short)",
    weightage: 5,
    difficulty: 2,
    volume: 2,
    scoring: 5,
    hoursFirstRead: 22,
    hoursRevision: 8,
    whyHard: "Small, formula-heavy. Easy marks.",
    highYield: ["LA toxicity & doses", "Inhalational agents (MAC)", "Airway management", "ASA grading", "Muscle relaxants"],
    resource: "Marrow (Dr Sajan Narayanan)"
  },
  {
    name: "Radiology",
    phase: "Clinical (Short)",
    weightage: 6,
    difficulty: 3,
    volume: 2,
    scoring: 5,
    hoursFirstRead: 25,
    hoursRevision: 10,
    whyHard: "Image identification — pattern recognition required.",
    highYield: ["CXR patterns", "CT brain (stroke, bleed)", "Contrast agents", "USG basics", "Classic radiological signs"],
    resource: "Marrow (Dr Rajat Jangir)"
  },
  {
    name: "Dermatology",
    phase: "Clinical (Short)",
    weightage: 5,
    difficulty: 2,
    volume: 2,
    scoring: 5,
    hoursFirstRead: 22,
    hoursRevision: 8,
    whyHard: "Image-based recognition. Small, scoring.",
    highYield: ["Psoriasis", "Lichen planus", "Vesiculobullous (pemphigus/pemphigoid)", "STDs", "Leprosy"],
    resource: "Marrow (Dr Saurabh Aggarwal)"
  },
  {
    name: "Psychiatry",
    phase: "Clinical (Short)",
    weightage: 5,
    difficulty: 2,
    volume: 2,
    scoring: 5,
    hoursFirstRead: 22,
    hoursRevision: 8,
    whyHard: "DSM-5 criteria, drugs. Easy if read once.",
    highYield: ["Schizophrenia", "Mood disorders", "Anxiety disorders", "Substance use", "Antipsychotics & antidepressants"],
    resource: "Marrow (Dr Praveen Tripathi)"
  }
];

// === RESOURCE COMPARISON ===
const RESOURCES = [
  {
    name: "Marrow",
    bestFor: "FMGE (#1 choice)",
    pros: ["Most FMGE-focused content", "Best Q-bank with FMGE filter", "Excellent video quality", "Strong revision modules (M-Ready)", "Top faculty for almost every subject"],
    cons: ["Premium pricing", "Heavy app — needs good device"],
    verdict: "RECOMMENDED. ~75% of FMGE toppers use Marrow as primary."
  },
  {
    name: "PrepLadder",
    bestFor: "NEET-PG focused, also good for FMGE",
    pros: ["Strong notes (V-notes)", "Good faculty for Surgery, OBGY", "Clean UI"],
    cons: ["Less FMGE-specific filter", "Q-bank smaller for FMGE"],
    verdict: "Good secondary / alternative. Pick if you prefer notes-style learning."
  },
  {
    name: "DAMS",
    bestFor: "Classroom + book learners",
    pros: ["Established brand", "Good printed material", "Test series"],
    cons: ["Less updated digital content", "Slower pace"],
    verdict: "Use only if you already have DAMS material. Not first choice today."
  },
  {
    name: "eGurukul / DBMCI",
    bestFor: "Budget option",
    pros: ["Cheaper", "Decent faculty"],
    cons: ["Less polished", "Smaller community"],
    verdict: "Backup option if budget is tight."
  }
];

// === STUDY HOUR RECOMMENDATION ===
const HOUR_RECOMMENDATION = {
  status: "Final year MBBS · Starting fresh · 13 months to FMGE June 2027",
  weekdayHours: 8,
  weekendHours: 10,
  breakdown: [
    { activity: "Video lectures (1.5x speed)", hours: 3.0 },
    { activity: "Note-making / annotation", hours: 1.5 },
    { activity: "Q-bank MCQs (topic-wise)", hours: 2.0 },
    { activity: "Active revision (yesterday + last week)", hours: 1.0 },
    { activity: "Buffer / mistakes review", hours: 0.5 }
  ],
  weeklyOff: "Sunday evening OFF (mental health > marathon)",
  note: "Total ≈ 56 hrs/week × 52 weeks ≈ 2900 hrs over 13 months — enough to cover everything 1× + 2 revisions + tests."
};

// === 13-MONTH ROADMAP ===
const ROADMAP = [
  {
    phase: "Phase 1 — Foundation",
    months: "Month 1–2 (Jun–Jul 2026)",
    goal: "Pre-clinical + lightweight para-clinical. Build study habit.",
    subjects: ["Anatomy", "Physiology", "Biochemistry", "Forensic Medicine"],
    deliverable: "Anatomy + Physio + Biochem + FMT done 1×. Subject-wise tests scored."
  },
  {
    phase: "Phase 2 — Para-clinical Core",
    months: "Month 3–5 (Aug–Oct 2026)",
    goal: "The 'big 3' of para-clinical — heaviest hitters of FMGE.",
    subjects: ["Pathology", "Pharmacology", "Microbiology"],
    deliverable: "Patho/Pharma/Micro done 1×. Grand test #1 (covers Phase 1+2)."
  },
  {
    phase: "Phase 3 — PSM + Clinical Shorts",
    months: "Month 6–7 (Nov–Dec 2026)",
    goal: "PSM (highest weightage!) + knock out short subjects.",
    subjects: ["PSM", "Ophthalmology", "ENT", "Dermatology", "Psychiatry"],
    deliverable: "PSM done 1× + all shorts done. Grand test #2."
  },
  {
    phase: "Phase 4 — Clinical Majors",
    months: "Month 8–10 (Jan–Mar 2027)",
    goal: "Medicine, Surgery, OBGY, Pediatrics + remaining shorts.",
    subjects: ["Medicine", "Surgery", "Obstetrics & Gynecology", "Pediatrics", "Orthopedics", "Anesthesia", "Radiology"],
    deliverable: "All clinicals done 1×. Full syllabus = COMPLETE. Grand test #3."
  },
  {
    phase: "Phase 5 — Revision 1 (Fast)",
    months: "Month 11 (Apr 2027)",
    goal: "Speed revision via M-Ready / Rapid Revision videos + flashcards.",
    subjects: ["ALL subjects — quick pass"],
    deliverable: "Every subject revised once. Weekly grand tests."
  },
  {
    phase: "Phase 6 — Revision 2 + Tests",
    months: "Month 12 (May 2027)",
    goal: "Deep revision of weak areas + full-length test marathon.",
    subjects: ["Weak subjects deep-dive", "PYQs last 10 years"],
    deliverable: "≥15 full-length mocks done. Score consistently 180+/300."
  },
  {
    phase: "Phase 7 — Final Sprint",
    months: "Month 13 (Jun 2027, last 2 weeks)",
    goal: "PYQs only + image-based Qs + one-liners. NO new topics.",
    subjects: ["PYQs", "High-yield one-liners", "Image bank"],
    deliverable: "EXAM. Pass with confidence."
  }
];

// === SAMPLE DAILY SCHEDULE ===
const DAILY_SCHEDULE = [
  { time: "06:30 – 07:00", task: "Wake up, freshen, light breakfast" },
  { time: "07:00 – 09:00", task: "🎥 New topic videos (Slot 1) — Major subject" },
  { time: "09:00 – 09:30", task: "Break + breakfast" },
  { time: "09:30 – 11:30", task: "📝 Notes / annotation on Slot 1 topic" },
  { time: "11:30 – 12:30", task: "❓ MCQs on Slot 1 topic (Marrow Q-bank)" },
  { time: "12:30 – 14:00", task: "Lunch + nap (30 min max)" },
  { time: "14:00 – 16:00", task: "🎥 New topic videos (Slot 2) — Secondary subject" },
  { time: "16:00 – 16:30", task: "Tea break / walk" },
  { time: "16:30 – 18:00", task: "📝 Notes + MCQs on Slot 2" },
  { time: "18:00 – 19:00", task: "🔁 ACTIVE REVISION: yesterday + last 7 days" },
  { time: "19:00 – 20:00", task: "Dinner + family time" },
  { time: "20:00 – 21:30", task: "❓ Mixed MCQ session + mistakes review" },
  { time: "21:30 – 22:00", task: "Plan tomorrow + light reading" },
  { time: "22:00 – 06:30", task: "💤 Sleep (8 hrs — non-negotiable)" }
];

// === TOP TIPS ===
const TIPS = [
  "🎯 PASS MARK = 150/300 (50%). You don't need 250 — aim 180+ for safety.",
  "📊 PSM + Medicine + Surgery + OBGY = ~120 Qs (40% of paper). Master these.",
  "🔁 Revision > new content. Plan 3 revisions before exam day.",
  "📱 Use Marrow Q-bank with FMGE filter — 8000+ FMGE-style Qs.",
  "🖼️ FMGE has 30–40 image-based Qs. Build an image bank from Day 1.",
  "📚 Solve last 10 years PYQs in last month — 25–30% Qs repeat in theme.",
  "😴 Sleep 7–8 hrs. Sleep-deprived study = 50% efficiency wasted.",
  "🏃 30 min exercise daily — protects against burnout over 13 months.",
  "👥 Find 1 study partner for accountability, not group study.",
  "📅 Take 1 grand test every 2 weeks from Month 3 onwards."
];

// === FREE RESOURCES (zero cost — start here if budget is tight) ===
const FREE_RESOURCES = [
  {
    category: "📺 YouTube — Full Subject Lectures",
    items: [
      { name: "Dr Najeeb Lectures (free playlist on YT)", note: "Best for Physiology, Pathology basics. Slow but conceptual." },
      { name: "Armando Hasudungan", note: "Animated whiteboard — Physiology, Pharmacology, Microbiology. World-class." },
      { name: "Osmosis (free videos)", note: "Short, visual disease videos. Great for clinical subjects." },
      { name: "Ninja Nerd", note: "Deep dives in Pathology, Medicine, Pharmacology. Long but gold." },
      { name: "Speed Pharmacology", note: "Quick pharmacology revision videos." },
      { name: "MedCram", note: "Pulmonary, ECG, ID — concise clinical clips." }
    ]
  },
  {
    category: "📺 YouTube — FMGE-Specific Channels (Hindi/English)",
    items: [
      { name: "Marrow YouTube (free videos)", note: "Free FMGE strategy, topper interviews, sample lectures." },
      { name: "PrepLadder YouTube", note: "Free FMGE marathons, last-minute revision videos." },
      { name: "Dr Bhatia (DBMCI) YouTube", note: "Free recall sessions, image-based Qs." },
      { name: "Cerebellum Academy", note: "FMGE-focused free content, NEXT prep." },
      { name: "FMGE Coach (various)", note: "Search 'FMGE rapid revision' — many free 3-hr marathons before each exam." }
    ]
  },
  {
    category: "📱 Free Apps & Q-Banks",
    items: [
      { name: "Anki (free)", note: "Spaced-repetition flashcards. Download AnkiMobile decks for FMGE/USMLE Step 1." },
      { name: "Pre-made decks: AnKing, Pepper Pharm, Lightyear", note: "Free community decks covering 80% of FMGE syllabus." },
      { name: "Marrow Free Trial", note: "First 7 days free — sample lectures across subjects." },
      { name: "Daily Rounds / Plexus MD", note: "Free clinical Qs, case discussions, FMGE updates." },
      { name: "Practo / 1mg drug app", note: "Free for verifying drug doses, brand names — quick pharma reference." }
    ]
  },
  {
    category: "📄 Free PYQs & Question Papers",
    items: [
      { name: "NMC website (nmc.org.in)", note: "Official FMGE past papers — download PDFs from 2019 onwards." },
      { name: "r/FMGE & r/IndianMedSchool (Reddit)", note: "Community PYQ dumps, recall papers, recent exam discussions." },
      { name: "Telegram FMGE channels", note: "Daily MCQs, recall papers, free notes PDFs. Search '@FMGE'." },
      { name: "Google Drive shared folders", note: "Search '<subject> FMGE notes pdf drive' — community has shared 100s of PDFs." }
    ]
  },
  {
    category: "📚 Free Textbooks & Notes",
    items: [
      { name: "Park's PSM (digital library)", note: "PSM bible. Borrow from college library — free." },
      { name: "Robbins Basic Pathology (library copy)", note: "Reference, not for daily read." },
      { name: "Free WHO/MoHFW PDFs", note: "Latest National Health Program guidelines — free, official, HIGH-YIELD for PSM." },
      { name: "OpenStax Anatomy & Physiology (free)", note: "Free college-level textbook PDF." },
      { name: "AMBOSS free articles", note: "Some clinical articles open without subscription." }
    ]
  },
  {
    category: "🛠️ Free Study Tools",
    items: [
      { name: "Notion (free)", note: "Build your own digital notes + revision tracker." },
      { name: "Obsidian (free)", note: "Markdown notes + linking. Great for building a 'second brain'." },
      { name: "Forest / Pomofocus.io (free)", note: "Pomodoro timer — 25 min focus + 5 min break." },
      { name: "Google Calendar", note: "Block study slots. Free, syncs across devices." },
      { name: "ChatGPT / Gemini (free tier)", note: "Explain hard concepts in your language. Ask 'explain MOA of beta-blockers like I'm 12'." }
    ]
  }
];

// === SMART STUDY TECHNIQUES (evidence-based learning) ===
const SMART_STUDY = [
  {
    name: "Active Recall",
    why: "10× more effective than re-reading. Forces brain to retrieve = strengthens memory.",
    how: "After every lecture, close the notes. Write/say everything you remember. Then check.",
    when: "End of every study slot.",
    tools: "Anki, blank paper, voice-record yourself explaining."
  },
  {
    name: "Spaced Repetition",
    why: "Reviews timed at the edge of forgetting → long-term retention without re-reading whole chapter.",
    how: "Review at intervals: Day 1 → Day 2 → Day 7 → Day 21 → Day 60. Anki automates this.",
    when: "First 30 min of every day = yesterday's recall + Anki due cards.",
    tools: "Anki (best), Quizlet, or a manual revision log."
  },
  {
    name: "Feynman Technique",
    why: "If you can teach it simply, you understand it. Exposes gaps fast.",
    how: "Pick a topic → explain it OUT LOUD to an imaginary 12-year-old → spot what you can't explain → re-study that.",
    when: "Use for hard topics (RAAS, cardiac cycle, hepatitis serology).",
    tools: "Whiteboard, mirror, study partner, or your phone's voice recorder."
  },
  {
    name: "Interleaving",
    why: "Mixing topics in one session beats blocking. Brain learns to discriminate similar concepts.",
    how: "In MCQ practice, mix subjects (Patho + Pharma + Micro Qs together) instead of 100 Patho Qs in a row.",
    when: "Q-bank evening sessions, especially after Phase 3.",
    tools: "Marrow custom test mode (select 4 subjects, 50 Qs each)."
  },
  {
    name: "Pomodoro (Focus Sprints)",
    why: "Brain can't focus for 4 hrs straight. 25-min sprints + 5-min breaks sustain quality for 8+ hrs.",
    how: "25 min focused study → 5 min break (stand, water, eyes off screen) → repeat 4 times → 20 min long break.",
    when: "Every study slot.",
    tools: "Forest app, Pomofocus.io, kitchen timer."
  },
  {
    name: "Mind Mapping",
    why: "Visual + spatial memory channels. Lasts longer than linear notes.",
    how: "Center topic (e.g. 'Anemia') → branches (microcytic, macrocytic, normocytic) → sub-branches (causes, labs, Rx).",
    when: "End of every chapter, on one A4 page.",
    tools: "Plain paper + colored pens. Apps: XMind, Whimsical (free)."
  },
  {
    name: "Image / Pattern Drilling",
    why: "FMGE has 30–40 image MCQs (X-ray, CT, derma, ophth, gross specimen).",
    how: "Build a personal image folder per subject. Every image you see in lectures → save → review weekly.",
    when: "1 dedicated 'image review' session every Sunday.",
    tools: "Phone gallery album per subject, or Notion image database."
  },
  {
    name: "PYQ-First Approach",
    why: "25–30% of FMGE Qs repeat themes from past 10 yrs. PYQs show what NMC actually values.",
    how: "Before starting a topic, scan PYQs on that topic. Study with those Qs as a filter — go deep on what's tested, skim what isn't.",
    when: "Before opening every new chapter.",
    tools: "Marrow PYQ filter, free NMC papers, Telegram PYQ dumps."
  },
  {
    name: "Mistakes Journal",
    why: "Your wrong answers are gold — they show YOUR specific gaps. Most students never revisit them.",
    how: "After every MCQ session, screenshot/log every wrong + 'lucky correct' Q. Review the journal every Saturday.",
    when: "Daily logging + Saturday review.",
    tools: "Marrow bookmark + notes feature, or a dedicated Notion page."
  },
  {
    name: "Sleep-Driven Consolidation",
    why: "Memory consolidates during deep sleep. Sleeping <7 hrs literally erases what you studied.",
    how: "Hard cut-off at 22:00. No screens 30 min before bed. 7–8 hrs minimum.",
    when: "Every single night. Non-negotiable.",
    tools: "f.lux / Night Shift, Do Not Disturb, paper book before sleep."
  }
];

// === DAILY ROUTINE — HOUR-BY-HOUR SMART CYCLE ===
const SMART_DAILY_CYCLE = {
  intro: "This is the daily 'engine' — same template every day, content changes per phase. It bakes in active recall + spaced repetition + Pomodoro automatically.",
  blocks: [
    { time: "06:30", icon: "☀️", title: "Wake + Hydrate", detail: "500 ml water. No phone for 15 min. Quick stretch.", smart: "Cortisol peak — best time for hard concepts later." },
    { time: "07:00", icon: "🔁", title: "Recall Sprint (30 min)", detail: "Open Anki — clear yesterday's due cards. Then close notes, write down everything from yesterday's lectures on a blank page.", smart: "Active Recall + Spaced Repetition" },
    { time: "07:30", icon: "🍳", title: "Breakfast (30 min)", detail: "Protein + carbs. NO phone scrolling. Listen to a 1.5x lecture audio if you want.", smart: "Passive learning bonus." },
    { time: "08:00", icon: "🎥", title: "STUDY SLOT 1 — New Topic A (2 hrs)", detail: "Major subject of current phase. 4 Pomodoros: 25 min video → 5 min break × 4. After each video, write a 3-line summary.", smart: "Pomodoro + Active Recall" },
    { time: "10:00", icon: "☕", title: "Break (30 min)", detail: "Walk outside, eyes far. Snack + water.", smart: "Eye rest = sustains focus all day." },
    { time: "10:30", icon: "📝", title: "Note + MCQ on Slot 1 (1.5 hrs)", detail: "Make 1-page mind map of Slot 1. Then 25 MCQs (topic-wise) from Marrow/PYQs. Log mistakes.", smart: "Mind Map + Mistakes Journal" },
    { time: "12:00", icon: "🍱", title: "Lunch + Power Nap (1.5 hrs)", detail: "30 min eat, 20 min walk, 30 min nap (max!). Set 2 alarms.", smart: "Nap consolidates morning learning." },
    { time: "13:30", icon: "🎥", title: "STUDY SLOT 2 — New Topic B (2 hrs)", detail: "Secondary subject of phase. Same Pomodoro structure.", smart: "Interleaving — different subject keeps brain fresh." },
    { time: "15:30", icon: "🍵", title: "Break (15 min)", detail: "Tea, eyes off screen, light music.", smart: "" },
    { time: "15:45", icon: "📝", title: "Note + MCQ on Slot 2 (1.25 hrs)", detail: "Mind map + 25 MCQs.", smart: "" },
    { time: "17:00", icon: "🚶", title: "Walk / Exercise (45 min)", detail: "30 min brisk walk OR home workout. Listen to recall audio or podcast.", smart: "BDNF boost = better memory." },
    { time: "17:45", icon: "🔁", title: "Spaced Revision (1 hr)", detail: "Revisit topics from: Day 2 ago, Day 7 ago, Day 21 ago. Just headings + mind maps.", smart: "Spaced Repetition — the secret weapon." },
    { time: "18:45", icon: "🍽️", title: "Dinner + Family (1 hr)", detail: "Real break. No study talk.", smart: "Mental reset prevents burnout." },
    { time: "19:45", icon: "❓", title: "Mixed MCQ Session (1.5 hrs)", detail: "75 mixed-subject MCQs (interleaved). Time yourself (60 sec/Q). Review every wrong answer in detail.", smart: "Interleaving + Mistakes Journal" },
    { time: "21:15", icon: "✍️", title: "Feynman Slot (30 min)", detail: "Pick 1 hard topic from today → explain it OUT LOUD to imaginary student → catch gaps.", smart: "Feynman Technique" },
    { time: "21:45", icon: "📋", title: "Plan Tomorrow (15 min)", detail: "Write 3 specific tasks for tomorrow. Set out books/tabs ready.", smart: "Reduces decision fatigue in AM." },
    { time: "22:00", icon: "💤", title: "Sleep (8.5 hrs)", detail: "No screen. Light reading or breathing. Lights out by 22:30.", smart: "Sleep = where memory is actually stored." }
  ],
  totals: "Total focused study ≈ 8 hrs · Recall/Revision ≈ 1.5 hrs · MCQs ≈ 3 hrs · Sleep 8 hrs · Exercise 45 min"
};

// === WEEKLY RHYTHM ===
const WEEKLY_RHYTHM = [
  { day: "Mon", focus: "New topics — Major subject of phase (Slot 1) + Secondary (Slot 2)", note: "Full 8 hrs. Set the week's tone." },
  { day: "Tue", focus: "New topics continue + first revision of Monday's content", note: "Same structure as Mon." },
  { day: "Wed", focus: "New topics + MCQ-heavy day (100+ Qs)", note: "Identify weak topics by Wed evening." },
  { day: "Thu", focus: "New topics + revisit Wed's weak topics", note: "Adjust pace if behind schedule." },
  { day: "Fri", focus: "New topics + chapter-end mini-tests for the week's topics", note: "30-Q subject test per slot." },
  { day: "Sat", focus: "NO new topics. FULL DAY revision of the entire week + Mistakes Journal review", note: "This is what 90% of students skip — and why they fail." },
  { day: "Sun", focus: "Morning: 1 Grand Test (3 hrs) → Afternoon: review every wrong Q → Evening: OFF", note: "Mental health day. Family/hobby/sleep." }
];

// === PHASE 1 — DETAILED WEEK-BY-WEEK (Month 1–2: Foundation) ===
const PHASE1_WEEKS = [
  {
    week: "Week 1",
    dates: "Jun 1–7, 2026",
    slot1: "Anatomy — Upper Limb (osteology, brachial plexus, axilla)",
    slot2: "Physiology — General + Body fluids",
    extras: "Setup Anki, Marrow account, study desk. 50 MCQs/day.",
    weekendTest: "Anatomy Upper Limb (50 Qs)"
  },
  {
    week: "Week 2",
    dates: "Jun 8–14",
    slot1: "Anatomy — Lower Limb + Thorax wall",
    slot2: "Physiology — Nerve-Muscle physiology",
    extras: "First Anki review cycle begins. 75 MCQs/day.",
    weekendTest: "Lower Limb + Nerve-Muscle (50 Qs)"
  },
  {
    week: "Week 3",
    dates: "Jun 15–21",
    slot1: "Anatomy — Abdomen + Pelvis",
    slot2: "Physiology — CVS",
    extras: "Mind map every chapter. 75 MCQs/day.",
    weekendTest: "Abdomen + CVS (50 Qs)"
  },
  {
    week: "Week 4",
    dates: "Jun 22–28",
    slot1: "Anatomy — Head & Neck + Embryology",
    slot2: "Physiology — Respiratory",
    extras: "Embryology — make a flowchart per system.",
    weekendTest: "H&N + Embryo + Respi (75 Qs)"
  },
  {
    week: "Week 5",
    dates: "Jun 29 – Jul 5",
    slot1: "Anatomy — Neuroanatomy + Histology (finish Anatomy!)",
    slot2: "Physiology — Renal + GIT",
    extras: "Anatomy DONE 1×. Celebrate small win.",
    weekendTest: "Neuroanatomy + Renal (75 Qs)"
  },
  {
    week: "Week 6",
    dates: "Jul 6–12",
    slot1: "Biochemistry — Carbs + Lipids + Proteins metabolism",
    slot2: "Physiology — Endocrine + Reproduction (finish Physio!)",
    extras: "Physio DONE 1×. 100 MCQs/day from this week.",
    weekendTest: "Metabolism + Endocrine (75 Qs)"
  },
  {
    week: "Week 7",
    dates: "Jul 13–19",
    slot1: "Biochemistry — Vitamins, Enzymes, Molecular biology",
    slot2: "Forensic Medicine — IPC, asphyxia, wounds (start FMT)",
    extras: "Biochem mnemonic sheets — pin to wall.",
    weekendTest: "Vitamins + Forensic basics (75 Qs)"
  },
  {
    week: "Week 8",
    dates: "Jul 20–26",
    slot1: "Biochemistry — IEM + Clinical biochem (finish Biochem!)",
    slot2: "Forensic Medicine — Toxicology + Identification (finish FMT!)",
    extras: "Phase 1 COMPLETE. Take Grand Test #1 (Phase 1 subjects).",
    weekendTest: "GRAND TEST #1 (200 Qs, 3 hrs)"
  }
];

// === HIGH-LEVEL WEEKLY OUTLINE — Phases 2 to 7 ===
const PHASE_OUTLINES = [
  {
    phase: "Phase 2 — Para-clinical Core (Aug–Oct 2026, 12 weeks)",
    weeks: [
      "Wk 1–5: Pathology (General → Hematology → Systemic)",
      "Wk 6–9: Pharmacology (General → ANS → Antimicrobials → CVS → Special)",
      "Wk 10–12: Microbiology (Immuno → Bacteriology → Virology → Parasitology)",
      "Every Sunday: Grand Test rotating subjects. Wk 12 end: GT #2."
    ]
  },
  {
    phase: "Phase 3 — PSM + Shorts (Nov–Dec 2026, 8 weeks)",
    weeks: [
      "Wk 1–4: PSM (Park's structure: Biostats → Epidemiology → Communicable → NCD → National Programs → Nutrition → MCH)",
      "Wk 5: Ophthalmology (full subject)",
      "Wk 6: ENT (full subject)",
      "Wk 7: Dermatology + Psychiatry",
      "Wk 8: Revision + GT #3"
    ]
  },
  {
    phase: "Phase 4 — Clinical Majors (Jan–Mar 2027, 12 weeks)",
    weeks: [
      "Wk 1–4: Medicine (ID → Cardio → Endo → Nephro → Heme → Rheum → Neuro)",
      "Wk 5–8: Surgery (GI → Breast → Thyroid → Hernia → Vascular → Trauma → Urology)",
      "Wk 9–10: OBGY (Obs first, then Gyne)",
      "Wk 11: Pediatrics",
      "Wk 12: Ortho + Anesthesia + Radiology + GT #4 (FULL SYLLABUS)"
    ]
  },
  {
    phase: "Phase 5 — Revision 1 / Fast Pass (Apr 2027, 4 weeks)",
    weeks: [
      "Wk 1: Pre-clinical + Para-clinical via M-Ready / Rapid Revision videos",
      "Wk 2: PSM + Shorts rapid",
      "Wk 3: Clinical Majors rapid",
      "Wk 4: Full mocks (2× full-length, 3-hr each) + analysis"
    ]
  },
  {
    phase: "Phase 6 — Revision 2 + Test Series (May 2027, 4 weeks)",
    weeks: [
      "Wk 1–3: Weak subjects deep dive + PYQs last 10 yrs subject-wise",
      "Wk 4: 4× full-length mocks (one every other day) + detailed analysis",
      "Score target: consistently 180+/300."
    ]
  },
  {
    phase: "Phase 7 — Final Sprint (1st 2 weeks of Jun 2027)",
    weeks: [
      "Days 1–10: PYQs only (last 5 yrs intensive) + one-liners + image bank",
      "Days 11–13: Light revision. Sleep early. No new topics.",
      "Exam Day: Pass with confidence. ✅"
    ]
  }
];

