import React from 'react';
import { CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Users, Zap, Award } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';

export function About() {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Strong Foundations",
      description: "Solid understanding of algorithms, data structures, and web fundamentals"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Collaborative Mindset",
      description: "Comfortable working in teams, following best practices and clean workflows"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Continuous Learner",
      description: "Quickly adapting to new tools, frameworks, and development standards"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Academic & Practical Balance",
      description: "Combining university studies with consistent hands-on development"
    }
  ];

  const interests = [
    "Web Development",
    "Software Engineering",
    "Databases",
    "Cloud Basics",
    "DevOps Fundamentals",
    "UI/UX",
    "Open Source",
    "AI & Emerging Tech"
  ];

  return (
    <ScrollAnimatedSection id="about" className="py-20 bg-background" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A motivated junior full stack web developer with an early start in programming and a strong academic background
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <SharedBlurCard className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Junior Full Stack Web Developer
              </h3>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  I am a junior full stack web developer with more than four years of hands-on coding experience,
                  which I started well before obtaining my Licence degree in Computer Science at ISI Mahdia.
                  This early exposure allowed me to build strong technical foundations and disciplined problem-solving skills.
                </p>

                <p>
                  Throughout my academic journey, I consistently combined theoretical learning with practical application,
                  developing web applications using modern front-end and back-end technologies.
                  I am particularly interested in building reliable, well-structured systems that follow clean code
                  and software engineering principles.
                </p>

                <p>
                  My objective is to continue my studies in a rigorous academic environment, deepen my expertise in
                  software engineering and web technologies, and contribute to innovative projects through research,
                  collaboration, and continuous improvement.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Interests & Technical Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm bg-primary/10 border-primary/20"
                    >
                      {interest}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </SharedBlurCard>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <SharedBlurCard key={index}>
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/20 text-primary rounded-full mb-4 icon-shadow backdrop-blur-sm border border-primary/30">
                    {highlight.icon}
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {highlight.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {highlight.description}
                  </p>
                </CardContent>
              </SharedBlurCard>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
