import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Globe, CheckSquare, ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import atlassianIcon from "@/assets/atlassian-icon.png";
import customTemplatesIcon from "@/assets/custom-templates-icon.png";
import backupManagerIcon from "@/assets/backup-manager-icon.png";
import customLanguageIcon from "@/assets/custom-language-icon.png";

const apps = [
  {
    name: "Custom Templates for Jira Cloud",
    description: "Speed up your workflows with predefined templates. Create issues faster and maintain consistency across your projects.",
    customIcon: customTemplatesIcon,
    rating: 4,
    installs: 166,
    href: "https://marketplace.atlassian.com/apps/1230162/custom-templates-for-jira-cloud?hosting=cloud&tab=overview",
    featured: true,
    badge: "Popular",
  },
  {
    name: "Backup Manager for Jira Cloud",
    description: "Automate your Jira backups with secure AWS integration. Reliable, efficient, and hassle-free backup solution.",
    customIcon: backupManagerIcon,
    rating: 4,
    installs: 158,
    href: "https://marketplace.atlassian.com/apps/1235836/backup-manager-for-jira-cloud?hosting=cloud&tab=overview",
    featured: true,
    badge: "Essential",
  },
  {
    name: "Custom Language for Jira Cloud",
    description: "Translate your Jira site into Catalan and share it with all your users. Make Jira accessible to everyone.",
    customIcon: customLanguageIcon,
    rating: 4,
    installs: 13,
    href: "https://marketplace.atlassian.com/apps/1234462/custom-language-for-jira-cloud?hosting=cloud&tab=overview",
    featured: false,
    badge: null,
  },
  {
    name: "Task Lists for Jira Cloud",
    description: "Create simple tasks in any issue to keep control of the small details. Perfect for granular task management.",
    icon: CheckSquare,
    rating: 4,
    installs: 30,
    href: "https://marketplace.atlassian.com/apps/1230805/task-lists-for-jira-cloud?hosting=cloud&tab=overview",
    featured: false,
    badge: "New",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export function AppsSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/30 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="apps-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-foreground" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#apps-grid)" />
          </svg>
        </div>

        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-wide relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            <img src={atlassianIcon} alt="Atlassian" className="w-4 h-4" />
            Atlassian Marketplace
          </motion.div>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-6">
            Our <span className="text-primary">Apps</span> for Jira Cloud
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful extensions built by our team to enhance your Atlassian experience. 
            Trusted by hundreds of teams worldwide.
          </p>
        </motion.div>

        {/* Apps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12"
        >
          {apps.map((app, index) => {
            const IconComponent = app.icon;
            return (
              <motion.a
                key={app.name}
                href={app.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                  app.featured
                    ? "bg-gradient-to-br from-background via-background to-primary/5 border-primary/20 shadow-lg hover:shadow-primary/10"
                    : "bg-background/80 border-border hover:border-primary/30 hover:shadow-lg"
                }`}
              >
                {/* Badge */}
                {app.badge && (
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full ${
                      app.badge === "Popular"
                        ? "bg-primary text-primary-foreground"
                        : app.badge === "Essential"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-accent text-accent-foreground"
                    }`}
                  >
                    {app.badge}
                  </motion.span>
                )}

                {/* Icon */}
                <div className="mb-4">
                  <motion.div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors overflow-hidden ${
                      app.customIcon ? "" : "bg-primary/10 group-hover:bg-primary/20"
                    }`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {app.customIcon ? (
                      <img src={app.customIcon} alt={app.name} className="w-14 h-14 object-contain" />
                    ) : (
                      <IconComponent className="w-7 h-7 text-primary" />
                    )}
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {app.name}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {app.description}
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                      {[...Array(4)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < app.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"
                          }`}
                        />
                      ))}
                      <span className="text-sm text-muted-foreground ml-1">/4</span>
                    </div>
                    {/* Installs */}
                    <span className="text-sm text-muted-foreground">
                      {app.installs}+ installs
                    </span>
                  </div>

                  {/* External link indicator */}
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <Button
            asChild
            size="lg"
            className="gap-2 group"
          >
            <a
              href="https://marketplace.atlassian.com/vendors/1220154/quabu"
              target="_blank"
              rel="noopener noreferrer"
            >
              View All on Marketplace
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
