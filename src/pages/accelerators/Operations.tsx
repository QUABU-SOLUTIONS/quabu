import { Settings } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function OperationsAccelerator() {
  const { t } = useTranslation();

  const ops = t("acceleratorsPage.accelerators.operations", { returnObjects: true }) as {
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
    id: "operations",
    name: ops.name,
    tagline: ops.tagline,
    description: ops.description,
    icon: Settings,
    gradientFrom: "from-orange-500",
    gradientTo: "to-amber-500",
    workflows: [
      { id: "OPE-PSP-001", name: ops.workflows[0].name, description: ops.workflows[0].description },
      { id: "OPE-GIA-002", name: ops.workflows[1].name, description: ops.workflows[1].description },
      { id: "OPE-CMC-003", name: ops.workflows[2].name, description: ops.workflows[2].description },
      { id: "OPE-OAR-004", name: ops.workflows[3].name, description: ops.workflows[3].description },
      { id: "OPE-GPS-005", name: ops.workflows[4].name, description: ops.workflows[4].description },
      { id: "OPE-MTP-006", name: ops.workflows[5].name, description: ops.workflows[5].description },
      { id: "OPE-ARO-007", name: ops.workflows[6].name, description: ops.workflows[6].description },
      { id: "OPE-GRP-008", name: ops.workflows[7].name, description: ops.workflows[7].description },
      { id: "OPE-SCN-009", name: ops.workflows[8].name, description: ops.workflows[8].description },
    ],
    benefits: ops.benefits,
    stats: ops.stats,
    prevAccelerator: { name: ops.prevAccelerator, href: "/accelerators/hr" },
    nextAccelerator: { name: ops.nextAccelerator, href: "/accelerators/finance" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
