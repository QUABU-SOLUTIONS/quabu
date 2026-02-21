import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Link, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
  Tag,
  User
} from "lucide-react";

// Blog post data (same as in Blog.tsx - in a real app, this would be in a shared data file or fetched from an API)
const blogPosts = [
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
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-li:text-muted-foreground">
                {post.content.split('\n').map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return <h2 key={i} className="text-2xl font-bold mt-8 mb-4 text-foreground">{paragraph.replace('## ', '')}</h2>;
                  }
                  if (paragraph.startsWith('### ')) {
                    return <h3 key={i} className="text-xl font-semibold mt-6 mb-3 text-foreground">{paragraph.replace('### ', '')}</h3>;
                  }
                  if (paragraph.startsWith('- **')) {
                    const match = paragraph.match(/- \*\*(.+)\*\*:? ?(.*)/)
                    if (match) {
                      return (
                        <li key={i} className="ml-4 mb-2">
                          <strong className="text-foreground">{match[1]}</strong>
                          {match[2] && `: ${match[2]}`}
                        </li>
                      );
                    }
                  }
                  if (paragraph.startsWith('- ')) {
                    return <li key={i} className="ml-4 mb-2">{paragraph.replace('- ', '')}</li>;
                  }
                  if (paragraph.match(/^\d+\. /)) {
                    return <li key={i} className="ml-4 mb-2">{paragraph.replace(/^\d+\. /, '')}</li>;
                  }
                  if (paragraph.trim() === '') return null;
                  return <p key={i} className="mb-4">{paragraph}</p>;
                })}
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
