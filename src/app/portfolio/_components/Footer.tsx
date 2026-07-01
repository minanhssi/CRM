import { Eyebrow } from "./Eyebrow";

export function Footer() {
  return (
    <footer id="contact" className="bg-port-blue text-[#F5F0E3]">
      <div className="mx-auto max-w-[1320px] px-6 py-32 md:px-12 md:py-40">
        <div className="grid gap-12 md:grid-cols-[1fr_360px] md:gap-16">
          <div>
            <Eyebrow color="yellow">04 — Contact</Eyebrow>
            <h2 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl mt-6">
              Let&apos;s design<br />something<br />impactful —<br />together.
            </h2>
          </div>
          <div className="rounded-2xl border border-[#F5F0E3]/15 bg-port-blue-dark p-8 md:p-9">
            <Field label="EMAIL" value="minhanhdn9601@gmail.com" href="mailto:minhanhdn9601@gmail.com" />
            <Field label="PHONE" value="+84 33 276 8796" href="tel:+84332768796" />
            <Field label="LINKEDIN" value="linkedin.com/in/duongngocminhanh" href="https://www.linkedin.com/in/duongngocminhanh/" />
            <Field label="BEHANCE" value="behance.net/minanhssi" href="https://www.behance.net/minanhssi" />
            <Field label="BASED IN" value="Ho Chi Minh City, VN" />
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-[#F5F0E3]/15 pt-6 text-[12px] text-[#F5F0E3]/60">
          <span>© 2026 Duong Ngoc Minh Anh — Portfolio for UX Design Specialist role</span>
          <span>Designed in Figma · Built with Next.js + Framer Motion</span>
        </div>
      </div>
    </footer>
  );
}

function Field({ label, value, href }: { label: string; value: string; href?: string }) {
  const body = (
    <div className="border-b border-[#F5F0E3]/10 py-4 last:border-0 group transition-colors hover:border-port-yellow/50">
      <p className="text-[11px] font-semibold tracking-[1.8px] text-port-yellow">{label}</p>
      <p className="mt-1 text-base font-medium text-white group-hover:text-port-yellow transition-colors">{value}</p>
    </div>
  );
  return href ? (
    <a href={href} target="_blank" rel="noreferrer">{body}</a>
  ) : (
    body
  );
}
