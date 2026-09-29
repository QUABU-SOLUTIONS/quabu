import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => pageHead('Quabu | Atlassian Gold Solution Partner | Digital Accelerators', 'Quabu builds Atlassian solutions and digital accelerators to help teams work better.'),
  component: Index,
});
