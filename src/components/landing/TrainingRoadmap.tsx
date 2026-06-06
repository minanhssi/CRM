import type { CSSProperties, ReactNode } from "react";

type Accent = "primary" | "secondary" | "yellow" | "teal";

type Module = {
  name: string;
  /** 1-indexed inclusive start grade column (1..6) */
  startCol: number;
  /** 1-indexed inclusive end grade column (1..6) */
  endCol: number;
};

type Pathway = {
  id: string;
  title: string;
  icon: ReactNode;
  accent: Accent;
  modules: Module[];
};

const GRADES = ["Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5", "Lớp 5+"];

const ACCENTS: Record<
  Accent,
  {
    laneBg: string;
    labelBg: string;
    labelRing: string;
    labelText: string;
    iconBg: string;
    pillBg: string;
    pillRing: string;
    pillText: string;
  }
> = {
  primary: {
    laneBg: "bg-landing-primary-50/60",
    labelBg: "bg-landing-primary-500",
    labelRing: "ring-landing-primary-600",
    labelText: "text-white",
    iconBg: "bg-white/15 text-white",
    pillBg: "bg-white",
    pillRing: "ring-landing-primary-200",
    pillText: "text-landing-primary-600",
  },
  secondary: {
    laneBg: "bg-landing-secondary-100/60",
    labelBg: "bg-landing-secondary-500",
    labelRing: "ring-landing-secondary-600",
    labelText: "text-white",
    iconBg: "bg-white/15 text-white",
    pillBg: "bg-white",
    pillRing: "ring-landing-secondary-400/40",
    pillText: "text-landing-secondary-600",
  },
  yellow: {
    laneBg: "bg-[#fff7d6]/70",
    labelBg: "bg-landing-yellow-400",
    labelRing: "ring-landing-yellow-300",
    labelText: "text-landing-primary-600",
    iconBg: "bg-landing-primary-600/10 text-landing-primary-600",
    pillBg: "bg-white",
    pillRing: "ring-landing-yellow-300",
    pillText: "text-landing-primary-600",
  },
  teal: {
    laneBg: "bg-[#e6f7f4]/70",
    labelBg: "bg-[#0e9b86]",
    labelRing: "ring-[#0a7e6d]",
    labelText: "text-white",
    iconBg: "bg-white/15 text-white",
    pillBg: "bg-white",
    pillRing: "ring-[#0e9b86]/30",
    pillText: "text-[#0a7e6d]",
  },
};

const PATHWAYS: Pathway[] = [
  {
    id: "chinh-phuc",
    title: "Chinh phục chất lượng cao",
    accent: "primary",
    icon: <TrophyIcon />,
    modules: [
      { name: "Nền Tảng", startCol: 1, endCol: 2 },
      { name: "Tăng Tốc", startCol: 3, endCol: 3 },
      { name: "Chiến Thuật Thi Chuyên", startCol: 4, endCol: 5 },
      { name: "Chuyên Sâu", startCol: 6, endCol: 6 },
    ],
  },
  {
    id: "kien-mentor",
    title: "Kiến Mentor",
    accent: "secondary",
    icon: <SparkleIcon />,
    modules: [
      { name: "Khai Phá Ngôn Từ", startCol: 1, endCol: 1 },
      { name: "Văn Cảm Thụ", startCol: 2, endCol: 2 },
      { name: "Văn Nghị Luận", startCol: 3, endCol: 3 },
      { name: "Nền Tảng", startCol: 4, endCol: 4 },
      { name: "Tinh Hoa", startCol: 5, endCol: 6 },
    ],
  },
  {
    id: "dau-truong",
    title: "Đấu trường quốc tế",
    accent: "yellow",
    icon: <GlobeIcon />,
    modules: [
      { name: "Kỹ Năng Toàn Cầu", startCol: 1, endCol: 2 },
      { name: "Tiếng Anh Chứng Chỉ", startCol: 3, endCol: 4 },
      { name: "Olympic Toán Quốc Tế", startCol: 5, endCol: 6 },
    ],
  },
  {
    id: "vtest",
    title: "Hệ thống Vtest",
    accent: "teal",
    icon: <ChartIcon />,
    modules: [
      { name: "Chẩn Đoán", startCol: 1, endCol: 2 },
      { name: "Luyện Tập", startCol: 3, endCol: 4 },
      { name: "Phòng Thi Ảo", startCol: 5, endCol: 6 },
    ],
  },
];

const LABEL_COL_WIDTH = "minmax(220px, 240px)";
const GRADE_COL_TEMPLATE = `${LABEL_COL_WIDTH} repeat(${GRADES.length}, minmax(0, 1fr))`;

export default function TrainingRoadmap() {
  return (
    <section
      aria-labelledby="training-roadmap-title"
      className="font-display relative w-full bg-landing-bg"
      style={{ minHeight: 800 }}
    >
      <DotGridBackdrop />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-8 py-16 md:px-16 md:py-20 lg:px-[100px] lg:py-[100px]">
        <header className="flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-landing-secondary-100 px-4 py-1.5 text-sm font-semibold uppercase tracking-wider text-landing-secondary-600">
            <SparkleIcon className="h-4 w-4" />
            Hệ sinh thái Kiến Trẻ
          </span>
          <h2
            id="training-roadmap-title"
            className="max-w-[920px] text-3xl font-extrabold leading-tight text-landing-primary-500 md:text-[40px] md:leading-[52px] lg:text-[48px] lg:leading-[60px]"
          >
            Lộ trình đào tạo{" "}
            <span className="relative inline-block text-landing-secondary-500">
              hệ sinh thái Kiến Trẻ
              <span
                aria-hidden
                className="absolute inset-x-0 -bottom-1 h-2 rounded-full bg-landing-yellow-300/70"
              />
            </span>
          </h2>
          <p className="max-w-[760px] text-base text-landing-primary-400 md:text-lg md:leading-7">
            Hành trình học tập rõ ràng từ nền tảng đến bứt phá, giúp học sinh phát
            triển tư duy, ngôn ngữ và năng lực thi đấu.
          </p>
        </header>

        <div className="rounded-3xl bg-white/85 p-4 shadow-landing-lg ring-1 ring-landing-line backdrop-blur-sm md:p-6">
          <div className="overflow-x-auto lg:overflow-visible">
            <div
              role="grid"
              aria-label="Lộ trình đào tạo theo khối lớp"
              className="flex min-w-[1040px] flex-col gap-3 lg:min-w-0"
            >
              <GradeAxis />
              <ul className="flex flex-col gap-3">
                {PATHWAYS.map((p) => (
                  <PathwayLane key={p.id} pathway={p} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function GradeAxis() {
  return (
    <div
      role="row"
      className="grid items-center gap-2"
      style={{ gridTemplateColumns: GRADE_COL_TEMPLATE }}
    >
      <div role="columnheader" aria-label="Hệ chương trình" />
      {GRADES.map((g) => (
        <div
          key={g}
          role="columnheader"
          className="flex justify-center"
        >
          <span className="inline-flex min-w-[72px] items-center justify-center rounded-full bg-landing-primary-50 px-3 py-1.5 text-sm font-bold text-landing-primary-500 ring-1 ring-landing-primary-200">
            {g}
          </span>
        </div>
      ))}
    </div>
  );
}

function PathwayLane({ pathway }: { pathway: Pathway }) {
  const tones = ACCENTS[pathway.accent];
  return (
    <li
      role="row"
      className={`grid items-stretch gap-2 rounded-2xl ${tones.laneBg} p-2`}
      style={{ gridTemplateColumns: GRADE_COL_TEMPLATE }}
    >
      <div
        role="rowheader"
        className={`flex items-center gap-3 rounded-xl ${tones.labelBg} ${tones.labelText} px-4 py-4 shadow-landing-md ring-1 ${tones.labelRing}`}
      >
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${tones.iconBg}`}
          aria-hidden
        >
          {pathway.icon}
        </span>
        <span className="text-base font-bold leading-snug md:text-[17px]">
          {pathway.title}
        </span>
      </div>

      <div
        className="relative col-span-6 grid items-center gap-2 py-2"
        style={{
          gridTemplateColumns: `repeat(${GRADES.length}, minmax(0, 1fr))`,
        }}
      >
        <LaneTrack accent={pathway.accent} />
        {pathway.modules.map((m) => (
          <ModulePill
            key={`${pathway.id}-${m.name}`}
            module={m}
            accent={pathway.accent}
          />
        ))}
      </div>
    </li>
  );
}

function LaneTrack({ accent }: { accent: Accent }) {
  const colorByAccent: Record<Accent, string> = {
    primary: "bg-landing-primary-200/60",
    secondary: "bg-landing-secondary-400/40",
    yellow: "bg-landing-yellow-300/60",
    teal: "bg-[#0e9b86]/25",
  };
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute left-3 right-3 top-1/2 -z-0 h-[3px] -translate-y-1/2 rounded-full ${colorByAccent[accent]}`}
      style={{ gridColumn: `1 / -1` }}
    />
  );
}

function ModulePill({ module: m, accent }: { module: Module; accent: Accent }) {
  const tones = ACCENTS[accent];
  const style: CSSProperties = {
    gridColumn: `${m.startCol} / ${m.endCol + 1}`,
  };
  return (
    <div
      role="gridcell"
      style={style}
      className={`relative z-[1] flex h-14 items-center justify-center rounded-full ${tones.pillBg} px-4 text-center text-sm font-bold leading-tight shadow-landing-md ring-2 ${tones.pillRing} ${tones.pillText} transition-transform hover:-translate-y-0.5 hover:shadow-landing-lg md:text-[15px]`}
    >
      <span className="line-clamp-2">{m.name}</span>
    </div>
  );
}

function DotGridBackdrop() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-60"
      style={{
        backgroundImage:
          "radial-gradient(circle at 1px 1px, #bbcae1 1px, transparent 0)",
        backgroundSize: "28px 28px",
        maskImage:
          "linear-gradient(180deg, transparent 0, #000 14%, #000 86%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(180deg, transparent 0, #000 14%, #000 86%, transparent 100%)",
      }}
    />
  );
}

/* ---------- Inline icons (single-color, stroke-current) ---------- */

function TrophyIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M8 21h8M12 17v4M7 4h10v4a5 5 0 0 1-10 0V4z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
  );
}

function SparkleIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 3l1.6 4.6L18 9.2l-4.4 1.6L12 15l-1.6-4.2L6 9.2l4.4-1.6L12 3z" />
      <path d="M19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
    </svg>
  );
}

function GlobeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  );
}

function ChartIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M4 19h16" />
      <rect x="6" y="11" width="3" height="6" rx="1" />
      <rect x="11" y="7" width="3" height="10" rx="1" />
      <rect x="16" y="13" width="3" height="4" rx="1" />
    </svg>
  );
}
