"use client";

import { useMemo, useState } from "react";
import { Icon, SegmentedTabs, useToast } from "@/components/ui";
import { deleteLead, useLeads } from "@/lib/leadStore";
import type { Lead } from "@/lib/leadTypes";
import { LeadSidebar } from "./LeadSidebar";
import { LeadPageHeader } from "./LeadPageHeader";
import { LeadKpiCards } from "./LeadKpiCards";
import { LeadToolbar, type BoardView } from "./LeadToolbar";
import { LeadKanbanBoard } from "./LeadKanbanBoard";
import { LeadTableView } from "./LeadTableView";
import { DeleteLeadDialog } from "./DeleteLeadDialog";
import { EMPTY_FILTERS, type LeadFilters } from "./FilterPopover";

type TimeFilter = "all" | "day" | "month" | "year";

export function LeadManagementPage() {
  const leads = useLeads();
  const toast = useToast();

  const [timeFilter, setTimeFilter] = useState<TimeFilter>("all");
  const [view, setView] = useState<BoardView>("kanban");
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<LeadFilters>(EMPTY_FILTERS);
  const [pendingDelete, setPendingDelete] = useState<Lead | null>(null);

  const visibleLeads = useMemo(() => {
    const q = search.trim().toLowerCase();
    return leads.filter((l) => {
      if (q) {
        const haystack = [l.parentName, l.phone, l.studentName, ...l.tags, ...l.courseTags]
          .join(" ")
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      if (filters.owners.length && !filters.owners.includes(l.owner)) return false;
      if (filters.branches.length && !filters.branches.includes(l.branch)) return false;
      if (filters.overdueOnly && l.flag?.tone !== "danger") return false;
      return true;
    });
  }, [leads, search, filters]);

  const confirmDelete = () => {
    if (!pendingDelete) return;
    deleteLead(pendingDelete.id);
    toast(`Đã xóa lead ${pendingDelete.parentName}`);
    setPendingDelete(null);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-landing-bg">
      <LeadSidebar activeHref="/leads" />

      <main className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="shrink-0 space-y-4 pb-4">
          <LeadPageHeader />

          {/* Time filter tabs */}
          <div className="px-6">
            <SegmentedTabs<TimeFilter>
              items={[
                { key: "all", label: "Tất cả" },
                { key: "day", label: "Ngày" },
                { key: "month", label: "Tháng" },
                { key: "year", label: "Năm" },
              ]}
              value={timeFilter}
              onChange={setTimeFilter}
            />
          </div>

          <LeadKpiCards leads={leads} />

          <LeadToolbar
            view={view}
            onViewChange={setView}
            search={search}
            onSearchChange={setSearch}
            filters={filters}
            onFiltersChange={setFilters}
            resultCount={visibleLeads.length}
          />
        </div>

        {/* Board / table area */}
        <div className="min-h-0 flex-1 overflow-hidden">
          {view === "kanban" ? (
            <LeadKanbanBoard leads={visibleLeads} />
          ) : (
            <LeadTableView leads={visibleLeads} onDelete={setPendingDelete} />
          )}
        </div>

        {/* Footer total */}
        <footer className="flex shrink-0 items-center justify-between border-t border-gray-4 bg-white px-6 py-2.5 text-xs text-gray-7">
          <span>{leads.length} lead</span>
          {view === "kanban" && (
            <span className="flex items-center gap-1 text-gray-6">
              Cuộn ngang để xem thêm cột
              <Icon name="chevron-right" className="h-3.5 w-3.5" />
            </span>
          )}
        </footer>
      </main>

      <DeleteLeadDialog
        open={!!pendingDelete}
        onCancel={() => setPendingDelete(null)}
        onConfirm={confirmDelete}
      />
    </div>
  );
}
