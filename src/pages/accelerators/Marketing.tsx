import { Megaphone } from "lucide-react";
import { useTranslation } from "react-i18next";
import AcceleratorPageTemplate from "@/components/accelerators/AcceleratorPageTemplate";

export default function MarketingAccelerator() {
  const { t } = useTranslation();

  const mkt = t("acceleratorsPage.accelerators.marketing", { returnObjects: true }) as {
    name: string;
    tagline: string;
    description: string;
    workflows: { name: string; description: string }[];
    benefits: string[];
    stats: { value: string; label: string }[];
    nextAccelerator: string;
  };

  const config = {
    id: "marketing",
    name: mkt.name,
    tagline: mkt.tagline,
    description: mkt.description,
    icon: Megaphone,
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-500",
    workflows: [
      { id: "MKT-PAC-001", name: mkt.workflows[0].name, description: mkt.workflows[0].description },
      { id: "MKT-GCP-002", name: mkt.workflows[1].name, description: mkt.workflows[1].description },
      { id: "MKT-CAM-003", name: mkt.workflows[2].name, description: mkt.workflows[2].description },
      { id: "MKT-AMA-004", name: mkt.workflows[3].name, description: mkt.workflows[3].description },
      { id: "MKT-SLG-005", name: mkt.workflows[4].name, description: mkt.workflows[4].description },
      { id: "MKT-GPM-006", name: mkt.workflows[5].name, description: mkt.workflows[5].description },
      { id: "MKT-AFL-007", name: mkt.workflows[6].name, description: mkt.workflows[6].description },
      { id: "MKT-CES-008", name: mkt.workflows[7].name, description: mkt.workflows[7].description },
      { id: "MKT-AEC-009", name: mkt.workflows[8].name, description: mkt.workflows[8].description },
    ],
    benefits: mkt.benefits,
    stats: mkt.stats,
    nextAccelerator: { name: mkt.nextAccelerator, href: "/accelerators/sales" },
  };

  return <AcceleratorPageTemplate config={config} />;
}
