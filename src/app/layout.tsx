import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kiến Trẻ — Admin Portal",
  description: "CRM nội bộ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
