import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Zap, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import quabuIcon from "@/assets/quabu-icon.png";
import atlassianGoldPartner from "@/assets/atlassian-gold-partner.png";
import atlassianMarketplacePartner from "@/assets/atlassian-marketplace-partner.png";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      {/* Quabu Icon Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <img
          src={quabuIcon}
          alt=""
          className="w-[500px] h-[500px] lg:w-[700px] lg:h-[700px] opacity-[0.04] object-contain"
        />
      </div>

      <div className="container-wide section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            {/* Partner Badges */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap items-center gap-4 mb-6 justify-center lg:justify-start"
            >
              <img src={atlassianGoldPartner} alt="Atlassian Gold Solution Partner" className="h-12 md:h-14 w-auto" />
              <img
                src={atlassianMarketplacePartner}
                alt="Atlassian Marketplace Partner"
                className="h-12 md:h-14 w-auto"
              />
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6 text-balance">
              Accelerate Your <span className="gradient-text">Digital Transformation</span> with Atlassian
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Pre-built, customizable solutions that get you from zero to production in weeks, not months. Built by
              Atlassian experts for growing enterprises.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="gap-2 text-base" asChild>
                <Link to="/accelerators">
                  Explore Accelerators
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base" asChild>
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>

            {/* Trust Signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-wrap gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Clock, text: "Deploy in Weeks" },
                { icon: Shield, text: "Enterprise Ready" },
                { icon: Zap, text: "100% Customizable" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-primary" />
                  <span>{item.text}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Card */}
              <div className="absolute inset-4 rounded-2xl gradient-primary shadow-glow animate-pulse-glow" />
              <div className="absolute inset-8 rounded-xl bg-card shadow-soft border border-border">
                <div className="p-6 h-full flex flex-col">
                  {/* Fake Dashboard Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                  </div>

                  {/* Quabu Icon Center */}
                  <div className="flex-1 flex items-center justify-center">
                    <img src={quabuIcon} alt="Quabu" className="w-24 h-24 md:w-64 md:h-64 opacity-90 drop-shadow-lg" />
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 p-3 rounded-xl bg-card shadow-soft border border-border"
              >
                <Sparkles className="w-6 h-6 text-accent" />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl bg-card shadow-soft border border-border"
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Deployed!</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
