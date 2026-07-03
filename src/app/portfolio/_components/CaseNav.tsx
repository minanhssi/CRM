import Link from "next/link";
import Image from "next/image";

const ORDER = [
  { slug: "klbp", title: "KienlongBank Pay", thumb: "/portfolio/Thumbnail-KLBP.svg", w: 1440, h: 810 },
  { slug: "ewa", title: "Earned Wage Access", thumb: "/portfolio/Thumbnail-EWA-PNG.png", w: 1584, h: 954 },
  { slug: "ezpos", title: "EzPOS", thumb: "/portfolio/Thumbnail-EzPOS.png", w: 1440, h: 810 },
  { slug: "integration", title: "Integration feature", thumb: "/portfolio/Thumbnail-Integration.png", w: 1440, h: 810 },
];

export function CaseNav({ currentSlug }: { currentSlug: string }) {
  const idx = ORDER.findIndex(o => o.slug === currentSlug);
  const prev = idx > 0 ? ORDER[idx - 1] : ORDER[ORDER.length - 1];
  const next = idx < ORDER.length - 1 ? ORDER[idx + 1] : ORDER[0];

  return (
    <section className="bg-port-tint-gray border-t border-port-border">
      <div className="mx-auto grid max-w-[1320px] gap-6 px-6 py-16 md:grid-cols-2 md:px-12">
        <CaseNavCard direction="prev" item={prev} />
        <CaseNavCard direction="next" item={next} />
      </div>
    </section>
  );
}

function CaseNavCard({
  direction,
  item,
}: {
  direction: "prev" | "next";
  item: (typeof ORDER)[number];
}) {
  const isNext = direction === "next";
  return (
    <Link
      href={`/portfolio/${item.slug}`}
      className={`group relative flex items-center gap-6 rounded-2xl border border-port-border bg-white p-5 shadow-[0_10px_28px_-18px_rgba(21,21,21,0.12)] transition-all duration-500 hover:-translate-y-1 hover:border-port-ink hover:shadow-[0_20px_50px_-14px_rgba(21,21,21,0.2)] ${isNext ? "md:flex-row-reverse md:text-right" : ""}`}
    >
      <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-xl bg-port-tint-gray sm:w-36">
        <Image
          src={item.thumb}
          alt={item.title}
          width={item.w}
          height={item.h}
          sizes="180px"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold tracking-[1.8px] uppercase text-port-muted">
          {isNext ? "Next case study" : "Previous case study"}
        </p>
        <h4 className="mt-2 font-serif text-2xl leading-tight text-port-ink">{item.title}</h4>
        <div
          className={`mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-port-ink transition-transform ${isNext ? "group-hover:translate-x-1" : "group-hover:-translate-x-1"}`}
        >
          {isNext ? (
            <>
              Read next <span aria-hidden>→</span>
            </>
          ) : (
            <>
              <span aria-hidden>←</span> Read previous
            </>
          )}
        </div>
      </div>
    </Link>
  );
}
