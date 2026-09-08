import { createFileRoute } from "@tanstack/react-router";
import SalesAccelerator from "@/pages/accelerators/Sales";

export const Route = createFileRoute("/accelerators/sales")({
  component: SalesAccelerator,
});
