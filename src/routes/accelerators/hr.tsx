import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import HRAccelerator from "@/pages/accelerators/HR";

export const Route = createFileRoute("/accelerators/hr")({
  head: () => pageHeadAt("/accelerators/hr")('HR Accelerator | Quabu', 'Organize people operations with Quabu digital accelerators.'),
  component: HRAccelerator,
});
