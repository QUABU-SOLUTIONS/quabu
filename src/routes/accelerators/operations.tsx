import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import OperationsAccelerator from "@/pages/accelerators/Operations";

export const Route = createFileRoute("/accelerators/operations")({
  head: ({ match }) => pageHeadAt("/accelerators/operations", match.search.lang)('Operations Accelerator | Quabu', 'Coordinate operational work with Quabu digital accelerators.'),
  component: OperationsAccelerator,
});
