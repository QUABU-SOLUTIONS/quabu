import { createFileRoute } from "@tanstack/react-router";
import OperationsAccelerator from "@/pages/accelerators/Operations";

export const Route = createFileRoute("/accelerators/operations")({
  component: OperationsAccelerator,
});
