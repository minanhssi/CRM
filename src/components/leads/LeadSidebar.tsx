"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon, type IconName } from "@/components/ui";

interface NavItem {
  label: string;
  href: string;
  icon: IconName;
}
interface NavSection {
  title: string;
  icon: IconName;
  items: NavItem[];
  defaultOpen?: boolean;
}

const SECTIONS: NavSection[] = [
  {
    title: "MARKETING",
    icon: "megaphone",
    items: [
      { label: "Chiến dịch", href: "/marketing/chien-dich", icon: "target" },
      { label: "Landing page", href: "/marketing/landing", icon: "panel" },
    ],
  },
  {
    title: "SALES",
    icon: "handshake",
    defaultOpen: true,
    items: [
      { label: "Danh bạ Lead", href: "/leads", icon: "addressBook" },
      { label: "Lịch test", href: "/sales/lich-test", icon: "calendar" },
      { label: "Đơn hàng", href: "/sales/don-hang", icon: "cart" },
      { label: "Giao dịch", href: "/sales/giao-dich", icon: "swap" },
    ],
  },
  {
    title: "BÁO CÁO",
    icon: "chart",
    items: [{ label: "Tổng quan", href: "/bao-cao", icon: "chart" }],
  },
  {
    title: "QUẢN TRỊ",
    icon: "shield",
    items: [{ label: "Người dùng", href: "/quan-tri/users", icon: "user" }],
  },
  {
    title: "TÍCH HỢP",
    icon: "plug",
    items: [{ label: "Kết nối", href: "/tich-hop", icon: "plug" }],
  },
];

export function LeadSidebar({ activeHref = "/leads" }: { activeHref?: string }) {
  const [open, setOpen] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(SECTIONS.map((s) => [s.title, !!s.defaultOpen])),
  );

  return (
    <aside className="flex w-[230px] shrink-0 flex-col border-r border-gray-4 bg-white">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-4 py-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-1 text-blue-7">
          <Icon name="leaf" className="h-5 w-5" />
        </div>
        <span className="flex-1 text-[15px] font-bold text-gray-10">Kiến Trẻ</span>
        <button
          aria-label="Thu gọn menu"
          className="text-gray-6 hover:text-gray-9"
        >
          <Icon name="panel" className="h-[18px] w-[18px]" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto pb-3">
        {SECTIONS.map((section) => {
          const isOpen = open[section.title];
          return (
            <div key={section.title} className="mb-0.5">
              <button
                onClick={() => setOpen((o) => ({ ...o, [section.title]: !o[section.title] }))}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-2.5 px-4 py-2.5 text-[11px] font-semibold tracking-wider text-gray-7 transition-colors hover:bg-gray-2"
              >
                <Icon name={section.icon} className="h-4 w-4 text-gray-6" />
                <span className="flex-1 text-left">{section.title}</span>
                <Icon name={isOpen ? "chevron-up" : "chevron-down"} className="h-3.5 w-3.5 text-gray-6" />
              </button>

              {isOpen && (
                <div className="mb-1">
                  {section.items.map((item) => {
                    const active = item.href === activeHref;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        aria-current={active ? "page" : undefined}
                        className={`relative flex items-center gap-2.5 py-2.5 pl-4 pr-3 text-sm transition-colors ${
                          active
                            ? "border-l-[3px] border-brand-action bg-brand-action-soft pl-[13px] font-semibold text-brand-action"
                            : "text-gray-8 hover:bg-gray-2"
                        }`}
                      >
                        <Icon name={item.icon} className="h-4 w-4 shrink-0" />
                        <span>{item.label}</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      {/* User */}
      <div className="flex items-center gap-2.5 border-t border-gray-4 px-3 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-6 text-sm font-bold text-white">
          M
        </div>
        <div className="min-w-0 flex-1">
          <div className="truncate text-sm font-semibold text-gray-10">Minh Anh</div>
          <div className="truncate text-xs text-gray-6">minhanhmaytrix@gmail.com</div>
        </div>
        <button aria-label="Thông báo" className="relative text-gray-6 hover:text-gray-9">
          <Icon name="bell" className="h-5 w-5" />
          <span className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-red-5 px-1 text-[10px] font-bold text-white">
            1
          </span>
        </button>
      </div>
    </aside>
  );
}
