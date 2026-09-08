import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en";
import es from "./locales/es";
import ca from "./locales/ca";
import it from "./locales/it";

const savedLang =
  (typeof localStorage !== "undefined" && localStorage.getItem("quabu-lang")) || "en";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    ca: { translation: ca },
    it: { translation: it },
  },
  lng: savedLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

i18n.on("languageChanged", (lang) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("quabu-lang", lang);
  }
});

export default i18n;
