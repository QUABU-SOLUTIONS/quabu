import { HeadphonesIcon } from "lucide-react";
import AcceleratorPageTemplate, { AcceleratorConfig } from "@/components/accelerators/AcceleratorPageTemplate";

const customerServiceConfig: AcceleratorConfig = {
  id: "customer-service",
  name: "Customer Service",
  tagline: "Deliver Exceptional Customer Experiences",
  description: "Elevate your customer support operations with automated workflows for ticket management, SLA tracking, customer feedback, and omnichannel integration. Turn every interaction into an opportunity.",
  icon: HeadphonesIcon,
  gradientFrom: "from-cyan-500",
  gradientTo: "to-sky-500",
  workflows: [
    {
      id: "ATC-GTS-001",
      name: "Support Ticket Management",
      description: "Comprehensive ticket lifecycle management with categorization, routing, and resolution tracking."
    },
    {
      id: "ATC-ARC-002",
      name: "FAQ Response Automation",
      description: "Automated responses for common inquiries with knowledge base integration and self-service options."
    },
    {
      id: "ATC-SLA-003",
      name: "SLA Tracking",
      description: "Real-time SLA monitoring with automated escalations, alerts, and compliance reporting."
    },
    {
      id: "ATC-ESR-004",
      name: "Satisfaction Surveys & Feedback Collection",
      description: "Post-interaction surveys with sentiment analysis and actionable insights generation."
    },
    {
      id: "ATC-PEC-005",
      name: "Critical Issue Prioritization & Escalation",
      description: "Intelligent priority scoring with automatic escalation paths and VIP handling."
    },
    {
      id: "ATC-AMR-006",
      name: "Support Performance Metrics Analysis",
      description: "Comprehensive analytics dashboards with agent performance, team metrics, and trend analysis."
    },
    {
      id: "ATC-AAT-007",
      name: "Automatic Ticket Assignment",
      description: "AI-powered ticket routing based on agent skills, workload, and customer history."
    },
    {
      id: "ATC-ISM-008",
      name: "Chat & Social Media Integration",
      description: "Unified inbox for all customer channels including live chat, social media, and messaging apps."
    },
  ],
  benefits: [
    "Improve CSAT scores by 40%",
    "Reduce response times",
    "Automate routine inquiries",
    "Ensure SLA compliance",
    "Enhance agent productivity",
    "Unified customer view",
    "Real-time performance insights",
    "Omnichannel support"
  ],
  stats: [
    { value: "40%", label: "Higher CSAT" },
    { value: "8", label: "Workflows" },
    { value: "<2min", label: "Avg Response" }
  ],
  prevAccelerator: { name: "Information Technology", href: "/accelerators/it" },
  nextAccelerator: { name: "Research & Development", href: "/accelerators/rd" }
};

export default function CustomerServiceAccelerator() {
  return <AcceleratorPageTemplate config={customerServiceConfig} />;
}
