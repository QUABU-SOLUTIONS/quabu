import { createFileRoute } from "@tanstack/react-router";
import RDAccelerator from "@/pages/accelerators/RD";

export const Route = createFileRoute("/accelerators/rd")({
  component: RDAccelerator,
});
