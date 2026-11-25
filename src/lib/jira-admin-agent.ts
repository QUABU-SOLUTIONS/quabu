import markdown from "./jira-admin-agent.md?raw";
import cover from "@/assets/jira-admin-agent-cover.jpg.asset.json";
import video from "@/assets/jira-admin-agent-video.jpg.asset.json";

export const jiraAdminAgent = {
  id: "clean-up-optimize-jira-instance-new-jira-admin-agent",
  title: "Clean Up and Optimize Your Instance with the New Jira Admin Agent",
  excerpt: "Discover Jira Admin Agent's open beta for safely merging duplicate custom fields, deleting unused fields and reviewing their impact before approving changes.",
  content: markdown.replaceAll("JIRA_ADMIN_AGENT_VIDEO_IMAGE", video.url),
  category: "News",
  categoryKey: "news",
  date: "November 25, 2026",
  readTime: "2 min read",
  image: cover.url,
  featured: true,
  author: "Quabu Team",
  tags: ["Jira Cloud", "Jira Admin Agent", "Custom Fields", "Atlassian", "Governance", "Quabu"],
};