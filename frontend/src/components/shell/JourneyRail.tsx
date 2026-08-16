import { Check } from "lucide-react";

export type JourneyPhase = "understand" | "explain" | "personalize" | "act" | "follow";

const phases: Array<{ id: JourneyPhase; label: string; description: string }> = [
  { id: "understand", label: "Entender", description: "O que move você" },
  { id: "explain", label: "Explicar", description: "Ler seus motivadores" },
  { id: "personalize", label: "Personalizar", description: "Conectar apoios úteis" },
  { id: "act", label: "Agir", description: "Definir um passo possível" },
  { id: "follow", label: "Acompanhar", description: "Revisar e ajustar a rota" },
];

export function JourneyRail({ current }: { current: JourneyPhase }) {
  const currentIndex = phases.findIndex((phase) => phase.id === current);

  return (
    <>
      <aside className="journey-rail" aria-label="Sua jornada na Bússola">
        <div className="journey-rail-intro">
          <span className="eyebrow">SUA BÚSSOLA</span>
          <h2>Um passo de cada vez</h2>
          <p>Suas respostas viram orientação prática, sem definir quem você é.</p>
        </div>
        <ol className="journey-phase-list">
          {phases.map((phase, index) => {
            const completed = index < currentIndex;
            const active = index === currentIndex;
            return (
              <li key={phase.id} className={active ? "active" : completed ? "completed" : ""} aria-current={active ? "step" : undefined}>
                <span className="journey-phase-marker" aria-hidden="true">
                  {completed ? <Check size={15} strokeWidth={3} /> : index + 1}
                </span>
                <span className="journey-phase-copy">
                  <strong>{phase.label}</strong>
                  <small>{phase.description}</small>
                </span>
              </li>
            );
          })}
        </ol>
      </aside>
      <div className="journey-mobile-progress" aria-label={`Fase ${currentIndex + 1} de ${phases.length}: ${phases[currentIndex].label}`}>
        <div><span>FASE {currentIndex + 1} DE {phases.length}</span><strong>{phases[currentIndex].label}</strong></div>
        <span className="journey-mobile-track"><i style={{ width: `${((currentIndex + 1) / phases.length) * 100}%` }} /></span>
      </div>
    </>
  );
}
