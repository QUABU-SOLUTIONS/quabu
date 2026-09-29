import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import Blog from "@/pages/Blog";

export const Route = createFileRoute("/blog/")({
  head: () => pageHead('Quabu Blog | Atlassian Insights & News', 'Read articles and news on Jira, Confluence, Forge, AI and Atlassian from Quabu.'),
  component: Blog,
});
