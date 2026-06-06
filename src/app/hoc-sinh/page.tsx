import { Sidebar } from "@/components/Sidebar";
import { StudentManagement } from "@/components/hoc-sinh/StudentManagement";

export default function HocSinhPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden bg-white">
        <StudentManagement />
      </main>
    </div>
  );
}
