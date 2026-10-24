import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/blog/")({
  head: ({ match }) => pageHeadAt("/blog", match.search.lang)('Quabu Blog | Atlassian Insights & News', 'Read articles and news on Jira, Confluence, Forge, AI and Atlassian from Quabu.'),
  component: Blog,
});
