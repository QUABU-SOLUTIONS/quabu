import { createFileRoute } from "@tanstack/react-router";
import AtlassianServices from "@/pages/services/AtlassianServices";

export const Route = createFileRoute("/services/atlassian")({
  component: AtlassianServices,
});
