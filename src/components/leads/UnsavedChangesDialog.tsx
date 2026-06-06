"use client";

import { ConfirmDialog } from "@/components/ui";

export function UnsavedChangesDialog({
  open,
  onStay,
  onDiscard,
  onSave,
}: {
  open: boolean;
  onStay: () => void;
  onDiscard: () => void;
  onSave: () => void;
}) {
  return (
    <ConfirmDialog
      open={open}
      onClose={onStay}
      title="Bạn có thay đổi chưa lưu"
      description="Bạn có muốn lưu thay đổi trước khi rời khỏi trang này không?"
      icon="warning"
      cancelLabel="Ở lại"
      tertiaryLabel="Bỏ thay đổi"
      onTertiary={onDiscard}
      confirmLabel="Lưu thay đổi"
      onConfirm={onSave}
    />
  );
}
