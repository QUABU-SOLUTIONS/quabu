// react-helmet-async ships CJS (dev SSR) and ESM (prod build) with different
// export shapes; the namespace + default fallback works under both.
import * as helmetNs from "react-helmet-async";
const Helmet =
  helmetNs.Helmet ??
  (helmetNs as unknown as { default: typeof helmetNs }).default.Helmet;
import { useTranslation } from "react-i18next";

const BASE_URL = "https://www.quabusolutions.com";

interface SEOProps {
  /** Canonical path (without language prefix), e.g. "/blog/my-post" */
  path: string;
  /** Override default translated title */
  titleKey?: string;
  /** Override default translated description */
  descriptionKey?: string;
  /** Custom title (use instead of titleKey) */
  title?: string;
  /** Custom description (use instead of descriptionKey) */
  description?: string;
  /** OG image URL */
  image?: string;
  /** JSON-LD structured data object */
  schema?: object;
  /** Page type for OG */
  type?: "website" | "article";
  /** Article published date (ISO) */
  publishedTime?: string;
  /** Article tags */
  tags?: string[];
}

export function SEO({
  path,
  titleKey,
  descriptionKey,
  title,
  description,
  image = "https://www.quabusolutions.com/og-image.png",
  schema,
  type = "website",
  publishedTime,
  tags,
}: SEOProps) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language?.split("-")[0] || "en";

  const resolvedTitle = title ?? (titleKey ? String(t(titleKey)) : "Quabu | Atlassian Gold Solution Partner");
  const resolvedDescription =
    description ??
    (descriptionKey
      ? String(t(descriptionKey))
      : "Quabu is an Atlassian Gold Solution Partner offering Digital Accelerators and custom Atlassian solutions for enterprises.");

  // Canonical is always the English version (language-agnostic URL)
  const canonical = `${BASE_URL}${path}`;

  // hreflang alternates
  const langs = ["en", "es", "ca", "it"];

  // Organization markup lives once in __root; only emit page-specific schema here.
  const finalSchema = schema;

  return (
    <Helmet>
      {/* Basic */}
      <html lang={lang} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />

      {/* hreflang alternates — tells Google which language each URL serves */}
      {langs.map((l) => (
        <link
          key={l}
          rel="alternate"
          hrefLang={l}
          href={canonical}
        />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonical} />

      {/* AI / LLM discovery */}
      <link rel="alternate" type="text/markdown" href={`${BASE_URL}/llms.txt`} title="LLMs.txt — AI-readable site summary" />
      <meta name="llms-txt" content={`${BASE_URL}/llms.txt`} />
      <meta name="ai-content-declaration" content="This site provides AI-readable content at /llms.txt and /llms-full.txt" />

      {/* Open Graph */}
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Quabu" />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : lang === "ca" ? "ca_ES" : lang === "it" ? "it_IT" : "en_US"} />

      {/* Article-specific OG */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && tags?.map((tag) => (
        <meta key={tag} property="article:tag" content={tag} />
      ))}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={resolvedTitle} />
      <meta name="twitter:description" content={resolvedDescription} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Structured Data */}
      {finalSchema && (
        <script type="application/ld+json">{JSON.stringify(finalSchema)}</script>
      )}
    </Helmet>
  );
}
