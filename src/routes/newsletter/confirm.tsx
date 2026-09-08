import { createFileRoute } from "@tanstack/react-router";
import NewsletterConfirm from "@/pages/NewsletterConfirm";

export const Route = createFileRoute("/newsletter/confirm")({
  component: NewsletterConfirm,
});
