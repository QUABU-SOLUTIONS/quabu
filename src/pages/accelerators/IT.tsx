import { Monitor } from "lucide-react";
import AcceleratorPageTemplate, { AcceleratorConfig } from "@/components/accelerators/AcceleratorPageTemplate";

const itConfig: AcceleratorConfig = {
  id: "it",
  name: "Information Technology",
  tagline: "Deliver IT Excellence at Scale",
  description: "Transform your IT service management with automated workflows for incident management, change control, security monitoring, and software development. Ensure reliability and accelerate innovation.",
  icon: Monitor,
  gradientFrom: "from-blue-500",
  gradientTo: "to-cyan-500",
  workflows: [
    {
      id: "TI-GTI-001",
      name: "Ticket & Incident Management",
      description: "ITIL-aligned incident management with automated triage, escalation, and resolution tracking."
    },
    {
      id: "TI-AUS-002",
      name: "Software Update & Patch Automation",
      description: "Automated patch management with testing workflows, rollback capabilities, and compliance tracking."
    },
    {
      id: "TI-CCI-003",
      name: "Infrastructure & Application Change Control",
      description: "CAB-ready change management with risk assessment, approval workflows, and implementation tracking."
    },
    {
      id: "TI-MDS-004",
      name: "Server & Network Performance Monitoring",
      description: "Real-time infrastructure monitoring with alerting, capacity planning, and performance optimization."
    },
    {
      id: "TI-GAP-005",
      name: "User Access & Permission Management",
      description: "Identity and access management with provisioning, periodic reviews, and compliance reporting."
    },
    {
      id: "TI-MGH-006",
      name: "Hardware Maintenance & Management",
      description: "Asset lifecycle management from procurement to disposal with maintenance scheduling."
    },
    {
      id: "TI-SPD-007",
      name: "Software Development Project Tracking",
      description: "Agile/Scrum project management with sprint planning, backlog management, and release tracking."
    },
    {
      id: "TI-MSI-008",
      name: "Security Monitoring & Incident Response",
      description: "Security operations workflows with threat detection, incident response, and vulnerability management."
    },
    {
      id: "TI-GLA-009",
      name: "IT License & Asset Management",
      description: "Software asset management with license tracking, compliance, and optimization recommendations."
    },
  ],
  benefits: [
    "Reduce incident resolution by 45%",
    "Improve change success rate",
    "Enhance security posture",
    "Automate routine tasks",
    "Better resource visibility",
    "Streamline compliance",
    "Accelerate deployments",
    "Improve service quality"
  ],
  stats: [
    { value: "45%", label: "Faster Resolution" },
    { value: "9", label: "Workflows" },
    { value: "99.9%", label: "Uptime" }
  ],
  prevAccelerator: { name: "Finances", href: "/accelerators/finance" },
  nextAccelerator: { name: "Customer Service", href: "/accelerators/customer-service" }
};

export default function ITAccelerator() {
  return <AcceleratorPageTemplate config={itConfig} />;
}
