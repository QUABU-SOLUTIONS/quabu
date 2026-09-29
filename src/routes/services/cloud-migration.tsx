import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import CloudMigration from "@/pages/services/CloudMigration";

export const Route = createFileRoute("/services/cloud-migration")({
  head: () => pageHead('Atlassian Cloud Migration | Quabu', 'Plan your Atlassian Cloud migration with support from Quabu specialists.'),
  component: CloudMigration,
});
