import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";

export function NotFoundScreen() {
  return <main className="not-found"><span className="eyebrow">PÁGINA NÃO ENCONTRADA</span><h1>Vamos retomar de onde faz sentido.</h1><Button asChild><Link to="/onboarding">Voltar ao início</Link></Button></main>;
}
