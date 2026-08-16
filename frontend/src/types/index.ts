export type QuestionType = "single" | "multiple" | "scale" | "text";

export type QuestionOption = {
  id: string;
  label: string;
  description?: string;
  value: string | number;
};

export type Question = {
  id: string;
  title: string;
  description?: string;
  type: QuestionType;
  options?: QuestionOption[];
  required?: boolean;
  maxSelections?: number;
  placeholder?: string;
};

export type AnswerValue = string | string[] | number;
export type AssessmentAnswers = Record<string, AnswerValue>;

export type RecommendedAction = {
  id: string;
  title: string;
  description: string;
  destination: string;
};

export type MotivationVector = {
  id: string;
  label: string;
  value: number;
};

export type SupportProfile = {
  id: string;
  name: string;
  shortDescription: string;
  explanation: string;
  strongestDrivers: string[];
  possibleBarriers: string[];
  recommendedActions: RecommendedAction[];
  vectors: MotivationVector[];
};

export type Student = {
  name: string;
  course: string;
  objective: string;
  courseName: string;
  courseProgress: number;
};

export type AssistantMessageType = "student" | "assistant";

export type AssistantMessageData = {
  id: string;
  role: AssistantMessageType;
  text: string;
  actions?: { id: string; label: string; kind?: "primary" | "secondary" }[];
};
