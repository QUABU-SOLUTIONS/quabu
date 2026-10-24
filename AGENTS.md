- Keep editorial blog articles as Markdown in `src/lib/` when they include substantial text; this keeps the listing and article page concise while preserving the original author's attribution.
- Define route-level metadata with `pageHead` on each content route; leaf routes need discoverable titles and descriptions even before client-side SEO renders.- Leaf routes set head via `pageHeadAt(path)` (or `pageHead(..., path)` for dynamic routes) so canonical and og:url self-reference the page; never put canonical/og:url in `__root.tsx`, since a root value makes every page point to the homepage.

- Locale URLs use bare paths for English and `?lang=es|ca|it` for translations; derive SSR i18next instances from validated route search, never mutate a shared singleton, to isolate concurrent requests.
- Leaf metadata and sitemap advertise only real translated content; English-only blog articles and untranslated legal documents canonicalize to bare URLs, avoiding false hreflang claims.
- Internal navigation preserves the URL language; language choices are crawlable links so direct requests and client navigation agree.

- Share Visual Organizer product details between the homepage and navigation through a single product definition; omit ratings and install counts until verified data is supplied.
