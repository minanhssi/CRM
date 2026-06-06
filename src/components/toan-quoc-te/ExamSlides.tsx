"use client";

import { useState, type ReactNode } from "react";
import SectionHeader from "./SectionHeader";

type Focus = { label: string; text: string };

type Slide = {
  id: string;
  tab: string;
  badge: string;
  title: string;
  intro: string;
  focus: Focus[];
  visual: ReactNode;
};

const SLIDES: Slide[] = [
  {
    id: "timo",
    tab: "TIMO · HKIMO",
    badge: "Kỳ thi Toán tư duy toàn diện",
    title: "Kỳ thi Toán tư duy toàn diện (TIMO, HKIMO)",
    intro:
      "Thước đo năng lực toàn diện qua đủ 5 trụ cột Toán học cốt lõi. Thích hợp để học sinh rèn tốc độ phản xạ phòng thi và tính cẩn thận.",
    focus: [
      {
        label: "Logic & Số học",
        text: "Quy luật hình phức hợp, phương pháp “Giả thiết tạm”, tính nhanh dãy số cách đều và tính tổng phân số.",
      },
      {
        label: "Lý thuyết số",
        text: "Cấu trúc số nguyên lớn, tìm số dư chu kỳ và dấu hiệu chia hết nâng cao.",
      },
      {
        label: "Hình học & Tổ hợp",
        text: "Tư duy cắt ghép hình phẳng (Tangram), tịnh tiến cạnh tính chu vi/diện tích phức hợp, nguyên lý Dirichlet.",
      },
    ],
    visual: <TimoVisual />,
  },
  {
    id: "ikmc",
    tab: "IKMC · Kangaroo",
    badge: "Kỳ thi tư duy trực quan",
    title: "Kỳ thi tư duy trực quan (IKMC - Kangaroo)",
    intro:
      "Tập trung khả năng quan sát, xoay sở thực tế và kích thích trí tưởng tượng không gian 3D của não bộ học sinh.",
    focus: [
      {
        label: "Tư duy không gian & Logic",
        text: "Bài toán lật mở xúc xắc, ghép mảnh hình phẳng, đếm khối lập phương bị che khuất và giải mã mê cung tọa độ lưới.",
      },
      {
        label: "Cơ học trực quan",
        text: "Phân tích nguyên lý chuyển động qua bài toán bánh răng, hệ thống ròng rọc và phản xạ ánh sáng qua gương.",
      },
    ],
    visual: <IkmcVisual />,
  },
  {
    id: "sasmo",
    tab: "SASMO · AIMO · AMC",
    badge: "Kỳ thi Olympic chuyên sâu",
    title: "Kỳ thi Olympic chuyên sâu (SASMO, AIMO, AMC)",
    intro:
      "Chinh phục đỉnh cao Olympic qua phương pháp giải toán hiện đại từ Singapore và Mỹ, giúp học sinh làm chủ chiến thuật xử lý các bài toán phức tạp.",
    focus: [
      {
        label: "Heuristics (Singapore)",
        text: "Dùng sơ đồ đoạn thẳng (Bar Model) trực quan hóa đề bài dài, thành thạo chiến thuật “Tính ngược” (Working Backwards).",
      },
      {
        label: "Đại số & Toán thực chứng",
        text: "Phép toán mới (Defining New Operations), toán học tài chính (AMC), hình học giải tích (tọa độ, Pythagoras).",
      },
      {
        label: "Mật mã học",
        text: "Số học mô-đun nâng cao, giải chu kỳ dư, số nguyên phức tạp.",
      },
    ],
    visual: <SasmoVisual />,
  },
];

export default function ExamSlides() {
  const [active, setActive] = useState(0);
  const slide = SLIDES[active];

  return (
    <section className="font-display w-full bg-white">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-8 py-20 md:px-16 lg:px-[100px] lg:py-[100px]">
        <SectionHeader
          title={
            <>
              LỘ TRÌNH CHUẨN XÁC –{" "}
              <span className="text-landing-secondary-500">
                PHONG ĐỘ VỮNG VÀNG
              </span>
            </>
          }
          subtitle="Hệ sinh thái chuẩn quốc tế giúp con làm chủ kỹ năng phân tích, tối ưu chiến thuật, tự tin khẳng định vị thế tại đấu trường quốc tế."
        />

        {/* Tab selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              aria-pressed={i === active}
              className={`rounded-full px-5 py-3 text-sm font-bold transition-all md:text-base ${
                i === active
                  ? "bg-landing-secondary-500 text-white shadow-landing-md"
                  : "bg-landing-bg text-landing-primary-500 ring-1 ring-landing-line hover:ring-landing-primary-200"
              }`}
            >
              {s.tab}
            </button>
          ))}
        </div>

        {/* Slide body */}
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {/* Left: content */}
          <div key={slide.id} className="flex flex-col" style={{ animation: "mq-fade .4s ease" }}>
            <span className="inline-flex w-fit items-center rounded-md bg-landing-primary-50 px-3 py-1 text-sm font-bold text-landing-primary-500">
              {slide.badge}
            </span>
            <h3 className="mt-4 text-2xl font-bold leading-snug text-landing-primary-500 md:text-[28px]">
              {slide.title}
            </h3>
            <p className="mt-3 text-base leading-7 text-landing-ink/80">
              {slide.intro}
            </p>

            <p className="mt-6 text-sm font-bold uppercase tracking-wide text-landing-secondary-600">
              Trọng tâm học thuật
            </p>
            <ul className="mt-3 flex flex-col gap-3">
              {slide.focus.map((f) => (
                <li
                  key={f.label}
                  className="flex gap-3 rounded-2xl border border-landing-line bg-landing-bg px-4 py-3"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-landing-secondary-500/10 text-landing-secondary-500">
                    <CheckIcon className="h-4 w-4" />
                  </span>
                  <span className="text-sm leading-6 text-landing-ink/85">
                    <span className="font-bold text-landing-primary-500">
                      {f.label}:
                    </span>{" "}
                    {f.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: visual */}
          <div
            key={`${slide.id}-v`}
            className="relative flex min-h-[360px] items-center justify-center overflow-hidden rounded-3xl bg-landing-primary-500 p-8 shadow-landing-lg"
            style={{ animation: "mq-fade .4s ease" }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-landing-secondary-500/20 blur-2xl"
            />
            {slide.visual}
          </div>
        </div>
      </div>
      <style>{`@keyframes mq-fade{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>
    </section>
  );
}

function CheckIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

/* ---------- Visuals (navy/orange/yellow palette) ---------- */

function MedalBadge({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-landing-yellow-400 text-2xl shadow-landing-md ring-4 ring-white/30">
        🏅
      </div>
      <span className="mt-2 rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-white">
        {label}
      </span>
    </div>
  );
}

function TimoVisual() {
  return (
    <div className="relative z-[1] grid w-full max-w-[420px] grid-cols-2 gap-5">
      <div className="col-span-2 flex justify-center">
        <MedalBadge label="TIMO / HKIMO" />
      </div>
      {/* Tangram cut shapes */}
      <div className="flex items-center justify-center rounded-2xl bg-white/10 p-5">
        <svg viewBox="0 0 100 100" className="h-24 w-24" aria-hidden>
          <polygon points="0,0 100,0 50,50" fill="#f66600" />
          <polygon points="0,0 50,50 0,100" fill="#faa366" />
          <polygon points="100,0 100,100 50,50" fill="#ffcb2e" />
          <polygon points="0,100 50,50 100,100" fill="#fde7d5" />
        </svg>
      </div>
      {/* Number sequence */}
      <div className="flex flex-col justify-center gap-2 rounded-2xl bg-white/10 p-5 text-white">
        <span className="text-xs font-semibold text-white/70">Dãy số cách đều</span>
        <span className="text-lg font-extrabold tracking-wide">2, 5, 8, 11…</span>
        <div className="mt-1 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-3/4 rounded-full bg-landing-secondary-500" />
        </div>
        <span className="text-xs text-white/70">Σ tính tổng nhanh</span>
      </div>
    </div>
  );
}

function IkmcVisual() {
  return (
    <div className="relative z-[1] grid w-full max-w-[420px] grid-cols-2 gap-5">
      <div className="col-span-2 flex justify-center">
        <MedalBadge label="IKMC · Kangaroo" />
      </div>
      {/* 3D cube */}
      <div className="flex items-center justify-center rounded-2xl bg-white/10 p-5">
        <svg viewBox="0 0 120 120" className="h-24 w-24" aria-hidden>
          <polygon points="20,40 60,20 100,40 60,60" fill="#faa366" />
          <polygon points="20,40 60,60 60,105 20,85" fill="#f66600" />
          <polygon points="100,40 60,60 60,105 100,85" fill="#c55200" />
        </svg>
      </div>
      {/* Dice */}
      <div className="flex items-center justify-center rounded-2xl bg-white/10 p-5">
        <svg viewBox="0 0 80 80" className="h-24 w-24" aria-hidden>
          <rect x="8" y="8" width="64" height="64" rx="12" fill="#ffffff" />
          <circle cx="26" cy="26" r="6" fill="#204983" />
          <circle cx="54" cy="26" r="6" fill="#204983" />
          <circle cx="40" cy="40" r="6" fill="#204983" />
          <circle cx="26" cy="54" r="6" fill="#204983" />
          <circle cx="54" cy="54" r="6" fill="#204983" />
        </svg>
      </div>
    </div>
  );
}

function SasmoVisual() {
  return (
    <div className="relative z-[1] grid w-full max-w-[420px] grid-cols-2 gap-5">
      <div className="col-span-2 flex justify-center">
        <MedalBadge label="SASMO · AIMO · AMC" />
      </div>
      {/* Bar model */}
      <div className="col-span-2 flex flex-col justify-center gap-2 rounded-2xl bg-white/10 p-5 text-white">
        <span className="text-xs font-semibold text-white/70">
          Sơ đồ đoạn thẳng (Bar Model)
        </span>
        <div className="flex h-7 overflow-hidden rounded-md">
          <div className="flex-[3] bg-landing-secondary-500" />
          <div className="flex-[2] bg-landing-yellow-400" />
        </div>
        <div className="flex h-7 overflow-hidden rounded-md">
          <div className="flex-[3] bg-landing-secondary-500" />
        </div>
      </div>
      {/* Coordinate / Pythagoras */}
      <div className="col-span-2 flex items-center justify-center rounded-2xl bg-white/10 p-5">
        <svg viewBox="0 0 140 80" className="h-20 w-full" aria-hidden>
          <line x1="10" y1="70" x2="130" y2="70" stroke="#bbcae1" strokeWidth="2" />
          <line x1="10" y1="70" x2="10" y2="10" stroke="#bbcae1" strokeWidth="2" />
          <polygon points="20,68 90,68 90,30" fill="none" stroke="#ffcb2e" strokeWidth="3" />
          <rect x="80" y="58" width="10" height="10" fill="none" stroke="#ffcb2e" strokeWidth="2" />
          <text x="100" y="50" fontSize="14" fill="#ffffff" fontWeight="700">a²+b²</text>
        </svg>
      </div>
    </div>
  );
}
