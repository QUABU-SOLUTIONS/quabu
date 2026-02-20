import { Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function RDAccelerator() {
  const { t } = useTranslation();

  const rd = t("acceleratorsPage.accelerators.rd", { returnObjects: true }) as {
    name: string;
    tagline: string;
    description: string;
    workflows: { name: string; description: string }[];
    benefits: string[];
    stats: { value: string; label: string }[];
    prevAccelerator: string;
  };

  const config = {
    id: "rd",
    name: rd.name,
    tagline: rd.tagline,
    description: rd.description,
    icon: Lightbulb,
    gradientFrom: "from-amber-500",
    gradientTo: "to-yellow-500",
    workflows: [
      { id: "ID-GPI-001", name: rd.workflows[0].name, description: rd.workflows[0].description },
      { id: "ID-ARI-002", name: rd.workflows[1].name, description: rd.workflows[1].description },
      { id: "ID-SPI-003", name: rd.workflows[2].name, description: rd.workflows[2].description },
      { id: "ID-MEP-004", name: rd.workflows[3].name, description: rd.workflows[3].description },
      { id: "ID-GRP-005", name: rd.workflows[4].name, description: rd.workflows[4].description },
      { id: "ID-PID-006", name: rd.workflows[5].name, description: rd.workflows[5].description },
      { id: "ID-DCA-007", name: rd.workflows[6].name, description: rd.workflows[6].description },
      { id: "ID-ACB-008", name: rd.workflows[7].name, description: rd.workflows[7].description },
      { id: "ID-CEM-072", name: rd.workflows[8].name, description: rd.workflows[8].description },
    ],
    benefits: rd.benefits,
    stats: rd.stats,
    prevAccelerator: { name: rd.prevAccelerator, href: "/accelerators/customer-service" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
