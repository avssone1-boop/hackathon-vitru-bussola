import { ArrowRight, CalendarCheck2 } from "lucide-react";
import { Link } from "react-router-dom";
import { NextStepCard } from "../components/student/NextStepCard";
import { ObjectiveCard } from "../components/student/ObjectiveCard";
import { Button } from "../components/ui/Button";
import { student } from "../data/student";
import { useBussola } from "../hooks/useBussola";

const steps = [
  { id: "course-structure", title: "Conhecer a estrutura da primeira disciplina", description: "5 minutos · veja unidades, atividades e onde pedir ajuda" },
  { id: "study-time", title: "Reservar dois períodos curtos de estudo", description: "Escolha horários que já cabem na sua semana" },
  { id: "help-path", title: "Identificar onde pedir ajuda", description: "Salve o contato de tutoria e o acesso ao Bússola" },
  { id: "first-activity", title: "Começar a primeira atividade", description: "Transforme intenção em uma ação visível" },
];

export function NextStepScreen() {
  const { completedTasks, toggleTask } = useBussola();
  return (
    <main className="next-step-page">
      <div className="next-step-container">
        <header className="next-step-heading">
          <span className="eyebrow">AGIR</span>
          <h1>Vamos transformar seu objetivo em um primeiro passo.</h1>
          <p>Escolha uma ação pequena. Você pode ajustar o plano quando a realidade mudar.</p>
        </header>
        <ObjectiveCard objective={student.objective} />
        <section className="week-plan" aria-labelledby="week-title">
          <div className="week-plan-heading"><span className="week-icon" aria-hidden="true"><CalendarCheck2 size={21} /></span><div><span className="eyebrow">NESTA SEMANA</span><h2 id="week-title">Uma rota curta e possível</h2></div><strong>{completedTasks.length}/{steps.length}</strong></div>
          <div className="step-list">{steps.map((step) => <NextStepCard key={step.id} {...step} completed={completedTasks.includes(step.id)} onToggle={toggleTask} />)}</div>
        </section>
        <footer className="next-step-footer"><p>Você não precisa resolver o semestre inteiro hoje.</p><Button asChild size="lg"><Link to="/home">Começar pela primeira atividade <ArrowRight size={19} /></Link></Button></footer>
      </div>
    </main>
  );
}
