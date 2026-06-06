"use client";

import { useId, useState, type ReactNode } from "react";
import { Icon } from "./Icon";

/**
 * Material-style outlined field with a floating label, matching the Lead
 * detail/edit reference screen. Backs Input, Textarea, Select and DatePicker.
 */
function FieldShell({
  label,
  htmlFor,
  floated,
  required,
  error,
  trailing,
  children,
}: {
  label: string;
  htmlFor: string;
  floated: boolean;
  required?: boolean;
  error?: string;
  trailing?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="relative">
      <div
        className={`relative rounded-md border bg-white transition-colors ${
          error ? "border-red-5" : "border-gray-5 focus-within:border-blue-6"
        }`}
      >
        {children}
        {trailing && (
          <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-6">
            {trailing}
          </div>
        )}
        <label
          htmlFor={htmlFor}
          className={`pointer-events-none absolute left-3 origin-left bg-white px-1 transition-all ${
            floated
              ? "-top-2 text-[11px] " + (error ? "text-red-5" : "text-gray-7")
              : "top-1/2 -translate-y-1/2 text-sm text-gray-6"
          }`}
        >
          {label}
          {required && <span className="text-red-5"> *</span>}
        </label>
      </div>
      {error && <p className="mt-1 px-1 text-[11px] text-red-5">{error}</p>}
    </div>
  );
}

interface BaseProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

export function Input({ label, value, onChange, required, error, className = "", type = "text" }: BaseProps & { type?: string }) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  return (
    <div className={className}>
      <FieldShell label={label} htmlFor={id} floated={focused || value !== ""} required={required} error={error}>
        <input
          id={id}
          type={type}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent px-3 py-2.5 text-sm text-gray-10 outline-none"
        />
      </FieldShell>
    </div>
  );
}

export function Textarea({ label, value, onChange, required, error, className = "", rows = 3 }: BaseProps & { rows?: number }) {
  const id = useId();
  const [focused, setFocused] = useState(false);
  return (
    <div className={className}>
      <FieldShell label={label} htmlFor={id} floated={focused || value !== ""} required={required} error={error}>
        <textarea
          id={id}
          rows={rows}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={(e) => onChange(e.target.value)}
          className="w-full resize-y bg-transparent px-3 py-2.5 text-sm text-gray-10 outline-none"
        />
      </FieldShell>
    </div>
  );
}

export function Select({
  label,
  value,
  onChange,
  options,
  placeholder,
  required,
  error,
  className = "",
}: BaseProps & { options: { value: string; label: string }[]; placeholder?: string }) {
  const id = useId();
  return (
    <div className={className}>
      <FieldShell
        label={label}
        htmlFor={id}
        floated={value !== ""}
        required={required}
        error={error}
        trailing={<Icon name="chevron-down" className="w-4 h-4" />}
      >
        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none bg-transparent px-3 py-2.5 pr-9 text-sm outline-none ${
            value === "" ? "text-transparent" : "text-gray-10"
          }`}
        >
          <option value="" disabled hidden>
            {placeholder ?? ""}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </FieldShell>
    </div>
  );
}

export function DatePicker({ label, value, onChange, required, error, className = "" }: BaseProps) {
  const id = useId();
  return (
    <div className={className}>
      <FieldShell
        label={label}
        htmlFor={id}
        floated={value !== ""}
        required={required}
        error={error}
        trailing={<Icon name="calendar" className="w-4 h-4" />}
      >
        <input
          id={id}
          type="date"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full bg-transparent px-3 py-2.5 pr-9 text-sm outline-none [&::-webkit-calendar-picker-indicator]:opacity-0 ${
            value === "" ? "text-transparent" : "text-gray-10"
          }`}
        />
      </FieldShell>
    </div>
  );
}
