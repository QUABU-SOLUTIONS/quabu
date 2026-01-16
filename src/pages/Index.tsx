import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { AcceleratorsSection } from "@/components/home/AcceleratorsSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { TrustSection } from "@/components/home/TrustSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <TrustSection />
      <AcceleratorsSection />
      <ServicesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
