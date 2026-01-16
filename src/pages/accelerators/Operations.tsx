import { Settings } from "lucide-react";
import AcceleratorPageTemplate, { AcceleratorConfig } from "@/components/accelerators/AcceleratorPageTemplate";

const operationsConfig: AcceleratorConfig = {
  id: "operations",
  name: "Operations",
  tagline: "Optimize Efficiency at Every Level",
  description: "Transform your operational excellence with automated workflows for project management, inventory control, maintenance scheduling, and resource optimization. Reduce waste and maximize productivity.",
  icon: Settings,
  gradientFrom: "from-orange-500",
  gradientTo: "to-amber-500",
  workflows: [
    {
      id: "OPE-PSP-001",
      name: "Operational Project Planning & Tracking",
      description: "Comprehensive project management with milestones, dependencies, and resource allocation."
    },
    {
      id: "OPE-GIA-002",
      name: "Inventory & Supply Chain Management",
      description: "Real-time inventory tracking with automated reorder points and supplier management."
    },
    {
      id: "OPE-CMC-003",
      name: "Preventive & Corrective Maintenance Control",
      description: "Scheduled maintenance workflows with work orders, parts tracking, and compliance documentation."
    },
    {
      id: "OPE-OAR-004",
      name: "Resource Allocation Optimization",
      description: "Intelligent resource scheduling and allocation based on skills, availability, and priorities."
    },
    {
      id: "OPE-GPS-005",
      name: "Vendor & Subcontractor Management",
      description: "End-to-end vendor lifecycle management with performance tracking and contract management."
    },
    {
      id: "OPE-MTP-006",
      name: "Time & Productivity Monitoring",
      description: "Time tracking and productivity analytics with insights for continuous improvement."
    },
    {
      id: "OPE-ARO-007",
      name: "Operational Reporting Automation",
      description: "Automated generation of operational reports with customizable templates and distribution."
    },
    {
      id: "OPE-GRP-008",
      name: "Risk Management & Contingency Planning",
      description: "Risk assessment workflows with mitigation strategies and contingency plan activation."
    },
    {
      id: "OPE-SCN-009",
      name: "Regulatory Compliance Monitoring",
      description: "Compliance tracking with audit trails, certifications, and regulatory requirement management."
    },
  ],
  benefits: [
    "Reduce operational costs by 30%",
    "Minimize equipment downtime",
    "Optimize resource utilization",
    "Improve supply chain visibility",
    "Automate compliance tracking",
    "Enhance vendor management",
    "Real-time operational insights",
    "Streamline maintenance workflows"
  ],
  stats: [
    { value: "30%", label: "Cost Reduction" },
    { value: "9", label: "Workflows" },
    { value: "99%", label: "Uptime" }
  ],
  prevAccelerator: { name: "Human Resources", href: "/accelerators/hr" },
  nextAccelerator: { name: "Finances", href: "/accelerators/finance" }
};

export default function OperationsAccelerator() {
  return <AcceleratorPageTemplate config={operationsConfig} />;
}
