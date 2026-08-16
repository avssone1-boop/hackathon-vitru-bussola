import { cn } from "../../lib/utils";

export function Progress({ value, className, label }: { value: number; className?: string; label?: string }) {
  const safeValue = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("progress-track", className)} role="progressbar" aria-valuenow={safeValue} aria-valuemin={0} aria-valuemax={100} aria-label={label}>
      <span className="progress-value" style={{ width: `${safeValue}%` }} />
    </div>
  );
}
