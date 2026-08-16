import type { RecommendedAction } from "../types";

export const recommendations: RecommendedAction[] = [
  {
    id: "course-impact",
    title: "Enxergar o impacto das primeiras disciplinas",
    description: "Veja como os conteúdos iniciais se conectam a situações profissionais reais.",
    destination: "/home",
  },
  {
    id: "short-goals",
    title: "Criar metas curtas ligadas ao seu objetivo",
    description: "Comece por uma atividade e dois períodos de estudo nesta semana.",
    destination: "/next-step",
  },
  {
    id: "early-help",
    title: "Pedir ajuda antes que uma dúvida vire bloqueio",
    description: "Use o Bússola para localizar a pessoa ou o recurso certo no portal.",
    destination: "/home",
  },
];
