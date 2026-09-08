import { createFileRoute } from "@tanstack/react-router";
import CustomerServiceAccelerator from "@/pages/accelerators/CustomerService";

export const Route = createFileRoute("/accelerators/customer-service")({
  component: CustomerServiceAccelerator,
});
