import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslation } from "react-i18next";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Zap, 
  Clock, 
  Target,
  LucideIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";
import { useRef } from "react";

export interface WorkflowItem {
  id: string;
  name: string;
  description?: string;
}

export interface AcceleratorConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  gradientFrom: string;
  gradientTo: string;
  workflows: WorkflowItem[];
  benefits: string[];
  stats: { value: string; label: string }[];
  prevAccelerator?: { name: string; href: string };
  nextAccelerator?: { name: string; href: string };
}

// Animated floating particles
function FloatingParticles({ color }: { color: string }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute w-1 h-1 rounded-full ${color}`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Animated hexagon grid background
function HexagonGrid() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hexagons" width="50" height="43.4" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
          <polygon 
            points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="0.5"
            className="text-primary"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hexagons)" />
    </svg>
  );
}

// Animated circuit lines
function CircuitLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
          style={{
            width: `${100 + Math.random() * 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${10 + i * 12}%`,
            rotate: `${Math.random() * 30 - 15}deg`,
          }}
          animate={{
            opacity: [0, 0.5, 0],
            x: [-100, 100],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Workflow card component with reveal animation
function WorkflowCard({ 
  workflow, 
  index, 
  gradientFrom, 
  gradientTo 
}: { 
  workflow: WorkflowItem; 
  index: number; 
  gradientFrom: string;
  gradientTo: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ 
        scale: 1.02, 
        y: -5,
        transition: { duration: 0.2 } 
      }}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-20`}
      />
      
      <div className="relative bg-card border border-border rounded-xl p-6 h-full overflow-hidden">
        {/* Animated corner accent */}
        <motion.div
          className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-10`}
          style={{
            clipPath: "polygon(100% 0, 0 0, 100% 100%)",
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: index * 0.1,
          }}
        />
        
        {/* Index number */}
        <div className="flex items-start justify-between mb-4">
          <span className={`text-xs font-mono px-2 py-1 rounded bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white`}>
            {workflow.id}
          </span>
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="w-6 h-6 border border-primary/20 rounded-full flex items-center justify-center"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
          </motion.div>
        </div>
        
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {workflow.name}
        </h3>
        
        {workflow.description && (
          <p className="text-sm text-muted-foreground">
            {workflow.description}
          </p>
        )}
        
        {/* Bottom line accent */}
        <motion.div
          className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${gradientFrom} ${gradientTo}`}
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 }}
        />
      </div>
    </motion.div>
  );
}

export default function AcceleratorPageTemplate({ config }: { config: AcceleratorConfig }) {
  const { t } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);
  
  const IconComponent = config.icon;

  return (
    <Layout>
      <div ref={containerRef}>
        {/* Hero Section */}
        <motion.section 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className={`relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo}`}
        >
          <HexagonGrid />
          <CircuitLines />
          <FloatingParticles color="bg-white" />
          
          {/* Animated orbs */}
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/10 blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-black/10 blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -40, 0],
              y: [0, 30, 0],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container-wide relative z-10 text-white">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
                <Link 
                to="/accelerators" 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                {t("acceleratorTemplate.allAccelerators")}
              </Link>
            </motion.div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <Zap className="w-4 h-4" />
                  <span className="text-sm font-medium">{t("acceleratorTemplate.digitalAccelerator")}</span>
                </motion.div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                  {config.name}
                </h1>
                
                <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
                  {config.tagline}
                </p>
                
                <p className="text-lg text-white/70 max-w-xl">
                  {config.description}
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6 mt-10">
                  {config.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="text-center"
                    >
                      <motion.div
                        className="text-3xl md:text-4xl font-bold mb-1"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.6 + i * 0.1, type: "spring" }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {/* Animated Icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden lg:flex justify-center items-center"
              >
                <div className="relative">
                  {/* Rotating rings */}
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute inset-0 border-2 border-white/20 rounded-full"
                      style={{
                        width: `${200 + i * 60}px`,
                        height: `${200 + i * 60}px`,
                        left: `${-i * 30}px`,
                        top: `${-i * 30}px`,
                      }}
                      animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                      transition={{
                        duration: 20 + i * 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  ))}
                  
                  {/* Center icon */}
                  <motion.div
                    className="relative w-40 h-40 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center border border-white/30"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <IconComponent className="w-20 h-20" />
                  </motion.div>
                  
                  {/* Orbiting dots */}
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 bg-white rounded-full"
                      style={{
                        left: "50%",
                        top: "50%",
                      }}
                      animate={{
                        x: [
                          Math.cos((i * 60 * Math.PI) / 180) * 120,
                          Math.cos(((i * 60 + 360) * Math.PI) / 180) * 120,
                        ],
                        y: [
                          Math.sin((i * 60 * Math.PI) / 180) * 120,
                          Math.sin(((i * 60 + 360) * Math.PI) / 180) * 120,
                        ],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </div>
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
        </motion.section>

        {/* Benefits Section */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          <div className="container-wide">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {t("acceleratorTemplate.keyBenefits")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("acceleratorTemplate.keyBenefitsSubtitle", { name: config.name })}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {config.benefits.map((benefit, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all"
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo} flex items-center justify-center mb-4`}
                    whileHover={{ rotate: 5 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-white" />
                  </motion.div>
                  <p className="font-medium">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflows Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <HexagonGrid />
          </div>
          
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                <Target className="w-4 h-4" />
                <span>{t("acceleratorTemplate.preBuiltWorkflows", { count: config.workflows.length })}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                {t("acceleratorTemplate.readyToDeploy")}
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t("acceleratorTemplate.readyToDeploySubtitle")}
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {config.workflows.map((workflow, i) => (
                <WorkflowCard
                  key={workflow.id}
                  workflow={workflow}
                  index={i}
                  gradientFrom={config.gradientFrom}
                  gradientTo={config.gradientTo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Implementation Timeline */}
        <section className={`section-padding relative overflow-hidden bg-gradient-to-br ${config.gradientFrom} ${config.gradientTo}`}>
          <FloatingParticles color="bg-white" />
          
          <div className="container-wide relative z-10 text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">Quick Implementation</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                From Installation to Production in Days
              </h2>
              <p className="text-white/70 max-w-2xl mx-auto">
                Our accelerators are designed for rapid deployment without compromising on quality or customization
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { day: "Day 1", title: "Installation", desc: "Deploy the accelerator in your environment" },
                { day: "Day 2-3", title: "Configuration", desc: "Customize workflows to your needs" },
                { day: "Day 4-5", title: "Integration", desc: "Connect with existing systems" },
                { day: "Day 6+", title: "Go Live", desc: "Start transforming your processes" },
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="relative"
                >
                  {i < 3 && (
                    <motion.div
                      className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-white/20"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.3, duration: 0.5 }}
                      style={{ transformOrigin: "left" }}
                    />
                  )}
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4 mx-auto md:mx-0"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <span className="text-2xl font-bold">{i + 1}</span>
                  </motion.div>
                  <div className="text-center md:text-left">
                    <span className="text-sm text-white/60">{step.day}</span>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-white/70 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation between accelerators */}
        <section className="section-padding border-t border-border">
          <div className="container-wide">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {config.prevAccelerator ? (
                <Link 
                  to={config.prevAccelerator.href}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <motion.div
                    whileHover={{ x: -5 }}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
                  >
                    <ArrowLeft className="w-5 h-5" />
                  </motion.div>
                  <div>
                    <span className="text-sm text-muted-foreground">{t("acceleratorTemplate.prevAccelerator")}</span>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {config.prevAccelerator.name}
                    </p>
                  </div>
                </Link>
              ) : <div />}
              
              {config.nextAccelerator && (
                <Link 
                  to={config.nextAccelerator.href}
                  className="group flex items-center gap-4 p-4 rounded-xl hover:bg-secondary/50 transition-colors"
                >
                  <div className="text-right">
                  <span className="text-sm text-muted-foreground">{t("acceleratorTemplate.nextAccelerator")}</span>
                    <p className="font-medium group-hover:text-primary transition-colors">
                      {config.nextAccelerator.name}
                    </p>
                  </div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </Link>
              )}
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <TrustSection />

        {/* CTA Section */}
        <CTASection />
      </div>
    </Layout>
  );
}
