"use client";

import { Icon } from "./Icon";

interface SearchInputProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
  "aria-label"?: string;
}

/** Design-System search field with leading magnifier + clear affordance. */
export function SearchInput({
  value,
  onChange,
  placeholder = "Tìm kiếm...",
  className = "",
  ...rest
}: SearchInputProps) {
  return (
    <div className={`relative ${className}`}>
      <Icon
        name="search"
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-6"
      />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        aria-label={rest["aria-label"] ?? placeholder}
        className="w-full h-9 pl-9 pr-8 text-sm rounded-lg border border-gray-4 bg-white text-gray-9 placeholder-gray-6 focus:outline-none focus:border-blue-5 focus:ring-1 focus:ring-blue-5"
      />
      {value && (
        <button
          type="button"
          aria-label="Xóa tìm kiếm"
          onClick={() => onChange("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded text-gray-6 hover:text-gray-9 hover:bg-gray-3"
        >
          <Icon name="close" className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
