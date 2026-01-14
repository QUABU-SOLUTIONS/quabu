import { motion } from "framer-motion";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
          {/* Background */}
          <div className="absolute inset-0 bg-foreground" />
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
          </div>

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
                <Button
                  size="lg"
                  className="gap-2 text-base bg-white text-foreground hover:bg-white/90"
                  asChild
                >
                  <Link to="/contact">
                    <Calendar className="w-5 h-5" />
                    Schedule a Demo
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 text-base border-background/30 text-background hover:bg-background/10"
                  asChild
                >
                  <Link to="/contact">
                    <MessageCircle className="w-5 h-5" />
                    Contact Sales
                  </Link>
                </Button>
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
                  <a href="mailto:hello@quabu.com" className="text-background underline hover:no-underline">
                    hello@quabu.com
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
