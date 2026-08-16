import { ArrowUpRight } from "lucide-react";
import type { RecommendedAction } from "../../types";

export function RecommendationList({ recommendations }: { recommendations: RecommendedAction[] }) {
  return (
    <ol className="recommendation-list">
      {recommendations.map((recommendation, index) => (
        <li key={recommendation.id}>
          <span className="recommendation-number">{String(index + 1).padStart(2, "0")}</span>
          <span className="recommendation-copy"><strong>{recommendation.title}</strong><small>{recommendation.description}</small></span>
          <ArrowUpRight size={18} aria-hidden="true" />
        </li>
      ))}
    </ol>
  );
}
