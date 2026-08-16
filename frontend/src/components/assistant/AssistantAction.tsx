import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export function AssistantAction({ label, kind = "secondary", onClick }: { label: string; kind?: "primary" | "secondary"; onClick?: () => void }) {
  return <button type="button" className={cn("assistant-action", kind === "primary" && "primary")} onClick={onClick}>{label}<ArrowRight size={15} /></button>;
}
