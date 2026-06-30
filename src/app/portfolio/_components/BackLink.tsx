import Link from "next/link";

export function BackLink() {
  return (
    <Link
      href="/portfolio"
      className="inline-flex items-center gap-2 text-[12px] font-semibold tracking-[1.8px] uppercase text-[#F5F0E3]/70 transition-colors hover:text-port-yellow"
    >
      <span aria-hidden>←</span>
      All work
    </Link>
  );
}
