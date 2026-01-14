import { motion } from "framer-motion";
import { Users, Award, Clock, Globe } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Enterprise Clients",
    description: "Across USA and Europe",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "Atlassian expertise",
  },
  {
    icon: Clock,
    value: "50%",
    label: "Faster Deployment",
    description: "With Digital Accelerators",
  },
  {
    icon: Globe,
    value: "24/7",
    label: "Support Coverage",
    description: "Miami & Madrid offices",
  },
];

const clientLogos = [
  "Enterprise Corp",
  "Tech Giants Inc",
  "Global Solutions",
  "Innovation Labs",
  "Digital Systems",
  "Cloud Partners",
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-wide">
        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="font-medium text-foreground">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by leading companies across industries
          </p>

          {/* Logo Placeholder Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-lg bg-muted/50 text-muted-foreground font-medium text-sm"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Atlassian Partnership Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl gradient-primary p-8 md:p-12 text-white text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="text-3xl font-bold">Q</span>
              </div>
              <span className="text-2xl font-bold">×</span>
              <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center">
                <span className="text-3xl font-bold text-[#0052CC]">A</span>
              </div>
            </div>
          </div>
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
            Atlassian Gold Solution Partner
          </h3>
          <p className="text-white/80 max-w-2xl mx-auto">
            As a certified Atlassian Gold Partner, we bring expertise, proven methodologies, 
            and direct access to Atlassian resources to every engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
