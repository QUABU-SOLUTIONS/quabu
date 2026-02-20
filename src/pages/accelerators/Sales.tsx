import { TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function SalesAccelerator() {
  const { t } = useTranslation();

  const sal = t("acceleratorsPage.accelerators.sales", { returnObjects: true }) as {
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
    id: "sales",
    name: sal.name,
    tagline: sal.tagline,
    description: sal.description,
    icon: TrendingUp,
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-500",
    workflows: [
      { id: "VEN-GPV-001", name: sal.workflows[0].name, description: sal.workflows[0].description },
      { id: "VEN-RAI-002", name: sal.workflows[1].name, description: sal.workflows[1].description },
      { id: "VEN-GSC-003", name: sal.workflows[2].name, description: sal.workflows[2].description },
      { id: "VEN-ARR-004", name: sal.workflows[3].name, description: sal.workflows[3].description },
      { id: "VEN-PAL-005", name: sal.workflows[4].name, description: sal.workflows[4].description },
      { id: "VEN-AMV-006", name: sal.workflows[5].name, description: sal.workflows[5].description },
      { id: "VEN-GOC-007", name: sal.workflows[6].name, description: sal.workflows[6].description },
      { id: "VEN-GCA-008", name: sal.workflows[7].name, description: sal.workflows[7].description },
      { id: "VEN-SCR-009", name: sal.workflows[8].name, description: sal.workflows[8].description },
    ],
    benefits: sal.benefits,
    stats: sal.stats,
    prevAccelerator: { name: sal.prevAccelerator, href: "/accelerators/marketing" },
    nextAccelerator: { name: sal.nextAccelerator, href: "/accelerators/hr" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
