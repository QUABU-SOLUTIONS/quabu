import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "@/components/ScrollToTop";
import { CookieConsent } from "@/components/CookieConsent";
import Index from "./pages/Index";
import Accelerators from "./pages/Accelerators";
import MarketingAccelerator from "./pages/accelerators/Marketing";
import SalesAccelerator from "./pages/accelerators/Sales";
import HRAccelerator from "./pages/accelerators/HR";
import OperationsAccelerator from "./pages/accelerators/Operations";
import FinanceAccelerator from "./pages/accelerators/Finance";
import ITAccelerator from "./pages/accelerators/IT";
import CustomerServiceAccelerator from "./pages/accelerators/CustomerService";
import RDAccelerator from "./pages/accelerators/RD";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import AtlassianServices from "./pages/services/AtlassianServices";
import CustomDevelopment from "./pages/services/CustomDevelopment";
import CloudMigration from "./pages/services/CloudMigration";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import NotFound from "./pages/NotFound";
import NewsletterConfirm from "./pages/NewsletterConfirm";
import NewsletterUnsubscribe from "./pages/NewsletterUnsubscribe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/accelerators" element={<Accelerators />} />
          <Route path="/accelerators/marketing" element={<MarketingAccelerator />} />
          <Route path="/accelerators/sales" element={<SalesAccelerator />} />
          <Route path="/accelerators/hr" element={<HRAccelerator />} />
          <Route path="/accelerators/operations" element={<OperationsAccelerator />} />
          <Route path="/accelerators/finance" element={<FinanceAccelerator />} />
          <Route path="/accelerators/it" element={<ITAccelerator />} />
          <Route path="/accelerators/customer-service" element={<CustomerServiceAccelerator />} />
          <Route path="/accelerators/rd" element={<RDAccelerator />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/atlassian" element={<AtlassianServices />} />
          <Route path="/services/custom-development" element={<CustomDevelopment />} />
          <Route path="/services/cloud-migration" element={<CloudMigration />} />
          <Route path="/legal/privacy" element={<PrivacyPolicy />} />
          <Route path="/legal/terms" element={<TermsOfService />} />
          <Route path="/legal/cookies" element={<CookiesPolicy />} />
          <Route path="/newsletter/confirm" element={<NewsletterConfirm />} />
          <Route path="/newsletter/unsubscribe" element={<NewsletterUnsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieConsent />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
