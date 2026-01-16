import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
