import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import AtlassianServices from "@/pages/services/AtlassianServices";

export const Route = createFileRoute("/services/atlassian")({
  head: ({ match }) => pageHeadAt("/services/atlassian", match.search.lang)('Atlassian Services | Quabu', 'Explore Quabu Atlassian services for Jira, Confluence and your organization.'),
  component: AtlassianServices,
});
