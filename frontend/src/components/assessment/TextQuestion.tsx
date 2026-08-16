import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import type { AnswerValue, Question } from "../../types";
import { Textarea } from "../ui/Textarea";

const schema = z.object({ note: z.string().max(280, "Use até 280 caracteres.") });
type FormData = z.infer<typeof schema>;

export function TextQuestion({ question, value, onChange }: { question: Question; value?: AnswerValue; onChange: (value: AnswerValue) => void }) {
  const { register, watch, reset, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { note: typeof value === "string" ? value : "" },
    mode: "onChange",
  });
  const note = watch("note");

  useEffect(() => {
    reset({ note: typeof value === "string" ? value : "" });
  }, [reset, value]);

  useEffect(() => {
    const currentValue = typeof value === "string" ? value : "";
    if (!errors.note && (note ?? "") !== currentValue) onChange(note ?? "");
  }, [errors.note, note, onChange, value]);

  return (
    <div className="text-question">
      <label htmlFor="student-note">Resposta opcional</label>
      <Textarea id="student-note" rows={6} placeholder={question.placeholder} {...register("note")} aria-describedby="note-help note-error" />
      <div className="textarea-meta"><span id="note-help">Você pode deixar em branco.</span><span>{note?.length ?? 0}/280</span></div>
      {errors.note && <p className="field-error" id="note-error" role="alert">{errors.note.message}</p>}
    </div>
  );
}
