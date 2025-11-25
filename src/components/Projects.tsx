import React from 'react';
import { CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';

export function Projects() {
  const projects = [
    {
      title: "Enterprise Dashboard",
      description: "A comprehensive analytics dashboard for enterprise clients with real-time data visualization, custom reporting, and role-based access control.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2NjE1NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Chart.js", "AWS"],
      features: ["Real-time analytics", "Custom reports", "Role management", "Data export"],
      github: "#",
      demo: "#",
      status: "Featured"
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured e-commerce platform with shopping cart, payment integration, inventory management, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1643906226799-59eab234e41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU2NjU3NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS", "Vercel"],
      features: ["Payment processing", "Inventory tracking", "Order management", "SEO optimized"],
      github: "#",
      demo: "#",
      status: "Production"
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with kanban boards, team chat, file sharing, and time tracking capabilities.",
      image: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY2NzIxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Vue.js", "Express.js", "Socket.io", "MySQL", "Docker"],
      features: ["Kanban boards", "Real-time chat", "File sharing", "Time tracking"],
      github: "#",
      demo: "#",
      status: "Open Source"
    },
    {
      title: "AI Content Generator",
      description: "AI-powered content generation tool using GPT API for creating blog posts, social media content, and marketing copy.",
      image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzU2NjE1NTE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "OpenAI API", "Python", "FastAPI", "Redis"],
      features: ["AI content generation", "Template library", "Export options", "Usage analytics"],
      github: "#",
      demo: "#",
      status: "Beta"
    },
    {
      title: "Fitness Tracking App",
      description: "Mobile-first fitness application with workout tracking, nutrition logging, progress analytics, and social features.",
      image: "https://images.unsplash.com/photo-1643906226799-59eab234e41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBtb2JpbGUlMjBhcHB8ZW58MXx8fHwxNzU2NjU3NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Firebase", "Node.js", "GraphQL"],
      features: ["Workout tracking", "Nutrition logging", "Progress charts", "Social sharing"],
      github: "#",
      demo: "#",
      status: "Development"
    },
    {
      title: "Real Estate Portal",
      description: "Comprehensive real estate platform with property listings, virtual tours, mortgage calculator, and agent management.",
      image: "https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NTY2NzIxOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "Supabase", "Mapbox", "Tailwind CSS"],
      features: ["Property search", "Virtual tours", "Mortgage calc", "Agent portal"],
      github: "#",
      demo: "#",
      status: "Planning"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Featured': return 'bg-primary text-primary-foreground';
      case 'Production': return 'bg-green-500 text-white';
      case 'Open Source': return 'bg-blue-500 text-white';
      case 'Beta': return 'bg-orange-500 text-white';
      case 'Development': return 'bg-yellow-500 text-black';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <ScrollAnimatedSection id="projects" className="py-20 gradient-bg" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and contributions to various projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <SharedBlurCard
              key={index}
              className="group overflow-hidden"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-3 right-3">
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-foreground">
                    {project.title}
                  </h3>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {project.features.map((feature, i) => (
                      <div key={i} className="flex items-center">
                        <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" className="flex-1 rounded-full">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                  <Button size="sm" variant="ghost" className="rounded-full">
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </SharedBlurCard>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full px-8">
            <Github className="w-5 h-5 mr-2" />
            View More on GitHub
          </Button>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}