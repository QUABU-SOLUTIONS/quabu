import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Linkedin, Twitter, Mail, Youtube, Instagram, FileText, Shield, Globe, CheckSquare, ExternalLink, Cloud, Code, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import quabuLogo from "@/assets/quabu-logo.svg";
import atlassianGoldPartner from "@/assets/atlassian-gold-partner.png";
import atlassianMarketplacePartner from "@/assets/atlassian-marketplace-partner.png";
import atlassianServiceManagementPartner from "@/assets/atlassian-service-management-partner.png";

const acceleratorCategories = [
  { name: "Marketing", href: "/accelerators/marketing", description: "Automate campaigns & analytics" },
  { name: "Sales", href: "/accelerators/sales", description: "Pipeline & CRM acceleration" },
  { name: "HR & People", href: "/accelerators/hr", description: "Onboarding & performance" },
  { name: "Operations", href: "/accelerators/operations", description: "Workflow optimization" },
  { name: "Finance", href: "/accelerators/finance", description: "Budgets & approvals" },
  { name: "IT & DevOps", href: "/accelerators/it", description: "Service & incident management" },
  { name: "Customer Service", href: "/accelerators/customer-service", description: "Support & ticketing" },
  { name: "R&D", href: "/accelerators/rd", description: "Product development" },
];

import { Headset } from "lucide-react";

const appsSubmenu = [
  {
    name: "Custom Templates",
    description: "Predefined templates for faster workflows",
    icon: FileText,
    href: "https://marketplace.atlassian.com/apps/1230162/custom-templates-for-jira-cloud",
  },
  {
    name: "Backup Manager",
    description: "Automated Jira backups with AWS",
    icon: Shield,
    href: "https://marketplace.atlassian.com/apps/1235836/backup-manager-for-jira-cloud",
  },
  {
    name: "Custom Language",
    description: "Translate Jira to Catalan",
    icon: Globe,
    href: "https://marketplace.atlassian.com/apps/1234462/custom-language-for-jira-cloud",
  },
  {
    name: "Task Lists",
    description: "Granular task management",
    icon: CheckSquare,
    href: "https://marketplace.atlassian.com/apps/1230805/task-lists-for-jira-cloud",
  },
  {
    name: "Apps Support",
    description: "Get help with our Atlassian apps",
    icon: Headset,
    href: "https://quabuapps.atlassian.net/servicedesk/customer/portal/1",
  },
  {
    name: "Apps Documentation",
    description: "Guides and documentation for our apps",
    icon: FileText,
    href: "https://quabu.atlassian.net/wiki/spaces/QAPPS/overview",
  },
];

const servicesSubmenu = [
  {
    name: "Atlassian Services",
    description: "Expert consulting & implementation",
    icon: Cog,
    href: "/services/atlassian",
  },
  {
    name: "Cloud Migration",
    description: "Seamless migration to cloud platforms",
    icon: Cloud,
    href: "/services/cloud-migration",
  },
  {
    name: "Custom Development",
    description: "Tailored solutions for your needs",
    icon: Code,
    href: "/services/custom-development",
  },
];

const aboutSubmenu = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/quabu-solutions", isExternal: true, icon: "linkedin" },
  { name: "Twitter / X", href: "https://x.com/quabusolutions", isExternal: true, icon: "twitter" },
  { name: "YouTube", href: "https://www.youtube.com/@quabusolutions", isExternal: true, icon: "youtube" },
  { name: "Instagram", href: "https://www.instagram.com/quabusolutions", isExternal: true, icon: "instagram" },
  { name: "Contact", href: "/contact", isExternal: false, icon: "mail" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Accelerators", href: "/accelerators", hasDropdown: true },
  { name: "Apps", href: "/apps", hasAppsDropdown: true },
  { name: "Services", href: "/services", hasServicesDropdown: true },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about", hasAboutDropdown: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={quabuLogo} 
              alt="Quabu" 
              className="h-8 lg:h-10 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid gap-2 p-4 w-[500px] grid-cols-2">
                          <div className="col-span-2 mb-2">
                            <Link
                              to="/accelerators"
                              className="block p-3 rounded-lg hover:bg-muted transition-colors"
                            >
                              <div className="font-semibold text-primary">All Digital Accelerators</div>
                              <p className="text-sm text-muted-foreground">
                                Pre-built Atlassian solutions for rapid deployment
                              </p>
                            </Link>
                          </div>
                          {acceleratorCategories.map((category) => (
                            <NavigationMenuLink key={category.name} asChild>
                              <Link
                                to={category.href}
                                className="block p-3 rounded-lg hover:bg-muted transition-colors"
                              >
                                <div className="font-medium text-sm">{category.name}</div>
                                <p className="text-xs text-muted-foreground">
                                  {category.description}
                                </p>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasAppsDropdown ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-4 w-[320px]">
                          <a
                            href="https://marketplace.atlassian.com/vendors/1220154/quabu"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors mb-2"
                          >
                            <div className="font-semibold text-primary">All Apps on Marketplace</div>
                            <ExternalLink className="w-3 h-3 text-muted-foreground" />
                          </a>
                          <div className="border-t border-border pt-2 space-y-1">
                            {appsSubmenu.map((app) => (
                              <NavigationMenuLink key={app.name} asChild>
                                <a
                                  href={app.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                >
                                  <app.icon className="w-5 h-5 text-primary mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm">{app.name}</div>
                                    <p className="text-xs text-muted-foreground">
                                      {app.description}
                                    </p>
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasServicesDropdown ? (
                    <NavigationMenuItem key={item.name}>
                      <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50">
                        {item.name}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="p-4 w-[320px]">
                          <div className="space-y-1">
                            {servicesSubmenu.map((service) => (
                              <NavigationMenuLink key={service.name} asChild>
                                <Link
                                  to={service.href}
                                  className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                >
                                  <service.icon className="w-5 h-5 text-primary mt-0.5" />
                                  <div>
                                    <div className="font-medium text-sm">{service.name}</div>
                                    <p className="text-xs text-muted-foreground">
                                      {service.description}
                                    </p>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                        </div>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  ) : item.hasAboutDropdown ? (
                    <div key={item.name} className="relative">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:text-primary hover:bg-muted/50 inline-flex items-center gap-1 outline-none">
                          {item.name}
                          <ChevronDown className="h-3 w-3 transition-transform duration-200" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[220px] bg-popover">
                          <DropdownMenuItem asChild>
                            <Link
                              to="/about"
                              className="flex flex-col items-start gap-1 p-3"
                            >
                              <span className="font-semibold text-primary">About Quabu</span>
                              <span className="text-xs text-muted-foreground">
                                Learn about our team and mission
                              </span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          {aboutSubmenu.map((subItem) => (
                            <DropdownMenuItem key={subItem.name} asChild>
                              {subItem.isExternal ? (
                                <a
                                  href={subItem.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center gap-2"
                                >
                                  {subItem.icon === "linkedin" && <Linkedin className="w-4 h-4 text-primary" />}
                                  {subItem.icon === "twitter" && <Twitter className="w-4 h-4 text-primary" />}
                                  {subItem.icon === "youtube" && <Youtube className="w-4 h-4 text-primary" />}
                                  {subItem.icon === "instagram" && <Instagram className="w-4 h-4 text-primary" />}
                                  <span>{subItem.name}</span>
                                </a>
                              ) : (
                                <Link
                                  to={subItem.href}
                                  className="flex items-center gap-2"
                                >
                                  {subItem.icon === "mail" && <Mail className="w-4 h-4 text-primary" />}
                                  <span>{subItem.name}</span>
                                </Link>
                              )}
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  ) : (
                    <NavigationMenuItem key={item.name}>
                      <Link
                        to={item.href}
                        className={cn(
                          "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-foreground hover:text-primary hover:bg-muted/50"
                        )}
                      >
                        {item.name}
                      </Link>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA & Partner Badges */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img 
                src={atlassianServiceManagementPartner} 
                alt="Atlassian Service Management Specialized Partner" 
                className="h-10 w-auto"
              />
              <img 
                src={atlassianGoldPartner} 
                alt="Atlassian Gold Solution Partner" 
                className="h-10 w-auto"
              />
              <img 
                src={atlassianMarketplacePartner} 
                alt="Atlassian Marketplace Partner" 
                className="h-10 w-auto"
              />
            </div>
            <Button asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border max-h-[70vh] overflow-y-auto"
          >
            <div className="container-wide py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {(item.hasDropdown || item.hasAppsDropdown || item.hasAboutDropdown || item.hasServicesDropdown) ? (
                    <button
                      onClick={() => setExpandedMobileMenu(expandedMobileMenu === item.name ? null : item.name)}
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-colors",
                        location.pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "w-4 h-4 transition-transform",
                        expandedMobileMenu === item.name && "rotate-180"
                      )} />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-4 py-3 rounded-lg font-medium transition-colors",
                        location.pathname === item.href
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-muted"
                      )}
                    >
                      {item.name}
                    </Link>
                  )}
                  {item.hasDropdown && expandedMobileMenu === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {acceleratorCategories.map((category) => (
                        <Link
                          key={category.name}
                          to={category.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item.hasAppsDropdown && expandedMobileMenu === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {appsSubmenu.map((app) => (
                        <a
                          key={app.name}
                          href={app.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <app.icon className="w-4 h-4" />
                          {app.name}
                        </a>
                      ))}
                    </div>
                  )}
                  {item.hasServicesDropdown && expandedMobileMenu === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      {servicesSubmenu.map((service) => (
                        <Link
                          key={service.name}
                          to={service.href}
                          className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          <service.icon className="w-4 h-4" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                  {item.hasAboutDropdown && expandedMobileMenu === item.name && (
                    <div className="ml-4 mt-2 space-y-1">
                      <Link
                        to="/about"
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                      >
                        About Quabu
                      </Link>
                      {aboutSubmenu.map((subItem) => (
                        subItem.isExternal ? (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {subItem.icon === "linkedin" && <Linkedin className="w-4 h-4" />}
                            {subItem.icon === "twitter" && <Twitter className="w-4 h-4" />}
                            {subItem.icon === "youtube" && <Youtube className="w-4 h-4" />}
                            {subItem.name}
                          </a>
                        ) : (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                          >
                            {subItem.icon === "mail" && <Mail className="w-4 h-4" />}
                            {subItem.name}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button asChild className="w-full">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
