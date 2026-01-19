import { motion } from "framer-motion";
import { 
  MessageSquare,
  Settings,
  Headphones,
  FileCheck,
  Search,
  GraduationCap,
  Cloud,
  Kanban,
  LifeBuoy,
  Rocket,
  ArrowRight,
  CheckCircle2,
  Star,
  Zap,
  Users,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";
import atlassianGoldPartner from "@/assets/atlassian-gold-partner.png";
import atlassianMarketplacePartner from "@/assets/atlassian-marketplace-partner.png";

// Animated Happy Person Character (Comic Style)
function AnimatedPerson({ 
  style, 
  delay = 0,
  variant = "developer"
}: { 
  style?: React.CSSProperties; 
  delay?: number;
  variant?: "developer" | "manager" | "designer" | "support" | "analyst";
}) {
  const personStyles = {
    developer: { 
      skinTone: "#FFDBB4", 
      hair: "#4A3728", 
      shirt: "#3B82F6",
      accessory: "glasses"
    },
    manager: { 
      skinTone: "#E8BEAC", 
      hair: "#2C1810", 
      shirt: "#10B981",
      accessory: "tie"
    },
    designer: { 
      skinTone: "#FFDBB4", 
      hair: "#FF6B6B", 
      shirt: "#8B5CF6",
      accessory: "headphones"
    },
    support: { 
      skinTone: "#D4A574", 
      hair: "#1A1A1A", 
      shirt: "#F59E0B",
      accessory: "headset"
    },
    analyst: { 
      skinTone: "#FFDBB4", 
      hair: "#6B4423", 
      shirt: "#EC4899",
      accessory: "none"
    },
  };

  const colors = personStyles[variant];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
    >
      <motion.svg
        width="70"
        height="90"
        viewBox="0 0 70 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Hair */}
        <ellipse cx="35" cy="18" rx="18" ry="16" fill={colors.hair} />
        
        {/* Face */}
        <ellipse cx="35" cy="25" rx="15" ry="14" fill={colors.skinTone} />
        
        {/* Eyes */}
        <motion.ellipse
          cx="29"
          cy="23"
          rx="3"
          ry="3"
          fill="white"
        />
        <motion.ellipse
          cx="41"
          cy="23"
          rx="3"
          ry="3"
          fill="white"
        />
        <motion.circle
          cx="29"
          cy="23"
          r="1.5"
          fill="#2C1810"
          animate={{ 
            x: [0, 1, 0, -1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.circle
          cx="41"
          cy="23"
          r="1.5"
          fill="#2C1810"
          animate={{ 
            x: [0, 1, 0, -1, 0],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        {/* Glasses (for developer) */}
        {colors.accessory === "glasses" && (
          <>
            <circle cx="29" cy="23" r="5" stroke="#333" strokeWidth="1.5" fill="none" />
            <circle cx="41" cy="23" r="5" stroke="#333" strokeWidth="1.5" fill="none" />
            <line x1="34" y1="23" x2="36" y2="23" stroke="#333" strokeWidth="1.5" />
          </>
        )}
        
        {/* Smile */}
        <motion.path
          d="M 28 30 Q 35 36 42 30"
          stroke="#C4846C"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: ["M 28 30 Q 35 36 42 30", "M 28 30 Q 35 38 42 30", "M 28 30 Q 35 36 42 30"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Cheeks (blush) */}
        <circle cx="23" cy="28" r="3" fill="#FFB6C1" opacity="0.5" />
        <circle cx="47" cy="28" r="3" fill="#FFB6C1" opacity="0.5" />
        
        {/* Body/Shirt */}
        <path
          d="M 15 45 Q 35 40 55 45 L 58 80 Q 35 85 12 80 Z"
          fill={colors.shirt}
        />
        
        {/* Tie (for manager) */}
        {colors.accessory === "tie" && (
          <path
            d="M 33 45 L 35 55 L 37 45 L 38 70 L 35 75 L 32 70 Z"
            fill="#1E40AF"
          />
        )}
        
        {/* Headphones/Headset */}
        {(colors.accessory === "headphones" || colors.accessory === "headset") && (
          <>
            <path
              d="M 15 20 Q 15 5 35 5 Q 55 5 55 20"
              stroke="#333"
              strokeWidth="3"
              fill="none"
            />
            <ellipse cx="15" cy="22" rx="4" ry="6" fill="#333" />
            <ellipse cx="55" cy="22" rx="4" ry="6" fill="#333" />
            {colors.accessory === "headset" && (
              <path
                d="M 15 28 Q 10 35 20 38"
                stroke="#333"
                strokeWidth="2"
                fill="none"
              />
            )}
          </>
        )}
        
        {/* Arms waving */}
        <motion.path
          d="M 12 50 Q 0 45 -5 35"
          stroke={colors.skinTone}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ["M 12 50 Q 0 45 -5 35", "M 12 50 Q -5 40 -8 30", "M 12 50 Q 0 45 -5 35"]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.path
          d="M 58 50 Q 70 45 75 35"
          stroke={colors.skinTone}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: ["M 58 50 Q 70 45 75 35", "M 58 50 Q 75 40 78 30", "M 58 50 Q 70 45 75 35"]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
        />
        
        {/* Sparkles around (happy effect) */}
        <motion.circle
          cx="60"
          cy="10"
          r="2"
          fill="#FFD700"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        <motion.circle
          cx="10"
          cy="15"
          r="1.5"
          fill="#FFD700"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.path
          d="M 65 25 L 68 22 M 66 25 L 66 20"
          stroke="#FFD700"
          strokeWidth="2"
          animate={{
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1, repeat: Infinity, delay: 0.8 }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Floating Atlassian icons
function FloatingAtlassianElements() {
  const icons = ["📊", "🔧", "☁️", "🚀", "⚡", "🎯", "💡", "🔄"];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl"
          style={{
            left: `${10 + (i * 12) % 80}%`,
            top: `${15 + (i * 10) % 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
        >
          {icon}
        </motion.div>
      ))}
    </div>
  );
}

// Animated grid background
function AnimatedGridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="atlassianGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#atlassianGrid)" />
      </svg>
      
      {/* Animated connection lines */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
          style={{
            width: `${150 + i * 50}px`,
            left: `${i * 20}%`,
            top: `${20 + i * 15}%`,
            rotate: `${-10 + i * 5}deg`,
          }}
          animate={{
            x: [-50, 50, -50],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

const coreServices = [
  {
    icon: MessageSquare,
    title: "Consultancy",
    description: "We analyze your objectives and processes to find the solution that best fits your specific needs.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Settings,
    title: "Solutions & Implementation",
    description: "We set up products (Jira, Confluence, etc.) and develop custom functionalities to maximize value.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: Headphones,
    title: "Support & Maintenance",
    description: "Specialized teams providing stability, incident prevention, and constant operation for critical systems.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: FileCheck,
    title: "Licensing",
    description: "Expert guidance through the entire procurement and compliance process for Atlassian products.",
    color: "from-orange-500 to-amber-500",
  },
  {
    icon: Search,
    title: "Audit",
    description: "Identify strengths and weaknesses in your Jira instances to align with best practices.",
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: GraduationCap,
    title: "Updates & Training",
    description: "Keep your tools current and train your teams for greater autonomy and productivity.",
    color: "from-cyan-500 to-blue-500",
  },
];

const specializedSolutions = [
  {
    icon: Cloud,
    title: "Cloud Migration",
    description: "Seamlessly move your Atlassian products and apps between Server/Data Center and Cloud with zero downtime.",
    href: "/services/cloud-migration",
    stats: "100+ migrations",
  },
  {
    icon: Kanban,
    title: "Work Management",
    description: "Powerful tools for project tracking and cross-team collaboration that scale with your organization.",
    href: "/services/work-management",
    stats: "500+ projects",
  },
  {
    icon: LifeBuoy,
    title: "IT Service Management",
    description: "Complete solutions for incident, problem, and service request management using Jira Service Management.",
    href: "/services/itsm",
    stats: "24/7 support",
  },
  {
    icon: Rocket,
    title: "Agile & DevOps",
    description: "Enhance your delivery pipelines and agile methodologies with integrated Atlassian toolchains.",
    href: "/services/agile-devops",
    stats: "50% faster delivery",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function AtlassianServices() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center section-padding overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <AnimatedGridBackground />
        <FloatingAtlassianElements />
        
        {/* Happy People */}
        <AnimatedPerson style={{ left: '3%', top: '15%' }} delay={0.2} variant="developer" />
        <AnimatedPerson style={{ right: '5%', top: '20%' }} delay={0.4} variant="manager" />
        <AnimatedPerson style={{ left: '8%', bottom: '20%' }} delay={0.6} variant="designer" />
        <AnimatedPerson style={{ right: '3%', bottom: '25%' }} delay={0.8} variant="support" />
        <AnimatedPerson style={{ left: '15%', top: '40%' }} delay={1} variant="analyst" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-wide relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Partner Badges */}
            <motion.div
              className="flex items-center justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.img 
                src={atlassianGoldPartner} 
                alt="Atlassian Gold Solution Partner" 
                className="h-16 md:h-20 w-auto bg-white rounded-lg p-2"
                whileHover={{ scale: 1.05 }}
              />
              <motion.img 
                src={atlassianMarketplacePartner} 
                alt="Atlassian Marketplace Partner" 
                className="h-16 md:h-20 w-auto bg-white rounded-lg p-2"
                whileHover={{ scale: 1.05 }}
              />
            </motion.div>
            
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Star className="w-4 h-4 text-yellow-400" />
              Gold Solution Partner
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Atlassian Services for{" "}
              <span className="text-cyan-300">Your Success</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              As an Atlassian Gold Solution Partner, we help businesses unlock the full 
              potential of Atlassian tools. From consultancy to implementation, we're 
              your trusted partner for digital transformation.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" className="bg-white text-blue-700 hover:bg-white/90" asChild>
                <a href="https://marketplace.atlassian.com/vendors/1225498/quabu" target="_blank" rel="noopener noreferrer">
                  View Our Apps
                </a>
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "500+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold mb-1"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <motion.div
              className="w-1.5 h-3 bg-white/50 rounded-full"
              animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Core Services Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <AnimatedPerson style={{ right: '2%', top: '10%' }} delay={0.3} variant="support" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Core Atlassian Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end services to help you get the most out of your Atlassian investment
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all overflow-hidden"
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <service.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialized Solutions Section */}
      <section className="section-padding relative overflow-hidden">
        <AnimatedGridBackground />
        <AnimatedPerson style={{ left: '3%', bottom: '20%' }} delay={0.4} variant="developer" />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Rocket className="w-4 h-4" />
              Specialized Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Tailored for Your Industry
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Deep expertise in specific Atlassian solutions for different business needs
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {specializedSolutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Icon Side */}
                  <div className="md:w-1/3 bg-gradient-to-br from-primary to-accent p-8 flex items-center justify-center">
                    <motion.div
                      className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <solution.icon className="w-10 h-10 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="md:w-2/3 p-8">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {solution.title}
                      </h3>
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                        {solution.stats}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      {solution.description}
                    </p>
                    <Link
                      to={solution.href}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 relative overflow-hidden">
        <FloatingAtlassianElements />
        
        <AnimatedPerson style={{ right: '5%', top: '15%' }} delay={0.3} variant="manager" />
        <AnimatedPerson style={{ left: '5%', bottom: '15%' }} delay={0.5} variant="analyst" />

        <div className="container-wide relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Why Quabu
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Your Trusted Atlassian Partner
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              We don't just implement tools – we transform the way your teams work
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Star, title: "Gold Partner", desc: "Certified Atlassian expertise" },
              { icon: Users, title: "Expert Team", desc: "Dedicated specialists" },
              { icon: Rocket, title: "Fast Delivery", desc: "Rapid implementation" },
              { icon: Headphones, title: "24/7 Support", desc: "Always available help" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  <item.icon className="w-7 h-7" />
                </motion.div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Marketplace Partner Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden"
          >
            <AnimatedGridBackground />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/3 flex justify-center">
                <motion.img
                  src={atlassianMarketplacePartner}
                  alt="Atlassian Marketplace Partner"
                  className="h-32 md:h-40 w-auto object-contain"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                />
              </div>
              
              <div className="md:w-2/3 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">
                  Marketplace Partner
                </h2>
                <p className="text-muted-foreground mb-6">
                  When existing solutions don't meet your specific requirements, we develop custom 
                  apps for the Atlassian Marketplace. Our apps are trusted by thousands of teams worldwide.
                </p>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <Button asChild>
                    <a 
                      href="https://marketplace.atlassian.com/vendors/1220154/quabu" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View Our Apps
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request Custom App</Link>
                  </Button>
                </div>
              </div>
            </div>
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
