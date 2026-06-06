"use client";

import { ConfirmDialog } from "@/components/ui";

export function DeleteLeadDialog({
  open,
  onCancel,
  onConfirm,
}: {
  open: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onCancel}
      title="Xóa Lead này?"
      description="Lead sẽ bị xóa khỏi danh bạ. Hành động này không thể hoàn tác."
      icon="trash"
      danger
      cancelLabel="Hủy"
      confirmLabel="Xóa Lead"
      onConfirm={onConfirm}
    />
  );
}
