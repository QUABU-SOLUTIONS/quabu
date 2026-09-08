import { createFileRoute } from "@tanstack/react-router";
import ITAccelerator from "@/pages/accelerators/IT";

export const Route = createFileRoute("/accelerators/it")({
  component: ITAccelerator,
});
