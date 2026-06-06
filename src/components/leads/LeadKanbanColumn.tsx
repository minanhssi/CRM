"use client";

import { CountBadge } from "@/components/ui";
import { STAGE_META, type Lead, type LeadStage } from "@/lib/leadTypes";
import { LeadCard } from "./LeadCard";

export function LeadKanbanColumn({
  stage,
  leads,
}: {
  stage: LeadStage;
  leads: Lead[];
}) {
  const meta = STAGE_META[stage];
  return (
    <section
      aria-label={meta.label}
      className={`col-group flex w-[300px] shrink-0 flex-col self-start rounded-2xl border bg-white p-2.5 ${meta.containerBorder}`}
    >
      {/* Column header row (white container) */}
      <header className="mb-2.5 flex items-center gap-2 px-1.5 py-1">
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${meta.dot}`} />
        <h2 className="flex-1 truncate text-sm font-semibold text-gray-10">{meta.label}</h2>
        <CountBadge tone={meta.tone}>{leads.length}</CountBadge>
      </header>

      {/* Card list — capped height; scrolls internally only when it overflows.
          Scrollbar is hidden until the column is hovered (.col-group / .col-scroll). */}
      <div className="col-scroll max-h-[calc(100vh-360px)] space-y-2.5 overflow-y-auto pr-0.5">
        {leads.map((lead) => (
          <LeadCard key={lead.id} lead={lead} />
        ))}
        {leads.length === 0 && (
          <div className="rounded-lg border border-dashed border-gray-4 py-8 text-center text-xs text-gray-6">
            Không có lead
          </div>
        )}
      </div>
    </section>
  );
}
