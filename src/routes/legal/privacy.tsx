import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";

export const Route = createFileRoute("/legal/privacy")({
  head: () => pageHead('Privacy Policy | Quabu', 'Learn how Quabu processes and protects personal information.'),
  component: PrivacyPolicy,
});
