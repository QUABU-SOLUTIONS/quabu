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

function NetworkBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="serviceGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.25" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.15" />
          </linearGradient>
          <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.6" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Central hub connection lines - hidden on mobile */}
        <g className="hidden md:block">
          {/* Horizontal line between top cards */}
          <motion.line
            x1="25%"
            y1="30%"
            x2="75%"
            y2="30%"
            stroke="url(#serviceGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3 }}
          />
          {/* Horizontal line between bottom cards */}
          <motion.line
            x1="25%"
            y1="70%"
            x2="75%"
            y2="70%"
            stroke="url(#serviceGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.5 }}
          />
          {/* Left vertical line */}
          <motion.line
            x1="25%"
            y1="30%"
            x2="25%"
            y2="70%"
            stroke="url(#serviceGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.7 }}
          />
          {/* Right vertical line */}
          <motion.line
            x1="75%"
            y1="30%"
            x2="75%"
            y2="70%"
            stroke="url(#serviceGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.9 }}
          />
          {/* Diagonal connections */}
          <motion.line
            x1="25%"
            y1="30%"
            x2="75%"
            y2="70%"
            stroke="url(#serviceGradient)"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.1 }}
          />
          <motion.line
            x1="75%"
            y1="30%"
            x2="25%"
            y2="70%"
            stroke="url(#serviceGradient)"
            strokeWidth="1.5"
            strokeDasharray="8 4"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 1.3 }}
          />
        </g>
        
        {/* Animated traveling dots */}
        <motion.circle
          r="5"
          fill="hsl(var(--primary))"
          animate={{
            cx: ["25%", "75%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            ease: "easeInOut",
          }}
          cy="30%"
          className="hidden md:block"
        />
        <motion.circle
          r="5"
          fill="hsl(var(--accent))"
          animate={{
            cx: ["75%", "25%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 1,
            delay: 1.5,
            ease: "easeInOut",
          }}
          cy="70%"
          className="hidden md:block"
        />
        <motion.circle
          r="4"
          fill="hsl(var(--primary))"
          animate={{
            cy: ["30%", "70%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            delay: 0.5,
            ease: "easeInOut",
          }}
          cx="25%"
          className="hidden md:block"
        />
        <motion.circle
          r="4"
          fill="hsl(var(--accent))"
          animate={{
            cy: ["70%", "30%"],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            repeatDelay: 1.5,
            delay: 2,
            ease: "easeInOut",
          }}
          cx="75%"
          className="hidden md:block"
        />
        
        {/* Corner node glows */}
        {[
          { cx: "25%", cy: "30%" },
          { cx: "75%", cy: "30%" },
          { cx: "25%", cy: "70%" },
          { cx: "75%", cy: "70%" },
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r="20"
            fill="url(#nodeGlow)"
            animate={{
              r: [15, 25, 15],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            className="hidden md:block"
          />
        ))}
      </svg>
      
      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${15 + (i * 10) % 70}%`,
            top: `${20 + (i * 13) % 60}%`,
          }}
          animate={{
            y: [0, -15, 0],
            x: [0, (i % 2 === 0 ? 8 : -8), 0],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3 + (i % 2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.4,
          }}
        />
      ))}
    </div>
  );
}

function PulsingServiceIcon({ icon: Icon, index }: { icon: typeof Cloud; index: number }) {
  return (
    <div className="relative w-14 h-14 shrink-0">
      {/* Pulsing rings */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/30"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: index * 0.3,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-xl bg-accent/20"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.3 + 0.4,
          ease: "easeInOut",
        }}
      />
      {/* Icon container */}
      <motion.div
        className="relative w-14 h-14 rounded-xl gradient-primary flex items-center justify-center"
        animate={{
          boxShadow: [
            "0 0 0 0 transparent",
            "0 0 25px 8px hsl(var(--primary) / 0.3)",
            "0 0 0 0 transparent",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.4,
        }}
      >
        <Icon className="w-7 h-7 text-white" />
      </motion.div>
    </div>
  );
}

export function ServicesSection() {
  return (
    <section className="section-padding relative overflow-hidden">
      <NetworkBackground />
      
      <div className="container-wide relative z-10">
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
              whileHover={{ 
                y: -6,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group p-8 rounded-2xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <PulsingServiceIcon icon={service.icon} index={index} />
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center gap-2 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: featureIndex * 0.3,
                          }}
                        >
                          <Check className="w-4 h-4 text-success shrink-0" />
                        </motion.div>
                        <span>{feature}</span>
                      </motion.li>
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button size="lg" variant="outline" asChild>
              <Link to="/services/atlassian" className="gap-2">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
