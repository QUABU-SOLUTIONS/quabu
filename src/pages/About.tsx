import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";
import { 
  Target, 
  Eye, 
  Heart,
  Lightbulb,
  RefreshCw,
  GraduationCap,
  Zap,
  Leaf,
  ArrowRight,
  Mail,
  Phone,
  Coffee,
  Users,
  Briefcase
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";
import { Button } from "@/components/ui/button";

// Animated Robot Character
function AnimatedRobot({ 
  style, 
  delay = 0,
  variant = "friendly"
}: { 
  style?: React.CSSProperties; 
  delay?: number;
  variant?: "friendly" | "helper" | "thinker" | "wave";
}) {
  const robotColors = {
    friendly: { body: "#3B82F6", accent: "#60A5FA", eye: "#1E40AF" },
    helper: { body: "#10B981", accent: "#34D399", eye: "#065F46" },
    thinker: { body: "#8B5CF6", accent: "#A78BFA", eye: "#5B21B6" },
    wave: { body: "#F59E0B", accent: "#FBBF24", eye: "#B45309" },
  };

  const colors = robotColors[variant];

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={style}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
    >
      <motion.svg
        width="80"
        height="100"
        viewBox="0 0 80 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3 + delay, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Antenna */}
        <motion.circle
          cx="40"
          cy="8"
          r="6"
          fill={colors.accent}
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <line x1="40" y1="14" x2="40" y2="25" stroke={colors.body} strokeWidth="3" />
        
        {/* Head */}
        <motion.rect
          x="15"
          y="25"
          width="50"
          height="35"
          rx="8"
          fill={colors.body}
          animate={{ 
            rotate: variant === "thinker" ? [-2, 2, -2] : [0, 0, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Eyes */}
        <motion.circle
          cx="30"
          cy="42"
          r="7"
          fill="white"
        />
        <motion.circle
          cx="50"
          cy="42"
          r="7"
          fill="white"
        />
        <motion.circle
          cx="30"
          cy="42"
          r="4"
          fill={colors.eye}
          animate={{ 
            x: variant === "wave" ? [0, 2, 0] : [0, 1, 0, -1, 0],
            y: [0, -1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.circle
          cx="50"
          cy="42"
          r="4"
          fill={colors.eye}
          animate={{ 
            x: variant === "wave" ? [0, 2, 0] : [0, 1, 0, -1, 0],
            y: [0, -1, 0]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Mouth */}
        <motion.path
          d={variant === "friendly" || variant === "wave" 
            ? "M 28 52 Q 40 60 52 52" 
            : variant === "thinker" 
            ? "M 35 54 L 45 54"
            : "M 30 52 Q 40 58 50 52"}
          stroke={colors.eye}
          strokeWidth="2"
          fill="none"
          animate={{ 
            d: variant === "wave" 
              ? ["M 28 52 Q 40 60 52 52", "M 28 50 Q 40 62 52 50", "M 28 52 Q 40 60 52 52"]
              : undefined
          }}
          transition={{ duration: 1, repeat: Infinity }}
        />
        
        {/* Body */}
        <rect x="20" y="62" width="40" height="30" rx="5" fill={colors.body} />
        <motion.rect
          x="28"
          y="70"
          width="24"
          height="14"
          rx="3"
          fill={colors.accent}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        {/* Arms */}
        <motion.rect
          x="5"
          y="65"
          width="12"
          height="20"
          rx="4"
          fill={colors.body}
          animate={{ 
            rotate: variant === "wave" ? [-20, 20, -20] : [-5, 5, -5]
          }}
          style={{ transformOrigin: "11px 65px" }}
          transition={{ duration: variant === "wave" ? 0.5 : 2, repeat: Infinity }}
        />
        <motion.rect
          x="63"
          y="65"
          width="12"
          height="20"
          rx="4"
          fill={colors.body}
          animate={{ 
            rotate: variant === "wave" ? [20, -20, 20] : [5, -5, 5]
          }}
          style={{ transformOrigin: "69px 65px" }}
          transition={{ duration: variant === "wave" ? 0.5 : 2, repeat: Infinity, delay: 0.25 }}
        />
      </motion.svg>
    </motion.div>
  );
}

// Floating tech elements
function FloatingTechElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating code brackets */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`bracket-${i}`}
          className="absolute text-primary/20 font-mono text-4xl font-bold"
          style={{
            left: `${10 + (i * 12) % 80}%`,
            top: `${15 + (i * 15) % 70}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          {i % 2 === 0 ? "<>" : "{}"}
        </motion.div>
      ))}

      {/* Floating circles/gears */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`gear-${i}`}
          className="absolute border-2 border-primary/10 rounded-full"
          style={{
            width: `${40 + i * 20}px`,
            height: `${40 + i * 20}px`,
            left: `${5 + (i * 18) % 90}%`,
            top: `${20 + (i * 12) % 60}%`,
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 3, repeat: Infinity },
          }}
        />
      ))}

      {/* Binary rain effect */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={`binary-${i}`}
          className="absolute text-primary/10 font-mono text-xs"
          style={{
            left: `${i * 10}%`,
            top: "-20px",
          }}
          animate={{
            y: [0, 500],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.8,
          }}
        >
          {Array(10).fill(0).map(() => Math.random() > 0.5 ? "1" : "0").join("")}
        </motion.div>
      ))}
    </div>
  );
}

// Animated background with circuit pattern
function CircuitBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
          <path 
            d="M 0 50 L 30 50 L 40 40 L 60 40 L 70 50 L 100 50 M 50 0 L 50 30 L 40 40 M 50 100 L 50 70 L 60 60" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="1"
            className="text-primary"
          />
          <circle cx="40" cy="40" r="3" fill="currentColor" className="text-primary" />
          <circle cx="60" cy="40" r="3" fill="currentColor" className="text-primary" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

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

export default function About() {
  const { t } = useTranslation();

  const values = [
    {
      number: "01",
      title: t("about.values.results.title"),
      description: t("about.values.results.desc"),
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: t("about.values.adaptability.title"),
      description: t("about.values.adaptability.desc"),
      icon: RefreshCw,
      color: "from-emerald-500 to-green-500",
    },
    {
      number: "03",
      title: t("about.values.learning.title"),
      description: t("about.values.learning.desc"),
      icon: GraduationCap,
      color: "from-violet-500 to-purple-500",
    },
    {
      number: "04",
      title: t("about.values.efficiency.title"),
      description: t("about.values.efficiency.desc"),
      icon: Zap,
      color: "from-orange-500 to-amber-500",
    },
    {
      number: "05",
      title: t("about.values.responsibility.title"),
      description: t("about.values.responsibility.desc"),
      icon: Leaf,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <Layout>
      <SEO
        path="/about"
        title="About Quabu | Atlassian Gold Partner | Our Story"
        description="Learn about Quabu — an Atlassian Gold Solution Partner with a team passionate about helping businesses unlock the full potential of the Atlassian ecosystem."
      />
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center section-padding overflow-hidden">
        <CircuitBackground />
        <FloatingTechElements />
        
        {/* Animated Robots */}
        <AnimatedRobot style={{ left: '5%', top: '20%' }} delay={0.2} variant="friendly" />
        <AnimatedRobot style={{ right: '8%', top: '15%' }} delay={0.4} variant="wave" />
        <AnimatedRobot style={{ left: '10%', bottom: '20%' }} delay={0.6} variant="helper" />
        <AnimatedRobot style={{ right: '5%', bottom: '25%' }} delay={0.8} variant="thinker" />

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.span
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Heart className="w-4 h-4" />
              {t("about.badge")}
            </motion.span>
            
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("about.title")}{" "}
              <span className="text-gradient">{t("about.titleHighlight")}</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("about.subtitle")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Purpose Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="container-wide">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {/* Mission */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Target className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{t("about.mission")}</h3>
                <p className="text-muted-foreground">{t("about.missionText")}</p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-violet-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Eye className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{t("about.vision")}</h3>
                <p className="text-muted-foreground">{t("about.visionText")}</p>
              </div>
            </motion.div>

            {/* Purpose */}
            <motion.div
              variants={itemVariants}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative z-10">
                <motion.div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-500 flex items-center justify-center mb-6"
                  whileHover={{ rotate: 5, scale: 1.05 }}
                >
                  <Lightbulb className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl font-bold mb-4">{t("about.purpose")}</h3>
                <p className="text-muted-foreground">{t("about.purposeText")}</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding relative overflow-hidden">
        <CircuitBackground />
        
        {/* More robots! */}
        <AnimatedRobot style={{ right: '3%', top: '10%' }} delay={0.3} variant="helper" />
        <AnimatedRobot style={{ left: '2%', bottom: '15%' }} delay={0.5} variant="wave" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {t("about.valuesTitle")}
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("about.valuesTitle")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("about.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                variants={itemVariants}
                className={`group relative flex flex-col md:flex-row items-center gap-8 p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Animated background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl`}
                />

                {/* Number & Icon */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.1 }}
                  >
                    {/* Glowing rings */}
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        className={`absolute rounded-full bg-gradient-to-r ${value.color} opacity-20`}
                        style={{
                          width: `${100 + i * 20}px`,
                          height: `${100 + i * 20}px`,
                          left: `${-10 - i * 10}px`,
                          top: `${-10 - i * 10}px`,
                        }}
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.1, 0.2, 0.1],
                        }}
                        transition={{
                          duration: 2 + i,
                          repeat: Infinity,
                          delay: i * 0.3,
                        }}
                      />
                    ))}
                    
                    <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center`}>
                      <value.icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <motion.span
                      className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-card border-2 border-border flex items-center justify-center text-xs font-bold"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {value.number}
                    </motion.span>
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`flex-1 text-center md:text-left ${index % 2 === 1 ? "md:text-right" : ""}`}>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-lg">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section - Hidden for now */}
      {/* <section className="section-padding bg-gradient-to-br from-primary to-accent relative overflow-hidden">
        <FloatingTechElements />
        
        <AnimatedRobot style={{ left: '5%', top: '10%' }} delay={0.2} variant="friendly" />
        <AnimatedRobot style={{ right: '5%', bottom: '10%' }} delay={0.4} variant="wave" />

        <div className="container-wide relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-4">
              <Users className="w-4 h-4" />
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              The Quabu Team
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Meet the talented people behind Quabu who make digital transformation possible
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
          >
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.05 }}
                className="group relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center hover:bg-white/20 transition-all">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4 text-xl font-bold"
                    whileHover={{ rotate: 10 }}
                  >
                    {member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </motion.div>
                  <h4 className="font-semibold mb-1">{member.name}</h4>
                  <p className="text-white/60 text-sm">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* Contact CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <CircuitBackground />
        
        <AnimatedRobot style={{ right: '10%', top: '20%' }} delay={0.3} variant="helper" />

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t("about.contactCta.title")}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("about.contactCta.subtitle")}
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 10 }}
              >
                <Briefcase className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{t("about.contactCta.solutions.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("about.contactCta.solutions.desc")}
              </p>
              <Button className="w-full group" asChild>
                <Link to="/contact">
                  {t("about.contactCta.solutions.btn")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 10 }}
              >
                <Users className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{t("about.contactCta.team.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("about.contactCta.team.desc")}
              </p>
              <Button variant="outline" className="w-full group" asChild>
                <a href="https://www.linkedin.com/company/quabu-solutions" target="_blank" rel="noopener noreferrer">
                  {t("about.contactCta.team.btn")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all text-center"
            >
              <motion.div
                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 flex items-center justify-center mx-auto mb-6"
                whileHover={{ rotate: 10 }}
              >
                <Coffee className="w-8 h-8 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-3">{t("about.contactCta.coffee.title")}</h3>
              <p className="text-muted-foreground mb-6">
                {t("about.contactCta.coffee.desc")}
              </p>
              <Button variant="outline" className="w-full group" asChild>
                <Link to="/contact">
                  {t("about.contactCta.coffee.btn")}
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
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
