import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsSection } from "@/components/home/StatsSection";
import { AcceleratorsSection } from "@/components/home/AcceleratorsSection";
import { AppsSection } from "@/components/home/AppsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
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
