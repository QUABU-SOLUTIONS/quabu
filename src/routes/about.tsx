import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: ({ match }) => pageHeadAt("/about", match.search.lang)('About Quabu | Atlassian Gold Partner', 'Meet Quabu and the people behind our Atlassian expertise and digital solutions.'),
  component: About,
});
