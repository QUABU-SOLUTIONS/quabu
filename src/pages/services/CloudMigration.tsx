import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Server, 
  ArrowRight, 
  Shield, 
  Zap, 
  Users, 
  CheckCircle2, 
  Clock,
  Database,
  Lock,
  TrendingUp,
  Headphones,
  FileCheck,
  Settings,
  RefreshCw,
  CloudUpload
} from "lucide-react";
import atlassianIcon from "@/assets/atlassian-icon.png";
import goldPartner from "@/assets/atlassian-gold-partner.png";

// Animated floating clouds background
const AnimatedCloudsBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-background to-background" />
      
      {/* Animated clouds */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            top: `${10 + (i * 10) % 60}%`,
            left: `${-20 + (i * 15) % 100}%`,
          }}
          animate={{
            x: [0, 100, 0],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2,
          }}
        >
          <svg
            width={100 + i * 20}
            height={60 + i * 10}
            viewBox="0 0 100 60"
            fill="none"
            className="text-primary/10"
          >
            <ellipse cx="50" cy="40" rx="40" ry="15" fill="currentColor" />
            <ellipse cx="30" cy="30" rx="25" ry="20" fill="currentColor" />
            <ellipse cx="65" cy="28" rx="30" ry="22" fill="currentColor" />
            <ellipse cx="50" cy="25" rx="20" ry="15" fill="currentColor" />
          </svg>
        </motion.div>
      ))}
      
      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
        <defs>
          <pattern id="cloud-grid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#cloud-grid)" />
      </svg>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

// Migration flow animation
const MigrationFlowAnimation = () => {
  return (
    <div className="relative w-full max-w-md mx-auto h-32">
      {/* Server icon */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-muted rounded-xl flex items-center justify-center shadow-lg"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Server className="w-10 h-10 text-muted-foreground" />
      </motion.div>

      {/* Animated data packets */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary"
          initial={{ left: "20%", opacity: 0, scale: 0 }}
          animate={{
            left: ["20%", "80%"],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 0.6,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Arrow path */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 100">
        <motion.path
          d="M 80 50 L 320 50"
          stroke="currentColor"
          strokeWidth="2"
          strokeDasharray="8 4"
          fill="none"
          className="text-primary/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </svg>

      {/* Cloud icon */}
      <motion.div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-20 h-20 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/30"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      >
        <Cloud className="w-10 h-10 text-primary-foreground" />
      </motion.div>
    </div>
  );
};

// Animated illustration for sections
const CloudIllustration = ({ variant = "default" }: { variant?: "default" | "security" | "speed" }) => {
  const colors = {
    default: "text-primary",
    security: "text-green-500",
    speed: "text-orange-500",
  };

  return (
    <motion.div
      className="relative w-24 h-24"
      animate={{ y: [-5, 5, -5] }}
      transition={{ duration: 3, repeat: Infinity }}
    >
      <svg viewBox="0 0 100 100" className={`w-full h-full ${colors[variant]}`}>
        <motion.ellipse
          cx="50"
          cy="60"
          rx="35"
          ry="15"
          fill="currentColor"
          opacity="0.3"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.ellipse
          cx="30"
          cy="50"
          rx="22"
          ry="18"
          fill="currentColor"
          opacity="0.5"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        />
        <motion.ellipse
          cx="60"
          cy="48"
          rx="28"
          ry="20"
          fill="currentColor"
          opacity="0.7"
          animate={{ scale: [1, 1.04, 1] }}
          transition={{ duration: 2.2, repeat: Infinity }}
        />
        <ellipse cx="45" cy="45" rx="18" ry="14" fill="currentColor" />
        {variant === "security" && (
          <Shield className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
        )}
        {variant === "speed" && (
          <Zap className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-white" />
        )}
      </svg>
    </motion.div>
  );
};

const benefits = [
  {
    icon: Shield,
    title: "Maximum Security",
    description: "Enterprise-grade security with automatic backups, data encryption, and compliance certifications.",
  },
  {
    icon: TrendingUp,
    title: "Automatic Scalability",
    description: "Your infrastructure grows with your business without manual intervention or downtime.",
  },
  {
    icon: Zap,
    title: "Superior Performance",
    description: "Faster load times, optimized performance, and 99.9% guaranteed uptime.",
  },
  {
    icon: RefreshCw,
    title: "Automatic Updates",
    description: "Always stay on the latest version with automatic updates and zero maintenance.",
  },
  {
    icon: Lock,
    title: "Advanced Access Control",
    description: "Granular permissions, SSO integration, and advanced user management.",
  },
  {
    icon: Headphones,
    title: "Priority Support",
    description: "Access to premium Atlassian support with faster response times.",
  },
];

const migrationPhases = [
  {
    phase: "01",
    title: "Assessment & Planning",
    description: "Complete analysis of your current environment, data audit, and custom migration roadmap.",
    icon: FileCheck,
    duration: "1-2 weeks",
  },
  {
    phase: "02",
    title: "Environment Setup",
    description: "Cloud environment configuration, security settings, and integration preparation.",
    icon: Settings,
    duration: "1 week",
  },
  {
    phase: "03",
    title: "Data Migration",
    description: "Secure transfer of projects, users, workflows, and configurations with zero data loss.",
    icon: Database,
    duration: "2-4 weeks",
  },
  {
    phase: "04",
    title: "Testing & Validation",
    description: "Comprehensive testing of all functionalities, integrations, and user acceptance.",
    icon: CheckCircle2,
    duration: "1 week",
  },
  {
    phase: "05",
    title: "Go-Live & Support",
    description: "Final migration, user training, and dedicated post-migration support.",
    icon: CloudUpload,
    duration: "Ongoing",
  },
];

const products = [
  { name: "Jira Software", description: "Agile project management" },
  { name: "Jira Service Management", description: "IT service desk" },
  { name: "Confluence", description: "Team collaboration" },
  { name: "Jira Work Management", description: "Business projects" },
  { name: "Bitbucket", description: "Code repository" },
  { name: "Opsgenie", description: "Incident management" },
];

export default function CloudMigration() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <AnimatedCloudsBackground />
        
        <div className="container relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={atlassianIcon} alt="Atlassian" className="h-10" />
                <span className="text-sm font-medium px-3 py-1 bg-primary/10 rounded-full text-primary">
                  Cloud Migration Experts
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Migrate to{" "}
                <span className="text-primary">Atlassian Cloud</span>{" "}
                with Confidence
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-xl">
                Seamless migration of your Jira, Confluence, and Atlassian products 
                to the cloud. Zero downtime, zero data loss, maximum efficiency.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="group" asChild>
                  <Link to="/contact">
                    Start Your Migration
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/contact">
                    Free Assessment
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-6">
                <img src={goldPartner} alt="Atlassian Gold Partner" className="h-16" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground">Atlassian Gold Solution Partner</p>
                  <p>Certified Cloud Migration Specialists</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Hero illustration */}
              <div className="relative bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 border border-primary/20">
                <MigrationFlowAnimation />
                
                <div className="grid grid-cols-3 gap-4 mt-8">
                  {[
                    { label: "Migrations Completed", value: "80+" },
                    { label: "Uptime", value: "99.9%" },
                    { label: "Data Integrity", value: "100%" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-4 bg-background/80 rounded-xl"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <p className="text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating badges */}
              <motion.div
                className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <CheckCircle2 className="inline w-4 h-4 mr-1" />
                Zero Downtime
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Shield className="inline w-4 h-4 mr-1" />
                Data Protected
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Migrate Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full">
            <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Migrate to{" "}
              <span className="text-primary">Atlassian Cloud?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join thousands of organizations that have already made the move to a 
              more secure, scalable, and efficient cloud infrastructure.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                className="bg-background rounded-2xl p-6 shadow-lg border border-border hover:border-primary/30 transition-all hover:shadow-xl group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Process Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Migration Process</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven methodology that ensures a smooth transition with minimal 
              disruption to your teams.
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/30 to-primary/0 hidden lg:block" />

            <div className="space-y-12">
              {migrationPhases.map((phase, i) => (
                <motion.div
                  key={phase.phase}
                  className={`flex items-center gap-8 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className={`flex-1 ${i % 2 === 1 ? "lg:text-right" : ""}`}>
                    <div className={`bg-background rounded-2xl p-6 shadow-lg border border-border inline-block max-w-md ${i % 2 === 1 ? "lg:ml-auto" : ""}`}>
                      <div className={`flex items-center gap-4 mb-4 ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                          <phase.icon className="w-6 h-6 text-primary-foreground" />
                        </div>
                        <div>
                          <span className="text-sm text-primary font-medium">Phase {phase.phase}</span>
                          <h3 className="text-xl font-semibold">{phase.title}</h3>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-4">{phase.description}</p>
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground ${i % 2 === 1 ? "lg:justify-end" : ""}`}>
                        <Clock className="w-4 h-4" />
                        <span>{phase.duration}</span>
                      </div>
                    </div>
                  </div>

                  <motion.div
                    className="hidden lg:flex w-16 h-16 bg-primary/10 rounded-full items-center justify-center border-4 border-background shadow-lg"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <span className="text-2xl font-bold text-primary">{phase.phase}</span>
                  </motion.div>

                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products We Migrate */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        {/* Animated cloud shapes in background */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-5"
            style={{
              top: `${20 + i * 15}%`,
              right: `${-10 + i * 20}%`,
            }}
            animate={{
              x: [-20, 20, -20],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
            }}
          >
            <Cloud className="w-32 h-32 text-primary" />
          </motion.div>
        ))}

        <div className="container relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Products We <span className="text-primary">Migrate</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Full migration support for the complete Atlassian ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, i) => (
              <motion.div
                key={product.name}
                className="bg-background rounded-xl p-6 shadow-md border border-border hover:border-primary/30 transition-all group"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                    <img src={atlassianIcon} alt="" className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-semibold group-hover:text-primary transition-colors">{product.name}</h3>
                    <p className="text-sm text-muted-foreground">{product.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Quabu Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose <span className="text-primary">Quabu</span> for Your Migration?
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Users,
                    title: "Expert Team",
                    description: "Certified Atlassian specialists with hundreds of successful migrations.",
                  },
                  {
                    icon: Shield,
                    title: "Risk-Free Process",
                    description: "Comprehensive testing and rollback plans ensure zero data loss.",
                  },
                  {
                    icon: Clock,
                    title: "Minimal Downtime",
                    description: "Strategic migration planning to minimize impact on your operations.",
                  },
                  {
                    icon: Headphones,
                    title: "Ongoing Support",
                    description: "Post-migration support and training to ensure smooth adoption.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 border border-primary/20">
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: "500+", label: "Migrations Completed" },
                    { value: "50+", label: "Enterprise Clients" },
                    { value: "100%", label: "Data Integrity" },
                    { value: "24/7", label: "Support Available" },
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      className="text-center p-6 bg-background/80 rounded-xl"
                      animate={{ y: i % 2 === 0 ? [-5, 5, -5] : [5, -5, 5] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Decorative clouds */}
              <motion.div
                className="absolute -top-6 -right-6"
                animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <CloudIllustration variant="default" />
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6"
                animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <CloudIllustration variant="security" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [-20, 20, -20],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <Cloud className="w-20 h-20 text-primary-foreground" />
            </motion.div>
          ))}
        </div>

        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Get a free migration assessment and discover how we can help you 
              transition smoothly to Atlassian Cloud.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/contact">
                  Schedule Free Assessment
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="mailto:hello@quabusolutions.com">
                  Contact Sales
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
