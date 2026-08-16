import { ArrowRight, BookOpen } from "lucide-react";
import { Progress } from "../ui/Progress";
import { Button } from "../ui/Button";

export function CourseProgress({ name, progress }: { name: string; progress: number }) {
  return (
    <section className="course-progress-card" aria-labelledby="course-progress-title">
      <div className="course-progress-top">
        <span className="course-icon" aria-hidden="true"><BookOpen size={21} /></span>
        <div><span>Continue de onde parou</span><h2 id="course-progress-title">{name}</h2></div>
        <strong>{progress}%</strong>
      </div>
      <Progress value={progress} label={`${progress}% concluído em ${name}`} />
      <Button size="sm">Continuar atividade <ArrowRight size={17} /></Button>
    </section>
  );
}
