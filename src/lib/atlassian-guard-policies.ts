import content from "./atlassian-guard-policies.md?raw";
import cover from "@/assets/atlassian-guard-policies.jpg.asset.json";

export const atlassianGuardPolicies = {
  id: "protect-confidential-information-atlassian-guard-policies",
  title: "How to Protect Your Confidential Information with Automatic Policies in Atlassian Guard",
  excerpt: "Learn how Atlassian Guard detects sensitive data in Jira and Confluence and applies automatic policies to alert or restrict access, in Jira Bro's video sponsored by Quabu.",
  content,
  category: "News",
  categoryKey: "news",
  date: "November 18, 2026",
  readTime: "2 min read",
  image: cover.url,
  featured: true,
  author: "Quabu Team",
  tags: ["Atlassian Guard", "Security", "Jira", "Confluence", "Jira Bro"],
};
