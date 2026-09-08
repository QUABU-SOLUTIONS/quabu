import { createFileRoute } from "@tanstack/react-router";
import NewsletterUnsubscribe from "@/pages/NewsletterUnsubscribe";

export const Route = createFileRoute("/newsletter/unsubscribe")({
  component: NewsletterUnsubscribe,
});
