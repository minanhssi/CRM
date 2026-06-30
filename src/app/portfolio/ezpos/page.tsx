import { StubPage } from "../_components/StubPage";

export const metadata = {
  title: "EzPOS — Mobile POS for merchants | Duong Ngoc Minh Anh",
};

export default function EzPOSCaseStudy() {
  return (
    <StubPage
      badge="B2B RETAIL"
      badgeColor="bg-[#109C84] text-white"
      caseNumber="CASE STUDY · 03 / 04"
      title="EzPOS — fast card &amp; QR payments, designed for the merchant in motion."
      subtitle="Mobile point-of-sale app for retail merchants — quick card &amp; QR payments, transaction history, and a simplified end-of-day reconciliation flow that fits in 3 minutes."
      intro="EzPOS is a B2B mobile payment app for retail merchants. The job is small but high-frequency: take a payment, see today's transactions, close the day. The challenge was building a clean checkout flow that works one-handed at the counter, plus reconciliation tools that respect a busy merchant's time."
      paragraphs={[
        "I led the full UX process — competitor analysis (Square, Stripe Terminal, Sumup), moodboard, user flow, wireframing, prototyping, design system, and high-fidelity UI. Output was a 30+ screen mobile app with a tight, on-brand visual language.",
        "Process highlights: competitor teardown to identify the smallest viable checkout flow, then iterating on the keypad/QR toggle to keep one-thumb accessibility at any screen size.",
      ]}
      meta={[
        { label: "DOMAIN", value: "Retail · Mobile POS" },
        { label: "PRODUCT", value: "Mobile payment app for merchants" },
        { label: "ROLE", value: "End-to-end UX / UI designer" },
        { label: "PLATFORM", value: "Mobile (iOS / Android)" },
        { label: "PROCESS", value: "Competitor analysis · flow · prototype · design system" },
      ]}
      highlights={[
        {
          title: "Full UX process",
          body: "Competitor analysis → user flow → moodboard → wireframe → prototype → design system → UI. End-to-end ownership.",
        },
        {
          title: "One-thumb checkout",
          body: "Card and QR paths share the same entry point. Keypad sized for one-handed use at any standard mobile width.",
        },
        {
          title: "Mobile design system",
          body: "Typography ramp, color tokens, component set tuned for high-frequency repeated use at the counter.",
        },
      ]}
    />
  );
}
