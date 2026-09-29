import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import CookiesPolicy from "@/pages/legal/CookiesPolicy";

export const Route = createFileRoute("/legal/cookies")({
  head: () => pageHead('Cookie Policy | Quabu', 'Learn about cookies and preferences on the Quabu website.'),
  component: CookiesPolicy,
});
