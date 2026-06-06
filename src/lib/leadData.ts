import type { Lead } from "./leadTypes";

/** Option lists for the detail/edit form selects. */
export const SOURCES = ["Digital", "Hotline", "Walk-in", "Giới thiệu", "Sự kiện", "Khác"];
export const ORIGINS = ["Digital", "Facebook Ads", "Google Ads", "Website", "Zalo OA", "Khác"];
export const CAMPAIGNS = ["Website", "Hè 2026", "Khai giảng", "TIMO 2026", "AIMO 2026", "Referral"];
export const GRADES = [
  "Lớp 1", "Lớp 2", "Lớp 3", "Lớp 4", "Lớp 5",
  "Lớp 6", "Lớp 7", "Lớp 8", "Lớp 9",
];
export const BRANCHES = ["Phố Quang", "Bình Thạnh", "Thủ Đức", "Q.1", "Q.7", "Gò Vấp"];
export const OWNERS = ["Linh Tô", "Hà Vy", "Thu Trang", "Minh Anh"];
export const COURSES = [
  "Gia sư tinh hoa 1:1 - Offline",
  "Gia sư tinh hoa 1:1 - Online",
  "Tăng tốc (Move up)",
  "KET - Online",
  "PET - Offline",
  "Starter - Offline",
  "Mover - Offline",
  "AIMO",
  "SASMO",
  "TIMO Vòng Quốc Gia",
  "TIMO Vòng loại",
];

/** Helper to keep mock objects terse — fills in empty form fields. */
function blank() {
  return {
    cccd: "",
    address: "",
    tags: [] as string[],
    note: "Tư vấn từ kientre.edu.vn",
    consultNote: "",
    school: "",
    dob: "",
    personality: "",
    desiredBranch: "",
    parentGoal: "",
    interestedCourse: "",
    centerNote: "",
    resultEmail: "",
    studentNote: "",
  };
}

export const initialLeads: Lead[] = [
  // ── Chưa xử lý ───────────────────────────────────────────────
  {
    id: "L-0001", parentName: "Hoài Như", phone: "0902231787", email: "hoainhu@gmail.com",
    source: "Digital", origin: "Website", campaign: "Website",
    studentName: "", grade: "", stage: "unprocessed",
    subStatus: { code: "L0", label: "Chưa liên hệ" },
    courseTags: ["Gia sư tinh hoa 1:1 - Offline"], branch: "Phố Quang",
    owner: "Linh Tô", flag: { label: "3 ngày chưa xử lý", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0002", parentName: "Phạm Thu Hà", phone: "0938112045", email: "thuha@gmail.com",
    source: "Digital", origin: "Facebook Ads", campaign: "Hè 2026",
    studentName: "Phạm Gia Bảo", grade: "Lớp 3", stage: "unprocessed",
    subStatus: { code: "L1B", label: "Chưa nghe máy L1" },
    courseTags: ["VTMO"], branch: "Gò Vấp",
    owner: "Minh Anh", flag: { label: "2 ngày chưa xử lý", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0003", parentName: "Đỗ Văn Lâm", phone: "0907556321", email: "vanlam@gmail.com",
    source: "Hotline", origin: "Zalo OA", campaign: "Website",
    studentName: "", grade: "", stage: "unprocessed",
    subStatus: { code: "L1A", label: "Sai số ĐT" },
    courseTags: ["Starter - Offline"], branch: "Q.1",
    owner: "Hà Vy", ...blank(),
  },

  // ── Đang tư vấn ──────────────────────────────────────────────
  {
    id: "L-0004", parentName: "Mai Lanh Nguyễn", phone: "0909051523", email: "mailanh@gmail.com",
    source: "Digital", origin: "Google Ads", campaign: "AIMO 2026",
    studentName: "Trần Khánh Ngọc", grade: "Lớp 4", stage: "consulting",
    subStatus: { code: "L3A", label: "Tiềm năng" },
    courseTags: ["Tăng tốc (Move up)"], branch: "Bình Thạnh",
    owner: "Linh Tô", flag: { label: "3 ngày chưa xử lý", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0005", parentName: "Trần Quốc Huy", phone: "0905443120", email: "quochuy@gmail.com",
    source: "Digital", origin: "Facebook Ads", campaign: "Hè 2026",
    studentName: "Trần Bảo An", grade: "Lớp 6", stage: "consulting",
    subStatus: { code: "L2A", label: "Đang cân nhắc" },
    courseTags: ["SASMO"], branch: "Bình Thạnh",
    owner: "Linh Tô", flag: { label: "Cần follow-up", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0006", parentName: "Lê Thị Hồng", phone: "0907556321", email: "lehong@gmail.com",
    source: "Digital", origin: "Website", campaign: "Khai giảng",
    studentName: "", grade: "", stage: "consulting",
    subStatus: { code: "L2B", label: "Data HS lớp 1" },
    courseTags: ["KET - Online"], branch: "Thủ Đức",
    owner: "Thu Trang", ...blank(),
  },

  // ── Test & Theo dõi ──────────────────────────────────────────
  {
    id: "L-0007", parentName: "Lý Tuấn Kiệt", phone: "0905110982", email: "tuankiet@gmail.com",
    source: "Digital", origin: "Google Ads", campaign: "TIMO 2026",
    studentName: "Lý Gia Bảo", grade: "Lớp 7", stage: "testing",
    subStatus: { code: "L4", label: "Đã hẹn test" },
    courseTags: ["KET - Online"], branch: "Thủ Đức", appointment: "2026-06-05",
    owner: "Hà Vy", ...blank(),
  },
  {
    id: "L-0008", parentName: "Phan Thị Ngọc", phone: "0978445120", email: "thingoc@gmail.com",
    source: "Hotline", origin: "Website", campaign: "TIMO 2026",
    studentName: "Phan Minh Anh", grade: "Lớp 2", stage: "testing",
    subStatus: { code: "L4", label: "Đã hẹn test" },
    courseTags: ["TIMO Vòng Quốc Gia"], branch: "Q.7", appointment: "2026-06-07",
    owner: "Thu Trang", flag: { label: "Test ngày mai", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0009", parentName: "Hồ Đức Thắng", phone: "0913667081", email: "ducthang@gmail.com",
    source: "Digital", origin: "Facebook Ads", campaign: "AIMO 2026",
    studentName: "Hồ Bảo Lâm", grade: "Lớp 5", stage: "testing",
    subStatus: { code: "L5A", label: "Đã test · chờ chốt" },
    courseTags: ["AIMO"], branch: "Bình Thạnh",
    owner: "Hà Vy", flag: { label: "Quá hạn follow-up", tone: "danger" }, ...blank(),
  },

  // ── Cân nhắc (để trống để minh hoạ cột empty) ────────────────
  {
    id: "L-0010", parentName: "Bùi Thanh Tú", phone: "0936889201", email: "thanhtu@gmail.com",
    source: "Digital", origin: "Website", campaign: "AIMO 2026",
    studentName: "Bùi Khánh Vy", grade: "Lớp 5", stage: "consulting",
    subStatus: { code: "L3A", label: "Tiềm năng" },
    courseTags: ["Gia sư tinh hoa 1:1 - Online"], branch: "Q.1",
    owner: "Thu Trang", flag: { label: "Quá hạn follow-up", tone: "danger" }, ...blank(),
  },
  {
    id: "L-0011", parentName: "Võ Hoàng Nam", phone: "0902898771", email: "hoangnam@gmail.com",
    source: "Digital", origin: "Google Ads", campaign: "Hè 2026",
    studentName: "Võ Gia Khang", grade: "Lớp 6", stage: "consulting",
    subStatus: { code: "L2A", label: "Đang cân nhắc" },
    courseTags: ["PET - Offline"], branch: "Gò Vấp",
    owner: "Hà Vy", flag: { label: "Cần follow-up", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0012", parentName: "Trịnh Khả Hân", phone: "0905667120", email: "khahan@gmail.com",
    source: "Digital", origin: "Facebook Ads", campaign: "Khai giảng",
    studentName: "Trịnh Gia Hưng", grade: "Lớp 4", stage: "consulting",
    subStatus: { code: "L3A", label: "Tiềm năng" },
    courseTags: ["Mover - Offline"], branch: "Thủ Đức",
    owner: "Minh Anh", ...blank(),
  },

  // ── Đã chốt ──────────────────────────────────────────────────
  {
    id: "L-0013", parentName: "Trương Mỹ Duyên", phone: "0905667120", email: "myduyen@gmail.com",
    source: "Digital", origin: "Website", campaign: "AIMO 2026",
    studentName: "Trương Bảo Châu", grade: "Lớp 3", stage: "won",
    subStatus: { code: "L6C", label: "Đã vào lớp" },
    courseTags: ["AIMO"], branch: "Q.1",
    owner: "Minh Anh", ...blank(),
  },
  {
    id: "L-0014", parentName: "Đinh Quang Vinh", phone: "0917554003", email: "quangvinh@gmail.com",
    source: "Giới thiệu", origin: "Khác", campaign: "Referral",
    studentName: "Đinh Gia Bảo", grade: "Lớp 5", stage: "won",
    subStatus: { code: "L6A", label: "Chờ khai giảng" },
    courseTags: ["TIMO Vòng loại"], branch: "Thủ Đức",
    owner: "Thu Trang", ...blank(),
  },
  {
    id: "L-0015", parentName: "Lương Thị Hoa", phone: "0938820114", email: "thihoa@gmail.com",
    source: "Hotline", origin: "Zalo OA", campaign: "Khai giảng",
    studentName: "Lương Minh Quân", grade: "Lớp 4", stage: "won",
    subStatus: { code: "L6B", label: "Chờ nhận lớp" },
    courseTags: ["Starter - Offline"], branch: "Bình Thạnh",
    owner: "Hà Vy", ...blank(),
  },

  // ── Từ chối / Loại bỏ ────────────────────────────────────────
  {
    id: "L-0016", parentName: "Tạ Văn Hùng", phone: "0902110988", email: "vanhung@gmail.com",
    source: "Digital", origin: "Facebook Ads", campaign: "Hè 2026",
    studentName: "", grade: "", stage: "rejected",
    subStatus: { code: "L2D", label: "Không đúng nhu cầu" },
    courseTags: ["Mover - Offline"], branch: "Q.7",
    owner: "Hà Vy", ...blank(),
  },
  {
    id: "L-0017", parentName: "Kiều Anh Thư", phone: "0936001220", email: "anhthu@gmail.com",
    source: "Digital", origin: "Google Ads", campaign: "Website",
    studentName: "Kiều Bảo Hân", grade: "Lớp 8", stage: "rejected",
    subStatus: { code: "L5D", label: "Từ chối" },
    courseTags: ["Starter - Offline"], branch: "Gò Vấp",
    owner: "Minh Anh", ...blank(),
  },
  {
    id: "L-0018", parentName: "Hà Minh Đức", phone: "0905443091", email: "minhduc@gmail.com",
    source: "Hotline", origin: "Website", campaign: "Website",
    studentName: "", grade: "", stage: "rejected",
    subStatus: { code: "L2C", label: "Data rác" },
    courseTags: ["Starter - Offline"], branch: "Bình Thạnh",
    owner: "Hà Vy", ...blank(),
  },

  // ── Chưa xử lý bổ sung (để cột nhiều item & cần scroll) ───────
  {
    id: "L-0019", parentName: "Ngô Thị Bích", phone: "0903111222", email: "ngobich@gmail.com",
    source: "Digital", origin: "Facebook Ads", campaign: "Hè 2026",
    studentName: "Ngô Gia Hân", grade: "Lớp 2", stage: "unprocessed",
    subStatus: { code: "L0", label: "Chưa liên hệ" },
    courseTags: ["KET - Online"], branch: "Q.1",
    owner: "Hà Vy", flag: { label: "2 ngày chưa xử lý", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0020", parentName: "Đặng Văn Hải", phone: "0903222333", email: "danghai@gmail.com",
    source: "Hotline", origin: "Zalo OA", campaign: "Website",
    studentName: "", grade: "", stage: "unprocessed",
    subStatus: { code: "L1A", label: "Sai số ĐT" },
    courseTags: ["AIMO"], branch: "Thủ Đức",
    owner: "Minh Anh", ...blank(),
  },
  {
    id: "L-0021", parentName: "Vũ Thị Mai", phone: "0903333444", email: "vumai@gmail.com",
    source: "Digital", origin: "Google Ads", campaign: "AIMO 2026",
    studentName: "Vũ Minh Khôi", grade: "Lớp 1", stage: "unprocessed",
    subStatus: { code: "L1B", label: "Chưa nghe máy L1" },
    courseTags: ["Starter - Offline"], branch: "Gò Vấp",
    owner: "Thu Trang", flag: { label: "3 ngày chưa xử lý", tone: "warn" }, ...blank(),
  },
  {
    id: "L-0022", parentName: "Bùi Quang Huy", phone: "0903444555", email: "quanghuy@gmail.com",
    source: "Digital", origin: "Website", campaign: "Khai giảng",
    studentName: "Bùi Gia Bảo", grade: "Lớp 4", stage: "unprocessed",
    subStatus: { code: "L0", label: "Chưa liên hệ" },
    courseTags: ["PET - Offline"], branch: "Bình Thạnh",
    owner: "Linh Tô", ...blank(),
  },
  {
    id: "L-0023", parentName: "Phan Thị Thu", phone: "0903555666", email: "phanthu@gmail.com",
    source: "Digital", origin: "Facebook Ads", campaign: "Hè 2026",
    studentName: "Phan Bảo Nam", grade: "Lớp 3", stage: "unprocessed",
    subStatus: { code: "L1B", label: "Chưa nghe máy L1" },
    courseTags: ["SASMO"], branch: "Q.7",
    owner: "Hà Vy", ...blank(),
  },
  {
    id: "L-0024", parentName: "Lưu Văn Đạt", phone: "0903666777", email: "luudat@gmail.com",
    source: "Hotline", origin: "Website", campaign: "Website",
    studentName: "", grade: "", stage: "unprocessed",
    subStatus: { code: "L0", label: "Chưa liên hệ" },
    courseTags: ["Tăng tốc (Move up)"], branch: "Phố Quang",
    owner: "Minh Anh", flag: { label: "3 ngày chưa xử lý", tone: "warn" }, ...blank(),
  },
];
