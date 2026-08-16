import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Compass, X } from "lucide-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import type { AssistantMessageData } from "../../types";
import { IconButton } from "../ui/IconButton";
import { AssistantMessage } from "./AssistantMessage";
import { AssistantSuggestion } from "./AssistantSuggestion";

const suggestions = [
  "Como isso me aproxima do meu objetivo?",
  "Estou com dificuldade para começar",
  "Onde encontro minha próxima atividade?",
];

const initialMessages: AssistantMessageData[] = [
  {
    id: "welcome",
    role: "assistant",
    text: "Posso ajudar a transformar uma dificuldade em um próximo passo menor e possível.",
  },
];

function buildResponse(text: string): AssistantMessageData {
  const difficulty = text.toLowerCase().includes("dificuldade") || text.toLowerCase().includes("não consegui");
  return {
    id: `assistant-${Date.now()}`,
    role: "assistant",
    text: difficulty
      ? "Tudo bem. Seu objetivo continua sendo conquistar uma nova oportunidade, mas não precisamos resolver a semana inteira agora. Podemos reduzir o próximo passo para abrir a atividade e separar 20 minutos."
      : "Seu primeiro passo conecta o esforço desta semana ao objetivo profissional que você declarou. Posso abrir a atividade certa ou reorganizar o plano com você.",
    actions: [
      { id: "open", label: "Abrir atividade", kind: "primary" },
      { id: "reorganize", label: "Reorganizar meu plano", kind: "secondary" },
    ],
  };
}

export function CompassAssistant({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<AssistantMessageData[]>(initialMessages);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  const submit = (text: string) => {
    const cleanText = text.trim();
    if (!cleanText || typing) return;
    setMessages((current) => [...current, { id: `student-${Date.now()}`, role: "student", text: cleanText }]);
    setInput("");
    setTyping(true);
    window.setTimeout(() => {
      setMessages((current) => [...current, buildResponse(cleanText)]);
      setTyping(false);
    }, 680);
  };

  const handleDrawerKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      onClose();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button:not(:disabled), input:not(:disabled), [tabindex]:not([tabindex='-1'])"));
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last?.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first?.focus();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button className="assistant-backdrop" type="button" aria-label="Fechar assistente" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
          <motion.aside
            className="assistant-drawer"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.24, ease: "easeOut" }}
            onKeyDown={handleDrawerKeyDown}
          >
            <header className="assistant-header">
              <span className="assistant-brand" aria-hidden="true"><Compass size={19} /></span>
              <div><span className="eyebrow">ASSISTENTE</span><h2 id="assistant-title">Bússola</h2></div>
              <IconButton aria-label="Fechar assistente" onClick={onClose}><X size={20} /></IconButton>
            </header>
            <div className="assistant-scroll">
              <section className="assistant-suggestions" aria-labelledby="suggestions-title">
                <h3 id="suggestions-title">Como posso ajudar?</h3>
                {suggestions.map((suggestion) => <AssistantSuggestion key={suggestion} label={suggestion} onClick={submit} />)}
              </section>
              <div className="assistant-thread" aria-live="polite">
                {messages.map((message) => <AssistantMessage key={message.id} message={message} />)}
                {typing && <div className="assistant-typing" role="status"><span /><span /><span /><em>Bússola está organizando uma resposta</em></div>}
              </div>
            </div>
            <form className="assistant-input" onSubmit={(event) => { event.preventDefault(); submit(input); }}>
              <label className="sr-only" htmlFor="assistant-question">Pergunte alguma coisa</label>
              <input ref={inputRef} id="assistant-question" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Pergunte alguma coisa..." />
              <IconButton type="submit" aria-label="Enviar pergunta" disabled={!input.trim() || typing}><ArrowUp size={19} /></IconButton>
            </form>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
