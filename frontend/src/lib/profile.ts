import { supportProfiles } from "../data/supportProfiles";
import type { AssessmentAnswers, SupportProfile } from "../types";

const profileByDriver: Record<string, string> = {
  career: "professional-transformation",
  purpose: "personal-achievement",
  autonomy: "structured-autonomy",
  belonging: "belonging-support",
};

export function deriveSupportProfile(answers: AssessmentAnswers): SupportProfile {
  const score = { career: 0, purpose: 0, autonomy: 0, belonging: 0 };

  Object.values(answers).forEach((answer) => {
    const values = Array.isArray(answer) ? answer : [answer];
    values.forEach((value) => {
      if (typeof value === "string" && value in score) {
        score[value as keyof typeof score] += 1;
      }
    });
  });

  const strongestDriver = (Object.entries(score) as [keyof typeof score, number][]).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "career";
  const profileId = profileByDriver[strongestDriver];
  return supportProfiles.find((profile) => profile.id === profileId) ?? supportProfiles[0];
}
