import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { RecommendationList } from "../components/profile/RecommendationList";
import { SupportProfileSummary } from "../components/profile/SupportProfileSummary";
import { Button } from "../components/ui/Button";
import { useBussola } from "../hooks/useBussola";

export function ResultScreen() {
  const { profile } = useBussola();
  return (
    <main className="result-page">
      <div className="result-container">
        <motion.header className="result-heading" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
          <span className="eyebrow">EXPLICAR</span>
          <h1>Suas respostas mostram o que parece ter mais peso agora.</h1>
          <p>Este perfil é um ponto de partida editável — não uma definição de quem você é.</p>
        </motion.header>
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
          <SupportProfileSummary profile={profile} />
        </motion.div>
        <motion.section className="result-recommendations" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
          <div><span className="eyebrow">PERSONALIZAR</span><h2>O que pode ajudar você agora</h2><p>Três formas de tornar o próximo passo mais claro e possível.</p></div>
          <RecommendationList recommendations={profile.recommendedActions} />
        </motion.section>
        <motion.footer className="result-footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.24 }}>
          <p>Você não precisa resolver o semestre inteiro hoje.</p>
          <Button asChild size="lg"><Link to="/next-step">Montar meu primeiro passo <ArrowRight size={19} /></Link></Button>
        </motion.footer>
      </div>
    </main>
  );
}
