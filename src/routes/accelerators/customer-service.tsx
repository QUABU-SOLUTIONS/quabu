import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import CustomerServiceAccelerator from "@/pages/accelerators/CustomerService";

export const Route = createFileRoute("/accelerators/customer-service")({
  head: () => pageHead('Customer Service Accelerator | Quabu', 'Improve customer support workflows with the Quabu customer service accelerator.'),
  component: CustomerServiceAccelerator,
});
