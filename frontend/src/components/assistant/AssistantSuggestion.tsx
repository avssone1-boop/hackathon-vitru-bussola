import { ArrowUpRight } from "lucide-react";

export function AssistantSuggestion({ label, onClick }: { label: string; onClick: (label: string) => void }) {
  return <button type="button" className="assistant-suggestion" onClick={() => onClick(label)}><span>{label}</span><ArrowUpRight size={16} /></button>;
}
