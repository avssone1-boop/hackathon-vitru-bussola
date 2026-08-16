import type { AssistantMessageData } from "../../types";
import { AssistantAction } from "./AssistantAction";

export function AssistantMessage({ message }: { message: AssistantMessageData }) {
  return (
    <article className={`assistant-message ${message.role}`}>
      <span className="message-author">{message.role === "assistant" ? "Bússola" : "Você"}</span>
      <p>{message.text}</p>
      {message.actions && <div className="message-actions">{message.actions.map((action) => <AssistantAction key={action.id} label={action.label} kind={action.kind} />)}</div>}
    </article>
  );
}
