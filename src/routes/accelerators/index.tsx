import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import Accelerators from "@/pages/Accelerators";

export const Route = createFileRoute("/accelerators/")({
  head: () => pageHeadAt("/accelerators")('Digital Accelerators | Quabu', 'Explore ready-to-deploy Atlassian workflows for your teams and departments.'),
  component: Accelerators,
});
