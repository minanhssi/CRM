"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";

type Reason = {
  id: string;
  title: string;
  body: string;
  tone: "navy" | "orange";
};

const REASONS: Reason[] = [
  {
    id: "tu-duy",
    title: "Học đúng tư duy, không học mẹo",
    body: "Con không chỉ học cách tìm ra đáp án, mà học cách phân tích đề, tìm quy luật, chọn chiến thuật và giải thích vì sao cách làm đó đúng.",
    tone: "navy",
  },
  {
    id: "lo-trinh",
    title: "Lộ trình “đo ni đóng giày”",
    body: "Toán TIMO, IKMC hay HKIMO đều có “logic đề” riêng. Kiến Trẻ thiết kế nội dung học cá nhân hóa theo đặc trưng từng kỳ thi, giúp con luyện đúng trọng tâm kiến thức và năng lực.",
    tone: "orange",
  },
  {
    id: "du-lieu",
    title: "Đo năng lực bằng dữ liệu, không cảm tính",
    body: "Báo cáo bằng biểu đồ năng lực hàng tuần giúp ba mẹ thấy rõ con mạnh ở đâu, cần cải thiện gì và cần điều chỉnh lộ trình ra sao cho phù hợp.",
    tone: "navy",
  },
];

export default function WhyMath() {
  return (
    <section className="font-display w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-8 py-20 md:px-16 lg:px-[100px] lg:py-[100px]">
        <SectionHeader
          title={
            <>
              TẠI SAO LÀ{" "}
              <span className="text-landing-secondary-500">TOÁN QUỐC TẾ</span>{" "}
              TẠI KIẾN TRẺ?
            </>
          }
          subtitle="Không học vẹt, không giải toán máy móc. Kiến Trẻ giúp con hiểu bản chất, nhìn bài toán đa chiều và tìm cách giải tối ưu."
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {REASONS.map((r, i) => (
            <FlipCard key={r.id} reason={r} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ reason, index }: { reason: Reason; index: number }) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const showBack = pinned || hovered;

  const frontBg =
    reason.tone === "orange"
      ? "bg-landing-secondary-500"
      : "bg-landing-primary-500";

  return (
    <div
      className="group relative h-[420px] [perspective:1400px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <button
        type="button"
        aria-pressed={showBack}
        onClick={() => setPinned((p) => !p)}
        className="relative h-full w-full rounded-3xl text-left outline-none transition-transform duration-700 [transform-style:preserve-3d] focus-visible:ring-4 focus-visible:ring-landing-secondary-500/40"
        style={{ transform: showBack ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* FRONT */}
        <div
          className={`absolute inset-0 flex flex-col items-center overflow-hidden rounded-3xl px-6 pt-9 shadow-landing-lg [backface-visibility:hidden] ${frontBg}`}
        >
          <h3 className="text-center text-xl font-bold leading-snug text-white md:text-[22px]">
            {reason.title}
          </h3>
          <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/85">
            <RefreshIcon className="h-4 w-4" />
            Xem mặt sau
          </span>
          <RocketArt className="mt-auto h-44 w-full text-white/85" />
          <span className="absolute right-5 top-5 text-sm font-extrabold text-white/40">
            0{index}
          </span>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 flex flex-col rounded-3xl border border-landing-line bg-white px-7 py-9 shadow-landing-lg [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <span
            className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl text-lg font-extrabold text-white ${frontBg}`}
          >
            0{index}
          </span>
          <h3 className="text-xl font-bold leading-snug text-landing-primary-500 md:text-[22px]">
            {reason.title}
          </h3>
          <p className="mt-3 text-base leading-7 text-landing-ink/80">
            {reason.body}
          </p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-landing-secondary-600">
            <RefreshIcon className="h-4 w-4" />
            Xem mặt trước
          </span>
        </div>
      </button>
    </div>
  );
}

function RefreshIcon({ className = "h-4 w-4" }: { className?: string }) {
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
      <path d="M21 12a9 9 0 1 1-2.64-6.36M21 4v5h-5" />
    </svg>
  );
}

function RocketArt({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 160"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M100 12c20 14 30 38 30 64 0 14-4 26-10 36H80c-6-10-10-22-10-36 0-26 10-50 30-64Z" />
      <circle cx="100" cy="60" r="13" />
      <path d="M70 96 52 112c-2 10 0 18 0 18s10-2 18-6M130 96l18 16c2 10 0 18 0 18s-10-2-18-6" />
      <path d="M88 112h24l-6 26-6 10-6-10-6-26Z" />
      <path d="M30 40h14M37 33v14M158 110h14M165 103v14" />
      <path d="M40 132c8-2 14-8 16-16M168 60c-8 2-14 8-16 16" />
    </svg>
  );
}
