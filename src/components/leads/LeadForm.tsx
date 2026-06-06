"use client";

import { DatePicker, Input, Select, Textarea } from "@/components/ui";
import { CAMPAIGNS, GRADES, ORIGINS, OWNERS, SOURCES, BRANCHES } from "@/lib/leadData";
import { STAGE_META, STAGE_ORDER, type Lead } from "@/lib/leadTypes";

const opts = (values: string[]) => values.map((v) => ({ value: v, label: v }));

function SectionTitle({ children, count }: { children: string; count?: number }) {
  return (
    <h2 className="mb-4 text-base font-bold text-gray-10">
      {children}
      {count !== undefined && <span className="ml-1 font-semibold text-gray-7">({count})</span>}
    </h2>
  );
}

export function LeadForm({
  draft,
  onField,
  errors,
}: {
  draft: Lead;
  onField: <K extends keyof Lead>(key: K, value: Lead[K]) => void;
  errors: Partial<Record<keyof Lead, string>>;
}) {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-6 py-6">
      {/* ── Thông tin Lead ─────────────────────────────── */}
      <section>
        <SectionTitle>Thông tin Lead</SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="Tên phụ huynh" value={draft.parentName} onChange={(v) => onField("parentName", v)} required error={errors.parentName} />
          <Input label="CCCD" value={draft.cccd} onChange={(v) => onField("cccd", v)} />
          <Input label="Điện thoại" type="tel" value={draft.phone} onChange={(v) => onField("phone", v)} required error={errors.phone} />
          <Select label="Nguồn" value={draft.source} onChange={(v) => onField("source", v)} options={opts(SOURCES)} />
          <Input label="Email" type="email" value={draft.email} onChange={(v) => onField("email", v)} />
          <Select label="Nguồn gốc" value={draft.origin} onChange={(v) => onField("origin", v)} options={opts(ORIGINS)} />
          <Input label="Địa chỉ" value={draft.address} onChange={(v) => onField("address", v)} />
          <Select label="Chiến dịch" value={draft.campaign} onChange={(v) => onField("campaign", v)} options={opts(CAMPAIGNS)} />
          <Input label="Tags (phân cách bởi dấu phẩy)" value={draft.tags.join(", ")} onChange={(v) => onField("tags", v.split(",").map((t) => t.trim()))} className="md:col-span-2" />
          <Textarea label="Ghi chú" value={draft.note} onChange={(v) => onField("note", v)} className="md:col-span-2" />
          <Textarea label="Nhận xét khi tư vấn" value={draft.consultNote} onChange={(v) => onField("consultNote", v)} className="md:col-span-2" />
        </div>
      </section>

      {/* ── Pipeline / trạng thái ──────────────────────── */}
      <section>
        <SectionTitle>Trạng thái &amp; phân loại</SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Select
            label="Giai đoạn (cột Kanban)"
            value={draft.stage}
            onChange={(v) => onField("stage", v as Lead["stage"])}
            options={STAGE_ORDER.map((s) => ({ value: s, label: STAGE_META[s].label }))}
          />
          <Select label="Sale phụ trách" value={draft.owner} onChange={(v) => onField("owner", v)} options={opts(OWNERS)} />
          <Input label="Mã trạng thái (vd: L4)" value={draft.subStatus.code} onChange={(v) => onField("subStatus", { ...draft.subStatus, code: v })} />
          <Input label="Nhãn trạng thái" value={draft.subStatus.label} onChange={(v) => onField("subStatus", { ...draft.subStatus, label: v })} />
          <Select label="Cơ sở" value={draft.branch} onChange={(v) => onField("branch", v)} options={opts(BRANCHES)} />
          <DatePicker label="Lịch hẹn test" value={draft.appointment ?? ""} onChange={(v) => onField("appointment", v || undefined)} />
        </div>
      </section>

      {/* ── Thông tin học sinh ─────────────────────────── */}
      <section>
        <SectionTitle count={1}>Thông tin học sinh</SectionTitle>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="Tên học sinh" value={draft.studentName} onChange={(v) => onField("studentName", v)} />
          <Select label="Cơ sở mong muốn" value={draft.desiredBranch} onChange={(v) => onField("desiredBranch", v)} options={opts(BRANCHES)} />
          <Select label="Khối lớp" value={draft.grade} onChange={(v) => onField("grade", v)} options={opts(GRADES)} />
          <Textarea label="Mục tiêu của ba mẹ khi cho con theo học" value={draft.parentGoal} onChange={(v) => onField("parentGoal", v)} rows={1} />
          <Input label="Trường" value={draft.school} onChange={(v) => onField("school", v)} />
          <Input label="Khóa học quan tâm" value={draft.interestedCourse} onChange={(v) => onField("interestedCourse", v)} />
          <DatePicker label="Ngày sinh" value={draft.dob} onChange={(v) => onField("dob", v)} />
          <Textarea label="Lưu ý trung tâm cần quan tâm" value={draft.centerNote} onChange={(v) => onField("centerNote", v)} rows={1} />
          <Textarea label="Đặc điểm tính cách của con" value={draft.personality} onChange={(v) => onField("personality", v)} />
          <Input label="Email nhận kết quả học tập" type="email" value={draft.resultEmail} onChange={(v) => onField("resultEmail", v)} />
          <Textarea label="Ghi chú" value={draft.studentNote} onChange={(v) => onField("studentNote", v)} className="md:col-span-2" />
        </div>
      </section>
    </div>
  );
}
