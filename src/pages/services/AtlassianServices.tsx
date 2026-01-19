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

// Animated Cat Character (Cute Style)
function AnimatedCat({ 
  style, 
  delay = 0,
  variant = "orange"
}: { 
  style?: React.CSSProperties; 
  delay?: number;
  variant?: "orange" | "gray" | "black" | "white" | "calico";
}) {
  const catStyles = {
    orange: { 
      body: "#F59E0B", 
      stripes: "#D97706",
      nose: "#EC4899",
      eyes: "#22C55E"
    },
    gray: { 
      body: "#6B7280", 
      stripes: "#4B5563",
      nose: "#F472B6",
      eyes: "#3B82F6"
    },
    black: { 
      body: "#1F2937", 
      stripes: "#111827",
      nose: "#F472B6",
      eyes: "#FBBF24"
    },
    white: { 
      body: "#F3F4F6", 
      stripes: "#E5E7EB",
      nose: "#F472B6",
      eyes: "#3B82F6"
    },
    calico: { 
      body: "#FEF3C7", 
      stripes: "#F59E0B",
      nose: "#EC4899",
      eyes: "#10B981"
    },
  };

  const colors = catStyles[variant];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
    >
      <motion.svg
        width="80"
        height="90"
        viewBox="0 0 80 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Ears */}
        <motion.path
          d="M 15 25 L 22 5 L 30 22 Z"
          fill={colors.body}
          animate={{ rotate: [-5, 5, -5] }}
          style={{ transformOrigin: "22px 15px" }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.path
          d="M 50 22 L 58 5 L 65 25 Z"
          fill={colors.body}
          animate={{ rotate: [5, -5, 5] }}
          style={{ transformOrigin: "58px 15px" }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
        />
        {/* Inner ears */}
        <path d="M 18 22 L 22 10 L 27 20 Z" fill="#FFB6C1" />
        <path d="M 53 20 L 58 10 L 62 22 Z" fill="#FFB6C1" />
        
        {/* Head */}
        <ellipse cx="40" cy="35" rx="25" ry="22" fill={colors.body} />
        
        {/* Stripes on forehead */}
        <path d="M 35 18 L 40 28 L 45 18" stroke={colors.stripes} strokeWidth="2" fill="none" />
        <path d="M 32 22 L 35 30" stroke={colors.stripes} strokeWidth="1.5" fill="none" />
        <path d="M 48 22 L 45 30" stroke={colors.stripes} strokeWidth="1.5" fill="none" />
        
        {/* Eyes */}
        <motion.ellipse
          cx="30"
          cy="35"
          rx="6"
          ry="7"
          fill="white"
        />
        <motion.ellipse
          cx="50"
          cy="35"
          rx="6"
          ry="7"
          fill="white"
        />
        {/* Pupils */}
        <motion.ellipse
          cx="30"
          cy="35"
          rx="3"
          ry="5"
          fill={colors.eyes}
          animate={{ 
            scaleY: [1, 0.3, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        <motion.ellipse
          cx="50"
          cy="35"
          rx="3"
          ry="5"
          fill={colors.eyes}
          animate={{ 
            scaleY: [1, 0.3, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
        />
        {/* Eye shine */}
        <circle cx="28" cy="33" r="1.5" fill="white" />
        <circle cx="48" cy="33" r="1.5" fill="white" />
        
        {/* Nose */}
        <motion.path
          d="M 37 42 L 40 46 L 43 42 Z"
          fill={colors.nose}
          animate={{ scale: [1, 1.1, 1] }}
          style={{ transformOrigin: "40px 44px" }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Mouth */}
        <motion.path
          d="M 40 46 L 40 50 M 35 52 Q 40 56 45 52"
          stroke="#333"
          strokeWidth="1.5"
          fill="none"
          strokeLinecap="round"
        />
        
        {/* Whiskers */}
        <motion.g
          animate={{ rotate: [-3, 3, -3] }}
          style={{ transformOrigin: "40px 45px" }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <line x1="18" y1="40" x2="8" y2="38" stroke="#333" strokeWidth="1" />
          <line x1="18" y1="45" x2="5" y2="45" stroke="#333" strokeWidth="1" />
          <line x1="18" y1="50" x2="8" y2="52" stroke="#333" strokeWidth="1" />
          <line x1="62" y1="40" x2="72" y2="38" stroke="#333" strokeWidth="1" />
          <line x1="62" y1="45" x2="75" y2="45" stroke="#333" strokeWidth="1" />
          <line x1="62" y1="50" x2="72" y2="52" stroke="#333" strokeWidth="1" />
        </motion.g>
        
        {/* Body */}
        <ellipse cx="40" cy="70" rx="18" ry="15" fill={colors.body} />
        
        {/* Body stripes */}
        <path d="M 30 62 Q 32 70 30 78" stroke={colors.stripes} strokeWidth="2" fill="none" />
        <path d="M 40 60 Q 42 70 40 80" stroke={colors.stripes} strokeWidth="2" fill="none" />
        <path d="M 50 62 Q 48 70 50 78" stroke={colors.stripes} strokeWidth="2" fill="none" />
        
        {/* Front paws */}
        <ellipse cx="28" cy="82" rx="6" ry="4" fill={colors.body} />
        <ellipse cx="52" cy="82" rx="6" ry="4" fill={colors.body} />
        {/* Paw details */}
        <circle cx="26" cy="83" r="1" fill="#FFB6C1" />
        <circle cx="28" cy="84" r="1" fill="#FFB6C1" />
        <circle cx="30" cy="83" r="1" fill="#FFB6C1" />
        <circle cx="50" cy="83" r="1" fill="#FFB6C1" />
        <circle cx="52" cy="84" r="1" fill="#FFB6C1" />
        <circle cx="54" cy="83" r="1" fill="#FFB6C1" />
        
        {/* Tail */}
        <motion.path
          d="M 58 70 Q 75 65 78 50 Q 80 40 75 35"
          stroke={colors.body}
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
          animate={{
            d: [
              "M 58 70 Q 75 65 78 50 Q 80 40 75 35",
              "M 58 70 Q 70 60 75 45 Q 82 35 80 25",
              "M 58 70 Q 75 65 78 50 Q 80 40 75 35"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Hearts floating (happy effect) */}
        <motion.text
          x="65"
          y="20"
          fontSize="10"
          animate={{
            y: [20, 10, 20],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        >
          ❤️
        </motion.text>
        <motion.text
          x="5"
          y="25"
          fontSize="8"
          animate={{
            y: [25, 15, 25],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.8 }}
        >
          💕
        </motion.text>
        
        {/* Sparkles */}
        <motion.circle
          cx="70"
          cy="30"
          r="2"
          fill="#FFD700"
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
        <motion.path
          d="M 5 40 L 8 37 M 6 40 L 6 35"
          stroke="#FFD700"
          strokeWidth="2"
          animate={{
            opacity: [0, 1, 0]
          }}
          transition={{ duration: 1, repeat: Infinity, delay: 1 }}
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
        
        {/* Happy Cats */}
        <AnimatedCat style={{ left: '3%', top: '15%' }} delay={0.2} variant="orange" />
        <AnimatedCat style={{ right: '5%', top: '20%' }} delay={0.4} variant="gray" />
        <AnimatedCat style={{ left: '8%', bottom: '20%' }} delay={0.6} variant="calico" />
        <AnimatedCat style={{ right: '3%', bottom: '25%' }} delay={0.8} variant="black" />
        <AnimatedCat style={{ left: '15%', top: '40%' }} delay={1} variant="white" />

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
        <AnimatedCat style={{ right: '2%', top: '10%' }} delay={0.3} variant="orange" />
        
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
        <AnimatedCat style={{ left: '3%', bottom: '20%' }} delay={0.4} variant="gray" />
        
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
        
        <AnimatedCat style={{ right: '5%', top: '15%' }} delay={0.3} variant="calico" />
        <AnimatedCat style={{ left: '5%', bottom: '15%' }} delay={0.5} variant="black" />

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
