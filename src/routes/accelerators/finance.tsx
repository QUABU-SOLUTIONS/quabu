import { createFileRoute } from "@tanstack/react-router";
import FinanceAccelerator from "@/pages/accelerators/Finance";

export const Route = createFileRoute("/accelerators/finance")({
  component: FinanceAccelerator,
});
