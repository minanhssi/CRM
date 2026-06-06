"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Icon, type IconName } from "./Icon";

type Variant = "primary" | "secondary" | "ghost" | "danger";
type Size = "sm" | "md";

const VARIANT: Record<Variant, string> = {
  primary: "bg-brand-action hover:bg-brand-action-hover text-white border border-transparent",
  secondary: "bg-white hover:bg-gray-2 text-gray-9 border border-gray-5",
  ghost: "bg-transparent hover:bg-gray-3 text-gray-7 border border-transparent",
  danger: "bg-red-6 hover:bg-red-7 text-white border border-transparent",
};

const SIZE: Record<Size, string> = {
  sm: "h-8 px-3 text-xs gap-1.5",
  md: "h-9 px-4 text-sm gap-1.5",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  leadingIcon?: IconName;
  trailingIcon?: IconName;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "secondary", size = "md", leadingIcon, trailingIcon, className = "", children, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-lg font-medium transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-5 focus-visible:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed ${VARIANT[variant]} ${SIZE[size]} ${className}`}
      {...rest}
    >
      {leadingIcon && <Icon name={leadingIcon} className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} className={size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4"} />}
    </button>
  );
});

/** Square icon-only button (overflow triggers, back arrows, utility actions). */
export const IconButton = forwardRef<
  HTMLButtonElement,
  ButtonHTMLAttributes<HTMLButtonElement> & { icon: IconName; label: string; size?: Size }
>(function IconButton({ icon, label, size = "md", className = "", ...rest }, ref) {
  return (
    <button
      ref={ref}
      aria-label={label}
      title={label}
      className={`inline-flex items-center justify-center rounded-lg text-gray-7 hover:bg-gray-3 hover:text-gray-10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-5 ${
        size === "sm" ? "w-7 h-7" : "w-9 h-9"
      } ${className}`}
      {...rest}
    >
      <Icon name={icon} className={size === "sm" ? "w-4 h-4" : "w-[18px] h-[18px]"} />
    </button>
  );
});
