import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import MarketingAccelerator from "@/pages/accelerators/Marketing";

export const Route = createFileRoute("/accelerators/marketing")({
  head: () => pageHeadAt("/accelerators/marketing")('Marketing Accelerator | Quabu', 'Plan and manage marketing work with Quabu digital accelerators.'),
  component: MarketingAccelerator,
});
