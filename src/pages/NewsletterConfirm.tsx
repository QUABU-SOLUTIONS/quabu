import { Layout } from "@/components/layout/Layout";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";

export default function NewsletterConfirm() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Invalid confirmation link.");
      return;
    }

    const confirm = async () => {
      try {
        const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
          body: { action: "confirm", token },
        });

        if (error) throw error;
        if (data?.error) {
          setStatus("error");
          setMessage(data.error);
        } else {
          setStatus("success");
          setMessage(data?.message || "Subscription confirmed!");
        }
      } catch {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    };

    confirm();
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
                <h1 className="text-2xl font-bold mb-2">Confirming your subscription...</h1>
              </>
            )}
            {status === "success" && (
              <>
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-2">You're subscribed! 🎉</h1>
                <p className="text-muted-foreground mb-6">{message}</p>
                <Button asChild>
                  <Link to="/blog">Back to Blog</Link>
                </Button>
              </>
            )}
            {status === "error" && (
              <>
                <XCircle className="w-16 h-16 text-destructive mx-auto mb-4" />
                <h1 className="text-2xl font-bold mb-2">Oops!</h1>
                <p className="text-muted-foreground mb-6">{message}</p>
                <Button asChild>
                  <Link to="/blog">Back to Blog</Link>
                </Button>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
