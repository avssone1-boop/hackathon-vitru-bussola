import { Link } from "react-router-dom";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/home" className="brand-mark" aria-label="Bússola — ir para a página inicial">
      <span className="brand-wordmark" aria-hidden="true">vitru</span>
      <span className="brand-divider" aria-hidden="true" />
      <span className="brand-name">Bússola</span>
      {!compact && <span className="brand-context">· apoio à jornada</span>}
    </Link>
  );
}
