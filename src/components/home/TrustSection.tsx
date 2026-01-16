import { motion } from "framer-motion";
import quabuIcon from "@/assets/quabu-icon.png";
import atlassianIcon from "@/assets/atlassian-icon.png";

const clientLogos = [
  "Enterprise Corp",
  "Tech Giants Inc",
  "Global Solutions",
  "Innovation Labs",
  "Digital Systems",
  "Cloud Partners",
];

export function TrustSection() {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary/20 to-background">
      <div className="container-wide">
        {/* Partner Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">
            Trusted by leading companies across industries
          </p>

          {/* Logo Placeholder Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-6 py-3 rounded-lg bg-muted/50 text-muted-foreground font-medium text-sm"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Atlassian Partnership Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl gradient-primary p-8 md:p-12 text-white text-center overflow-hidden"
        >
          {/* Animated glowing background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Central sun/glow effect */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.1) 30%, transparent 70%)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Secondary glow ring */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
              style={{
                background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 60%)",
              }}
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
            {/* Animated rays */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 h-[2px] w-[300px] origin-left"
                style={{
                  background: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, transparent 100%)",
                  transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
                }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scaleX: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
              />
            ))}
            {/* Floating particles */}
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-2 h-2 rounded-full bg-white/30"
                style={{
                  left: `${10 + (i * 7) % 80}%`,
                  top: `${20 + (i * 11) % 60}%`,
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
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-6">
                <motion.div 
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white/20 flex items-center justify-center p-4 backdrop-blur-sm"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -3, 0, 3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={quabuIcon} alt="Quabu" className="w-full h-full object-contain" />
                </motion.div>
                <motion.span 
                  className="text-3xl md:text-4xl font-bold"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                >
                  ×
                </motion.span>
                <motion.div 
                  className="w-24 h-24 md:w-28 md:h-28 rounded-2xl bg-white flex items-center justify-center p-4"
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, 3, 0, -3, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.3
                  }}
                  whileHover={{ scale: 1.1 }}
                >
                  <img src={atlassianIcon} alt="Atlassian" className="w-full h-full object-contain" />
                </motion.div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Atlassian Gold Solution Partner
            </h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              As a certified Atlassian Gold Partner, we bring expertise, proven methodologies, 
              and direct access to Atlassian resources to every engagement.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
