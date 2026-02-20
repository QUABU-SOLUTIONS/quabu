import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  Code,
  Smartphone,
  Globe,
  TestTube,
  Bug,
  Activity,
  GitBranch,
  CheckCircle,
  Layers,
  Cpu,
  Database,
  Terminal,
  ArrowRight,
  Sparkles,
  Zap,
  Shield,
  Rocket,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

// Animated Code Editor Illustration
function AnimatedCodeEditor({ style, delay = 0 }: { style?: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.svg
        width="120"
        height="90"
        viewBox="0 0 120 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Window frame */}
        <rect x="5" y="5" width="110" height="80" rx="8" fill="#1E293B" stroke="#3B82F6" strokeWidth="2" />
        
        {/* Window buttons */}
        <circle cx="18" cy="15" r="4" fill="#EF4444" />
        <circle cx="30" cy="15" r="4" fill="#F59E0B" />
        <circle cx="42" cy="15" r="4" fill="#10B981" />
        
        {/* Code lines */}
        <motion.rect
          x="15" y="28" width="50" height="4" rx="2" fill="#60A5FA"
          animate={{ width: [50, 60, 50] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="25" y="38" width="40" height="4" rx="2" fill="#A78BFA"
          animate={{ width: [40, 55, 40] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
        />
        <motion.rect
          x="25" y="48" width="60" height="4" rx="2" fill="#34D399"
          animate={{ width: [60, 45, 60] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.6 }}
        />
        <motion.rect
          x="15" y="58" width="35" height="4" rx="2" fill="#F472B6"
          animate={{ width: [35, 50, 35] }}
          transition={{ duration: 2.2, repeat: Infinity, delay: 0.9 }}
        />
        <motion.rect
          x="25" y="68" width="45" height="4" rx="2" fill="#FBBF24"
          animate={{ width: [45, 30, 45] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.2 }}
        />
        
        {/* Cursor blinking */}
        <motion.rect
          x="70" y="48" width="2" height="10" fill="#60A5FA"
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Animated Server/Database Illustration
function AnimatedServer({ style, delay = 0 }: { style?: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.svg
        width="80"
        height="100"
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Server rack */}
        <rect x="10" y="10" width="60" height="80" rx="6" fill="#1E293B" stroke="#10B981" strokeWidth="2" />
        
        {/* Server units */}
        {[0, 1, 2].map((i) => (
          <g key={i}>
            <rect x="16" y={20 + i * 25} width="48" height="18" rx="3" fill="#334155" />
            <motion.circle
              cx="26"
              cy={29 + i * 25}
              r="3"
              fill="#10B981"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1 + i * 0.3, repeat: Infinity }}
            />
            <motion.circle
              cx="36"
              cy={29 + i * 25}
              r="3"
              fill="#3B82F6"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 0.8 + i * 0.2, repeat: Infinity }}
            />
            <rect x="44" y={26 + i * 25} width="16" height="6" rx="1" fill="#475569" />
          </g>
        ))}
        
        {/* Activity lines */}
        <motion.path
          d="M 75 30 Q 85 40 75 50 Q 65 60 75 70"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          strokeDasharray="5 3"
          animate={{ strokeDashoffset: [0, -20] }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Animated Mobile Phone Illustration
function AnimatedMobile({ style, delay = 0 }: { style?: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, rotate: -10 }}
      animate={{ opacity: 1, rotate: 0 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.svg
        width="60"
        height="100"
        viewBox="0 0 60 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Phone frame */}
        <rect x="5" y="5" width="50" height="90" rx="10" fill="#1E293B" stroke="#8B5CF6" strokeWidth="2" />
        
        {/* Screen */}
        <rect x="10" y="15" width="40" height="65" rx="4" fill="#0F172A" />
        
        {/* App icons */}
        <motion.rect
          x="15" y="22" width="12" height="12" rx="3" fill="#3B82F6"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.rect
          x="33" y="22" width="12" height="12" rx="3" fill="#10B981"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
        />
        <motion.rect
          x="15" y="40" width="12" height="12" rx="3" fill="#F59E0B"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
        />
        <motion.rect
          x="33" y="40" width="12" height="12" rx="3" fill="#EC4899"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
        />
        
        {/* Navigation bar */}
        <rect x="15" y="60" width="30" height="4" rx="2" fill="#475569" />
        <rect x="20" y="68" width="20" height="4" rx="2" fill="#475569" />
        
        {/* Home button */}
        <circle cx="30" cy="87" r="5" stroke="#475569" strokeWidth="2" fill="none" />
        
        {/* Notification */}
        <motion.circle
          cx="48" cy="12"
          r="5"
          fill="#EF4444"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Animated Bug/Testing Illustration
function AnimatedTestTube({ style, delay = 0 }: { style?: React.CSSProperties; delay?: number }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      <motion.svg
        width="70"
        height="90"
        viewBox="0 0 70 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ rotate: [-5, 5, -5] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Test tube */}
        <path
          d="M 25 10 L 25 60 Q 25 80 35 80 Q 45 80 45 60 L 45 10"
          fill="#0EA5E9"
          fillOpacity="0.3"
          stroke="#0EA5E9"
          strokeWidth="3"
        />
        
        {/* Liquid */}
        <motion.path
          d="M 27 45 L 27 60 Q 27 75 35 75 Q 43 75 43 60 L 43 45"
          fill="#10B981"
          animate={{ 
            d: [
              "M 27 45 L 27 60 Q 27 75 35 75 Q 43 75 43 60 L 43 45",
              "M 27 40 L 27 60 Q 27 75 35 75 Q 43 75 43 60 L 43 40",
              "M 27 45 L 27 60 Q 27 75 35 75 Q 43 75 43 60 L 43 45"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Bubbles */}
        <motion.circle
          cx="32" cy="55"
          r="3"
          fill="white"
          fillOpacity="0.6"
          animate={{ y: [0, -20], opacity: [0.6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.circle
          cx="38" cy="60"
          r="2"
          fill="white"
          fillOpacity="0.6"
          animate={{ y: [0, -25], opacity: [0.6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, delay: 0.5 }}
        />
        
        {/* Top cap */}
        <rect x="22" y="5" width="26" height="8" rx="3" fill="#334155" />
        
        {/* Checkmark (success) */}
        <motion.path
          d="M 50 40 L 55 45 L 65 30"
          stroke="#10B981"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Floating Code Elements
function FloatingCodeElements() {
  const codeSnippets = ["</>", "{}", "[]", "=>", "&&", "||", "++", "==", "!!", "??"];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeSnippets.map((code, i) => (
        <motion.div
          key={i}
          className="absolute font-mono text-xl font-bold text-primary/20"
          style={{
            left: `${5 + (i * 10) % 90}%`,
            top: `${10 + (i * 8) % 80}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {code}
        </motion.div>
      ))}
    </div>
  );
}

// Animated Circuit Background
function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="devCircuit" width="80" height="80" patternUnits="userSpaceOnUse">
            <path 
              d="M 0 40 L 20 40 L 30 30 L 50 30 L 60 40 L 80 40 M 40 0 L 40 20 L 30 30 M 40 80 L 40 60 L 50 50" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="1"
              className="text-primary"
            />
            <circle cx="30" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="50" cy="30" r="4" fill="currentColor" className="text-primary" />
            <circle cx="40" cy="50" r="3" fill="currentColor" className="text-accent" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#devCircuit)" />
      </svg>
      
      {/* Animated data streams */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          style={{
            height: `${100 + i * 30}px`,
            left: `${10 + i * 12}%`,
            top: '-100px',
          }}
          animate={{
            y: [0, 800],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

const devServicesMeta = [
  { number: "01", icon: Globe, key: "web", color: "from-blue-500 to-cyan-500" },
  { number: "02", icon: Smartphone, key: "mobile", color: "from-violet-500 to-purple-500" },
  { number: "03", icon: Layers, key: "custom", color: "from-emerald-500 to-green-500" },
  { number: "04", icon: Database, key: "backend", color: "from-orange-500 to-amber-500" },
];

const qaServicesMeta = [
  { icon: TestTube, key: "testing" },
  { icon: Bug, key: "bugs" },
  { icon: Activity, key: "monitoring" },
  { icon: GitBranch, key: "codeManagement" },
  { icon: CheckCircle, key: "quality" },
  { icon: Cpu, key: "automated" },
];

const whyItemsMeta = [
  { icon: Sparkles, key: "custom" },
  { icon: Rocket, key: "fast" },
  { icon: Users, key: "team" },
  { icon: Shield, key: "quality" },
];

const techStack = [
  { name: "React", color: "#61DAFB" }, { name: "TypeScript", color: "#3178C6" }, { name: "Node.js", color: "#339933" },
  { name: "Next.js", color: "#000000" }, { name: "React Native", color: "#61DAFB" }, { name: "GraphQL", color: "#E10098" },
  { name: "PostgreSQL", color: "#4169E1" }, { name: "AWS", color: "#FF9900" },
];

const containerVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

export default function CustomDevelopment() {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center section-padding overflow-hidden bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800">
        <CircuitBackground />
        <FloatingCodeElements />
        
        {/* Animated Tech Illustrations */}
        <AnimatedCodeEditor style={{ left: '3%', top: '15%' }} delay={0.2} />
        <AnimatedServer style={{ right: '5%', top: '20%' }} delay={0.4} />
        <AnimatedMobile style={{ left: '8%', bottom: '15%' }} delay={0.6} />
        <AnimatedTestTube style={{ right: '8%', bottom: '20%' }} delay={0.8} />
        <AnimatedCodeEditor style={{ right: '15%', top: '50%' }} delay={1} />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[120px]"
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
            {/* React badge */}
            <motion.div
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#61DAFB">
                  <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"/>
                  <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 21c-4.97 0-9-2.686-9-6s4.03-6 9-6 9 2.686 9 6-4.03 6-9 6Z"/>
                  <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 21c2.485 0 4.5-4.03 4.5-9s-2.015-9-4.5-9-4.5 4.03-4.5 9 2.015 9 4.5 9Z" transform="rotate(60 12 12)"/>
                  <path fill="none" stroke="#61DAFB" strokeWidth="1" d="M12 21c2.485 0 4.5-4.03 4.5-9s-2.015-9-4.5-9-4.5 4.03-4.5 9 2.015 9 4.5 9Z" transform="rotate(-60 12 12)"/>
                </svg>
              </motion.div>
              <span className="text-sm font-medium">{t("customDevelopment.badge")}</span>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("customDevelopment.title")}{" "}
              <span className="text-cyan-300">{t("customDevelopment.titleHighlight")}</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("customDevelopment.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button size="lg" className="bg-white text-violet-700 hover:bg-white/90">
                {t("customDevelopment.getCustomSolution")}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button size="lg" asChild className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white border" variant="outline">
                <a href="https://marketplace.atlassian.com/vendors/1220154/quabu" target="_blank" rel="noopener noreferrer">
                  {t("customDevelopment.viewWork")}
                </a>
              </Button>
            </motion.div>

            {/* Tech Stack Preview */}
            <motion.div
              className="mt-12 pt-8 border-t border-white/20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-sm text-white/50 mb-4">{t("customDevelopment.technologiesLabel")}</p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                {techStack.slice(0, 6).map((tech, i) => (
                  <motion.div
                    key={tech.name}
                    className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 + i * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    {tech.name}
                  </motion.div>
                ))}
              </div>
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

      {/* Development Services Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <AnimatedServer style={{ right: '2%', top: '5%' }} delay={0.3} />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Code className="w-4 h-4" />
              {t("customDevelopment.devServicesLabel")}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("customDevelopment.devServicesTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("customDevelopment.devServicesSubtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8"
          >
            {devServicesMeta.map((service) => (
              <motion.div
                key={service.key}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all"
              >
                <div className="flex flex-col md:flex-row h-full">
                  {/* Number & Icon Side */}
                  <div className={`md:w-1/3 bg-gradient-to-br ${service.color} p-6 flex flex-col items-center justify-center relative overflow-hidden`}>
                    {/* Animated circles */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute rounded-full border border-white/20"
                        style={{
                          width: `${60 + i * 30}px`,
                          height: `${60 + i * 30}px`,
                        }}
                        animate={{
                          rotate: i % 2 === 0 ? 360 : -360,
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          rotate: { duration: 15 + i * 5, repeat: Infinity, ease: "linear" },
                          scale: { duration: 3, repeat: Infinity },
                        }}
                      />
                    ))}
                    
                    <span className="text-4xl font-bold text-white/30 mb-2 relative z-10">
                      {service.number}
                    </span>
                    <motion.div
                      className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center relative z-10"
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <service.icon className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                  
                  {/* Content Side */}
                  <div className="md:w-2/3 p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {t(`customDevelopment.devServices.${service.key}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`customDevelopment.devServices.${service.key}.desc`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* QA & Testing Section */}
      <section className="section-padding relative overflow-hidden">
        <CircuitBackground />
        <AnimatedTestTube style={{ left: '3%', top: '10%' }} delay={0.4} />
        
        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-600 text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              {t("customDevelopment.qaLabel")}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("customDevelopment.qaTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("customDevelopment.qaSubtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {qaServicesMeta.map((service) => (
              <motion.div
                key={service.key}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group bg-card rounded-xl p-6 border border-border hover:border-emerald-500/50 transition-all"
              >
                <motion.div
                  className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4"
                  whileHover={{ rotate: 5, scale: 1.1 }}
                >
                  <service.icon className="w-6 h-6 text-emerald-600" />
                </motion.div>
                <h3 className="font-bold mb-2 group-hover:text-emerald-600 transition-colors">
                  {t(`customDevelopment.qaServices.${service.key}.title`)}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {t(`customDevelopment.qaServices.${service.key}.desc`)}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="section-padding bg-gradient-to-br from-violet-600 via-purple-700 to-indigo-800 relative overflow-hidden">
        <FloatingCodeElements />
        
        <AnimatedCodeEditor style={{ right: '5%', top: '10%' }} delay={0.3} />
        <AnimatedMobile style={{ left: '5%', bottom: '10%' }} delay={0.5} />

        <div className="container-wide relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-4">
              <Terminal className="w-4 h-4" />
              {t("customDevelopment.techLabel")}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("customDevelopment.techTitle")}
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              {t("customDevelopment.techSubtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                variants={itemVariants}
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center"
                style={{ minWidth: '120px' }}
              >
                <motion.div
                  className="w-10 h-10 rounded-lg mx-auto mb-2 flex items-center justify-center"
                  style={{ backgroundColor: `${tech.color}20` }}
                  whileHover={{ rotate: 10 }}
                >
                  <Code className="w-5 h-5" style={{ color: tech.color }} />
                </motion.div>
                <span className="font-medium text-sm">{tech.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("customDevelopment.whyTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("customDevelopment.whySubtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whyItemsMeta.map((item) => (
              <motion.div
                key={item.key}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all text-center"
              >
                <motion.div
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 10 }}
                >
                  <item.icon className="w-7 h-7 text-white" />
                </motion.div>
                <h3 className="font-bold mb-2">{t(`customDevelopment.whyItems.${item.key}.title`)}</h3>
                <p className="text-sm text-muted-foreground">{t(`customDevelopment.whyItems.${item.key}.desc`)}</p>
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
