import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import About from "@/pages/About";

export const Route = createFileRoute("/about")({
  head: () => pageHead('About Quabu | Atlassian Gold Partner', 'Meet Quabu and the people behind our Atlassian expertise and digital solutions.'),
  component: About,
});
