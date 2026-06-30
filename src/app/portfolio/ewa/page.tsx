import { StubPage } from "../_components/StubPage";

export const metadata = {
  title: "Earned Wage Access — 3-platform payroll product | Duong Ngoc Minh Anh",
};

export default function EWACaseStudy() {
  return (
    <StubPage
      badge="FINTECH × HR"
      badgeColor="bg-[#4F5BD5] text-white"
      caseNumber="CASE STUDY · 02 / 04"
      title="Earned Wage Access — pay workers 24/7, on the wages they already earned."
      subtitle="End-to-end design across three connected platforms — worker mobile app, company admin portal, and worker web — letting employees withdraw earned wages anytime without payday loans."
      intro="An on-demand pay solution by KienlongBank. Workers get the wages they've already earned — without waiting for the regular payday and without falling into high-interest short-term loans. The product is a B2B2C workflow: HR configures rules, workers request, and the bank settles."
      paragraphs={[
        "I owned UX end-to-end across three platforms: a worker mobile app for self-service requests, a company admin portal for HR configuration and approval, and a worker web view for detailed history. The three surfaces share one workflow and one data model, designed together so a request originated on mobile is reviewed in admin and reflected back to the worker without drift.",
        "I ran moderated usability tests with internal-company employees as proxy users across three iterative rounds. Each round surfaced specific friction in the request flow, the consent step, and limit visibility — and I adjusted wireframes between rounds.",
      ]}
      meta={[
        { label: "DOMAIN", value: "Fintech · Payroll / HR" },
        { label: "ROLE", value: "Solo UX Designer — Research, UX, UI, handoff" },
        { label: "PLATFORMS", value: "3 — worker mobile · admin portal · worker web" },
        { label: "TEAM", value: "Product owner + engineering" },
        { label: "METHOD", value: "User interviews + in-company usability testing" },
      ]}
      highlights={[
        {
          title: "Worker mobile app",
          body: "One-handed, 3-tap withdrawal flow with balance-at-a-glance, request status tracking, and push notifications for approval.",
        },
        {
          title: "Company admin portal",
          body: "Configuration cockpit for HR — set advance rules per employee tier, review requests, manage limits, export payroll reports.",
        },
        {
          title: "User testing outcomes",
          body: "Withdrawal flow simplified from 6 to 3 perceived steps; balance copy rewritten after testers confused 'earned' vs 'available'.",
        },
      ]}
    />
  );
}
