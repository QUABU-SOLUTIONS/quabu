import { createFileRoute } from "@tanstack/react-router";
import MarketingAccelerator from "@/pages/accelerators/Marketing";

export const Route = createFileRoute("/accelerators/marketing")({
  component: MarketingAccelerator,
});
