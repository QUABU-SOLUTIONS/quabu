import markdown from "./jsm-sla-rovo-portal.md?raw";
import cover from "@/assets/jsm-sla-cover.jpg.asset.json";
import portal from "@/assets/jsm-sla-portal.png.asset.json";
import settings from "@/assets/jsm-sla-settings.png.asset.json";
import tutorial from "@/assets/jsm-sla-tutorial.jpg.asset.json";

export const jsmSlaRovoPortal = {
  id: "jira-service-management-slas-rovo-creation-native-portal-visibility",
  title: "What's New in Jira Service Management SLAs: Creation with Rovo and Native Portal Visibility",
  excerpt: "Explore JSM's new SLA rules engine, AI-assisted creation with Atlassian Rovo and native customer portal visibility on Premium and Enterprise plans.",
  content: markdown
    .replaceAll("JSM_SLA_PORTAL_IMAGE", portal.url)
    .replaceAll("JSM_SLA_SETTINGS_IMAGE", settings.url)
    .replaceAll("JSM_SLA_TUTORIAL_IMAGE", tutorial.url),
  category: "News",
  categoryKey: "news",
  date: "November 24, 2026",
  readTime: "2 min read",
  image: cover.url,
  featured: true,
  author: "Quabu Team",
  tags: ["Jira Service Management", "SLA", "Atlassian Rovo", "Customer Portal", "JiraBro", "Quabu"],
};