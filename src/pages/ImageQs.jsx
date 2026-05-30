import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import WikiImage from "../components/WikiImage";
import { IMAGE_STATS, IMAGE_SUBJECTS, IMAGE_STRATEGY, RESOURCES_FOR_IMAGES } from "../data/imageQs";
import { getTopicQuestions } from "../data/questions/index";
import { QUIZ_SUBJECTS } from "../data/quizSubjects";

// Map image subject display name → quiz subject slug
function getQuizSubjectSlug(subjectName) {
  const n = subjectName.toLowerCase();
  const found = QUIZ_SUBJECTS.find((s) =>
    n.includes(s.slug.replace(/-/g, " ")) || s.name.toLowerCase().includes(n) || n.includes(s.name.toLowerCase())
  );
  return found ? found.slug : null;
}

// Map topic display name → quiz topic slug (normalize to kebab-case)
function getQuizTopicSlug(topicName) {
  return topicName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

// Pick the best image-search engine per subject
function getImageSearchLinks(topicName, subject) {
  const q = encodeURIComponent(topicName);
  const google = `https://www.google.com/search?tbm=isch&q=${q}`;
  const links = [{ label: "Google", url: google, color: "#4285f4" }];

  const s = subject.toLowerCase();
  if (s.includes("radiology") || s.includes("x-ray") || s.includes("ct") || s.includes("mri") || s.includes("ortho")) {
    links.push({ label: "Radiopaedia", url: `https://radiopaedia.org/search?q=${q}&scope=cases`, color: "#06b6d4" });
  }
  if (s.includes("derm")) {
    links.push({ label: "DermNet", url: `https://dermnetnz.org/search?q=${q}`, color: "#10b981" });
  }
  if (s.includes("path") || s.includes("micro")) {
    links.push({ label: "WebPath", url: `https://www.google.com/search?q=site:webpath.med.utah.edu+${q}`, color: "#f59e0b" });
  }
  return links;
}

export default function ImageQs() {
  const [openSubject, setOpenSubject] = useState(null);

  const totalTopics = IMAGE_SUBJECTS.reduce((s, sub) => s + sub.topics.length, 0);

  return (
    <>
      <PageHeader
        title="🖼️ Image-Based Questions"
        subtitle="30–40 of 200 FMGE Qs are image-based. Master these and you have a guaranteed 15–20% in your pocket."
      />

      {/* Stats banner */}
      <div className="grid grid-4 image-stats">
        <div className="stat-card">
          <div className="stat-num">{IMAGE_STATS.imageQs}</div>
          <div className="stat-label">Image Qs per paper</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{IMAGE_STATS.percentage}</div>
          <div className="stat-label">of total exam</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{IMAGE_SUBJECTS.length}</div>
          <div className="stat-label">Subjects covered</div>
        </div>
        <div className="stat-card">
          <div className="stat-num">{totalTopics}+</div>
          <div className="stat-label">Classic images to know</div>
        </div>
      </div>

      <div className="callout callout-warn">
        <strong>⚠️ Why this matters:</strong> FMGE pass mark is 150/300. Image Qs are worth <strong>30–40 marks</strong> — often the difference between pass and fail. Most aspirants skip image practice. Don't.
      </div>

      <div className="callout callout-info">
        <strong>🔍 How to use this page:</strong> Click any subject to expand. Each topic shows a real Wikipedia/Wikimedia image (CC-licensed) plus search buttons for <strong>Google</strong>, <strong>Radiopaedia</strong>, <strong>DermNet</strong> or <strong>WebPath</strong>. Click any image to open its full Wikipedia article.
      </div>

      {/* Subject-wise breakdown */}
      <h2 className="section-title">📚 Subject-wise High-Yield Images</h2>
      <p className="muted">Click any subject to expand the list of classic images and their spot-diagnosis clues.</p>

      <div className="image-subject-grid">
        {IMAGE_SUBJECTS.map((sub) => {
          const isOpen = openSubject === sub.subject;
          return (
            <div key={sub.subject} className={`image-subject-card ${isOpen ? "open" : ""}`}>
              <button
                className="image-subject-head"
                onClick={() => setOpenSubject(isOpen ? null : sub.subject)}
                style={{ borderLeftColor: sub.color }}
              >
                <span className="image-subject-icon">{sub.icon}</span>
                <span className="image-subject-name">{sub.subject}</span>
                <span className="image-subject-meta">
                  <span className="img-qcount">{sub.qCount} Qs</span>
                  <span className="img-diff" style={{ color: sub.color }}>{sub.difficulty}</span>
                  <span className="img-toggle">{isOpen ? "−" : "+"}</span>
                </span>
              </button>
              {isOpen && (
                <div className="image-subject-body">
                  {sub.topics.map((t, i) => {
                    const links = getImageSearchLinks(t.name, sub.subject);
                    const subjSlug = getQuizSubjectSlug(sub.subject);
                    const topicSlug = getQuizTopicSlug(t.name);
                    const hasQuizQs = subjSlug && getTopicQuestions(subjSlug, topicSlug).length > 0;
                    return (
                      <div key={i} className="image-topic">
                        <WikiImage topic={t.name} />
                        <div className="image-topic-name">{t.name}</div>
                        <div className="image-topic-clue">{t.clue}</div>
                        <div className="image-topic-links">
                          {links.map((l) => (
                            <a
                              key={l.label}
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="image-search-btn"
                              style={{ borderColor: l.color, color: l.color }}
                            >
                              🔍 {l.label}
                            </a>
                          ))}
                          {hasQuizQs && (
                            <Link
                              to={`/quiz/${subjSlug}/${topicSlug}`}
                              className="image-search-btn"
                              style={{ borderColor: "#6366f1", color: "#6366f1" }}
                            >
                              🧠 Practice MCQs
                            </Link>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Strategy */}
      <h2 className="section-title" style={{ marginTop: 40 }}>🎯 8 Strategies to Crack Image Qs</h2>
      <div className="grid grid-2">
        {IMAGE_STRATEGY.map((s, i) => (
          <div key={i} className="strategy-card">
            <div className="strategy-num">{i + 1}</div>
            <div>
              <div className="strategy-title">{s.title}</div>
              <div className="strategy-body">{s.body}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Resources */}
      <h2 className="section-title" style={{ marginTop: 40 }}>🔗 Free &amp; Paid Image Resources</h2>
      <div className="grid grid-2">
        {RESOURCES_FOR_IMAGES.map((r, i) => (
          <a key={i} href={r.url} target="_blank" rel="noopener noreferrer" className="resource-link-card">
            <div className="resource-link-name">{r.name} <span className="resource-arrow">↗</span></div>
            <div className="resource-link-note">{r.note}</div>
          </a>
        ))}
      </div>

      <div className="callout callout-success" style={{ marginTop: 30 }}>
        <strong>💡 Tutor's final word:</strong> Don't try to memorize all {totalTopics}+ images in one go.
        Cover one subject section per week alongside your main study. By month 6, you'll have seen each image
        20+ times — that's how pattern recognition is built.
      </div>
    </>
  );
}
