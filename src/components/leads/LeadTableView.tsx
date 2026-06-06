"use client";

import { useRouter } from "next/navigation";
import { Badge, DropdownMenu } from "@/components/ui";
import { STAGE_META, type Lead } from "@/lib/leadTypes";

function fmtDate(iso?: string) {
  if (!iso) return "—";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

/** Tabular alternative to the Kanban board (Bảng view). */
export function LeadTableView({
  leads,
  onDelete,
}: {
  leads: Lead[];
  onDelete: (lead: Lead) => void;
}) {
  const router = useRouter();
  const th = "px-3 py-2.5 text-left text-xs font-semibold uppercase tracking-wide text-gray-7 whitespace-nowrap";
  const td = "px-3 py-2.5 align-middle text-sm text-gray-9";

  return (
    <div className="h-full overflow-auto px-6 pb-2">
      <table className="w-full min-w-[920px] border-collapse">
        <thead>
          <tr className="sticky top-0 z-10 border-b border-gray-4 bg-gray-2">
            <th className={th}>Phụ huynh</th>
            <th className={th}>SĐT</th>
            <th className={th}>Học sinh</th>
            <th className={th}>Giai đoạn</th>
            <th className={th}>Trạng thái</th>
            <th className={th}>Cơ sở</th>
            <th className={th}>Hẹn test</th>
            <th className={th}>Sale</th>
            <th className={`${th} text-right`}>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((l) => {
            const meta = STAGE_META[l.stage];
            return (
              <tr
                key={l.id}
                onClick={() => router.push(`/leads/${l.id}`)}
                className="cursor-pointer border-b border-gray-3 bg-white transition-colors hover:bg-blue-1/50"
              >
                <td className={`${td} font-medium text-gray-10`}>{l.parentName}</td>
                <td className={td}>{l.phone}</td>
                <td className={td}>{l.studentName || "—"}</td>
                <td className={td}>
                  <Badge tone={meta.tone} dot>
                    {meta.label}
                  </Badge>
                </td>
                <td className={td}>
                  <span className="text-gray-8">{l.subStatus.code}</span>{" "}
                  <span className="text-gray-6">{l.subStatus.label}</span>
                </td>
                <td className={td}>{l.branch || "—"}</td>
                <td className={td}>{fmtDate(l.appointment)}</td>
                <td className={td}>{l.owner}</td>
                <td className={`${td} text-right`} onClick={(e) => e.stopPropagation()}>
                  <DropdownMenu
                    triggerLabel={`Tùy chọn cho ${l.parentName}`}
                    items={[
                      { label: "Xem / Chỉnh sửa", icon: "edit", onSelect: () => router.push(`/leads/${l.id}`) },
                      { label: "Xóa lead", icon: "trash", danger: true, onSelect: () => onDelete(l) },
                    ]}
                  />
                </td>
              </tr>
            );
          })}
          {leads.length === 0 && (
            <tr>
              <td colSpan={9} className="py-16 text-center text-sm text-gray-6">
                Không tìm thấy lead nào
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
