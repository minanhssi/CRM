"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Lightweight anchored popover (outside-click + Escape to close).
 * Used for the "Bộ lọc" filter panel.
 */
export function Popover({
  trigger,
  children,
  align = "right",
  className = "",
}: {
  trigger: (props: { open: boolean; toggle: () => void; ref: (el: HTMLButtonElement | null) => void }) => ReactNode;
  children: (close: () => void) => ReactNode;
  align?: "left" | "right";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    function onDown(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
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
    <div ref={wrapRef} className={`relative ${className}`}>
      {trigger({
        open,
        toggle: () => setOpen((o) => !o),
        ref: (el) => (triggerRef.current = el),
      })}
      {open && (
        <div
          className={`absolute z-50 mt-2 rounded-xl border border-gray-4 bg-white shadow-landing-lg ${
            align === "right" ? "right-0" : "left-0"
          }`}
        >
          {children(() => setOpen(false))}
        </div>
      )}
    </div>
  );
}
