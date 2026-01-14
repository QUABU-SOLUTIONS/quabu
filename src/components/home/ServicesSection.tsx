import { motion } from "framer-motion";
import { Check, ArrowRight, Cloud, Code, Wrench, Headphones } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly migrate from Server/Data Center to Atlassian Cloud with zero downtime and complete data integrity.",
    features: ["Risk assessment", "Data migration", "User training", "Post-migration support"],
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Extend Atlassian products with custom apps, integrations, and automations tailored to your workflows.",
    features: ["Forge & Connect apps", "REST API integrations", "Custom automation", "Third-party connectors"],
  },
  {
    icon: Wrench,
    title: "Implementation & Consulting",
    description: "Expert guidance to design, configure, and optimize your Atlassian stack for maximum ROI.",
    features: ["Best practices setup", "Workflow design", "Governance frameworks", "Performance optimization"],
  },
  {
    icon: Headphones,
    title: "Managed Services",
    description: "Ongoing administration, monitoring, and support to keep your Atlassian environment running smoothly.",
    features: ["24/7 monitoring", "Proactive maintenance", "User support", "Regular health checks"],
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Atlassian Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Expert Atlassian Consulting
          </h2>
          <p className="text-lg text-muted-foreground">
            From migration to custom development, our certified consultants help you 
            unlock the full potential of your Atlassian investment.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-soft transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center shrink-0">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-success shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" asChild>
            <Link to="/services" className="gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
