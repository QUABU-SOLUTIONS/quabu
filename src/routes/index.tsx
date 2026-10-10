import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import Index from "@/pages/Index";

export const Route = createFileRoute("/")({
  head: () => pageHeadAt("/")('Quabu | Atlassian Gold Partner & Digital Accelerators', 'Quabu builds Atlassian solutions and digital accelerators to help teams work better.'),
  component: Index,
});
