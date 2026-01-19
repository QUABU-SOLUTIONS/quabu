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

// Animated Kirby-style Star Character
function AnimatedStar({ 
  style, 
  delay = 0,
  variant = "yellow"
}: { 
  style?: React.CSSProperties; 
  delay?: number;
  variant?: "yellow" | "pink" | "blue" | "green" | "orange";
}) {
  const starStyles = {
    yellow: { 
      body: "#FBBF24", 
      glow: "#FDE68A",
      cheeks: "#F472B6",
      eyes: "#1F2937"
    },
    pink: { 
      body: "#F472B6", 
      glow: "#FBCFE8",
      cheeks: "#FB7185",
      eyes: "#1F2937"
    },
    blue: { 
      body: "#60A5FA", 
      glow: "#BFDBFE",
      cheeks: "#F472B6",
      eyes: "#1F2937"
    },
    green: { 
      body: "#34D399", 
      glow: "#A7F3D0",
      cheeks: "#F472B6",
      eyes: "#1F2937"
    },
    orange: { 
      body: "#FB923C", 
      glow: "#FED7AA",
      cheeks: "#F472B6",
      eyes: "#1F2937"
    },
  };

  const colors = starStyles[variant];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ delay, duration: 0.6, type: "spring" }}
    >
      <motion.svg
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Glow effect */}
        <motion.ellipse
          cx="40"
          cy="40"
          rx="38"
          ry="38"
          fill={colors.glow}
          opacity="0.3"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Star shape - 5 pointed star */}
        <motion.path
          d="M 40 5 
             L 47 28 L 72 28 L 52 43 
             L 60 68 L 40 53 
             L 20 68 L 28 43 
             L 8 28 L 33 28 Z"
          fill={colors.body}
          stroke={colors.glow}
          strokeWidth="2"
          animate={{
            scale: [1, 1.05, 1]
          }}
          style={{ transformOrigin: "40px 40px" }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        
        {/* Face area - lighter center */}
        <circle cx="40" cy="38" r="15" fill={colors.glow} opacity="0.5" />
        
        {/* Eyes */}
        <motion.ellipse
          cx="34"
          cy="36"
          rx="4"
          ry="5"
          fill={colors.eyes}
          animate={{ 
            scaleY: [1, 0.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.ellipse
          cx="46"
          cy="36"
          rx="4"
          ry="5"
          fill={colors.eyes}
          animate={{ 
            scaleY: [1, 0.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        {/* Eye shine */}
        <circle cx="32" cy="34" r="1.5" fill="white" />
        <circle cx="44" cy="34" r="1.5" fill="white" />
        
        {/* Cheeks */}
        <motion.ellipse
          cx="26"
          cy="42"
          rx="4"
          ry="3"
          fill={colors.cheeks}
          opacity="0.6"
          animate={{
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.ellipse
          cx="54"
          cy="42"
          rx="4"
          ry="3"
          fill={colors.cheeks}
          opacity="0.6"
          animate={{
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Smile */}
        <motion.path
          d="M 35 45 Q 40 52 45 45"
          stroke={colors.eyes}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          animate={{
            d: ["M 35 45 Q 40 52 45 45", "M 35 44 Q 40 54 45 44", "M 35 45 Q 40 52 45 45"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Sparkles around */}
        <motion.g
          animate={{ rotate: 360 }}
          style={{ transformOrigin: "40px 40px" }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <motion.circle
            cx="70"
            cy="10"
            r="3"
            fill="#FFD700"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
          />
          <motion.circle
            cx="10"
            cy="70"
            r="2"
            fill="#FFD700"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
          />
          <motion.circle
            cx="75"
            cy="60"
            r="2.5"
            fill="#FFD700"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
          />
        </motion.g>
        
        {/* Mini stars */}
        <motion.text
          x="5"
          y="20"
          fontSize="10"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [20, 15, 20]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          ✨
        </motion.text>
        <motion.text
          x="65"
          y="75"
          fontSize="8"
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5],
            y: [75, 70, 75]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        >
          ⭐
        </motion.text>
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
        
        {/* Happy Stars */}
        <AnimatedStar style={{ left: '3%', top: '15%' }} delay={0.2} variant="yellow" />
        <AnimatedStar style={{ right: '5%', top: '20%' }} delay={0.4} variant="pink" />
        <AnimatedStar style={{ left: '8%', bottom: '20%' }} delay={0.6} variant="blue" />
        <AnimatedStar style={{ right: '3%', bottom: '25%' }} delay={0.8} variant="green" />
        <AnimatedStar style={{ left: '15%', top: '40%' }} delay={1} variant="orange" />

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
                <a href="https://marketplace.atlassian.com/vendors/1220154/quabu" target="_blank" rel="noopener noreferrer">
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
        <AnimatedStar style={{ right: '2%', top: '10%' }} delay={0.3} variant="yellow" />
        
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

          {/* Network connections background */}
          <div className="relative">
            {/* SVG Connection Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ minHeight: '100%' }}>
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                  <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Horizontal connecting lines */}
              <motion.line
                x1="33%" y1="25%" x2="66%" y2="25%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5 }}
              />
              <motion.line
                x1="33%" y1="75%" x2="66%" y2="75%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.7 }}
              />
              
              {/* Vertical connecting lines */}
              <motion.line
                x1="16.5%" y1="45%" x2="16.5%" y2="55%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              />
              <motion.line
                x1="50%" y1="45%" x2="50%" y2="55%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.1 }}
              />
              <motion.line
                x1="83.5%" y1="45%" x2="83.5%" y2="55%"
                stroke="url(#lineGradient)"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
              />
              
              {/* Traveling dots */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.circle
                  key={`dot-${i}`}
                  r="4"
                  fill="hsl(var(--primary))"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 1, 1, 0],
                    cx: i < 2 ? ["33%", "66%"] : ["16.5%", "16.5%"],
                    cy: i === 0 ? ["25%", "25%"] : i === 1 ? ["75%", "75%"] : i === 2 ? ["45%", "55%"] : i === 3 ? ["45%", "55%"] : ["45%", "55%"],
                  }}
                  transition={{
                    duration: 2,
                    delay: i * 0.4,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                />
              ))}
            </svg>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
            >
              {coreServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all overflow-hidden"
                >
                  {/* Connection node indicator */}
                  <motion.div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary/30"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2 + 0.5,
                    }}
                  />
                  
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
        </div>
      </section>

      {/* Specialized Solutions Section */}
      <section className="section-padding relative overflow-hidden">
        <AnimatedGridBackground />
        <AnimatedStar style={{ left: '3%', bottom: '20%' }} delay={0.4} variant="pink" />
        
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
        
        <AnimatedStar style={{ right: '5%', top: '15%' }} delay={0.3} variant="blue" />
        <AnimatedStar style={{ left: '5%', bottom: '15%' }} delay={0.5} variant="green" />

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
