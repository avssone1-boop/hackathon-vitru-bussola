import { useEffect, useRef, useState, type KeyboardEvent, type ReactNode } from "react";
import { LockKeyhole, X } from "lucide-react";
import { BrandMark } from "./BrandMark";
import { IconButton } from "../ui/IconButton";

export function AppShell({ children, compact = false }: { children: ReactNode; compact?: boolean }) {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (privacyOpen) closeRef.current?.focus();
  }, [privacyOpen]);

  const handleDialogKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      setPrivacyOpen(false);
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button, a[href], input, textarea, [tabindex]:not([tabindex='-1'])"));
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
    <div className="app-shell">
      <header className={compact ? "site-header compact" : "site-header"}>
        <div className="header-inner">
          <BrandMark compact={compact} />
          <nav className="header-nav" aria-label="Navegação principal">
            <a href="#como-funciona">Como funciona</a>
            <button type="button" onClick={() => setPrivacyOpen(true)}>Privacidade e dados</button>
            <div className="student-mini" aria-label="Perfil de Arthur Martins">
              <span className="student-avatar">AM</span>
              <span className="student-meta"><strong>Arthur Martins</strong><small>Graduação EAD</small></span>
            </div>
          </nav>
        </div>
      </header>
      {children}

      {privacyOpen && (
        <div className="dialog-overlay" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setPrivacyOpen(false)}>
          <section className="dialog-card" role="dialog" aria-modal="true" aria-labelledby="privacy-title" onKeyDown={handleDialogKeyDown}>
            <div className="dialog-heading">
              <span className="dialog-icon" aria-hidden="true"><LockKeyhole size={20} /></span>
              <div><span className="eyebrow">PRIVACIDADE</span><h2 id="privacy-title">Suas respostas apoiam suas escolhas</h2></div>
              <IconButton ref={closeRef} aria-label="Fechar privacidade" onClick={() => setPrivacyOpen(false)}><X size={20} /></IconButton>
            </div>
            <p>A Bússola usa apenas o que você declara sobre objetivos, rotina e preferências para personalizar esta demonstração.</p>
            <ul>
              <li>Não é um teste psicológico e não prevê evasão.</li>
              <li>Os perfis são explicações momentâneas, não rótulos permanentes.</li>
              <li>Nenhum contato ou encaminhamento real é enviado neste protótipo.</li>
            </ul>
            <button className="text-action" type="button" onClick={() => setPrivacyOpen(false)}>Entendi, continuar</button>
          </section>
        </div>
      )}
    </div>
  );
}
