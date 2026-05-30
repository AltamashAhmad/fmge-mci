# FMGE Roadmap

React app for FMGE prep — subject analysis, resources, smart-study, day-wise schedule, progress tracker. Deployable to Firebase Hosting.

## Local development

```bash
npm install
npm run dev
```
Opens at http://localhost:5173

## Build & preview

```bash
npm run build
npm run preview
```

## Deploy to Firebase Hosting

**One-time setup:**
1. Create a Firebase project at https://console.firebase.google.com
2. Enable **Hosting** (Build → Hosting → Get started)
3. Install Firebase CLI: `npm install -g firebase-tools`
4. Log in: `firebase login`
5. In `.firebaserc`, replace `REPLACE_WITH_FIREBASE_PROJECT_ID` with your project ID
6. (Optional) Paste your Firebase web config into `src/firebase.js`

**Every deploy:**
```bash
npm run deploy
```
That runs `npm run build` then `firebase deploy`. Your site goes live at `https://<project-id>.web.app`.

## Tracker

Progress data is saved in `localStorage` on each device. To sync across devices later, wire `src/firebase.js` to Firestore and replace `useLocalStorage` calls in `Tracker.jsx`.

## File structure

```
src/
├── App.jsx              # Routes
├── main.jsx             # Entry
├── firebase.js          # Firebase config (placeholder)
├── components/          # Layout, Navbar, Footer, atoms
├── pages/               # One file per route
├── data/                # All FMGE content — edit here
├── hooks/               # useLocalStorage
└── styles/index.css     # Dark UI
```

## Legacy

Original static HTML/CSS/JS version is preserved in `legacy/`. Open `legacy/index.html` directly in a browser for the v1.
