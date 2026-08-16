import { Progress } from "../ui/Progress";

export function ProgressHeader({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="assessment-progress" aria-live="polite">
      <div className="assessment-progress-copy">
        <span>Etapa {current + 1} de {total}</span>
        <strong>{Math.round(progress)}% concluído</strong>
      </div>
      <Progress value={progress} label={`Etapa ${current + 1} de ${total}`} />
    </div>
  );
}
