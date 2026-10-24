export const supportedLanguages = ["en", "es", "ca", "it"] as const;
export type Language = (typeof supportedLanguages)[number];
export function resolveLanguage(value: unknown): Language {
  return supportedLanguages.find((lang) => lang === value) ?? "en";
}
/** Do not advertise translations of English-only editorial or legal content. */
export function hasTranslatedPage(path: string) {
  return !path.startsWith("/blog") && !path.startsWith("/newsletter") &&
    !["/legal/privacy", "/legal/terms", "/legal/cookies"].includes(path);
}
export function languagePath(path: string, language: Language): string {
  const url = new URL(path, "https://www.quabusolutions.com");
  url.searchParams.delete("lang");
  if (language !== "en") url.searchParams.set("lang", language);
  return `${url.pathname}${url.search}${url.hash}`;
}
export function languageAlternates(path: string) {
  const languages = hasTranslatedPage(path) ? supportedLanguages : ["en"] as const;
  return [...languages.map((lang) => ({ rel: "alternate", hrefLang: lang,
    href: `https://www.quabusolutions.com${languagePath(path, lang)}`,
  })), { rel: "alternate", hrefLang: "x-default", href: `https://www.quabusolutions.com${languagePath(path, "en")}` }];
}
