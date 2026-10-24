import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { languagePath, type Language } from "@/lib/languages";

const languages = [
  { code: "en", label: "EN", flag: "🇬🇧", full: "English" },
  { code: "es", label: "ES", flag: "🇪🇸", full: "Español" },
  { code: "ca", label: "CA", flag: "CA", full: "Català" },
  { code: "it", label: "IT", flag: "🇮🇹", full: "Italiano" },
];

export function LanguageSelector() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 hover:border-primary/40 transition-all text-sm font-medium text-foreground"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <Globe className="w-4 h-4 text-primary" />
        <span className="font-semibold text-primary">{currentLang?.label}</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute bottom-full mb-2 right-0 z-50 w-36 rounded-xl bg-popover border border-border shadow-xl overflow-hidden"
          >
            {languages.map((lang) => (
              <Button
                asChild
                variant="ghost"
                key={lang.code}
                className="flex items-center gap-2.5 w-full px-3 py-2.5 text-sm hover:bg-primary/10 transition-colors text-left"
              >
                <a href={languagePath(`${location.pathname}${location.searchStr}${location.hash ? `#${location.hash}` : ""}`, lang.code as Language)} hrefLang={lang.code} onClick={() => setIsOpen(false)}>
                <span className={lang.code === "ca" ? "text-xs font-semibold w-6 text-center" : "text-base w-6 text-center"} aria-hidden="true">{lang.flag}</span>
                <span className="font-medium flex-1">{lang.full}</span>
                {i18n.language === lang.code && (
                  <Check className="w-3.5 h-3.5 text-primary" />
                )}
                </a>
              </Button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
