import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/portfolio"
      className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[1.8px] uppercase text-port-muted transition-colors hover:text-port-blue"
    >
      <span aria-hidden>←</span>
      All work
    </Link>
  );
}
