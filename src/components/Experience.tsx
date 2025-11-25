import React from 'react';
import { CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';

export function Experience() {
  const experiences = [
    {
      company: "TechCorp Solutions",
      position: "Senior Full Stack Developer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: [
        "Led development of 3 major web applications serving 100K+ users",
        "Architected microservices infrastructure reducing load times by 40%",
        "Mentored junior developers and conducted code reviews",
        "Implemented CI/CD pipelines improving deployment frequency by 300%"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"]
    },
    {
      company: "StartupXYZ",
      position: "Full Stack Developer",
      location: "Austin, TX",
      period: "2020 - 2022",
      type: "Full-time",
      description: [
        "Built and maintained customer-facing web applications",
        "Collaborated with design team to implement responsive UI components",
        "Optimized database queries resulting in 50% performance improvement",
        "Participated in agile development process with bi-weekly sprints"
      ],
      technologies: ["Vue.js", "Express.js", "MongoDB", "GraphQL", "Jest"]
    },
    {
      company: "Digital Agency Pro",
      position: "Frontend Developer",
      location: "Remote",
      period: "2019 - 2020",
      type: "Contract",
      description: [
        "Developed responsive websites for various clients",
        "Integrated third-party APIs and payment systems",
        "Worked closely with clients to gather requirements",
        "Maintained and updated existing client websites"
      ],
      technologies: ["JavaScript", "React", "SASS", "WordPress", "PHP"]
    },
    {
      company: "Code Academy",
      position: "Junior Developer",
      location: "New York, NY",
      period: "2018 - 2019",
      type: "Full-time",
      description: [
        "Assisted in development of educational platform features",
        "Fixed bugs and implemented small feature enhancements",
        "Learned best practices for code quality and testing",
        "Participated in daily standups and team meetings"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"]
    }
  ];

  return (
    <ScrollAnimatedSection id="experience" className="py-20 bg-background" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations
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