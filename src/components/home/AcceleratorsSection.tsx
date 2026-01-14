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

        {/* Accelerator Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {accelerators.map((accelerator) => (
            <motion.div key={accelerator.id} variants={itemVariants}>
              <Link
                to={accelerator.href}
                className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/50 hover:shadow-soft transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-lg ${accelerator.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <accelerator.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {accelerator.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {accelerator.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

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
