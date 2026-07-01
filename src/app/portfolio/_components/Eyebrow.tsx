export function Eyebrow({ children, color = "accent" }: { children: React.ReactNode; color?: "accent" | "yellow" | "cream" }) {
  const map = {
    accent: "text-port-accent",
    yellow: "text-port-yellow",
    cream: "text-port-ink",
  };
  return (
    <p className={`text-[13px] font-semibold tracking-[2.5px] uppercase ${map[color]}`}>
      {children}
    </p>
  );
}
