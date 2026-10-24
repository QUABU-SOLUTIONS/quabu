import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import NewsletterUnsubscribe from "@/pages/NewsletterUnsubscribe";

export const Route = createFileRoute("/newsletter/unsubscribe")({
  head: ({ match }) => pageHeadAt("/newsletter/unsubscribe", match.search.lang)('Unsubscribe from Newsletter | Quabu', 'Manage your Quabu newsletter subscription.'),
  component: NewsletterUnsubscribe,
});
