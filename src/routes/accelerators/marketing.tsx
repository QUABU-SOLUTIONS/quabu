import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import MarketingAccelerator from "@/pages/accelerators/Marketing";

export const Route = createFileRoute("/accelerators/marketing")({
  head: () => pageHead('Marketing Accelerator | Quabu', 'Plan and manage marketing work with Quabu digital accelerators.'),
  component: MarketingAccelerator,
});
