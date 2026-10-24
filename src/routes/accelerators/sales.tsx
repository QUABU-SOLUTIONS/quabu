import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import SalesAccelerator from "@/pages/accelerators/Sales";

export const Route = createFileRoute("/accelerators/sales")({
  head: ({ match }) => pageHeadAt("/accelerators/sales", match.search.lang)('Sales Accelerator | Quabu', 'Improve sales team workflows with Quabu digital accelerators.'),
  component: SalesAccelerator,
});
