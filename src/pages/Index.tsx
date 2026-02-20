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
        title="Quabu | Atlassian Gold Solution Partner | Digital Accelerators"
        description="Quabu is an Atlassian Gold Solution Partner. We deliver Digital Accelerators — pre-built, customizable Atlassian solutions that transform how enterprises work."
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Quabu",
          url: "https://www.quabusolutions.com",
          logo: "https://www.quabusolutions.com/favicon.png",
          description: "Atlassian Gold Solution Partner offering Digital Accelerators and custom Atlassian solutions.",
          address: { "@type": "PostalAddress", addressCountry: "ES" },
          sameAs: ["https://marketplace.atlassian.com/vendors/1220154/quabu"],
          contactPoint: { "@type": "ContactPoint", email: "hello@quabusolutions.com", contactType: "customer support" },
        }}
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
