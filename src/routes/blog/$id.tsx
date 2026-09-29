import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import BlogPost from "@/pages/BlogPost";
import metafrazoTraceabilityCover from "@/assets/traceabilityIsNotAJiraProblem.jpg.asset.json";

export const Route = createFileRoute("/blog/$id")({
  head: ({ params }) => {
    const title = params.id === "traceability-is-not-a-jira-problem"
      ? "Traceability is not a Jira problem"
      : params.id.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ");
    const description = params.id === "traceability-is-not-a-jira-problem"
      ? "MetaFrazo explains why Jira Cloud audit evidence must be recorded as work happens, with insights from Quabu's Raúl Peláez Mendoza."
      : `Read ${title} on the Quabu blog for Atlassian news and insights.`;
    const head = pageHead(`${title} | Quabu Blog`, description, "article");
    return params.id === "traceability-is-not-a-jira-problem"
      ? {
          ...head,
          meta: [
            ...head.meta,
            { property: "og:image", content: `https://www.quabusolutions.com${metafrazoTraceabilityCover.url}` },
            { name: "twitter:image", content: `https://www.quabusolutions.com${metafrazoTraceabilityCover.url}` },
          ],
        }
      : head;
  },
  component: BlogPost,
});
