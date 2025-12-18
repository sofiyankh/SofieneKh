import React from 'react';
import { CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';

export function Experience() {
  const experiences = [
    {
      company: "QuetraTech",
      position: "Backend Developer (Current)",
      location: "Tunisia / Remote",
      period: "2024 - Present",
      type: "Full-time",
      description: [
        "Designing and implementing backend services and REST/GraphQL APIs to support web applications",
        "Building scalable data models and integrations with PostgreSQL and MongoDB",
        "Improving reliability with containerization (Docker) and CI/CD pipelines",
        "Collaborating with frontend and design teams to deliver performant, production-ready features"
      ],
      technologies: ["Node.js", "Express", "TypeScript", "PostgreSQL", "MongoDB", "Docker", "AWS"]
    },
    {
      company: "Elyos Digital (Monastir)",
      position: "Backend Developer",
      location: "Monastir, Tunisia",
      period: "2021 - 2023",
      type: "Contract / Junior",
      description: [
        "Developed server-side APIs and services for agency web projects and client platforms",
        "Integrated third-party services and payment gateways; worked on API security and rate-limiting",
        "Optimized database queries and data access patterns to improve response times",
        "Participated in design reviews, sprint planning and handoffs with frontend teams"
      ],
      technologies: ["Node.js", "Express", "MySQL / PostgreSQL", "REST APIs", "CI/CD", "Linux"]
    },
    {
      company: "RB IT Solutions (Téboulba)",
      position: "Frontend Developer (Next.js) — Stage / Junior",
      location: "Téboulba, Tunisia",
      period: "2020 - 2021",
      type: "Internship / Part-time",
      description: [
        "Built responsive, component-driven user interfaces using React and Next.js",
        "Worked on performance tuning, accessibility improvements and cross-browser testing",
        "Collaborated with mentors to convert designs into reusable UI components",
        "Contributed to documentation and supported trainees during workshops and bootcamps"
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "HTML5", "CSS3", "Vercel"]
    },
    {
      company: "Personal & Academic Projects",
      position: "Full Stack Projects / Freelance",
      location: "Remote",
      period: "2018 - Present",
      type: "Project-based",
      description: [
        "Multiple personal and academic web applications (front-end + back-end) demonstrating end-to-end skills",
        "Open-source contributions and collaborative projects used to practice best practices and testing",
        "Project-wide responsibilities: requirements, deployment, monitoring, and user feedback loops"
      ],
      technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "PostgreSQL", "Git"]
    }
  ];

  return (
    <ScrollAnimatedSection id="experience" className="py-20 bg-background" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience & Stages
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Practical roles, internships and project experience aligned with my full-stack profile
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-lg"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <SharedBlurCard>
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">
                            {exp.position}
                          </h3>
                          <div className="flex items-center text-primary mb-2">
                            <Building className="w-4 h-4 mr-2" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant={exp.type === 'Full-time' ? 'default' : 'secondary'}>
                          {exp.type}
                        </Badge>
                      </div>

                      {/* Details */}
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {exp.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>

                      {/* Description */}
                      <ul className="space-y-2 mb-4">
                        {exp.description.map((item, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-primary/10 border-primary/20 backdrop-blur-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </SharedBlurCard>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
