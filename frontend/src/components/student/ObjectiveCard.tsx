import { Target } from "lucide-react";

export function ObjectiveCard({ objective }: { objective: string }) {
  return (
    <section className="objective-card" aria-labelledby="objective-title">
      <span className="objective-icon" aria-hidden="true"><Target size={21} /></span>
      <div><span className="eyebrow">SEU OBJETIVO</span><h2 id="objective-title">{objective}</h2><p>Este norte pode ser ajustado quando sua realidade mudar.</p></div>
    </section>
  );
}
