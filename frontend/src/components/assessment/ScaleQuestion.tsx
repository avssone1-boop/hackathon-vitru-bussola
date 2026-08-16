import type { AnswerValue, Question } from "../../types";
import { cn } from "../../lib/utils";

export function ScaleQuestion({ question, value, onChange }: { question: Question; value?: AnswerValue; onChange: (value: AnswerValue) => void }) {
  return (
    <div className={cn("scale-grid", (question.options?.length ?? 0) > 4 && "compact-scale")} role="radiogroup" aria-label={question.title}>
      {question.options?.map((option) => {
        const selected = value === option.value;
        return (
          <button
            key={option.id}
            type="button"
            role="radio"
            aria-checked={selected}
            className={cn("scale-option", selected && "selected")}
            onClick={() => onChange(option.value)}
          >
            <strong>{option.label}</strong>
            {option.description && <small>{option.description}</small>}
          </button>
        );
      })}
    </div>
  );
}
