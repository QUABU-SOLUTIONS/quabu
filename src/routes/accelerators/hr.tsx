import { createFileRoute } from "@tanstack/react-router";
import HRAccelerator from "@/pages/accelerators/HR";

export const Route = createFileRoute("/accelerators/hr")({
  component: HRAccelerator,
});
