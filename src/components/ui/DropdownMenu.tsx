"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

export interface MenuItem {
  label: string;
  icon?: IconName;
  danger?: boolean;
  onSelect: () => void;
}

interface DropdownMenuProps {
  /** Custom trigger. Receives open state. Defaults to a 3-dot icon button. */
  trigger?: (open: boolean) => ReactNode;
  items: MenuItem[];
  align?: "left" | "right";
  triggerLabel?: string;
  className?: string;
}

/**
 * Accessible dropdown / overflow menu. Closes on outside click + Escape.
 * Used for the card overflow menu, the Export split-button and detail
 * "More actions" menu.
 */
export function DropdownMenu({
  trigger,
  items,
  align = "right",
  triggerLabel = "Mở menu",
  className = "",
}: DropdownMenuProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={triggerLabel}
        onClick={(e) => {
          e.stopPropagation();
          e.preventDefault();
          setOpen((o) => !o);
        }}
        className={
          trigger
            ? ""
            : "inline-flex items-center justify-center w-7 h-7 rounded-md text-gray-6 hover:bg-gray-3 hover:text-gray-9 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-5"
        }
      >
        {trigger ? trigger(open) : <Icon name="dots" className="w-4 h-4" />}
      </button>

      {open && (
        <div
          role="menu"
          className={`absolute z-50 mt-1 min-w-[176px] rounded-lg border border-gray-4 bg-white py-1 shadow-landing-lg ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {items.map((item) => (
            <button
              key={item.label}
              role="menuitem"
              onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setOpen(false);
                item.onSelect();
              }}
              className={`flex w-full items-center gap-2.5 px-3 py-2 text-left text-sm transition-colors ${
                item.danger
                  ? "text-red-6 hover:bg-red-1"
                  : "text-gray-9 hover:bg-gray-2"
              }`}
            >
              {item.icon && <Icon name={item.icon} className="w-4 h-4 shrink-0" />}
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
