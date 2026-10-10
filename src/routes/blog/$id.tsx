import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import BlogPost, { blogPosts } from "@/pages/BlogPost";
import metafrazoTraceabilityCover from "@/assets/traceabilityIsNotAJiraProblem.jpg.asset.json";

export const Route = createFileRoute("/blog/$id")({
  head: ({ params }) => {
    const title = params.id === "traceability-is-not-a-jira-problem"
      ? "Traceability is not a Jira problem"
      : params.id.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ");
    const description = params.id === "traceability-is-not-a-jira-problem"
      ? "MetaFrazo explains why Jira Cloud audit evidence must be recorded as work happens, with insights from Quabu's Raúl Peláez Mendoza."
      : `Read ${title} on the Quabu blog for Atlassian news and insights.`;
    const head = pageHead(title.length > 46 ? title : `${title} | Quabu Blog`, description, "article", `/blog/${params.id}`);
    const url = `https://www.quabusolutions.com/blog/${params.id}`;
    const isMetafrazo = params.id === "traceability-is-not-a-jira-problem";
    const post = blogPosts.find((p) => p.id === params.id);
    const rawImage = isMetafrazo ? metafrazoTraceabilityCover.url : post?.image ?? "/og-image.png";
    const image = rawImage.startsWith("/") ? `https://www.quabusolutions.com${rawImage}` : rawImage;
    const parsed = post ? new Date(post.date) : null;
    const datePublished = parsed && !isNaN(parsed.getTime()) ? parsed.toISOString() : undefined;
    const scripts = [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        description,
        url,
        mainEntityOfPage: url,
        image,
        ...(datePublished ? { datePublished, dateModified: datePublished } : {}),
        author: isMetafrazo
          ? { "@type": "Person", name: "Maria Reisinger", url: "https://blog.metafrazo.cloud/blog/traceability-is-not-a-jira-problem" }
          : { "@type": "Organization", name: "Quabu", url: "https://www.quabusolutions.com" },
        publisher: { "@type": "Organization", name: "Quabu", logo: { "@type": "ImageObject", url: "https://www.quabusolutions.com/favicon.png" } },
      }),
    }];
    return isMetafrazo
      ? {
          ...head,
          scripts,
          meta: [
            ...head.meta,
            { property: "og:image", content: `https://www.quabusolutions.com${metafrazoTraceabilityCover.url}` },
            { name: "twitter:image", content: `https://www.quabusolutions.com${metafrazoTraceabilityCover.url}` },
          ],
        }
      : { ...head, scripts };
  },
  component: BlogPost,
});
