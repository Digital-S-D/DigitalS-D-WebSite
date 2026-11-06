"use client";

import { useId, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

/** CSS exposes desktop content on first paint; mobile expansion survives resizing. */
export function MobileDetails({ label, children }: { label: string; children: ReactNode }) {
  const [expanded, setExpanded] = useState(false);
  const contentId = useId();
  return (
    <div className="mobile-details" data-expanded={expanded || undefined}>
      <button type="button" aria-expanded={expanded} aria-controls={contentId}
        onClick={() => setExpanded((value) => !value)}
        className="mobile-details-toggle flex min-h-12 w-full items-center justify-between gap-3 text-left text-blue-300">
        {label}<ChevronDown size={20} aria-hidden="true" className={`shrink-0 ${expanded ? "rotate-180" : ""}`} />
      </button>
      {/* Remember desktop field interaction before a rotation can hide its focus. */}
      <div id={contentId} onFocusCapture={() => setExpanded(true)}
        className="mobile-details-content space-y-4 py-3 md:py-0">{children}</div>
      <noscript><style>{".mobile-details-content{display:block!important}.mobile-details-toggle{display:none!important}"}</style></noscript>
    </div>
  );
}
