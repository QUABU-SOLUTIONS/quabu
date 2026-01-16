import { Users } from "lucide-react";
import AcceleratorPageTemplate, { AcceleratorConfig } from "@/components/accelerators/AcceleratorPageTemplate";

const hrConfig: AcceleratorConfig = {
  id: "hr",
  name: "Human Resources",
  tagline: "Empower Your People Operations",
  description: "Streamline your entire HR lifecycle from recruitment to retirement. Automate repetitive tasks, enhance employee experience, and build a data-driven people strategy.",
  icon: Users,
  gradientFrom: "from-violet-500",
  gradientTo: "to-purple-500",
  workflows: [
    {
      id: "RH-GPS-001",
      name: "Recruitment & Hiring Management",
      description: "End-to-end recruitment workflow from job posting to offer letter with candidate tracking and evaluation."
    },
    {
      id: "RH-AOE-002",
      name: "Employee Onboarding Automation",
      description: "Structured onboarding process with automated task assignments, document collection, and training schedules."
    },
    {
      id: "RH-SED-003",
      name: "Performance Evaluation Tracking",
      description: "Comprehensive performance management with goal setting, continuous feedback, and review cycles."
    },
    {
      id: "RH-GCD-004",
      name: "Training & Professional Development Management",
      description: "Learning management with course tracking, skill assessments, and development path planning."
    },
    {
      id: "RH-AAV-005",
      name: "Absence, Vacation & Leave Administration",
      description: "Automated leave request and approval workflows with balance tracking and calendar integration."
    },
    {
      id: "RH-PBE-006",
      name: "Employee Offboarding Process",
      description: "Structured offboarding with exit interviews, asset collection, and knowledge transfer workflows."
    },
    {
      id: "RH-ECS-007",
      name: "Workplace Climate & Satisfaction Surveys",
      description: "Regular pulse surveys and annual assessments with analytics and action planning."
    },
    {
      id: "RH-AUP-008",
      name: "Internal Policy Update Automation",
      description: "Streamlined policy creation, approval, distribution, and acknowledgment tracking."
    },
    {
      id: "RH-GRB-009",
      name: "Recognition & Benefits Management",
      description: "Employee recognition programs and benefits administration with self-service portals."
    },
  ],
  benefits: [
    "Reduce hiring time by 40%",
    "Automate onboarding tasks",
    "Improve employee engagement",
    "Streamline leave management",
    "Enhance performance tracking",
    "Centralize HR documentation",
    "Data-driven HR decisions",
    "Better compliance management"
  ],
  stats: [
    { value: "40%", label: "Faster Hiring" },
    { value: "9", label: "Workflows" },
    { value: "85%", label: "Engagement" }
  ],
  prevAccelerator: { name: "Sales", href: "/accelerators/sales" },
  nextAccelerator: { name: "Operations", href: "/accelerators/operations" }
};

export default function HRAccelerator() {
  return <AcceleratorPageTemplate config={hrConfig} />;
}
