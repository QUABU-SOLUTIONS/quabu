import { DollarSign } from "lucide-react";
import AcceleratorPageTemplate, { AcceleratorConfig } from "@/components/accelerators/AcceleratorPageTemplate";

const financeConfig: AcceleratorConfig = {
  id: "finance",
  name: "Finances",
  tagline: "Control, Visibility & Financial Excellence",
  description: "Gain complete control over your financial operations with automated workflows for budgeting, billing, auditing, and financial reporting. Make data-driven financial decisions with confidence.",
  icon: DollarSign,
  gradientFrom: "from-green-500",
  gradientTo: "to-teal-500",
  workflows: [
    {
      id: "FIN-APB-001",
      name: "Budget Approval",
      description: "Multi-level budget approval workflows with automated routing, notifications, and audit trails."
    },
    {
      id: "FIN-ARF-002",
      name: "Financial & Accounting Report Automation",
      description: "Automated generation of financial statements, P&L reports, and custom financial analytics."
    },
    {
      id: "FIN-GFC-003",
      name: "Billing & Collections Management",
      description: "End-to-end invoicing workflow with payment tracking, reminders, and collections automation."
    },
    {
      id: "FIN-CGV-004",
      name: "Expense Control & Budget Variance Analysis",
      description: "Real-time expense tracking with variance analysis and automated alerts for budget overruns."
    },
    {
      id: "FIN-AIA-005",
      name: "Automated Internal Audits",
      description: "Systematic audit workflows with findings tracking, remediation plans, and compliance monitoring."
    },
    {
      id: "FIN-GAF-006",
      name: "Financial Asset Management",
      description: "Complete asset lifecycle management with depreciation tracking and valuation."
    },
    {
      id: "FIN-MTC-007",
      name: "Real-Time Cash Flow Monitoring",
      description: "Live cash flow dashboards with forecasting and liquidity management tools."
    },
    {
      id: "FIN-GPF-008",
      name: "Financial Forecast Generation",
      description: "Data-driven financial forecasting with scenario modeling and sensitivity analysis."
    },
  ],
  benefits: [
    "Accelerate month-end close by 50%",
    "Reduce audit preparation time",
    "Improve cash flow visibility",
    "Automate invoice processing",
    "Enhanced budget control",
    "Real-time financial insights",
    "Streamline approvals",
    "Better compliance tracking"
  ],
  stats: [
    { value: "50%", label: "Faster Close" },
    { value: "8", label: "Workflows" },
    { value: "99.9%", label: "Accuracy" }
  ],
  prevAccelerator: { name: "Operations", href: "/accelerators/operations" },
  nextAccelerator: { name: "Information Technology", href: "/accelerators/it" }
};

export default function FinanceAccelerator() {
  return <AcceleratorPageTemplate config={financeConfig} />;
}
