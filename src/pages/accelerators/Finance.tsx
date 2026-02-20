import { DollarSign } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function FinanceAccelerator() {
  const { t } = useTranslation();

  const fin = t("acceleratorsPage.accelerators.finance", { returnObjects: true }) as {
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
    id: "finance",
    name: fin.name,
    tagline: fin.tagline,
    description: fin.description,
    icon: DollarSign,
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-500",
    workflows: [
      { id: "FIN-APB-001", name: fin.workflows[0].name, description: fin.workflows[0].description },
      { id: "FIN-ARF-002", name: fin.workflows[1].name, description: fin.workflows[1].description },
      { id: "FIN-GFC-003", name: fin.workflows[2].name, description: fin.workflows[2].description },
      { id: "FIN-CGV-004", name: fin.workflows[3].name, description: fin.workflows[3].description },
      { id: "FIN-AIA-005", name: fin.workflows[4].name, description: fin.workflows[4].description },
      { id: "FIN-GAF-006", name: fin.workflows[5].name, description: fin.workflows[5].description },
      { id: "FIN-MTC-007", name: fin.workflows[6].name, description: fin.workflows[6].description },
      { id: "FIN-GPF-008", name: fin.workflows[7].name, description: fin.workflows[7].description },
    ],
    benefits: fin.benefits,
    stats: fin.stats,
    prevAccelerator: { name: fin.prevAccelerator, href: "/accelerators/operations" },
    nextAccelerator: { name: fin.nextAccelerator, href: "/accelerators/it" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
