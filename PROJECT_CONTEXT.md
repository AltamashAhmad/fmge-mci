# FMGE MCQ Platform — Project Context & Progress Tracker

> **Live site**: https://fmge-d0ab3.web.app  
> **Firebase project**: fmge-d0ab3  
> **Deploy**: `cd /Users/altamashahmad/Desktop/Mci && npm run build && firebase deploy --only hosting`  
> **Stack**: React 18 + Vite 5 + Firebase 10 + HashRouter + PWA

---

## Architecture Summary

### Auth
- Firebase Auth: Google Sign-In + Email/Password + Guest (anonymous) fallback
- `src/contexts/AuthContext.jsx` — provides `user`, `loading`, `signInGoogle()`, `signInEmail()`, `signUpEmail()`, `signOut()`
- On sign-in: migrates existing localStorage tracker data → Firestore `users/{uid}/tracker`
- Guest mode: scores saved to localStorage only; Firestore on sign-in

### Data Storage
- **Questions**: JS data files in `src/data/questions/` (offline-cached, PWA-friendly, no Firestore costs)
- **Scores / bookmarks / analytics**: Firestore (source of truth), localStorage (offline cache)

### Firestore Schema
```
users/{uid}
  profile:  { name, email, photoURL, provider, createdAt, lastActive }
  stats:    { totalAttempted, totalCorrect, accuracy, currentStreak, longestStreak, lastStudyDate }

users/{uid}/quizSummary/{subjectSlug}
  { accuracy, attempted, bestByTopic: { [topicSlug]: { best, count, lastAttempt } } }

users/{uid}/attempts/{autoId}
  { subject, topic, mode, score, total, pct, ts, timeSpent, answers: [{qId, chosen, correct}] }

users/{uid}/bookmarks/{qId}
  { subjectSlug, topicSlug, savedAt }

users/{uid}/tracker   ← existing tracker data (migrated from localStorage on sign-in)
  { subjectProgress, weeklyDone, phaseDone, studyDays, tasksToday, updatedAt }
```

### Routes
| Path | Component | Status |
|------|-----------|--------|
| `/` | Home | ✅ live |
| `/analysis` | Analysis | ✅ live |
| `/resources` | Resources | ✅ live |
| `/free` | FreeResources | ✅ live |
| `/smart-study` | SmartStudy | ✅ live |
| `/roadmap` | Roadmap | ✅ live |
| `/phase-1` | Phase1 | ✅ live |
| `/daily` | DailyCycle | ✅ live |
| `/tracker` | Tracker | ✅ live |
| `/images` | ImageQs | ✅ live |
| `/tips` | Tips | ✅ live |
| `/auth` | AuthPage | 🔨 building |
| `/quiz` | QuizHub | 🔨 building |
| `/quiz/:subject` | SubjectQuiz | 🔨 building |
| `/quiz/:subject/:topic` | TopicQuiz | 🔨 building |
| `/quiz/:subject/:topic/results` | QuizResults | 🔨 building |
| `/grand-test` | GrandTest | 🔨 building |
| `/analytics` | Analytics | 🔨 building |
| `/scores` | ScoreHistory | 🔨 building |

---

## Question Schema
```js
{
  id: "derm_psoriasis_001",        // subject_topic_nnn
  topic: "psoriasis",              // matches topicSlug in quizSubjects.js
  year: "FMGE Jun 2019",           // PYQ year string OR null
  q: "Question text",
  img: null,                       // wiki slug OR null  (renders via WikiImage)
  options: ["A. ...", "B. ...", "C. ...", "D. ..."],
  answer: 0,                       // index 0–3
  explanation: "Full explanation with teaching point",
  tags: ["PYQ", "high-yield"]
}
```

---

## Key File Paths
```
src/
  main.jsx                         ← entry; wraps AuthProvider
  App.jsx                          ← all routes
  firebase.js                      ← Auth + Firestore exports
  contexts/
    AuthContext.jsx                ← auth state + sign-in methods
  hooks/
    useLocalStorage.js             ← existing
    useInstallPrompt.js            ← existing
    useQuizScore.js                ← NEW: save/load Firestore quiz scores
    useBookmarks.js                ← NEW: Firestore bookmarks
  data/
    subjects.js                    ← 23 FMGE subjects (weightage, high-yield)
    imageQs.js                     ← 19 image subjects + ~470 topics
    quizSubjects.js                ← NEW: 23-subject quiz registry
    questions/
      index.js                     ← re-exports all subject modules
      dermatology.js               ← PILOT ← CONTENT IN PROGRESS
      pathology.js
      medicine.js
      surgery.js
      obgy.js
      psm.js
      pharmacology.js
      microbiology.js
      pediatrics.js
      biochemistry.js
      physiology.js
      anatomy.js
      forensic.js
      ophthalmology.js
      ent.js
      orthopedics.js
      cardiology.js
      hematology.js
      endocrinology.js
      radiology.js
      anesthesia.js
      psychiatry.js
      rheumatology.js
  components/
    Navbar.jsx                     ← restructured: grouped nav + auth avatar
    Layout.jsx
    WikiImage.jsx
    QuizCard.jsx                   ← NEW: reusable question card
    TimerBar.jsx                   ← NEW: 90s animated countdown
    CompletionRing.jsx             ← NEW: SVG circle progress
  pages/
    QuizHub.jsx                    ← NEW: /quiz — 23-subject grid
    SubjectQuiz.jsx                ← NEW: /quiz/:subject
    TopicQuiz.jsx                  ← NEW: /quiz/:subject/:topic
    QuizResults.jsx                ← NEW: /quiz/:subject/:topic/results
    GrandTest.jsx                  ← NEW: /grand-test
    Analytics.jsx                  ← NEW: /analytics
    ScoreHistory.jsx               ← NEW: /scores
    AuthPage.jsx                   ← NEW: /auth
  styles/
    index.css                      ← single global CSS (dark theme)
```

---

## Content Progress Tracker

### 23 FMGE Subjects — Question Bank Status

| # | Subject | Slug | Topics | Questions | Status |
|---|---------|------|--------|-----------|--------|
| 1 | Dermatology | dermatology | 39 | 0 | ⏳ Pilot — next |
| 2 | Pathology | pathology | 30 | 0 | ⏳ Queued |
| 3 | Medicine | medicine | 35 | 0 | ⏳ Queued |
| 4 | Surgery | surgery | 30 | 0 | ⏳ Queued |
| 5 | Obstetrics & Gynecology | obgy | 25 | 0 | ⏳ Queued |
| 6 | PSM / Community Medicine | psm | 20 | 0 | ⏳ Queued |
| 7 | Pharmacology | pharmacology | 25 | 0 | ⏳ Queued |
| 8 | Microbiology | microbiology | 25 | 0 | ⏳ Queued |
| 9 | Pediatrics | pediatrics | 25 | 0 | ⏳ Queued |
| 10 | Biochemistry | biochemistry | 20 | 0 | ⏳ Queued |
| 11 | Physiology | physiology | 20 | 0 | ⏳ Queued |
| 12 | Anatomy | anatomy | 20 | 0 | ⏳ Queued |
| 13 | Forensic Medicine | forensic | 15 | 0 | ⏳ Queued |
| 14 | Ophthalmology | ophthalmology | 34 | 0 | ⏳ Queued |
| 15 | ENT | ent | 27 | 0 | ⏳ Queued |
| 16 | Orthopedics | orthopedics | 25 | 0 | ⏳ Queued |
| 17 | ECG & Cardiology | cardiology | 20 | 0 | ⏳ Queued |
| 18 | Hematology | hematology | 20 | 0 | ⏳ Queued |
| 19 | Endocrinology | endocrinology | 15 | 0 | ⏳ Queued |
| 20 | Radiology / Imaging | radiology | 20 | 0 | ⏳ Queued |
| 21 | Anesthesia | anesthesia | 15 | 0 | ⏳ Queued |
| 22 | Psychiatry | psychiatry | 15 | 0 | ⏳ Queued |
| 23 | Rheumatology | rheumatology | 12 | 0 | ⏳ Queued |

**Total target**: ~500 topics × 15 Qs = ~7,500 questions  
**PYQ coverage**: FMGE June + December 2015–2024 (up to 20 papers)

### How to update this file when a subject is completed:
1. Change status from `⏳ Queued` → `✅ Done`
2. Update Questions count
3. Note any tricky topics or PYQs found

---

## Implementation Phases
- [x] Phase 0: PROJECT_CONTEXT.md created
- [ ] Phase 1: Firebase Auth (firebase.js, AuthContext, AuthPage, main.jsx, Navbar)
- [ ] Phase 2: Data architecture (quizSubjects.js, questions/ folder)
- [ ] Phase 3: Quiz UI components + all pages
- [ ] Phase 4: Score persistence hooks (useQuizScore, useBookmarks)
- [ ] Phase 5: CSS + App.jsx routes + ImageQs MCQ buttons
- [ ] Phase 6: Build clean + deploy
- [ ] Phase 7+: Content filling (Dermatology pilot → all subjects)

---

## Firebase Console Manual Steps (one-time)
1. Go to https://console.firebase.google.com → Project fmge-d0ab3
2. Authentication → Sign-in method → Enable **Google**
3. Authentication → Sign-in method → Enable **Email/Password**
4. Firestore → Rules: Allow read/write for authenticated users + guest reads
