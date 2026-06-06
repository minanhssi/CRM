import type { BadgeTone } from "@/components/ui";

/** The six Kanban columns, in board order. */
export type LeadStage =
  | "unprocessed" // Chưa xử lý
  | "consulting" // Đang tư vấn
  | "testing" // Test & Theo dõi
  | "considering" // Cân nhắc
  | "won" // Đã chốt
  | "rejected"; // Từ chối / Loại bỏ

/** Fine-grained sub-status shown on the card under the lead name (e.g. "L4 Đã hẹn test"). */
export interface SubStatus {
  code: string;
  label: string;
}

/** Warning / follow-up / test chip shown on the bottom-right of a card. */
export interface LeadFlag {
  label: string;
  tone: "warn" | "danger";
}

export interface Lead {
  id: string;

  // ── Thông tin Lead ───────────────────────────────
  parentName: string; // Tên phụ huynh
  phone: string; // Điện thoại
  email: string; // Email
  cccd: string; // CCCD
  address: string; // Địa chỉ
  source: string; // Nguồn
  origin: string; // Nguồn gốc
  campaign: string; // Chiến dịch
  tags: string[]; // Tags
  note: string; // Ghi chú
  consultNote: string; // Nhận xét khi tư vấn

  // ── Thông tin học sinh ───────────────────────────
  studentName: string; // Tên học sinh
  grade: string; // Khối lớp
  school: string; // Trường
  dob: string; // Ngày sinh (yyyy-mm-dd)
  personality: string; // Đặc điểm tính cách của con
  desiredBranch: string; // Cơ sở mong muốn
  parentGoal: string; // Mục tiêu của ba mẹ khi cho con theo học
  interestedCourse: string; // Khóa học quan tâm
  centerNote: string; // Lưu ý trung tâm cần quan tâm
  resultEmail: string; // Email nhận kết quả học tập
  studentNote: string; // Ghi chú (học sinh)

  // ── Card display / pipeline ──────────────────────
  stage: LeadStage;
  subStatus: SubStatus;
  courseTags: string[]; // chương trình (Gia sư tinh hoa 1:1 - Offline, KET - Online…)
  branch: string; // cơ sở (Phố Quang, Bình Thạnh…)
  appointment?: string; // yyyy-mm-dd — "Hẹn: dd/mm/yyyy"; undefined = chưa có lịch hẹn
  flag?: LeadFlag;
  owner: string; // Sale phụ trách (Linh Tô…)
}

/**
 * Centralized stage → colors / labels mapping (single source of truth).
 * Columns use a white container with a subtle stage-tinted border; stage color
 * comes through the dot, the count pill, the card accent and the status pill.
 */
export const STAGE_META: Record<
  LeadStage,
  { label: string; tone: BadgeTone; dot: string; accent: string; containerBorder: string }
> = {
  unprocessed: { label: "Chưa xử lý", tone: "neutral", dot: "bg-gray-6", accent: "!border-l-gray-5", containerBorder: "border-gray-4" },
  consulting: { label: "Đang tư vấn", tone: "purple", dot: "bg-purple-5", accent: "!border-l-purple-5", containerBorder: "border-purple-2" },
  testing: { label: "Test & Theo dõi", tone: "orange", dot: "bg-orange-5", accent: "!border-l-orange-5", containerBorder: "border-orange-2" },
  considering: { label: "Cân nhắc", tone: "gold", dot: "bg-gold-5", accent: "!border-l-gold-5", containerBorder: "border-gold-2" },
  won: { label: "Đã chốt", tone: "green", dot: "bg-green-6", accent: "!border-l-green-5", containerBorder: "border-green-2" },
  rejected: { label: "Từ chối / Loại bỏ", tone: "red", dot: "bg-red-5", accent: "!border-l-red-5", containerBorder: "border-red-2" },
};

/**
 * Course/program tag color, matched to the reference:
 * - green  → Cambridge levels (KET, PET, Mover, Starter, Flyer)
 * - gold   → math olympiads (AIMO, VTMO, SASMO, TIMO qualifier round)
 * - blue   → tutoring / move-up / TIMO national round (default)
 */
export function courseTone(course: string): BadgeTone {
  const c = course.toLowerCase();
  if (/ket|pet|mover|starter|flyer/.test(c)) return "green";
  if (/aimo|vtmo|sasmo|vòng loại/.test(c)) return "gold";
  return "blue";
}

/** Board column order. */
export const STAGE_ORDER: LeadStage[] = [
  "unprocessed",
  "consulting",
  "testing",
  "considering",
  "won",
  "rejected",
];
