import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Cookie, X, Settings } from "lucide-react";

type CookiePreferences = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_CONSENT_KEY = "cookie_consent";
const COOKIE_PREFERENCES_KEY = "cookie_preferences";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay to avoid banner showing immediately on page load
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    } else {
      const savedPrefs = localStorage.getItem(COOKIE_PREFERENCES_KEY);
      if (savedPrefs) {
        setPreferences(JSON.parse(savedPrefs));
      }
    }
  }, []);

  const savePreferences = (prefs: CookiePreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "true");
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(prefs));
    setPreferences(prefs);
    setShowBanner(false);
    setShowSettings(false);
    
    // Here you would typically initialize or disable tracking based on preferences
    if (prefs.analytics) {
      // Initialize analytics
      console.log("Analytics cookies enabled");
    }
  };

  const acceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectNonEssential = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const saveCustomPreferences = () => {
    savePreferences(preferences);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
      >
        <div className="container max-w-4xl mx-auto">
          <div className="bg-background border border-border rounded-2xl shadow-2xl overflow-hidden">
            {!showSettings ? (
              /* Main Banner */
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden sm:flex w-12 h-12 bg-primary/10 rounded-xl items-center justify-center shrink-0">
                    <Cookie className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">We value your privacy</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
                      By clicking "Accept All", you consent to our use of cookies. You can customize your preferences 
                      or reject non-essential cookies.{" "}
                      <Link to="/legal/cookies" className="text-primary hover:underline">
                        Learn more
                      </Link>
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={acceptAll} className="gap-2">
                        Accept All
                      </Button>
                      <Button variant="outline" onClick={rejectNonEssential}>
                        Reject Non-Essential
                      </Button>
                      <Button 
                        variant="ghost" 
                        onClick={() => setShowSettings(true)}
                        className="gap-2"
                      >
                        <Settings className="w-4 h-4" />
                        Customize
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              /* Settings Panel */
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Cookie Preferences</h3>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    onClick={() => setShowSettings(false)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="space-y-4 mb-6">
                  {/* Necessary Cookies */}
                  <div className="flex items-start justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium">Strictly Necessary</span>
                        <span className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                          Always Active
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Essential for the website to function. Cannot be disabled.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={true}
                      disabled
                      className="w-5 h-5 rounded accent-primary cursor-not-allowed"
                    />
                  </div>

                  {/* Analytics Cookies */}
                  <div className="flex items-start justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex-1">
                      <span className="font-medium block mb-1">Analytics Cookies</span>
                      <p className="text-sm text-muted-foreground">
                        Help us understand how visitors interact with our website.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="w-5 h-5 rounded accent-primary cursor-pointer"
                    />
                  </div>

                  {/* Marketing Cookies */}
                  <div className="flex items-start justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex-1">
                      <span className="font-medium block mb-1">Marketing Cookies</span>
                      <p className="text-sm text-muted-foreground">
                        Used to track visitors and display relevant advertisements.
                      </p>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      className="w-5 h-5 rounded accent-primary cursor-pointer"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button onClick={saveCustomPreferences}>
                    Save Preferences
                  </Button>
                  <Button variant="outline" onClick={acceptAll}>
                    Accept All
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground mt-4">
                  For more information, see our{" "}
                  <Link to="/legal/cookies" className="text-primary hover:underline">
                    Cookies Policy
                  </Link>
                  {" "}and{" "}
                  <Link to="/legal/privacy" className="text-primary hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

// Export function to open cookie settings from footer
export function openCookieSettings() {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
  window.location.reload();
}
