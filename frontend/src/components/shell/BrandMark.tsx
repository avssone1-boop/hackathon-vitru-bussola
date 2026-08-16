import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/home" className="brand-mark" aria-label="Bússola — ir para a página inicial">
      <span className="brand-icon" aria-hidden="true"><Compass size={18} strokeWidth={2.2} /></span>
      <span className="brand-name">Bússola</span>
      {!compact && <span className="brand-context">Vitru</span>}
    </Link>
  );
}
