"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type SVGProps,
} from "react";

/* ════════════════════════════════════════════════════════════════════════
   BRAND
   primary  #204983   ·   accent  #F66600
   ════════════════════════════════════════════════════════════════════════ */
const BRAND = "#204983";
const BRAND_SOFT = "#eff5fe";
const ACCENT = "#F66600";

/* ════════════════════════════════════════════════════════════════════════
   MOCK DATA
   ════════════════════════════════════════════════════════════════════════ */
const PROGRAMS: { name: string; courses: string[] }[] = [
  { name: "Toán tư duy", courses: ["Tăng tốc (Move up)", "TIMO Vòng loại", "TIMO Vòng Quốc Gia"] },
  { name: "Tiếng Anh", courses: ["Starter - Offline", "Mover - Offline", "KET - Online", "PET - Offline"] },
  {
    name: "Luyện thi",
    courses: ["Khóa Luyện giải đề TĐN", "Gia sư tinh hoa 1:1 - Online", "Gia sư tinh hoa 1:1 - Offline"],
  },
];
const courseToProgram = (course: string) =>
  PROGRAMS.find((p) => p.courses.includes(course))?.name ?? null;

const OWNERS = ["[TVTS] Linh Tô", "[TVTS] Chi N...", "[TVTS] Hà Vy", "[TVTS] Thu Trang", "[TVTS] Minh Anh"];
const CAMPUSES = ["Bình Thạnh", "Gò Vấp", "Quận 10", "Thủ Đức", "Quận 1"];
const STATUSES = [
  "L1C: Đã liên hệ chưa nghe máy",
  "L2A: Đã liên hệ – đang cân nhắc",
  "L3A: KH mới – tiềm năng",
  "L4: Đã hẹn test",
  "L5B: Cân nhắc giá",
  "L6C: Đã vào lớp",
];
const SOURCES = ["Digital", "Hotline", "Giới thiệu", "Sự kiện"];
const ORIGINS = ["Facebook Ads", "Google Ads", "Website", "Zalo OA", "Khác"];
const CAMPAIGNS = ["Hè 2026", "Khai giảng", "TIMO 2026", "Referral"];
const TAGS = ["VIP", "Ưu tiên", "Cũ"];
const GRADES = ["Lớp 3", "Lớp 4", "Lớp 5", "Lớp 7"];

interface Lead {
  id: number;
  owner: string;
  parent: string;
  student: string;
  phone: string;
  status: string;
  grade: string;
  campus: string;
  course: string;
  source: string;
  origin: string;
  campaign: string;
  tags: string[];
  appt: string; // yyyy-mm-dd | ""
}

const LEADS: Lead[] = [
  { id: 1, owner: "[TVTS] Linh Tô", parent: "Yen Tran", student: "", phone: "0937274648", status: "L2A: Đã liên hệ – đang cân nhắc", grade: "Lớp 5", campus: "Bình Thạnh", course: "Tăng tốc (Move up)", source: "Digital", origin: "Facebook Ads", campaign: "Hè 2026", tags: ["VIP"], appt: "2026-06-10" },
  { id: 2, owner: "[TVTS] Linh Tô", parent: "Hien", student: "Linh", phone: "0978255614", status: "L2A: Đã liên hệ – đang cân nhắc", grade: "Lớp 4", campus: "Bình Thạnh", course: "TIMO Vòng loại", source: "Digital", origin: "Google Ads", campaign: "TIMO 2026", tags: [], appt: "2026-06-12" },
  { id: 3, owner: "[TVTS] Linh Tô", parent: "Thanh Phuong Dang", student: "", phone: "0346499066", status: "L2A: Đã liên hệ – đang cân nhắc", grade: "", campus: "Gò Vấp", course: "Starter - Offline", source: "Hotline", origin: "Website", campaign: "Khai giảng", tags: [], appt: "" },
  { id: 4, owner: "[TVTS] Chi N...", parent: "Vy Vân", student: "Đức Anh", phone: "0934008909", status: "L1C: Đã liên hệ chưa nghe máy", grade: "Lớp 4", campus: "Quận 10", course: "KET - Online", source: "Digital", origin: "Zalo OA", campaign: "Hè 2026", tags: ["Cũ"], appt: "" },
  { id: 5, owner: "[TVTS] Chi N...", parent: "Nguyễn Ngọc Diễm My", student: "May", phone: "0938555570", status: "L3A: KH mới – tiềm năng", grade: "Lớp 3", campus: "Quận 10", course: "PET - Offline", source: "Giới thiệu", origin: "Khác", campaign: "Referral", tags: ["Ưu tiên"], appt: "2026-06-08" },
  { id: 6, owner: "[TVTS] Hà Vy", parent: "Phạm Thu Hà", student: "Phạm Gia Bảo", phone: "0938112045", status: "L4: Đã hẹn test", grade: "Lớp 3", campus: "Gò Vấp", course: "Gia sư tinh hoa 1:1 - Online", source: "Digital", origin: "Facebook Ads", campaign: "Hè 2026", tags: [], appt: "2026-06-05" },
  { id: 7, owner: "[TVTS] Thu Trang", parent: "Lý Tuấn Kiệt", student: "Lý Gia Bảo", phone: "0905110982", status: "L5B: Cân nhắc giá", grade: "Lớp 7", campus: "Thủ Đức", course: "TIMO Vòng Quốc Gia", source: "Digital", origin: "Google Ads", campaign: "TIMO 2026", tags: ["VIP"], appt: "2026-06-15" },
  { id: 8, owner: "[TVTS] Minh Anh", parent: "Trương Mỹ Duyên", student: "Trương Bảo Châu", phone: "0905667120", status: "L6C: Đã vào lớp", grade: "Lớp 3", campus: "Quận 1", course: "Khóa Luyện giải đề TĐN", source: "Giới thiệu", origin: "Khác", campaign: "Referral", tags: [], appt: "" },
];

/* status pill tone by L-prefix — keep semantic meaning */
function statusTone(status: string): { bg: string; text: string } {
  const code = status.slice(0, 2);
  if (code === "L1") return { bg: "#f1f5f9", text: "#475569" };
  if (code === "L4") return { bg: "#fff1e6", text: "#c2410c" }; // test → attention
  if (code === "L5") return { bg: "#fef9e7", text: "#a16207" }; // pending
  if (code === "L6") return { bg: "#ecfdf3", text: "#15803d" }; // won
  return { bg: BRAND_SOFT, text: BRAND }; // L2/L3 → brand
}

/* ════════════════════════════════════════════════════════════════════════
   ICONS (inline, no dependency)
   ════════════════════════════════════════════════════════════════════════ */
type IP = SVGProps<SVGSVGElement>;
const S = (p: IP) => ({ width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, ...p });
const Search = (p: IP) => (<svg {...S(p)}><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>);
const Chevron = (p: IP) => (<svg {...S(p)}><path d="m6 9 6 6 6-6" /></svg>);
const Plus = (p: IP) => (<svg {...S(p)}><path d="M12 5v14M5 12h14" /></svg>);
const Upload = (p: IP) => (<svg {...S(p)}><path d="M12 16V4m-5 5 5-5 5 5M5 20h14" /></svg>);
const Download = (p: IP) => (<svg {...S(p)}><path d="M12 4v12m-5-5 5 5 5-5M5 20h14" /></svg>);
const Filter = (p: IP) => (<svg {...S(p)}><path d="M3 5h18l-7 8v6l-4-2v-4z" /></svg>);
const X = (p: IP) => (<svg {...S(p)}><path d="M18 6 6 18M6 6l12 12" /></svg>);
const Edit = (p: IP) => (<svg {...S(p)}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z" /></svg>);
const Chat = (p: IP) => (<svg {...S(p)}><path d="M21 11.5a8.4 8.4 0 0 1-9 8 8.6 8.6 0 0 1-3.6-.8L3 20l1.3-5A8.4 8.4 0 0 1 12 3a8.4 8.4 0 0 1 9 8.5z" /></svg>);
const History = (p: IP) => (<svg {...S(p)}><path d="M3 3v5h5" /><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8" /><path d="M12 7v5l4 2" /></svg>);
const Users = (p: IP) => (<svg {...S(p)}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.9" /><path d="M16 3.1a4 4 0 0 1 0 7.8" /></svg>);
const Phone = (p: IP) => (<svg {...S(p)}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></svg>);
const Star = (p: IP) => (<svg {...S(p)}><path d="m12 2 3 6.5 7 .6-5.3 4.6L18 21l-6-3.6L6 21l1.3-7.3L2 9.1l7-.6z" /></svg>);
const Flask = (p: IP) => (<svg {...S(p)}><path d="M9 3h6M10 3v6L4.5 18a2 2 0 0 0 1.7 3h11.6a2 2 0 0 0 1.7-3L14 9V3" /></svg>);
const Check = (p: IP) => (<svg {...S(p)}><circle cx="12" cy="12" r="9" /><path d="m9 12 2 2 4-4" /></svg>);
const Megaphone = (p: IP) => (<svg {...S(p)}><path d="M3 11v2a1 1 0 0 0 1 1h3l8 4V6L7 10H4a1 1 0 0 0-1 1z" /><path d="M18 8a4 4 0 0 1 0 8" /></svg>);
const Chart = (p: IP) => (<svg {...S(p)}><path d="M3 3v18h18" /><rect x="7" y="11" width="3" height="6" /><rect x="13" y="7" width="3" height="10" /></svg>);
const Shield = (p: IP) => (<svg {...S(p)}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>);
const Plug = (p: IP) => (<svg {...S(p)}><path d="M9 2v6M15 2v6M7 8h10v3a5 5 0 0 1-10 0zM12 16v6" /></svg>);
const Book = (p: IP) => (<svg {...S(p)}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>);
const Calendar = (p: IP) => (<svg {...S(p)}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>);
const Cash = (p: IP) => (<svg {...S(p)}><rect x="2" y="6" width="20" height="12" rx="2" /><circle cx="12" cy="12" r="2.5" /></svg>);
const Contact = (p: IP) => (<svg {...S(p)}><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="2" /><path d="M7 16a3 3 0 0 1 6 0M16 9h3M16 13h3" /></svg>);

/* ════════════════════════════════════════════════════════════════════════
   PRIMITIVES
   ════════════════════════════════════════════════════════════════════════ */
function useOutside(onClose: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function h(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    }
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  });
  return ref;
}

/** Compact multi-select dropdown used by every quick filter. */
function MultiSelect({
  label,
  options,
  selected,
  onChange,
  width = "w-56",
}: {
  label: string;
  options: string[];
  selected: string[];
  onChange: (next: string[]) => void;
  width?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useOutside(() => setOpen(false));
  const active = selected.length > 0;
  const toggle = (v: string) =>
    onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-[13px] font-medium transition-colors"
        style={
          active || open
            ? { borderColor: BRAND, background: BRAND_SOFT, color: BRAND }
            : { borderColor: "#dbe1ea", background: "#fff", color: "#374151" }
        }
      >
        <span className="max-w-[150px] truncate">{label}</span>
        {active && (
          <span
            className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[11px] font-bold text-white"
            style={{ background: BRAND }}
          >
            {selected.length}
          </span>
        )}
        <Chevron className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className={`absolute left-0 z-40 mt-1.5 ${width} rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg`}>
          <div className="mb-1 flex items-center justify-between px-2 py-1">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">{label}</span>
            {active && (
              <button onClick={() => onChange([])} className="text-[11px] font-medium" style={{ color: BRAND }}>
                Xóa
              </button>
            )}
          </div>
          <div className="max-h-64 overflow-y-auto">
            {options.map((o) => {
              const on = selected.includes(o);
              return (
                <label
                  key={o}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-[13px] text-gray-700 hover:bg-gray-50"
                >
                  <span
                    className="flex h-4 w-4 items-center justify-center rounded border"
                    style={on ? { background: BRAND, borderColor: BRAND } : { borderColor: "#cbd5e1" }}
                  >
                    {on && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
                  </span>
                  <span className="truncate">{o}</span>
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/** 2-level Program → Course hierarchical selector. */
type PC = { program: string | null; course: string | null };
function ProgramCourseDropdown({ value, onChange }: { value: PC; onChange: (v: PC) => void }) {
  const [open, setOpen] = useState(false);
  const ref = useOutside(() => setOpen(false));
  const active = !!(value.program || value.course);
  const label = value.course || value.program || "Chương trình / Khóa học";

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-[13px] font-medium transition-colors"
        style={
          active || open
            ? { borderColor: BRAND, background: BRAND_SOFT, color: BRAND }
            : { borderColor: "#dbe1ea", background: "#fff", color: "#374151" }
        }
      >
        <Book className="h-3.5 w-3.5 opacity-80" />
        <span className="max-w-[180px] truncate">{label}</span>
        <Chevron className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute left-0 z-40 mt-1.5 w-72 rounded-xl border border-gray-200 bg-white p-1.5 shadow-lg">
          <div className="mb-1 flex items-center justify-between px-2 py-1">
            <span className="text-[11px] font-semibold uppercase tracking-wide text-gray-400">Chương trình / Khóa học</span>
            {active && (
              <button onClick={() => onChange({ program: null, course: null })} className="text-[11px] font-medium" style={{ color: BRAND }}>
                Xóa
              </button>
            )}
          </div>
          <div className="max-h-72 overflow-y-auto">
            {PROGRAMS.map((p) => {
              const progSel = value.program === p.name && !value.course;
              return (
                <div key={p.name} className="mb-1">
                  {/* parent = Program */}
                  <button
                    type="button"
                    onClick={() => onChange({ program: p.name, course: null })}
                    className="flex w-full items-center justify-between rounded-lg px-2 py-1.5 text-left text-[13px] font-semibold hover:bg-gray-50"
                    style={{ color: value.program === p.name ? BRAND : "#1f2937" }}
                  >
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: value.program === p.name ? BRAND : "#cbd5e1" }} />
                      {p.name}
                    </span>
                    {progSel && (
                      <span className="rounded px-1.5 py-0.5 text-[10px] font-bold" style={{ background: BRAND_SOFT, color: BRAND }}>
                        Tất cả
                      </span>
                    )}
                  </button>
                  {/* children = Courses */}
                  <div className="ml-3 border-l border-gray-200 pl-2">
                    {p.courses.map((c) => {
                      const on = value.course === c;
                      return (
                        <button
                          key={c}
                          type="button"
                          onClick={() => onChange({ program: p.name, course: c })}
                          className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[13px] hover:bg-gray-50"
                          style={on ? { color: BRAND, fontWeight: 600 } : { color: "#4b5563" }}
                        >
                          <span className="h-1 w-1 rounded-full" style={{ background: on ? BRAND : "#d1d5db" }} />
                          <span className="truncate">{c}</span>
                          {on && <Check className="ml-auto h-3.5 w-3.5" style={{ color: BRAND }} strokeWidth={3} />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   SIDEBAR
   ════════════════════════════════════════════════════════════════════════ */
function NavGroup({ icon, label }: { icon: ReactNode; label: string }) {
  return (
    <button className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-[13px] font-semibold text-gray-500 hover:bg-gray-50">
      <span className="flex items-center gap-2.5">
        <span className="text-gray-400">{icon}</span>
        {label}
      </span>
      <Chevron className="h-3.5 w-3.5 text-gray-300" />
    </button>
  );
}
function Sidebar() {
  const subItems = [
    { label: "Danh bạ Lead", icon: <Contact className="h-4 w-4" />, active: true },
    { label: "Lịch test", icon: <Calendar className="h-4 w-4" />, active: false },
    { label: "Đơn hàng", icon: <Book className="h-4 w-4" />, active: false },
    { label: "Giao dịch", icon: <Cash className="h-4 w-4" />, active: false },
    { label: "Thống kê", icon: <Chart className="h-4 w-4" />, active: false },
    { label: "Training", icon: <Book className="h-4 w-4" />, active: false },
  ];
  return (
    <aside className="flex w-60 shrink-0 flex-col border-r border-gray-200 bg-white">
      <div className="flex items-center gap-2 px-5 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: BRAND }}>
          <Star className="h-4 w-4 text-white" />
        </div>
        <span className="text-lg font-extrabold tracking-tight" style={{ color: BRAND }}>
          Kiến Trẻ
        </span>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-2">
        <NavGroup icon={<Megaphone className="h-4 w-4" />} label="MARKETING" />

        {/* SALES expanded */}
        <div className="rounded-lg">
          <div className="flex items-center gap-2.5 px-3 py-2 text-[13px] font-bold" style={{ color: BRAND }}>
            <Users className="h-4 w-4" />
            SALES
          </div>
          <div className="space-y-0.5 pb-1 pl-2">
            {subItems.map((s) => (
              <button
                key={s.label}
                className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] transition-colors"
                style={
                  s.active
                    ? { background: BRAND_SOFT, color: BRAND, fontWeight: 600 }
                    : { color: "#4b5563" }
                }
              >
                <span style={{ color: s.active ? BRAND : "#9ca3af" }}>{s.icon}</span>
                {s.label}
                {s.active && <span className="ml-auto h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />}
              </button>
            ))}
          </div>
        </div>

        <NavGroup icon={<Chart className="h-4 w-4" />} label="BÁO CÁO" />
        <NavGroup icon={<Shield className="h-4 w-4" />} label="QUẢN TRỊ" />
        <NavGroup icon={<Plug className="h-4 w-4" />} label="TÍCH HỢP" />
      </nav>

      <div className="flex items-center gap-2.5 border-t border-gray-200 px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold text-white" style={{ background: BRAND }}>
          M
        </div>
        <div className="min-w-0">
          <div className="truncate text-[13px] font-semibold text-gray-800">Minh Anh</div>
          <div className="truncate text-[11px] text-gray-400">minhanh@kientre.edu.vn</div>
        </div>
      </div>
    </aside>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   HEADER + ROLE SWITCHER
   ════════════════════════════════════════════════════════════════════════ */
const ROLES = ["Admin", "Accountant", "Sales", "Admissions Consultant"] as const;
type Role = (typeof ROLES)[number];
const ROLE_HELP: Record<Role, string> = {
  Admin: "Full access to all filters and broad lead management.",
  Accountant: "Focus on transaction-related and payment context inside advanced filters.",
  Sales: "Prioritize status, owner, campus, and program/course filters.",
  "Admissions Consultant": "Prioritize status, source, appointment date, and program/course filters.",
};

function Header({ role, setRole }: { role: Role; setRole: (r: Role) => void }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 px-6 pt-5">
      <h1 className="flex items-center gap-2 text-xl font-extrabold text-gray-800">
        <Contact className="h-6 w-6" style={{ color: BRAND }} />
        Danh bạ Lead
      </h1>

      <div className="flex items-center gap-3">
        {/* Role switcher */}
        <div className="flex items-center rounded-lg border border-gray-200 bg-white p-0.5">
          {ROLES.map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className="rounded-md px-2.5 py-1 text-[12px] font-medium transition-colors"
              style={role === r ? { background: BRAND, color: "#fff" } : { color: "#6b7280" }}
            >
              {r}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            className="inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-[13px] font-semibold text-white shadow-sm"
            style={{ background: BRAND }}
          >
            <Plus className="h-4 w-4" /> Thêm Lead
          </button>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 text-[13px] font-medium text-gray-700 hover:bg-gray-50">
            <Upload className="h-4 w-4" /> Import
          </button>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-gray-300 bg-white px-3 text-[13px] font-medium text-gray-700 hover:bg-gray-50">
            <Download className="h-4 w-4" /> Export
          </button>
        </div>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   TIME TABS + KPI
   ════════════════════════════════════════════════════════════════════════ */
function TimeTabs({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const tabs = ["Tất cả", "Ngày", "Tháng", "Năm"];
  return (
    <div className="inline-flex rounded-lg border border-gray-200 bg-white p-0.5">
      {tabs.map((t) => (
        <button
          key={t}
          onClick={() => onChange(t)}
          className="rounded-md px-4 py-1.5 text-[13px] font-medium transition-colors"
          style={value === t ? { background: BRAND, color: "#fff" } : { color: "#6b7280" }}
        >
          {t}
        </button>
      ))}
    </div>
  );
}

function KpiCards() {
  const cards = [
    { label: "Tổng Lead", value: "1715", icon: <Users className="h-5 w-5" />, color: BRAND, bg: BRAND_SOFT },
    { label: "L0 Chưa liên hệ", value: "176", icon: <Phone className="h-5 w-5" />, color: "#64748b", bg: "#f1f5f9" },
    { label: "Tiềm năng", value: "85", icon: <Star className="h-5 w-5" />, color: BRAND, bg: BRAND_SOFT },
    { label: "Đã test", value: "85", icon: <Flask className="h-5 w-5" />, color: ACCENT, bg: "#fff1e6" },
    { label: "Đã chốt", value: "237", icon: <Check className="h-5 w-5" />, color: "#15803d", bg: "#ecfdf3" },
  ];
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      {cards.map((c) => (
        <div key={c.label} className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full" style={{ background: c.bg, color: c.color }}>
            {c.icon}
          </div>
          <div className="min-w-0">
            <div className="truncate text-[12px] text-gray-500">{c.label}</div>
            <div className="text-xl font-extrabold text-gray-800">{c.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   ADVANCED FILTER DRAWER
   ════════════════════════════════════════════════════════════════════════ */
interface Advanced {
  sources: string[];
  origins: string[];
  campaigns: string[];
  tags: string[];
  grades: string[];
  apptFrom: string;
  apptTo: string;
}
const EMPTY_ADV: Advanced = { sources: [], origins: [], campaigns: [], tags: [], grades: [], apptFrom: "", apptTo: "" };
function countAdv(a: Advanced): number {
  return (
    a.sources.length + a.origins.length + a.campaigns.length + a.tags.length + a.grades.length +
    (a.apptFrom || a.apptTo ? 1 : 0)
  );
}

function DrawerGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="border-b border-gray-100 px-5 py-4">
      <div className="mb-3 text-[11px] font-bold uppercase tracking-wide" style={{ color: BRAND }}>
        {title}
      </div>
      <div className="space-y-3">{children}</div>
    </div>
  );
}
function ChipField({ label, options, selected, onChange }: { label: string; options: string[]; selected: string[]; onChange: (v: string[]) => void }) {
  const toggle = (v: string) => onChange(selected.includes(v) ? selected.filter((x) => x !== v) : [...selected, v]);
  return (
    <div>
      <div className="mb-1.5 text-[12px] font-medium text-gray-600">{label}</div>
      <div className="flex flex-wrap gap-1.5">
        {options.map((o) => {
          const on = selected.includes(o);
          return (
            <button
              key={o}
              onClick={() => toggle(o)}
              className="rounded-full border px-2.5 py-1 text-[12px] transition-colors"
              style={on ? { borderColor: BRAND, background: BRAND, color: "#fff" } : { borderColor: "#d1d5db", background: "#fff", color: "#4b5563" }}
            >
              {o}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function AdvancedDrawer({
  open,
  onClose,
  applied,
  onApply,
}: {
  open: boolean;
  onClose: () => void;
  applied: Advanced;
  onApply: (a: Advanced) => void;
}) {
  const [draft, setDraft] = useState<Advanced>(applied);
  useEffect(() => {
    if (open) setDraft(applied);
  }, [open, applied]);

  return (
    <>
      {/* backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${open ? "opacity-100" : "pointer-events-none opacity-0"}`}
        onClick={onClose}
      />
      {/* panel */}
      <div
        className={`fixed right-0 top-0 z-50 flex h-full w-[420px] max-w-[90vw] flex-col bg-white shadow-2xl transition-transform ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between border-b border-gray-200 px-5 py-4">
          <span className="flex items-center gap-2 text-[15px] font-bold text-gray-800">
            <Filter className="h-4 w-4" style={{ color: BRAND }} /> Bộ lọc nâng cao
          </span>
          <button onClick={onClose} className="rounded-lg p-1 text-gray-400 hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          <DrawerGroup title="Nguồn Lead">
            <ChipField label="Nguồn" options={SOURCES} selected={draft.sources} onChange={(v) => setDraft({ ...draft, sources: v })} />
            <ChipField label="Nguồn gốc" options={ORIGINS} selected={draft.origins} onChange={(v) => setDraft({ ...draft, origins: v })} />
            <ChipField label="Chiến dịch" options={CAMPAIGNS} selected={draft.campaigns} onChange={(v) => setDraft({ ...draft, campaigns: v })} />
          </DrawerGroup>

          <DrawerGroup title="Phân loại">
            <ChipField label="Tags" options={TAGS} selected={draft.tags} onChange={(v) => setDraft({ ...draft, tags: v })} />
            <ChipField label="Khối lớp" options={GRADES} selected={draft.grades} onChange={(v) => setDraft({ ...draft, grades: v })} />
          </DrawerGroup>

          <DrawerGroup title="Thời gian / Lịch hẹn">
            <div className="flex items-center gap-3">
              <label className="flex-1 text-[12px] text-gray-600">
                Hẹn từ
                <input
                  type="date"
                  value={draft.apptFrom}
                  onChange={(e) => setDraft({ ...draft, apptFrom: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-[13px] text-gray-700 outline-none focus:border-[#204983]"
                />
              </label>
              <label className="flex-1 text-[12px] text-gray-600">
                Hẹn đến
                <input
                  type="date"
                  value={draft.apptTo}
                  onChange={(e) => setDraft({ ...draft, apptTo: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-gray-300 px-2.5 py-1.5 text-[13px] text-gray-700 outline-none focus:border-[#204983]"
                />
              </label>
            </div>
          </DrawerGroup>
        </div>

        <div className="flex items-center justify-between gap-3 border-t border-gray-200 px-5 py-3">
          <button
            onClick={() => setDraft(EMPTY_ADV)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-[13px] font-medium text-gray-600 hover:bg-gray-50"
          >
            Đặt lại
          </button>
          <button
            onClick={() => onApply(draft)}
            className="inline-flex items-center gap-2 rounded-lg px-5 py-2 text-[13px] font-semibold text-white"
            style={{ background: BRAND }}
          >
            Áp dụng
            {countAdv(draft) > 0 && (
              <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full px-1 text-[11px] font-bold" style={{ background: ACCENT }}>
                {countAdv(draft)}
              </span>
            )}
          </button>
        </div>
      </div>
    </>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   ACTIVE FILTER CHIPS
   ════════════════════════════════════════════════════════════════════════ */
interface Chip {
  id: string;
  text: string;
  onRemove: () => void;
  accent?: boolean;
}
function ActiveChips({ chips, onClearAll }: { chips: Chip[]; onClearAll: () => void }) {
  if (chips.length === 0) return null;
  return (
    <div className="flex flex-wrap items-center gap-2 px-6">
      {chips.map((c) => (
        <span
          key={c.id}
          className="inline-flex items-center gap-1.5 rounded-full py-1 pl-2.5 pr-1.5 text-[12px] font-medium"
          style={
            c.accent
              ? { background: "#fff1e6", color: "#c2410c" }
              : { background: BRAND_SOFT, color: BRAND }
          }
        >
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: c.accent ? ACCENT : BRAND }} />
          {c.text}
          <button onClick={c.onRemove} className="rounded-full p-0.5 hover:bg-black/10">
            <X className="h-3 w-3" />
          </button>
        </span>
      ))}
      <button onClick={onClearAll} className="ml-1 text-[12px] font-semibold text-gray-500 hover:text-gray-700">
        Xóa tất cả
      </button>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   LEAD TABLE
   ════════════════════════════════════════════════════════════════════════ */
function LeadTable({ rows }: { rows: Lead[] }) {
  return (
    <div className="mx-6 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[920px] text-left">
          <thead>
            <tr className="border-b border-gray-200 bg-[#f8fafc] text-[12px] font-semibold uppercase tracking-wide text-gray-500">
              <th className="px-4 py-2.5">Sale phụ trách</th>
              <th className="px-4 py-2.5">Phụ huynh</th>
              <th className="px-4 py-2.5">Tên HS</th>
              <th className="px-4 py-2.5">Trạng thái HS</th>
              <th className="px-4 py-2.5">Lớp</th>
              <th className="px-4 py-2.5">Cơ sở</th>
              <th className="px-4 py-2.5">Chương trình / Khóa học</th>
              <th className="px-4 py-2.5 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((l) => {
              const tone = statusTone(l.status);
              return (
                <tr key={l.id} className="text-[13px] hover:bg-[#f8fafc]">
                  <td className="px-4 py-3">
                    <span className="font-medium text-gray-700">{l.owner}</span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-gray-800">{l.parent}</div>
                    <div className="text-[12px] text-gray-400">{l.phone}</div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{l.student || "—"}</td>
                  <td className="px-4 py-3">
                    <span className="inline-block rounded-full px-2.5 py-1 text-[12px] font-semibold" style={{ background: tone.bg, color: tone.text }}>
                      {l.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{l.grade || "—"}</td>
                  <td className="px-4 py-3 text-gray-600">{l.campus}</td>
                  <td className="px-4 py-3">
                    <div className="text-gray-800">{l.course}</div>
                    <div className="text-[11px]" style={{ color: BRAND }}>{courseToProgram(l.course)}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-end gap-1">
                      {[<Edit key="e" className="h-4 w-4" />, <Chat key="c" className="h-4 w-4" />, <History key="h" className="h-4 w-4" />].map((ic, i) => (
                        <button key={i} className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-[#204983]">
                          {ic}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              );
            })}
            {rows.length === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-12 text-center text-[13px] text-gray-400">
                  Không có Lead nào khớp bộ lọc.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

/* ════════════════════════════════════════════════════════════════════════
   APP
   ════════════════════════════════════════════════════════════════════════ */
export default function LeadFilterPage() {
  const [role, setRole] = useState<Role>("Sales");
  const [timeTab, setTimeTab] = useState("Tất cả");
  const [search, setSearch] = useState("");

  const [statusF, setStatusF] = useState<string[]>([]);
  const [ownerF, setOwnerF] = useState<string[]>([]);
  const [campusF, setCampusF] = useState<string[]>([]);
  const [pc, setPc] = useState<PC>({ program: null, course: null });

  const [adv, setAdv] = useState<Advanced>(EMPTY_ADV);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const advCount = countAdv(adv);

  /* ── filtering ─────────────────────────────────────────── */
  const rows = useMemo(() => {
    const q = search.trim().toLowerCase();
    return LEADS.filter((l) => {
      if (q) {
        const hay = [l.parent, l.student, l.phone, l.status, l.campus, l.course].join(" ").toLowerCase();
        if (!hay.includes(q)) return false;
      }
      if (statusF.length && !statusF.includes(l.status)) return false;
      if (ownerF.length && !ownerF.includes(l.owner)) return false;
      if (campusF.length && !campusF.includes(l.campus)) return false;
      if (pc.course) {
        if (l.course !== pc.course) return false;
      } else if (pc.program) {
        if (courseToProgram(l.course) !== pc.program) return false;
      }
      if (adv.sources.length && !adv.sources.includes(l.source)) return false;
      if (adv.origins.length && !adv.origins.includes(l.origin)) return false;
      if (adv.campaigns.length && !adv.campaigns.includes(l.campaign)) return false;
      if (adv.grades.length && !adv.grades.includes(l.grade)) return false;
      if (adv.tags.length && !adv.tags.some((t) => l.tags.includes(t))) return false;
      if (adv.apptFrom && (!l.appt || l.appt < adv.apptFrom)) return false;
      if (adv.apptTo && (!l.appt || l.appt > adv.apptTo)) return false;
      return true;
    });
  }, [search, statusF, ownerF, campusF, pc, adv]);

  /* ── active chips ──────────────────────────────────────── */
  const chips: Chip[] = [];
  statusF.forEach((s) => chips.push({ id: "st" + s, text: s.split(":")[0], onRemove: () => setStatusF(statusF.filter((x) => x !== s)), accent: s.startsWith("L4") }));
  ownerF.forEach((o) => chips.push({ id: "ow" + o, text: o, onRemove: () => setOwnerF(ownerF.filter((x) => x !== o)) }));
  campusF.forEach((c) => chips.push({ id: "cp" + c, text: c, onRemove: () => setCampusF(campusF.filter((x) => x !== c)) }));
  if (pc.course) chips.push({ id: "pcc", text: pc.course, onRemove: () => setPc({ program: null, course: null }) });
  else if (pc.program) chips.push({ id: "pcp", text: pc.program + " (tất cả)", onRemove: () => setPc({ program: null, course: null }) });
  adv.sources.forEach((s) => chips.push({ id: "src" + s, text: "Nguồn: " + s, onRemove: () => setAdv({ ...adv, sources: adv.sources.filter((x) => x !== s) }) }));
  adv.origins.forEach((s) => chips.push({ id: "org" + s, text: s, onRemove: () => setAdv({ ...adv, origins: adv.origins.filter((x) => x !== s) }) }));
  adv.campaigns.forEach((s) => chips.push({ id: "cmp" + s, text: s, onRemove: () => setAdv({ ...adv, campaigns: adv.campaigns.filter((x) => x !== s) }) }));
  adv.tags.forEach((s) => chips.push({ id: "tag" + s, text: "#" + s, onRemove: () => setAdv({ ...adv, tags: adv.tags.filter((x) => x !== s) }), accent: true }));
  adv.grades.forEach((s) => chips.push({ id: "grd" + s, text: s, onRemove: () => setAdv({ ...adv, grades: adv.grades.filter((x) => x !== s) }) }));
  if (adv.apptFrom || adv.apptTo)
    chips.push({ id: "appt", text: `Hẹn ${adv.apptFrom || "…"} → ${adv.apptTo || "…"}`, onRemove: () => setAdv({ ...adv, apptFrom: "", apptTo: "" }), accent: true });

  const clearAll = () => {
    setSearch("");
    setStatusF([]);
    setOwnerF([]);
    setCampusF([]);
    setPc({ program: null, course: null });
    setAdv(EMPTY_ADV);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#f4f6fa] text-gray-900">
      <Sidebar />

      <main className="flex min-w-0 flex-1 flex-col overflow-y-auto">
        <Header role={role} setRole={setRole} />

        <div className="px-6 pt-3">
          <TimeTabs value={timeTab} onChange={setTimeTab} />
        </div>

        <div className="px-6 pt-3">
          <KpiCards />
        </div>

        {/* ── QUICK FILTER TOOLBAR ── */}
        <div className="mt-4 flex flex-wrap items-center gap-2.5 px-6">
          <div className="relative min-w-[240px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm theo tên PH, học sinh, SĐT..."
              className="h-9 w-full rounded-lg border border-gray-300 bg-white pl-9 pr-3 text-[13px] text-gray-700 outline-none transition-colors focus:border-[#204983]"
            />
          </div>

          <MultiSelect label="Trạng thái HS" options={STATUSES} selected={statusF} onChange={setStatusF} width="w-72" />
          <MultiSelect label="Sale phụ trách" options={OWNERS} selected={ownerF} onChange={setOwnerF} />
          <MultiSelect label="Cơ sở" options={CAMPUSES} selected={campusF} onChange={setCampusF} width="w-48" />
          <ProgramCourseDropdown value={pc} onChange={setPc} />

          {/* Advanced filter button */}
          <button
            onClick={() => setDrawerOpen(true)}
            className="inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-[13px] font-medium transition-colors"
            style={
              advCount > 0
                ? { borderColor: BRAND, background: BRAND_SOFT, color: BRAND }
                : { borderColor: "#dbe1ea", background: "#fff", color: "#374151" }
            }
          >
            <span className="relative">
              <Filter className="h-4 w-4" />
              {advCount > 0 && <span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />}
            </span>
            Bộ lọc nâng cao
            {advCount > 0 && (
              <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 text-[11px] font-bold text-white" style={{ background: ACCENT }}>
                {advCount}
              </span>
            )}
          </button>

          <span className="ml-auto whitespace-nowrap text-[13px] text-gray-500">
            <b className="text-gray-800">{rows.length}</b> kết quả
          </span>
        </div>

        {/* ── ACTIVE CHIPS ── */}
        <div className="mt-2.5">
          <ActiveChips chips={chips} onClearAll={clearAll} />
        </div>

        {/* ── ROLE HELPER ── */}
        <div className="mx-6 mt-3 flex items-center gap-2 rounded-lg px-3 py-2 text-[12px]" style={{ background: BRAND_SOFT, color: BRAND }}>
          <Shield className="h-4 w-4 shrink-0" />
          <span className="font-semibold">{role}:</span>
          <span className="text-[#3b5b86]">{ROLE_HELP[role]}</span>
        </div>

        {/* ── TABLE ── */}
        <div className="mt-3 pb-8">
          <LeadTable rows={rows} />
        </div>
      </main>

      <AdvancedDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        applied={adv}
        onApply={(a) => {
          setAdv(a);
          setDrawerOpen(false);
        }}
      />
    </div>
  );
}
