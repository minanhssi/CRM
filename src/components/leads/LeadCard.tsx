"use client";

import { useRouter } from "next/navigation";
import { Badge, Card, Icon, type IconName } from "@/components/ui";
import { STAGE_META, courseTone, type Lead } from "@/lib/leadTypes";

function fmtDate(iso?: string) {
  if (!iso) return null;
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export function LeadCard({ lead }: { lead: Lead }) {
  const router = useRouter();
  const meta = STAGE_META[lead.stage];
  const appt = fmtDate(lead.appointment);

  const go = (suffix = "") => router.push(`/leads/${lead.id}${suffix}`);

  const actions: { icon: IconName; label: string; onClick: () => void }[] = [
    { icon: "edit", label: "Chỉnh sửa", onClick: () => go() },
    { icon: "message", label: "Ghi chú tư vấn", onClick: () => go("?tab=consult") },
    { icon: "clock", label: "Lịch sử", onClick: () => go("?tab=history") },
  ];

  return (
    <Card
      interactive
      role="button"
      tabIndex={0}
      aria-label={`Mở lead ${lead.parentName}`}
      onClick={() => go()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          go();
        }
      }}
      className={`group relative border-gray-5 border-l-4 ${meta.accent} p-3 shadow-sm`}
    >
      {/* Hover actions toolbar */}
      <div className="pointer-events-none absolute right-2 top-2 z-10 flex items-center divide-x divide-gray-2 overflow-hidden rounded-lg border border-gray-3 bg-white opacity-0 shadow-landing-md transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 focus-within:pointer-events-auto focus-within:opacity-100">
        {actions.map((a) => (
          <button
            key={a.icon}
            type="button"
            aria-label={a.label}
            title={a.label}
            onClick={(e) => {
              e.stopPropagation();
              a.onClick();
            }}
            className="flex h-8 w-9 items-center justify-center text-gray-6 transition-colors hover:bg-gray-2 hover:text-gray-9 focus:outline-none focus-visible:bg-gray-2"
          >
            <Icon name={a.icon} className="h-4 w-4" />
          </button>
        ))}
      </div>

      {/* Name + contacts icon (information hierarchy) */}
      <div className="flex items-center gap-1.5 pr-1">
        <Icon name="addressBook" className="h-4 w-4 shrink-0 text-brand-action" />
        <h3 className="min-w-0 truncate text-[15px] font-bold leading-snug text-gray-10">
          {lead.parentName}
        </h3>
      </div>

      {/* Sub-status pill — spans full card width (tight gap under the name) */}
      <div className="mt-1.5">
        <Badge tone={meta.tone} dot className="w-full">
          <span className="font-semibold">{lead.subStatus.code}</span>
          <span className="font-normal opacity-90">{lead.subStatus.label}</span>
        </Badge>
      </div>

      {/* Phone */}
      <div className="mt-2 text-[13px] font-medium tracking-wide text-gray-9">{lead.phone}</div>

      {/* Student line */}
      <div className="mt-1 text-xs text-gray-7">
        HS:{" "}
        {lead.studentName ? (
          <span className="text-gray-8">
            {lead.studentName}
            {lead.grade ? ` · ${lead.grade}` : ""}
          </span>
        ) : (
          <span className="text-gray-6">—</span>
        )}
      </div>

      {/* Tags: course + branch */}
      {(lead.courseTags.length > 0 || lead.branch) && (
        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          {lead.courseTags.map((c) => (
            <Badge key={c} tone={courseTone(c)}>
              {c}
            </Badge>
          ))}
          {lead.branch && <Badge tone="neutral">{lead.branch}</Badge>}
        </div>
      )}

      {/* Appointment */}
      <div className="mt-2.5 flex items-center gap-1.5 text-xs">
        <Icon name="calendar" className={`h-3.5 w-3.5 ${appt ? "text-blue-6" : "text-gray-5"}`} />
        {appt ? (
          <span className="font-medium text-blue-6">Hẹn: {appt}</span>
        ) : (
          <span className="text-gray-6">Chưa có lịch hẹn</span>
        )}
      </div>

      {/* Footer: owner + flag */}
      <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-gray-3 pt-2">
        <div className="flex items-center gap-1.5 text-xs text-gray-7">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-gray-4 text-[9px] font-bold text-gray-7">
            {lead.owner.charAt(0)}
          </span>
          Sale · {lead.owner}
        </div>
        {lead.flag && <Badge tone="orange">{lead.flag.label}</Badge>}
      </div>
    </Card>
  );
}
