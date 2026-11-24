import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import BlogPost, { blogPosts } from "@/pages/BlogPost";
import metafrazoTraceabilityCover from "@/assets/traceabilityIsNotAJiraProblem.jpg.asset.json";
import { atlassianTeam26Europe } from "@/lib/atlassian-team26-europe";
import { masterLoomAI } from "@/lib/master-loom-ai";
import { atlassianGuardPolicies } from "@/lib/atlassian-guard-policies";
import { visualOrganizerHackathon } from "@/lib/visual-organizer-hackathon";
import { atlassianMcpJsm } from "@/lib/atlassian-mcp-jsm";
import { customTemplatesNewFeatures } from "@/lib/custom-templates-new-features";
import { jsmSlaRovoPortal } from "@/lib/jsm-sla-rovo-portal";

export const Route = createFileRoute("/blog/$id")({
  head: ({ params }) => {
    const isSla = params.id === jsmSlaRovoPortal.id;
    const isCustomTemplates = params.id === customTemplatesNewFeatures.id;
    const isMcpJsm = params.id === atlassianMcpJsm.id;
    const isHackathon = params.id === visualOrganizerHackathon.id;
    const isLoom = params.id === masterLoomAI.id;
    const isTeam26Europe = params.id === atlassianTeam26Europe.id;
    const isGuard = params.id === atlassianGuardPolicies.id;
    const title = isSla ? jsmSlaRovoPortal.title : isCustomTemplates ? customTemplatesNewFeatures.title : isMcpJsm ? atlassianMcpJsm.title : isHackathon ? visualOrganizerHackathon.title : isGuard ? atlassianGuardPolicies.title : isLoom ? masterLoomAI.title : isTeam26Europe ? atlassianTeam26Europe.title : params.id === "traceability-is-not-a-jira-problem"
      ? "Traceability is not a Jira problem"
      : params.id.split("-").map((word) => word[0]?.toUpperCase() + word.slice(1)).join(" ");
    const description = isSla ? jsmSlaRovoPortal.excerpt : isCustomTemplates ? customTemplatesNewFeatures.excerpt : isMcpJsm ? atlassianMcpJsm.excerpt : isHackathon ? visualOrganizerHackathon.excerpt : isGuard ? atlassianGuardPolicies.excerpt : isLoom ? masterLoomAI.excerpt : isTeam26Europe ? atlassianTeam26Europe.excerpt : params.id === "traceability-is-not-a-jira-problem"
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
    return isSla || isCustomTemplates || isMetafrazo || isTeam26Europe || isLoom || isHackathon
      ? {
          ...head,
          scripts,
          meta: [
            ...head.meta,
            { property: "og:image", content: image },
            { name: "twitter:image", content: image },
          ],
        }
      : { ...head, scripts };
  },
  component: BlogPost,
});
