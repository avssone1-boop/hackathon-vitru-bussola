import { motion } from "motion/react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function ProcessingScreen() {
  const navigate = useNavigate();
  useEffect(() => {
    const timeout = window.setTimeout(() => navigate("/result", { replace: true }), 1250);
    return () => window.clearTimeout(timeout);
  }, [navigate]);

  return (
    <main className="processing-page">
      <section className="processing-card" role="status" aria-live="polite">
        <div className="processing-indicator" aria-hidden="true">
          {[0, 1, 2].map((item) => <motion.span key={item} animate={{ opacity: [0.25, 1, 0.25], scale: [0.86, 1, 0.86] }} transition={{ duration: 1, repeat: Infinity, delay: item * 0.14 }} />)}
        </div>
        <span className="eyebrow">CONECTANDO SUAS RESPOSTAS</span>
        <h1>Entendendo o que importa para você...</h1>
        <p>Estamos organizando seus objetivos, expectativas e possíveis obstáculos. Isso não é uma análise clínica.</p>
      </section>
    </main>
  );
}
