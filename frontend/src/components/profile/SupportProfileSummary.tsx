import { CircleHelp, Sparkles } from "lucide-react";
import type { SupportProfile } from "../../types";
import { MotivationBars } from "./MotivationBars";

export function SupportProfileSummary({ profile }: { profile: SupportProfile }) {
  return (
    <section className="profile-summary" aria-labelledby="profile-name">
      <div className="profile-intro">
        <span className="profile-mark" aria-hidden="true"><Sparkles size={22} /></span>
        <div>
          <span className="eyebrow">SEU PERFIL DE APOIO</span>
          <h2 id="profile-name">{profile.name}</h2>
          <p className="profile-short">{profile.shortDescription}</p>
          <p>{profile.explanation}</p>
        </div>
      </div>
      <div className="profile-vectors">
        <div className="section-label"><span>O que parece ter mais peso</span><button type="button" aria-label="Entender como os vetores foram calculados"><CircleHelp size={17} /></button></div>
        <MotivationBars vectors={profile.vectors} />
        <p className="profile-method-note">Este é um mock explicável baseado apenas nas respostas desta demonstração.</p>
      </div>
    </section>
  );
}
