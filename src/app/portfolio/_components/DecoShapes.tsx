"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Decorative background shapes. Renders large SVG blobs / arcs / dot grid
 * as ambient decoration; absolute positioned so they sit behind content.
 * Uses framer-motion for parallax on scroll.
 */
export function DecoShapes({
  variant = "hero",
  parallax = true,
}: {
  variant?: "hero" | "about" | "skills" | "footer";
  parallax?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const yA = useTransform(scrollY, [0, 800], [0, parallax ? -120 : 0]);
  const yB = useTransform(scrollY, [0, 800], [0, parallax ? 60 : 0]);
  const rotate = useTransform(scrollY, [0, 800], [0, parallax ? 24 : 0]);

  if (variant === "hero") {
    return (
      <div ref={ref} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Orange gradient half-circle bottom-left */}
        <svg
          className="absolute -bottom-[160px] -left-[120px] h-[420px] w-[420px]"
          viewBox="0 0 200 200"
        >
          <defs>
            <radialGradient id="heroOrange" cx="30%" cy="30%" r="80%">
              <stop offset="0%" stopColor="#FFB84D" />
              <stop offset="100%" stopColor="#F37B23" />
            </radialGradient>
          </defs>
          <circle cx="60" cy="140" r="120" fill="url(#heroOrange)" />
        </svg>

        {/* Blue dot grid top-left (subtle purple-blue) */}
        <svg className="absolute left-8 top-20 h-24 w-24 text-port-blue/30" viewBox="0 0 120 120">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={10 + c * 18} cy={10 + r * 18} r="2" fill="currentColor" />
            ))
          )}
        </svg>

        {/* Scattered lavender dots bottom-left area */}
        <svg className="absolute bottom-24 left-40 h-16 w-24 text-port-blue/35" viewBox="0 0 120 80">
          <circle cx="10" cy="20" r="2" fill="currentColor" />
          <circle cx="30" cy="10" r="2" fill="currentColor" />
          <circle cx="50" cy="30" r="2" fill="currentColor" />
          <circle cx="70" cy="15" r="2" fill="currentColor" />
          <circle cx="90" cy="35" r="2" fill="currentColor" />
          <circle cx="20" cy="50" r="2" fill="currentColor" />
          <circle cx="60" cy="60" r="2" fill="currentColor" />
        </svg>
      </div>
    );
  }

  if (variant === "about") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Small blue blob top-right */}
        <svg viewBox="0 0 300 300" className="absolute -right-16 top-10 h-72 w-72 text-port-blue/70">
          <path
            fill="currentColor"
            d="M150 30c40 0 78 18 100 50s26 78 12 116-52 66-96 74-90-10-116-50-30-92-8-130 50-60 108-60z"
          />
        </svg>
        {/* Yellow squiggle */}
        <svg viewBox="0 0 200 60" className="absolute bottom-20 left-12 h-14 w-64 text-port-yellow" fill="none">
          <path
            d="M4 40 Q30 8 60 30 T120 30 T180 30 Q190 30 196 20"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
    );
  }

  if (variant === "skills") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Yellow blob bottom-right */}
        <svg viewBox="0 0 400 400" className="absolute -bottom-24 -right-16 h-96 w-96 text-port-yellow">
          <path
            fill="currentColor"
            d="M200 40c55 0 100 20 130 60s40 90 20 130-60 80-120 100-100 0-140-40-40-100-30-160 40-90 140-90z"
          />
        </svg>
        {/* Blue dots grid top-left */}
        <svg className="absolute left-8 top-16 h-28 w-28 text-port-blue/40" viewBox="0 0 120 120">
          {Array.from({ length: 6 }).map((_, r) =>
            Array.from({ length: 6 }).map((_, c) => (
              <circle key={`${r}-${c}`} cx={10 + c * 20} cy={10 + r * 20} r="2.5" fill="currentColor" />
            ))
          )}
        </svg>
      </div>
    );
  }

  if (variant === "footer") {
    return (
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
        {/* Yellow arc bottom-right */}
        <svg viewBox="0 0 400 400" className="absolute -bottom-20 -right-20 h-96 w-96 text-port-yellow" fill="none">
          <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" />
          <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" />
        </svg>
        {/* Blue soft blob top-left */}
        <svg viewBox="0 0 400 400" className="absolute -top-20 -left-20 h-96 w-96 text-port-blue">
          <path
            fill="currentColor"
            fillOpacity="0.85"
            d="M200 40c65 0 118 30 148 82s34 116 4 168-90 84-152 82-118-38-146-88-14-118 22-166 62-78 124-78z"
          />
        </svg>
      </div>
    );
  }

  return null;
}
