import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle, 
  Building2,
  MessageSquare,
  Clock,
  ArrowRight
} from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

export default function Contact() {
  const { t } = useTranslation();

  const contactReasons = [
    { value: "demo", label: t("contact.subjects.demo") },
    { value: "consultation", label: t("contact.subjects.consultation") },
    { value: "accelerators", label: t("contact.subjects.accelerators") },
    { value: "cloud-migration", label: t("contact.subjects.cloudMigration") },
    { value: "partnership", label: t("contact.subjects.partnership") },
    { value: "other", label: t("contact.subjects.other") },
  ];
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate form data
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      setIsSuccess(true);
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error sending message",
        description: "Please try again or email us directly at hello@quabusolutions.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Layout>
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <div className="container-wide relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle className="w-10 h-10 text-primary" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                {t("contact.successTitle")}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                {t("contact.successMessage")}
              </p>
              <Button size="lg" asChild>
                <a href="/">
                  {t("contact.returnHome")}
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </motion.div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEO
        path="/contact"
        title="Contact Quabu | Get in Touch with Our Atlassian Experts"
        description="Have a question or ready to transform your Atlassian setup? Contact Quabu's experts for a free consultation on Jira, Confluence, and custom Atlassian solutions."
      />
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="container-wide relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {t("contact.title")}{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t("contact.titleHighlight")}
              </span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-3"
            >
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-lg">
                <h2 className="text-2xl font-bold mb-6">{t("contact.sendMessage")}</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                      <Label htmlFor="name">{t("contact.fullName")} *</Label>
                      <Input id="name" name="name" placeholder="John Doe" value={formData.name} onChange={handleChange} className={errors.name ? "border-destructive" : ""} />
                      {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contact.email")} *</Label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" value={formData.email} onChange={handleChange} className={errors.email ? "border-destructive" : ""} />
                      {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("contact.company")}</Label>
                      <Input id="company" name="company" placeholder="Your Company" value={formData.company} onChange={handleChange} className={errors.company ? "border-destructive" : ""} />
                      {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">{t("contact.subject")} *</Label>
                      <select id="subject" name="subject" value={formData.subject} onChange={handleChange} className={`flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${errors.subject ? "border-destructive" : "border-input"}`}>
                        <option value="">{t("contact.selectTopic")}</option>
                        {contactReasons.map(reason => (
                          <option key={reason.value} value={reason.label}>{reason.label}</option>
                        ))}
                      </select>
                      {errors.subject && <p className="text-sm text-destructive">{errors.subject}</p>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contact.message")} *</Label>
                    <Textarea id="message" name="message" placeholder="Tell us about your project or inquiry..." rows={6} value={formData.message} onChange={handleChange} className={errors.message ? "border-destructive" : ""} />
                    {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                  </div>
                  <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? <>{t("contact.sending")}</> : <>{t("contact.sendBtn")}<Send className="ml-2 w-5 h-5" /></>}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="lg:col-span-2 space-y-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">{t("contact.getInTouch")}</h3>
                <div className="space-y-6">
                  <a href="mailto:hello@quabusolutions.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium group-hover:text-primary transition-colors">{t("contact.emailUs")}</p>
                      <p className="text-muted-foreground">hello@quabusolutions.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.ourOffices")}</p>
                      <p className="text-muted-foreground">Miami, FL & Barcelona, Spain</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t("contact.responseTime")}</p>
                      <p className="text-muted-foreground">{t("contact.responseTimeValue")}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">{t("contact.whyWorkWithUs")}</h3>
                <ul className="space-y-4">
                  {[t("contact.benefit1"), t("contact.benefit2"), t("contact.benefit3"), t("contact.benefit4")].map((b, i) => (
                    <li key={i} className="flex items-center gap-3"><CheckCircle className="w-5 h-5 flex-shrink-0" /><span>{b}</span></li>
                  ))}
                </ul>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">{t("contact.quickActions")}</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/accelerators"><Building2 className="w-5 h-5 mr-3" />{t("contact.exploreAccelerators")}</a>
                  </Button>
                  <Button variant="outline" className="w-full justify-start" asChild>
                    <a href="/services/cloud-migration"><MessageSquare className="w-5 h-5 mr-3" />{t("contact.cloudMigrationInfo")}</a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
