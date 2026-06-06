import { ToastProvider } from "@/components/ui";

export default function LeadsLayout({ children }: { children: React.ReactNode }) {
  return <ToastProvider>{children}</ToastProvider>;
}
