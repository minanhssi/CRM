"use client";

import { STAGE_ORDER, type Lead } from "@/lib/leadTypes";
import { LeadKanbanColumn } from "./LeadKanbanColumn";

export function LeadKanbanBoard({ leads }: { leads: Lead[] }) {
  return (
    <div className="h-full overflow-auto px-6 pb-4">
      <div className="flex items-start gap-4">
        {STAGE_ORDER.map((stage) => (
          <LeadKanbanColumn
            key={stage}
            stage={stage}
            leads={leads.filter((l) => l.stage === stage)}
          />
        ))}
      </div>
    </div>
  );
}
