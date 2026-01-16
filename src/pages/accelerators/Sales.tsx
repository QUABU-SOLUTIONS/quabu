import { TrendingUp } from "lucide-react";
import AcceleratorPageTemplate, { AcceleratorConfig } from "@/components/accelerators/AcceleratorPageTemplate";

const salesConfig: AcceleratorConfig = {
  id: "sales",
  name: "Sales",
  tagline: "Accelerate Revenue & Close More Deals",
  description: "Optimize your entire sales process from lead generation to deal closure. Automate repetitive tasks, track opportunities in real-time, and empower your sales team with intelligent insights.",
  icon: TrendingUp,
  gradientFrom: "from-emerald-500",
  gradientTo: "to-green-500",
  workflows: [
    {
      id: "VEN-GPV-001",
      name: "Sales Pipeline Management",
      description: "Complete visibility and control over your sales pipeline with automated stage tracking and forecasting."
    },
    {
      id: "VEN-RAI-002",
      name: "Automatic Customer Interaction Logging",
      description: "Automatically capture and log all customer interactions across channels for complete relationship history."
    },
    {
      id: "VEN-GSC-003",
      name: "Quote Generation & Tracking",
      description: "Streamlined quote creation with templates, approval workflows, and real-time status tracking."
    },
    {
      id: "VEN-ARR-004",
      name: "Follow-up Reminder Automation",
      description: "Intelligent reminder system that ensures no opportunity falls through the cracks."
    },
    {
      id: "VEN-PAL-005",
      name: "Lead Prioritization & Assignment",
      description: "AI-driven lead scoring and automatic assignment to the right sales representatives."
    },
    {
      id: "VEN-AMV-006",
      name: "Sales Metrics Analysis",
      description: "Comprehensive analytics dashboards with KPIs, trends, and predictive insights."
    },
    {
      id: "VEN-GOC-007",
      name: "Automatic Purchase Order Generation",
      description: "Seamless transition from closed deals to purchase orders with automated document generation."
    },
    {
      id: "VEN-GCA-008",
      name: "Customer Contract & Agreement Management",
      description: "Centralized contract management with version control, e-signatures, and renewal tracking."
    },
    {
      id: "VEN-SCR-009",
      name: "CRM Synchronization",
      description: "Bi-directional sync with major CRMs to centralize all customer information in one place."
    },
  ],
  benefits: [
    "Increase win rates by 35%",
    "Reduce sales cycle time",
    "Automate follow-ups",
    "Real-time pipeline visibility",
    "Improve lead conversion",
    "Centralize customer data",
    "Accelerate quote approvals",
    "Enhanced forecasting accuracy"
  ],
  stats: [
    { value: "35%", label: "Higher Win Rate" },
    { value: "9", label: "Workflows" },
    { value: "50%", label: "Faster Cycles" }
  ],
  prevAccelerator: { name: "Marketing", href: "/accelerators/marketing" },
  nextAccelerator: { name: "Human Resources", href: "/accelerators/hr" }
};

export default function SalesAccelerator() {
  return <AcceleratorPageTemplate config={salesConfig} />;
}
