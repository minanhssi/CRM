"use client";

import { useState, useMemo, useCallback, useRef, useEffect } from "react";
import type {
  Student, TabKey, PendingFilter, Toast, ModalType, StatusAction,
} from "@/lib/types";
import {
  mockStudents, CANCEL_REASONS, PAUSE_REASONS, QUIT_REASONS,
  PROGRAMS, CLASSES, GRADES, SALES_LIST,
} from "@/lib/mockData";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function fmtVND(n: number) {
  return n === 0 ? "---" : n.toLocaleString("vi-VN") + " đ";
}
function fmtDate(d?: string) {
  if (!d) return "---";
  const [y, m, day] = d.split("-");
  return `${day}/${m}/${y}`;
}
function uid() { return Math.random().toString(36).slice(2); }

const PROGRAM_STYLE: Record<string, string> = {
  "AIMO_K8":       "bg-blue-1 text-blue-7 border border-blue-3",
  "TDN 2025-2026": "bg-orange-1 text-orange-7 border border-orange-3",
  "AIMO_K9":       "bg-purple-1 text-purple-6 border border-purple-3",
  "BT_Advanced":   "bg-green-1 text-green-7 border border-green-3",
};
function programStyle(p: string) {
  return PROGRAM_STYLE[p] ?? "bg-gray-3 text-gray-9 border border-gray-5";
}

// ─── Sub-components ───────────────────────────────────────────────────────────

/** Editable cell that shows a plain value and turns into an input on click */
function EditableCell({
  value, type = "text", options, onSave, className = "",
}: {
  value: string | number;
  type?: "text" | "number" | "select";
  options?: string[];
  onSave: (v: string) => void;
  className?: string;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(String(value));
  const inputRef = useRef<HTMLInputElement | HTMLSelectElement>(null);

  useEffect(() => { if (editing) inputRef.current?.focus(); }, [editing]);
  useEffect(() => { setDraft(String(value)); }, [value]);

  const commit = () => {
    setEditing(false);
    if (draft !== String(value)) onSave(draft);
  };

  if (editing) {
    const cls = "editing-cell w-full border-0 bg-white text-sm px-2 py-1 rounded focus:outline-none";
    if (type === "select" && options) {
      return (
        <select
          ref={inputRef as React.RefObject<HTMLSelectElement>}
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onBlur={commit}
          className={cls}
        >
          {options.map(o => <option key={o}>{o}</option>)}
        </select>
      );
    }
    return (
      <input
        ref={inputRef as React.RefObject<HTMLInputElement>}
        type={type === "number" ? "number" : "text"}
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={e => { if (e.key === "Enter") commit(); if (e.key === "Escape") { setDraft(String(value)); setEditing(false); } }}
        className={cls}
      />
    );
  }

  return (
    <div
      onClick={() => setEditing(true)}
      className={`editable-cell px-2 py-1 rounded cursor-pointer min-h-[28px] text-sm ${className}`}
    >
      {value === "" || value === 0 && type !== "number" ? <span className="text-gray-6">---</span> : String(value)}
    </div>
  );
}

/** 3-dot action menu */
function ActionMenu({ items }: { items: { label: string; danger?: boolean; onClick: () => void }[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="p-1.5 rounded hover:bg-gray-3 text-gray-7 hover:text-gray-10 transition-colors"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
        </svg>
      </button>
      {open && (
        <div className="absolute right-0 top-8 z-50 w-48 bg-white rounded-lg shadow-lg border border-gray-4 py-1">
          {items.map((item) => (
            <button
              key={item.label}
              onClick={() => { item.onClick(); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-2 transition-colors ${
                item.danger ? "text-red-6 hover:bg-red-1" : "text-gray-9"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/** Toast container */
function ToastList({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: string) => void }) {
  if (!toasts.length) return null;
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
      {toasts.map(t => (
        <div
          key={t.id}
          className={`toast-enter flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg text-sm font-medium min-w-[260px] ${
            t.type === "success" ? "bg-green-6 text-white" :
            t.type === "error"   ? "bg-red-6 text-white"   : "bg-gray-10 text-white"
          }`}
        >
          {t.type === "success" && (
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          )}
          <span className="flex-1">{t.message}</span>
          <button onClick={() => onRemove(t.id)} className="opacity-70 hover:opacity-100">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

/** Generic confirm modal */
function ConfirmModal({
  title, message, confirmLabel, danger = false, onConfirm, onCancel,
}: {
  title: string; message?: string; confirmLabel: string; danger?: boolean;
  onConfirm: () => void; onCancel: () => void;
}) {
  return (
    <ModalBackdrop onClose={onCancel}>
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[420px]">
        <div className="flex items-start gap-3 mb-4">
          {danger && (
            <div className="w-10 h-10 rounded-full bg-red-1 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-red-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
          )}
          <div>
            <h3 className="text-base font-semibold text-gray-10">{title}</h3>
            {message && <p className="text-sm text-gray-7 mt-1">{message}</p>}
          </div>
        </div>
        <div className="flex gap-2 justify-end">
          <button onClick={onCancel} className="px-4 py-2 text-sm rounded-lg border border-gray-5 text-gray-9 hover:bg-gray-3 transition-colors">
            Hủy bỏ
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm rounded-lg text-white font-medium transition-colors ${danger ? "bg-red-6 hover:bg-red-7" : "bg-blue-6 hover:bg-blue-7"}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
}

/** Cancel order modal (with reason dropdown) */
function CancelModal({
  onConfirm, onCancel,
}: { onConfirm: (reason: string) => void; onCancel: () => void }) {
  const [reason, setReason] = useState(CANCEL_REASONS[0]);
  return (
    <ModalBackdrop onClose={onCancel}>
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[420px]">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-full bg-red-1 flex items-center justify-center shrink-0">
            <svg className="w-5 h-5 text-red-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
          <div>
            <h3 className="text-base font-semibold text-gray-10">Hủy đơn đăng ký</h3>
            <p className="text-sm text-gray-7 mt-1">Đơn đăng ký sẽ bị hủy và lưu vào lịch sử. Vui lòng chọn lý do.</p>
          </div>
        </div>
        <label className="block text-sm font-medium text-gray-9 mb-1.5">Lý do hủy</label>
        <select
          value={reason}
          onChange={e => setReason(e.target.value)}
          className="w-full border border-gray-5 rounded-lg px-3 py-2 text-sm text-gray-9 focus:outline-none focus:border-blue-6 mb-5"
        >
          {CANCEL_REASONS.map(r => <option key={r}>{r}</option>)}
        </select>
        <div className="flex gap-2 justify-end">
          <button onClick={onCancel} className="px-4 py-2 text-sm rounded-lg border border-gray-5 text-gray-9 hover:bg-gray-3 transition-colors">
            Trở lại
          </button>
          <button
            onClick={() => onConfirm(reason)}
            className="px-4 py-2 text-sm rounded-lg bg-red-6 hover:bg-red-7 text-white font-medium transition-colors"
          >
            Xác nhận hủy
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
}

/** Status-change modal with reason dropdown */
function ActionModal({
  title, message, reasons, confirmLabel, danger = false,
  onConfirm, onCancel,
}: {
  title: string; message?: string; reasons?: string[]; confirmLabel: string; danger?: boolean;
  onConfirm: (reason?: string) => void; onCancel: () => void;
}) {
  const [reason, setReason] = useState(reasons ? reasons[0] : "");
  return (
    <ModalBackdrop onClose={onCancel}>
      <div className="bg-white rounded-2xl shadow-2xl p-6 w-[420px]">
        <h3 className="text-base font-semibold text-gray-10 mb-2">{title}</h3>
        {message && <p className="text-sm text-gray-7 mb-4">{message}</p>}
        {reasons && (
          <>
            <label className="block text-sm font-medium text-gray-9 mb-1.5">Lý do</label>
            <select
              value={reason}
              onChange={e => setReason(e.target.value)}
              className="w-full border border-gray-5 rounded-lg px-3 py-2 text-sm text-gray-9 focus:outline-none focus:border-blue-6 mb-5"
            >
              {reasons.map(r => <option key={r}>{r}</option>)}
            </select>
          </>
        )}
        <div className="flex gap-2 justify-end mt-4">
          <button onClick={onCancel} className="px-4 py-2 text-sm rounded-lg border border-gray-5 text-gray-9 hover:bg-gray-3 transition-colors">
            Hủy bỏ
          </button>
          <button
            onClick={() => onConfirm(reason || undefined)}
            className={`px-4 py-2 text-sm rounded-lg text-white font-medium transition-colors ${danger ? "bg-red-6 hover:bg-red-7" : "bg-blue-6 hover:bg-blue-7"}`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </ModalBackdrop>
  );
}

function ModalBackdrop({ children, onClose }: { children: React.ReactNode; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// ─── Sessions cell ─────────────────────────────────────────────────────────────

function SessionsCell({ student, onSave }: { student: Student; onSave: (v: string) => void }) {
  const remaining = student.totalSessions - student.sessionsCompleted;
  const warn = remaining > 0 && remaining <= 4;
  return (
    <div>
      <EditableCell
        value={`${student.sessionsCompleted}/${student.totalSessions}`}
        type="text"
        onSave={onSave}
      />
      {warn && (
        <div className="text-red-6 text-xs px-2 mt-0.5 font-medium">Còn {remaining} buổi</div>
      )}
    </div>
  );
}

/** Program badge — click to open select dropdown, shows styled tag otherwise */
function ProgramCell({ program, onSave }: { program: string; onSave: (v: string) => void }) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(program);
  const ref = useRef<HTMLSelectElement>(null);

  useEffect(() => { if (editing) ref.current?.focus(); }, [editing]);
  useEffect(() => { setDraft(program); }, [program]);

  const commit = () => { setEditing(false); if (draft !== program) onSave(draft); };

  if (editing) {
    return (
      <select
        ref={ref}
        value={draft}
        onChange={e => setDraft(e.target.value)}
        onBlur={commit}
        className="editing-cell border-0 bg-white text-sm px-2 py-1 rounded focus:outline-none w-full"
      >
        {PROGRAMS.map(p => <option key={p}>{p}</option>)}
      </select>
    );
  }
  return (
    <div className="px-2 py-1 cursor-pointer" onClick={() => setEditing(true)}>
      <span className={`inline-block text-xs px-2.5 py-1 rounded-full font-medium whitespace-nowrap ${programStyle(program)}`}>
        {program}
      </span>
    </div>
  );
}

// ─── Main Table ────────────────────────────────────────────────────────────────

interface TableProps {
  students: Student[];
  tab: TabKey;
  pendingFilter: PendingFilter;
  selectedIds: Set<string>;
  onToggleSelect: (id: string) => void;
  onToggleAll: (ids: string[]) => void;
  onUpdate: (id: string, field: string, value: string) => void;
  onConfirm: (id: string) => void;
  onCancelOrder: (id: string) => void;
  onStatusAction: (id: string, action: StatusAction, label: string) => void;
}

function StudentTable({
  students, tab, pendingFilter, selectedIds,
  onToggleSelect, onToggleAll, onUpdate,
  onConfirm, onCancelOrder, onStatusAction,
}: TableProps) {
  const allSelected = students.length > 0 && students.every(s => selectedIds.has(s.id));
  const showCancelledCols = tab === "pending" && pendingFilter === "cancelled";

  function getMenuItems(s: Student) {
    if (tab === "pending") {
      return [{ label: "Hủy đơn", danger: true, onClick: () => onCancelOrder(s.id) }];
    }
    if (tab === "active") {
      return [
        { label: "Chuyển sang Học thử", onClick: () => onStatusAction(s.id, "to_trial", "Chuyển sang Học thử") },
        { label: "Tạm dừng học", onClick: () => onStatusAction(s.id, "pause", "Tạm dừng học") },
        { label: "Nghỉ học", danger: true, onClick: () => onStatusAction(s.id, "quit", "Nghỉ học") },
      ];
    }
    if (tab === "trial") {
      return [
        { label: "Chuyển sang Đang học", onClick: () => onStatusAction(s.id, "to_active", "Chuyển sang Đang học") },
        { label: "Tạm dừng học", onClick: () => onStatusAction(s.id, "pause", "Tạm dừng học") },
        { label: "Nghỉ học", danger: true, onClick: () => onStatusAction(s.id, "quit", "Nghỉ học") },
      ];
    }
    if (tab === "paused") {
      return [
        { label: "Tiếp tục học", onClick: () => onStatusAction(s.id, "resume", "Tiếp tục học") },
        { label: "Nghỉ học hẳn", danger: true, onClick: () => onStatusAction(s.id, "quit", "Nghỉ học hẳn") },
      ];
    }
    if (tab === "quit") {
      return [
        { label: "Xem lịch sử học", onClick: () => {} },
      ];
    }
    return [];
  }

  const thCls = "px-3 py-3 text-left text-xs font-semibold text-gray-7 uppercase tracking-wider whitespace-nowrap";
  const tdCls = "px-1 py-2 align-middle";

  if (students.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-6">
        <svg className="w-16 h-16 mb-3 opacity-40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <p className="text-sm">Không có học sinh nào</p>
      </div>
    );
  }

  return (
    <div className="table-container">
      <table className="w-full border-collapse" style={{ minWidth: "1600px" }}>
        <thead>
          <tr className="border-b border-gray-4">
            <th className={`${thCls} w-10`}>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={() => onToggleAll(students.map(s => s.id))}
                className="rounded border-gray-5 accent-blue-6"
              />
            </th>
            <th className={`${thCls} min-w-[180px]`}>Học sinh</th>
            <th className={`${thCls} min-w-[120px]`}>Lớp</th>
            <th className={`${thCls} min-w-[130px]`}>Chương trình</th>
            <th className={`${thCls} min-w-[110px]`}>Số buổi học</th>
            <th className={`${thCls} min-w-[100px]`}>Group Zalo</th>
            <th className={`${thCls} min-w-[140px]`}>Phụ huynh</th>
            <th className={`${thCls} min-w-[130px]`}>Số điện thoại</th>
            <th className={`${thCls} min-w-[160px]`}>Email</th>
            <th className={`${thCls} min-w-[140px]`}>Sale phụ trách</th>
            <th className={`${thCls} min-w-[110px]`}>Học phí</th>
            <th className={`${thCls} min-w-[140px]`}>Ghi chú</th>
            {tab === "paused" && <>
              <th className={`${thCls} min-w-[130px]`}>Ngày tạm dừng</th>
              <th className={`${thCls} min-w-[160px]`}>Lý do tạm dừng</th>
            </>}
            {tab === "quit" && <>
              <th className={`${thCls} min-w-[120px]`}>Ngày nghỉ</th>
              <th className={`${thCls} min-w-[160px]`}>Lý do nghỉ</th>
            </>}
            {showCancelledCols && <>
              <th className={`${thCls} min-w-[140px]`}>Người hủy</th>
              <th className={`${thCls} min-w-[120px]`}>Ngày hủy</th>
              <th className={`${thCls} min-w-[160px]`}>Lý do hủy</th>
            </>}
            <th className={`${thCls} min-w-[${tab === "pending" && pendingFilter === "waiting" ? "140" : "60"}px] sticky right-0 bg-gray-2`}>
              {tab === "pending" && pendingFilter === "waiting" ? "Hành động" : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, idx) => {
            const isSelected = selectedIds.has(s.id);
            const rowBg = isSelected ? "bg-blue-1" : idx % 2 === 0 ? "bg-white" : "bg-gray-2/40";
            return (
              <tr key={s.id} className={`${rowBg} hover:bg-blue-1/60 border-b border-gray-4/50 transition-colors group`}>
                {/* Checkbox */}
                <td className={`${tdCls} px-3`}>
                  <input
                    type="checkbox"
                    checked={isSelected}
                    onChange={() => onToggleSelect(s.id)}
                    className="rounded border-gray-5 accent-blue-6"
                  />
                </td>

                {/* Student */}
                <td className={tdCls}>
                  <div className="flex items-center gap-2.5 px-1">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: s.avatarColor }}
                    >
                      {s.initials}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-10 whitespace-nowrap">{s.name}</div>
                      <div className="text-xs text-gray-6">{s.code}</div>
                    </div>
                  </div>
                </td>

                {/* Lớp */}
                <td className={tdCls}>
                  <EditableCell
                    value={s.className}
                    type="select"
                    options={CLASSES}
                    onSave={v => onUpdate(s.id, "className", v)}
                  />
                  <div className="text-xs text-gray-6 px-2">{s.grade}</div>
                </td>

                {/* Chương trình */}
                <td className={tdCls}>
                  <ProgramCell
                    program={s.program}
                    onSave={v => onUpdate(s.id, "program", v)}
                  />
                </td>

                {/* Số buổi */}
                <td className={tdCls}>
                  <SessionsCell
                    student={s}
                    onSave={v => onUpdate(s.id, "sessionsCompleted", v)}
                  />
                </td>

                {/* Zalo */}
                <td className={`${tdCls} px-3`}>
                  {s.zaloGroupUrl ? (
                    <a href={s.zaloGroupUrl} className="flex items-center gap-1 text-blue-6 text-sm hover:text-blue-7 whitespace-nowrap">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      Liên hệ
                    </a>
                  ) : <span className="text-gray-6 text-sm">---</span>}
                </td>

                {/* Phụ huynh */}
                <td className={tdCls}>
                  <EditableCell
                    value={s.parentName}
                    onSave={v => onUpdate(s.id, "parentName", v)}
                  />
                </td>

                {/* SĐT */}
                <td className={tdCls}>
                  <EditableCell
                    value={s.phone}
                    onSave={v => onUpdate(s.id, "phone", v)}
                  />
                </td>

                {/* Email */}
                <td className={tdCls}>
                  <div className="truncate-email px-2 py-1 text-sm text-gray-9" title={s.email}>
                    {s.email || "---"}
                  </div>
                </td>

                {/* Sale */}
                <td className={tdCls}>
                  <EditableCell
                    value={s.saleName}
                    type="select"
                    options={SALES_LIST}
                    onSave={v => onUpdate(s.id, "saleName", v)}
                  />
                </td>

                {/* Học phí */}
                <td className={`${tdCls} px-3 text-sm text-gray-9 whitespace-nowrap`}>
                  {fmtVND(s.tuitionFee)}
                </td>

                {/* Ghi chú */}
                <td className={tdCls}>
                  <EditableCell
                    value={s.note}
                    onSave={v => onUpdate(s.id, "note", v)}
                    className="text-gray-7"
                  />
                </td>

                {/* Extra: Paused */}
                {tab === "paused" && <>
                  <td className={`${tdCls} px-3 text-sm text-gray-9 whitespace-nowrap`}>{fmtDate(s.pausedDate)}</td>
                  <td className={`${tdCls} px-3 text-sm text-gray-7`}>{s.pauseReason || "---"}</td>
                </>}

                {/* Extra: Quit */}
                {tab === "quit" && <>
                  <td className={`${tdCls} px-3 text-sm text-gray-9 whitespace-nowrap`}>{fmtDate(s.quitDate)}</td>
                  <td className={`${tdCls} px-3 text-sm text-gray-7`}>{s.quitReason || "---"}</td>
                </>}

                {/* Extra: Cancelled */}
                {showCancelledCols && <>
                  <td className={`${tdCls} px-3 text-sm text-gray-9`}>{s.cancelledBy || "---"}</td>
                  <td className={`${tdCls} px-3 text-sm text-gray-9 whitespace-nowrap`}>{fmtDate(s.cancelledDate)}</td>
                  <td className={`${tdCls} px-3 text-sm text-gray-7`}>{s.cancelReason || "---"}</td>
                </>}

                {/* Actions */}
                <td className={`${tdCls} sticky right-0 ${rowBg} group-hover:bg-blue-1/60`}>
                  <div className="flex items-center gap-1 px-2">
                    {tab === "pending" && pendingFilter === "waiting" && (
                      <button
                        onClick={() => onConfirm(s.id)}
                        className="px-3 py-1.5 text-xs font-semibold bg-blue-6 hover:bg-blue-7 text-white rounded-lg transition-colors whitespace-nowrap"
                      >
                        Xác nhận
                      </button>
                    )}
                    {pendingFilter === "cancelled" ? null : (
                      <ActionMenu items={getMenuItems(s)} />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export function StudentManagement() {
  const [students, setStudents] = useState<Student[]>(mockStudents);
  const [activeTab, setActiveTab] = useState<TabKey>(() => {
    const pending = mockStudents.filter(s => s.status === "pending" && !s.isCancelled).length;
    return pending > 0 ? "pending" : "active";
  });
  const [pendingFilter, setPendingFilter] = useState<PendingFilter>("waiting");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [modal, setModal] = useState<ModalType | null>(null);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [perPage] = useState(10);
  const [lastUpdate, setLastUpdate] = useState("10:45:23");

  // Update clock
  useEffect(() => {
    const t = setInterval(() => {
      const now = new Date();
      setLastUpdate(now.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // Reset page on tab change
  useEffect(() => { setPage(1); setSelectedIds(new Set()); }, [activeTab, pendingFilter]);

  // ── Derived state ────────────────────────────────────────────────────────────

  const pendingCount = useMemo(
    () => students.filter(s => s.status === "pending" && !s.isCancelled).length,
    [students]
  );

  const visibleStudents = useMemo(() => {
    let list = students.filter(s => {
      if (activeTab === "pending") {
        return s.status === "pending" &&
          (pendingFilter === "waiting" ? !s.isCancelled : !!s.isCancelled);
      }
      return s.status === activeTab;
    });
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        s => s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q) || s.parentName.toLowerCase().includes(q)
      );
    }
    return list;
  }, [students, activeTab, pendingFilter, search]);

  const totalPages = Math.max(1, Math.ceil(visibleStudents.length / perPage));
  const pageStudents = visibleStudents.slice((page - 1) * perPage, page * perPage);

  // ── Toast ────────────────────────────────────────────────────────────────────

  const toast = useCallback((message: string, type: Toast["type"] = "success") => {
    const id = uid();
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  // ── Actions ──────────────────────────────────────────────────────────────────

  const handleConfirm = useCallback((id: string) => {
    setStudents(prev => prev.map(s => s.id === id ? { ...s, status: "active" } : s));
    toast("Học sinh đã được xác nhận và chuyển sang Đang học");
  }, [toast]);

  const handleCancelOrder = useCallback((id: string) => {
    setModal({ type: "confirm_cancel", studentId: id });
  }, []);

  const commitCancel = useCallback((reason: string) => {
    const id = (modal as { type: "confirm_cancel"; studentId: string }).studentId;
    setStudents(prev => prev.map(s =>
      s.id === id ? {
        ...s,
        isCancelled: true,
        cancelledBy: "Kudo Shinichi",
        cancelledDate: new Date().toISOString().split("T")[0],
        cancelReason: reason,
      } : s
    ));
    setModal(null);
    toast("Đã hủy đơn đăng ký");
  }, [modal, toast]);

  const handleStatusAction = useCallback((id: string, action: StatusAction, label: string) => {
    setModal({ type: "confirm_action", studentId: id, action, label });
  }, []);

  const commitAction = useCallback((reason?: string) => {
    if (!modal || modal.type !== "confirm_action") return;
    const { studentId, action } = modal;
    const today = new Date().toISOString().split("T")[0];

    setStudents(prev => prev.map(s => {
      if (s.id !== studentId) return s;
      switch (action) {
        case "to_trial":   return { ...s, status: "trial" };
        case "to_active":  return { ...s, status: "active" };
        case "resume":     return { ...s, status: "active", pausedDate: undefined, pauseReason: undefined };
        case "pause":      return { ...s, status: "paused", pausedDate: today, pauseReason: reason };
        case "quit":       return { ...s, status: "quit", quitDate: today, quitReason: reason };
        default:           return s;
      }
    }));

    const messages: Record<StatusAction, string> = {
      to_trial:  "Đã chuyển học sinh sang Học thử",
      to_active: "Đã chuyển học sinh sang Đang học",
      resume:    "Học sinh đã tiếp tục học",
      pause:     "Học sinh đã được tạm dừng học",
      quit:      "Học sinh đã nghỉ học",
      activate:  "Đã xác nhận học sinh",
    };
    toast(messages[action] ?? "Đã cập nhật");
    setModal(null);
  }, [modal, toast]);

  const handleUpdate = useCallback((id: string, field: string, value: string) => {
    setStudents(prev => prev.map(s => {
      if (s.id !== id) return s;
      if (field === "sessionsCompleted") {
        const parts = value.split("/");
        const completed = parseInt(parts[0]) || 0;
        return { ...s, sessionsCompleted: completed };
      }
      return { ...s, [field]: value };
    }));
    toast("Đã lưu thay đổi");
  }, [toast]);

  // ── Selection ────────────────────────────────────────────────────────────────

  const toggleSelect = useCallback((id: string) => {
    setSelectedIds(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }, []);

  const toggleAll = useCallback((ids: string[]) => {
    setSelectedIds(prev => {
      const allSelected = ids.every(id => prev.has(id));
      if (allSelected) { const next = new Set(prev); ids.forEach(id => next.delete(id)); return next; }
      return new Set([...prev, ...ids]);
    });
  }, []);

  // ── Tab labels ───────────────────────────────────────────────────────────────

  const TAB_LABELS: { key: TabKey; label: string }[] = [
    { key: "pending", label: "Chờ duyệt" },
    { key: "active",  label: "Đang học" },
    { key: "trial",   label: "Học thử" },
    { key: "paused",  label: "Tạm dừng" },
    { key: "quit",    label: "Đã nghỉ" },
  ];

  const tabCount = (key: TabKey) => students.filter(s => {
    if (key === "pending") return s.status === "pending" && !s.isCancelled;
    return s.status === key;
  }).length;

  // ── Modal config ─────────────────────────────────────────────────────────────

  const getModalConfig = () => {
    if (!modal) return null;
    if (modal.type === "confirm_action") {
      const { action, label } = modal;
      if (action === "pause") return { title: "Tạm dừng học", message: "Học sinh sẽ được chuyển sang trạng thái Tạm dừng.", reasons: PAUSE_REASONS, confirmLabel: "Tạm dừng", danger: false };
      if (action === "quit") return { title: "Nghỉ học", message: "Học sinh sẽ được chuyển sang Đã nghỉ.", reasons: QUIT_REASONS, confirmLabel: "Xác nhận nghỉ", danger: true };
      if (action === "to_trial") return { title: "Chuyển sang Học thử", message: "Học sinh sẽ được chuyển sang trạng thái Học thử.", confirmLabel: "Xác nhận", danger: false };
      if (action === "to_active") return { title: "Chuyển sang Đang học", message: "Học sinh sẽ được chuyển sang trạng thái Đang học.", confirmLabel: "Xác nhận", danger: false };
      if (action === "resume") return { title: "Tiếp tục học", message: "Học sinh sẽ được chuyển về Đang học.", confirmLabel: "Tiếp tục học", danger: false };
      return { title: label, confirmLabel: "Xác nhận", danger: false };
    }
    return null;
  };

  const modalConfig = getModalConfig();

  // ── Pagination ───────────────────────────────────────────────────────────────

  const renderPagination = () => {
    const pages: (number | "...")[] = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (page > 3) pages.push("...");
      for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) pages.push(i);
      if (page < totalPages - 2) pages.push("...");
      pages.push(totalPages);
    }
    return pages;
  };

  // ─────────────────────────────────────────────────────────────────────────────

  return (
    <>
      {/* Page header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-4 shrink-0">
        <h1 className="text-2xl font-bold text-gray-10">Học sinh</h1>
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-xs text-gray-7">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Cập nhật lúc: {lastUpdate}
          </span>
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-gray-5 rounded-lg text-gray-9 hover:bg-gray-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Link đăng ký
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 text-sm bg-blue-6 hover:bg-blue-7 text-white rounded-lg font-medium transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Thêm mới
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-1 px-6 pt-4 pb-0 border-b border-gray-4 shrink-0">
        {TAB_LABELS.map(({ key, label }) => {
          const count = tabCount(key);
          const active = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => { setActiveTab(key); setPendingFilter("waiting"); }}
              className={`relative flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors ${
                active
                  ? "border-blue-6 text-blue-6"
                  : "border-transparent text-gray-7 hover:text-gray-9 hover:border-gray-5"
              }`}
            >
              {label}
              {key === "pending" && pendingCount > 0 && (
                <span className="inline-flex items-center justify-center h-5 min-w-[20px] px-1 text-xs font-bold bg-red-6 text-white rounded-full">
                  {pendingCount}
                </span>
              )}
              {key !== "pending" && count > 0 && (
                <span className={`text-xs ${active ? "text-blue-5" : "text-gray-6"}`}>({count})</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-gray-4 shrink-0 gap-3">
        <div className="flex items-center gap-2">
          {/* Undo/Redo placeholders */}
          <button className="p-2 rounded-lg text-gray-6 hover:bg-gray-3 transition-colors" title="Hoàn tác">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
            </svg>
          </button>
          <button className="p-2 rounded-lg text-gray-6 hover:bg-gray-3 transition-colors" title="Làm lại">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10H11a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
            </svg>
          </button>

          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Tìm kiếm..."
              value={search}
              onChange={e => { setSearch(e.target.value); setPage(1); }}
              className="pl-9 pr-3 py-2 w-64 text-sm border border-gray-5 rounded-lg focus:outline-none focus:border-blue-6 bg-white placeholder-gray-6"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Pending sub-filter */}
          {activeTab === "pending" && (
            <div className="flex border border-gray-5 rounded-lg overflow-hidden text-sm">
              {(["waiting", "cancelled"] as PendingFilter[]).map(f => (
                <button
                  key={f}
                  onClick={() => setPendingFilter(f)}
                  className={`px-4 py-2 transition-colors ${
                    pendingFilter === f ? "bg-blue-6 text-white font-medium" : "text-gray-9 hover:bg-gray-2"
                  }`}
                >
                  {f === "waiting" ? "Đang chờ" : "Đã hủy"}
                  {f === "waiting" && pendingCount > 0 && (
                    <span className={`ml-1 text-xs ${pendingFilter === "waiting" ? "text-white/80" : "text-blue-6"}`}>
                      {pendingCount}
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}

          {/* Warning badge — only for tabs where sessions matter */}
          {(activeTab === "active" || activeTab === "trial") && (() => {
            const warnCount = students.filter(s =>
              s.status === activeTab &&
              (s.totalSessions - s.sessionsCompleted) > 0 &&
              (s.totalSessions - s.sessionsCompleted) <= 4
            ).length;
            if (warnCount === 0) return null;
            return (
              <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-orange-3 text-orange-6 rounded-lg hover:bg-orange-1 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Cảnh báo ({warnCount})
              </button>
            );
          })()}

          <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-gray-5 text-gray-9 rounded-lg hover:bg-gray-2 transition-colors">
            View mặc định
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button className="flex items-center gap-1.5 px-3 py-2 text-sm border border-gray-5 text-gray-9 rounded-lg hover:bg-gray-2 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
            </svg>
            Bộ lọc
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Bulk action bar */}
      {selectedIds.size > 0 && (
        <div className="flex items-center gap-3 px-6 py-2.5 bg-blue-1 border-b border-blue-3 text-sm shrink-0">
          <span className="font-medium text-blue-7">Đã chọn {selectedIds.size} học sinh</span>
          <div className="h-4 w-px bg-blue-3" />
          <button className="text-blue-6 hover:text-blue-7 font-medium">Xuất Excel</button>
          <button className="text-blue-6 hover:text-blue-7 font-medium">Gửi thông báo</button>
          {activeTab === "pending" && (
            <button className="text-green-6 hover:text-green-7 font-medium">Xác nhận tất cả</button>
          )}
          <button onClick={() => setSelectedIds(new Set())} className="ml-auto text-gray-7 hover:text-gray-9">
            Bỏ chọn
          </button>
        </div>
      )}

      {/* Table area */}
      <div className="flex-1 overflow-auto">
        <StudentTable
          students={pageStudents}
          tab={activeTab}
          pendingFilter={pendingFilter}
          selectedIds={selectedIds}
          onToggleSelect={toggleSelect}
          onToggleAll={toggleAll}
          onUpdate={handleUpdate}
          onConfirm={handleConfirm}
          onCancelOrder={handleCancelOrder}
          onStatusAction={handleStatusAction}
        />
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-3 border-t border-gray-4 shrink-0 text-sm text-gray-7">
        <span>{(page - 1) * perPage + 1}–{Math.min(page * perPage, visibleStudents.length)} trong số {visibleStudents.length}</span>
        <div className="flex items-center gap-1">
          <button
            onClick={() => setPage(p => Math.max(1, p - 1))}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-5 hover:bg-gray-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          {renderPagination().map((p, i) =>
            p === "..." ? (
              <span key={`e${i}`} className="w-8 h-8 flex items-center justify-center text-gray-6">…</span>
            ) : (
              <button
                key={p}
                onClick={() => setPage(p as number)}
                className={`w-8 h-8 flex items-center justify-center rounded border transition-colors ${
                  page === p
                    ? "border-blue-6 bg-blue-6 text-white font-medium"
                    : "border-gray-5 hover:bg-gray-2 text-gray-9"
                }`}
              >
                {p}
              </button>
            )
          )}
          <button
            onClick={() => setPage(p => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="w-8 h-8 flex items-center justify-center rounded border border-gray-5 hover:bg-gray-2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <span className="ml-2 text-gray-6">Số dòng/trang</span>
          <span className="ml-1 px-2 py-1 border border-gray-5 rounded text-gray-9">{perPage}</span>
        </div>
      </div>

      {/* Modals */}
      {modal?.type === "confirm_cancel" && (
        <CancelModal
          onConfirm={commitCancel}
          onCancel={() => setModal(null)}
        />
      )}
      {modal?.type === "confirm_action" && modalConfig && (
        <ActionModal
          title={modalConfig.title}
          message={modalConfig.message}
          reasons={modalConfig.reasons}
          confirmLabel={modalConfig.confirmLabel}
          danger={modalConfig.danger}
          onConfirm={commitAction}
          onCancel={() => setModal(null)}
        />
      )}

      {/* Toasts */}
      <ToastList toasts={toasts} onRemove={removeToast} />
    </>
  );
}
