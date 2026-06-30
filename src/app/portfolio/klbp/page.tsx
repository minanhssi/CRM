import { StubPage } from "../_components/StubPage";

export const metadata = {
  title: "KienlongBank Pay — Payment gateway back-office | Duong Ngoc Minh Anh",
};

export default function KLBPCaseStudy() {
  return (
    <StubPage
      badge="FLAGSHIP"
      badgeColor="bg-port-blue text-white"
      caseNumber="CASE STUDY · 01 / 04"
      title="KienlongBank Pay — back-office for a payment gateway."
      subtitle="Multi-module enterprise back-office: partner approval, employee management, transaction tracking, and configurable cash-flow workflows for a fintech product at scale."
      intro="KienlongBank Pay is an integrated payment-gateway product. The back-office side is where the bank's partner businesses, employees, and transaction operators do their work — approving merchants, configuring fee tiers, tracking transactions, and reconciling cash flow across multiple parties."
      paragraphs={[
        "I led the UX for the entire back-office system across six core modules — partner management, employee management, fee configuration, transaction operations, cash flow oversight, and PayPOS integration. The flagship challenge was making a multi-role, multi-step approval workflow feel coherent rather than bureaucratic.",
        "The case study covers the full design process: secondary research and competitor analysis (Stripe, Payoo, PayME), empathy mapping, persona work, information architecture, design system buildout, and high-fidelity mockups across 25+ screens.",
      ]}
      meta={[
        { label: "DOMAIN", value: "Fintech · Banking back-office" },
        { label: "PRODUCT", value: "Payment gateway CMS — multi-module enterprise" },
        { label: "ROLE", value: "Lead UX designer — research, UX, UI, handoff" },
        { label: "WORKFLOW", value: "Multi-role: partner approval, transactions, cash-flow" },
        { label: "METHOD", value: "User research · empathy map · personas · usability test" },
      ]}
      highlights={[
        {
          title: "Multi-role workflow design",
          body: "Approval flows that span partner → employee → operator, with clear handoff states and an auditable trail at every step.",
        },
        {
          title: "Design system buildout",
          body: "Typography ramp, color tokens, component library, and an icon set — applied consistently across six product modules.",
        },
        {
          title: "Research-led decisions",
          body: "Competitor teardown (Stripe, Payoo, PayME), persona work for two distinct merchant types, and an empathy map driving the IA.",
        },
      ]}
    />
  );
}
