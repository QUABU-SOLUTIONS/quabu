import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import FinanceAccelerator from "@/pages/accelerators/Finance";

export const Route = createFileRoute("/accelerators/finance")({
  head: ({ match }) => pageHeadAt("/accelerators/finance", match.search.lang)('Finance Accelerator | Quabu', 'Streamline finance processes with Quabu digital accelerators.'),
  component: FinanceAccelerator,
});
