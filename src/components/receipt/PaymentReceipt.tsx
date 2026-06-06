import type { ReactNode } from "react";

/* ---------------------------------------------------------------- types --- */

export interface ReceiptData {
  company: { name: string; address: string };
  dateTime: string;
  transactionType: string;
  title: string;
  customer: { student: string; parent: string; phone: string; email: string };
  course: {
    name: string;
    sessions: string; // Số buổi
    class: string; // Lớp
    basePrice: string; // Giá gốc
    facility: string; // Cơ sở
    discount: string; // Ưu đãi
  };
  total: string;
  paymentMethod: string;
  note: string;
  bank: { accountName: string; accountNumber: string; bankName: string };
}

export const sampleReceipt: ReceiptData = {
  company: {
    name: "Công ty Cổ phần Giáo dục Kiến Trẻ",
    address: "36/72 Nguyễn Gia Trí, Phường Thạnh Mỹ Tây, TP. HCM",
  },
  dateTime: "14/02/2026 09:42:01",
  transactionType: "Thanh toán bổ sung",
  title: "THANH TOÁN",
  customer: {
    student: "Nguyễn Học Sinh",
    parent: "Phạm Thị Phụ Huynh",
    phone: "0912345678",
    email: "phuhuynh@gmail.com",
  },
  course: {
    name: "Tăng tốc (Move up)",
    sessions: "24",
    class: "BT_5A1",
    basePrice: "2.000.000đ",
    facility: "Bình Thạnh",
    discount: "-500.000đ",
  },
  total: "1.960.000.000đ",
  paymentMethod: "Chuyển khoản",
  note: "Không có ghi chú",
  bank: {
    accountName: "CTY CP GIAO DUC KIEN TRE",
    accountNumber: "6047040578922",
    bankName: "Ngân hàng BIDV",
  },
};

/* ----------------------------------------------------------- primitives --- */

/** Section divider with a small uppercase caption — the structural backbone. */
function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5">
      <h3 className="whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.5px] text-black/45">
        {children}
      </h3>
      <span className="h-px flex-1 bg-[#e5e7eb]" />
    </div>
  );
}

/** A compact label / value line — used both in single columns and the course grid. */
function Row({
  label,
  value,
  valueClass = "",
}: {
  label: string;
  value: ReactNode;
  valueClass?: string;
}) {
  return (
    <div className="flex items-baseline justify-between gap-3">
      <span className="shrink-0 text-[13px] leading-5 text-black/45">{label}</span>
      <span
        className={`min-w-0 truncate text-right text-[13px] font-semibold leading-5 text-black/85 ${valueClass}`}
      >
        {value}
      </span>
    </div>
  );
}

/* ------------------------------------------------------------- receipt ---- */

export function PaymentReceipt({ data = sampleReceipt }: { data?: ReceiptData }) {
  const { company, customer, course, bank } = data;

  return (
    <div className="receipt-shadow w-[360px] max-w-full">
      <div className="receipt-zig receipt-zig-top" />

      <div className="bg-white">
        {/* Brand header */}
        <header className="flex flex-col items-center gap-1.5 px-5 pt-4 pb-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/receipt/logo.png" alt="Kiến Trẻ" className="h-[52px] w-auto" />
          <div className="text-center">
            <p className="text-[14px] font-bold uppercase leading-tight text-landing-primary-500">
              {company.name}
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-[#64748b]">{company.address}</p>
          </div>
        </header>

        {/* Receipt meta — date + highlighted transaction type */}
        <div className="flex flex-col gap-1.5 border-y border-dashed border-[#e5e7eb] bg-[#f8fafc] px-5 py-2.5">
          <Row label="Ngày giờ:" value={data.dateTime} />
          <div className="flex items-center justify-between gap-3">
            <span className="text-[13px] leading-5 text-black/45">Loại giao dịch:</span>
            <span className="rounded-full bg-landing-primary-50 px-2 py-0.5 text-[12px] font-semibold text-landing-primary-500">
              {data.transactionType}
            </span>
          </div>
        </div>

        {/* Body */}
        <main className="px-5 pb-5 pt-2.5">
          <h1 className="mb-3 text-center text-[22px] font-extrabold tracking-[3px] text-black/85">
            {data.title}
          </h1>

          <div className="space-y-3.5">
            {/* Customer */}
            <section className="space-y-1.5">
              <SectionTitle>Thông tin khách hàng</SectionTitle>
              <Row
                label="Học sinh:"
                value={customer.student}
                valueClass="text-landing-primary-500"
              />
              <Row label="Phụ huynh:" value={customer.parent} />
              <Row label="Số điện thoại:" value={customer.phone} />
              <Row label="Email:" value={customer.email} />
            </section>

            {/* Course — compact 2-column metadata card */}
            <section className="space-y-1.5">
              <SectionTitle>Thông tin khóa học</SectionTitle>
              <div className="rounded-lg border border-[#d1d5dc] px-3 py-2.5">
                <p className="mb-2 text-[13px] font-bold leading-snug text-landing-primary-500">
                  {course.name}
                </p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-1.5">
                  <Row label="Số buổi:" value={course.sessions} />
                  <Row label="Lớp:" value={course.class} />
                  <Row label="Giá gốc:" value={course.basePrice} />
                  <Row label="Cơ sở:" value={course.facility} />
                  <Row
                    label="Ưu đãi:"
                    value={course.discount}
                    valueClass="text-landing-secondary-500"
                  />
                </div>
              </div>
            </section>

            {/* Total — highlighted between perforations */}
            <section className="space-y-2.5">
              <div className="border-t-2 border-dashed border-[#e5e7eb]" />
              <div className="flex items-center justify-between rounded-lg bg-landing-primary-50 px-3 py-2">
                <span className="text-[15px] font-medium tracking-wide text-[#424c5a]">TỔNG</span>
                <span className="text-[18px] font-extrabold tracking-tight text-landing-primary-500">
                  {data.total}
                </span>
              </div>
              <div className="border-t-2 border-dashed border-[#e5e7eb]" />
            </section>

            {/* Payment details */}
            <section className="space-y-1.5">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] leading-5 text-black/45">Thanh toán bằng:</span>
                <span className="text-[14px] font-semibold text-black/85">{data.paymentMethod}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[13px] leading-5 text-black/45">Ghi chú:</span>
                <span className="text-[14px] font-semibold text-black/85">{data.note}</span>
              </div>
            </section>

            {/* QR + bank transfer info */}
            <section className="flex flex-col items-center gap-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/receipt/qr.png" alt="Mã QR thanh toán" className="size-[132px]" />

              <div className="flex w-full items-center justify-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/receipt/napas.png" alt="Napas 247" className="h-[15px] w-auto" />
                <span className="h-5 w-px bg-[#e5e7eb]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/receipt/bidv.svg" alt="BIDV" className="size-9 rounded" />
                <span className="h-5 w-px bg-[#e5e7eb]" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/receipt/vietqr.png" alt="VietQR" className="h-[16px] w-auto" />
              </div>

              <div className="text-center leading-snug text-black/85">
                <p className="text-[14px]">{bank.accountName}</p>
                <p className="text-[14px] font-bold">Số TK: {bank.accountNumber}</p>
                <p className="text-[14px]">{bank.bankName}</p>
              </div>
            </section>
          </div>
        </main>
      </div>

      <div className="receipt-zig receipt-zig-bottom" />
    </div>
  );
}
