import type { Student } from "./types";

const AVATAR_COLORS = [
  "#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FAAD14",
  "#9254DE", "#52C41A", "#FA541C", "#1890FF", "#13C2C2",
  "#EB2F96", "#597EF7", "#389E0D", "#D48806", "#CF1322",
];

function color(i: number) { return AVATAR_COLORS[i % AVATAR_COLORS.length]; }

const SALES = "Nguyễn Văn Du Ai";
const TODAY = "2026-05-05";

export const mockStudents: Student[] = [
  // ── PENDING (14 students) ─────────────────────────────────────────────────
  {
    id: "s1", name: "Trương Bảo An", code: "GD-260300835",
    initials: "A", avatarColor: color(0),
    className: "AIMO_4.1", grade: "Khối 4", program: "AIMO_K8",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Trương Minh Thảo", phone: "0912345678",
    email: "truongminhthao80@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "Đăng ký qua form web", status: "pending",
  },
  {
    id: "s2", name: "Trần Thảo Nguyên", code: "GD-260300836",
    initials: "N", avatarColor: color(1),
    className: "AIMO_4.1", grade: "Khối 5", program: "AIMO_K8",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Nguyễn Thị Hoài Phương", phone: "0912345679",
    email: "phuongnth473@gmail.com", saleName: SALES,
    tuitionFee: 759000, note: "", status: "pending",
  },
  {
    id: "s3", name: "Nguyễn Tùng Sơn", code: "GD-260300837",
    initials: "S", avatarColor: color(2),
    className: "AIMO_4.1", grade: "Khối 6", program: "AIMO_K8",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Trần Thị Diệu Hiền", phone: "0912345680",
    email: "hientt1903@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "pending",
  },
  {
    id: "s4", name: "Đỗ Huỳnh Thanh Ngọc", code: "GD-260300849",
    initials: "N", avatarColor: color(3),
    className: "AIMO_4.1", grade: "Khối 7", program: "AIMO_K8",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Đỗ Quang Trí", phone: "0912345681",
    email: "dotri84@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "Đăng ký qua form web", status: "pending",
  },
  {
    id: "s5", name: "Đỗ Minh Khuê", code: "GD-251100767",
    initials: "K", avatarColor: color(4),
    className: "AIMO_4.1", grade: "Khối 4", program: "AIMO_K8",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Đào Thị Trang", phone: "0912345682",
    email: "contho0906@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "pending",
  },
  {
    id: "s6", name: "Lê Thị Hồng Nhung", code: "GD-260300900",
    initials: "N", avatarColor: color(5),
    className: "BT_K8_2", grade: "Khối 3", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Lê Văn Hùng", phone: "0912345683",
    email: "levanhung22@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "Đăng ký qua form web", status: "pending",
  },
  {
    id: "s7", name: "Phạm Quốc Bảo", code: "GD-260300901",
    initials: "B", avatarColor: color(6),
    className: "BT_K8_3", grade: "Khối 2", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Phạm Thị Lan", phone: "0912345684",
    email: "phamlan88@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "pending",
  },
  {
    id: "s8", name: "Vũ Hoàng Nam", code: "GD-260300902",
    initials: "N", avatarColor: color(7),
    className: "BT_K8_4A1", grade: "Khối 4", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Vũ Thị Mai", phone: "0912345685",
    email: "vumai2005@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "pending",
  },
  {
    id: "s9", name: "Nguyễn Thị Thu Hà", code: "GD-260300903",
    initials: "H", avatarColor: color(8),
    className: "BT_K8_4T1", grade: "Khối 5", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Nguyễn Văn Tuấn", phone: "0912345686",
    email: "nguyentuan55@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "pending",
  },
  {
    id: "s10", name: "Trần Gia Linh", code: "GD-260300904",
    initials: "L", avatarColor: color(9),
    className: "BT_K8_4T2", grade: "Khối 4", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Trần Thị Bích Ngọc", phone: "0912345687",
    email: "bichngoc77@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "pending",
  },
  {
    id: "s11", name: "Đinh Tuấn Kiệt", code: "GD-260300905",
    initials: "K", avatarColor: color(10),
    className: "AIMO_4.2", grade: "Khối 3", program: "AIMO_K8",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Đinh Văn Phúc", phone: "0912345688",
    email: "dinhvanphuc66@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "Đăng ký qua form web", status: "pending",
  },
  {
    id: "s12", name: "Bùi Khánh Linh", code: "GD-260300906",
    initials: "L", avatarColor: color(11),
    className: "AIMO_4.2", grade: "Khối 5", program: "AIMO_K8",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Bùi Thị Tuyết", phone: "0912345689",
    email: "buituyet2003@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "pending",
  },
  {
    id: "s13", name: "Hoàng Minh Đức", code: "GD-260300907",
    initials: "Đ", avatarColor: color(12),
    className: "BT_K8_2", grade: "Khối 4", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Hoàng Thị Thanh", phone: "0912345690",
    email: "hoangthanh11@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "pending",
  },
  {
    id: "s14", name: "Lý Thị Cẩm Tú", code: "GD-260300908",
    initials: "T", avatarColor: color(13),
    className: "BT_K8_3", grade: "Khối 6", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Lý Văn Thành", phone: "0912345691",
    email: "lyvanthanh33@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "pending",
  },

  // ── ACTIVE ────────────────────────────────────────────────────────────────
  {
    id: "s15", name: "Nguyễn Dương Phước Thịnh", code: "KT-260400892",
    initials: "T", avatarColor: color(0),
    className: "BT_K8_2", grade: "Khối 3", program: "TDN 2025-2026",
    sessionsCompleted: 8, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Dương Thị Kim Hương", phone: "0912345692",
    email: "huongdtk@uel.edu.vn", saleName: SALES,
    tuitionFee: 1958250, note: "Đăng ký qua form web", status: "active",
  },
  {
    id: "s16", name: "Trần Minh Phúc", code: "GD-260200820",
    initials: "P", avatarColor: color(1),
    className: "BT_K8_3", grade: "Khối 2", program: "TDN 2025-2026",
    sessionsCompleted: 21, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Đinh Thị Hồng Yến", phone: "0912345693",
    email: "dinhyen1292@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "Đăng ký qua form web", status: "active",
  },
  {
    id: "s17", name: "Phạm Thị Lan Anh", code: "GD-260200821",
    initials: "A", avatarColor: color(2),
    className: "AIMO_4.1", grade: "Khối 4", program: "AIMO_K8",
    sessionsCompleted: 12, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Phạm Văn Hải", phone: "0912345694",
    email: "pvhai2001@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "active",
  },
  {
    id: "s18", name: "Cao Thị Minh Châu", code: "GD-260200822",
    initials: "C", avatarColor: color(3),
    className: "AIMO_4.2", grade: "Khối 5", program: "AIMO_K8",
    sessionsCompleted: 5, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Cao Văn Sơn", phone: "0912345695",
    email: "caovinson99@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "active",
  },
  {
    id: "s19", name: "Võ Thị Thu Thủy", code: "GD-260200823",
    initials: "T", avatarColor: color(4),
    className: "BT_K8_4A1", grade: "Khối 6", program: "TDN 2025-2026",
    sessionsCompleted: 18, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Võ Văn Bình", phone: "0912345696",
    email: "vovanbinh44@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "active",
  },

  // ── TRIAL ─────────────────────────────────────────────────────────────────
  {
    id: "s20", name: "Hồ Minh Hưng", code: "GD-260200819",
    initials: "H", avatarColor: color(5),
    className: "BT_K8_4A1", grade: "Khối 4", program: "TDN 2025-2026",
    sessionsCompleted: 0, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Đinh Thị Thanh Tuyền", phone: "0912345697",
    email: "sunnylan2016@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "Đăng ký qua form web", status: "trial",
  },
  {
    id: "s21", name: "Mai Thị Quỳnh Anh", code: "GD-260200825",
    initials: "A", avatarColor: color(6),
    className: "AIMO_4.2", grade: "Khối 3", program: "AIMO_K8",
    sessionsCompleted: 2, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Mai Văn Dũng", phone: "0912345698",
    email: "maivandung77@gmail.com", saleName: SALES,
    tuitionFee: 0, note: "Học thử 3 buổi", status: "trial",
  },

  // ── PAUSED ────────────────────────────────────────────────────────────────
  {
    id: "s22", name: "Từ Gia Huy", code: "GD-250400548",
    initials: "H", avatarColor: color(7),
    className: "BT_K8_4T1", grade: "Khối 5", program: "TDN 2025-2026",
    sessionsCompleted: 10, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Từ Anh Hùng", phone: "0912345699",
    email: "hunghuy2022hcm@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "paused",
    pausedDate: "2026-04-01", pauseReason: "Bận việc gia đình",
  },
  {
    id: "s23", name: "Lê Hoàng Phi", code: "GD-250400550",
    initials: "P", avatarColor: color(8),
    className: "BT_K8_2", grade: "Khối 4", program: "TDN 2025-2026",
    sessionsCompleted: 15, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Lê Thị Ngân", phone: "0912345700",
    email: "lengan55@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "paused",
    pausedDate: "2026-04-15", pauseReason: "Sức khỏe yếu",
  },

  // ── QUIT ──────────────────────────────────────────────────────────────────
  {
    id: "s24", name: "Nguyễn Hoàng Khải", code: "GD-260300851",
    initials: "K", avatarColor: color(9),
    className: "BT_K8_4T2", grade: "Khối 4", program: "TDN 2025-2026",
    sessionsCompleted: 4, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Hoàng Thị Thương", phone: "0912345701",
    email: "hoangthuongdmaris@gmail.com", saleName: SALES,
    tuitionFee: 1958250, note: "", status: "quit",
    quitDate: "2026-03-20", quitReason: "Chuyển trường",
  },
  {
    id: "s25", name: "Phan Thị Diễm My", code: "GD-260300852",
    initials: "M", avatarColor: color(10),
    className: "AIMO_4.1", grade: "Khối 5", program: "AIMO_K8",
    sessionsCompleted: 8, totalSessions: 24, zaloGroupUrl: "#",
    parentName: "Phan Văn Minh", phone: "0912345702",
    email: "phanvanminh12@gmail.com", saleName: SALES,
    tuitionFee: 10840000, note: "", status: "quit",
    quitDate: "2026-04-10", quitReason: "Gia đình khó khăn",
  },
];

export const CANCEL_REASONS = [
  "Sai thông tin đăng ký",
  "Học sinh không có nhu cầu",
  "Phụ huynh đổi ý",
  "Trùng lịch học",
  "Lý do khác",
];

export const PAUSE_REASONS = [
  "Bận việc gia đình",
  "Sức khỏe yếu",
  "Đi du lịch dài ngày",
  "Thi cử / ôn tập",
  "Lý do khác",
];

export const QUIT_REASONS = [
  "Chuyển trường",
  "Gia đình khó khăn",
  "Không phù hợp chương trình",
  "Chuyển sang trung tâm khác",
  "Lý do khác",
];

export const PROGRAMS = ["AIMO_K8", "TDN 2025-2026", "AIMO_K9", "BT_Advanced"];

export const CLASSES = [
  "AIMO_4.1", "AIMO_4.2", "BT_K8_2", "BT_K8_3",
  "BT_K8_4A1", "BT_K8_4T1", "BT_K8_4T2",
];

export const SALES_LIST = [
  "Nguyễn Văn Du Ai",
  "Trần Thị Hoa",
  "Lê Văn Bình",
];

export const GRADES = ["Khối 1","Khối 2","Khối 3","Khối 4","Khối 5","Khối 6","Khối 7","Khối 8","Khối 9"];
