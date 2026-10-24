import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import NewsletterConfirm from "@/pages/NewsletterConfirm";

export const Route = createFileRoute("/newsletter/confirm")({
  head: ({ match }) => pageHeadAt("/newsletter/confirm", match.search.lang)('Confirm Newsletter Subscription | Quabu', 'Confirm your subscription to Quabu news and updates.'),
  component: NewsletterConfirm,
});
