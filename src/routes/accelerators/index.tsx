import { createFileRoute } from "@tanstack/react-router";
import Accelerators from "@/pages/Accelerators";

export const Route = createFileRoute("/accelerators/")({
  component: Accelerators,
});
