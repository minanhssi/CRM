"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { Button } from "./Button";
import { Icon, type IconName } from "./Icon";

/** Backdrop + centered panel with focus trap and Escape-to-close. */
export function Dialog({
  open,
  onClose,
  labelledBy,
  children,
  width = "w-[440px]",
}: {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  children: ReactNode;
  width?: string;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.activeElement as HTMLElement | null;
    panelRef.current?.focus();

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      prev?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 animate-[fadeIn_.15s_ease]" onClick={onClose} />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={labelledBy}
        tabIndex={-1}
        className={`relative z-10 bg-white rounded-2xl shadow-landing-xl outline-none ${width}`}
      >
        {children}
      </div>
    </div>
  );
}

/** Opinionated confirm dialog (used for destructive + unsaved-changes flows). */
export function ConfirmDialog({
  open,
  onClose,
  title,
  description,
  icon = "warning",
  danger = false,
  confirmLabel,
  cancelLabel = "Hủy",
  onConfirm,
  /** Optional third action (e.g. "Lưu thay đổi" in unsaved-changes flow). */
  tertiaryLabel,
  onTertiary,
}: {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  icon?: IconName;
  danger?: boolean;
  confirmLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  tertiaryLabel?: string;
  onTertiary?: () => void;
}) {
  const titleId = "confirm-dialog-title";
  return (
    <Dialog open={open} onClose={onClose} labelledBy={titleId}>
      <div className="p-6">
        <div className="flex items-start gap-3.5">
          <div
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
              danger ? "bg-red-1 text-red-6" : "bg-blue-1 text-blue-6"
            }`}
          >
            <Icon name={icon} className="w-5 h-5" />
          </div>
          <div className="pt-0.5">
            <h3 id={titleId} className="text-base font-semibold text-gray-10">
              {title}
            </h3>
            {description && <p className="mt-1 text-sm leading-relaxed text-gray-7">{description}</p>}
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="secondary" onClick={onClose}>
            {cancelLabel}
          </Button>
          {tertiaryLabel && onTertiary && (
            <Button variant="secondary" onClick={onTertiary}>
              {tertiaryLabel}
            </Button>
          )}
          <Button variant={danger ? "danger" : "primary"} onClick={onConfirm}>
            {confirmLabel}
          </Button>
        </div>
      </div>
    </Dialog>
  );
}
