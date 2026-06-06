"use client";

import { Card, Icon, type IconName } from "@/components/ui";
import type { Lead } from "@/lib/leadTypes";

interface Kpi {
  label: string;
  value: number;
  icon: IconName;
  tint: string; // icon container background + text color
}

/** KPIs derived from live data so counts stay in sync with CRUD actions. */
function computeKpis(leads: Lead[]): Kpi[] {
  const today = new Date();
  const in7 = new Date();
  in7.setDate(today.getDate() + 7);

  const total = leads.length;
  const toProcess = leads.filter((l) => l.stage === "unprocessed").length;
  const overdue = leads.filter((l) => l.flag?.tone === "danger").length;
  const upcomingTest = leads.filter((l) => {
    if (!l.appointment) return false;
    const d = new Date(l.appointment);
    return d >= today && d <= in7;
  }).length;
  const wonThisMonth = leads.filter((l) => l.stage === "won").length;

  return [
    { label: "Tổng Lead", value: total, icon: "addressBook", tint: "bg-brand-action-soft text-brand-action" },
    { label: "Cần xử lý", value: toProcess, icon: "flame", tint: "bg-orange-1 text-orange-5" },
    { label: "Quá hạn follow-up", value: overdue, icon: "warning", tint: "bg-red-1 text-red-5" },
    { label: "Sắp test (7 ngày)", value: upcomingTest, icon: "calendar", tint: "bg-gold-1 text-gold-6" },
    { label: "Đã chốt tháng này", value: wonThisMonth, icon: "checkCircle", tint: "bg-green-1 text-green-6" },
  ];
}

export function LeadKpiCards({ leads }: { leads: Lead[] }) {
  const kpis = computeKpis(leads);
  return (
    <div className="grid grid-cols-2 gap-3 px-6 md:grid-cols-3 lg:grid-cols-5">
      {kpis.map((k) => (
        <Card key={k.label} className="flex items-center gap-3 p-4">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${k.tint}`}>
            <Icon name={k.icon} className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="truncate text-xs text-gray-7">{k.label}</div>
            <div className="text-[26px] font-bold leading-tight text-gray-10">{k.value}</div>
          </div>
        </Card>
      ))}
    </div>
  );
}
