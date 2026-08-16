import type { AnswerValue, Question } from "../../types";
import { AnswerCard } from "./AnswerCard";

export function MultipleChoiceQuestion({ question, value, onChange }: { question: Question; value?: AnswerValue; onChange: (value: AnswerValue) => void }) {
  const selected = Array.isArray(value) ? value : [];
  const toggle = (nextValue: string | number) => {
    const normalized = String(nextValue);
    if (selected.includes(normalized)) {
      onChange(selected.filter((item) => item !== normalized));
      return;
    }
    if (selected.length < (question.maxSelections ?? Number.POSITIVE_INFINITY)) {
      onChange([...selected, normalized]);
    }
  };

  return (
    <div>
      <div className="selection-caption">{selected.length} de {question.maxSelections ?? "várias"} selecionadas</div>
      <div className="answer-grid" role="group" aria-label={question.title}>
        {question.options?.map((option) => {
          const optionValue = String(option.value);
          const isSelected = selected.includes(optionValue);
          const isAtLimit = !isSelected && selected.length >= (question.maxSelections ?? Number.POSITIVE_INFINITY);
          return (
            <AnswerCard
              key={option.id}
              selected={isSelected}
              label={option.label}
              description={option.description}
              onClick={() => toggle(option.value)}
              disabled={isAtLimit}
            />
          );
        })}
      </div>
    </div>
  );
}
