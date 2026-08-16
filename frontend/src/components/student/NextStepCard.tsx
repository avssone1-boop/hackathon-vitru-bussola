import { Check } from "lucide-react";
import { cn } from "../../lib/utils";

export function NextStepCard({ id, title, description, completed, onToggle }: { id: string; title: string; description: string; completed: boolean; onToggle: (id: string) => void }) {
  return (
    <button type="button" className={cn("next-step-card", completed && "completed")} aria-pressed={completed} onClick={() => onToggle(id)}>
      <span className="step-checkbox" aria-hidden="true">{completed && <Check size={17} strokeWidth={3} />}</span>
      <span><strong>{title}</strong><small>{description}</small></span>
    </button>
  );
}
