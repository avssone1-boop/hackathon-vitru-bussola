import { MotionConfig } from "motion/react";
import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { AssessmentFlow } from "./components/assessment/AssessmentFlow";
import { AppShell } from "./components/shell/AppShell";
import { HomeScreen } from "./screens/HomeScreen";
import { NextStepScreen } from "./screens/NextStepScreen";
import { NotFoundScreen } from "./screens/NotFoundScreen";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { ProcessingScreen } from "./screens/ProcessingScreen";
import { ResultScreen } from "./screens/ResultScreen";

function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, search]);
  return null;
}

export function App() {
  const location = useLocation();
  const compactHeader = location.pathname === "/assessment" || location.pathname === "/processing";
  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <AppShell compact={compactHeader}>
        <Routes>
          <Route path="/" element={<Navigate to="/onboarding" replace />} />
          <Route path="/onboarding" element={<OnboardingScreen />} />
          <Route path="/assessment" element={<AssessmentFlow />} />
          <Route path="/processing" element={<ProcessingScreen />} />
          <Route path="/result" element={<ResultScreen />} />
          <Route path="/next-step" element={<NextStepScreen />} />
          <Route path="/home" element={<HomeScreen />} />
          <Route path="*" element={<NotFoundScreen />} />
        </Routes>
      </AppShell>
    </MotionConfig>
  );
}
