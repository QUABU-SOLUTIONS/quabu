import { createFileRoute } from "@tanstack/react-router";
import CookiesPolicy from "@/pages/legal/CookiesPolicy";

export const Route = createFileRoute("/legal/cookies")({
  component: CookiesPolicy,
});
