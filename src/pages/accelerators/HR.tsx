import { Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function HRAccelerator() {
  const { t } = useTranslation();

  const hr = t("acceleratorsPage.accelerators.hr", { returnObjects: true }) as {
    name: string;
    tagline: string;
    description: string;
    workflows: { name: string; description: string }[];
    benefits: string[];
    stats: { value: string; label: string }[];
    prevAccelerator: string;
    nextAccelerator: string;
  };

  const config = {
    id: "hr",
    name: hr.name,
    tagline: hr.tagline,
    description: hr.description,
    icon: Users,
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-500",
    workflows: [
      { id: "RH-GPS-001", name: hr.workflows[0].name, description: hr.workflows[0].description },
      { id: "RH-AOE-002", name: hr.workflows[1].name, description: hr.workflows[1].description },
      { id: "RH-SED-003", name: hr.workflows[2].name, description: hr.workflows[2].description },
      { id: "RH-GCD-004", name: hr.workflows[3].name, description: hr.workflows[3].description },
      { id: "RH-AAV-005", name: hr.workflows[4].name, description: hr.workflows[4].description },
      { id: "RH-PBE-006", name: hr.workflows[5].name, description: hr.workflows[5].description },
      { id: "RH-ECS-007", name: hr.workflows[6].name, description: hr.workflows[6].description },
      { id: "RH-AUP-008", name: hr.workflows[7].name, description: hr.workflows[7].description },
      { id: "RH-GRB-009", name: hr.workflows[8].name, description: hr.workflows[8].description },
    ],
    benefits: hr.benefits,
    stats: hr.stats,
    prevAccelerator: { name: hr.prevAccelerator, href: "/accelerators/sales" },
    nextAccelerator: { name: hr.nextAccelerator, href: "/accelerators/operations" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
