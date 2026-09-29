import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import SalesAccelerator from "@/pages/accelerators/Sales";

export const Route = createFileRoute("/accelerators/sales")({
  head: () => pageHead('Sales Accelerator | Quabu', 'Improve sales team workflows with Quabu digital accelerators.'),
  component: SalesAccelerator,
});
