import { describe, expect, it } from "vitest";
import { languageAlternates, languagePath, resolveLanguage } from "./languages";
import { createLanguageInstance } from "@/i18n";
import { pageHeadAt } from "./page-head";

describe("Language URLs", () => {
  for (const lang of ["es", "ca", "it"] as const) {
    it(`gives ${lang} a distinct self-canonical URL`, () => {
      const head = pageHeadAt("/about", lang)("About Quabu", "About our team");
      expect(head.links.find((link) => link.rel === "canonical")?.href).toBe(`https://www.quabusolutions.com/about?lang=${lang}`);
    });
  }
  it("retains other query parameters and fragments when selecting Catalan", () => {
    expect(languagePath("/contact?topic=jira&lang=es#form", "ca")).toBe("/contact?topic=jira&lang=ca#form");
  });
  it("uses bare English URLs as the default", () => {
    expect(languagePath("/about?lang=ca", "en")).toBe("/about");
    expect(resolveLanguage("unknown")).toBe("en");
  });
  it("offers all four real translations of the security policy", () => {
    expect(languageAlternates("/legal/security").map((link) => link.hrefLang)).toEqual(["en", "es", "ca", "it", "x-default"]);
  });
  it("does not claim non-existent translations of English articles", () => {
    expect(languageAlternates("/blog/traceability-is-not-a-jira-problem").map((link) => link.hrefLang)).toEqual(["en", "x-default"]);
  });
  it("isolates Spanish and Italian SSR translations", () => {
    const es = createLanguageInstance("es");
    const it = createLanguageInstance("it");
    expect(es.t("nav.contact")).toBe("Contacto");
    expect(it.t("nav.contact")).toBe("Contatto");
    expect(es.t("nav.contact")).toBe("Contacto");
  });
});