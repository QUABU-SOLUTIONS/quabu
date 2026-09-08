import { createFileRoute } from "@tanstack/react-router";
import CloudMigration from "@/pages/services/CloudMigration";

export const Route = createFileRoute("/services/cloud-migration")({
  component: CloudMigration,
});
