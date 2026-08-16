import type { AnswerValue, Question } from "../../types";
import { MultipleChoiceQuestion } from "./MultipleChoiceQuestion";
import { ScaleQuestion } from "./ScaleQuestion";
import { SingleChoiceQuestion } from "./SingleChoiceQuestion";
import { TextQuestion } from "./TextQuestion";

export function QuestionRenderer({ question, value, onChange }: { question: Question; value?: AnswerValue; onChange: (value: AnswerValue) => void }) {
  if (question.type === "multiple") return <MultipleChoiceQuestion question={question} value={value} onChange={onChange} />;
  if (question.type === "scale") return <ScaleQuestion question={question} value={value} onChange={onChange} />;
  if (question.type === "text") return <TextQuestion question={question} value={value} onChange={onChange} />;
  return <SingleChoiceQuestion question={question} value={value} onChange={onChange} />;
}
