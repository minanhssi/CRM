import { LeadDetailPage } from "@/components/leads/LeadDetailPage";

export default function LeadEditPage({ params }: { params: { id: string } }) {
  return <LeadDetailPage mode="edit" id={params.id} />;
}
