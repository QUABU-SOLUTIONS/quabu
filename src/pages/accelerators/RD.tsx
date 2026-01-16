import { Lightbulb } from "lucide-react";
import AcceleratorPageTemplate, { AcceleratorConfig } from "@/components/accelerators/AcceleratorPageTemplate";

const rdConfig: AcceleratorConfig = {
  id: "rd",
  name: "Research & Development",
  tagline: "Accelerate Innovation & Discovery",
  description: "Supercharge your R&D operations with automated workflows for idea management, patent tracking, experiment documentation, and cross-functional collaboration. Transform ideas into breakthrough innovations.",
  icon: Lightbulb,
  gradientFrom: "from-amber-500",
  gradientTo: "to-yellow-500",
  workflows: [
    {
      id: "ID-GPI-001",
      name: "Innovation Project Lifecycle Management",
      description: "End-to-end management of R&D projects from ideation through development to commercialization."
    },
    {
      id: "ID-ARI-002",
      name: "Idea Registration & Evaluation Automation",
      description: "Structured idea submission with evaluation criteria, scoring, and portfolio prioritization."
    },
    {
      id: "ID-SPI-003",
      name: "Patent & Intellectual Property Tracking",
      description: "IP portfolio management with filing tracking, renewal alerts, and competitive monitoring."
    },
    {
      id: "ID-MEP-004",
      name: "Experiment & Test Monitoring",
      description: "Laboratory information management with experiment tracking, data capture, and result analysis."
    },
    {
      id: "ID-GRP-005",
      name: "R&D Project Resource Management",
      description: "Resource planning and allocation across R&D initiatives with skills matching and utilization tracking."
    },
    {
      id: "ID-PID-006",
      name: "Impact-Based Development Prioritization",
      description: "Strategic prioritization framework with ROI modeling, risk assessment, and portfolio balancing."
    },
    {
      id: "ID-DCA-007",
      name: "Centralized Progress & Findings Documentation",
      description: "Knowledge management system for research documentation, findings, and institutional learning."
    },
    {
      id: "ID-ACB-008",
      name: "Innovation Project Cost-Benefit Analysis",
      description: "Financial analysis workflows with stage-gate evaluations and investment recommendations."
    },
    {
      id: "ID-CEM-072",
      name: "Multidisciplinary Team Collaboration",
      description: "Cross-functional collaboration tools with integrated communication, file sharing, and decision tracking."
    },
  ],
  benefits: [
    "Reduce time-to-market by 35%",
    "Improve idea capture rates",
    "Protect intellectual property",
    "Enhance research collaboration",
    "Data-driven prioritization",
    "Centralized knowledge base",
    "Better resource utilization",
    "Accelerate innovation cycles"
  ],
  stats: [
    { value: "35%", label: "Faster TTM" },
    { value: "9", label: "Workflows" },
    { value: "3x", label: "More Patents" }
  ],
  prevAccelerator: { name: "Customer Service", href: "/accelerators/customer-service" }
};

export default function RDAccelerator() {
  return <AcceleratorPageTemplate config={rdConfig} />;
}
