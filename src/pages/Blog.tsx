import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { SEO } from "@/components/SEO";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  Tag, 
  TrendingUp, 
  Newspaper, 
  Award,
  BookOpen,
  Users,
  Sparkles
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

// Animated background with floating elements
const AnimatedBlogBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Floating document shapes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 10, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          <div className="w-8 h-10 border-2 border-primary/20 rounded-sm bg-primary/5" />
        </motion.div>
      ))}

      {/* Grid pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.02]">
        <defs>
          <pattern id="blog-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" className="text-primary" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blog-grid)" />
      </svg>
    </div>
  );
};

// Blog post data - titles/excerpts kept in English (editorial content)
const blogPostsMeta = [
  { id: "quabu-teamwork-collection-learning-camp-barcelona", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "September 2, 2026", readTime: "2 min", featured: true },
  { id: "jira-bro-reviews-visual-organizer-for-jira", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "September 1, 2026", readTime: "2 min", featured: true },
  { id: "visual-organizer-for-jira-cloud", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "August 31, 2026", readTime: "4 min", featured: true },
  { id: "can-atlassian-rovo-replace-jira-admin", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "August 28, 2026", readTime: "3 min", featured: true },
  { id: "ai-escalation-agent-jira-no-code", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "August 27, 2026", readTime: "3 min", featured: true },
  { id: "vibe-coding-atlassian-forge-rovo-studio", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "August 25, 2026", readTime: "3 min", featured: true },
  { id: "stop-triaging-jira-tickets-manually", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "August 24, 2026", readTime: "3 min", featured: true },
  { id: "atlassian-cloud-fundamentals-free", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "August 12, 2026", readTime: "4 min", featured: true },
  { id: "custom-templates-rising-star-badge", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "August 4, 2026", readTime: "3 min", featured: true },
  { id: "atlassian-devs-marketplace-webinar-recap", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "August 1, 2026", readTime: "5 min", featured: true },
  { id: "preview-atlassian-rovo-mcp-v2", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "July 31, 2026", readTime: "3 min", featured: true },
  { id: "new-webinar-atlassian-devs-stories", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "July 28, 2026", readTime: "2 min", featured: true },
  { id: "atlassian-certifications-designations-2026", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "July 6, 2026", readTime: "5 min", featured: true },
  { id: "custom-language-for-jira-cloud", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "June 10, 2026", readTime: "3 min", featured: true },
  { id: "backup-manager-deprecation-notice", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "June 2, 2026", readTime: "3 min", featured: true },
  { id: "custom-templates-for-jira-cloud", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "May 29, 2026", readTime: "3 min", featured: true },
  { id: "board-fields-for-jira-cloud", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "May 28, 2026", readTime: "3 min", featured: true },
  { id: "quabu-atlassian-first-division-partners", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "May 5, 2026", readTime: "2 min", featured: true },
  { id: "atlassian-lovable-ace-dublin-2026", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "April 28, 2026", readTime: "3 min", featured: true },
  { id: "quabu-startup-ole-miami", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "April 25, 2026", readTime: "2 min", featured: true },
  { id: "iso-27001-beyond-certification", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "April 20, 2026", readTime: "3 min", featured: true },
  { id: "quabu-ii-congres-clubs-natacio", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "April 12, 2026", readTime: "3 min", featured: true },
  { id: "atlassian-community-barcelona-2026", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "April 16, 2026", readTime: "2 min", featured: true },
  { id: "apwide-soldevelo-partners", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "April 6, 2026", readTime: "3 min", featured: true },
  { id: "jira-dc-cloud-migration-report", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "March 28, 2026", readTime: "5 min", featured: true },
  { id: "no-more-forms-ai-booking-jira", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "March 24, 2026", readTime: "4 min", featured: true },
  { id: "tempo-timesheets-rovo-mcp", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "March 20, 2026", readTime: "5 min", featured: true },
  { id: "quabu-eazybi-partner", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "March 17, 2026", readTime: "2 min", featured: true },
  { id: "atlassian-community-palma-2026", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "March 14, 2026", readTime: "2 min", featured: true },
  { id: "jira-to-code-lovable-atlassian-mcp", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "March 8, 2026", readTime: "4 min", featured: true },
  { id: "qa-automation-antigravity-rovo-mcp", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "March 8, 2026", readTime: "4 min", featured: true },
  { id: "loom-fundamentals-certification", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "March 3, 2026", readTime: "3 min", featured: true },
  { id: "jira-ai-agents-workflow-integration", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "February 24, 2026", readTime: "6 min", featured: true },
  { id: "jira-formula-custom-fields", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "February 21, 2026", readTime: "6 min", featured: true },
  { id: "quabu-opens-miami-office", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "February 20, 2026", readTime: "2 min", featured: true },
  { id: "building-atlassian-apps-2026", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "February 18, 2026", readTime: "6 min", featured: true },
  { id: "atlassian-google-cloud-alliance", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "February 10, 2026", readTime: "7 min", featured: true },
  { id: "exploring-atlassian-remote-mcp-server", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "February 7, 2026", readTime: "5 min", featured: true },
  { id: "atlassian-rovo-mcp-server-ga", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "February 5, 2026", readTime: "4 min", featured: true },
  { id: "forge-mcp-server-for-developers", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "February 3, 2026", readTime: "6 min", featured: true },
  { id: "quabu-jmwe-success-story", category: "Success Stories", categoryKey: "successStories", categoryIcon: Award, date: "June 10, 2025", readTime: "5 min", featured: false },
  { id: "assets-emancipates-platform", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "May 22, 2025", readTime: "4 min", featured: false },
  { id: "assets-data-manager-guide", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "April 22, 2025", readTime: "6 min", featured: false },
  { id: "rovo-dev-agents-atlassian-ai", category: "News", categoryKey: "news", categoryIcon: Newspaper, date: "April 15, 2025", readTime: "5 min", featured: false },
  { id: "atlassian-products-to-apps", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "April 15, 2025", readTime: "7 min", featured: false },
  { id: "kanban-work-method", category: "Articles", categoryKey: "articles", categoryIcon: BookOpen, date: "March 4, 2025", readTime: "8 min", featured: false },
];

const blogPosts = [
  {
    id: "jira-bro-reviews-visual-organizer-for-jira",
    title: "🚀 Jira Bro Has Tried the New Visual Organizer for Jira App!",
    excerpt: "Jira Bro takes a deep dive into our new Visual Organizer for Jira app and shares his impressions on boosting project visibility and organization.",
    category: "News",
    categoryIcon: Newspaper,
    date: "September 1, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/09/VisualOrganizerForJiraandJiraBro.jpg",
    featured: true,
  },
  {
    id: "visual-organizer-for-jira-cloud",
    title: "Master Navigation in Jira Cloud: How Visual Organizer for Jira Turns Board & Dashboard Chaos into Visual Order",
    excerpt: "Visual Organizer: Custom Labels & Views for Jira centralizes boards, dashboards, filters, projects and Advanced Roadmaps with favorites, color-coded tags and smart categories to kill visual noise in growing instances.",
    category: "News",
    categoryIcon: Newspaper,
    date: "August 31, 2026",
    readTime: "4 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/VisualOrganizerForJiraAppQuabu-1-scaled.jpg",
    featured: true,
  },
  {
    id: "can-atlassian-rovo-replace-jira-admin",
    title: "Can Atlassian Rovo Really Replace a Jira Administrator? (Practical Analysis)",
    excerpt: "We put Atlassian Rovo to the test to explore how far AI goes in the daily work of a Jira administrator, analyzing where it saves time and where human skills remain essential.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 28, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/CanRovoReplaceJiraAdmins.jpg",
    featured: true,
  },
  {
    id: "ai-escalation-agent-jira-no-code",
    title: "I Built an AI Escalation Agent in Jira (No Code Needed)",
    excerpt: "Learn how to automatically escalate VIP accounts and critical incidents in Jira by combining Atlassian Rovo Studio and Jira Automation — no coding required.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 27, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/AIEscalationAgentAtlassianRovoQuabu.jpg",
    featured: true,
  },
  {
    id: "vibe-coding-atlassian-forge-rovo-studio",
    title: "Vibe Coding in Atlassian Forge: How to Create 3 AI Apps with Rovo Studio",
    excerpt: "Jira Bro shows how to build three production-ready Forge apps — Issue Mood Meter, Confluence Reading Time macro and JSM AI Sentiment Evaluator — using only AI prompts in Cursor and Windsurf.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 25, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/RovoStudioAtlassianForgeAppsQuabu.jpg",
    featured: true,
  },
  {
    id: "stop-triaging-jira-tickets-manually",
    title: "Stop Triaging Jira Tickets Manually. Do This Instead",
    excerpt: "Build your own AI-powered Backlog Guardian with Atlassian Rovo Studio and Jira Automation to score readiness, detect missing requirements and route issues automatically.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 24, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/QuabuAtlassianAITriageJiraBro1-scaled.jpg",
    featured: true,
  },
  {
    id: "atlassian-cloud-fundamentals-free",
    title: "🚀 Atlassian Cloud Fundamentals Is Now Free: Your Shortcut to DevOps & ITSM Specializations",
    excerpt: "The Atlassian Cloud Foundations exam has been renewed as the free ACH-820 certificate — and it is a key step toward earning the Agile DevOps and ITSM Specialist designations at zero cost.",
    category: "News",
    categoryIcon: Newspaper,
    date: "August 12, 2026",
    readTime: "4 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/QuabuAtlassianCertificationsDesignationsDevOpsITSM.png",
    featured: true,
  },
  {
    id: "custom-templates-rising-star-badge",
    title: "Atlassian Awards Our Custom Templates App the Rising Star Badge 🚀",
    excerpt: "Atlassian Marketplace has officially granted Custom Templates for Jira Cloud the Rising Star badge, recognizing its fast growth, accelerated adoption and 5/5 star rating.",
    category: "News",
    categoryIcon: Newspaper,
    date: "August 4, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/CustomTemplatesAtlassianQuabu.png",
    featured: true,
  },
  {
    id: "atlassian-devs-marketplace-webinar-recap",
    title: "Atlassian Devs Stories: How to Build, Monetize and Survive on the Marketplace",
    excerpt: "Key takeaways from Quabu's latest webinar with Raúl Peláez: the native vs. third-party dilemma, Forge's pay-per-use model, real case studies, and Marketplace quality standards.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 1, 2026",
    readTime: "5 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/QuabuAppsWebinar-scaled.png",
    featured: true,
  },
  {
    id: "preview-atlassian-rovo-mcp-v2",
    title: "Preview: Atlassian Rovo MCP v2",
    excerpt: "A balanced summary of the newly launched Atlassian Rovo MCP v2 Preview: token savings, supercharged Confluence context, and the technical limitations still being polished before GA.",
    category: "News",
    categoryIcon: Newspaper,
    date: "July 31, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/Quabuv2Captura.png",
    featured: true,
  },
  {
    id: "new-webinar-atlassian-devs-stories",
    title: "New Webinar: Real Atlassian Dev Stories — No PowerPoints Allowed",
    excerpt: "Quabu and Hiera team up for a live, no-slides developer session on July 28, 2026. Screen sharing, real code, and open Q&A about building apps for the Atlassian Marketplace.",
    category: "News",
    categoryIcon: Newspaper,
    date: "July 28, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/QuabuAppsAndHieraWebinar.png",
    featured: true,
  },
  {
    id: "atlassian-certifications-designations-2026",
    title: "Complete Guide to Atlassian's Professional Certifications and Designations 2026 ⭐",
    excerpt: "A walkthrough of every Atlassian credential — from ACH and ACA to ACP and the new Atlassian Certified Designations — with a recommended path for admins and consultants.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "July 6, 2026",
    readTime: "5 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/AtlassianDesignacionesCertificaciones.png",
    featured: true,
  },
  {
    id: "custom-language-for-jira-cloud",
    title: "Jira in Your Local Language: Break the Language Barrier with Custom Language for Jira Cloud",
    excerpt: "Translate the Jira interface into any official regional or local language. Includes a Catalan dictionary out of the box, full customization, and compliance for public administrations.",
    category: "News",
    categoryIcon: Newspaper,
    date: "June 10, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/06/QuabuCustomLanguageCatalanForJiraCloud.png",
    featured: true,
  },
  {
    id: "backup-manager-deprecation-notice",
    title: "Important Announcement: Deprecation of Backup Manager for Jira Cloud (Free & Paid)",
    excerpt: "After deep analysis and evaluating the new technical landscape, we have made the decision to officially discontinue and deprecate our Backup Manager apps on the Atlassian Marketplace.",
    category: "News",
    categoryIcon: Newspaper,
    date: "June 2, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/06/BackupManagerForJiraDeprecationNotice.png",
    featured: true,
  },
  {
    id: "custom-templates-for-jira-cloud",
    title: "🚀 Introducing Custom Templates for Jira Cloud",
    excerpt: "Standardize your workflow and say goodbye to blank tickets. Custom Templates brings structure, consistency, and speed to your Jira issues and comments with one-click predefined templates.",
    category: "News",
    categoryIcon: Newspaper,
    date: "May 29, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/05/CustomTemplatesJiraCloudSpanish1-scaled.png",
    featured: true,
  },
  {
    id: "board-fields-for-jira-cloud",
    title: "Revolutionize Your Board Management: Introducing Board Fields for Jira Cloud",
    excerpt: "We're excited to launch Board Fields for Jira Cloud — a Plug and Play app that lets you favorite, tag, and categorize your Jira boards to bring order to the chaos.",
    category: "News",
    categoryIcon: Newspaper,
    date: "May 28, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/05/BoardFieldsNewAppForJiraCloud-scaled.png",
    featured: true,
  },
  {
    id: "quabu-atlassian-first-division-partners",
    title: "Quabu Enters the First Division of Atlassian Partners",
    excerpt: "We did it! Quabu now plays in the «First Division» of Atlassian partners in Spain, sharing the front page of the official partner directory with industry leaders.",
    category: "News",
    categoryIcon: Newspaper,
    date: "May 5, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/05/QuabuPrimeraDivision.png",
    featured: true,
  },
  {
    id: "atlassian-lovable-ace-dublin-2026",
    title: "Empowering Atlassian with Lovable: The Future of Planning at ACE Dublin",
    excerpt: "On April 29, Quabu joins the Dublin Atlassian Community to showcase how extensibility is breaking the limits of Jira Cloud — integrating Lovable, Tempo MCP + Rovo, and advanced reporting.",
    category: "News",
    categoryIcon: Newspaper,
    date: "April 28, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/ACEDublinQuabu.jpg",
    featured: true,
  },
  {
    id: "quabu-startup-ole-miami",
    title: "Quabu Solutions Lands at Startup OLÉ Miami",
    excerpt: "We're proud to be part of this technological delegation in vibrant Florida, sharing our latest digital solutions and connecting with industry leaders.",
    category: "News",
    categoryIcon: Newspaper,
    date: "April 25, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/1000577151.jpeg",
    featured: true,
  },
  {
    id: "iso-27001-beyond-certification",
    title: "The Path to ISO 27001: Beyond the Certification",
    excerpt: "QUABU SOLUTIONS has officially achieved ISO 27001 certification. Beyond the badge, the real transformation has been a cultural shift that embeds security into our daily DNA.",
    category: "News",
    categoryIcon: Newspaper,
    date: "April 20, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/QuabuISO27001-scaled.png",
    featured: true,
  },
  {
    id: "quabu-ii-congres-clubs-natacio",
    title: "Quabu at the II Congress of Swimming Clubs of Catalonia: Driving the Digitalization of Sport",
    excerpt: "We attended the II Congress of Swimming Clubs of Catalonia at the Royalverd Training Center, presenting our integrated solution for sports clubs in just 15 minutes.",
    category: "News",
    categoryIcon: Newspaper,
    date: "April 12, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/QuabuPacteNacionalClubsCatalunya-scaled.png",
    featured: true,
  },
  {
    id: "atlassian-community-barcelona-2026",
    title: "See You at the Next Atlassian Community Barcelona — In Person!",
    excerpt: "We're heading to «AI without the hype: what works (and what doesn't) in Atlassian», featuring Antoni Perez. Real customer experiences and practical AI in the Atlassian ecosystem.",
    category: "News",
    categoryIcon: Newspaper,
    date: "April 16, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/ACEBarcelona2026.png",
    featured: true,
  },
  {
    id: "apwide-soldevelo-partners",
    title: "Apwide and SolDevelo Officially Join Our Partner Network",
    excerpt: "We're thrilled to announce that Apwide and SolDevelo have officially joined QUABU's partner network, expanding our arsenal of Atlassian solutions for environment management, time tracking, and test management.",
    category: "News",
    categoryIcon: Newspaper,
    date: "April 6, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/QuabuNewPartnerApwideAndSolDevelo-scaled.png",
    featured: true,
  },
  {
    id: "jira-dc-cloud-migration-report",
    title: "Is Your Jira Data Center to Cloud Migration a Stroll or an Everest Expedition?",
    excerpt: "We developed Doctor Amor, an automated audit system that analyzes your Jira Data Center instance to provide a real complexity score and comprehensive migration risk report — completely free.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "March 28, 2026",
    readTime: "5 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/MigrationJiraCloudQuabu-scaled.png",
    featured: true,
  },
  {
    id: "no-more-forms-ai-booking-jira",
    title: "🔮 This Week We Booked an Asset in Jira by Talking to an AI — Forms Will Never Be the Same",
    excerpt: "We integrated JSM portal chat with Rovo AI and Apwide's Booking app. The result? You can now book Assets in Jira just by chatting with an AI agent. #NoMoreForms",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "March 24, 2026",
    readTime: "4 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/ENQuabuApWideBookingAppJiraCloud-scaled.png",
    featured: true,
  },
  {
    id: "tempo-timesheets-rovo-mcp",
    title: "Pioneering the Future: The World's First Integration of Tempo Timesheets and Atlassian Rovo via Custom MCP",
    excerpt: "We built a Remote MCP Server that brings the entire Tempo ecosystem — Timesheets, Plans, and Financials — into Jira Rovo as actionable AI Skills. No official connector exists yet. Until now.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "March 20, 2026",
    readTime: "5 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/JiraCloudTempoMCPRovoAgentSkills-scaled.png",
    featured: true,
  },
  {
    id: "quabu-eazybi-partner",
    title: "🚀 Quabu Solutions Is Now an eazyBI Partner",
    excerpt: "We're excited to announce that Quabu Solutions has officially become an eazyBI partner, one of the most powerful Business Intelligence and reporting solutions for the Atlassian ecosystem.",
    category: "News",
    categoryIcon: Newspaper,
    date: "March 17, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/eazyBIPartnerQuabu.png",
    featured: true,
  },
  {
    id: "atlassian-community-palma-2026",
    title: "🚀 Kicking Off 2026 with the Atlassian Community in Palma de Mallorca 🏝️",
    excerpt: "Our colleague Raúl Peláez, Atlassian Champion at Quabu Solutions, will be speaking at the ACE Palma de Mallorca event about using multiple Rovo agents for Marketing processes and connecting them with Lovable via Atlassian MCP.",
    category: "News",
    categoryIcon: Newspaper,
    date: "March 14, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/AtlassianACEMallorca2026.jpg",
    featured: true,
  },
  {
    id: "jira-to-code-lovable-atlassian-mcp",
    title: "From Ticket to Real Code: Automating Development with Lovable and Atlassian MCP",
    excerpt: "What if your Jira tickets could practically develop themselves? At Quabu Solutions, we've implemented a revolutionary workflow connecting Jira with Lovable through the MCP protocol.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "March 8, 2026",
    readTime: "4 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/LovableAtlassian-scaled.png",
    featured: true,
  },
  {
    id: "qa-automation-antigravity-rovo-mcp",
    title: "QA Automation: How to Create Test Cases in JSM Using Antigravity and Atlassian Rovo MCP",
    excerpt: "At Quabu Solutions, we've taken a leap into the future by integrating Antigravity with the new Rovo MCP (Model Context Protocol). Discover how this combination is changing the rules of the game for QA teams.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "March 8, 2026",
    readTime: "4 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/AntigravityAtlassian-scaled.png",
    featured: true,
  },
  {
    id: "loom-fundamentals-certification",
    title: "🎥 Fewer Meetings, More Loom: The New Loom Fundamentals Certification Is Here",
    excerpt: "The official Loom Fundamentals certificate is now live on Atlassian University. It's free, takes 45 minutes, and teaches you how to master async video communication with Loom and AI.",
    category: "News",
    categoryIcon: Newspaper,
    date: "March 3, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/03/loom2.png",
    featured: true,
  },
  {
    id: "jira-ai-agents-workflow-integration",
    title: "Jira Transcends Human Management: Atlassian Introduces AI Agent Integration in Workflows",
    excerpt: "The project management ecosystem is undergoing a paradigm shift. Atlassian has officially announced that Rovo Agents can now be assigned Jira tickets and mentioned in collaboration threads.",
    category: "News",
    categoryIcon: Newspaper,
    date: "February 24, 2026",
    readTime: "6 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/02/RovoAsAssignee-scaled.png",
    featured: true,
  },
  {
    id: "jira-formula-custom-fields",
    title: "Jira Cloud Takes a Historic Leap: Formula Custom Fields Are Finally Here",
    excerpt: "After years of relying on external apps and complex automations, Atlassian has officially announced native Formula Custom Fields in Jira Cloud. This changes everything.",
    category: "News",
    categoryIcon: Newspaper,
    date: "February 21, 2026",
    readTime: "6 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/02/FormulaFieldsJiraCloudQuabu.png",
    featured: true,
  },
  {
    id: "quabu-opens-miami-office",
    title: "🌴 Quabu Opens an Office in Miami",
    excerpt: "We are thrilled to announce that Quabu now has an office in Miami — one of the most exciting emerging tech hubs. We're growing, and new career opportunities are coming soon!",
    category: "News",
    categoryIcon: Newspaper,
    date: "February 20, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/02/QuabuOficinaMiami.png",
    featured: true,
  },
  {
    id: "building-atlassian-apps-2026",
    title: "🚀 How to Build Apps & Integrations for Atlassian in 2026",
    excerpt: "The Atlassian ecosystem is changing fast. At Quabu we stay ahead — from Forge UI Kit to AI Apps Builder, Rovo Studio, and MCPs. Discover the best approach for your team.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "February 18, 2026",
    readTime: "6 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/02/QuabuAppsAtlassian2026.png",
    featured: true,
  },
  {
    id: "atlassian-google-cloud-alliance",
    title: "Atlassian and Google Cloud: An Alliance Redefining Enterprise Productivity",
    excerpt: "Atlassian and Google Cloud announce a historic partnership to bring advanced AI to millions of users. Discover what it means for your business and how Quabu can help you maximize its potential.",
    category: "News",
    categoryIcon: Newspaper,
    date: "February 10, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "exploring-atlassian-remote-mcp-server",
    title: "Exploring Atlassian Remote MCP Server: AI Takes Control of Jira",
    excerpt: "Atlassian introduces its Remote MCP Server for Jira Cloud, allowing Claude Desktop to interact with Jira naturally. This isn't just another integration — it's a glimpse into the future of enterprise software interaction through AI.",
    category: "News",
    categoryIcon: Newspaper,
    date: "February 7, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "atlassian-rovo-mcp-server-ga",
    title: "Atlassian Rovo MCP Server Is Now GA: Take Your Workflows to the Next Level",
    excerpt: "Atlassian officially announces that the Rovo MCP Server is now in General Availability. This milestone enables secure integration of Atlassian workflows with AI assistants and external tools.",
    category: "News",
    categoryIcon: Newspaper,
    date: "February 5, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "forge-mcp-server-for-developers",
    title: "Forge MCP: The Ally Your IDE Needed to Master Forge Development",
    excerpt: "Atlassian introduces the Forge MCP Server, a remote service based on the Model Context Protocol that provides contextual, up-to-date knowledge about Forge directly to your development tools and AI assistants.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "February 3, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    featured: true,
  },
  {
    id: "quabu-jmwe-success-story",
    title: "Quabu and JMWE: A Success Story Transforming Workflow Management",
    excerpt: "We're excited to share our recent success story, featured by Appfire, highlighting how our collaboration with JMWE has revolutionized workflow automation for enterprise clients.",
    category: "Success Stories",
    categoryIcon: Award,
    date: "June 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: "assets-emancipates-platform",
    title: "Assets Emancipates: More Than a Functionality, a Platform with Its Own Identity",
    excerpt: "In the Atlassian ecosystem, some tools are born discreetly while others mature to become essential. Assets belongs to the latter category, evolving into a full-fledged platform.",
    category: "News",
    categoryIcon: Newspaper,
    date: "May 22, 2025",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: "assets-data-manager-guide",
    title: "What is Assets Data Manager and Why Should You Pay Attention to It?",
    excerpt: "In enterprise asset management (ITAM), most organizations face the same challenge: asset data is scattered everywhere. Learn how Assets Data Manager solves this.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "April 22, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: "rovo-dev-agents-atlassian-ai",
    title: "Rovo Dev Agents Arrives: Atlassian's AI for Developers",
    excerpt: "Atlassian introduces Rovo Dev Agents, a powerful AI assistant designed specifically for development teams. Discover how it can transform your coding workflow.",
    category: "News",
    categoryIcon: Newspaper,
    date: "April 15, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: "atlassian-products-to-apps",
    title: "Atlassian: From 'Products' to 'Apps' - Vision or Error?",
    excerpt: "A deep analysis of Atlassian's recent admin panel changes and the strategic implications of rebranding 'Products' as 'Apps' in their ecosystem.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "April 15, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    featured: false,
  },
  {
    id: "kanban-work-method",
    title: "Kanban: The Work Method of the Moment",
    excerpt: "Discover why Kanban has become the preferred methodology for visual workflow management and how to implement it effectively in your organization.",
    category: "Articles",
    categoryIcon: BookOpen,
    date: "March 4, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop",
    featured: false,
  },
];

const categoriesMeta = [
  { key: "all", icon: Sparkles, count: blogPosts.length },
  { key: "news", icon: Newspaper, count: blogPosts.filter(p => p.category === "News").length },
  { key: "articles", icon: BookOpen, count: blogPosts.filter(p => p.category === "Articles").length },
  { key: "successStories", icon: Award, count: blogPosts.filter(p => p.category === "Success Stories").length },
];

// Blog post card component
const BlogCard = ({ post, index, featured = false }: { post: typeof blogPosts[0], index: number, featured?: boolean }) => {
  const { t } = useTranslation();
  const Icon = post.categoryIcon;
  
  return (
    <motion.article
      className={`group bg-background rounded-2xl overflow-hidden shadow-lg border border-border hover:border-primary/30 transition-all hover:shadow-xl ${featured ? 'lg:col-span-2' : ''}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Link to={`/blog/${post.id}`} className="block">
        <div className={`relative overflow-hidden ${featured ? 'h-64' : 'h-48'}`}>
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Category badge */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary text-primary-foreground text-xs font-medium rounded-full">
              <Icon className="w-3 h-3" />
              {post.category}
            </span>
          </div>

          {/* Featured badge */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500 text-black text-xs font-medium rounded-full">
                <TrendingUp className="w-3 h-3" />
                {t("blog.featured")}
              </span>
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>

          <h3 className={`font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2 ${featured ? 'text-2xl' : 'text-lg'}`}>
            {post.title}
          </h3>

          <p className={`text-muted-foreground mb-4 ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
            {post.excerpt}
          </p>

          <span className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
            {t("blog.readMore")}
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default function Blog() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const categoryMap: Record<string, string> = {
    news: "News",
    articles: "Articles",
    successStories: "Success Stories",
  };
  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(p => p.category === categoryMap[activeCategory]);
  const featuredPosts = filteredPosts.filter(p => p.featured);
  const regularPosts = filteredPosts;
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribing(true);
    try {
      const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
        body: { email: email.trim() },
      });
      if (error) throw error;
      if (data?.error) {
        toast.error(data.error);
      } else {
        toast.success(data?.message || "Check your email to confirm!");
        setEmail("");
      }
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubscribing(false);
    }
  };

  return (
    <Layout>
      <SEO
        path="/blog"
        title="Quabu Blog | Atlassian Insights, News & Best Practices"
        description="Stay up to date with the Atlassian ecosystem. The Quabu blog covers Jira, Confluence, Forge, AI tools, and expert tips to help your team work smarter."
        schema={{
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "Quabu Blog",
          url: "https://www.quabusolutions.com/blog",
          description: "Atlassian insights, news, and best practices from the Quabu team.",
          publisher: {
            "@type": "Organization",
            name: "Quabu",
            url: "https://www.quabusolutions.com",
          },
        }}
      />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <AnimatedBlogBackground />
        
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">{t("blog.ourInsights")}</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {t("blog.title")}
            </h1>

            <p className="text-xl text-muted-foreground">
              {t("blog.subtitle")}
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {categoriesMeta.map((category) => {
              const isActive = activeCategory === category.key;
              return (
                <motion.button
                  key={category.key}
                  onClick={() => setActiveCategory(category.key)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                    isActive
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <category.icon className="w-4 h-4" />
                  <span className="font-medium">{t(`blog.categories.${category.key}`)}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-primary-foreground/20' : 'bg-muted'
                  }`}>
                    {category.count}
                  </span>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container">
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">{t("blog.featuredPosts")}</h2>
          </motion.div>

          <Carousel
            plugins={[autoplayPlugin.current]}
            opts={{ align: "start", loop: true, watchDrag: false }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {featuredPosts.map((post, i) => (
                <CarouselItem key={post.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <BlogCard post={post} index={i} featured />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-2 mt-6">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12 bg-muted/30">
        <div className="container">
          <motion.div
            className="flex items-center justify-between mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-bold">{t("blog.latestPosts")}</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, i) => (
              <BlogCard key={post.id} post={post} index={i} />
            ))}
          </div>

          {/* Load More */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" size="lg">{t("blog.loadMore")}</Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5" />
        
        {/* Animated shapes */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
            }}
          >
            <Tag className="w-8 h-8 text-primary/10" />
          </motion.div>
        ))}

        <div className="container relative z-10">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t("blog.stayInLoop")}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t("blog.stayInLoopDesc")}
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("blog.emailPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="lg" className="group" type="submit" disabled={subscribing}>
                {subscribing ? t("blog.subscribing") : t("blog.subscribeBtn")}
                {!subscribing && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">{t("blog.privacyNote")}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              {t("blog.haveStory")}
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              {t("blog.haveStoryDesc")}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/contact">
                  {t("blog.contactUs")}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="mailto:hello@quabusolutions.com">
                  {t("blog.emailUs")}
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
