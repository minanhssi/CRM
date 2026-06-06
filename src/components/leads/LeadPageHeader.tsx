"use client";

import { useRouter } from "next/navigation";
import { Button, DropdownMenu, Icon, useToast } from "@/components/ui";

export function LeadPageHeader() {
  const router = useRouter();
  const toast = useToast();

  return (
    <div className="flex items-center justify-between gap-4 px-6 pt-5">
      <h1 className="flex items-center gap-2.5 whitespace-nowrap text-[22px] font-bold text-gray-10">
        <Icon name="addressBook" className="h-6 w-6 shrink-0 text-brand-action" />
        Danh bạ Lead
      </h1>

      <div className="flex shrink-0 items-center gap-2">
        <Button variant="secondary" leadingIcon="import" onClick={() => toast("Mở hộp thoại nhập Lead", "info")}>
          Import
        </Button>

        {/* Export behaves as a split dropdown */}
        <DropdownMenu
          align="right"
          triggerLabel="Tùy chọn xuất dữ liệu"
          trigger={(open) => (
            <span
              className={`inline-flex h-9 items-center gap-1.5 rounded-lg border border-gray-5 bg-white px-4 text-sm font-medium text-gray-9 transition-colors hover:bg-gray-2 ${
                open ? "bg-gray-2" : ""
              }`}
            >
              <Icon name="export" className="h-4 w-4" />
              Export
              <Icon name="chevron-down" className="h-3.5 w-3.5" />
            </span>
          )}
          items={[
            { label: "Xuất Excel (.xlsx)", icon: "export", onSelect: () => toast("Đang xuất Excel…", "info") },
            { label: "Xuất CSV (.csv)", icon: "export", onSelect: () => toast("Đang xuất CSV…", "info") },
          ]}
        />

        <Button variant="primary" leadingIcon="plus" onClick={() => router.push("/leads/new")}>
          Thêm Lead
        </Button>
      </div>
    </div>
  );
}
