export type StudentStatus = "pending" | "active" | "trial" | "paused" | "quit";
export type TabKey = StudentStatus;
export type PendingFilter = "waiting" | "cancelled";

export interface Student {
  id: string;
  name: string;
  code: string;
  initials: string;
  avatarColor: string;
  className: string;
  grade: string;
  program: string;
  sessionsCompleted: number;
  totalSessions: number;
  zaloGroupUrl?: string;
  parentName: string;
  phone: string;
  email: string;
  saleName: string;
  tuitionFee: number;
  note: string;
  status: StudentStatus;
  // pending-specific
  isCancelled?: boolean;
  cancelledBy?: string;
  cancelledDate?: string;
  cancelReason?: string;
  // paused-specific
  pausedDate?: string;
  pauseReason?: string;
  // quit-specific
  quitDate?: string;
  quitReason?: string;
}

export interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

export type ModalType =
  | { type: "confirm_cancel"; studentId: string }
  | { type: "confirm_action"; studentId: string; action: StatusAction; label: string }
  | { type: "history"; studentId: string };

export type StatusAction = "activate" | "pause" | "quit" | "resume" | "to_trial" | "to_active";
