export function SectionDeco({ variant, color = "currentColor" }: { variant: "dots" | "arrow" | "layers" | "pulse" | "flow"; color?: string }) {
  return (
    <div className="mb-6 inline-flex items-center gap-3 opacity-80">
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden>
        {variant === "dots" && (
          <>
            <circle cx="6" cy="6" r="2" fill={color} />
            <circle cx="18" cy="6" r="2" fill={color} fillOpacity="0.6" />
            <circle cx="30" cy="6" r="2" fill={color} fillOpacity="0.3" />
            <circle cx="6" cy="18" r="2" fill={color} fillOpacity="0.6" />
            <circle cx="18" cy="18" r="3" fill={color} />
            <circle cx="30" cy="18" r="2" fill={color} fillOpacity="0.6" />
            <circle cx="6" cy="30" r="2" fill={color} fillOpacity="0.3" />
            <circle cx="18" cy="30" r="2" fill={color} fillOpacity="0.6" />
            <circle cx="30" cy="30" r="2" fill={color} />
          </>
        )}
        {variant === "arrow" && (
          <>
            <path d="M6 18 H26" stroke={color} strokeWidth="2" strokeLinecap="round" />
            <path d="M20 12 L28 18 L20 24" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            <circle cx="6" cy="18" r="2" fill={color} />
          </>
        )}
        {variant === "layers" && (
          <>
            <rect x="4" y="10" width="28" height="6" rx="1.5" stroke={color} strokeWidth="1.5" />
            <rect x="4" y="18" width="28" height="6" rx="1.5" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.5" />
            <rect x="4" y="26" width="20" height="6" rx="1.5" stroke={color} strokeWidth="1.5" />
          </>
        )}
        {variant === "pulse" && (
          <>
            <path d="M2 18 L10 18 L14 8 L20 28 L24 18 L34 18" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </>
        )}
        {variant === "flow" && (
          <>
            <circle cx="6" cy="6" r="3" stroke={color} strokeWidth="1.5" />
            <circle cx="18" cy="18" r="3" fill={color} />
            <circle cx="30" cy="30" r="3" stroke={color} strokeWidth="1.5" />
            <path d="M8 8 L16 16" stroke={color} strokeWidth="1.2" strokeDasharray="2 2" />
            <path d="M20 20 L28 28" stroke={color} strokeWidth="1.2" strokeDasharray="2 2" />
          </>
        )}
      </svg>
      <div className="h-px w-16" style={{ background: `linear-gradient(to right, ${color}, transparent)` }} />
    </div>
  );
}
