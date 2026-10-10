const BASE_URL = "https://www.quabusolutions.com";

/** Shared leaf-route metadata; page-specific content can still add details through SEO. */
export function pageHead(title: string, description: string, type: "website" | "article" = "website", path?: string) {
  const url = path !== undefined ? `${BASE_URL}${path}` : undefined;
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
    links: url ? [{ rel: "canonical", href: url }] : [],
  };
}

/** Binds pageHead to a route path so canonical and og:url self-reference the page. */
export function pageHeadAt(path: string) {
  return (title: string, description: string, type: "website" | "article" = "website") =>
    pageHead(title, description, type, path);
}
