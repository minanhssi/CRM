"use client";

import { useState, type ReactNode } from "react";
import SectionHeader from "./SectionHeader";

type Item = {
  id: string;
  title: string;
  body: ReactNode;
  icon: ReactNode;
};

const ITEMS: Item[] = [
  {
    id: "vtest",
    title: "VTest AI Diagnosis",
    body: "Quét năng lực định kỳ, xuất báo cáo trực quan (Diagnostic Report) giúp nhận diện chính xác lỗ hổng tư duy để bù đắp kịp thời.",
    icon: <ChartIcon />,
  },
  {
    id: "muc-tieu",
    title: "Thiết lập mục tiêu đấu trường",
    body: "Ban chuyên môn phân tích dữ liệu thế mạnh để tư vấn cuộc thi phù hợp nhất (mạnh thông minh thị giác chọn IKMC, vượt trội phương pháp chọn SASMO).",
    icon: <TargetIcon />,
  },
  {
    id: "error-notebook",
    title: "Sổ tay sửa sai (Error Notebook)",
    body: "Sổ tay phân tích lỗi sai kinh điển, học sinh tự đối mặt và xử lý triệt để các lỗi sai trước để không lặp lại sai lầm trong kỳ thi thật.",
    icon: <NotebookIcon />,
  },
  {
    id: "quy-cach",
    title: "Quy cách đào tạo",
    body: (
      <>
        Thời lượng <b>02 buổi/tuần (02 giờ/buổi)</b>. Hệ thống minh chứng: nhận
        Diagnostic Report hàng tháng, vận hành Sổ tay Error Notebook và hướng dẫn
        đăng ký các kỳ thi quốc tế chính thống.
      </>
    ),
    icon: <CalendarIcon />,
  },
];

export default function QualityControl() {
  return (
    <section
      className="font-display w-full"
      style={{ background: "linear-gradient(180deg, #f8fbff 0%, #eff5fe 100%)" }}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12 px-8 py-20 md:px-16 lg:px-[100px] lg:py-[100px]">
        <SectionHeader
          title={
            <>
              KIỂM SOÁT BẰNG{" "}
              <span className="text-landing-secondary-500">DỮ LIỆU</span> – CÁ
              NHÂN HÓA BẰNG LỘ TRÌNH KHOA HỌC
            </>
          }
          subtitle="Loại bỏ đánh giá cảm tính, Kiến Trẻ đảm bảo phong độ tiến bộ của học sinh qua hệ thống kiểm soát chất lượng chặt chẽ."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((it, i) => (
            <FlipCard key={it.id} item={it} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FlipCard({ item, index }: { item: Item; index: number }) {
  const [pinned, setPinned] = useState(false);
  const [hovered, setHovered] = useState(false);
  const showBack = pinned || hovered;

  return (
    <div
      className="group relative h-[300px] [perspective:1400px]"
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
        <div className="absolute inset-0 flex flex-col rounded-3xl border border-landing-line bg-white px-6 py-7 shadow-landing-lg [backface-visibility:hidden]">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-landing-primary-50 text-landing-primary-500">
            {item.icon}
          </span>
          <h3 className="mt-5 text-lg font-bold leading-snug text-landing-primary-500">
            {item.title}
          </h3>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-landing-secondary-600">
            <RefreshIcon className="h-4 w-4" />
            Xem chi tiết
          </span>
          <span className="absolute right-5 top-5 text-xl font-extrabold text-landing-primary-100">
            0{index}
          </span>
        </div>

        {/* BACK */}
        <div className="absolute inset-0 flex flex-col rounded-3xl bg-landing-primary-500 px-6 py-7 text-white shadow-landing-lg [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <h3 className="text-base font-bold leading-snug text-white">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-white/90">{item.body}</p>
        </div>
      </button>
    </div>
  );
}

function RefreshIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden>
      <path d="M21 12a9 9 0 1 1-2.64-6.36M21 4v5h-5" />
    </svg>
  );
}

function iconProps(className: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };
}

function ChartIcon() {
  return (
    <svg {...iconProps("h-7 w-7")}>
      <path d="M4 19h16" />
      <rect x="6" y="11" width="3" height="6" rx="1" />
      <rect x="11" y="6" width="3" height="11" rx="1" />
      <rect x="16" y="13" width="3" height="4" rx="1" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg {...iconProps("h-7 w-7")}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  );
}

function NotebookIcon() {
  return (
    <svg {...iconProps("h-7 w-7")}>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 3v18M13 8h3M13 12h3" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg {...iconProps("h-7 w-7")}>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M8 3v4M16 3v4M4 10h16" />
    </svg>
  );
}
