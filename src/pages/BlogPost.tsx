import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { 
  ArrowLeft, 
  ArrowRight, 
  Calendar, 
  Clock, 
  Share2,
  Linkedin,
  Twitter,
  Facebook,
  BookOpen,
  Newspaper,
  Tag,
  User
} from "lucide-react";

// Blog post data (same as in Blog.tsx - in a real app, this would be in a shared data file or fetched from an API)
const blogPosts = [
  {
    id: "jira-bro-reviews-visual-organizer-for-jira",
    title: "🚀 Jira Bro Has Tried the New Visual Organizer for Jira App!",
    excerpt: "Jira Bro takes a deep dive into our new Visual Organizer for Jira app and shares his impressions on boosting project visibility and organization.",
    content: `
![Visual Organizer for Jira and Jira Bro](https://quabu.blog/wp-content/uploads/2026/09/VisualOrganizerForJiraandJiraBro.jpg)

It's always great to see ecosystem experts put our tools to the test. In his latest video, **Jira Bro** takes a deep dive into **[Visual Organizer for Jira](https://marketplace.atlassian.com/apps/130463090/visual-organizer-custom-labels-views-for-jira?hosting=cloud&tab=overview)** and shares his impressions on how to boost visibility and organization in your projects.

## 📺 Watch the Full Review Here

[Jira Bro reviews Visual Organizer for Jira](https://www.youtube.com/watch?v=VfgUzJZTZ_g)

A huge thank you to **Jira Bro** for taking the time to analyze the app, share his feedback with the community, and support our work! 🙌

Have you watched the video yet? Leave us your thoughts in the comments! 👇

#Atlassian #Jira #JiraCloud #VisualOrganizer #JiraBro #AtlassianMarketplace #Quabu #Productivity
`,
    category: "News",
    categoryIcon: Newspaper,
    date: "September 1, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/09/VisualOrganizerForJiraandJiraBro.jpg",
    author: "Quabu Team",
    tags: ["Atlassian", "Jira", "Jira Cloud", "Visual Organizer", "Jira Bro", "Atlassian Marketplace", "Quabu"],
  },
  {
    id: "visual-organizer-for-jira-cloud",
    title: "Master Navigation in Jira Cloud: How Visual Organizer for Jira Turns Board & Dashboard Chaos into Visual Order",
    excerpt: "Visual Organizer: Custom Labels & Views for Jira centralizes boards, dashboards, filters, projects and Advanced Roadmaps with favorites, color-coded tags and smart categories to kill visual noise in growing instances.",
    content: `
![Visual Organizer for Jira Cloud](https://quabu.blog/wp-content/uploads/2026/08/VisualOrganizerForJiraAppQuabu-1-scaled.jpg)

As organizations grow and adopt Jira Cloud at scale, a critical challenge emerges: **information overload**. In medium and large instances, it is common to accumulate dozens or hundreds of projects, boards, dashboards, saved filters and Advanced Roadmaps plans. Finding the right resource at the right moment becomes a bottleneck that erodes productivity.

For organizations trying to keep operations fluid —or those missing the centralized structure of Data Center environments— this scattered experience creates significant friction. To solve it, **[Visual Organizer: Custom Labels & Views for Jira](https://marketplace.atlassian.com/apps/130463090/visual-organizer-custom-labels-views-for-jira?hosting=cloud&tab=overview)** stands out as one of the most effective tools in the Atlassian Marketplace.

[Visual Organizer - Custom Labels & Views for Jira](https://www.youtube.com/watch?v=xZXuXRWqEgE)

## The Challenge: "Visual Noise" in Growing Jira Cloud Instances

In day-to-day Atlassian consulting, one of the most recurring frustrations among users is not the lack of features, but the **difficulty of organizing and locating their work tools**.

Without a structured visual classification system:

- Native dropdown menus become long and hard to navigate.
- Grouping resources by customer, department, initiative or priority becomes complex.
- Roles with different needs (Scrum Masters, Product Owners, Jira Admins) are forced to wade through layers of information that add no direct value.

## What Is Visual Organizer for Jira Cloud?

**[Visual Organizer](https://marketplace.atlassian.com/apps/130463090/visual-organizer-custom-labels-views-for-jira?hosting=cloud&tab=overview)** is an app designed to centralize, categorize and visually organize the key components of the Jira Cloud workspace.

Unlike traditional tagging tools focused solely on *issues*, Visual Organizer extends its reach to the workspace architecture: **Dashboards, Projects, Filters, Boards and Plans (Advanced Roadmaps)**.

Its value proposition is a clean, intuitive navigation experience with a clear visual hierarchy, suited both to individual management and corporate governance.

## Key Features That Make the Difference

### 1. Efficient Favorites Management

Star any relevant board, dashboard, filter or project. With a simple toggle filter, users can switch between the global view and a filtered view containing only their favorites, instantly reducing on-screen noise.

![Favorites Management](https://quabu.blog/wp-content/uploads/2026/08/23c9ae2a-2d3d-4369-b961-aaf0efc25568-1024x501.png)

### 2. Custom Tagging & Color Coding

Assign custom tags and color codes to each resource. You can classify dashboards or boards by customer, technology, status or criticality level, providing instant visual recognition.

![Custom Tagging](https://quabu.blog/wp-content/uploads/2026/08/34a32d0a-244a-4ccc-a187-2c6268a0f88e-1024x501.png)

### 3. Smart Categorization (Personal vs. Company-wide Scope)

Structure resources into custom categories (*Personal* or *Company-wide*). This lets the PMO or Jira administrator establish global shared taxonomies for the whole organization, while each teammate keeps their own working groups.

![Smart Categorization](https://quabu.blog/wp-content/uploads/2026/08/2fdb9d0e-7b33-4f24-adf4-a5276470cdd3-1024x501.png)

### 4. Advanced Global Search & Filtering

Stop hunting element by element. With the built-in search bar and filters by tags or categories, locating the "Level 2 Support" dashboard or the "Sprint Q3 – Finance" board takes just seconds.

### 5. Adaptable Views: Card or Table Layout

Every team works differently. The tool lets you switch between a **Card View** —friendlier and more intuitive— and a **Table View**, aimed at dynamically analyzing higher volumes of information.

![Card and Table Views](https://quabu.blog/wp-content/uploads/2026/08/VisualOrganizerScreensJira-1-1024x501.jpg)

## Real-World Use Cases in the Organization

- **Scrum Masters & Agile Leads:** Those managing multiple boards in parallel can tag them by team, release or active sprint to access them without wasting time in endless menus.
- **Jira System Administrators:** Simplifies the ordering of the most-used corporate Dashboards and Filters, offering a clean entry point that reduces incidents and FAQs about where to find each report.
- **PMO & Management:** Lets you group Plans (Advanced Roadmaps) and executive Dashboards by business unit or strategic customer, improving overall portfolio visibility.

## Key Benefits for Your Team

1. **Operational Time Savings:** Fewer clicks and fruitless searches translate into greater focus on value delivery.
2. **Improved Adoption:** A clean, colorful interface makes Jira more accessible to non-technical users.
3. **Controlled Scalability:** Your Jira instance can grow in project volume without losing coherence or navigational order.

## Optimize Your Jira Cloud Workspace

Having a navigable structure is not just a matter of aesthetics; it is a determining factor for team efficiency. If your Jira Cloud instance has reached a volume where finding the right information takes too long, **Visual Organizer** is the piece that completes your workflow.

Try it free on your instance from the official listing on the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/130463090/visual-organizer-custom-labels-views-for-jira?hosting=cloud&tab=overview).

At **[Quabu](https://www.quabusolutions.com/)**, as specialists in the Atlassian ecosystem, we help you with optimization, governance and selecting the best tools to boost your processes. **Want to discover how to get the most out of your Jira Cloud? [Get in touch](https://www.quabusolutions.com/contact) with our consulting team.**

#Atlassian #Jira #JiraCloud #VisualOrganizer #AtlassianMarketplace #AtlassianExpert #Quabu #Productivity #Agile #Scrum #ProjectManagement #PMO #ITManagement #JiraAdmin #VisualOrganization
`,
    category: "News",
    categoryIcon: Newspaper,
    date: "August 31, 2026",
    readTime: "4 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/VisualOrganizerForJiraAppQuabu-1-scaled.jpg",
    author: "Quabu Team",
    tags: ["Atlassian", "Jira", "Jira Cloud", "Visual Organizer", "Atlassian Marketplace", "Quabu", "Productivity", "Agile", "Scrum", "Project Management", "PMO", "IT Management", "Jira Admin"],
  },
  {
    id: "can-atlassian-rovo-replace-jira-admin",
    title: "Can Atlassian Rovo Really Replace a Jira Administrator? (Practical Analysis)",
    excerpt: "We put Atlassian Rovo to the test to explore how far AI goes in the daily work of a Jira administrator, analyzing where it saves time and where human skills remain essential.",
    content: `
![Can Atlassian Rovo Replace a Jira Administrator?](https://quabu.blog/wp-content/uploads/2026/08/CanRovoReplaceJiraAdmins.jpg)

We are sharing this **Jira Bro** video: *"Can Atlassian Rovo really replace a Jira administrator?"* 🤖 In this episode, Rovo is put to the test to explore how far AI goes in the day-to-day work of a Jira administrator, analyzing where it saves time and, most importantly, where human skills remain essential.

The video covers what Rovo can do for Jira administration, how to use AI in routine tasks, its strengths and weaknesses, whether it is realistic for it to replace a professional in the field, its main limitations, and what the future of AI-assisted administration looks like. Whether you are a Jira administrator, Atlassian professional, team leader, or automation enthusiast, here you will find a practical look at what Rovo can achieve today. Do you think AI will eventually replace Jira administrators or simply augment their productivity? Leave us your opinion in the comments!

[Can Atlassian Rovo Really Replace a Jira Administrator? (Practical Analysis)](https://www.youtube.com/watch?v=-MsLigqbjWM)

#Jira #Atlassian #AtlassianRovo #JiraAdmin #ArtificialIntelligence #AI #Automation #Productivity #JiraBro #Quabu #Tech #JiraAutomation #AtlassianCommunity #JiraAdministration #ProjectManagement
`,
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 28, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/CanRovoReplaceJiraAdmins.jpg",
    author: "Quabu Team",
    tags: ["Jira", "Atlassian", "Atlassian Rovo", "Jira Admin", "Artificial Intelligence", "AI", "Automation", "Productivity", "Jira Bro", "Quabu", "Jira Automation", "Atlassian Community", "Jira Administration", "Project Management"],
  },
  {
    id: "ai-escalation-agent-jira-no-code",
    title: "I Built an AI Escalation Agent in Jira (No Code Needed)",
    excerpt: "Learn how to automatically escalate VIP accounts and critical incidents in Jira by combining Atlassian Rovo Studio and Jira Automation — no coding required.",
    content: `
![AI Escalation Agent in Jira](https://quabu.blog/wp-content/uploads/2026/08/AIEscalationAgentAtlassianRovoQuabu.jpg)

Is your team still wasting hours manually triaging tickets in Jira? 🚨

Manual triage is a silent productivity killer. VIP accounts get stuck in standard queues, critical incidents slip through the cracks, and managers lose time assigning priorities by hand.

To fix this, we teamed up with **JiraBro** to show you how to automate the entire process without writing a single line of code, combining **Atlassian Rovo Studio** and **Jira Automation**.

### How Does the AI Escalation Agent Work?

- 👑 **VIP Detection:** Identifies high-value customers directly from ticket data.
- 🔍 **Severity Analysis:** Scans descriptions for critical keywords like "production outage" or "payment failure".
- 🛂 **Automatic Escalation:** Raises priority to "Highest" and applies risk labels instantly.
- 💬 **Generated Responses:** Creates a ready-to-send internal response draft in seconds.

At **Quabu Solutions**, as an **Atlassian Gold Solution & Marketplace Partner**, we love supporting tools that showcase the true potential of AI and automation inside Jira.

🎬 Watch the full breakdown in the JiraBro video (less than 5 minutes!) and grab the prompt in the first comment. 👇

[I Built an AI Escalation Agent in Jira (No Code)](https://www.youtube.com/watch?v=7syEcmoL9UQ)

#JiraAutomation #AtlassianRovo #ITSM #AI #NoCode #JiraBro #Quabu
`,
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 27, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/AIEscalationAgentAtlassianRovoQuabu.jpg",
    author: "Quabu Team",
    tags: ["Jira Automation", "Atlassian Rovo", "ITSM", "AI", "No Code", "JiraBro", "Quabu"],
  },
  {
    id: "vibe-coding-atlassian-forge-rovo-studio",
    title: "Vibe Coding in Atlassian Forge: How to Create 3 AI Apps with Rovo Studio",
    excerpt: "Jira Bro shows how to build three production-ready Forge apps — Issue Mood Meter, Confluence Reading Time macro and JSM AI Sentiment Evaluator — using only AI prompts in Cursor and Windsurf.",
    content: `
![Vibe Coding in Atlassian Forge](https://quabu.blog/wp-content/uploads/2026/08/RovoStudioAtlassianForgeAppsQuabu.jpg)

Want to develop production-ready Atlassian Cloud apps without writing repetitive manual code? In his latest tutorial, **Jira Bro** demonstrates how to leverage **_Vibe Coding_** to create three fully functional apps in **Atlassian Forge** using only AI prompts in **Cursor** and **Windsurf**. The showcased projects bring AI-assisted development to the entire Atlassian ecosystem:

- **Issue Mood Meter** for Jira — monitor team climate and sentiment around tickets.
- **Reading Time & Freshness** macro for Confluence — detect outdated documentation at a glance.
- **AI Sentiment Evaluator** for Jira Service Management (JSM) — automatically classify incoming tickets using an LLM.

### Beyond the projects: practical AI workflow strategies

This guide also reveals key tactics to overcome common obstacles in AI-assisted development:

- **Feed official docs to your assistant:** Use the latest **Forge UI Kit** documentation as context to avoid syntax errors and deprecated APIs.
- **Generate valid manifests from plain language:** Produce correct \`manifest.yml\` configuration files by describing the app in simple Spanish or English prompts.
- **Deploy straight to Cloud:** Push your apps directly to your Atlassian Cloud site with minimal manual steps.

Discover how to optimize your development workflow at Quabu and start building Atlassian apps much faster with AI!

[I Built 3 Atlassian Forge Apps Using Pure AI Prompts](https://www.youtube.com/watch?v=lFLLCfoV5fc)

#Atlassian #AtlassianForge #VibeCoding #Jira #Confluence #JSM #JiraServiceManagement #CursorAI #Windsurf #ArtificialIntelligence #AI #AppDevelopment #JiraBro #Quabu #ForgeUIKit #LLM #DevOps #LowCode #CodeWithAI
`,
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 25, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/RovoStudioAtlassianForgeAppsQuabu.jpg",
    author: "Quabu Team",
    tags: ["Atlassian", "Atlassian Forge", "Vibe Coding", "Jira", "Confluence", "JSM", "Jira Service Management", "Cursor AI", "Windsurf", "AI", "App Development", "Jira Bro", "Quabu", "Forge UI Kit", "LLM"],
  },
  {
    id: "stop-triaging-jira-tickets-manually",
    title: "Stop Triaging Jira Tickets Manually. Do This Instead",
    excerpt: "Build your own AI-powered Backlog Guardian with Atlassian Rovo Studio and Jira Automation to score readiness, detect missing requirements and route issues automatically.",
    content: `
![Stop Triaging Jira Tickets Manually](https://quabu.blog/wp-content/uploads/2026/08/QuabuAtlassianAITriageJiraBro1-scaled.jpg)

Do your agile refinement sessions turn into marathons of deciphering ambiguous, out-of-context Jira tickets? Unclear acceptance criteria slow sprint velocity and burn out developers. To eliminate this bottleneck, **JiraBro** presents a hands-on guide to automating issue triage and raising the quality of your backlog with Artificial Intelligence.

In this video tutorial you will learn how to build your own **"Backlog Guardian"**, an autonomous agent configured with **Atlassian Rovo Studio** and **Jira Automation**. In just 5 minutes, you will discover how to integrate this AI assistant into your workflow so it analyzes every new issue, evaluates its readiness level against the **Definition of Ready**, and provides immediate recommendations.

### What you will learn in this video

- **Automatic AI evaluation:** Assignment of a readiness score (1 to 10) and a clear status (*Ready for Sprint*, *Needs Clarification* or *Incomplete*).
- **Missing-requirement detection:** Automatic identification of missing reproduction steps, environment data or acceptance criteria.
- **Smart routing:** Automatic suggestion of the right technical component (API, Frontend, Infrastructure, etc.).
- **No-Code automation:** Step-by-step configuration of rules in Jira Cloud to run the agent and add structured comments with no manual intervention.

Check out the video below!

[STOP Triaging Jira Tickets Manually! (Do This Instead)](https://www.youtube.com/watch?v=MXzi_RVk5qE)

#AtlassianRovo #JiraAutomation #RovoStudio #JiraSoftware #JiraBro #Quabu #BacklogRefinement #AgileProjectManagement #ArtificialIntelligenceJira #AIAgents #TicketTriage #BacklogGrooming #DefinitionOfReady #DevOps #Scrum #SoftwareQuality #NoCodeAutomation #AtlassianAI #IssueManagement
`,
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 24, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/QuabuAtlassianAITriageJiraBro1-scaled.jpg",
    author: "Quabu Team",
    tags: ["Atlassian Rovo", "Jira Automation", "Rovo Studio", "Jira Software", "JiraBro", "Quabu", "Backlog Refinement", "AI Agents", "No-Code Automation", "Atlassian AI"],
  },
  {
    id: "atlassian-cloud-fundamentals-free",
    title: "🚀 Atlassian Cloud Fundamentals Is Now Free: Your Shortcut to DevOps & ITSM Specializations",
    excerpt: "The Atlassian Cloud Foundations exam has been renewed as the free ACH-820 certificate — and it is a key step toward earning the Agile DevOps and ITSM Specialist designations at zero cost.",
    content: `
![Atlassian Cloud Fundamentals Free](https://quabu.blog/wp-content/uploads/2026/08/QuabuAtlassianCertificationsDesignationsDevOpsITSM.png)

Great news for the community! The *Atlassian Cloud Foundations (ACA-915)* exam has been completely renewed and is now the new **Atlassian Cloud Fundamentals Certificate (ACH-820)**.

### 📌 Why should you get it today?

- **100% Free:** No enrollment fee or hidden costs.
- **Open-Book:** No locked browsers or live proctoring. You can check Atlassian documentation and your own products while answering.
- **Fast and focused:** Validates the fundamental skills you already use in your daily work.
- **Badge and E-Swag:** Includes your official certificate and digital badge to share on LinkedIn.

### 🛠️ Your first step toward the *Agile DevOps Specialist* designation

Earning this certificate not only boosts your CV immediately, but is also a strategic move within Atlassian's **stackable credentials** system.

The new **ACH-820** counts as one of the essential requirements for obtaining the coveted **Atlassian Certified Agile DevOps Specialist** designation.

### 🏆 The "4 Free Certificates" hack to become a DevOps Specialist

Atlassian uses a stackable credentials system: if you earn **4 specific certificates**, you automatically receive the coveted [**Atlassian Certified Agile DevOps Specialist**](https://community.atlassian.com/learning/hub/resources-and-support/atlassian-certified-designations/) designation.

What many people don't know is that right now you can obtain this expert-level designation by investing **$0**. Among the valid options on the list, there are at least four fundamental certifications that are now completely free and open-book:

1. **[Atlassian Cloud Fundamentals](https://community.atlassian.com/learning/certifications/atlassian-cloud-fundamentals) (ACH-820)**
2. **[Rovo Fundamentals](https://community.atlassian.com/learning/certifications/rovo-fundamentals) (ACH-800)**
3. **[Forge Fundamentals](https://community.atlassian.com/learning/certifications/forge-fundamentals)**
4. **[Loom Fundamentals](https://community.atlassian.com/learning/certifications/loom-fundamentals)**

_(Note: Certifications such as Jira Essentials or Confluence Essentials still have a $100 exam fee. That's why the "Fundamentals" route is your best strategic option today!)_

### 🚨 BONUS! Earn the *ITSM Specialist* designation (also FREE)

But wait, there's more! The "4 free certificates" strategy doesn't just work for DevOps — it also helps you earn the **Atlassian Certified ITSM Specialist** designation.

The rule is the same: you need to accumulate 4 credentials from the official list. If you already have **Cloud Fundamentals, Rovo and Loom**, you only need to add one more free, service-focused certificate:

1. **Atlassian Cloud Fundamentals (ACH-820)**
2. **Rovo Fundamentals (ACH-800)**
3. **Loom Fundamentals**
4. **[Jira Service Management with AI Fundamentals](https://community.atlassian.com/learning/certifications/jira-service-management-with-AI-fundamentals)**

_(Other options on this list, such as Managing Jira Service Projects for Cloud or Agent Essentials, are not free. Also remember that the old "ITSM with Jira Service Management Foundations" was retired in June 2026.)_

### 🏁 How to get started?

1. Complete the free learning path on **Atlassian Learning**.
2. Take the quick online assessment at your own pace.
3. Add the credential to your professional profile!

#Atlassian, #DevOps, #Certifications, #AtlassianCloud
`,
    category: "News",
    categoryIcon: BookOpen,
    date: "August 12, 2026",
    readTime: "4 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/08/QuabuAtlassianCertificationsDesignationsDevOpsITSM.png",
    author: "Quabu Team",
    tags: ["Atlassian", "Cloud Fundamentals", "ACH-820", "DevOps", "ITSM", "Certifications"],
  },
  {
    id: "custom-templates-rising-star-badge",
    title: "Atlassian Awards Our Custom Templates App the Rising Star Badge 🚀",
    excerpt: "Atlassian Marketplace has officially granted Custom Templates for Jira Cloud the Rising Star badge, recognizing its fast growth, accelerated adoption and 5/5 star rating.",
    content: `
![Custom Templates for Jira Cloud Rising Star](https://quabu.blog/wp-content/uploads/2026/07/CustomTemplatesAtlassianQuabu.png)

At **QUABU** we are celebrating! Atlassian Marketplace has officially awarded our app **[Custom Templates for Jira Cloud](https://marketplace.atlassian.com/apps/1230162/custom-templates-for-jira-cloud?hosting=cloud&tab=overview)** the distinctive **Rising Star** badge.

### What does Atlassian's Rising Star badge mean?

The **Rising Star** badge is a recognition Atlassian grants to Marketplace applications that stand out for their fast growth, accelerated user adoption, and high level of satisfaction.

It is the official validation that an emerging app is delivering real, proven value to the teams that work with Jira every day.

### Standardize your workflows in Jira and JSM

If you don't know the tool yet, **Custom Templates for Jira Cloud** was built to eliminate repetitive tasks and guarantee consistency in daily work. With it you can:

- **Standardize issue descriptions:** Apply reusable text templates so requirement capture is uniform across the whole team.
- **Speed up comment replies:** Create predefined comments and quick responses to resolve support tickets faster.
- **Simplify adoption:** Integrate easy-to-use templates in both Jira Cloud and Jira Service Management.

### Thank you for your trust

Keeping a perfect **5/5 star rating** and watching our user community keep growing pushes us to keep improving our solutions within the Atlassian ecosystem.

We want to thank every team that trusts us and helps us with their feedback to make our tools the best possible support for their day-to-day work.

👉 **Want to optimize your workflows in Jira?** We invite you to try **Custom Templates for Jira Cloud** directly on the [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1230162/custom-templates-for-jira-cloud?hosting=cloud&tab=overview) and see how it can transform your team's productivity.
`,
    category: "News",
    categoryIcon: BookOpen,
    date: "August 4, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/CustomTemplatesAtlassianQuabu.png",
    author: "Quabu Team",
    tags: ["Atlassian", "Marketplace", "Custom Templates", "Jira Cloud", "Rising Star"],
  },
  {
    id: "atlassian-devs-marketplace-webinar-recap",
    title: "Atlassian Devs Stories: How to Build, Monetize and Survive on the Marketplace",
    excerpt: "Key takeaways from Quabu's latest webinar with Raúl Peláez: the native vs. third-party dilemma, Forge's pay-per-use model, real case studies, and Marketplace quality standards.",
    content: `
![Atlassian Devs Marketplace Webinar](https://quabu.blog/wp-content/uploads/2026/07/QuabuAppsWebinar-scaled.png)

Developing applications for the **Atlassian Cloud** ecosystem in 2026 goes far beyond writing functional code. It requires navigating continuous platform changes, adapting to the new **Atlassian Forge** architecture, understanding infrastructure costs, and making sound strategic business decisions.

In our latest **[QUABU](https://www.quabusolutions.com/)** webinar, our specialist **Raúl Peláez** transparently analyzed the reality of being a _Marketplace Partner_. In this article we summarize the key takeaways from the session and share the full recording at the end.

## 1. The big dilemma: Native features vs. Third-party solutions

One of the most debated topics in the developer community is the overlap between Atlassian's roadmap and partner-built solutions.

Recently, the introduction of native features by Atlassian (such as native tabs in Confluence) sparked controversy in the forums. For an app vendor, this highlights two key needs:

- **Specialization and added value:** It is not enough to solve a basic problem; the app must deliver advanced workflows, integrations, or differential value that a basic native feature does not cover.
- **Agility:** Being ready to pivot or adapt the product catalog as the main platform evolves.

## 2. Atlassian Forge and the Developer Console: The impact of the cost model

The progressive transition from the _Connect_ architecture toward **Atlassian Forge** has simplified deployment by offering a serverless environment hosted by Atlassian. However, the arrival of the new **Developer Console** and the pay-per-use infrastructure model introduces a decisive factor:

> **The impact on free apps:** Previously, offering 100% free apps did not entail direct hosting costs for the developer. With Forge's current pay-per-use model, a free app with high execution volume generates direct costs for the vendor, making the traditional unlimited _freemium_ model unviable.

### The recommended monetization strategy:

1. **Paid models from day one:** Launch well-positioned commercial applications through the Marketplace.
2. **Free plans for up to 10 users:** Leverage the free tier for small teams, which facilitates testing, initial adoption, and internal SEO positioning in the Atlassian store.

## 3. Three Real Case Studies at QUABU

At QUABU we believe in transparency. That is why we share three direct experiences that sum up the rollercoaster of developing in this ecosystem:

### ❌ 1. Deprecation of _Backup Manager for Jira_

This application allowed backing up Jira to services such as Google Drive or AWS. Due to changes in Atlassian's internal APIs and the launch of its own backup solutions, the required API became unavailable. **Lesson:** When the underlying architecture changes critically, the wisest decision is to retire the product in an orderly way.

### ⚠️ 2. UI inconsistencies with _Custom Templates_

Our _Custom Templates_ app standardizes descriptions in Jira through dropdown menus. Although _UI Modifications_ work excellently in Jira Software, we discovered that Jira Service Management (JSM) has different behaviors and limitations due to its original architecture for customer portals. **Lesson:** Always test your components across every flavor of the product (Jira Software, JSM, and Confluence).

### 🔄 3. Storage optimization in _Custom Language for Jira Cloud_

To add support for languages not natively translated (such as Basque or Catalan), we built a plugin that frequently queried Forge's _Key-Value Store_. The high query frequency increased resource usage in the developer console, which led us to refactor the logic to optimize requests and ensure the app's financial sustainability.

## 4. Quality, Legal Compliance and Mandatory Standards

Publishing on the Atlassian Marketplace requires meeting strict technical and operational standards:

- **Mandatory Dark Mode:** Atlassian requires that app interfaces respect the visual theme chosen by the user by using the platform's official environment variables.
- **Security and Trust:** Participating in the **Bug Bounty Program**, offering SLA response levels under 48 hours, and pursuing the **Cloud Fortified** badge are differentiating requirements to build trust with enterprise customers.
- **Solid Legal Documentation:** It is essential to attach an End-User License Agreement (EULA) and Privacy Policies tailored to the company's local legislation, avoiding generic non-applicable templates.

## 5. Resources to start developing in 2026

If you are starting out or want to go deeper into Forge, Atlassian offers valuable free tools:

- **Free Development Instances:** You can request Cloud environments at no cost for up to 5 users for Jira and 1 agent for Jira Service Management to run tests and support.
- **Forge CLI:** An agile development flow based on simple commands: \`forge login\`, \`forge create\`, \`forge tunnel\`, \`forge deploy\`.
- **Atlassian University:** Access to up-to-date courses and free unproctored certifications such as _Forge Fundamental Certificate_, _Jira Service Management with AI_, and more.

## 📺 Watch the Full Webinar

If you want to hear all the details, see the code examples, and get the full experience from **Raúl Peláez**, we invite you to watch the webinar recording:

- [https://youtu.be/-WFtHWNlRes](https://youtu.be/-WFtHWNlRes)

### 💬 Do you develop for Atlassian?

Have you faced similar challenges when migrating to Forge or adapting your pricing strategies? Leave us your comments below or reach out through our social media!
`,
    category: "Articles",
    categoryIcon: BookOpen,
    date: "August 1, 2026",
    readTime: "5 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/QuabuAppsWebinar-scaled.png",
    author: "Raúl Peláez",
    tags: ["Atlassian", "Marketplace", "Forge", "Webinar", "App Development"],
  },
  {
    id: "preview-atlassian-rovo-mcp-v2",
    title: "Preview: Atlassian Rovo MCP v2",
    excerpt: "A balanced summary of the newly launched Atlassian Rovo MCP v2 Preview: token savings, supercharged Confluence context, and the technical limitations still being polished before GA.",
    content: `
![Atlassian Rovo MCP v2 Preview](https://quabu.blog/wp-content/uploads/2026/07/Quabuv2Captura.png)

Hello everyone! 👋

As an **Atlassian Champion** and part of the **QUABU SOLUTIONS** team, I closely follow how AI is transforming our ecosystem. Today I want to share a balanced summary of the newly launched **Atlassian Rovo MCP v2 Preview** (_Model Context Protocol_).

This update takes giant strides in performance, although, like any _Preview_, it still has technical details to polish before its final release.

## 🚀 The big news (the best of v2)

- **Radical token savings (>50%):** Through a _lazy loading_ model (dynamic discovery of tools), the server no longer saturates the context window at startup.
- **Supercharged Confluence:** The AI is no longer limited to reading plain text. It can now process full context by interacting with attachments, _Whiteboards_, and databases.
- **Greater stability:** The move to the new DCR OAuth infrastructure promises to resolve the annoying 401 errors and session drops we saw in v1.

## 🛠️ The technical analysis (points to keep in mind)

When testing it for real enterprise implementations, we've detected some temporary limitations that the community is already debating:

- **Control over tool loading:** The _discover-execute_ model is great for saving tokens, but it imposes an intermediate layer that removes some flexibility for advanced MCP clients that prefer to manage their own catalog directly.
- **Databases in early stages:** Support for _Confluence Databases_ is a tremendous advance, but for now it is limited to reading the entire table. To fully leverage it for requirements management, we will need row-level operations.
- **Governance and security:** The AI inherits the user's global permissions very broadly. To guarantee risk-free _Enterprise_ adoption, it will be essential for Atlassian to add granular controls (such as limiting scope to specific _Spaces_).

From **[QUABU SOLUTIONS](https://www.quabusolutions.com/)** we see enormous potential in this evolution of the MCP standard. The direction is the right one, and we will continue to provide feedback to help the tool mature towards its GA (_General Availability_) phase.

🔗 **You can read all the technical details and join the official thread here:**

[Preview: Atlassian Rovo MCP v2 in the Atlassian Community](https://community.atlassian.com/forums/Atlassian-Remote-MCP-Server/Preview-Atlassian-Rovo-MCP-v2/ba-p/3255431?utm_source=atlcomm&utm_medium=email&utm_campaign=&utm_content=post)

_Created by Raúl Peláez_ — AtlassianChampion at Quabu Solutions

**#Atlassian #Rovo #MCP #ModelContextProtocol #RovoMCP #AI #Confluence #Jira #AtlassianCommunity #AtlassianChampion #Quabu**
`,
    category: "News",
    date: "July 31, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/Quabuv2Captura.png",
    author: "Raúl Peláez",
    tags: ["Atlassian", "Rovo", "MCP", "Model Context Protocol", "Rovo MCP", "AI", "Confluence", "Jira", "Atlassian Community", "Atlassian Champion", "Quabu"],
  },
  {
    id: "new-webinar-atlassian-devs-stories",
    title: "New Webinar: Real Atlassian Dev Stories — No PowerPoints Allowed",
    excerpt: "Quabu and Hiera team up for a live, no-slides developer session on July 28, 2026. Screen sharing, real code, and open Q&A about building apps for the Atlassian Marketplace.",
    content: `
![Atlassian Dev Stories Webinar](https://quabu.blog/wp-content/uploads/2026/07/QuabuAppsAndHieraWebinar.png)

If you work developing for the Atlassian ecosystem, you know exactly what day-to-day life is like. You wrestle with the Jira Cloud API, spend hours trying to fit a component so the UI looks just right, and sometimes things simply don't work on the first try.

We're used to seeing webinars packed with perfect slides that sell the wonders of a new app. But **where are the real development stories?** Where do people talk about the screens that took the longest to code, or the architectural decisions we later regretted?

To talk about all of this, **Quabu** has teamed up with **Germán (creator of the Hiera app)** to bring you a different kind of event. And we have one strict rule: **NO POWERPOINTS ALLOWED.**

## What are we going to talk about?

On **Tuesday, July 28, 2026**, we'll open a live [Google Meet](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3VnY2szdjhzajZzdDQxa2JnZGVjbTRiMzUgcmF1bC5wZWxhZXpAcXVhYnUuZXU&tmsrc=raul.pelaez%40quabu.eu) to tear down our apps.

During the session we'll cover:

- **Hiera: Strategic Planning for Jira:** Germán will show us the inner workings of his planning and roadmap app. What technical challenges he faced, what failed along the way, and how he solved the bottlenecks.
- **Custom Templates & Custom Language:** From Quabu, Raúl will open the hood of our apps. We'll talk about how we manage the complexity of the Jira API, what the development process was like, and what we'd do differently if we were starting today.
- **The raw reality of the Atlassian Dev:** Real recommendations for other developers, tools that save us day to day, and lessons learned by stumbling.

## The format: Screen sharing and real code

Our idea is simple. Instead of slides, we'll share our screens to show the apps running in our development environments. We'll open the code, show the console, and if something fails live, we'll debug it together.

Plus, the last part of the event will be **completely open for participation**. You can unmute, ask in the chat, and throw out any technical or business question about building apps for the Atlassian Marketplace.

## Event details

- **Date:** Tuesday, July 28, 2026 at 6:00 PM (Mainland Spain time).
- **Platform:** [Google Meet](https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=N3VnY2szdjhzajZzdDQxa2JnZGVjbTRiMzUgcmF1bC5wZWxhZXpAcXVhYnUuZXU&tmsrc=raul.pelaez%40quabu.eu) (add to calendar)
- **Registration:** Free registration
- **Video call link:** [meet.google.com/kmc-hwyx-cxn](https://meet.google.com/kmc-hwyx-cxn)

If you can't attend live, don't worry. **We'll record the session and publish it on our YouTube channel** so you can review the code at your own pace.

In the meantime, if you want to take a look at the apps we're going to tear down, here are the links to the official Atlassian Marketplace:

- [Hiera: Strategic Planning for Jira](https://marketplace.atlassian.com/apps/1914332338/hiera-strategic-planning-for-jira?hosting=cloud&tab=overview)
- [Quabu: Custom Templates for Jira Cloud](https://marketplace.atlassian.com/apps/1230162/custom-templates-for-jira-cloud?hosting=cloud&tab=overview)
- [Quabu: Custom Language for Jira Cloud](https://marketplace.atlassian.com/apps/1234462/custom-language-for-jira-cloud?hosting=cloud&tab=overview)

Grab your coffee, close the slides, and join the conversation!

**The QUABU Development Team**

**#Atlassian #Jira #JiraCloud #AtlassianMarketplace #Hiera #CustomTemplates #CustomLanguage #Webinar #AtlassianDev #Quabu**
`,
    category: "News",
    date: "July 28, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/QuabuAppsAndHieraWebinar.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Jira", "Jira Cloud", "Atlassian Marketplace", "Hiera", "Custom Templates", "Custom Language", "Webinar", "Atlassian Dev", "Quabu"],
  },
  {
    id: "atlassian-certifications-designations-2026",
    title: "Complete Guide to Atlassian's Professional Certifications and Designations 2026 ⭐",
    excerpt: "A walkthrough of every Atlassian credential — from ACH and ACA to ACP and the new Atlassian Certified Designations — with a recommended path for admins and consultants.",
    content: `
![Atlassian Certifications and Designations 2026](https://quabu.blog/wp-content/uploads/2026/07/AtlassianDesignacionesCertificaciones.png)

In the Atlassian ecosystem, continuous training and the validation of knowledge have become a differentiating factor for administrators, consultants, and technical teams. With the evolution of the certification program and the introduction of the new _Atlassian Certified Designations_, there are more options than ever to prove your expertise in Jira, Confluence, Jira Service Management, and the Cloud platform. In this article we'll walk through **[all the certifications](https://community.atlassian.com/learning/certifications)** and professional designations available, explain what each one is about, and help you identify the best path based on your profile and career goals.

Today, Atlassian organizes its credentials into **4 levels**, ranging from basic knowledge to advanced recognitions.

## 1. ACH – Atlassian Certificate Holder

These are free certificates aimed at end users. They are not proctored exams and are designed to demonstrate foundational knowledge.

Examples:

- Jira Essentials
- Confluence Essentials
- Jira Service Management Agent Essentials
- Atlassian Cloud Foundations
- Forge Fundamentals
- Loom Fundamentals
- Rovo Fundamentals

They are ideal for users, Scrum Masters, Product Owners, and team members.

---

## 2. ACA – Atlassian Certified Associate

These are official certifications for people who regularly work with Atlassian products, but not necessarily as administrators.

Some of the most well-known are:

- Jira Essentials
- Jira Board Configuration
- Confluence Essentials
- Atlassian Cloud Foundations

These certifications include an exam and are an intermediate step before the professional-level (ACP) credentials.

---

## 3. ACP – Atlassian Certified Professional

These are the highest technical-level certifications and are aimed at administrators, consultants, and partners.

The main ones include:

### Jira

- Jira Administration for Cloud
- Managing Jira Projects for Cloud

### Jira Service Management

- Managing Jira Service Projects for Cloud

### Cloud Organization

- Atlassian Cloud Organization Admin

### Confluence

- Confluence Administration for Cloud

The old Data Center certifications (such as Jira Administration for Data Center) have been progressively retired as Atlassian focuses its program on Cloud.

---

# 4. Atlassian Certified Designations

The **Designations** are the equivalent of the former **ACE (Atlassian Certified Expert)**.

They don't require an additional exam: you earn them automatically when you maintain a set of related certifications.

There are currently four:

### 🏅 Atlassian Certified Administration Expert

The most prestigious designation for administrators.

Earned by maintaining **4** of these certifications:

- Jira Administration for Cloud
- Managing Jira Projects for Cloud
- Managing Jira Service Projects for Cloud
- Atlassian Cloud Organization Admin
- Confluence Administration for Cloud

(Previously, the now-retired Data Center certifications also counted.)

---

### 🏅 Atlassian Certified Agile DevOps Specialist

Specialized in agile development and DevOps.

Earned with a combination of credentials such as:

- Jira Essentials
- Jira Board Configuration
- Atlassian Cloud Foundations
- Confluence Administration
- Forge Fundamentals
- Rovo Fundamentals
- Loom Fundamentals

You need to maintain **4** of them.

---

### 🏅 Atlassian Certified ITSM Specialist

Aimed at Jira Service Management administrators.

Combines credentials such as:

- Jira Service Management with AI Fundamentals
- Managing Jira Service Projects for Cloud
- Jira Service Management Agent Essentials
- Atlassian Cloud Foundations
- Rovo Fundamentals
- Loom Fundamentals

It also requires **4** active credentials.

---

### 🏅 Atlassian Certified Teamwork Collection Specialist

Focused on the Atlassian collaboration ecosystem.

Requires maintaining all of these:

- Jira Essentials
- Confluence Essentials
- Rovo Fundamentals
- Loom Fundamentals

---

## What path would I recommend?

If you have, for example, a Jira administrator profile with consulting experience, I'd follow this route:

1. **Jira Administration for Cloud (ACP)**.
2. **Managing Jira Service Projects for Cloud (ACP)**.
3. **Atlassian Cloud Organization Admin (ACP)**.
4. **Confluence Administration for Cloud (ACP)**.
5. **Managing Jira Projects for Cloud (ACP)**.

With those credentials you would automatically earn the **Atlassian Certified Administration Expert** designation, the successor to the former ACE and the most valued one for Atlassian consultants and architects.

If you have any questions, you can always [contact us](https://www.quabusolutions.com/contact).

**The QUABU SOLUTIONS Team**

**#Atlassian #Certifications #Jira #Confluence #JiraServiceManagement #Cloud #Quabu**
`,
    category: "Articles",
    date: "July 6, 2026",
    readTime: "5 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/07/AtlassianDesignacionesCertificaciones.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Certifications", "Designations", "Jira", "Confluence", "Jira Service Management", "Cloud", "Quabu"],
  },
  {
    id: "custom-language-for-jira-cloud",
    title: "Jira in Your Local Language: Break the Language Barrier with Custom Language for Jira Cloud",
    excerpt: "Translate the Jira interface into any official regional or local language. Includes a Catalan dictionary out of the box, full customization, and compliance for public administrations.",
    content: `
![Custom Language for Jira Cloud — Catalan](https://quabu.blog/wp-content/uploads/2026/06/QuabuCustomLanguageCatalanForJiraCloud.png)

Jira is undoubtedly the world's leading tool for project management and agile teams. However, for many organizations, adopting this powerful platform runs into an unexpected wall: **language**.

Although Atlassian supports a wide variety of languages globally, many official regional or local languages are left out of its native configuration. This may seem like a minor inconvenience, but the reality is very different.

### The language challenge in Public Administration

In many countries, the use of co-official languages is not just a cultural preference but a legal obligation. Take the case of Catalonia. As recent regulations on the [mandatory use of Catalan in public administrations](https://www.google.com/search?q=https://masponsianglasell.cat/2025/08/25/el-catala-a-les-administracions-un-us-obligatori/) outline, public institutions and the companies working with them are required to use software available in this language.

What happens when an institution wants to implement Jira but discovers that Catalan is not officially supported? The project is often dropped, and the organization is forced to settle for inferior tools that do meet the linguistic requirement.

Until now. **There are no more excuses not to use Jira.**

### The solution: Custom Language for Jira Cloud by QUABU

At **QUABU** we have listened to this recurring frustration from our customers and decided to put an end to it. We are proud to introduce our new app: **[Custom Language for Jira Cloud](https://marketplace.atlassian.com/apps/1234462/custom-language-for-jira-cloud?hosting=cloud&tab=overview)**.

This tool is designed to empower Jira administrators, allowing them to translate the platform's interface into the official language of their country or region, without depending on Atlassian's official updates.

### What makes our app unique?

- **Catalan dictionary out of the box:** We know how much demand exists in Catalan public institutions, so the app comes with a Catalan dictionary configured by default. Install and you're ready to go!
- **100% Customizable and Exportable:** The included dictionary is not rigid. You can modify the translations to match your company's exact terminology and easily export it.
- **Opens the door to ANY language:** Do you need Jira in Basque, Galician, Valencian, or any other language in the world that isn't supported? Just upload your own dictionary and transform your users' work environment.
- **Stress-free regulatory compliance:** Makes Jira adoption easier in city councils, universities, regional governments, and public companies, 100% meeting legal language requirements.

### 📺 Jira Bro puts it to the test

We're not the only ones convinced that this app is a game changer. We're enormously grateful to **Nikola**, better known in the Atlassian community as **Jira Bro**, who dedicated a fantastic video to us on his channel.

In it, Nikola shows step by step and in detail how our app works in action. If you want to see for yourself how easy it is to set up and start translating your environment, don't miss his review!

👉 **[Watch Jira Bro's video showcasing Custom Language for Jira Cloud](https://www.youtube.com/watch?v=YsoyaLxxH9A)**

### Bring Jira to every corner of your organization

Implementing software in users' mother tongue is not only a matter of legal compliance; it also dramatically improves the learning curve, reduces errors, and increases team satisfaction. With **Custom Language for Jira Cloud**, you have full control over your team's linguistic experience.

🚀 **Ready to break the language barrier in your projects?** Visit the Atlassian Marketplace and discover how to adapt Jira to your real needs: 👉 **[Try Custom Language for Jira Cloud today](https://marketplace.atlassian.com/apps/1234462/custom-language-for-jira-cloud?hosting=cloud&tab=overview)**

**The QUABU Development Team**

**#Atlassian #Jira #JiraCloud #AtlassianMarketplace #CustomLanguage #Catalan #Localization #Quabu**
`,
    category: "News",
    date: "June 10, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/06/QuabuCustomLanguageCatalanForJiraCloud.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Jira", "Jira Cloud", "Atlassian Marketplace", "Custom Language", "Catalan", "Localization", "Quabu"],
  },
  {
    id: "backup-manager-deprecation-notice",
    title: "Important Announcement: Deprecation of Backup Manager for Jira Cloud (Free & Paid)",
    excerpt: "After deep analysis and evaluating the new technical landscape, we have made the decision to officially discontinue and deprecate our Backup Manager apps on the Atlassian Marketplace.",
    content: `
Today, we are addressing our user community with some difficult news. After deep analysis and evaluating the new technical landscape, we have made the decision to **officially discontinue and deprecate** our app on the Atlassian Marketplace: **Backup Manager for Jira Cloud Free** and its paid version.

![Backup Manager Deprecation Notice](https://quabu.blog/wp-content/uploads/2026/06/BackupManagerForJiraDeprecationNotice.png)

## The End of an Era

For many years, our main driving force was helping Jira administrators manage their backups easily and efficiently. We are immensely proud to have offered the free version to the entire community throughout this time, providing an accessible solution when the ecosystem needed it most. It has been an incredible journey, and we are deeply grateful for the trust that thousands of organizations have placed in our tools.

## Why Are We Making This Decision?

Unfortunately, Atlassian has decided to make a radical shift in its strategy and architecture regarding cloud backups. The latest changes in their policies and the restrictions applied to their APIs have left us without a viable operating margin to continue maintaining the plugin to the quality and automation standards you deserve.

In this new approach, Atlassian has launched its own native tool for backup management, but with a highly restrictive billing and access model. According to their [official backup billing documentation](https://support.atlassian.com/organization-administration/docs/understand-billing-for-atlassian-backup-and-restore/), the new Atlassian Backup and Restore solution **is only available as an additional paid add-on**, and exclusively for customers on annual **Premium or Enterprise** plans.

This means that **if your instance is on a Free or Standard plan, Atlassian no longer allows you to purchase or use their native backup solution.** This severe limitation, combined with the technical transition detailed in the [Atlassian Backup Management API](https://developer.atlassian.com/cloud/backup-management-apis/rest/api-group-public/#api-group-public), introduces roadblocks that completely break the architecture under which our plugins were originally designed. Atlassian has left us with no other choice.

## Affected Applications

This deprecation and end-of-support notice affects both versions available on the Marketplace:

- [Backup Manager for Jira Cloud – Free](https://marketplace.atlassian.com/apps/1230550/backup-manager-for-jira-cloud-free?hosting=cloud&tab=overview)
- [Backup Manager for Jira Cloud (Paid)](https://marketplace.atlassian.com/apps/1235836/backup-manager-for-jira-cloud?hosting=cloud&tab=overview)

## Impact and Next Steps

**The applications will stop operating starting this Friday.** Given the lack of native solutions for Free and Standard users, we strongly recommend that you look for third-party alternatives in the ecosystem that are already adapted to the new API to avoid any disruption to your data backup policies.

We want to reiterate our most sincere gratitude to every user, partner, and developer who accompanied us on this journey. This was not an easy decision to make, but the conditions imposed by the new landscape force us to close this chapter.

If you have any urgent questions or need assistance during this transition, please do not hesitate to contact our [support team](https://quabuapps.atlassian.net/servicedesk/customer/portal/1).

Sincerely,

**The QUABU Development Team**

**#Atlassian #Jira #JiraCloud #AtlassianMarketplace #BackupManager #Deprecation #Quabu**
`,
    category: "News",
    date: "June 2, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/06/BackupManagerForJiraDeprecationNotice.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Jira", "Jira Cloud", "Atlassian Marketplace", "Backup Manager", "Deprecation", "Quabu"],
  },
  {
    id: "custom-templates-for-jira-cloud",
    title: "🚀 Introducing Custom Templates for Jira Cloud",
    excerpt: "Standardize your workflow and say goodbye to blank tickets. Custom Templates brings structure, consistency, and speed to your Jira issues and comments with one-click predefined templates.",
    content: `
### Standardize your workflow and say goodbye to blank tickets

We're thrilled to officially introduce **[Custom Templates for Jira Cloud](https://marketplace.atlassian.com/apps/1230162/custom-templates-for-jira-cloud?hosting=cloud&tab=overview)**, a powerful and lightweight solution designed to bring structure, consistency, and speed to your Jira issues and comments.

Forget about confusing bug reports, incomplete user stories, and chaotic comment threads! With Custom Templates, your team can apply predefined structures directly into their day-to-day work with a single click.

![Custom Templates for Jira Cloud](https://quabu.blog/wp-content/uploads/2026/05/CustomTemplatesJiraCloudSpanish1-scaled.png)

## 🎯 Key features at a glance

- **Automated descriptions with dropdowns:** Add a native dropdown custom field (single-select list) to your issue creation screens. Pick a template and watch the description auto-fill instantly.
- **Ready-to-use examples:** Get started from day one with professional preconfigured templates for **Stories, Bugs, Epics, Tasks, and Spikes**.
- **Template-powered comments:** Standardize your updates! Team members can select a template from a dropdown menu in the comments section, edit it to suit their needs, and preview it before publishing.
- **Centralized control for Admins:** Jira administrators get a single, unified configuration panel to create, manage, and roll out templates across the entire organization.
- **Full compatibility:** Works seamlessly in both **Company-managed** and **Team-managed** projects.

## 🔒 100% built on Atlassian Forge

Security and compliance are no joke. Built **100% on Atlassian Forge**, our app operates entirely within Atlassian's secure cloud infrastructure.

> **What does this mean for you?** Your data never leaves Jira. This guarantees full compliance with Atlassian's strictest privacy, security, and data residency standards.

## 🗺️ What's next on our Roadmap?

This is just the beginning! We're already working to extend compatibility and bring the full power of Custom Templates to the **Jira Service Management (JSM) Customer Portal**. That way, your external users and customers will also be able to submit perfectly structured requests.

## 🛠️ Try it today!

Ready to boost your team's productivity and improve the quality of information in your projects?

- 👉 **Download the App:** [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1230162/custom-templates-for-jira-cloud?hosting=cloud&tab=overview)
- 📖 **Read the documentation:** [Step-by-step setup guide](https://quabu.atlassian.net/wiki/spaces/QAPPS/pages/5328830478/Custom+Templates+for+Jira+Cloud)

_Install it, try it, and let us know what you think. We'd love to hear how Custom Templates transforms your day-to-day in Jira!_

**#Atlassian #Jira #JiraCloud #AtlassianMarketplace #CustomTemplates #Forge #Quabu #Productivity**
`,
    category: "News",
    date: "May 29, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/05/CustomTemplatesJiraCloudSpanish1-scaled.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Jira", "Jira Cloud", "Atlassian Marketplace", "Custom Templates", "Forge", "Quabu", "Productivity"],
  },
  {
    id: "board-fields-for-jira-cloud",
    title: "Revolutionize Your Board Management: Introducing Board Fields for Jira Cloud",
    excerpt: "We're excited to launch Board Fields for Jira Cloud — a Plug and Play app that lets you favorite, tag, and categorize your Jira boards to bring order to the chaos.",
    content: `
In day-to-day project management, it's very common for teams to accumulate dozens of boards in Jira. Over time, finding the exact board you need to work on can become a frustrating task and an unnecessary waste of time.

To solve this problem, at **[Quabu](https://www.quabusolutions.com/)** we are very excited to present our new official release: **[Board Fields for Jira Cloud](https://marketplace.atlassian.com/apps/130463090/boards-fields-for-jira-cloud?hosting=cloud&tab=overview)**. An application designed specifically to radically improve your experience and give you full control over the organization of your Jira boards.

![Board Fields for Jira Cloud](https://quabu.blog/wp-content/uploads/2026/05/BoardFieldsNewAppForJiraCloud-scaled.png)

## What is Board Fields for Jira Cloud?

It's a **Plug and Play** tool that completely renews your Jira boards list, allowing you to interact with them in a much more intuitive, organized, and efficient way. Instead of navigating through an endless and disorganized list, you can now classify, tag, and filter your boards according to your team's real needs.

## Key features that will transform your workflow

Our app adds dynamic fields and filtering capabilities so you can leave visual chaos behind:

- ⭐ **Favourite Boards:** Do you have boards you use daily and others you only check once a month? Mark your essential boards as favorites and use the quick filter to hide the rest. Jump straight to what matters with a single click!
- 🏷️ **Custom Tags:** Add keywords or tags to each board (for example, by client, technology, sprint, or team). Then use the tag-based search engine to instantly locate the exact board you're looking for. *(Tip: remember to separate your tags with a comma for optimal performance).*
- 🗂️ **Categories:** Classify your boards into three common categories and use advanced filters to segment your view. Keeping projects organized by topic has never been easier.

## Why your team will love it

- **Hassle-free installation:** The app is fully integrated. It doesn't require any complex post-setup configuration; the Jira administrator installs it and the team can start enjoying its benefits instantly.
- **Immediate productivity:** Reduces visual clutter and information search time, allowing your team to focus on what really matters: moving tasks forward.

## And this is just the beginning! (Coming Soon)

At [Quabu](https://quabusolutions.com/) we are committed to continuing to improve your Jira experience. Very soon we will be adding new advanced customization features, including:

- **Filter Fields:** To customize and adapt the filter list entirely to your convenience.
- **Dashboard Fields:** To bring this same level of organization and classification to your Jira Dashboards.

## How to get started today

If you're a Jira Administrator, you can start organizing your boards in less than two minutes:

1. Visit the app page on the **[Atlassian Marketplace](https://marketplace.atlassian.com/apps/130463090/boards-fields-for-jira-cloud?hosting=cloud&tab=overview)**.
2. Click **«Try it free»** and follow the on-screen instructions.

If you want to dive deeper into how it works technically, you can check our **[Official Board Fields Documentation](https://quabu.atlassian.net/wiki/spaces/QAPPS/pages/6610223116/Board+Fields+for+Jira+Cloud)**. Have any questions or suggestions? We'll be happy to help through our **[Support Portal](https://quabuapps.atlassian.net/servicedesk/customer/portal/1/group/1/create/80)**.

Ready to say goodbye to Jira board chaos? Try **Board Fields for Jira Cloud** and let us know your experience in the comments!

**#Atlassian #Jira #JiraCloud #AtlassianMarketplace #BoardFields #Quabu #Productivity**
`,
    category: "News",
    date: "May 28, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/05/BoardFieldsNewAppForJiraCloud-scaled.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Jira", "Jira Cloud", "Atlassian Marketplace", "Board Fields", "Quabu", "Productivity"],
  },
  {
    id: "quabu-atlassian-first-division-partners",
    title: "Quabu Enters the First Division of Atlassian Partners",
    excerpt: "We did it! Quabu now plays in the «First Division» of Atlassian partners in Spain, sharing the front page of the official partner directory with industry leaders.",
    content: `
**We did it! [Quabu](https://www.quabusolutions.com/) now plays in the «First Division» of Atlassian partners in Spain!** 🚀🏆

If you head over to the official Atlassian partner directory today and filter by Spain, you'll find us right there, sharing space on the **[front page](https://partnerdirectory.atlassian.com/quabu-solutions-sl)** alongside the industry's top references.

![Quabu First Division](https://quabu.blog/wp-content/uploads/2026/05/QuabuPrimeraDivision.png)

To give you an idea of what this means: at Quabu we're a "small" team of just 20 people. However, thanks to the effort, talent, and drive we put in every day, we've positioned ourselves in the ranking ahead of true corporate giants and consulting multinationals such as *Inetum, Excentia, Indra (Minsait), Izertis, Econocom, Accenture, and Tsoft*, among others.

Not bad at all! 😎

![Atlassian Partner Directory](https://quabu.blog/wp-content/uploads/2026/05/PrimeraCaptura-1024x889.png)

### An achievement that bears the name of the entire team 💙

This milestone is no coincidence. It is the direct result of the dedication, the late nights of certifications, the care we put into every client, and the daily hard work of every single person who is part of Quabu.

We want to say a **HUGE THANK YOU to the whole team**. Your commitment and passion prove that the size of a company is not measured by its number of employees, but by the greatness of its talent and the quality of its work. 🙌🥳👏💯

### What's next?

Keep growing, keep helping our [clients](/contact) get the most out of the Atlassian universe and, above all, keep enjoying the journey together.

Congratulations to everyone, team! This is yours. Onwards! 🥂

**#QuabuTeam #AtlassianPartner #Growth #TeamPride #TechTalent #AtlassianSpain**
`,
    category: "News",
    date: "May 5, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/05/QuabuPrimeraDivision.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Atlassian Partner", "Quabu", "Team", "Growth", "Spain"],
  },
  {
    id: "atlassian-lovable-ace-dublin-2026",
    title: "Empowering Atlassian with Lovable: The Future of Planning at ACE Dublin",
    excerpt: "On April 29, Quabu joins the Dublin Atlassian Community to showcase how extensibility is breaking the limits of Jira Cloud — integrating Lovable, Tempo MCP + Rovo, and advanced reporting.",
    content: `
On **April 29**, [Quabu](https://www.quabusolutions.com/) joins the Dublin community to demonstrate how extensibility is breaking the limits of Jira Cloud.

![ACE Dublin Quabu](https://quabu.blog/wp-content/uploads/2026/04/ACEDublinQuabu.jpg)

### Lovable: Building Solutions on Top of Jira

**[Raúl Peláez](https://www.linkedin.com/in/ra%C3%BAl-pel%C3%A1ez-mendoza-ba037a28/) (Quabu)** will present how we have integrated [**Lovable**](https://lovable.dev/) with [Atlassian](https://www.atlassian.com/), using Jira Cloud as the single **source of truth** to develop:

- **Custom Software:** Integrated time tracking, allocation, and planning solutions.
- **Tempo MCP + Rovo:** Connecting Tempo with Atlassian's AI as a *skill*, enabling time queries through natural language.
- **Advanced Reporting:** In-app report generation with historical analysis and data comparisons.

### Portfolio Management

Complementing the technical vision, **Germán Morales** will present his **[Strategic Hierarchy View App](https://marketplace.atlassian.com/apps/1914332338/strategic-hierarchy-view?hosting=cloud&tab=overview)**, key for the strategic oversight of large-scale projects.

**Join the event:**

- 🗓 **April 29, 2026** | 🕔 **5:00 PM (GMT+1)**
- 🌐 **Free registration:** [Sign up here](https://ace.atlassian.com/events/details/atlassian-dublin-presents-strategic-planning-in-jira-and-lovable-in-atlassian/)

**#Atlassian #Jira #Lovable #Tempo #Rovo #ACEDublin #JiraCloud**
`,
    category: "News",
    date: "April 28, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/ACEDublinQuabu.jpg",
    author: "QUABU Team",
    tags: ["Atlassian", "Jira", "Lovable", "Tempo", "Rovo", "ACE Dublin", "Jira Cloud"],
  },
  {
    id: "iso-27001-beyond-certification",
    title: "The Path to ISO 27001: Beyond the Certification",
    excerpt: "QUABU SOLUTIONS has officially achieved ISO 27001 certification. Beyond the badge, the real transformation has been a cultural shift that embeds security into our daily DNA.",
    content: `
After months of intense work, process analysis, and total commitment from the entire team, at **QUABU SOLUTIONS** we have officially achieved **ISO 27001** certification. While the badge on our website represents an important visual milestone, the real transformation has happened beneath the surface, where the audit process forced us to question and strengthen every layer of our daily operations to raise our security standards.

![Quabu ISO 27001](https://quabu.blog/wp-content/uploads/2026/04/QuabuISO27001-scaled.png)

One of the deepest lessons of this journey has been understanding that information security is not a strictly technological challenge to be solved with servers or encryption, but a **collective mindset shift**. What we initially envisioned as a series of technical controls became a cultural challenge, where real success came from integrating security into the day-to-day of every area, transforming the perception of data protection: from being seen as a rigid process to being understood as the asset that guarantees our trust and stability.

The certification process also forced us to confront what we call "order born from chaos." Documenting processes that we previously executed by pure instinct turned out to be a task as demanding as it was revealing, allowing us to identify invisible gaps and provide a solid structure to our technical experience. Thanks to this exercise in operational introspection, we have replaced intuition with robust methodologies that eliminate uncertainty and allow us to scale safely.

Finally, we accept that this certification does not represent the end of the road, but the starting gun toward a philosophy of **continuous improvement**. At QUABU, security no longer resides in a static manual forgotten in a digital folder, but is an active part of our professional DNA. Although the effort has been considerable, the satisfaction of knowing that we operate under the highest international standards gives us the peace of mind of doing things right, thus reinforcing the non-negotiable commitment we have with our [clients and collaborators](/contact).

**#ISO27001 #Cybersecurity #InformationSecurity #Compliance #RiskManagement #DataProtection #InternationalStandards**
`,
    category: "News",
    date: "April 20, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/QuabuISO27001-scaled.png",
    author: "QUABU Team",
    tags: ["ISO 27001", "Cybersecurity", "Information Security", "Compliance", "Risk Management", "Data Protection"],
  },
  {
    id: "quabu-startup-ole-miami",
    title: "Quabu Solutions Lands at Startup OLÉ Miami",
    excerpt: "We're proud to be part of this technological delegation in vibrant Florida, sharing our latest digital solutions and connecting with industry leaders.",
    content: `
At **[Quabu Solutions](https://www.quabusolutions.com/)** we're celebrating because this week we're at one of the world's epicenters of innovation: **[Startup OLÉ Miami](https://startupolemiami.eu/)**. This event represents an exceptional opportunity to strengthen ties between the entrepreneurial ecosystems of Europe, Ibero-America, and the United States, and we're proud to be part of this technological delegation in the vibrant environment of Florida.

![Quabu at Startup OLÉ Miami](https://quabu.blog/wp-content/uploads/2026/04/1000577151.jpeg)

Our presence at this edition has a clear objective: to share our latest digital solutions and connect with industry leaders who, like us, seek to transform the future through technology. We're taking advantage of each day to exchange ideas with investors, discover new trends, and establish strategic alliances that allow us to keep growing and offering cutting-edge services to all our clients.

![Quabu at Startup OLÉ Miami](https://quabu.blog/wp-content/uploads/2026/04/1000577175-1024x768.jpeg)

If you're attending the event or are in the area, you can't miss the opportunity to stop by our official booth. We'll be delighted to welcome you at the **Quabu Solutions** space to chat about your projects, show you firsthand what we do, and explore together how we can collaborate. We're passionate about putting a face to our community and we believe there's no better place to do it than at an event that breathes innovation in every corner.

![Quabu at Startup OLÉ Miami](https://quabu.blog/wp-content/uploads/2026/04/1000577199-768x1024.jpeg)

For all those who couldn't travel with us, we remind you that we'll be sharing the best moments and the most interesting news through our social media channels. You can follow our American adventure minute by minute and write to us directly if you want to schedule a meeting or receive more information about what we're presenting at this edition of **[Startup OLÉ Miami](https://startupolemiami.eu/)**.

**See you at the booth!**
`,
    category: "News",
    date: "April 25, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/1000577151.jpeg",
    author: "QUABU Team",
    tags: ["Startup", "Miami", "Innovation", "Event", "FLUSA", "StartupOLE"],
  },
  {
    id: "quabu-ii-congres-clubs-natacio",
    title: "Quabu at the II Congress of Swimming Clubs of Catalonia: Driving the Digitalization of Sport",
    excerpt: "We attended the II Congress of Swimming Clubs of Catalonia at the Royalverd Training Center, presenting our integrated solution for sports clubs in just 15 minutes.",
    content: `
What an incredible day yesterday! We're still digesting all the positive energy from the **II Congress of Swimming Clubs of Catalonia**. It was one of those events that mark a before and after, and at Quabu we couldn't miss such a crucial appointment for the future of sport in our country.

![Quabu at National Pact for Catalan Clubs](https://quabu.blog/wp-content/uploads/2026/04/QuabuPacteNacionalClubsCatalunya-scaled.png)

Here's the chronicle of how we lived this intense day in La Garrotxa.

## An Idyllic Setting to Think Big

The setting couldn't have been better: the **[Royalverd Training Center](https://www.royalverd.com/training-center/)**. Surrounded by the nature of La Garrotxa, the atmosphere invited reflection and, above all, action. We want to thank Royalverd enormously for being top-notch hosts; the place is, quite simply, idyllic.

![Royalverd Training Center](https://quabu.blog/wp-content/uploads/2026/04/20260411_100636-1024x768.jpg)

The day kicked off with incredible energy thanks to the talk by **Raül Romeva**. It was a truly inspiring intervention that put on the table the importance of clubs as social entities of public interest. He left us all with an open mind and ready for the debate.

![Raül Romeva talk](https://quabu.blog/wp-content/uploads/2026/04/20260411_104143-1024x768.jpg)

## The Quabu Challenge: 15 Minutes of Pure Innovation

At 12:45 it was our turn. We had an important challenge: to present our **integrated solution for sports clubs in a "record time" of just 15 minutes**.

![Quabu presentation](https://quabu.blog/wp-content/uploads/2026/04/20260411_131919-1024x768.jpg)

Is it possible to explain how to digitize and optimize the management of a club in the time it takes to make a coffee? We did it! And the most rewarding part was the reception. We felt that our proposal resonated with the real needs of managers: agile, direct, and effective tools. We're delighted to see how well our vision for the digital facility was received.

## Productive Debates and a Historic Moment

The congress wasn't just theory. The roundtables were extremely productive, largely thanks to the moderation of **Pere Vilà**, who knew how to set the pace and extract the best from each speaker, addressing complex topics such as the closure of facilities or the challenges of the new collective agreement.

![Roundtable discussion](https://quabu.blog/wp-content/uploads/2026/04/20260411_113909-1024x768.jpg)

And since not everything has to be work, the **networking and catering** were top-notch. It was the perfect moment to connect, share experiences, and strengthen ties with key people in the sector.

![Networking moment](https://quabu.blog/wp-content/uploads/2026/04/20260411_151518-1024x768.jpg)

### In Summary…

We're leaving La Garrotxa with our backpack full of ideas, new contacts, and a great memory. Many thanks to the organization and to everyone who took a moment to listen to us.

![Group photo](https://quabu.blog/wp-content/uploads/2026/04/20260411_100821-1024x768.jpg)

At [**Quabu**](/contact) we're ready to keep swimming alongside you in this new stage. **The future of clubs has already begun!** 🏊‍♂️✨
`,
    category: "News",
    date: "April 12, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/QuabuPacteNacionalClubsCatalunya-scaled.png",
    author: "QUABU Team",
    tags: ["Sports", "Digitalization", "Catalonia", "Swimming Clubs", "SportsTech", "Innovation"],
  },
  {
    id: "atlassian-community-barcelona-2026",
    title: "See You at the Next Atlassian Community Barcelona — In Person!",
    excerpt: "We're heading to «AI without the hype: what works (and what doesn't) in Atlassian», featuring Antoni Perez. Real customer experiences and practical AI in the Atlassian ecosystem.",
    content: `
At Quabu we never stop, and our next stop is an event that promises to be eye-opening: **«AI without the hype: what works (and what doesn't) in Atlassian»**.

![Atlassian Community Barcelona 2026](https://quabu.blog/wp-content/uploads/2026/04/ACEBarcelona2026.png)

We're especially excited to attend, not only because of the very timely topic, but also because it's always a treat to listen to **Antoni Perez** in action. His talks are a guarantee of practical learning and expert insight into the Atlassian ecosystem.

If you're curious about how to apply AI in a real way to your processes and want to spend some time with the community, you can't miss it! We'll be there to exchange impressions and keep learning together.

**Are you in? You can find all the details and registration here:**

👉 [Sign up for the event here](https://ace.atlassian.com/events/details/atlassian-barcelona-presents-ia-sin-humo-lo-que-funciona-y-lo-que-no-en-atlassian-experiencias-reales-de-clientes-y-como-llevarla-a-la-practica/)

See you in Barcelona!
`,
    category: "News",
    date: "April 16, 2026",
    readTime: "2 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/ACEBarcelona2026.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Community", "Barcelona", "AI", "Event"],
  },
  {
    id: "apwide-soldevelo-partners",
    title: "Apwide and SolDevelo Officially Join Our Partner Network",
    excerpt: "We're thrilled to announce that Apwide and SolDevelo have officially joined QUABU's partner network, expanding our arsenal of Atlassian solutions for environment management, time tracking, and test management.",
    content: `
Great news in the Atlassian ecosystem! At **QUABU**, we always say that our goal isn't just to give you tools — it's to give you *the best* tools. That's why today we're celebrating: **Apwide and SolDevelo have officially joined our partner network.**

If you live inside Jira or Confluence, these names probably ring a bell.

![Apwide Logo](https://quabu.blog/wp-content/uploads/2026/04/APWIDE_LOGO_MAIN_1-b54151a1-3b43-4460-8ccf-98f095965d1a-1024x369.png)

## 🚀 Apwide: The Radar Your Environments Needed

Have you ever felt lost trying to figure out which version of your software is deployed in which environment? If your answer is a frustrated sigh, [**Apwide**](https://www.apwide.com/) is your new best friend.

They're the brains behind **[Golive](https://marketplace.atlassian.com/apps/1212239/golive-test-environment-release-management-for-jira?hosting=cloud&tab=overview)**, one of the most popular apps on the Atlassian Marketplace. Their specialty is test and deployment environment management directly from Jira. With them, visibility is total.

At QUABU, we're delighted to help you implement their technology so your *Release Management* workflow stops being a coin toss.

![SolDevelo Logo](https://quabu.blog/wp-content/uploads/2026/04/cropped-cropped-cropped-cropped-cropped-logokolor-1-1024x211.png)

## 🛠️ SolDevelo: Productivity and Quality with an Expert Seal

If Apwide brings order to environments, [**SolDevelo**](https://soldevelo.com/) brings power to execution. They're elite developers who understand perfectly what a team needs to be 100% efficient.

They have a catalog of "must-have" apps, but if we had to highlight a few, we'd pick:

- **[Worklogs](https://marketplace.atlassian.com/apps/1219004/worklogs-time-tracking-time-reports-timesheets?hosting=cloud&tab=overview):** The ultimate solution so that time tracking isn't a nightmare for your team (or the finance department).
- **[QAlity](https://marketplace.atlassian.com/apps/1223344/qality-plus-test-management-for-jira-execute-report?hosting=cloud&tab=overview):** Test management integrated into Jira, so quality isn't something you check at the end, but part of the process from minute one.

Their approach is clear: create robust, easy-to-use solutions that solve real everyday problems.

## What Does This Mean for You?

Our philosophy at QUABU is to surround ourselves with the best to offer you solutions that truly impact your results. By adding **Apwide** and **SolDevelo** to our partner family, we expand our arsenal to help you optimize your processes, improve project visibility, and ultimately make your work easier.

> "We don't choose our partners at random; we look for those who, like us, believe that Atlassian technology can take companies to the next level when used with the right pieces."

### Come Meet Them!

We've updated our partners section so you can see up close everything these two giants can do for you.

👉 **[Discover our partners here](/partners)**

Curious about how to integrate any of their apps into your Jira instance? Let's talk! At QUABU, we're ready to help you take the next step.
`,
    category: "News",
    date: "April 6, 2026",
    readTime: "3 min read",
    image: "https://quabu.blog/wp-content/uploads/2026/04/QuabuNewPartnerApwideAndSolDevelo-scaled.png",
    author: "QUABU Team",
    tags: ["Atlassian", "Partnership", "Apwide", "SolDevelo", "Jira", "DevOps"],
  },
  {
    id: "jira-dc-cloud-migration-report",
    title: "Is Your Jira Data Center to Cloud Migration a Stroll or an Everest Expedition?",
    excerpt: "We developed Doctor Amor, an automated audit system that analyzes your Jira Data Center instance to provide a real complexity score and comprehensive migration risk report — completely free.",
    content: `
If your organization is still running on **Jira Data Center**, it's probably not due to a lack of innovation. It's because your instance is a massive, complex ecosystem—and, let's be honest, a bit intimidating. With the end of Data Center support looming, the question is no longer _if_ you're migrating, but how to prevent the process from becoming «open-heart surgery» without anesthesia.

At **QUABU SOLUTIONS**, we understand that for instances with millions of issues and a jungle of custom scripts, «we'll look at it tomorrow» is a high-risk strategy.

### The End of «Guesstimates»

![Migration overview](https://quabu.blog/wp-content/uploads/2026/03/Migration-1024x542.png)

Migrating a giant isn't a linear task. That's why we developed **Doctor Amor (Diagnostic Migration Data Center)**, an automated audit system that analyzes your instance with zero manual intervention after the initial setup.

Unlike generic sales pitches, our tool scans your system to provide an objective metric and a comprehensive risk report.

![Discover](https://quabu.blog/wp-content/uploads/2026/03/Discover-1024x566.png)

### What does the Doctor Amor diagnosis reveal?

What exactly does our «specialist» do?

- **Automated Analysis:** It scans your instance so you don't have to break a sweat.
- **Critical Point Detection:** It flags those sleepless-night issues, like configurations you didn't even know existed.
- **Real Complexity Score:** This isn't a random number; it's applied science to determine if your migration is a walk in the park or an expedition to Everest.
- **Resource Forecasting:** We deliver a report detailing the actual time and team (Consultants and Engineers) you will truly need.

![Jira DC Audit](https://quabu.blog/wp-content/uploads/2026/03/JiraDCAudit-1024x570.png)

Our system analyzes eight functional blocks to determine a **Global Complexity Score (0 to 100)**:

1. **The ScriptRunner Factor (Critical Weight: 20%):** We identify dependencies on Groovy scripts that will require manual refactoring for Cloud-native architecture.
2. **Configuration & Technical Debt:** We evaluate workflows, screens, and custom fields to avoid «migrating junk» and ensure a clean slate before the jump.
3. **Big Data Analysis:** We review the integrity of project-user associations, attachments, and comment volume.
4. **App Ecosystem & JSM:** We detect which add-ons (like Tempo or eazyBI) have equivalents and assess the complexity of your Assets/Insight structures.

![Complexity](https://quabu.blog/wp-content/uploads/2026/03/Complexity-1024x558.png)

### Real Timelines for Real Instances

The Doctor Amor report realistically classifies your effort level:

- **Trivial to Simple:** Direct migrations with minor tweaks (typically 2 to 7 weeks).
- **Moderate:** Requires partial redesign of logic or scripts (7 to 11 weeks).
- **Complex to Ultra-Complex:** For instances requiring extensive reconstruction of processes or integrations (11 to 24+ weeks).

![Complexity levels](https://quabu.blog/wp-content/uploads/2026/03/Complexityy-1024x550.png)

### Your Report: Completely Free and No Strings Attached

At **QUABU SOLUTIONS**, we want you to make decisions based on data science, not calendar panic. That's why we offer this analysis service **completely free of charge.**

You will receive a comprehensive document including:

- Your global difficulty score.
- Identification of critical points and non-standard configurations.
- High-level recommendations to mitigate risks and reduce complexity.

![Migration Xray](https://quabu.blog/wp-content/uploads/2026/03/MigrationJiraDCXray-1024x550.png)

![Migration Roadmap](https://quabu.blog/wp-content/uploads/2026/03/MigrationRoadmap-1024x535.png)

**Ready to find out how deep your Jira rabbit hole goes?** Contact us and let **Doctor Amor** take the pulse of your migration. No drama, just expert solutions.

**By [Raúl Peláez](https://www.linkedin.com/in/ra%C3%BAl-pel%C3%A1ez-mendoza-ba037a28/) #AtlassianChampions**
`,
    author: "Raúl Peláez",
    date: "March 28, 2026",
    readTime: "5 min read",
    category: "Articles",
    image: "https://quabu.blog/wp-content/uploads/2026/03/MigrationJiraCloudQuabu-scaled.png",
    tags: ["Atlassian", "Jira", "Data Center", "Cloud Migration", "ScriptRunner", "JSM"],
  },
  {
    id: "no-more-forms-ai-booking-jira",
    title: "🔮 This Week We Booked an Asset in Jira by Talking to an AI — Forms Will Never Be the Same",
    excerpt: "We integrated JSM portal chat with Rovo AI and Apwide's Booking app. The result? You can now book Assets in Jira just by chatting with an AI agent. #NoMoreForms",
    content: `
Some weeks you finish Friday thinking *"well, that was a week."* And some weeks you finish thinking *"wait… did we just see the future?"* This was one of the second kind.

In **[Quabu Solutions](https://www.quabusolutions.com/)** we've been working on integrating the **Jira Service Management** portal chat with **Rovo** AI and **[Booking](https://marketplace.atlassian.com/apps/1236123/booking-resource-reservation-for-jira-and-jsm?hosting=cloud&tab=overview)**, the app by **[Apwide](https://www.apwide.com/)** (in case you don't know it, it's the first application in the entire Atlassian ecosystem that lets you book Assets and check their availability in real time. Yes, the first in the world. Not bad for the Apwide team! 😄)

## The problem (and the solution we didn't see coming)

The initial challenge was that Rovo and Booking's AI agent weren't talking to each other. Literally. Like two coworkers who spot each other in the hallway and suddenly find their phones extremely interesting to avoid saying hello.

It was in a conversation with **David** that we found the way forward:

- Using ***skills*** to allow any Rovo agent to access Assets and the booking system. Simple in concept, powerful in execution.

![Skills configuration](https://quabu.blog/wp-content/uploads/2026/03/UpdateCaptura-1-1024x625.png)

And when it started working… the question that changed everything arrived.

## 💡 The million-dollar question

> ***Why would I fill out a form if Rovo can book the Asset for me directly from the chat?***

![It's working](https://quabu.blog/wp-content/uploads/2026/03/ItsworkingCaptura-1.png)

Because, as science-fiction as it sounds, **it is more natural and more comfortable to ask an AI to make a booking via chat than to open a form, fill it in field by field, submit it and pray there's no validation error at the end**. Sound familiar?

Forms were, in their day, a great innovation. They digitised processes, organised workflows, saved countless administrative lives. They deserve a round of applause. But let's be honest: they've spent decades being the most annoying part of any process, especially the government ones. 🙃

## 🤖 The real shift: agents talking to agents

What we're building here goes beyond a UX improvement. It's a mindset change:

*"**My agents will talk to other agents. No forms. No friction. Just natural language.**"*

And the funny thing is that, in making this enormous technological leap, **we're actually going back to something very old and very human**: when you'd call a manager, explain what you needed, and they'd handle all the paperwork. Well, that manager is now an AI, available at 3am, and it never complains if you ask the same thing twice.

## 👏 Credit where credit is due

I can't close this post without calling something out: the **Apwide team** delivered all of these improvements in record time. And not just that — if you've tried the latest version of Booking, you can already see the **availability of a space before booking it**, directly from the JSM portal, with a user experience that's genuinely a pleasure to use.

![Booking availability](https://quabu.blog/wp-content/uploads/2026/03/OKCaptura-1-1024x607.png)

At Quabu we take this seriously, because at the end of the day, the tools we recommend to our clients are a reflection of who we are. And this is a **solid 10**. 🙌

**So, what do you think?**

Do you believe forms are on their way out? Are you already exploring AI agents in your Atlassian workflows?

Our Quabu clients are about to discover a lot of exciting things very soon. If you're curious — or if you hate forms as much as we do — **[let's talk](https://www.quabusolutions.com/contact)**. 👇

*#NoMoreForms*

By [Raul Pelaez](https://www.linkedin.com/in/ra%C3%BAl-pel%C3%A1ez-mendoza-ba037a28/) (Atlassian Champion)
`,
    author: "Raul Pelaez",
    date: "March 24, 2026",
    readTime: "4 min read",
    category: "Articles",
    image: "https://quabu.blog/wp-content/uploads/2026/03/ENQuabuApWideBookingAppJiraCloud-scaled.png",
    tags: ["Atlassian", "Jira", "Rovo", "AI", "Apwide", "Booking", "JSM", "MCP"],
  },
  {
    id: "tempo-timesheets-rovo-mcp",
    title: "Pioneering the Future: The World's First Integration of Tempo Timesheets and Atlassian Rovo via Custom MCP",
    excerpt: "We built a Remote MCP Server that brings the entire Tempo ecosystem — Timesheets, Plans, and Financials — into Jira Rovo as actionable AI Skills.",
    content: `
At **[Quabu Solutions](https://www.quabusolutions.com/)**, we don't just wait for the "official" roadmap. We build it.

If you've been exploring **Atlassian Rovo**, you know the potential of AI Agents is limitless — except when it comes to your most critical data: Time, Resources, and Budgets. Currently, there is no official connector for Tempo Timesheets, Plans, or Financial in the Rovo ecosystem.

**Until now.**

We are thrilled to announce that we have successfully developed a **Remote MCP (Model Context Protocol) Server** that brings the entire Tempo ecosystem into Jira Rovo as actionable "**Skills**."

![Achieved](https://quabu.blog/wp-content/uploads/2026/03/AchievedCaptura-1-1024x489.png)

## The Challenge: Why Hasn't This Been Done?

Integrating Tempo with LLMs is notoriously tricky. High API resource consumption and frequent timeouts often stall standard integrations. To solve this, we moved away from traditional methods and built a robust, high-performance bridge.

![Test](https://quabu.blog/wp-content/uploads/2026/03/TestCaptura-1.png)

### Our Solution: The Quabu Tempo MCP WebApp

Our Beta WebApp acts as the command center for this integration. It's not just a connector; it's a full-scale management interface for AI-driven project tracking.

| **Feature** | **Description** |
| --- | --- |
| **Tempo MCP Server** | Connects Timesheets, Plans, and Financials directly to Rovo Agents. |
| **Custom Dashboards** | Visualize Jira and Tempo reports with high-fidelity charts and tables. |
| **Cloudflare Proxy** | A Server-Rendered proxy ensuring zero-timeout performance and stability. |
| **Secure Access** | 2SV (2-Step Verification) via email to ensure your financial data stays private. |
| **Configuration Hub** | Granular control over API tokens (Timesheets, Plans, Financial) and Jira Scopes. |

---

## How It Works (The Technical Edge)

Our integration uses a **Custom MCP Server** architecture. By deploying a specialized proxy on **Cloudflare Workers**, we bypass the limitations of client-side rendering. This allows Rovo Agents to "talk" to Tempo data in real-time without the lag.

### Setting Up a Rovo Agent with Tempo Skills:

1. **The OAuth Dance:** Our WebApp facilitates a seamless OAuth 2 validation.

![MCP Tempo](https://quabu.blog/wp-content/uploads/2026/03/MCPTempoCaptura-1.png)

2. **Add Skills:** Simply point your Rovo Agent to our MCP URL.

![Skills](https://quabu.blog/wp-content/uploads/2026/03/DestrezasCaptura-1-1024x493.png)

3. **Discovery:** Rovo automatically discovers Tempo methods as "Skills," allowing you to ask things like: *"Which team members have under-logged hours this week according to Tempo Timesheets?"* or *"What is the budget variance on Project X in Tempo Financial?"*

![Rovo Tempo MCP](https://quabu.blog/wp-content/uploads/2026/03/RovoTempoMCPCaptura-1-1024x493.png)

> **Note:** We've even included a dedicated **MCP Testing Suite** within the app so you can watch how the AI discovers parameters and communicates with the API in real-time.

---

## Why This Matters

We are returning to a "Bespoke" era. For years, companies had to settle for "out of the box" limitations. With this MCP bridge, we are enabling **Custom AI Solutions** tailored to your specific reporting needs. If you need a specific report that doesn't exist? We can build the method and publish it as a Rovo Skill in minutes.

### Experience the Beta

The WebApp is currently in Beta and performing exceptionally well.

![Dashboard](https://quabu.blog/wp-content/uploads/2026/03/dashboardCaptura-1-1024x398.png)

## Ready to Lead the AI Revolution in Your Jira Instance?

We are looking for a select group of partners to test this integration and provide feedback as we move toward a full release.

**Want to see it in action or get the Cloudflare deployment code?**

**[Contact Quabu Solutions Today](/contact)** – Let's make your Jira Rovo Agents the smartest members of your team.
`,
    author: "Quabu Solutions",
    date: "March 20, 2026",
    readTime: "5 min read",
    category: "Articles",
    image: "https://quabu.blog/wp-content/uploads/2026/03/JiraCloudTempoMCPRovoAgentSkills-scaled.png",
    tags: ["Atlassian", "Jira", "Rovo", "MCP", "Tempo", "Timesheets", "AI", "Cloudflare"],
  },
  {
    id: "quabu-eazybi-partner",
    title: "🚀 Quabu Solutions Is Now an eazyBI Partner",
    excerpt: "We're excited to announce that Quabu Solutions has officially become an eazyBI partner, one of the most powerful Business Intelligence and reporting solutions for the Atlassian ecosystem.",
    content: `
## 🎉 Exciting News!

We're thrilled to announce that **Quabu Solutions** has officially become an **eazyBI partner**, one of the most powerful **Business Intelligence and reporting solutions for the Atlassian ecosystem**.

---

## 📊 What Can We Do with eazyBI?

With eazyBI, we help organizations transform data from **Jira, Jira Service Management, and other sources** into actionable insights through:

- 📊 **Advanced dashboards**
- 📈 **Multidimensional data analysis**
- ⚙️ **Integrations with multiple data sources**
- 🔎 **Deep insights to improve decision-making**

---

## 🚀 Expanding Our Capabilities

At **Quabu Solutions**, we continue to expand our capabilities to deliver **advanced analytics and reporting solutions that truly add value to teams**.

If you want to **unlock the full potential of your Jira data**, we'd be happy to help.

#Atlassian #Jira #eazyBI #BusinessIntelligence #DataAnalytics #Reporting #QuabuSolutions
`,
    date: "March 17, 2026",
    readTime: "2 min read",
    category: "News",
    image: "https://quabu.blog/wp-content/uploads/2026/03/eazyBIPartnerQuabu.png",
    tags: ["Atlassian", "Jira", "eazyBI", "Business Intelligence", "Data Analytics", "Reporting"],
    author: "Quabu Solutions",
  },
  {
    id: "atlassian-community-palma-2026",
    title: "🚀 Kicking Off 2026 with the Atlassian Community in Palma de Mallorca 🏝️",
    excerpt: "Our colleague Raúl Peláez, Atlassian Champion at Quabu Solutions, will be speaking at the ACE Palma de Mallorca event about using multiple Rovo agents for Marketing processes and connecting them with Lovable via Atlassian MCP.",
    content: `
## 🎤 We're Thrilled to Share This!

Our colleague **Raúl Peláez**, Atlassian consultant at **Quabu Solutions** and **Atlassian Champion**, will be one of the speakers at the upcoming **ACE Palma de Mallorca** Atlassian community event, taking place **online on March 19th at 4:30 PM (CET)**.

---

## 🧠 What Will the Session Cover?

In his session, Raúl will demonstrate **how to use multiple Rovo agents applied to Marketing processes**, showcasing how **people + AI** can collaborate to boost team productivity.

Additionally, he'll show how the tickets generated during these processes end up becoming **real development using Lovable together with the Atlassian MCP**.

---

## 🚀 A Highly Practical Session

This is a very hands-on session designed to help you understand **how to connect AI, processes, and development within the Atlassian ecosystem**.

If you're interested in seeing **Rovo in action and discovering new ways of working with Atlassian**, don't miss it!

---

## 📝 Register Now

👉 Sign up here: [ACE Palma de Mallorca Event](https://ace.atlassian.com/events/details/atlassian-palma-de-mallorca-presents-casos-practicos-en-la-gestion-de-servicios/)

#AtlassianChampion #Atlassian #JSM #Rovo #ACEPalmadeMallorca
`,
    date: "March 14, 2026",
    readTime: "2 min read",
    category: "News",
    image: "https://quabu.blog/wp-content/uploads/2026/03/AtlassianACEMallorca2026.jpg",
    tags: ["Atlassian", "Rovo", "ACE", "Community", "Marketing", "Lovable", "MCP"],
    author: "Quabu Solutions",
  },
  {
    id: "jira-to-code-lovable-atlassian-mcp",
    title: "From Ticket to Real Code: Automating Development with Lovable and Atlassian MCP",
    excerpt: "What if your Jira tickets could practically develop themselves? At Quabu Solutions, we've implemented a revolutionary workflow connecting Jira with Lovable through the MCP protocol.",
    content: `
## From Ticket to Live Code: A New Development Paradigm

What if your Jira tickets could practically develop themselves? In traditional software development, there's a huge time gap between when a Product Owner defines a task and when a developer starts writing code. But that gap is closing.

At **QUABU SOLUTIONS**, we've implemented a revolutionary workflow: connecting **Jira** with **Lovable** through the **MCP (Model Context Protocol)**. The result is astonishing: information flows from the management board directly to code execution.

---

## 🧠 Jira as the "Brain" of Development

In this use case, the **Jira Board** isn't just a place to move cards around — it's the source of truth for the AI. Thanks to the **Atlassian MCP**, Lovable doesn't just "know" there's a pending task; it can read the full context:

- **Change Description:** What exactly is needed.
- **Space Context:** Which part of the website is being worked on.
- **Acceptance Criteria:** How the final result should look.

---

## 🛠️ The Workflow: "To Do" to "Done" in Record Time

The process we showcase in our latest video follows these key steps:

1. **Ticket Creation:** We create a ticket on the Jira Board requesting a specific change to the website (for example, a new section or a design adjustment).
2. **Synchronization via MCP:** Lovable, connected through the MCP protocol, accesses the ticket details in real time.
3. **Automatic Development:** Lovable interprets the instructions and develops the changes directly, understanding the current project structure.
4. **Validation:** The code is generated while respecting the technical specifications defined in Jira.

---

## 🚀 Why Is This a Paradigm Shift?

This integration isn't just about writing code faster — it's about **eliminating context loss**. By allowing Lovable to "live" within your Atlassian ecosystem:

- **Misunderstandings are eliminated:** The AI reads directly from the original source of the request.
- **Radical acceleration:** We drastically reduce the Software Development Life Cycle (SDLC).
- **Focus on Value:** Your team can focus on strategy and architecture, while AI handles ticket-based execution tasks.

> **Automation isn't the future — it's the competitive advantage of the present.** At Quabu Solutions, we help you integrate these tools so your team can be 10x more productive.

---

## 📺 Watch the Workflow in Action

Don't miss our technical demo where you'll see how a simple move in Jira triggers automatic development in Lovable.

[![Watch the video](https://img.youtube.com/vi/QiFfCKnae3g/maxresdefault.jpg)](https://www.youtube.com/watch?v=QiFfCKnae3g)

🎬 [From Jira Ticket to Live Code: Lovable + Atlassian MCP Integration](https://www.youtube.com/watch?v=QiFfCKnae3g)

---

### Ready to Transform the Way You Develop?

If you want your company to adopt AI-powered workflows with Atlassian MCP to optimize your web development, at **QUABU SOLUTIONS** we have the experience to make it happen.

- **Explore our solutions:** [quabusolutions.com](https://www.quabusolutions.com/)
- **Contact us today:** [hello@quabusolutions.com](mailto:hello@quabusolutions.com)
    `,
    category: "Articles",
    date: "March 8, 2026",
    readTime: "4 min read",
    author: "Quabu Team",
    image: "https://quabu.blog/wp-content/uploads/2026/03/LovableAtlassian-scaled.png",
    tags: ["Lovable", "Atlassian MCP", "Jira", "Automation", "AI", "Web Development", "SDLC"],
  },
  {
    id: "qa-automation-antigravity-rovo-mcp",
    title: "QA Automation: How to Create Test Cases in JSM Using Antigravity and Atlassian Rovo MCP",
    excerpt: "At Quabu Solutions, we've taken a leap into the future by integrating Antigravity with the new Rovo MCP (Model Context Protocol). Discover how this combination is changing the rules of the game for QA teams.",
    content: `
## QA Automation with AI: The Future Is Already Here

In the dynamic world of software development, the **Quality Assurance (QA)** phase is often a bottleneck. Writing test cases manually consumes time and resources that your team could dedicate to innovation. But what if you could automate this process using Artificial Intelligence directly within your Atlassian ecosystem?

At **QUABU SOLUTIONS**, we've taken a leap into the future by integrating **Antigravity** with the new **Rovo MCP (Model Context Protocol)**. In this article, we'll tell you how this combination is changing the rules of the game.

---

## 🚀 The Perfect Synergy: Antigravity + Atlassian Rovo

The key to this innovation lies in the ability to connect powerful tools through open protocols. By using the **Atlassian extension** and the **MCP protocol**, we enable Rovo's AI to "speak" directly with Antigravity.

### What components are involved in this workflow?

- **Antigravity:** Our robust automation solution.
- **Atlassian Rovo:** The AI agent designed to understand the context of your projects.
- **MCP (Model Context Protocol):** The standard that enables information exchange between AI agents and external tools.
- **Jira Service Management (JSM):** The portal where test cases are materialized and organized.

---

## 🛠️ How Does the Workflow Operate?

The process is surprisingly smooth and reduces human intervention to strategic oversight:

1. **Connection:** We link Antigravity with the Atlassian environment through the official extension.
2. **Context with Rovo:** Thanks to MCP, Rovo accesses your project's documentation and requirements.
3. **Automatic Generation:** The AI analyzes the needs and instructs Antigravity to create the **test cases**.
4. **Integration in JSM:** The cases are automatically published in the **Jira Service Management** portal, ready to be executed.

---

## ✅ Benefits for Your QA Team

Implementing this integration isn't just a matter of technology — it's about business results:

- **Surgical Precision:** AI eliminates human errors in writing steps and validations.
- **100% Coverage:** Ensure every requirement has its corresponding test case without additional effort.
- **Time Savings:** What used to take hours of manual writing is now resolved in seconds.

> **At Quabu Solutions, we don't just follow the future of QA — we build it.** We help companies transform their quality processes into high-speed engines.

---

## 📺 Watch the Integration in Action

Below, you can watch the full video where we show step by step how Antigravity and Rovo MCP work together to revolutionize a JSM portal.

[![Watch the video](https://img.youtube.com/vi/WomK5OEVXh8/maxresdefault.jpg)](https://www.youtube.com/watch?v=WomK5OEVXh8)

🎬 [AI-Driven QA: Antigravity + Atlassian Rovo MCP for JSM Test Case Automation](https://www.youtube.com/watch?v=WomK5OEVXh8)

---

### Want to Take Your QA to the Next Level?

At **QUABU SOLUTIONS**, we are experts in implementing intelligent workflows with Atlassian tools. If you're looking to reduce costs and increase the quality of your deployments, we're here to help.

- **Visit us:** [www.quabusolutions.com](https://www.quabusolutions.com/)
- **Let's talk:** [hello@quabusolutions.com](mailto:hello@quabusolutions.com)
    `,
    category: "Articles",
    date: "March 8, 2026",
    readTime: "4 min read",
    author: "Quabu Team",
    image: "https://quabu.blog/wp-content/uploads/2026/03/AntigravityAtlassian-scaled.png",
    tags: ["Antigravity", "Atlassian Rovo", "MCP", "JSM", "QA", "Test Automation", "AI"],
  },
  {
    id: "loom-fundamentals-certification",
    title: "🎥 Fewer Meetings, More Loom: The New Loom Fundamentals Certification Is Here",
    excerpt: "The official Loom Fundamentals certificate is now live on Atlassian University. It's free, takes 45 minutes, and teaches you how to master async video communication with Loom and AI.",
    content: `
## Great News: The Loom Fundamentals Certificate Is Now Live!

Today we bring you exciting news: **[The official Loom Fundamentals certificate is now available](https://community.atlassian.com/forums/Training-Certification/Loom-Fundamentals-Certificate-is-LIVE/m-p/3200023)**.

### Why Should You Get It?

It's not just "another badge." It's a quick and effective guide to mastering asynchronous communication. In less than an hour you'll learn:

- How to structure video messages that people **actually want to watch**.
- How to use **Loom's AI** to summarize videos and save even more time.
- How to integrate these videos into your daily workflow with Jira and Confluence.

### The Best Part:

- It's **free**.
- It takes about **45 minutes** to complete.
- You earn an **Atlassian University** badge that looks great on LinkedIn.

At **Quabu** we believe the future of work isn't about spending 8 hours on video calls — it's about owning your time. This course is the first step to achieving that.

---

## Ready to Earn the Badge?

1️⃣ Go to 👉 [https://cp.certmetrics.com/atlassian](https://cp.certmetrics.com/atlassian)

2️⃣ In the left menu, click on **SCHEDULE AN EXAM**

3️⃣ Choose **Certiverse – Certificate exams and invitation only**

4️⃣ Scroll all the way down and you'll find a small (almost hidden) button that says **"SSO TO CERTIVERSE"**

5️⃣ In Certiverse, go to **"Exams"** and select **"Loom Fundamentals"**

6️⃣ Click **"GET STARTED"** and you're done ✅

---

More info:

- [Atlassian Community announcement](https://community.atlassian.com/forums/Training-Certification/Loom-Fundamentals-Certificate-is-LIVE/m-p/3200023)
- [Certmetrics Portal](https://cp.certmetrics.com/atlassian)
    `,
    category: "News",
    date: "March 3, 2026",
    readTime: "3 min read",
    author: "Quabu Team",
    image: "https://quabu.blog/wp-content/uploads/2026/03/loom2.png",
    tags: ["Loom", "Atlassian", "Certification", "Async Communication", "Atlassian University"],
  },
  {
    id: "jira-ai-agents-workflow-integration",
    title: "Jira Transcends Human Management: Atlassian Introduces AI Agent Integration in Workflows",
    excerpt: "The project management ecosystem is undergoing a paradigm shift. Atlassian has officially announced that Rovo Agents can now be assigned Jira tickets and mentioned in collaboration threads.",
    content: `
## A New Member in the Directory: The Agent as Executor

The project management ecosystem is undergoing a paradigm shift. Atlassian [has officially announced](https://www.atlassian.com/blog/announcements/ai-agents-in-jira) that **Rovo Agents** are no longer mere consultation assistants, but operational entities within Jira. This update, currently in _Open Beta_, allows for the first time in the platform's history to **assign tickets directly to an AI and mention it in collaboration threads.**

The major innovation lies in the agent's identity. By integrating into the directory, the Rovo agent behaves, for workflow purposes, as just another user. This unlocks three critical capabilities for enterprise scalability:

1. **Direct Assignment (Assignee):** Project managers can delegate specific tasks to specialized agents. From generating technical documentation to analyzing error logs, the agent takes ownership of the task on the board.
2. **Collaboration via @mentions:** The ability to invoke AI in comments enables real-time iteration. A developer can mention the agent to request a code review or a summary of business requirements without leaving the ticket view.
3. **Workflow Orchestration:** Agents can be inserted into state transitions. For example, a ticket can automatically move to an agent for a security validation before being approved by a human supervisor.

---

## The Responsibility Dilemma: Governance and RACI

The integration of agents raises a fundamental question for IT managers: **Who is ultimately responsible for a ticket assigned to an AI?**

In a professional governance model, it is imperative to distinguish between the **Responsible** — the agent executing the task — and the **Accountable** — the human validating the result. Atlassian has designed this functionality while maintaining existing permission schemes and audit trails. Every action performed by an agent is logged, allowing administrators to monitor output quality and ensure no process remains in an operational "limbo."

---

## Risk Mitigation and the "Drift Effect"

One of the greatest fears in AI adoption is the possibility of erroneous or inconsistent results (what the industry calls hallucinations). To counter this risk, Rovo's architecture relies on the **Teamwork Graph**, ensuring the agent acts based exclusively on the organization's real context (Confluence, Jira, Bitbucket, etc.).

Furthermore, through the **Model Context Protocol (MCP)** standard, agents can connect to external tools like Figma or GitHub with a structured data framework, significantly reducing the margin of error and preventing unpredictable behavior in business logic.

---

## Toward a Hybrid Workforce

We are at the beginning of an era where efficiency will not depend solely on the size of the human team, but on the ability to orchestrate AI agents within well-defined processes. Jira is thus positioning itself as the control center for this hybrid workforce.

---

> **Author's note:** As an **Atlassian Champion** at **[QUABU](https://www.quabusolutions.com/)**, I closely follow the implementation of these technologies in enterprise environments. The key to success lies not in the tool itself, but in the strategic configuration of the boundaries and responsibilities of these new agents.

**Interested in diving deeper into how to implement these agents in your current projects?** I'd be happy to analyze the roadmap for your Jira instance with you.

Official sources:

- [https://www.atlassian.com/blog/announcements/ai-agents-in-jira](https://www.atlassian.com/blog/announcements/ai-agents-in-jira)
- [https://www.atlassian.com/blog/ai/rovo-ai-agents-at-work](https://www.atlassian.com/blog/ai/rovo-ai-agents-at-work)
    `,
    category: "News",
    date: "February 24, 2026",
    readTime: "6 min read",
    author: "Raúl Peláez Mendoza",
    image: "https://quabu.blog/wp-content/uploads/2026/02/RovoAsAssignee-scaled.png",
    tags: ["Jira", "Rovo", "AI Agents", "Atlassian", "Workflow", "Automation", "Future of Work"],
  },
  {
    id: "jira-formula-custom-fields",
    title: "Jira Cloud Takes a Historic Leap: Formula Custom Fields Are Finally Here",
    excerpt: "After years of relying on external apps and complex automations, Atlassian has officially announced native Formula Custom Fields in Jira Cloud. This changes everything.",
    content: `
## The Historic Problem of Jira: Data Without Intelligence

Jira has always been excellent at storing information.

But not so great at interpreting it.

If you wanted something as simple as:

- Calculating a risk based on probability × impact
- Calculating a cost automatically
- Showing a computed date
- Or deriving any value from other fields

you had three options:

1. Automations
2. Marketplace Apps
3. Export data outside of Jira

They all had something in common:

**Unnecessary complexity.**

The data was in Jira. But the logic wasn't.

---

## What Are Formula Custom Fields

The new [Formula Custom Fields](https://community.atlassian.com/forums/Jira-articles/New-Feature-Formula-Custom-Fields-in-Jira-Cloud/ba-p/3163834) are a new type of custom field that allows you to dynamically calculate values based on other fields in the same work item.

In other words:

**Jira is starting to think.**

These fields:

- Are read-only
- Are calculated automatically
- Can use numbers, dates, text, selectors, priorities, etc.
- Are displayed directly on the issue

And most importantly:

**The value is always up to date.**

No automations. No scripts. No apps.

---

## Real Examples That Will Now Be Trivial

This unlocks use cases that previously required engineering.

For example:

### Financial Management

Total cost:
\`\`\`
Story Points × Cost per Point
\`\`\`

### Risk Management

Risk Score:
\`\`\`
Impact × Probability
\`\`\`

### SLA Tracking

Time remaining:
\`\`\`
Deadline − Current Date
\`\`\`

### Smart Prioritization

Dynamic score based on multiple factors.

All of this, now, **native**.

---

## The Real Revolution: Jira Becomes a Derived System

Until now, Jira was primarily a data entry system.

With this, it starts becoming a **knowledge derivation system**.

This has profound implications:

- Fewer automations
- Fewer inconsistencies
- Fewer human errors
- Less dependency on external apps

And more clarity.

---

## But There's Something Even More Important

Atlassian has confirmed that this is just the beginning.

The roadmap already includes:

- Use in JQL searches
- Full support in company-managed projects
- New data types (text, dates, logic)
- Integration with Atlassian Intelligence to generate formulas from natural language

Yes.

**Natural language.**

The future will look something like:

> "**Calculate the profit margin**"

And Jira will create it.

---

## What This Really Means

This feature eliminates one of the biggest historical dependencies on the Marketplace.

For years, apps like:

- ScriptRunner
- Jira Misc Custom Fields
- Automation for Jira

Have filled this gap.

Now, Atlassian is starting to close it.

And that's significant.

---

## What Many Admins Aren't Seeing (Yet)

This isn't just a new feature.

It's a **change in philosophy**.

Jira is evolving from:

**A tracking system**

to

**An operational modeling system**

Where data isn't just stored.

It's interpreted.

---

## The Real Impact on Organizations

This will reduce:

- Complexity
- Costs
- Dependency on external apps

And will increase:

- Clarity
- Control
- Analytical capability

All within Jira.

---

## Our Take at Quabu

This is, without exaggeration, one of the most important features Jira Cloud has received in years.

Because it eliminates friction.

And in Jira, friction is the real enemy.

*(Article by [Raúl Peláez Mendoza](https://www.linkedin.com/in/ra%C3%BAl-pel%C3%A1ez-mendoza-ba037a28/))*
    `,
    category: "News",
    date: "February 21, 2026",
    readTime: "6 min read",
    author: "Raúl Peláez Mendoza",
    image: "https://quabu.blog/wp-content/uploads/2026/02/FormulaFieldsJiraCloudQuabu.png",
    tags: ["Jira Cloud", "Formula Custom Fields", "Atlassian", "Jira Admin", "Custom Fields", "Productivity"],
  },
  {
    id: "quabu-opens-miami-office",
    title: "🌴 Quabu Opens an Office in Miami",
    excerpt: "We are thrilled to announce that Quabu now has an office in Miami — one of the most exciting emerging tech hubs. We're growing, and new career opportunities are coming soon!",
    content: `
## Quabu is Growing: We Now Have an Office in Miami!

At Quabu, we continue to grow and we are excited to announce that **we now have an office in Miami**.

Miami is rapidly emerging as a major technology hub — a kind of new Silicon Valley where innovation, talent, and global vision come together. We want to be there, actively participating in this ecosystem and helping build the future.

## Why Miami?

Miami has been consolidating its position as one of the most dynamic tech cities in the world. With a vibrant startup scene, access to international markets, and a thriving community of entrepreneurs and investors, it's the perfect base for Quabu's continued expansion.

Being present in Miami means we can better serve clients across the Americas while remaining connected to the global Atlassian ecosystem.

## Career Opportunities Coming Soon

🚀 **We will soon open new career opportunities in Miami.**

If you would like to join Quabu and be part of this exciting new chapter, we'd love to hear from you. We're looking for talented people who share our passion for technology, Atlassian solutions, and building things that matter.

📩 [Work with us](https://quabuapps.atlassian.net/servicedesk/customer/portal/1/group/1/create/47)

## We Keep Moving Forward

This new office is a statement of intent: Quabu is here to grow, to innovate, and to bring the best Atlassian solutions to more companies around the world.

Stay tuned — more exciting news is coming!
    `,
    category: "News",
    date: "February 20, 2026",
    readTime: "2 min read",
    author: "Quabu Team",
    image: "https://quabu.blog/wp-content/uploads/2026/02/QuabuOficinaMiami.png",
    tags: ["Quabu", "Miami", "Office", "Hiring", "Growth"],
  },
  {
    id: "building-atlassian-apps-2026",
    title: "🚀 How to Build Apps & Integrations for Atlassian in 2026",
    excerpt: "The Atlassian ecosystem is changing fast. At Quabu we stay ahead — from Forge UI Kit to AI Apps Builder, Rovo Studio, and MCPs. Discover the best approach for your team.",
    content: `
## The Atlassian Ecosystem Is Evolving Fast

The world of **Atlassian** is changing rapidly, and at **Quabu** we like to stay one step ahead. **Building apps for Jira or Confluence is not what it used to be**: today there are much faster, more powerful and secure ways to do it, and we want to show you how.

---

## Traditional Code: Full Control with Forge UI Kit

If your team has developers, coding with **Forge UI Kit** remains a solid choice. You can create **native apps**, with your own interface and logic, completely secure and auditable.

The process involves writing JavaScript or TypeScript, configuring resolvers, triggers and the \`manifest.yml\`. It's not just about writing code; it's about thinking through flows, permissions and the user experience. Yes, it takes time, but it gives you **absolute control** over your app — something critical for complex projects or those that need to maintain security and scalability long-term.

**Approximate time:**

- Simple apps: **1–3 days**
- More complete apps: **1–2 weeks**
- Complex production apps: **several months**

---

## AI Apps Builder: From Idea to App in Minutes

Not every team has time or developers. This is where [**AI Apps Builder** (like the one by SaaSJet)](https://marketplace.atlassian.com/apps/1238421/ai-apps-builder-for-jira-no-code-way-to-build-forge-apps) comes in. Just describe what you want in natural language and the AI generates the **frontend, backend, manifest and scopes** ready to install.

For example, you could say:

> *"Create a panel showing issues assigned to the user with a delivery date in the next 7 days."*

In minutes you have a functional app that you can use as-is or download and improve with a developer. This enables **rapid prototyping** and immediate results without needing to learn Forge or React.

---

## Rovo Studio: Build with AI (Early Access)

Atlassian has also taken a huge step with **Rovo Studio**, its new *Build with AI* tool. Here we're not just talking about apps: you can create **AI agents, automations and full apps** from a simple natural language prompt, and publish them directly in Jira or Confluence.

That said, **Rovo Studio (its Build with AI part) is still in Early Access**, so only some users can try it and it's subject to changes. Even so, it shows where app creation in Atlassian is heading: everything integrated, from idea to ready-to-use solution, without writing code. **It's like having an assistant that understands exactly what you want and turns it into a real, functional solution.**

---

## Advanced Tools: Rovo Dev, VS Code, Antigravity and MCPs

For teams that want **the best of both worlds**, at **Quabu** we explore how to combine these advanced tools:

- **Rovo Dev:** an IDE that integrates AI, code development and Forge to maintain full control and productivity.
- **VS Code or Antigravity:** environments for fast iteration and testing ideas without losing security, perfectly integrated with Rovo Dev.
- **MCPs for Atlassian and Forge:** add power to your IDEs, install the Rovo and Atlassian Apps.

This means you can have **full control**, while accelerating development and using the best of AI-assisted generation.

---

## In Summary: Which Option Is Right for You?

- **Forge + UI Kit:** Full control, ideal if you have developers and complex projects.
- **AI Apps Builder:** Rapid prototyping, for teams with fewer technical resources.
- **Rovo Studio (Early Access):** Everything integrated — apps + automations + agents, no code.
- **Rovo Dev + VS Studio + MCPs:** Advanced hybrid development, full control with speed and security.

At Quabu we test all these options, see what works best in each case and help you get the most out of them. We want you to learn with us and make your Atlassian projects easier, faster and more efficient.

*📣 If you want to keep your Jira and Confluence always at the cutting edge, **follow our blog**. At Quabu we share real experiences, practical advice and all the latest from the Atlassian ecosystem so you don't have to waste time guessing what works.*
    `,
    category: "Articles",
    date: "February 18, 2026",
    readTime: "6 min read",
    author: "Quabu Team",
    image: "https://quabu.blog/wp-content/uploads/2026/02/QuabuAppsAtlassian2026.png",
    tags: ["Atlassian", "Forge", "AI Apps Builder", "Rovo Studio", "Development", "2026"],
  },
  {
    id: "atlassian-google-cloud-alliance",
    title: "Atlassian and Google Cloud: An Alliance Redefining Enterprise Productivity",
    excerpt: "Atlassian and Google Cloud announce a historic partnership to bring advanced AI to millions of users. Discover what it means for your business and how Quabu can help you maximize its potential.",
    content: `
## Introduction: A New Era for Atlassian Users

At Quabu, we've been helping companies implement, optimize, and scale Atlassian tools like Jira, Confluence, and Loom for years. That's why we're excited to share a key announcement: Atlassian has sealed a multi-year strategic alliance with Google Cloud to integrate Artificial Intelligence (AI) capabilities into its products and deliver even more secure, scalable, and collaborative cloud performance.

This partnership isn't just a technological advancement — it's a real opportunity for businesses like yours to work smarter and faster.

## Key Points of the Atlassian–Google Cloud Alliance

### 1. Migration to AI-Optimized Infrastructure

Atlassian's flagship applications — Jira, Confluence, and Loom — will run on Google Kubernetes Engine (GKE) and Cloud Spanner, delivering enhanced security, reliability, and performance.

### 2. Native Integration with Google AI

Leveraging Gemini and Vertex AI to power Atlassian Rovo, the intelligent assistant that already helps millions of users find information, automate tasks, and connect tools intelligently.

### 3. Availability on Google Cloud Marketplace

Atlassian licenses can now be purchased directly on Google Cloud Marketplace, optimizing budgets and simplifying procurement.

## What Does This Mean for Businesses?

The collaboration will bring features such as:

- **Advanced Automation**: Issue tracking, documentation generation, and automatic project summaries
- **Intelligent Search**: Find relevant information in seconds, even across dispersed repositories
- **Smoother Collaboration**: Direct connection with Google Workspace, allowing work in Jira or Confluence from the Google ecosystem

## How Quabu Can Help You Seize This Opportunity

At Quabu, we don't just implement Atlassian tools — we adapt them to your way of working. With this new alliance, we can help you:

- **Design a Google Cloud migration strategy** for Jira, Confluence, and Loom
- **Configure and train Atlassian Rovo** for your specific workflows
- **Integrate Google Workspace with Atlassian** to maximize real-time collaboration
- **Train your team** on the new AI features so the transition is productive from day one

## Practical Example: From Theory to Real Productivity

Imagine a development team that uses Jira to manage issues and Google Docs for documentation.

With the Atlassian–Google Cloud integration and Quabu's configuration:

- Rovo analyzes the backlog, generates weekly summaries, and suggests priorities
- Confluence documentation automatically syncs with Google Drive documents
- The team saves hours on follow-up meetings and information searches

## Quabu's Optimization Process

Quabu transforms the theory of this alliance into real productivity for your business, following a structured methodology:

### 1. Strategy & Consulting

Everything starts with an analysis of your current situation. Quabu doesn't just install software — we design a personalized roadmap to ensure cloud and AI adoption meets your business needs.

### 2. Ecosystem Integration

Once in the cloud, Quabu connects your tools. Native integrations are configured so that Google Workspace and Atlassian communicate with each other, eliminating information silos.

### 3. AI Configuration (Rovo + Gemini)

This is the differentiating step. Quabu configures and trains Atlassian Rovo (powered by Google's Gemini and Vertex AI models) to understand your specific context, enabling advanced automations and intelligent searches.

### 4. Training & Adoption

Finally, to guarantee ROI, your team receives training. The goal is for users to know how to delegate repetitive tasks to AI and focus on strategic work from day one.

## Frequently Asked Questions

### When will these new features be available?

The rollout will be progressive throughout 2025, starting with cloud users.

### Do I need to migrate to Google Cloud to take advantage of Atlassian's AI?

Not necessarily, but for maximum performance and security, it is recommended.

### Does Rovo replace other bots I already use in Jira?

Rovo is more powerful and can integrate with existing bots, expanding their capabilities.

### Can I continue using Atlassian on my own servers?

Atlassian has announced that its primary focus is the cloud, and the Server version will be retired.

### Can Quabu integrate Atlassian with my current systems?

Yes, we design custom integrations to make the transition seamless.

### Does this integration have an additional cost?

It depends on your plan and licenses. We help you optimize your investment.

## Conclusion: A Key Moment to Make the Leap

The Atlassian–Google Cloud alliance isn't just a technical upgrade — it's a window to transform the way you work. At Quabu, we're ready to guide you every step of the way, ensuring you make the most of these innovations.

Want to know how to apply these improvements to your business? Contact us and we'll show you a personalized plan.
    `,
    category: "News",
    date: "February 10, 2026",
    readTime: "7 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop",
    tags: ["Atlassian", "Google Cloud", "AI", "Rovo", "Enterprise", "Partnership"],
  },
  {
    id: "exploring-atlassian-remote-mcp-server",
    title: "Exploring Atlassian Remote MCP Server: AI Takes Control of Jira",
    excerpt: "Atlassian introduces its Remote MCP Server for Jira Cloud, allowing Claude Desktop to interact with Jira naturally. This isn't just another integration — it's a glimpse into the future of enterprise software interaction through AI.",
    content: `
## Introduction

Atlassian has introduced its Remote MCP Server for Jira Cloud, a groundbreaking integration that allows AI assistants like Claude Desktop to interact with Jira in a natural, conversational way. This isn't just another API integration — it represents a fundamental shift in how we interact with enterprise software.

## What is MCP?

The Model Context Protocol (MCP) is an open standard that enables AI models to securely connect to external tools and data sources. Think of it as a universal translator between AI assistants and the software tools you use every day.

### Key Benefits

- **Natural Language Interaction**: Ask questions about your Jira projects in plain English
- **Contextual Understanding**: The AI understands your project structure, issues, and workflows
- **Secure Access**: Enterprise-grade authentication and authorization
- **Real-Time Data**: Always working with current information

## How It Works

### 1. Connection Setup

Setting up the MCP Server is straightforward:
- Configure the remote MCP server endpoint in your AI assistant
- Authenticate with your Atlassian account
- Grant appropriate permissions for project access

### 2. Natural Interaction

Once connected, you can:
- "Show me all critical bugs in Project X"
- "Create a new story for the authentication feature"
- "What's the sprint velocity for the last 3 sprints?"
- "Assign this issue to the frontend team"

### 3. Workflow Automation

The MCP Server enables sophisticated automation:
- Batch operations across multiple issues
- Intelligent triage based on content analysis
- Automated status updates and notifications

## Impact on Teams

### For Project Managers
- Instant project health dashboards through conversation
- Quick issue creation and assignment
- Sprint planning assistance

### For Developers
- Faster issue lookup and context gathering
- Natural language code review requests
- Automated documentation updates

### For Stakeholders
- Easy access to project metrics
- Natural language reporting
- Quick status checks without learning Jira

## The Future

This integration signals a broader trend: enterprise software moving toward AI-first interaction models. We expect to see:
- More tools adopting MCP
- Deeper integration with development workflows
- Predictive capabilities based on project patterns

## Conclusion

The Atlassian Remote MCP Server isn't just a feature release — it's a glimpse into the future of enterprise software. By enabling natural language interaction with Jira, Atlassian is making project management more accessible and efficient than ever.

The question is no longer whether AI will change how we interact with tools, but how quickly organizations will adapt to this new paradigm.
    `,
    category: "News",
    date: "February 7, 2026",
    readTime: "5 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    tags: ["MCP", "AI", "Jira", "Atlassian", "Claude"],
  },
  {
    id: "atlassian-rovo-mcp-server-ga",
    title: "Atlassian Rovo MCP Server Is Now GA: Take Your Workflows to the Next Level",
    excerpt: "Atlassian officially announces that the Rovo MCP Server is now in General Availability. This milestone enables secure integration of Atlassian workflows with AI assistants and external tools.",
    content: `
## General Availability Announcement

Atlassian has officially announced that the Rovo MCP Server has reached General Availability (GA). This milestone marks a significant moment for organizations looking to integrate AI capabilities into their Atlassian workflows.

## What's New in GA

### Production-Ready Features

The GA release includes several important improvements:

- **Enhanced Security**: SOC 2 Type II compliant with enterprise-grade encryption
- **Improved Performance**: 3x faster response times compared to beta
- **Extended Coverage**: Support for Jira, Confluence, and Bitbucket
- **Custom Actions**: Build your own MCP actions for specific workflows

### Reliability Improvements

- **99.9% uptime SLA**: Enterprise-grade availability
- **Global CDN**: Low-latency access worldwide
- **Automatic Failover**: Built-in redundancy for critical operations

## Key Use Cases

### 1. Intelligent Triage

Automatically categorize and prioritize incoming issues:
- Analyze issue content using AI
- Suggest appropriate assignees based on expertise
- Set priority based on historical patterns
- Route to correct project/team

### 2. Cross-Tool Workflows

Connect Atlassian tools with external systems:
- Sync Jira issues with external project management tools
- Update Confluence pages from external data sources
- Trigger Bitbucket actions from third-party CI/CD systems

### 3. Reporting & Analytics

Generate insights through natural conversation:
- "What's our team's average resolution time this quarter?"
- "Compare sprint velocity across teams"
- "Identify bottlenecks in our current workflow"

## Migration from Beta

For organizations already using the beta:

1. **Review Breaking Changes**: Check the migration guide for API changes
2. **Update Configurations**: Apply new security settings
3. **Test Thoroughly**: Validate all existing integrations
4. **Monitor Performance**: Use the new analytics dashboard

## Pricing & Availability

The Rovo MCP Server is available as part of:
- **Atlassian Cloud Premium**: Included with premium subscriptions
- **Atlassian Cloud Enterprise**: Full feature set with advanced controls
- **Standalone**: Available for select use cases

## Conclusion

The GA release of the Rovo MCP Server represents Atlassian's commitment to AI-powered workflows. Organizations can now confidently build production-grade integrations knowing they have enterprise support and reliability behind them.

This is just the beginning — expect continuous improvements and new capabilities as the MCP ecosystem matures.
    `,
    category: "News",
    date: "February 5, 2026",
    readTime: "4 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
    tags: ["Rovo", "MCP", "AI", "Atlassian", "GA Release"],
  },
  {
    id: "forge-mcp-server-for-developers",
    title: "Forge MCP: The Ally Your IDE Needed to Master Forge Development",
    excerpt: "Atlassian introduces the Forge MCP Server, a remote service based on the Model Context Protocol that provides contextual, up-to-date knowledge about Forge directly to your development tools and AI assistants.",
    content: `
## Introduction

Developing Forge apps just got significantly easier. Atlassian has introduced the Forge MCP Server, a remote service based on the Model Context Protocol that provides contextual, up-to-date knowledge about Forge directly to your development tools and AI assistants.

## What is Forge MCP Server?

The Forge MCP Server is a specialized knowledge provider that understands:

- **Forge APIs**: Complete reference for all Forge APIs and modules
- **Best Practices**: Recommended patterns and anti-patterns
- **Manifest Configuration**: Schema validation and suggestions
- **Permission Scopes**: Security-aware scope recommendations

## How It Transforms Development

### 1. Intelligent Code Completion

Your IDE now understands Forge at a deep level:
- Context-aware API suggestions
- Automatic import management
- Type-safe function signatures
- Real-time documentation inline

### 2. Manifest Assistance

No more guessing about manifest configurations:
- Auto-complete for manifest fields
- Validation against latest schema
- Permission scope suggestions based on code analysis
- Module configuration help

### 3. Debugging Support

Get help when things go wrong:
- Common error pattern recognition
- Fix suggestions with code examples
- Performance optimization tips
- Security vulnerability detection

## Supported IDEs

The Forge MCP Server works with:

- **VS Code**: Full integration via MCP extension
- **JetBrains IDEs**: IntelliJ, WebStorm support
- **Cursor**: Native MCP support
- **Any MCP-compatible tool**: Open standard compatibility

## Getting Started

### Step 1: Configure MCP

Add the Forge MCP Server to your IDE's MCP configuration:

The server URL and authentication details are available in your Atlassian Developer Console.

### Step 2: Authenticate

Use your Atlassian API token for authentication. The server respects your existing permissions and access levels.

### Step 3: Start Developing

Once connected, your AI assistant and IDE will have full access to Forge knowledge:
- Ask questions about Forge APIs
- Get code suggestions based on best practices
- Validate your manifest before deployment
- Debug issues with contextual help

## Real-World Examples

### Building a Custom Panel

Instead of searching through documentation, simply ask:
- "How do I create a Jira issue panel with Forge?"
- "What permissions do I need for reading issue data?"
- "Show me an example of a Forge resolver for custom fields"

### Optimizing Performance

Get performance insights directly in your IDE:
- "Why is my Forge function timing out?"
- "How can I batch API calls in Forge?"
- "What are the rate limits for this API?"

## The Bigger Picture

The Forge MCP Server is part of Atlassian's broader strategy to make platform development more accessible. By bringing knowledge directly to developers' tools, they're reducing the barrier to entry for Forge development.

## Conclusion

The Forge MCP Server is a game-changer for Forge developers. By providing contextual, always-up-to-date knowledge directly in your development environment, it dramatically reduces the time from idea to implementation.

Whether you're a seasoned Forge developer or just getting started, the Forge MCP Server will become an indispensable part of your toolkit.
    `,
    category: "Articles",
    date: "February 3, 2026",
    readTime: "6 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    tags: ["Forge", "MCP", "Development", "IDE", "Atlassian"],
  },
  {
    id: "quabu-jmwe-success-story",
    title: "Quabu and JMWE: A Success Story Transforming Workflow Management",
    excerpt: "We're excited to share our recent success story, featured by Appfire, highlighting how our collaboration with JMWE has revolutionized workflow automation for enterprise clients.",
    content: `
## Introduction

We're thrilled to share our recent success story, featured by Appfire, highlighting how our collaboration with JMWE (Jira Misc Workflow Extensions) has transformed workflow management for enterprise clients worldwide.

## The Challenge

Many organizations struggle with complex workflow automation in Jira. Standard functionality often falls short when dealing with:

- **Multi-step approval processes** that require conditional routing
- **Cross-project dependencies** that need seamless integration
- **Custom field calculations** that update automatically
- **Time-based triggers** for SLA management

## Our Solution

Working closely with JMWE, we developed a comprehensive workflow automation strategy that addressed these challenges head-on. Our approach included:

### 1. Workflow Analysis & Design

We conducted a thorough analysis of existing workflows, identifying bottlenecks and opportunities for automation. This involved mapping out every transition, condition, and validator to create an optimized flow.

### 2. Custom Post Functions

Leveraging JMWE's powerful post functions, we created custom automation rules that:

- Automatically assign issues based on project, priority, and team capacity
- Update related issues when parent tasks change status
- Send targeted notifications to stakeholders at critical workflow stages
- Calculate and set field values based on complex business logic

### 3. Integration & Testing

Rigorous testing ensured that all automations worked flawlessly across different scenarios. We implemented comprehensive logging and monitoring to track automation performance.

## Results

The implementation delivered remarkable results:

- **75% reduction** in manual workflow steps
- **50% faster** issue resolution times
- **90% improvement** in SLA compliance
- **Significant cost savings** from reduced manual intervention

## Conclusion

This collaboration demonstrates the power of combining Quabu's Atlassian expertise with JMWE's robust automation capabilities. Together, we're helping organizations unlock the full potential of their Jira workflows.

Interested in transforming your workflow management? Contact us to learn how we can help optimize your Atlassian environment.
    `,
    category: "Success Stories",
    date: "June 10, 2025",
    readTime: "5 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
    tags: ["JMWE", "Workflow Automation", "Jira", "Case Study"],
  },
  {
    id: "assets-emancipates-platform",
    title: "Assets Emancipates: More Than a Functionality, a Platform with Its Own Identity",
    excerpt: "In the Atlassian ecosystem, some tools are born discreetly while others mature to become essential. Assets belongs to the latter category, evolving into a full-fledged platform.",
    content: `
## The Evolution of Assets

In the Atlassian ecosystem, there are tools that emerge quietly, almost unnoticed, and others that mature over time to become absolutely essential. Assets definitively belongs to the second category.

## What is Assets?

Originally known as Insight, Assets has transformed from a simple CMDB (Configuration Management Database) feature into a comprehensive asset management platform within Jira Service Management.

### Key Capabilities

- **Object Schemas**: Define custom object types and relationships
- **Automation Integration**: Trigger workflows based on asset changes
- **Discovery & Import**: Automatically discover and import assets from various sources
- **Reporting & Insights**: Gain visibility into your entire asset landscape

## The Platform Identity

What makes Assets special is its evolution beyond being just a feature:

### 1. Standalone Value

Assets now provides value independent of Jira Service Management's core ticketing functionality. Organizations use it purely for IT Asset Management (ITAM), even before integrating with service desk workflows.

### 2. Ecosystem Integration

Assets integrates seamlessly with:
- **Jira Service Management** for incident and change management
- **Confluence** for documentation and knowledge management
- **Third-party discovery tools** for automated asset discovery

### 3. Data-Centric Approach

The platform treats assets as first-class citizens, not just metadata attached to tickets. This fundamental shift enables:

- Better asset lifecycle management
- Improved compliance tracking
- More accurate cost allocation
- Enhanced security visibility

## Why This Matters

For IT teams, this evolution means:

1. **Centralized Asset Repository**: One source of truth for all assets
2. **Reduced Complexity**: Less need for external CMDB solutions
3. **Better Integration**: Seamless connection with existing Atlassian workflows
4. **Future-Proof**: Continuous improvements from Atlassian's investment

## Conclusion

Assets has truly emancipated from its origins as a simple database feature. It now stands as a robust platform with its own identity, ready to serve as the foundation for comprehensive IT asset management.

The question is no longer whether to use Assets, but how to best leverage its capabilities for your organization's needs.
    `,
    category: "News",
    date: "May 22, 2025",
    readTime: "4 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=600&fit=crop",
    tags: ["Assets", "ITSM", "Atlassian", "CMDB"],
  },
  {
    id: "assets-data-manager-guide",
    title: "What is Assets Data Manager and Why Should You Pay Attention to It?",
    excerpt: "In enterprise asset management (ITAM), most organizations face the same challenge: asset data is scattered everywhere. Learn how Assets Data Manager solves this.",
    content: `
## The Asset Data Challenge

In enterprise asset management (ITAM), most organizations face the same fundamental problem: asset data is scattered everywhere.

- Spreadsheets in different departments
- Multiple discovery tools with conflicting data
- Manual updates that quickly become outdated
- Siloed systems that don't communicate

## Enter Assets Data Manager

Assets Data Manager is Atlassian's answer to this data chaos. It's a powerful feature within Assets that enables organizations to:

### Centralize Data Collection

Connect to multiple data sources and bring all asset information into a single, authoritative repository. Supported sources include:

- Network discovery tools
- Cloud providers (AWS, Azure, GCP)
- HR systems
- Financial applications
- Custom databases

### Automate Data Quality

Set up rules to:
- Validate incoming data
- Identify duplicates
- Flag inconsistencies
- Maintain data freshness

### Enable Self-Service

Empower teams to:
- Request new assets
- Update asset information
- Track asset status
- Generate compliance reports

## Key Features to Watch

### 1. Discovery Integration

Seamlessly connect with popular discovery tools to automatically populate and update your asset database.

### 2. Reconciliation Engine

Intelligently match and merge data from multiple sources, resolving conflicts based on configurable rules.

### 3. Data Quality Dashboard

Monitor the health of your asset data with real-time metrics and alerts for data quality issues.

### 4. API-First Architecture

Build custom integrations and workflows using the comprehensive REST API.

## Why You Should Pay Attention

The shift to cloud and remote work has made IT asset management more critical—and more challenging—than ever. Assets Data Manager addresses these challenges by:

1. **Reducing Manual Effort**: Automate data collection and maintenance
2. **Improving Accuracy**: Single source of truth eliminates discrepancies
3. **Enabling Compliance**: Always-current data for audits and reports
4. **Supporting Decisions**: Better data leads to better IT decisions

## Getting Started

If you're already using Jira Service Management, Assets Data Manager is available as part of your Premium or Enterprise subscription. Here's how to begin:

1. Review your current asset data sources
2. Identify the most critical gaps in your asset inventory
3. Start with a pilot project focusing on one asset type
4. Iterate and expand based on lessons learned

## Conclusion

Assets Data Manager represents a significant step forward in IT asset management. By centralizing, automating, and improving the quality of asset data, it enables organizations to finally get a handle on their ever-growing IT estates.

The question isn't whether you need better asset data management—it's how quickly you can get started.
    `,
    category: "Articles",
    date: "April 22, 2025",
    readTime: "6 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
    tags: ["Assets", "ITAM", "Data Management", "Automation"],
  },
  {
    id: "rovo-dev-agents-atlassian-ai",
    title: "Rovo Dev Agents Arrives: Atlassian's AI for Developers",
    excerpt: "Atlassian introduces Rovo Dev Agents, a powerful AI assistant designed specifically for development teams. Discover how it can transform your coding workflow.",
    content: `
## The AI Revolution in Development

Atlassian has entered the AI coding assistant arena with Rovo Dev Agents, a purpose-built AI solution designed to transform how development teams work within the Atlassian ecosystem.

## What is Rovo Dev Agents?

Rovo Dev Agents is an AI-powered assistant that integrates directly with Atlassian development tools to help developers:

- Write code faster
- Understand complex codebases
- Automate repetitive tasks
- Stay in flow while coding

## Key Capabilities

### 1. Code Generation & Completion

Rovo Dev Agents can generate code snippets based on natural language descriptions, understanding context from:
- Your current file
- Related files in the repository
- Jira issue details
- Confluence documentation

### 2. Code Understanding

Ask questions about your codebase in plain English:
- "How does the authentication flow work?"
- "What files are related to the payment module?"
- "Explain this function's purpose"

### 3. Jira Integration

Seamlessly connected with Jira issues, Rovo Dev Agents can:
- Suggest implementation approaches based on issue descriptions
- Auto-generate commit messages linked to issues
- Update issue status based on code changes

### 4. Bitbucket Integration

Within Bitbucket, developers can:
- Get AI-powered code review suggestions
- Generate PR descriptions automatically
- Identify potential issues before merging

## What Sets It Apart

Unlike generic AI coding assistants, Rovo Dev Agents is designed specifically for the Atlassian ecosystem:

### Contextual Awareness

The agent understands your entire project context, including:
- Project documentation in Confluence
- Issue history in Jira
- Code history in Bitbucket
- Team conventions and patterns

### Enterprise-Ready

Built with enterprise security and compliance in mind:
- Data never leaves your instance for training
- Compliant with major security frameworks
- Configurable access controls

### Team-Oriented

Designed for teams, not just individuals:
- Share prompts and templates across the team
- Learn from team-wide patterns
- Maintain consistency in code style

## Getting Started

Rovo Dev Agents is available for Atlassian Cloud customers. To get started:

1. Enable Rovo in your Atlassian admin console
2. Install the IDE extension (VS Code, IntelliJ supported)
3. Connect your Bitbucket repositories
4. Start coding with AI assistance

## The Future of Development

AI assistance in development is no longer optional—it's becoming essential for staying competitive. With Rovo Dev Agents, Atlassian is making a strong statement about the future of software development within their ecosystem.

The combination of deep integration, enterprise security, and team-oriented features makes Rovo Dev Agents a compelling choice for organizations already invested in Atlassian tools.
    `,
    category: "News",
    date: "April 15, 2025",
    readTime: "5 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=600&fit=crop",
    tags: ["AI", "Rovo", "Development", "Automation"],
  },
  {
    id: "atlassian-products-to-apps",
    title: "Atlassian: From 'Products' to 'Apps' - Vision or Error?",
    excerpt: "A deep analysis of Atlassian's recent admin panel changes and the strategic implications of rebranding 'Products' as 'Apps' in their ecosystem.",
    content: `
## The Terminology Shift

Atlassian recently made a subtle but significant change to their admin panel: what was once called "Products" is now labeled "Apps." This seemingly minor terminology shift has sparked considerable discussion in the Atlassian community.

## The Change in Context

### Before
- "Products" included Jira, Confluence, Bitbucket, etc.
- Clear distinction between Atlassian products and third-party apps
- Products had their own dedicated section in admin

### After
- Everything is now under "Apps"
- First-party and third-party apps share the same space
- Unified management interface

## Arguments for the Change

### 1. Platform Thinking

The shift reflects Atlassian's evolution into a platform company:
- Core products are now "first-party apps"
- Equal footing with marketplace apps
- Encourages ecosystem development

### 2. Consistency

Users now have:
- One place to manage all applications
- Unified settings and permissions
- Consistent user experience

### 3. Future Flexibility

The change allows Atlassian to:
- Easily add new capabilities as apps
- Bundle and unbundle features
- Offer more flexible licensing

## Arguments Against the Change

### 1. Brand Dilution

Critics argue:
- Jira isn't just an "app"—it's a platform
- The term "app" diminishes perceived value
- Enterprise customers expect "products"

### 2. Confusion

The change has caused:
- Uncertainty about what's included in licenses
- Questions about support levels
- Difficulty distinguishing core vs. optional

### 3. Market Perception

There are concerns about:
- How competitors might leverage this messaging
- Customer confusion during sales processes
- Perceived commoditization

## Our Analysis

After careful consideration, we believe this change reflects a broader industry trend and Atlassian's strategic vision:

### The Platform Strategy

Atlassian is positioning itself as a platform for work management, not just a product vendor. This means:
- Core capabilities (Jira, Confluence) become foundational layers
- Additional functionality comes from apps (internal and external)
- The ecosystem becomes the differentiator

### Customer Impact

For most customers, the practical impact is minimal:
- Same functionality, different label
- Better unified management
- More integration possibilities

### Long-Term Vision

We expect Atlassian to:
- Continue investing in platform capabilities
- Make it easier for customers to customize with apps
- Potentially offer more modular licensing

## Conclusion

Is it a vision or an error? We lean toward vision—but with caveats.

The change makes strategic sense for Atlassian's platform ambitions. However, the execution could have been smoother with better communication about what hasn't changed (licensing, support, commitment to core functionality).

Time will tell whether customers embrace this new mental model or continue to think in traditional product terms. Either way, the underlying value proposition remains strong.
    `,
    category: "Articles",
    date: "April 15, 2025",
    readTime: "7 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=600&fit=crop",
    tags: ["Atlassian", "Strategy", "Analysis", "Opinion"],
  },
  {
    id: "kanban-work-method",
    title: "Kanban: The Work Method of the Moment",
    excerpt: "Discover why Kanban has become the preferred methodology for visual workflow management and how to implement it effectively in your organization.",
    content: `
## What is Kanban?

Kanban is a visual workflow management method that originated in Japanese manufacturing (specifically at Toyota) and has since been adapted for knowledge work, software development, and general project management.

The word "Kanban" literally means "signboard" or "billboard" in Japanese, referring to the visual nature of the system.

## Core Principles

### 1. Visualize Work

Everything starts with making work visible:
- Create a board with columns representing stages
- Use cards to represent work items
- Anyone can see the state of work at a glance

### 2. Limit Work in Progress (WIP)

The key insight of Kanban is that limiting concurrent work improves flow:
- Set explicit limits on each column
- Stop starting, start finishing
- Reduce context switching

### 3. Manage Flow

Focus on the smooth movement of work:
- Identify and eliminate bottlenecks
- Measure lead time and cycle time
- Optimize for throughput, not busyness

### 4. Make Policies Explicit

Everyone should understand the rules:
- Definition of "done" for each column
- Criteria for pulling work
- How to handle blockers

### 5. Implement Feedback Loops

Regular review and improvement:
- Daily standups
- Delivery reviews
- Regular retrospectives

### 6. Improve Collaboratively

Evolve the system together:
- Small, incremental changes
- Data-driven decisions
- Team-owned process

## Why Kanban Now?

Several factors make Kanban particularly relevant today:

### Remote Work Compatibility

Kanban boards work seamlessly in digital form:
- Real-time visibility for distributed teams
- Asynchronous updates
- Clear status without meetings

### Flexibility

Unlike more prescriptive methodologies:
- Start where you are
- No required roles or meetings
- Evolve at your own pace

### Focus on Flow

In a world of constant interruption:
- WIP limits protect focus
- Visual queues prevent overload
- Flow metrics guide improvement

## Implementing Kanban with Jira

Jira provides excellent Kanban support:

### 1. Create a Kanban Board

Start with a simple board:
- To Do
- In Progress
- Done

### 2. Set WIP Limits

Configure column limits:
- Start conservative (2-3 per person)
- Adjust based on experience
- Respect the limits!

### 3. Add Swimlanes

Organize work by:
- Priority
- Team member
- Work type

### 4. Configure Filters

Show only relevant work:
- Active sprint items
- Specific labels or components
- Current user's assignments

### 5. Use Automation

Automate routine tasks:
- Auto-assign on transition
- Notify on SLA breach
- Update linked issues

## Common Pitfalls

### 1. Ignoring WIP Limits

"Just this once" becomes always. Respect the limits.

### 2. Too Many Columns

Complexity creeps in. Start simple.

### 3. No Metrics

Without measurement, improvement is guesswork.

### 4. Forgetting to Pull

Teams push work instead of pulling. Focus on finishing.

## Conclusion

Kanban's simplicity is its strength. By visualizing work, limiting WIP, and focusing on flow, teams can achieve remarkable improvements in delivery and satisfaction.

The best time to start is now—begin with your current workflow, make it visible, and evolve from there.

Ready to implement Kanban in your organization? Contact us for expert guidance on optimizing your workflow with Jira and Kanban best practices.
    `,
    category: "Articles",
    date: "March 4, 2025",
    readTime: "8 min read",
    author: "Quabu Team",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=1200&h=600&fit=crop",
    tags: ["Kanban", "Agile", "Methodology", "Productivity"],
  },
];

export default function BlogPost() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const currentIndex = blogPosts.findIndex(p => p.id === id);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <Layout>
      <SEO
        path={`/blog/${post.id}`}
        title={`${post.title} | Quabu Blog`}
        description={post.excerpt}
        image={post.image}
        type="article"
        publishedTime={new Date(post.date).toISOString()}
        tags={post.tags}
        schema={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.excerpt,
          image: post.image,
          datePublished: new Date(post.date).toISOString(),
          author: { "@type": "Organization", name: "Quabu", url: "https://www.quabusolutions.com" },
          publisher: {
            "@type": "Organization",
            name: "Quabu",
            logo: { "@type": "ImageObject", url: "https://www.quabusolutions.com/favicon.png" },
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": `https://www.quabusolutions.com/blog/${post.id}` },
        }}
      />
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0 h-[50vh]">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("blog.backToBlog")}
            </Link>

            <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-sm font-medium rounded-full mb-4">
              {post.category}
            </span>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-4xl">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <motion.article
              className="lg:col-span-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-headings:mt-10 prose-headings:mb-5 prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-p:text-muted-foreground prose-p:mb-5 prose-p:leading-relaxed prose-strong:text-foreground prose-li:text-muted-foreground prose-li:mb-2 prose-li:leading-relaxed prose-ul:my-5 prose-ol:my-5 prose-a:text-primary prose-a:underline prose-blockquote:border-primary prose-blockquote:text-muted-foreground prose-blockquote:my-8 prose-blockquote:py-2 prose-blockquote:italic prose-code:bg-muted prose-code:text-foreground prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-semibold prose-pre:bg-muted prose-pre:text-foreground prose-pre:p-5 prose-pre:rounded-lg prose-pre:my-6 prose-hr:border-border prose-hr:my-10">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {post.content}
                </ReactMarkdown>
              </div>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag className="w-4 h-4 text-muted-foreground" />
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 p-6 bg-muted/50 rounded-xl">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-muted-foreground" />
                    <span className="font-medium">{t("blog.share")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Share on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Share on Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <a 
                        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Share on Facebook"
                      >
                        <Facebook className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <motion.div
                className="sticky top-24 space-y-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                {/* Author */}
                <div className="p-6 bg-muted/50 rounded-xl">
                  <h3 className="font-semibold mb-4">{t("blog.aboutAuthor")}</h3>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{post.author}</p>
                      <p className="text-sm text-muted-foreground">{t("blog.atlassianExperts")}</p>
                    </div>
                  </div>
                </div>

                {/* Related Posts */}
                <div className="p-6 bg-muted/50 rounded-xl">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    {t("blog.relatedArticles")}
                  </h3>
                  <div className="space-y-4">
                    {blogPosts
                      .filter(p => p.id !== post.id && p.category === post.category)
                      .slice(0, 3)
                      .map(relatedPost => (
                        <Link
                          key={relatedPost.id}
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <h4 className="font-medium text-sm group-hover:text-primary transition-colors line-clamp-2">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-muted-foreground mt-1">{relatedPost.date}</p>
                        </Link>
                      ))
                    }
                  </div>
                </div>

                {/* CTA */}
                <div className="p-6 bg-primary rounded-xl text-primary-foreground">
                  <h3 className="font-semibold mb-2">{t("blog.needHelp")}</h3>
                  <p className="text-sm text-primary-foreground/80 mb-4">
                    {t("blog.needHelpDesc")}
                  </p>
                  <Button variant="secondary" size="sm" className="w-full" asChild>
                    <Link to="/contact">{t("blog.contactUs")}</Link>
                  </Button>
                </div>
              </motion.div>
            </aside>
          </div>

          {/* Navigation */}
          <div className="mt-16 pt-8 border-t border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {prevPost && (
                <Link 
                  to={`/blog/${prevPost.id}`}
                  className="group p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  <span className="text-sm text-muted-foreground flex items-center gap-2 mb-2">
                    <ArrowLeft className="w-4 h-4" />
                    {t("blog.previousArticle")}
                  </span>
                  <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {prevPost.title}
                  </h4>
                </Link>
              )}
              {nextPost && (
                <Link 
                  to={`/blog/${nextPost.id}`}
                  className="group p-6 bg-muted/30 rounded-xl hover:bg-muted/50 transition-colors md:text-right md:ml-auto"
                >
                  <span className="text-sm text-muted-foreground flex items-center gap-2 mb-2 md:justify-end">
                    {t("blog.nextArticle")}
                    <ArrowRight className="w-4 h-4" />
                  </span>
                  <h4 className="font-medium group-hover:text-primary transition-colors line-clamp-2">
                    {nextPost.title}
                  </h4>
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
