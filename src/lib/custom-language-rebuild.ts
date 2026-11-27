import markdown from "./custom-language-rebuild.md?raw";
import cover from "@/assets/custom-language-rebuild-cover.jpg.asset.json";

export const customLanguageRebuild = {
  id: "rebuilding-custom-language-jira-cloud-from-scratch",
  title: "Rebuilding Custom Language for Jira Cloud from Scratch: How to Bring Jira to Your Own Language",
  excerpt: "Quabu has rebuilt Custom Language for Jira Cloud with a new architecture: instant language switching, better performance and new dictionaries like Catalan and Basque.",
  content: markdown,
  category: "News",
  categoryKey: "news",
  date: "November 27, 2026",
  readTime: "3 min read",
  image: cover.url,
  featured: true,
  author: "Quabu Team",
  tags: ["Custom Language", "Jira Cloud", "Localization", "Catalan", "Basque", "Quabu"],
};
