import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { deriveSupportProfile } from "../lib/profile";
import type { AnswerValue, AssessmentAnswers, SupportProfile } from "../types";

type BussolaContextValue = {
  answers: AssessmentAnswers;
  setAnswer: (questionId: string, value: AnswerValue) => void;
  profile: SupportProfile;
  completedTasks: string[];
  toggleTask: (taskId: string) => void;
  resetJourney: () => void;
};

const initialAnswers: AssessmentAnswers = {};

const BussolaContext = createContext<BussolaContextValue | null>(null);

export function BussolaProvider({ children }: { children: ReactNode }) {
  const [answers, setAnswers] = useState<AssessmentAnswers>(() => {
    try {
      const saved = window.localStorage.getItem("bussola-assessment-v2");
      return saved ? (JSON.parse(saved) as AssessmentAnswers) : initialAnswers;
    } catch {
      return initialAnswers;
    }
  });
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);

  const setAnswer = (questionId: string, value: AnswerValue) => {
    setAnswers((current) => {
      const next = { ...current, [questionId]: value };
      window.localStorage.setItem("bussola-assessment-v2", JSON.stringify(next));
      return next;
    });
  };

  const toggleTask = (taskId: string) => {
    setCompletedTasks((current) =>
      current.includes(taskId) ? current.filter((id) => id !== taskId) : [...current, taskId],
    );
  };

  const resetJourney = () => {
    setAnswers(initialAnswers);
    setCompletedTasks([]);
    window.localStorage.removeItem("bussola-assessment-v2");
  };

  const value = useMemo(
    () => ({ answers, setAnswer, profile: deriveSupportProfile(answers), completedTasks, toggleTask, resetJourney }),
    [answers, completedTasks],
  );

  return <BussolaContext.Provider value={value}>{children}</BussolaContext.Provider>;
}

export function useBussola() {
  const context = useContext(BussolaContext);
  if (!context) throw new Error("useBussola must be used inside BussolaProvider");
  return context;
}
