import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AcceleratorsSection } from "@/components/home/AcceleratorsSection";
import { AppsSection } from "@/components/home/AppsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        path="/"
        title="Quabu | Atlassian Gold Partner & Digital Accelerators"
        description="Quabu is an Atlassian Gold Solution Partner. We deliver Digital Accelerators — pre-built, customizable Atlassian solutions that transform how enterprises work."
      />
      <HeroSection />
      <StatsSection />
      <AcceleratorsSection />
      <AppsSection />
      <ServicesSection />
      <TrustSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
