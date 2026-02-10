import { Layout } from "@/components/layout/Layout";
import { motion } from "framer-motion";
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

// Blog post data
const blogPosts = [
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

const categories = [
  { name: "All Posts", icon: Sparkles, count: blogPosts.length },
  { name: "News", icon: Newspaper, count: blogPosts.filter(p => p.category === "News").length },
  { name: "Articles", icon: BookOpen, count: blogPosts.filter(p => p.category === "Articles").length },
  { name: "Success Stories", icon: Award, count: blogPosts.filter(p => p.category === "Success Stories").length },
];

// Blog post card component
const BlogCard = ({ post, index, featured = false }: { post: typeof blogPosts[0], index: number, featured?: boolean }) => {
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
                Featured
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
            Read more
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </motion.article>
  );
};

export default function Blog() {
  const featuredPosts = blogPosts.filter(p => p.featured);
  const regularPosts = blogPosts.filter(p => !p.featured);
  const autoplayPlugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <Layout>
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
              <span className="text-sm font-medium">Our Insights</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ideas, News &{" "}
              <span className="text-primary">Insights</span>
            </h1>

            <p className="text-xl text-muted-foreground">
              Stay updated with the latest trends in Atlassian ecosystem, digital transformation, 
              and best practices from our expert team.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {categories.map((category, i) => (
              <motion.button
                key={category.name}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border transition-all ${
                  i === 0 
                    ? 'bg-primary text-primary-foreground border-primary' 
                    : 'bg-background border-border hover:border-primary/50 hover:bg-primary/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="w-4 h-4" />
                <span className="font-medium">{category.name}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  i === 0 ? 'bg-primary-foreground/20' : 'bg-muted'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
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
            <h2 className="text-2xl font-bold">Featured Posts</h2>
          </motion.div>

          <Carousel
            plugins={[autoplayPlugin.current]}
            opts={{ align: "start", loop: true }}
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
              <h2 className="text-2xl font-bold">Latest Posts</h2>
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
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
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
              Stay in the <span className="text-primary">Loop</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter and get the latest insights, tips, 
              and news delivered directly to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button size="lg" className="group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
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
              Have a Story to Share?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We'd love to hear about your success with Atlassian tools. 
              Get in touch and let's showcase your achievements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link to="/contact">
                  Contact Us
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
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
