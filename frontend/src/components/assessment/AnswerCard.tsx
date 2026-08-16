import { Check } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "../../lib/utils";

type AnswerCardProps = {
  selected: boolean;
  label: string;
  description?: string;
  onClick: () => void;
  indicator?: ReactNode;
  disabled?: boolean;
};

export function AnswerCard({ selected, label, description, onClick, indicator, disabled }: AnswerCardProps) {
  return (
    <button
      type="button"
      className={cn("answer-card", selected && "selected")}
      aria-pressed={selected}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="answer-indicator" aria-hidden="true">{selected ? <Check size={16} strokeWidth={3} /> : indicator}</span>
      <span className="answer-copy"><strong>{label}</strong>{description && <small>{description}</small>}</span>
    </button>
  );
}
