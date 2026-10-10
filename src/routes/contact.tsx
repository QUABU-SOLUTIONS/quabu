import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import Contact from "@/pages/Contact";

export const Route = createFileRoute("/contact")({
  head: () => pageHeadAt("/contact")('Contact Quabu | Atlassian Experts', 'Get in touch with Quabu for help with Jira, Confluence and Atlassian solutions.'),
  component: Contact,
});
