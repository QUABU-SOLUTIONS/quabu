import { motion, animate } from "framer-motion";
import { Users, Award, Clock, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const stats = [
  {
    icon: Users,
    numericValue: 200,
    suffix: "+",
    label: "Enterprise Clients",
    description: "Across USA and Europe",
  },
  {
    icon: Award,
    numericValue: 15,
    suffix: "+",
    label: "Years Experience",
    description: "Atlassian expertise",
  },
  {
    icon: Clock,
    numericValue: 50,
    suffix: "%",
    label: "Faster Deployment",
    description: "With Digital Accelerators",
  },
  {
    icon: Globe,
    numericValue: 24,
    suffix: "/7",
    label: "Support Coverage",
    description: "Miami & Madrid offices",
  },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const controls = animate(0, value, {
              duration,
              ease: "easeOut",
              onUpdate: (latest) => {
                setDisplayValue(Math.round(latest));
              },
            });
            return () => controls.stop();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={ref} className="text-3xl md:text-4xl font-display font-bold text-foreground mb-1">
      {displayValue}{suffix}
    </div>
  );
}

function NetworkLines() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
      style={{ zIndex: 0 }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
          <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.5" />
          <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      
      {/* Connecting lines between icons */}
      <motion.line
        x1="18.75%"
        y1="28"
        x2="43.75%"
        y2="28"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.line
        x1="56.25%"
        y1="28"
        x2="43.75%"
        y2="28"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.line
        x1="56.25%"
        y1="28"
        x2="81.25%"
        y2="28"
        stroke="url(#lineGradient)"
        strokeWidth="2"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.7 }}
      />

      {/* Animated dots traveling along the lines */}
      <motion.circle
        r="4"
        fill="hsl(var(--primary))"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          cx: ["18.75%", "43.75%", "56.25%", "81.25%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "easeInOut",
        }}
        cy="28"
      />
      <motion.circle
        r="4"
        fill="hsl(var(--accent))"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          cx: ["81.25%", "56.25%", "43.75%", "18.75%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1.5,
          ease: "easeInOut",
        }}
        cy="28"
      />
    </svg>
  );
}

function PulsingIcon({ icon: Icon, index }: { icon: typeof Users; index: number }) {
  return (
    <div className="relative w-14 h-14 mx-auto mb-4">
      {/* Outer pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-primary/20"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: index * 0.3,
          ease: "easeInOut",
        }}
      />
      {/* Second pulsing ring */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-accent/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: index * 0.3 + 0.5,
          ease: "easeInOut",
        }}
      />
      {/* Icon container */}
      <motion.div
        className="relative w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        animate={{
          boxShadow: [
            "0 0 0 0 hsl(var(--primary) / 0)",
            "0 0 20px 5px hsl(var(--primary) / 0.3)",
            "0 0 0 0 hsl(var(--primary) / 0)",
          ],
        }}
        transition={{
          boxShadow: {
            duration: 2,
            repeat: Infinity,
            delay: index * 0.5,
          },
        }}
      >
        <Icon className="w-7 h-7 text-primary" />
      </motion.div>
    </div>
  );
}

export function StatsSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-wide">
        <div className="relative">
          <NetworkLines />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
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
                <PulsingIcon icon={stat.icon} index={index} />
                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} />
                <div className="font-medium text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
