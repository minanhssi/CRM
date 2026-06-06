"use client";

import type { ReactNode } from "react";

export interface TabItem<T extends string> {
  key: T;
  label: ReactNode;
}

/**
 * Segmented-control style tabs.
 * - variant "navy" (default): navy-filled active segment — time filter (Tất cả / Ngày / …)
 * - variant "white": white active pill on a light blue-gray track — Bảng / Kanban switcher
 */
export function SegmentedTabs<T extends string>({
  items,
  value,
  onChange,
  size = "md",
  variant = "navy",
  className = "",
}: {
  items: TabItem<T>[];
  value: T;
  onChange: (key: T) => void;
  size?: "sm" | "md";
  variant?: "navy" | "white";
  className?: string;
}) {
  const pad = size === "sm" ? "px-3.5 py-1.5 text-xs" : "px-5 py-2 text-sm";
  const isWhite = variant === "white";

  const track = isWhite ? "rounded-xl bg-[#e8ecf5]" : "rounded-lg bg-gray-3";
  const radius = isWhite ? "rounded-lg" : "rounded-md";
  const activeCls = isWhite
    ? "bg-white text-gray-10 font-semibold shadow-[0_1px_3px_rgba(0,0,0,0.12)]"
    : "bg-brand-action text-white font-medium shadow-sm";
  const inactiveCls = isWhite
    ? "text-[#8b94a7] hover:text-gray-9 font-medium"
    : "text-gray-7 hover:text-gray-9 font-medium";

  return (
    <div role="tablist" className={`inline-flex items-center gap-1 p-1 ${track} ${className}`}>
      {items.map((item) => {
        const active = item.key === value;
        return (
          <button
            key={item.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.key)}
            className={`${radius} ${pad} transition-colors ${active ? activeCls : inactiveCls}`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}

/**
 * Underline-style tabs — used on the Lead detail page
 * (Thông tin chung / Đơn hàng / Đăng ký tư vấn / Lịch sử).
 */
export function UnderlineTabs<T extends string>({
  items,
  value,
  onChange,
  className = "",
}: {
  items: TabItem<T>[];
  value: T;
  onChange: (key: T) => void;
  className?: string;
}) {
  return (
    <div role="tablist" className={`flex items-center gap-1 border-b border-gray-4 ${className}`}>
      {items.map((item) => {
        const active = item.key === value;
        return (
          <button
            key={item.key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.key)}
            className={`relative px-4 py-3 text-sm font-medium uppercase tracking-wide transition-colors border-b-2 -mb-px ${
              active
                ? "border-blue-6 text-blue-7"
                : "border-transparent text-gray-7 hover:text-gray-9"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
