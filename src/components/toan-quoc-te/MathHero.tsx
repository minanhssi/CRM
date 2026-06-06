"use client";

export default function MathHero() {
  const scrollToPrototype = () => {
    document
      .getElementById("lo-trinh")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      className="font-display relative w-full overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #ffffff 0%, #eff5fe 60%, #f8fbff 100%)",
      }}
    >
      {/* decorative glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-landing-secondary-500/10 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-landing-primary-500/10 blur-3xl"
      />
      <FloatingMath />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-8 py-24 text-center md:px-16 md:py-28 lg:px-[100px] lg:py-[120px]">
        <span className="inline-flex items-center gap-2 rounded-full border border-landing-secondary-500/25 bg-[#fff7f2] px-4 py-2 text-sm font-bold uppercase tracking-wide text-landing-secondary-600">
          <span className="h-2 w-2 rounded-full bg-landing-secondary-500" />
          Hệ sinh thái Toán Quốc Tế Kiến Trẻ
        </span>

        <h1 className="max-w-[1040px] text-3xl font-extrabold leading-tight text-landing-primary-500 md:text-[44px] md:leading-[1.18] lg:text-[56px] lg:leading-[1.15]">
          HỆ SINH THÁI TOÁN QUỐC TẾ:{" "}
          <span className="text-landing-secondary-500">
            ĐÁNH THỨC TƯ DUY LOGIC
          </span>{" "}
          – KIẾN TẠO BẢN LĨNH{" "}
          <span className="text-landing-secondary-500">
            HỌC THUẬT TOÀN CẦU
          </span>
        </h1>

        <p className="max-w-[820px] text-base text-landing-primary-400 md:text-lg md:leading-8">
          Từ những bài toán trực quan đến các đấu trường TIMO, IKMC hay HKIMO,
          Kiến Trẻ giúp con từng bước phát triển tư duy, làm chủ chiến thuật và
          khẳng định năng lực vượt trội tại đấu trường quốc tế.
        </p>

        <button
          type="button"
          onClick={scrollToPrototype}
          className="group mt-2 inline-flex h-16 items-center gap-3 rounded-full bg-landing-secondary-500 px-8 text-base font-bold text-white shadow-[0_8px_24px_-4px_rgba(246,102,0,0.45)] transition-all hover:-translate-y-0.5 hover:bg-landing-secondary-400 active:translate-y-0 active:bg-landing-secondary-600"
        >
          Khởi động hành trình săn huy chương
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 transition-transform group-hover:translate-y-0.5"
            aria-hidden
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}

function FloatingMath() {
  const items = [
    { c: "+", left: "8%", top: "22%", size: 28, delay: "0s" },
    { c: "×", left: "16%", top: "60%", size: 22, delay: ".6s" },
    { c: "π", left: "86%", top: "26%", size: 30, delay: "1.1s" },
    { c: "√", left: "78%", top: "66%", size: 26, delay: ".3s" },
    { c: "÷", left: "92%", top: "50%", size: 20, delay: ".9s" },
    { c: "=", left: "5%", top: "44%", size: 22, delay: "1.4s" },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {items.map((it, i) => (
        <span
          key={i}
          className="absolute select-none font-extrabold text-landing-primary-200"
          style={{
            left: it.left,
            top: it.top,
            fontSize: it.size,
            animation: `mq-float 5s ease-in-out ${it.delay} infinite`,
          }}
        >
          {it.c}
        </span>
      ))}
      <style>{`@keyframes mq-float{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}`}</style>
    </div>
  );
}
