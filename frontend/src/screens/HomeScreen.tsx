import { ArrowRight, CheckCircle2, Compass, RotateCcw } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CompassAssistant } from "../components/assistant/CompassAssistant";
import { JourneyShell } from "../components/shell/JourneyShell";
import { CourseProgress } from "../components/student/CourseProgress";
import { ObjectiveCard } from "../components/student/ObjectiveCard";
import { Button } from "../components/ui/Button";
import { student } from "../data/student";
import { useBussola } from "../hooks/useBussola";

const homeActions = [
  "Finalizar a atividade inicial",
  "Separar o próximo horário de estudo",
  "Tirar uma dúvida com o Bússola",
];

export function HomeScreen() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const navigate = useNavigate();
  const { profile, resetJourney } = useBussola();

  const restart = () => {
    resetJourney();
    navigate("/onboarding");
  };

  return (
    <main className="home-page">
      <JourneyShell current="follow"><div className="home-container">
        <header className="home-heading"><div><span className="eyebrow">ACOMPANHAR</span><h1>Bom dia, {student.name}.</h1><p>Seu próximo passo está claro — e pode mudar quando precisar.</p></div><button type="button" className="reset-link" onClick={restart}><RotateCcw size={16} /> Refazer conversa inicial</button></header>
        <div className="home-primary-grid">
          <CourseProgress name={student.courseName} progress={student.courseProgress} />
          <section className="profile-reminder"><span className="eyebrow">SEU PERFIL DE APOIO</span><h2>{profile.name}</h2><p>{profile.shortDescription}</p><button type="button">Revisar explicação <ArrowRight size={16} /></button></section>
        </div>
        <div className="home-secondary-grid">
          <ObjectiveCard objective={student.objective} />
          <section className="home-actions" aria-labelledby="actions-title"><span className="eyebrow">PRÓXIMAS AÇÕES</span><h2 id="actions-title">O que cabe agora</h2><ol>{homeActions.map((action, index) => <li key={action}><span>{String(index + 1).padStart(2, "0")}</span><strong>{action}</strong>{index === 0 && <CheckCircle2 size={18} />}</li>)}</ol></section>
        </div>
        <section className="assistant-invite">
          <span className="assistant-invite-icon" aria-hidden="true"><Compass size={24} /></span>
          <div><span className="eyebrow">BÚSSOLA</span><h2>Precisa reorganizar o próximo passo?</h2><p>Converse com o assistente sem perder o contexto do seu objetivo.</p></div>
          <Button onClick={() => setAssistantOpen(true)}>Pergunte ao Bússola <ArrowRight size={18} /></Button>
        </section>
      </div></JourneyShell>
      <CompassAssistant open={assistantOpen} onClose={() => setAssistantOpen(false)} />
    </main>
  );
}
