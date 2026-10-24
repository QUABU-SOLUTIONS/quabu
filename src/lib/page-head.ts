import { createLanguageInstance } from "@/i18n";
import { hasTranslatedPage, languageAlternates, languagePath, type Language } from "./languages";

export function localizedMetadata(path: string, title: string, description: string, language: Language) {
  if (language === "en" || !hasTranslatedPage(path)) return { title, description };
  const t = createLanguageInstance(language).t;
  const keys: Record<string, string> = {
    "/": "hero.title3", "/about": "nav.aboutQuabu", "/contact": "nav.contact",
    "/partners": "partners.title", "/accelerators": "nav.accelerators",
    "/services/atlassian": "nav.atlassianServices", "/services/cloud-migration": "nav.cloudMigration",
    "/services/custom-development": "nav.customDevelopment", "/legal/security": "footer.links.securityPolicy",
  };
  const department = path.split("/")[2] ?? "";
  const departmentKeys: Record<string, string> = { "customer-service": "customerService" };
  const key = keys[path] ?? (path.startsWith("/accelerators/") ? `accelerators.${departmentKeys[department] ?? department}.name` : undefined);
  return key ? { title: `${String(t(key))} | Quabu`, description: `${String(t(key))}. ${String(t("footer.description"))}` } : { title, description };
}

const BASE_URL = "https://www.quabusolutions.com";

/** Shared leaf-route metadata; page-specific content can still add details through SEO. */
export function pageHead(title: string, description: string, type: "website" | "article" = "website", path?: string, language: Language = "en") {
  const contentLanguage = path && hasTranslatedPage(path) ? language : "en";
  const localized = localizedMetadata(path ?? "/", title, description, contentLanguage);
  title = localized.title;
  description = localized.description;
  const url = path !== undefined ? `${BASE_URL}${languagePath(path, contentLanguage)}` : undefined;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      ...(url ? [{ property: "og:url", content: url }] : []),
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: url && path ? [{ rel: "canonical", href: url }, ...languageAlternates(path)] : [],
  };
}

/** Binds pageHead to a route path so canonical and og:url self-reference the page. */
export function pageHeadAt(path: string, language: Language = "en") {
  return (title: string, description: string, type: "website" | "article" = "website") =>
    pageHead(title, description, type, path, language);
}
