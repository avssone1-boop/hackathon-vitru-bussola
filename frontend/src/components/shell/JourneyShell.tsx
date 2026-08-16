import type { ReactNode } from "react";
import { JourneyRail, type JourneyPhase } from "./JourneyRail";

export function JourneyShell({ current, children }: { current: JourneyPhase; children: ReactNode }) {
  return (
    <div className="journey-frame">
      <JourneyRail current={current} />
      <div className="journey-content">{children}</div>
    </div>
  );
}
