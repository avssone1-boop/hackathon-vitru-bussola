import type { AnswerValue, Question } from "../../types";
import { AnswerCard } from "./AnswerCard";

export function SingleChoiceQuestion({ question, value, onChange }: { question: Question; value?: AnswerValue; onChange: (value: AnswerValue) => void }) {
  return (
    <div className="answer-grid single-grid" role="group" aria-label={question.title}>
      {question.options?.map((option) => (
        <AnswerCard
          key={option.id}
          selected={value === option.value}
          label={option.label}
          description={option.description}
          onClick={() => onChange(option.value)}
        />
      ))}
    </div>
  );
}
