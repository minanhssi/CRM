import type { ReactNode } from "react";

export default function SectionHeader({
  title,
  subtitle,
  className = "",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  className?: string;
}) {
  return (
    <header className={`flex flex-col items-center gap-4 text-center ${className}`}>
      <h2 className="max-w-[920px] text-2xl font-extrabold uppercase leading-tight text-landing-primary-500 md:text-[36px] md:leading-[1.2] lg:text-[44px]">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-[820px] text-base text-landing-primary-400 md:text-lg md:leading-8">
          {subtitle}
        </p>
      ) : null}
    </header>
  );
}
