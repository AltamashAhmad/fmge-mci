// Question bank index — re-exports all subject modules.
// Import from this file to get questions for a specific subject.

import dermatology from "./dermatology";
import pathology from "./pathology";
import medicine from "./medicine";
import surgery from "./surgery";
import obgy from "./obgy";
import psm from "./psm";
import pharmacology from "./pharmacology";
import microbiology from "./microbiology";
import pediatrics from "./pediatrics";
import biochemistry from "./biochemistry";
import physiology from "./physiology";
import anatomy from "./anatomy";
import forensic from "./forensic";
import ophthalmology from "./ophthalmology";
import ent from "./ent";
import orthopedics from "./orthopedics";
import cardiology from "./cardiology";
import hematology from "./hematology";
import endocrinology from "./endocrinology";
import radiology from "./radiology";
import anesthesia from "./anesthesia";
import psychiatry from "./psychiatry";
import rheumatology from "./rheumatology";

export const ALL_QUESTIONS = {
  dermatology,
  pathology,
  medicine,
  surgery,
  obgy,
  psm,
  pharmacology,
  microbiology,
  pediatrics,
  biochemistry,
  physiology,
  anatomy,
  forensic,
  ophthalmology,
  ent,
  orthopedics,
  cardiology,
  hematology,
  endocrinology,
  radiology,
  anesthesia,
  psychiatry,
  rheumatology,
};

// Get all questions for a subject
export function getQuestions(subjectSlug) {
  return ALL_QUESTIONS[subjectSlug] || [];
}

// Get questions for a specific topic within a subject
export function getTopicQuestions(subjectSlug, topicSlug) {
  const qs = getQuestions(subjectSlug);
  return qs.filter((q) => q.topic === topicSlug);
}

// Get 10 random questions from a topic (for mock test)
export function getMockQuestions(subjectSlug, topicSlug, count = 10) {
  const qs = getTopicQuestions(subjectSlug, topicSlug);
  if (qs.length <= count) return [...qs].sort(() => Math.random() - 0.5);
  const shuffled = [...qs].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
