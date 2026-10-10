import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import TermsOfService from "@/pages/legal/TermsOfService";

export const Route = createFileRoute("/legal/terms")({
  head: () => pageHeadAt("/legal/terms")('Terms of Service | Quabu', 'Read the terms governing use of the Quabu website and services.'),
  component: TermsOfService,
});
