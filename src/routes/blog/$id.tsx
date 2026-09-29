import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";

export const Route = createFileRoute("/blog/$id")({
  head: ({ params }) => {
    const title = params.id === "traceability-is-not-a-jira-problem"
      ? "Traceability is not a Jira problem"
      : params.id.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ");
    const description = params.id === "traceability-is-not-a-jira-problem"
      ? "MetaFrazo explains why Jira Cloud audit evidence must be recorded as work happens, with insights from Quabu's Raúl Peláez Mendoza."
      : `Read ${title} on the Quabu blog for Atlassian news and insights.`;
    return pageHead(`${title} | Quabu Blog`, description, "article");
  },
  component: BlogPost,
});
