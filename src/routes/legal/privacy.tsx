import { createFileRoute } from "@tanstack/react-router";
import PrivacyPolicy from "@/pages/legal/PrivacyPolicy";

export const Route = createFileRoute("/legal/privacy")({
  component: PrivacyPolicy,
});
