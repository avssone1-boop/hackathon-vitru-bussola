import { ArrowRight, CheckCircle2, Clock3, Compass, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function OnboardingScreen() {
  return (
    <main className="onboarding-page">
      <section className="onboarding-hero">
        <div className="onboarding-copy">
          <span className="eyebrow">BÚSSOLA · UM COMEÇO COM CONTEXTO</span>
          <h1>Queremos entender o que trouxe você até aqui.</h1>
          <p>Em poucos minutos, vamos entender melhor seus objetivos, o que pode dificultar sua jornada e como podemos apoiar você.</p>
          <Button asChild size="lg"><Link to="/assessment?q=0">Começar <ArrowRight size={19} /></Link></Button>
          <div className="onboarding-note"><Clock3 size={17} /><span>Leva cerca de 3 minutos. Você pode voltar e ajustar as respostas.</span></div>
        </div>
        <aside className="onboarding-manifest" aria-label="Como a Bússola usa suas respostas">
          <span className="manifest-compass" aria-hidden="true"><Compass size={42} strokeWidth={1.6} /></span>
          <span className="eyebrow">O QUE ACONTECE DEPOIS</span>
          <ol>
            <li><span>01</span><div><strong>Entender</strong><small>o que importa para você agora</small></div></li>
            <li><span>02</span><div><strong>Explicar</strong><small>os motivadores sem criar rótulos</small></div></li>
            <li><span>03</span><div><strong>Agir</strong><small>com um primeiro passo possível</small></div></li>
          </ol>
          <div className="manifest-trust"><ShieldCheck size={19} /><span>Sem avaliação clínica ou previsão de evasão.</span></div>
        </aside>
      </section>
      <section className="how-it-works" id="como-funciona" aria-labelledby="how-title">
        <div><span className="eyebrow">COMO FUNCIONA</span><h2 id="how-title">Uma conversa estruturada, não um teste.</h2></div>
        <div className="how-points">
          <p><CheckCircle2 size={18} /><span><strong>Uma pergunta por vez.</strong> Menos esforço para responder com honestidade.</span></p>
          <p><CheckCircle2 size={18} /><span><strong>Devolutiva explicável.</strong> Você entende de onde cada recomendação veio.</span></p>
          <p><CheckCircle2 size={18} /><span><strong>Ação concreta.</strong> A jornada termina com algo possível para esta semana.</span></p>
        </div>
      </section>
    </main>
  );
}
