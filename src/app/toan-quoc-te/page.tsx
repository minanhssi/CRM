import MathHero from "@/components/toan-quoc-te/MathHero";
import WhyMath from "@/components/toan-quoc-te/WhyMath";
import MathPathway from "@/components/toan-quoc-te/MathPathway";
import ExamSlides from "@/components/toan-quoc-te/ExamSlides";
import QualityControl from "@/components/toan-quoc-te/QualityControl";

export const metadata = {
  title: "Hệ sinh thái Toán Quốc Tế — Kiến Trẻ",
  description:
    "Đánh thức tư duy logic, kiến tạo bản lĩnh học thuật toàn cầu qua các đấu trường TIMO, IKMC, HKIMO.",
};

export default function ToanQuocTePage() {
  return (
    <main className="font-display">
      <MathHero />
      <WhyMath />
      <MathPathway />
      <ExamSlides />
      <QualityControl />
    </main>
  );
}
