"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

type Stage = {
  id: string;
  grade: string;
  title: string;
  body: string;
};

const STAGES: Stage[] = [
  {
    id: "khoi-tao",
    grade: "Lớp 1-2",
    title: "Khởi tạo tư duy",
    body: "Làm quen thuật ngữ Toán tiếng Anh, kích hoạt phản xạ logic qua hình ảnh trực quan.",
  },
  {
    id: "but-pha",
    grade: "Lớp 3",
    title: "Bứt phá nền tảng",
    body: "Học thông qua phương pháp mô hình hóa (Singapore Bar Model) và giải toán đa bước.",
  },
  {
    id: "tang-toc",
    grade: "Lớp 4",
    title: "Tăng tốc chiến thuật",
    body: "Làm chủ các chuyên đề chuyên sâu, rèn kỹ năng xử lý đề thi Olympic chuyên biệt.",
  },
  {
    id: "chinh-phuc",
    grade: "Lớp 5",
    title: "Chinh phục đỉnh cao",
    body: "Hoàn thiện chiến thuật, sẵn sàng bứt phá tại các kỳ thi lớn và trường chất lượng cao.",
  },
];

const AUTO_MS = 3000;

export default function MathPathway() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = setInterval(
      () => setActive((a) => (a + 1) % STAGES.length),
      AUTO_MS
    );
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [paused]);

  return (
    <section
      id="lo-trinh"
      className="font-display w-full scroll-mt-8 bg-landing-bg"
      style={{
        background:
          "linear-gradient(180deg, #f8fbff 0%, #eff5fe 100%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-14 px-8 py-20 md:px-16 lg:px-[100px] lg:py-[100px]">
        <SectionHeader
          title={
            <>
              LỘ TRÌNH{" "}
              <span className="text-landing-secondary-500">“MAY ĐO”</span> THEO
              TỪNG ĐỘ TUỔI
            </>
          }
          subtitle="Phác đồ học “đo ni đóng giày” giúp con tích lũy phản xạ tự nhiên từ lớp nhỏ, tạo đà bứt phá phong độ vững chắc khi bước vào các đấu trường lớn."
        />

        <div
          className="relative"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Winding road */}
          <div className="relative">
            <RoadSvg activeIndex={active} />

            {/* Milestones overlaid */}
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-0">
              {STAGES.map((s, i) => (
                <Milestone
                  key={s.id}
                  stage={s}
                  index={i}
                  isActive={i === active}
                  onSelect={() => setActive(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Milestone({
  stage,
  index,
  isActive,
  onSelect,
}: {
  stage: Stage;
  index: number;
  isActive: boolean;
  onSelect: () => void;
}) {
  // alternate card above / below the road on desktop
  const above = index % 2 === 0;
  return (
    <div
      className={`relative flex flex-col items-center md:min-h-[360px] md:justify-center ${
        above ? "md:pb-[180px]" : "md:pt-[180px]"
      }`}
      onMouseEnter={onSelect}
    >
      <button
        type="button"
        onClick={onSelect}
        aria-pressed={isActive}
        className={`group w-full max-w-[260px] rounded-2xl border px-5 py-5 text-left transition-all duration-300 ${
          isActive
            ? "border-transparent bg-landing-primary-500 text-white shadow-landing-xl md:-translate-y-1"
            : "border-landing-line bg-white text-landing-ink shadow-landing-md hover:-translate-y-0.5 hover:shadow-landing-lg"
        }`}
      >
        <span
          className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-bold ${
            isActive
              ? "bg-landing-secondary-500 text-white"
              : "bg-landing-primary-50 text-landing-primary-500"
          }`}
        >
          {stage.grade}
        </span>
        <h3
          className={`mt-3 text-lg font-bold leading-snug ${
            isActive ? "text-white" : "text-landing-primary-500"
          }`}
        >
          {stage.title}
        </h3>
        <p
          className={`mt-2 text-sm leading-6 transition-all ${
            isActive
              ? "text-white/90"
              : "text-landing-ink/70 line-clamp-2 group-hover:text-landing-ink"
          }`}
        >
          {stage.body}
        </p>
      </button>

      {/* connector dot on the road (desktop) */}
      <span
        aria-hidden
        className={`absolute left-1/2 hidden h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white transition-colors md:block ${
          above ? "md:top-[calc(50%+0px)]" : "md:bottom-[calc(50%+0px)]"
        } ${isActive ? "bg-landing-secondary-500" : "bg-landing-primary-200"}`}
        style={above ? { top: "50%" } : { bottom: "50%" }}
      />
    </div>
  );
}

function RoadSvg({ activeIndex }: { activeIndex: number }) {
  // decorative dashed winding line behind the milestone row (desktop only)
  return (
    <svg
      aria-hidden
      viewBox="0 0 1240 360"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
    >
      <path
        d="M40 250 C 200 250 200 110 360 110 S 520 250 680 250 S 840 110 1000 110 S 1160 250 1200 250"
        fill="none"
        stroke="#bbcae1"
        strokeWidth={4}
        strokeLinecap="round"
        strokeDasharray="2 14"
      />
      <text
        x="1200"
        y="232"
        fontSize="26"
        fontWeight="800"
        fill="#f66600"
        textAnchor="end"
      >
        🏆
      </text>
      <text x="20" y="290" fontSize="13" fontWeight="700" fill="#5c7dae">
        Giai đoạn {activeIndex + 1}/4
      </text>
    </svg>
  );
}
