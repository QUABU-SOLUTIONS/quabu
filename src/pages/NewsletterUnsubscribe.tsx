import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export default function NewsletterUnsubscribe() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      return;
    }

    const unsubscribe = async () => {
      try {
        const { error } = await supabase
          .from("newsletter_subscribers" as any)
          .delete()
          .eq("unsubscribe_token", token);

        if (error) throw error;
        setStatus("success");
      } catch {
        setStatus("error");
      }
    };

    unsubscribe();
  }, [token]);

  return (
    <Layout>
      <section className="py-32 min-h-[60vh] flex items-center">
        <div className="container">
          <motion.div
            className="max-w-md mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {status === "loading" && (
              <>
                <Loader2 className="w-16 h-16 text-primary mx-auto mb-4 animate-spin" />
                <h1 className="text-2xl font-bold mb-2">Processing...</h1>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-2">Unsubscribed</h1>
                <p className="text-muted-foreground mb-6">You've been removed from our newsletter.</p>
                <Button asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
              </>
            )}
            {status === "error" && (
              <>
                <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-2">Something went wrong</h1>
                <p className="text-muted-foreground mb-6">Invalid or expired link.</p>
                <Button asChild>
                  <Link to="/">Back to Home</Link>
                </Button>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
