import type { Metadata } from "next";
import "./portfolio.css";

export const metadata: Metadata = {
  title: "Duong Ngoc Minh Anh — UX Designer",
  description:
    "UX Designer with 3+ years building enterprise & B2B workflows for fintech, payment, and CRM products.",
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <div className="port-root font-inter">{children}</div>;
}
