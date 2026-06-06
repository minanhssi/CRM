"use client";

import { Button, Icon, Popover } from "@/components/ui";
import { BRANCHES, OWNERS } from "@/lib/leadData";

export interface LeadFilters {
  owners: string[];
  branches: string[];
  overdueOnly: boolean;
}

export const EMPTY_FILTERS: LeadFilters = { owners: [], branches: [], overdueOnly: false };

export function countActiveFilters(f: LeadFilters): number {
  return f.owners.length + f.branches.length + (f.overdueOnly ? 1 : 0);
}

function toggle(list: string[], value: string): string[] {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
}

export function FilterPopover({
  filters,
  onChange,
}: {
  filters: LeadFilters;
  onChange: (f: LeadFilters) => void;
}) {
  const active = countActiveFilters(filters);

  return (
    <Popover
      align="right"
      trigger={({ open, toggle: t, ref }) => (
        <button
          ref={ref}
          onClick={t}
          aria-expanded={open}
          className={`inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-sm font-medium transition-colors ${
            active > 0 || open
              ? "border-brand-action bg-brand-action-soft text-brand-action"
              : "border-gray-5 bg-white text-gray-9 hover:bg-gray-2"
          }`}
        >
          <Icon name="filter" className="h-4 w-4" />
          Bộ lọc
          {active > 0 && (
            <span className="flex h-4 min-w-[16px] items-center justify-center rounded-full bg-brand-action px-1 text-[10px] font-bold text-white">
              {active}
            </span>
          )}
        </button>
      )}
    >
      {(close) => (
        <div className="w-[280px] p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-10">Bộ lọc</span>
            <button
              onClick={() => onChange(EMPTY_FILTERS)}
              className="text-xs font-medium text-blue-6 hover:text-blue-7"
            >
              Xóa tất cả
            </button>
          </div>

          <FilterGroup label="Sale phụ trách">
            {OWNERS.map((o) => (
              <CheckRow
                key={o}
                label={o}
                checked={filters.owners.includes(o)}
                onChange={() => onChange({ ...filters, owners: toggle(filters.owners, o) })}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Cơ sở">
            {BRANCHES.map((b) => (
              <CheckRow
                key={b}
                label={b}
                checked={filters.branches.includes(b)}
                onChange={() => onChange({ ...filters, branches: toggle(filters.branches, b) })}
              />
            ))}
          </FilterGroup>

          <FilterGroup label="Trạng thái follow-up">
            <CheckRow
              label="Chỉ Lead quá hạn follow-up"
              checked={filters.overdueOnly}
              onChange={() => onChange({ ...filters, overdueOnly: !filters.overdueOnly })}
            />
          </FilterGroup>

          <div className="mt-4 flex justify-end">
            <Button size="sm" variant="primary" onClick={close}>
              Áp dụng
            </Button>
          </div>
        </div>
      )}
    </Popover>
  );
}

function FilterGroup({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-3">
      <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-wide text-gray-6">{label}</div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-1">{children}</div>
    </div>
  );
}

function CheckRow({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="flex cursor-pointer items-center gap-2 rounded px-1 py-1 text-sm text-gray-8 hover:bg-gray-2">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-3.5 w-3.5 rounded border-gray-5 accent-blue-6"
      />
      <span className="truncate">{label}</span>
    </label>
  );
}
