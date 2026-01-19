import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base dark background */}
      <div className="absolute inset-0 bg-foreground" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary rounded-full blur-[100px]"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-accent rounded-full blur-[100px]"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/50 rounded-full blur-[80px]"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.1, 0.25, 0.1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />

      {/* Network grid lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="ctaLineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ctaLineGradientV" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Horizontal animated lines */}
        {[20, 40, 60, 80].map((y, i) => (
          <motion.line
            key={`h-${i}`}
            x1="0%"
            y1={`${y}%`}
            x2="100%"
            y2={`${y}%`}
            stroke="url(#ctaLineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: i * 0.2 }}
          />
        ))}
        
        {/* Vertical animated lines */}
        {[20, 40, 60, 80].map((x, i) => (
          <motion.line
            key={`v-${i}`}
            x1={`${x}%`}
            y1="0%"
            x2={`${x}%`}
            y2="100%"
            stroke="url(#ctaLineGradientV)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.5 + i * 0.2 }}
          />
        ))}

        {/* Traveling dots on horizontal lines */}
        {[20, 60].map((y, i) => (
          <motion.circle
            key={`dot-h-${i}`}
            r="4"
            fill="hsl(var(--primary))"
            animate={{
              cx: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 2,
              ease: "linear",
            }}
            cy={`${y}%`}
          />
        ))}
        
        {/* Traveling dots on vertical lines */}
        {[40, 80].map((x, i) => (
          <motion.circle
            key={`dot-v-${i}`}
            r="4"
            fill="hsl(var(--accent))"
            animate={{
              cy: ["0%", "100%"],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: 1 + i * 2,
              ease: "linear",
            }}
            cx={`${x}%`}
          />
        ))}

        {/* Node intersection glows */}
        {[
          { x: "20%", y: "20%" },
          { x: "40%", y: "40%" },
          { x: "60%", y: "60%" },
          { x: "80%", y: "80%" },
          { x: "40%", y: "20%" },
          { x: "60%", y: "40%" },
          { x: "20%", y: "60%" },
          { x: "80%", y: "40%" },
        ].map((pos, i) => (
          <motion.circle
            key={`node-${i}`}
            cx={pos.x}
            cy={pos.y}
            r="3"
            fill="white"
            animate={{
              r: [2, 5, 2],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-white/40"
          style={{
            left: `${5 + (i * 6.5) % 90}%`,
            top: `${10 + (i * 7) % 80}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, (i % 2 === 0 ? 10 : -10), 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + (i % 3),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2,
          }}
        />
      ))}

      {/* Central glow pulse */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}

export function CTASection() {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          {/* Animated Background */}
          <AnimatedBackground />

          {/* Content */}
          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24">
            <div className="max-w-3xl mx-auto text-center text-background">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6"
              >
                Ready to Accelerate Your Digital Transformation?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-background/80 mb-10"
              >
                Get a personalized demo of our Digital Accelerators and discover 
                how we can help you achieve your goals faster.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 text-base bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-white/20"
                    asChild
                  >
                    <Link to="/contact">
                      <Calendar className="w-5 h-5" />
                      Schedule a Demo
                    </Link>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 text-base bg-white text-foreground hover:bg-white/90 shadow-lg hover:shadow-white/20"
                    asChild
                  >
                    <Link to="/contact">
                      <MessageCircle className="w-5 h-5" />
                      Contact Sales
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* Quick Contact Info */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-12 pt-8 border-t border-background/20"
              >
                <p className="text-background/60 text-sm">
                  Or email us directly at{" "}
                  <a href="mailto:hello@quabusolutions.com" className="text-background underline hover:no-underline">
                    hello@quabusolutions.com
                  </a>
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
