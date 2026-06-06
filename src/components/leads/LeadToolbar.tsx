"use client";

import { SearchInput, SegmentedTabs } from "@/components/ui";
import { FilterPopover, type LeadFilters } from "./FilterPopover";

export type BoardView = "table" | "kanban";

export function LeadToolbar({
  view,
  onViewChange,
  search,
  onSearchChange,
  filters,
  onFiltersChange,
  resultCount,
}: {
  view: BoardView;
  onViewChange: (v: BoardView) => void;
  search: string;
  onSearchChange: (v: string) => void;
  filters: LeadFilters;
  onFiltersChange: (f: LeadFilters) => void;
  resultCount: number;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 px-6">
      <SegmentedTabs<BoardView>
        variant="white"
        items={[
          { key: "table", label: "Bảng" },
          { key: "kanban", label: "Kanban" },
        ]}
        value={view}
        onChange={onViewChange}
      />

      <SearchInput
        value={search}
        onChange={onSearchChange}
        placeholder="Tìm theo tên PH, học sinh, SĐT..."
        className="min-w-[240px] flex-1"
        aria-label="Tìm Lead"
      />

      <FilterPopover filters={filters} onChange={onFiltersChange} />

      <span className="text-sm text-gray-7">{resultCount} kết quả</span>
    </div>
  );
}
