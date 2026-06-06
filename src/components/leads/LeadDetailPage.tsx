"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  DropdownMenu,
  IconButton,
  UnderlineTabs,
  useToast,
  type TabItem,
} from "@/components/ui";
import {
  addLead,
  deleteLead,
  emptyLead,
  newLeadId,
  updateLead,
  useLeads,
} from "@/lib/leadStore";
import type { Lead } from "@/lib/leadTypes";
import { LeadForm } from "./LeadForm";
import { DeleteLeadDialog } from "./DeleteLeadDialog";
import { UnsavedChangesDialog } from "./UnsavedChangesDialog";

type DetailTab = "general" | "orders" | "consult" | "history";
const TABS: TabItem<DetailTab>[] = [
  { key: "general", label: "Thông tin chung" },
  { key: "orders", label: "Đơn hàng" },
  { key: "consult", label: "Đăng ký tư vấn" },
  { key: "history", label: "Lịch sử" },
];

export function LeadDetailPage({ mode, id }: { mode: "edit" | "create"; id?: string }) {
  const router = useRouter();
  const toast = useToast();
  const leads = useLeads();

  // Original record (edit) or a fresh blank (create). Memoized so create mode
  // keeps one stable id for the whole session on this page.
  const freshId = useRef<string | null>(null);
  if (mode === "create" && !freshId.current) freshId.current = newLeadId();

  const original = useMemo<Lead | undefined>(() => {
    if (mode === "create") return emptyLead(freshId.current as string);
    return leads.find((l) => l.id === id);
  }, [mode, id, leads]);

  const [draft, setDraft] = useState<Lead | undefined>(original);
  const [tab, setTab] = useState<DetailTab>("general");

  // Open the requested tab from the card's quick-actions (?tab=consult|history).
  useEffect(() => {
    const t = new URLSearchParams(window.location.search).get("tab");
    if (t === "consult" || t === "history" || t === "orders") setTab(t as DetailTab);
  }, []);
  const [errors, setErrors] = useState<Partial<Record<keyof Lead, string>>>({});
  const [saving, setSaving] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [showUnsaved, setShowUnsaved] = useState(false);

  // Seed draft once the original resolves (edit mode after hydration).
  useEffect(() => {
    if (original && !draft) setDraft(original);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [original]);

  const dirty = useMemo(
    () => !!draft && !!original && JSON.stringify(draft) !== JSON.stringify(original),
    [draft, original],
  );

  // Warn on hard browser navigation when there are unsaved changes.
  useEffect(() => {
    if (!dirty) return;
    const handler = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "";
    };
    window.addEventListener("beforeunload", handler);
    return () => window.removeEventListener("beforeunload", handler);
  }, [dirty]);

  if (mode === "edit" && original === undefined) {
    return (
      <div className="flex h-screen flex-col items-center justify-center gap-4 bg-landing-bg">
        <p className="text-gray-7">Không tìm thấy lead này.</p>
        <Button variant="secondary" leadingIcon="back" onClick={() => router.push("/leads")}>
          Về danh bạ Lead
        </Button>
      </div>
    );
  }
  if (!draft) return null;

  const onField = <K extends keyof Lead>(key: K, value: Lead[K]) => {
    setDraft((d) => (d ? { ...d, [key]: value } : d));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof Lead, string>> = {};
    if (!draft.parentName.trim()) next.parentName = "Vui lòng nhập tên phụ huynh";
    if (!draft.phone.trim()) next.phone = "Vui lòng nhập số điện thoại";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const doSave = (after?: () => void) => {
    if (!validate()) {
      setTab("general");
      return;
    }
    setSaving(true);
    // Simulate async persistence.
    setTimeout(() => {
      if (mode === "create") {
        addLead(draft);
        toast(`Đã tạo lead ${draft.parentName}`);
      } else {
        updateLead(draft.id, draft);
        toast("Đã lưu thay đổi");
      }
      setSaving(false);
      if (after) after();
      else if (mode === "create") router.push("/leads");
      // edit mode: stay on page; store update re-syncs `original`, clearing dirty.
    }, 350);
  };

  const handleBack = () => {
    if (dirty) setShowUnsaved(true);
    else router.push("/leads");
  };

  const handleDelete = () => {
    deleteLead(draft.id);
    setConfirmDelete(false);
    toast(`Đã xóa lead ${draft.parentName}`);
    router.push("/leads");
  };

  const title = mode === "create" ? "Thêm Lead" : draft.parentName || "Lead";

  return (
    <div className="flex h-screen flex-col bg-landing-bg">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center gap-3 border-b border-gray-4 bg-white px-5 py-3">
        <IconButton icon="back" label="Quay lại danh bạ Lead" onClick={handleBack} />
        <div className="min-w-0 flex-1">
          <h1 className="truncate text-lg font-bold text-gray-10">{title}</h1>
          <p className="truncate text-xs text-gray-6">
            Phụ trách: [TVTS] {draft.owner}
          </p>
        </div>

        <IconButton
          icon="copy"
          label="Sao chép link"
          size="sm"
          onClick={() => toast("Đã sao chép link lead", "info")}
        />

        {mode === "edit" && (
          <DropdownMenu
            triggerLabel="Thao tác khác"
            items={[{ label: "Xóa Lead", icon: "trash", danger: true, onSelect: () => setConfirmDelete(true) }]}
          />
        )}

        <Button
          variant="primary"
          leadingIcon="check"
          disabled={saving || (mode === "edit" && !dirty)}
          onClick={() => doSave()}
        >
          {saving ? "Đang lưu…" : "Lưu"}
        </Button>
      </header>

      {/* Tabs */}
      <div className="bg-white px-5">
        <UnderlineTabs items={TABS} value={tab} onChange={setTab} />
      </div>

      {/* Content */}
      <div className="min-h-0 flex-1 overflow-auto">
        {tab === "general" && <LeadForm draft={draft} onField={onField} errors={errors} />}
        {tab === "orders" && <Placeholder title="Đơn hàng" hint="Chưa có đơn hàng nào cho lead này." />}
        {tab === "consult" && <Placeholder title="Đăng ký tư vấn" hint="Chưa có đăng ký tư vấn." />}
        {tab === "history" && <Placeholder title="Lịch sử" hint="Chưa có hoạt động nào được ghi nhận." />}
      </div>

      <DeleteLeadDialog
        open={confirmDelete}
        onCancel={() => setConfirmDelete(false)}
        onConfirm={handleDelete}
      />
      <UnsavedChangesDialog
        open={showUnsaved}
        onStay={() => setShowUnsaved(false)}
        onDiscard={() => {
          setShowUnsaved(false);
          router.push("/leads");
        }}
        onSave={() => {
          setShowUnsaved(false);
          doSave(() => router.push("/leads"));
        }}
      />
    </div>
  );
}

function Placeholder({ title, hint }: { title: string; hint: string }) {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 text-center">
      <h2 className="text-base font-semibold text-gray-9">{title}</h2>
      <p className="mt-1 text-sm text-gray-6">{hint}</p>
    </div>
  );
}
