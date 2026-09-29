import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import CustomDevelopment from "@/pages/services/CustomDevelopment";

export const Route = createFileRoute("/services/custom-development")({
  head: () => pageHead('Custom Development | Quabu', 'Build custom Atlassian apps and solutions with Quabu development experts.'),
  component: CustomDevelopment,
});
