import { Monitor } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function ITAccelerator() {
  const { t } = useTranslation();

  const it = t("acceleratorsPage.accelerators.it", { returnObjects: true }) as {
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
    id: "it",
    name: it.name,
    tagline: it.tagline,
    description: it.description,
    icon: Monitor,
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    workflows: [
      { id: "TI-GTI-001", name: it.workflows[0].name, description: it.workflows[0].description },
      { id: "TI-AUS-002", name: it.workflows[1].name, description: it.workflows[1].description },
      { id: "TI-CCI-003", name: it.workflows[2].name, description: it.workflows[2].description },
      { id: "TI-MDS-004", name: it.workflows[3].name, description: it.workflows[3].description },
      { id: "TI-GAP-005", name: it.workflows[4].name, description: it.workflows[4].description },
      { id: "TI-MGH-006", name: it.workflows[5].name, description: it.workflows[5].description },
      { id: "TI-SPD-007", name: it.workflows[6].name, description: it.workflows[6].description },
      { id: "TI-MSI-008", name: it.workflows[7].name, description: it.workflows[7].description },
      { id: "TI-GLA-009", name: it.workflows[8].name, description: it.workflows[8].description },
    ],
    benefits: it.benefits,
    stats: it.stats,
    prevAccelerator: { name: it.prevAccelerator, href: "/accelerators/finance" },
    nextAccelerator: { name: it.nextAccelerator, href: "/accelerators/customer-service" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
