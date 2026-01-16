import { motion } from "framer-motion";
import { 
  Megaphone, 
  TrendingUp, 
  Users, 
  Settings, 
  DollarSign, 
  Monitor, 
  HeadphonesIcon, 
  Lightbulb,
  ArrowRight
} from "lucide-react";
import { Link } from "react-router-dom";

const accelerators = [
  {
    id: "marketing",
    name: "Marketing",
    description: "Campaign management, content calendars, and analytics pipelines",
    icon: Megaphone,
    color: "bg-pink-500/10 text-pink-600",
    href: "/accelerators/marketing",
  },
  {
    id: "sales",
    name: "Sales",
    description: "Sales pipelines, CRM workflows, and deal tracking",
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-600",
    href: "/accelerators/sales",
  },
  {
    id: "hr",
    name: "HR & People",
    description: "Onboarding, performance reviews, and employee management",
    icon: Users,
    color: "bg-violet-500/10 text-violet-600",
    href: "/accelerators/hr",
  },
  {
    id: "operations",
    name: "Operations",
    description: "Process automation, project tracking, and resource management",
    icon: Settings,
    color: "bg-orange-500/10 text-orange-600",
    href: "/accelerators/operations",
  },
  {
    id: "finance",
    name: "Finance",
    description: "Budget approvals, expense tracking, and financial workflows",
    icon: DollarSign,
    color: "bg-green-500/10 text-green-600",
    href: "/accelerators/finance",
  },
  {
    id: "it",
    name: "IT & DevOps",
    description: "Incident management, change requests, and service desk",
    icon: Monitor,
    color: "bg-blue-500/10 text-blue-600",
    href: "/accelerators/it",
  },
  {
    id: "customer-service",
    name: "Customer Service",
    description: "Support ticketing, SLA management, and customer portals",
    icon: HeadphonesIcon,
    color: "bg-cyan-500/10 text-cyan-600",
    href: "/accelerators/customer-service",
  },
  {
    id: "rd",
    name: "R&D",
    description: "Product development, innovation tracking, and research workflows",
    icon: Lightbulb,
    color: "bg-amber-500/10 text-amber-600",
    href: "/accelerators/rd",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function NetworkBackground() {
  // Connection lines between cards (grid positions)
  const connections = [
    { from: 0, to: 1 }, { from: 1, to: 2 }, { from: 2, to: 3 },
    { from: 0, to: 4 }, { from: 1, to: 5 }, { from: 2, to: 6 }, { from: 3, to: 7 },
    { from: 4, to: 5 }, { from: 5, to: 6 }, { from: 6, to: 7 },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden lg:block">
      <svg className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        
        {/* Horizontal connections row 1 */}
        {[0, 1, 2].map((i) => (
          <motion.line
            key={`h1-${i}`}
            x1={`${12.5 + i * 25}%`}
            y1="25%"
            x2={`${37.5 + i * 25}%`}
            y2="25%"
            stroke="url(#networkGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
          />
        ))}
        
        {/* Horizontal connections row 2 */}
        {[0, 1, 2].map((i) => (
          <motion.line
            key={`h2-${i}`}
            x1={`${12.5 + i * 25}%`}
            y1="75%"
            x2={`${37.5 + i * 25}%`}
            y2="75%"
            stroke="url(#networkGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
          />
        ))}
        
        {/* Vertical connections */}
        {[0, 1, 2, 3].map((i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${12.5 + i * 25}%`}
            y1="30%"
            x2={`${12.5 + i * 25}%`}
            y2="70%"
            stroke="url(#networkGradient)"
            strokeWidth="2"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
          />
        ))}
        
        {/* Animated traveling dots */}
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`dot-h1-${i}`}
            r="4"
            fill="hsl(var(--primary))"
            animate={{
              cx: [`${12.5 + i * 25}%`, `${37.5 + i * 25}%`],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              delay: i * 0.5,
              ease: "easeInOut",
            }}
            cy="25%"
          />
        ))}
        
        {[0, 1, 2].map((i) => (
          <motion.circle
            key={`dot-h2-${i}`}
            r="4"
            fill="hsl(var(--accent))"
            animate={{
              cx: [`${37.5 + i * 25}%`, `${12.5 + i * 25}%`],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 1 + i * 0.5,
              ease: "easeInOut",
            }}
            cy="75%"
          />
        ))}
        
        {[0, 1, 2, 3].map((i) => (
          <motion.circle
            key={`dot-v-${i}`}
            r="3"
            fill="hsl(var(--primary))"
            animate={{
              cy: ["30%", "70%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
            cx={`${12.5 + i * 25}%`}
          />
        ))}
      </svg>
    </div>
  );
}

function PulsingCardIcon({ icon: Icon, color, index }: { icon: typeof Megaphone; color: string; index: number }) {
  return (
    <div className="relative w-12 h-12 mb-4">
      {/* Pulsing rings */}
      <motion.div
        className={`absolute inset-0 rounded-lg ${color.split(' ')[0]}`}
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: index * 0.2,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute inset-0 rounded-lg ${color.split(' ')[0]}`}
        animate={{
          scale: [1, 1.6, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.2 + 0.3,
          ease: "easeInOut",
        }}
      />
      {/* Icon container */}
      <motion.div
        className={`relative w-12 h-12 rounded-lg ${color} flex items-center justify-center group-hover:scale-110 transition-transform`}
        animate={{
          boxShadow: [
            "0 0 0 0 transparent",
            "0 0 20px 5px hsl(var(--primary) / 0.2)",
            "0 0 0 0 transparent",
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: index * 0.3,
        }}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
    </div>
  );
}

export function AcceleratorsSection() {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Digital Accelerators
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Pre-Built Solutions for Every Department
          </h2>
          <p className="text-lg text-muted-foreground">
            Skip months of development with our battle-tested Atlassian solutions. 
            Install in days, customize to your needs, and scale with confidence.
          </p>
        </motion.div>

        {/* Accelerator Grid with Network Background */}
        <div className="relative">
          <NetworkBackground />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
          >
            {accelerators.map((accelerator, index) => (
              <motion.div 
                key={accelerator.id} 
                variants={itemVariants}
                whileHover={{ 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
              >
                <Link
                  to={accelerator.href}
                  className="group block p-6 rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <PulsingCardIcon icon={accelerator.icon} color={accelerator.color} index={index} />
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {accelerator.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {accelerator.description}
                  </p>
                  <motion.div 
                    className="flex items-center gap-1 text-sm font-medium text-primary"
                    initial={{ opacity: 0, x: -10 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/accelerators"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all accelerators
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
