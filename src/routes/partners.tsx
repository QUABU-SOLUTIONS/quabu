import { pageHead } from "@/lib/page-head";
import { createFileRoute } from "@tanstack/react-router";
import Partners from "@/pages/Partners";

export const Route = createFileRoute("/partners")({
  head: () => pageHead('Partners | Quabu Solutions', 'Meet the technology and strategic partners working with Quabu.'),
  component: Partners,
});
