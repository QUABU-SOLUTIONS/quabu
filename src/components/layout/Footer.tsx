import { Link } from "react-router-dom";
import { Mail, MapPin, Linkedin, Twitter, Youtube, Instagram } from "lucide-react";
import { useTranslation } from "react-i18next";
import quabuLogo from "@/assets/quabu-logo.svg";
import atlassianGoldPartner from "@/assets/atlassian-gold-partner.png";
import atlassianMarketplacePartner from "@/assets/atlassian-marketplace-partner.png";
import atlassianServiceManagementPartner from "@/assets/atlassian-service-management-partner.png";

export function Footer() {
  const { t } = useTranslation();

  const footerLinks = {
    solutions: [
      { name: t("footer.links.digitalAccelerators"), href: "/accelerators" },
      { name: t("footer.links.atlassianServices"), href: "/services" },
      { name: t("footer.links.cloudMigration"), href: "/services#migration" },
      { name: t("footer.links.customDevelopment"), href: "/services#development" },
    ],
    accelerators: [
      { name: t("footer.links.salesPipeline"), href: "/accelerators/sales" },
      { name: t("footer.links.marketingAutomation"), href: "/accelerators/marketing" },
      { name: t("footer.links.hrOnboarding"), href: "/accelerators/hr" },
      { name: t("footer.links.itServiceManagement"), href: "/accelerators/it" },
    ],
    company: [
      { name: t("footer.links.aboutUs"), href: "/about" },
      { name: t("footer.links.blog"), href: "/blog" },
      { name: t("footer.links.contact"), href: "/contact" },
    ],
    legal: [
      { name: t("footer.links.privacyPolicy"), href: "/legal/privacy" },
      { name: t("footer.links.termsOfService"), href: "/legal/terms" },
      { name: t("footer.links.cookiesPolicy"), href: "/legal/cookies" },
    ],
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src={quabuLogo} alt="Quabu" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-background/70 mb-6 max-w-sm">{t("footer.description")}</p>
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <img src={atlassianServiceManagementPartner} alt="Atlassian Service Management Specialized Partner" className="h-10 w-auto" />
              <img src={atlassianGoldPartner} alt="Atlassian Gold Solution Partner" className="h-10 w-auto brightness-0 invert" />
              <img src={atlassianMarketplacePartner} alt="Atlassian Marketplace Partner" className="h-10 w-auto brightness-0 invert" />
            </div>
            <div className="space-y-3">
              <a href="mailto:hello@quabusolutions.com" className="flex items-center gap-2 text-sm text-background/70 hover:text-background transition-colors">
                <Mail className="w-4 h-4" />
                hello@quabusolutions.com
              </a>
              <div className="flex items-center gap-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                Miami, FL & Barcelona, Spain
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.solutions")}</h4>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Accelerators */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.accelerators")}</h4>
            <ul className="space-y-3">
              {footerLinks.accelerators.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.company")}</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link to={link.href} className="text-sm text-background/70 hover:text-background transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-background/60">
            © {new Date().getFullYear()} Quabu. {t("footer.allRights")}
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/quabu-solutions" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></a>
            <a href="https://x.com/quabusolutions" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="https://www.youtube.com/@quabusolutions" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
            <a href="https://www.instagram.com/quabusolutions" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg hover:bg-white/10 transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
          </div>
          <div className="flex items-center gap-4">
            {footerLinks.legal.map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-background/60 hover:text-background transition-colors">{link.name}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
