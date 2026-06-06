"use client";

import { forwardRef, type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Adds pointer cursor + hover elevation/border for clickable cards. */
  interactive?: boolean;
}

/** Design-System surface container. */
export const Card = forwardRef<HTMLDivElement, CardProps>(function Card(
  { interactive = false, className = "", children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl border border-gray-4 ${
        interactive
          ? "cursor-pointer transition-all hover:border-blue-4 hover:shadow-landing-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-5"
          : ""
      } ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
});
