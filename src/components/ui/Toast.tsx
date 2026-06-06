"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { Icon } from "./Icon";

type ToastType = "success" | "error" | "info";
interface ToastItem {
  id: string;
  message: string;
  type: ToastType;
}

const ToastContext = createContext<(message: string, type?: ToastType) => void>(() => {});

/** Wrap the app (or a route subtree) to enable useToast(). */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const push = useCallback((message: string, type: ToastType = "success") => {
    const id = Math.random().toString(36).slice(2);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3200);
  }, []);

  const remove = (id: string) => setToasts((prev) => prev.filter((t) => t.id !== id));

  return (
    <ToastContext.Provider value={push}>
      {children}
      <div className="fixed bottom-6 right-6 z-[300] flex flex-col gap-2" aria-live="polite">
        {toasts.map((t) => (
          <div
            key={t.id}
            role="status"
            className={`toast-enter flex min-w-[260px] items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white shadow-landing-lg ${
              t.type === "success" ? "bg-green-6" : t.type === "error" ? "bg-red-6" : "bg-gray-10"
            }`}
          >
            <Icon
              name={t.type === "success" ? "check" : t.type === "error" ? "warning" : "bell"}
              className="w-4 h-4 shrink-0"
            />
            <span className="flex-1">{t.message}</span>
            <button
              aria-label="Đóng"
              onClick={() => remove(t.id)}
              className="opacity-70 hover:opacity-100"
            >
              <Icon name="close" className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  return useContext(ToastContext);
}
