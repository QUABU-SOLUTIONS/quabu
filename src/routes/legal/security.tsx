import { pageHeadAt } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import SecurityPolicy from "@/pages/legal/SecurityPolicy";

export const Route = createFileRoute("/legal/security")({
  head: () => pageHeadAt("/legal/security")('Information Security Policy | Quabu', "Quabu's Information Security Policy, aligned with the Spanish National Security Framework (ENS) and ISO/IEC 27001."),
  component: SecurityPolicy,
});
