import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { questions } from "../../data/questions";
import { useBussola } from "../../hooks/useBussola";
import { ProgressHeader } from "../shell/ProgressHeader";
import { Button } from "../ui/Button";
import { QuestionRenderer } from "./QuestionRenderer";

export function AssessmentFlow() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const parsedIndex = Number(searchParams.get("q") ?? 0);
  const currentIndex = Number.isFinite(parsedIndex) ? Math.max(0, Math.min(questions.length - 1, parsedIndex)) : 0;
  const question = questions[currentIndex];
  const { answers, setAnswer } = useBussola();
  const [error, setError] = useState("");
  const [direction, setDirection] = useState(1);
  const answer = answers[question.id];

  const hasAnswer = useMemo(() => {
    if (!question.required) return true;
    if (Array.isArray(answer)) return answer.length > 0;
    return answer !== undefined && answer !== "";
  }, [answer, question.required]);

  useEffect(() => setError(""), [currentIndex]);

  const changeAnswer = useCallback((value: string | string[] | number) => {
    setAnswer(question.id, value);
    setError("");
  }, [question.id, setAnswer]);

  const goNext = () => {
    if (!hasAnswer) {
      setError("Escolha uma resposta para continuar.");
      return;
    }
    if (currentIndex === questions.length - 1) {
      navigate("/processing");
      return;
    }
    setDirection(1);
    setSearchParams({ q: String(currentIndex + 1) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goBack = () => {
    if (currentIndex === 0) {
      navigate("/onboarding");
      return;
    }
    setDirection(-1);
    setSearchParams({ q: String(currentIndex - 1) });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="assessment-page">
      <div className="assessment-container">
        <ProgressHeader current={currentIndex} total={questions.length} />
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.section
            key={question.id}
            className="question-panel"
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? 16 : -16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -16 : 16 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            aria-labelledby="question-title"
          >
            <div className="question-heading">
              <span className="eyebrow">ENTENDER · PERGUNTA {currentIndex + 1}</span>
              <h1 id="question-title">{question.title}</h1>
              {question.description && <p>{question.description}</p>}
            </div>
            <QuestionRenderer question={question} value={answer} onChange={changeAnswer} />
            {error && <p className="validation-error" role="alert">{error}</p>}
          </motion.section>
        </AnimatePresence>
        <footer className="assessment-footer">
          <Button variant="ghost" onClick={goBack}><ArrowLeft size={18} /> Voltar</Button>
          <Button onClick={goNext}>{currentIndex === questions.length - 1 ? "Ver meu perfil" : "Continuar"}<ArrowRight size={18} /></Button>
        </footer>
      </div>
    </main>
  );
}
