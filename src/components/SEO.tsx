import { Helmet } from "react-helmet-async";
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
  const langs = ["en", "es", "ca"];

  // Default Organization schema
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Quabu",
    url: BASE_URL,
    logo: `${BASE_URL}/favicon.png`,
    sameAs: [
      "https://marketplace.atlassian.com/vendors/1220154/quabu",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "hello@quabusolutions.com",
    },
  };

  const finalSchema = schema ?? orgSchema;

  return (
    <Helmet>
      {/* Basic */}
      <html lang={lang} />
      <title>{resolvedTitle}</title>
      <meta name="description" content={resolvedDescription} />
      <link rel="canonical" href={canonical} />

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

      {/* Open Graph */}
      <meta property="og:title" content={resolvedTitle} />
      <meta property="og:description" content={resolvedDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Quabu" />
      <meta property="og:locale" content={lang === "es" ? "es_ES" : lang === "ca" ? "ca_ES" : "en_US"} />

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
      <script type="application/ld+json">
        {JSON.stringify(finalSchema)}
      </script>
    </Helmet>
  );
}
