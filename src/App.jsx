import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Analysis from "./pages/Analysis";
import Resources from "./pages/Resources";
import FreeResources from "./pages/FreeResources";
import SmartStudy from "./pages/SmartStudy";
import Roadmap from "./pages/Roadmap";
import Phase1 from "./pages/Phase1";
import DailyCycle from "./pages/DailyCycle";
import Tracker from "./pages/Tracker";
import Tips from "./pages/Tips";
import ImageQs from "./pages/ImageQs";
import NotFound from "./pages/NotFound";
import AuthPage from "./pages/AuthPage";
import QuizHub from "./pages/QuizHub";
import SubjectQuiz from "./pages/SubjectQuiz";
import TopicQuiz from "./pages/TopicQuiz";
import QuizResults from "./pages/QuizResults";
import GrandTest from "./pages/GrandTest";
import Analytics from "./pages/Analytics";
import ScoreHistory from "./pages/ScoreHistory";
import HolidaySprint from "./pages/HolidaySprint";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="analysis" element={<Analysis />} />
          <Route path="resources" element={<Resources />} />
          <Route path="free" element={<FreeResources />} />
          <Route path="smart-study" element={<SmartStudy />} />
          <Route path="roadmap" element={<Roadmap />} />
          <Route path="phase-1" element={<Phase1 />} />
          <Route path="daily" element={<DailyCycle />} />
          <Route path="tracker" element={<Tracker />} />
          <Route path="tips" element={<Tips />} />
          <Route path="images" element={<ImageQs />} />
          {/* Auth */}
          <Route path="auth" element={<AuthPage />} />
          {/* Quiz system */}
          <Route path="quiz" element={<QuizHub />} />
          <Route path="quiz/:subject" element={<SubjectQuiz />} />
          <Route path="quiz/:subject/:topic" element={<TopicQuiz />} />
          <Route path="quiz/:subject/:topic/results" element={<QuizResults />} />
          <Route path="grand-test" element={<GrandTest />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="scores" element={<ScoreHistory />} />
          <Route path="holiday-sprint" element={<HolidaySprint />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
