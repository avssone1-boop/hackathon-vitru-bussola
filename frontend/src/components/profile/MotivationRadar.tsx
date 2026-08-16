import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from "recharts";
import type { MotivationVector } from "../../types";

export function MotivationRadar({ vectors }: { vectors: MotivationVector[] }) {
  return (
    <div className="motivation-radar" aria-label="Visualização alternativa dos vetores motivacionais">
      <ResponsiveContainer width="100%" height={280}>
        <RadarChart data={vectors} outerRadius="70%">
          <PolarGrid stroke="#dedbe8" />
          <PolarAngleAxis dataKey="label" tick={{ fill: "#5e596d", fontSize: 12 }} />
          <Radar dataKey="value" stroke="#5f50c6" fill="#5f50c6" fillOpacity={0.18} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
