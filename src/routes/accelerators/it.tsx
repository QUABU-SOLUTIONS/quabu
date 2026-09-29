import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import ITAccelerator from "@/pages/accelerators/IT";

export const Route = createFileRoute("/accelerators/it")({
  head: () => pageHead('IT Accelerator | Quabu', 'Make IT operations more effective with Quabu digital accelerators.'),
  component: ITAccelerator,
});
