import type { SupportProfile } from "../types";
import { recommendations } from "./recommendations";

export const supportProfiles: SupportProfile[] = [
  {
    id: "professional-transformation",
    name: "Crescimento e transformação profissional",
    shortDescription: "O futuro profissional parece ter mais peso para você neste momento.",
    explanation: "Suas respostas indicam que a motivação fica mais forte quando o esforço de hoje se conecta a uma oportunidade concreta no futuro.",
    strongestDrivers: ["Carreira", "Autonomia"],
    possibleBarriers: ["Rotina concorrida", "Falta de conexão prática"],
    recommendedActions: recommendations,
    vectors: [
      { id: "career", label: "Carreira", value: 88 },
      { id: "purpose", label: "Propósito", value: 72 },
      { id: "autonomy", label: "Autonomia", value: 63 },
      { id: "belonging", label: "Pertencimento", value: 41 },
    ],
  },
  {
    id: "personal-achievement",
    name: "Realização e propósito pessoal",
    shortDescription: "A conquista da graduação parece carregar um significado pessoal importante.",
    explanation: "Neste momento, relembrar por que você começou pode ajudar a transformar esforço em continuidade sem tornar a jornada uma cobrança.",
    strongestDrivers: ["Propósito", "Persistência"],
    possibleBarriers: ["Metas distantes", "Cobrança excessiva"],
    recommendedActions: recommendations,
    vectors: [
      { id: "purpose", label: "Propósito", value: 90 },
      { id: "career", label: "Carreira", value: 67 },
      { id: "belonging", label: "Pertencimento", value: 58 },
      { id: "autonomy", label: "Autonomia", value: 54 },
    ],
  },
  {
    id: "structured-autonomy",
    name: "Autonomia com estrutura",
    shortDescription: "Um plano claro e ajustável parece facilitar seu avanço.",
    explanation: "Suas respostas mostram que você tende a ganhar confiança quando consegue dividir um objetivo maior em decisões pequenas e controláveis.",
    strongestDrivers: ["Autonomia", "Clareza"],
    possibleBarriers: ["Excesso de tarefas", "Primeiro passo indefinido"],
    recommendedActions: recommendations,
    vectors: [
      { id: "autonomy", label: "Autonomia", value: 89 },
      { id: "career", label: "Carreira", value: 70 },
      { id: "purpose", label: "Propósito", value: 61 },
      { id: "belonging", label: "Pertencimento", value: 46 },
    ],
  },
  {
    id: "belonging-support",
    name: "Pertencimento e apoio próximo",
    shortDescription: "Saber onde encontrar ajuda parece ter mais peso para você agora.",
    explanation: "Neste momento, a jornada pode ficar mais leve quando existe uma referência clara de apoio e você não precisa resolver cada dificuldade sozinho.",
    strongestDrivers: ["Pertencimento", "Confiança"],
    possibleBarriers: ["Isolamento", "Dúvidas acumuladas"],
    recommendedActions: recommendations,
    vectors: [
      { id: "belonging", label: "Pertencimento", value: 87 },
      { id: "purpose", label: "Propósito", value: 69 },
      { id: "career", label: "Carreira", value: 62 },
      { id: "autonomy", label: "Autonomia", value: 55 },
    ],
  },
];
