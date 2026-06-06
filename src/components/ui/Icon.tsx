"use client";

import type { SVGProps } from "react";

/**
 * Design-System icon library.
 * Single source of truth for all inline SVG glyphs used across the app.
 * Usage: <Icon name="search" className="w-4 h-4" />
 */

export type IconName =
  | "search"
  | "filter"
  | "import"
  | "export"
  | "plus"
  | "chevron-down"
  | "chevron-up"
  | "chevron-left"
  | "chevron-right"
  | "dots"
  | "calendar"
  | "phone"
  | "link"
  | "back"
  | "copy"
  | "trash"
  | "close"
  | "check"
  | "warning"
  | "user"
  | "leaf"
  | "panel"
  | "fire"
  | "flame"
  | "clock"
  | "target"
  | "checkCircle"
  | "megaphone"
  | "handshake"
  | "chart"
  | "shield"
  | "plug"
  | "addressBook"
  | "cart"
  | "swap"
  | "bell"
  | "logout"
  | "edit"
  | "message";

// Most icons are 24-grid stroked paths. A few use fill (dots, fire).
const STROKE: Record<string, string> = {
  search: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z",
  filter: "M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z",
  import: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V3",
  export: "M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5-5m0 0l5 5m-5-5v12",
  plus: "M12 4v16m8-8H4",
  "chevron-down": "M19 9l-7 7-7-7",
  "chevron-up": "M5 15l7-7 7 7",
  "chevron-left": "M15 19l-7-7 7-7",
  "chevron-right": "M9 5l7 7-7 7",
  calendar: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z",
  phone: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
  link: "M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1",
  back: "M10 19l-7-7m0 0l7-7m-7 7h18",
  copy: "M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z",
  trash: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16",
  close: "M6 18L18 6M6 6l12 12",
  check: "M5 13l4 4L19 7",
  warning: "M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z",
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  leaf: "M5 21c.5-4.5 2.5-8 7-10M3 13c0-5 4-9 9-9 4 0 6 1 6 1s1 2 1 6c0 5-4 9-9 9-2 0-4-1-4-1s1-4 4-6",
  panel: "M9 4v16M4 6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6z",
  clock: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
  target: "M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 100 12 6 6 0 000-12zm0 4a2 2 0 100 4 2 2 0 000-4z",
  checkCircle: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  megaphone: "M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 010 7.07M19.07 4.93a10 10 0 010 14.14",
  handshake: "M7 11l3-3 4 4 3-3 3 3M3 12a9 9 0 1018 0 9 9 0 00-18 0z",
  chart: "M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z",
  plug: "M13 10V3L4 14h7v7l9-11h-7z",
  addressBook: "M16 4H8a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V6a2 2 0 00-2-2zM6 9H3m3 3H3m3 3H3m9-4a2 2 0 100-4 2 2 0 000 4zm3 5a3 3 0 00-6 0",
  cart: "M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293A1 1 0 005.414 17H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z",
  swap: "M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4",
  bell: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 00-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
  logout: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1",
  edit: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  message: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
};

const FILL: Record<string, string> = {
  dots: "M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z",
  fire: "M12.5 2c.5 3-1.5 4-2.5 5.5C8.5 9.5 8 11 8 12.5a4.5 4.5 0 109 0c0-1.2-.4-2.2-1-3 .2 1 .1 2-.6 2.7.3-2-.7-4.2-2.9-5.2.5 1.3.3 2.5-.5 3.3.3-1.8-.5-3.6-2-4.3.6 1 .5 2-.5 2.7C8 8.7 9 5 12.5 2z",
  flame: "M12.5 2c.5 3-1.5 4-2.5 5.5C8.5 9.5 8 11 8 12.5a4.5 4.5 0 109 0c0-1.2-.4-2.2-1-3 .2 1 .1 2-.6 2.7.3-2-.7-4.2-2.9-5.2.5 1.3.3 2.5-.5 3.3.3-1.8-.5-3.6-2-4.3.6 1 .5 2-.5 2.7C8 8.7 9 5 12.5 2z",
};

interface IconProps extends Omit<SVGProps<SVGSVGElement>, "name"> {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

export function Icon({ name, className = "w-4 h-4", strokeWidth = 1.8, ...rest }: IconProps) {
  if (FILL[name]) {
    return (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden {...rest}>
        <path d={FILL[name]} />
      </svg>
    );
  }
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={strokeWidth} d={STROKE[name]} />
    </svg>
  );
}
