import { useTranslation } from "react-i18next";
import { Layout } from "@/components/layout/Layout";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

import atlassianGoldPartner from "@/assets/atlassian-gold-partner.png";
import atlassianMarketplacePartner from "@/assets/atlassian-marketplace-partner.png";
import atlassianServiceManagementPartner from "@/assets/atlassian-service-management-partner.png";
import partnerEazybi from "@/assets/partner-eazybi.png";
import partnerSoldevelo from "@/assets/partner-soldevelo.png";
import partnerXray from "@/assets/partner-xray.png";
import partnerApwide from "@/assets/partner-apwide.png";
import partnerAppfire from "@/assets/partner-appfire.png";
import partnerApsl from "@/assets/partner-apsl.png";

const partners = [
  {
    name: "Atlassian",
    description: "Gold Solution Partner & Service Management Specialized",
    logos: [
      { src: atlassianServiceManagementPartner, alt: "Atlassian Service Management Specialized Partner" },
      { src: atlassianGoldPartner, alt: "Atlassian Gold Solution Partner" },
      { src: atlassianMarketplacePartner, alt: "Atlassian Marketplace Partner" },
    ],
    url: "https://www.atlassian.com",
    tier: "strategic",
  },
  {
    name: "eazyBI",
    description: "Advanced reporting and business intelligence for Jira and Confluence",
    logos: [{ src: partnerEazybi, alt: "eazyBI Logo" }],
    url: "https://eazybi.com",
    tier: "technology",
  },
  {
    name: "Appfire",
    description: "Enterprise apps that extend Atlassian products",
    logos: [{ src: partnerAppfire, alt: "Appfire Logo" }],
    url: "https://www.appfire.com",
    tier: "technology",
  },
  {
    name: "Xray",
    description: "Test management for Jira — plan, execute & track testing",
    logos: [{ src: partnerXray, alt: "Xray Logo" }],
    url: "https://www.getxray.app",
    tier: "technology",
  },
  {
    name: "Apwide",
    description: "Environment management and booking for Jira",
    logos: [{ src: partnerApwide, alt: "Apwide Logo" }],
    url: "https://www.apwide.com",
    tier: "technology",
  },
  {
    name: "SolDevelo",
    description: "Software development and IT consulting partner",
    logos: [{ src: partnerSoldevelo, alt: "SolDevelo Logo" }],
    url: "https://www.soldevelo.com",
    tier: "technology",
  },
  {
    name: "APSL",
    description: "Software development and technology consulting",
    logos: [{ src: partnerApsl, alt: "APSL Logo" }],
    url: "https://apsl.tech/",
    tier: "technology",
  },
];

export default function Partners() {
  const { t } = useTranslation();

  const strategicPartners = partners.filter((p) => p.tier === "strategic");
  const technologyPartners = partners.filter((p) => p.tier === "technology");

  return (
    <Layout>
      <SEO
        path="/partners"
        title="Partners | Quabu Solutions"
        description="Meet our technology and strategic partners. We collaborate with industry leaders to deliver best-in-class solutions."
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            {t("partners.title")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            {t("partners.subtitle")}
          </motion.p>
        </div>
      </section>

      {/* Strategic Partners */}
      <section className="section-padding">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-8 text-center">{t("partners.strategic")}</h2>
          <div className="grid grid-cols-1 gap-8">
            {strategicPartners.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center gap-6 p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex flex-wrap items-center justify-center gap-6">
                  {partner.logos.map((logo) => (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      className="h-14 md:h-16 w-auto object-contain"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold flex items-center justify-center gap-2">
                    {partner.name}
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground mt-1">{partner.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Partners */}
      <section className="section-padding bg-muted/30">
        <div className="container-wide">
          <h2 className="text-2xl font-bold mb-8 text-center">{t("partners.technology")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologyPartners.map((partner, i) => (
              <motion.a
                key={partner.name}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col items-center gap-4 p-8 rounded-2xl border border-border bg-card hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="h-20 flex items-center justify-center">
                  {partner.logos.map((logo) => (
                    <img
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      className="max-h-16 w-auto object-contain"
                    />
                  ))}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                    {partner.name}
                    <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{partner.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
