import { useEffect } from "react";
import type { ReactNode } from "react";
import { QueryClientProvider, type QueryClient } from "@tanstack/react-query";
import {
  createRootRouteWithContext,
  HeadContent,
  Outlet,
  Scripts,
  useRouter,
} from "@tanstack/react-router";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import NotFound from "@/pages/NotFound";
import { reportLovableError } from "@/lib/lovable-error-reporting";
import appCss from "../styles.css?url";

// ported from main.tsx
import "../i18n";

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1.0" },
      { name: "prerender-token", content: "txoLv7h8NObjrFxbmBJO" },
      { title: "Quabu | Atlassian Gold Solution Partner | Digital Accelerators" },
      {
        name: "description",
        content:
          "Quabu is an Atlassian Gold Solution Partner offering Digital Accelerators — pre-built, customizable Atlassian solutions that accelerate your digital transformation.",
      },
      { name: "author", content: "Quabu" },
      { property: "og:title", content: "Quabu | Atlassian Gold Solution Partner" },
      {
        property: "og:description",
        content: "Pre-built, customizable Atlassian solutions that accelerate your digital transformation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.quabusolutions.com/" },
      { property: "og:image", content: "https://www.quabusolutions.com/og-image.png" },
      { property: "og:site_name", content: "Quabu" },
      { property: "og:locale", content: "en_US" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@quabu" },
      { name: "twitter:image", content: "https://www.quabusolutions.com/og-image.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico", sizes: "any" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" },
      { rel: "sitemap", type: "application/xml", title: "Sitemap", href: "/sitemap.xml" },
      { rel: "canonical", href: "https://www.quabusolutions.com/" },
    ],
    scripts: [
      { src: "https://www.googletagmanager.com/gtag/js?id=G-8BNB10YGBV", async: true },
      {
        children:
          "window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-8BNB10YGBV');",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Quabu",
          url: "https://www.quabusolutions.com",
          logo: "https://www.quabusolutions.com/favicon.png",
          description:
            "Atlassian Gold Solution Partner specializing in Digital Accelerators and custom Atlassian solutions.",
          sameAs: ["https://marketplace.atlassian.com/vendors/1220154/quabu"],
          contactPoint: {
            "@type": "ContactPoint",
            email: "hello@quabusolutions.com",
            contactType: "customer support",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <NotFound />,
  errorComponent: RootErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Outlet />
          <CookieConsent />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

function RootErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();

  console.error(error);

  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-2">This page didn't load</h1>
        <p className="text-muted-foreground mb-6">
          Something went wrong on our end. You can try again or head back home.
        </p>
        <div className="flex gap-3 justify-center flex-wrap">
          <button
            className="bg-primary text-primary-foreground px-4 py-2 rounded-md"
            onClick={() => {
              router.invalidate();
              reset();
            }}
          >
            Try again
          </button>
          <a href="/" className="border border-border bg-card text-foreground px-4 py-2 rounded-md">
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}
