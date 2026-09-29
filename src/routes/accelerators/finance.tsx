import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import FinanceAccelerator from "@/pages/accelerators/Finance";

export const Route = createFileRoute("/accelerators/finance")({
  head: () => pageHead('Finance Accelerator | Quabu', 'Streamline finance processes with Quabu digital accelerators.'),
  component: FinanceAccelerator,
});
