import { createFileRoute } from "@tanstack/react-router";
import CustomDevelopment from "@/pages/services/CustomDevelopment";

export const Route = createFileRoute("/services/custom-development")({
  component: CustomDevelopment,
});
