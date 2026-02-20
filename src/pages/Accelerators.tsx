import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
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
  CheckCircle2,
  LucideIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

export default function Accelerators() {
  const { t } = useTranslation();

  const accelerators = [
    {
      id: "marketing", number: "01", icon: Megaphone,
      name: t("acceleratorsPage.accelerators.marketing.name"),
      description: t("acceleratorsPage.accelerators.marketing.desc"),
      features: (t("acceleratorsPage.accelerators.marketing.features", { returnObjects: true }) as string[]),
      color: "bg-pink-500/10 text-pink-600", gradientFrom: "from-pink-500", gradientTo: "to-rose-500", glowColor: "rgba(236, 72, 153, 0.4)", href: "/accelerators/marketing",
    },
    {
      id: "sales", number: "02", icon: TrendingUp,
      name: t("acceleratorsPage.accelerators.sales.name"),
      description: t("acceleratorsPage.accelerators.sales.desc"),
      features: (t("acceleratorsPage.accelerators.sales.features", { returnObjects: true }) as string[]),
      color: "bg-emerald-500/10 text-emerald-600", gradientFrom: "from-emerald-500", gradientTo: "to-green-500", glowColor: "rgba(16, 185, 129, 0.4)", href: "/accelerators/sales",
    },
    {
      id: "hr", number: "03", icon: Users,
      name: t("acceleratorsPage.accelerators.hr.name"),
      description: t("acceleratorsPage.accelerators.hr.desc"),
      features: (t("acceleratorsPage.accelerators.hr.features", { returnObjects: true }) as string[]),
      color: "bg-violet-500/10 text-violet-600", gradientFrom: "from-violet-500", gradientTo: "to-purple-500", glowColor: "rgba(139, 92, 246, 0.4)", href: "/accelerators/hr",
    },
    {
      id: "operations", number: "04", icon: Settings,
      name: t("acceleratorsPage.accelerators.operations.name"),
      description: t("acceleratorsPage.accelerators.operations.desc"),
      features: (t("acceleratorsPage.accelerators.operations.features", { returnObjects: true }) as string[]),
      color: "bg-orange-500/10 text-orange-600", gradientFrom: "from-orange-500", gradientTo: "to-amber-500", glowColor: "rgba(249, 115, 22, 0.4)", href: "/accelerators/operations",
    },
    {
      id: "finance", number: "05", icon: DollarSign,
      name: t("acceleratorsPage.accelerators.finance.name"),
      description: t("acceleratorsPage.accelerators.finance.desc"),
      features: (t("acceleratorsPage.accelerators.finance.features", { returnObjects: true }) as string[]),
      color: "bg-green-500/10 text-green-600", gradientFrom: "from-green-500", gradientTo: "to-teal-500", glowColor: "rgba(34, 197, 94, 0.4)", href: "/accelerators/finance",
    },
    {
      id: "it", number: "06", icon: Monitor,
      name: t("acceleratorsPage.accelerators.it.name"),
      description: t("acceleratorsPage.accelerators.it.desc"),
      features: (t("acceleratorsPage.accelerators.it.features", { returnObjects: true }) as string[]),
      color: "bg-blue-500/10 text-blue-600", gradientFrom: "from-blue-500", gradientTo: "to-cyan-500", glowColor: "rgba(59, 130, 246, 0.4)", href: "/accelerators/it",
    },
    {
      id: "customer-service", number: "07", icon: HeadphonesIcon,
      name: t("acceleratorsPage.accelerators.customerService.name"),
      description: t("acceleratorsPage.accelerators.customerService.desc"),
      features: (t("acceleratorsPage.accelerators.customerService.features", { returnObjects: true }) as string[]),
      color: "bg-cyan-500/10 text-cyan-600", gradientFrom: "from-cyan-500", gradientTo: "to-sky-500", glowColor: "rgba(6, 182, 212, 0.4)", href: "/accelerators/customer-service",
    },
    {
      id: "rd", number: "08", icon: Lightbulb,
      name: t("acceleratorsPage.accelerators.rd.name"),
      description: t("acceleratorsPage.accelerators.rd.desc"),
      features: (t("acceleratorsPage.accelerators.rd.features", { returnObjects: true }) as string[]),
      color: "bg-amber-500/10 text-amber-600", gradientFrom: "from-amber-500", gradientTo: "to-yellow-500", glowColor: "rgba(245, 158, 11, 0.4)", href: "/accelerators/rd",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
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

// Animated Icon Component with district0x style
function AnimatedIconDisplay({ 
  Icon, 
  gradientFrom, 
  gradientTo, 
  glowColor,
  number 
}: { 
  Icon: LucideIcon; 
  gradientFrom: string; 
  gradientTo: string; 
  glowColor: string;
  number: string;
}) {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center h-full">
      {/* Number with glow */}
      <motion.span 
        className="text-5xl md:text-6xl font-bold opacity-30 mb-2 block"
        animate={{
          textShadow: [
            `0 0 20px rgba(255,255,255,0.3)`,
            `0 0 40px rgba(255,255,255,0.5)`,
            `0 0 20px rgba(255,255,255,0.3)`,
          ],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {number}
      </motion.span>

      {/* Main icon container with multiple animated rings */}
      <div className="relative">
        {/* Outer rotating rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`ring-${i}`}
            className="absolute inset-0 rounded-full border border-white/20"
            style={{
              width: `${100 + i * 30}px`,
              height: `${100 + i * 30}px`,
              left: `${-15 - i * 15}px`,
              top: `${-15 - i * 15}px`,
            }}
            animate={{
              rotate: i % 2 === 0 ? 360 : -360,
              scale: [1, 1.05, 1],
            }}
            transition={{
              rotate: {
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}
          />
        ))}

        {/* Pulsing glow rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`glow-${i}`}
            className="absolute rounded-full bg-white/10"
            style={{
              width: `${70 + i * 20}px`,
              height: `${70 + i * 20}px`,
              left: `${-5 - i * 10}px`,
              top: `${-5 - i * 10}px`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Icon container with glass effect */}
        <motion.div
          className="relative w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 overflow-hidden"
          animate={{
            y: [0, -5, 0],
            boxShadow: [
              `0 0 30px ${glowColor}`,
              `0 0 50px ${glowColor}`,
              `0 0 30px ${glowColor}`,
            ],
          }}
          transition={{
            y: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{ 
            scale: 1.15, 
            rotate: 10,
            boxShadow: `0 0 60px ${glowColor}`,
          }}
        >
          {/* Inner gradient shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: [-100, 100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Icon with subtle animation */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-10 h-10 relative z-10" />
          </motion.div>
        </motion.div>

        {/* Orbiting particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-white"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [
                Math.cos((i * 60 * Math.PI) / 180) * 50,
                Math.cos(((i * 60 + 360) * Math.PI) / 180) * 50,
              ],
              y: [
                Math.sin((i * 60 * Math.PI) / 180) * 50,
                Math.sin(((i * 60 + 360) * Math.PI) / 180) * 50,
              ],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.3,
            }}
          />
        ))}

        {/* Spark effects */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`spark-${i}`}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, Math.cos((i * 45 * Math.PI) / 180) * 70],
              y: [0, Math.sin((i * 45 * Math.PI) / 180) * 70],
              opacity: [1, 0],
              scale: [1, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.h3 
        className="text-xl md:text-2xl font-bold mt-6"
        animate={{
          textShadow: [
            `0 0 10px rgba(255,255,255,0.2)`,
            `0 0 20px rgba(255,255,255,0.4)`,
            `0 0 10px rgba(255,255,255,0.2)`,
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        DIGITAL ACCELERATOR
      </motion.h3>
    </div>
  );
}

// Animated background for each card
function AnimatedCardBackground({ gradientFrom, gradientTo, glowColor }: { gradientFrom: string; gradientTo: string; glowColor: string }) {
  return (
    <>
      {/* Hexagon pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="hexPattern" width="30" height="26" patternUnits="userSpaceOnUse">
            <polygon 
              points="15,0 30,7.5 30,22.5 15,30 0,22.5 0,7.5" 
              fill="none" 
              stroke="white" 
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexPattern)" />
      </svg>

      {/* Animated gradient waves */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 30% 70%, ${glowColor}, transparent 50%)`,
        }}
        animate={{
          opacity: [0.2, 0.4, 0.2],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at 70% 30%, ${glowColor}, transparent 50%)`,
        }}
        animate={{
          opacity: [0.3, 0.1, 0.3],
          scale: [1.1, 1, 1.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating circles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 border border-white/20 rounded-full"
          style={{
            left: `${-20 + (i * 25) % 100}%`,
            top: `${-10 + (i * 30) % 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 6 + i,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Scanning line effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent h-[2px]"
        animate={{
          top: ['-10%', '110%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </>
  );
}


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
              {t("acceleratorsPage.badge")}
            </motion.span>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {t("acceleratorsPage.title")}{" "}
              <span className="text-gradient">{t("acceleratorsPage.titleHighlight")}</span>
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t("acceleratorsPage.subtitle")}
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
                  {/* Gradient Side with Enhanced Animations */}
                  <div className={`relative md:w-2/5 min-h-[280px] md:min-h-[350px] bg-gradient-to-br ${accelerator.gradientFrom} ${accelerator.gradientTo} p-8 flex flex-col justify-center items-center text-white overflow-hidden`}>
                    <AnimatedCardBackground 
                      gradientFrom={accelerator.gradientFrom} 
                      gradientTo={accelerator.gradientTo}
                      glowColor={accelerator.glowColor}
                    />
                    <AnimatedIconDisplay 
                      Icon={accelerator.icon}
                      gradientFrom={accelerator.gradientFrom}
                      gradientTo={accelerator.gradientTo}
                      glowColor={accelerator.glowColor}
                      number={accelerator.number}
                    />
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
                        {t("acceleratorsPage.learnMoreAbout")} {accelerator.name}
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
