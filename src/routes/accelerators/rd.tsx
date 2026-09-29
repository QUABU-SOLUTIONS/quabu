import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import RDAccelerator from "@/pages/accelerators/RD";

export const Route = createFileRoute("/accelerators/rd")({
  head: () => pageHead('R&D Accelerator | Quabu', 'Manage research and development workflows with Quabu digital accelerators.'),
  component: RDAccelerator,
});
