import { PaymentReceipt } from "@/components/receipt/PaymentReceipt";

export default function HoaDonPage() {
  return (
    <div className="receipt-page flex min-h-screen items-center justify-center bg-[#494949] p-10">
      <PaymentReceipt />
    </div>
  );
}
