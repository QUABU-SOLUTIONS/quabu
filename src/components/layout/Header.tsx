import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Linkedin, Twitter, Mail } from "lucide-react";
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

const aboutSubmenu = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/quabu-solutions", isExternal: true, icon: "linkedin" },
  { name: "Twitter / X", href: "https://x.com/quabusolutions", isExternal: true, icon: "twitter" },
  { name: "Contact", href: "/contact", isExternal: false, icon: "mail" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "Accelerators", href: "/accelerators", hasDropdown: true },
  { name: "Apps", href: "/apps", isExternal: true, externalUrl: "https://marketplace.atlassian.com/vendors/1220154/quabu" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about", hasAboutDropdown: true },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
                  ) : item.isExternal ? (
                    <NavigationMenuItem key={item.name}>
                      <a
                        href={item.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-md text-sm font-medium transition-colors text-foreground hover:text-primary hover:bg-muted/50"
                      >
                        {item.name}
                      </a>
                    </NavigationMenuItem>
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
            className="lg:hidden bg-background border-t border-border"
          >
            <div className="container-wide py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.isExternal ? (
                    <a
                      href={item.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-3 rounded-lg font-medium transition-colors hover:bg-muted"
                    >
                      {item.name}
                    </a>
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
                  {item.hasDropdown && (
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
                  {item.hasAboutDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
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
