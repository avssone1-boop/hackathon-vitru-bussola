import { motion } from "motion/react";
import type { MotivationVector } from "../../types";

export function MotivationBars({ vectors }: { vectors: MotivationVector[] }) {
  return (
    <div className="motivation-bars" aria-label="Vetores motivacionais">
      {vectors.map((vector, index) => (
        <div className="motivation-row" key={vector.id}>
          <div className="motivation-label"><span>{vector.label}</span><strong>{vector.value}</strong></div>
          <div className="motivation-track" aria-hidden="true">
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: `${vector.value}%` }}
              transition={{ duration: 0.42, delay: index * 0.06, ease: "easeOut" }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
