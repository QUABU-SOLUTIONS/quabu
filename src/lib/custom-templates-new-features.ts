import markdown from "./custom-templates-new-features.md?raw";
import cover from "@/assets/custom-templates-new-features.jpg.asset.json";
import comments from "@/assets/custom-templates-comments.png.asset.json";
import variables from "@/assets/custom-templates-variables.png.asset.json";
import example from "@/assets/custom-templates-example.png.asset.json";

export const customTemplatesNewFeatures = {
  id: "custom-templates-jira-cloud-user-templates-dynamic-variables-project-restrictions",
  title: "New Features in Custom Templates for Jira Cloud: User Templates, Dynamic Variables and Project Restrictions",
  excerpt: "Discover Custom Templates v2.2.1: personal comment templates for every user, project-specific targeting and smart variables that automatically fill in Jira issue details.",
  content: markdown
    .replaceAll("CUSTOM_TEMPLATES_COMMENTS_IMAGE", comments.url)
    .replaceAll("CUSTOM_TEMPLATES_VARIABLES_IMAGE", variables.url)
    .replaceAll("CUSTOM_TEMPLATES_EXAMPLE_IMAGE", example.url),
  category: "News",
  categoryKey: "news",
  date: "November 23, 2026",
  readTime: "3 min read",
  image: cover.url,
  featured: true,
  author: "Quabu Team",
  tags: ["Custom Templates", "Jira Cloud", "Comment Templates", "Automation", "Quabu"],
};