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
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const accelerators = [
  {
    id: "marketing",
    name: "Marketing",
    number: "01",
    description: "Improves the planning and analysis of campaigns, facilitates content creation, and centralizes social media management.",
    icon: Megaphone,
    color: "bg-pink-500/10 text-pink-600",
    gradientFrom: "from-pink-500",
    gradientTo: "to-rose-500",
    href: "/accelerators/marketing",
    features: [
      "Campaign planning & tracking",
      "Content calendar management",
      "Social media centralization",
      "Analytics & reporting"
    ]
  },
  {
    id: "sales",
    name: "Sales",
    number: "02",
    description: "Optimizes the tracking of sales opportunities, analysis of results, and management of customer relationships to increase revenue.",
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-600",
    gradientFrom: "from-emerald-500",
    gradientTo: "to-green-500",
    href: "/accelerators/sales",
    features: [
      "Sales pipeline management",
      "Opportunity tracking",
      "CRM integration",
      "Revenue analytics"
    ]
  },
  {
    id: "hr",
    name: "Human Resources",
    number: "03",
    description: "Streamlines the selection, onboarding and performance evaluation processes, improving productivity and alignment of objectives.",
    icon: Users,
    color: "bg-violet-500/10 text-violet-600",
    gradientFrom: "from-violet-500",
    gradientTo: "to-purple-500",
    href: "/accelerators/hr",
    features: [
      "Recruitment automation",
      "Onboarding workflows",
      "Performance evaluations",
      "Objective alignment"
    ]
  },
  {
    id: "operations",
    name: "Operations",
    number: "04",
    description: "Facilitates project planning and control, inventory management, and maintenance, reducing inefficiencies and improving coordination.",
    icon: Settings,
    color: "bg-orange-500/10 text-orange-600",
    gradientFrom: "from-orange-500",
    gradientTo: "to-amber-500",
    href: "/accelerators/operations",
    features: [
      "Project planning & control",
      "Inventory management",
      "Maintenance scheduling",
      "Team coordination"
    ]
  },
  {
    id: "finance",
    name: "Finances",
    number: "05",
    description: "Accelerates the approval of budgets, billing management and internal audits, increasing accuracy and transparency.",
    icon: DollarSign,
    color: "bg-green-500/10 text-green-600",
    gradientFrom: "from-green-500",
    gradientTo: "to-teal-500",
    href: "/accelerators/finance",
    features: [
      "Budget approval workflows",
      "Billing management",
      "Internal audit processes",
      "Financial transparency"
    ]
  },
  {
    id: "it",
    name: "Information Technology",
    number: "06",
    description: "Improves the management of incidents, changes and software development to ensure greater efficiency and quality of service.",
    icon: Monitor,
    color: "bg-blue-500/10 text-blue-600",
    gradientFrom: "from-blue-500",
    gradientTo: "to-cyan-500",
    href: "/accelerators/it",
    features: [
      "Incident management",
      "Change management",
      "Software development",
      "Service quality assurance"
    ]
  },
  {
    id: "customer-service",
    name: "Customer Service",
    number: "07",
    description: "Optimizes ticket resolution, facilitates access to information, and collects feedback to improve customer satisfaction.",
    icon: HeadphonesIcon,
    color: "bg-cyan-500/10 text-cyan-600",
    gradientFrom: "from-cyan-500",
    gradientTo: "to-sky-500",
    href: "/accelerators/customer-service",
    features: [
      "Ticket resolution",
      "Knowledge base access",
      "Customer feedback",
      "Satisfaction metrics"
    ]
  },
  {
    id: "rd",
    name: "Research & Development",
    number: "08",
    description: "Improves collaboration in innovation, patent tracking, and R&D project planning, accelerating development.",
    icon: Lightbulb,
    color: "bg-amber-500/10 text-amber-600",
    gradientFrom: "from-amber-500",
    gradientTo: "to-yellow-500",
    href: "/accelerators/rd",
    features: [
      "Innovation collaboration",
      "Patent tracking",
      "R&D project planning",
      "Development acceleration"
    ]
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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedHeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="heroGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#heroGrid)" />
      </svg>

      {/* Animated gradient orbs */}
      <motion.div
        className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]"
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[80px]"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Floating dots */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-primary/30"
          style={{
            left: `${5 + (i * 4.7) % 90}%`,
            top: `${10 + (i * 5.3) % 80}%`,
          }}
          animate={{
            y: [0, -15, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export default function Accelerators() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center section-padding overflow-hidden">
        <AnimatedHeroBackground />
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span 
              className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              Digital Accelerators
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Pre-Built Solutions for{" "}
              <span className="text-gradient">Every Department</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Skip months of development with our battle-tested Atlassian solutions. 
              Install in days, customize to your needs, and scale with confidence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Accelerators Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="container-wide">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {accelerators.map((accelerator, index) => (
              <motion.div
                key={accelerator.id}
                variants={itemVariants}
                className={`group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-primary/50 transition-all duration-300 ${
                  index % 2 === 0 ? "" : "md:flex-row-reverse"
                }`}
              >
                <div className={`flex flex-col md:flex-row ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                  {/* Gradient Side */}
                  <div className={`relative md:w-2/5 min-h-[200px] md:min-h-[300px] bg-gradient-to-br ${accelerator.gradientFrom} ${accelerator.gradientTo} p-8 flex flex-col justify-center items-center text-white`}>
                    {/* Animated background pattern */}
                    <div className="absolute inset-0 overflow-hidden opacity-20">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-32 h-32 border border-white/30 rounded-full"
                          style={{
                            left: `${-20 + (i * 25) % 100}%`,
                            top: `${-10 + (i * 30) % 100}%`,
                          }}
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                            delay: i * 0.3,
                          }}
                        />
                      ))}
                    </div>
                    
                    <div className="relative z-10 text-center">
                      <span className="text-5xl md:text-6xl font-bold opacity-30 mb-2 block">
                        {accelerator.number}
                      </span>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4"
                      >
                        <accelerator.icon className="w-10 h-10" />
                      </motion.div>
                      <h3 className="text-xl md:text-2xl font-bold">
                        DIGITAL ACCELERATOR
                      </h3>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                      {accelerator.name}
                    </h2>
                    <p className="text-muted-foreground mb-6 text-lg">
                      {accelerator.description}
                    </p>
                    
                    {/* Features */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {accelerator.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center gap-2 text-sm"
                        >
                          <CheckCircle2 className={`w-4 h-4 ${accelerator.color.split(' ')[1]}`} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.div
                      whileHover={{ x: 5 }}
                      className="inline-flex"
                    >
                      <Link
                        to={accelerator.href}
                        className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                      >
                        Learn more about {accelerator.name}
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <TrustSection />

      {/* CTA Section */}
      <CTASection />
    </Layout>
  );
}
