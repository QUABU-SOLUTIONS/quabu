import { HeadphonesIcon } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function CustomerServiceAccelerator() {
  const { t } = useTranslation();

  const cs = t("acceleratorsPage.accelerators.customerService", { returnObjects: true }) as {
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
    id: "customer-service",
    name: cs.name,
    tagline: cs.tagline,
    description: cs.description,
    icon: HeadphonesIcon,
    gradientFrom: "from-cyan-500",
    gradientTo: "to-sky-500",
    workflows: [
      { id: "ATC-GTS-001", name: cs.workflows[0].name, description: cs.workflows[0].description },
      { id: "ATC-ARC-002", name: cs.workflows[1].name, description: cs.workflows[1].description },
      { id: "ATC-SLA-003", name: cs.workflows[2].name, description: cs.workflows[2].description },
      { id: "ATC-ESR-004", name: cs.workflows[3].name, description: cs.workflows[3].description },
      { id: "ATC-PEC-005", name: cs.workflows[4].name, description: cs.workflows[4].description },
      { id: "ATC-AMR-006", name: cs.workflows[5].name, description: cs.workflows[5].description },
      { id: "ATC-AAT-007", name: cs.workflows[6].name, description: cs.workflows[6].description },
      { id: "ATC-ISM-008", name: cs.workflows[7].name, description: cs.workflows[7].description },
    ],
    benefits: cs.benefits,
    stats: cs.stats,
    prevAccelerator: { name: cs.prevAccelerator, href: "/accelerators/it" },
    nextAccelerator: { name: cs.nextAccelerator, href: "/accelerators/rd" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
