export const RESOURCES = [
  { name: "Marrow", bestFor: "FMGE (#1 choice)", pros: ["Most FMGE-focused content", "Best Q-bank with FMGE filter", "Excellent video quality", "Strong M-Ready revision modules", "Top faculty for almost every subject"], cons: ["Premium pricing", "Heavy app — needs good device"], verdict: "RECOMMENDED. ~75% of FMGE toppers use Marrow as primary." },
  { name: "PrepLadder", bestFor: "NEET-PG focused, also good for FMGE", pros: ["Strong notes (V-notes)", "Good faculty for Surgery, OBGY", "Clean UI"], cons: ["Less FMGE-specific filter", "Q-bank smaller for FMGE"], verdict: "Good secondary / alternative. Pick if you prefer notes-style learning." },
  { name: "DAMS", bestFor: "Classroom + book learners", pros: ["Established brand", "Good printed material", "Test series"], cons: ["Less updated digital content", "Slower pace"], verdict: "Use only if you already have DAMS material." },
  { name: "eGurukul / DBMCI", bestFor: "Budget option", pros: ["Cheaper", "Decent faculty"], cons: ["Less polished", "Smaller community"], verdict: "Backup option if budget is tight." },
];

export const FREE_RESOURCES = [
  {
    category: "📺 YouTube — Full Subject Lectures",
    items: [
      { name: "Dr Najeeb Lectures", note: "Best for Physiology, Pathology basics. Slow but conceptual.", url: "https://www.youtube.com/@DoctorNajeeb" },
      { name: "Armando Hasudungan", note: "Animated whiteboard — Physiology, Pharmacology, Microbiology.", url: "https://www.youtube.com/@armandohasudungan" },
      { name: "Osmosis", note: "Short, visual disease videos. Great for clinical subjects.", url: "https://www.youtube.com/@osmosis" },
      { name: "Ninja Nerd", note: "Deep dives in Pathology, Medicine, Pharmacology.", url: "https://www.youtube.com/@NinjaNerdOfficial" },
      { name: "Speed Pharmacology", note: "Quick pharmacology revision videos.", url: "https://www.youtube.com/@SpeedPharmacology" },
      { name: "MedCram", note: "Pulmonary, ECG, ID — concise clinical clips.", url: "https://www.youtube.com/@Medcram" },
    ],
  },
  {
    category: "📺 YouTube — FMGE-Specific Channels",
    items: [
      { name: "Marrow YouTube (free videos)", note: "FMGE strategy, topper interviews, sample lectures.", url: "https://www.youtube.com/@MarrowFMGE" },
      { name: "PrepLadder YouTube", note: "Free FMGE marathons, last-minute revision.", url: "https://www.youtube.com/@PrepLadder" },
      { name: "Dr Bhatia DBMCI", note: "Free recall sessions, image-based Qs.", url: "https://www.youtube.com/@DrBhatiaDBMCI" },
      { name: "Cerebellum Academy", note: "FMGE-focused free content, NEXT prep.", url: "https://www.youtube.com/@CerebellumAcademy" },
    ],
  },
  {
    category: "📱 Free Apps & Q-Banks",
    items: [
      { name: "Anki", note: "Spaced-repetition flashcards. Download AnKing FMGE/Step 1 decks.", url: "https://apps.ankiweb.net/" },
      { name: "AnKing Decks", note: "Free community decks covering 80% of FMGE syllabus.", url: "https://www.ankingmed.com/" },
      { name: "Marrow Free Trial", note: "First 7 days free — sample lectures across subjects.", url: "https://www.marrow.com/" },
      { name: "Daily Rounds", note: "Free clinical Qs, case discussions, FMGE updates.", url: "https://www.dailyrounds.org/" },
    ],
  },
  {
    category: "📄 Free PYQs & Question Papers",
    items: [
      { name: "NMC Official Site", note: "Official FMGE past papers — PDFs from 2019 onwards.", url: "https://www.nmc.org.in/" },
      { name: "r/FMGE (Reddit)", note: "Community PYQ dumps, recall papers.", url: "https://www.reddit.com/r/FMGE/" },
      { name: "Telegram FMGE channels", note: "Daily MCQs, recall papers, free notes PDFs. Search '@FMGE'.", url: "https://telegram.org/" },
    ],
  },
  {
    category: "📚 Free Textbooks & Notes",
    items: [
      { name: "Park's PSM", note: "PSM bible. Borrow college library copy.", url: "" },
      { name: "WHO / MoHFW PDFs", note: "Latest National Health Program guidelines — HIGH-YIELD for PSM.", url: "https://www.mohfw.gov.in/" },
      { name: "OpenStax Anatomy & Physiology", note: "Free college-level textbook PDF.", url: "https://openstax.org/details/books/anatomy-and-physiology" },
      { name: "AMBOSS free articles", note: "Some clinical articles open without subscription.", url: "https://www.amboss.com/us/knowledge" },
    ],
  },
  {
    category: "🛠️ Free Study Tools",
    items: [
      { name: "Notion", note: "Build your own digital notes + revision tracker.", url: "https://www.notion.so/" },
      { name: "Obsidian", note: "Markdown notes + linking. Build a 'second brain'.", url: "https://obsidian.md/" },
      { name: "Pomofocus", note: "Pomodoro timer — 25 min focus + 5 min break.", url: "https://pomofocus.io/" },
      { name: "Google Calendar", note: "Block study slots. Free, syncs across devices.", url: "https://calendar.google.com/" },
      { name: "ChatGPT / Gemini", note: "Explain hard concepts in your language.", url: "https://chat.openai.com/" },
    ],
  },
];
