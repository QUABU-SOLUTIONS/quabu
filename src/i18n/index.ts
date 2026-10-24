import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import es from "./locales/es";
import ca from "./locales/ca";
import it from "./locales/it";

export function createLanguageInstance(language: string) {
  const instance = createInstance();
  void instance.use(initReactI18next).init({
    resources: { en: { translation: en }, es: { translation: es }, ca: { translation: ca }, it: { translation: it } },
    lng: language,
    fallbackLng: "en",
    initImmediate: false,
    interpolation: { escapeValue: false },
  });
  return instance;
}
