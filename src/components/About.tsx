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
      title: "Clean Code",
      description: "Writing maintainable, scalable, and well-documented code"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Player",
      description: "Collaborative approach with excellent communication skills"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Learner",
      description: "Quick to adapt to new technologies and frameworks"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Problem Solver",
      description: "Analytical thinking to solve complex technical challenges"
    }
  ];

  const interests = [
    "Machine Learning", "Cloud Computing", "Mobile Development", 
    "DevOps", "UI/UX Design", "Open Source", "Blockchain", "AI/ML"
  ];

  return (
    <ScrollAnimatedSection id="about" className="py-20 bg-background" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, skills, and what drives my passion for development
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <SharedBlurCard className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Full Stack Developer & Tech Enthusiast
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  With over 5 years of experience in full-stack development, I specialize in creating 
                  robust web applications using modern technologies. My journey started with a computer 
                  science degree and has evolved through continuous learning and hands-on experience.
                </p>
                <p>
                  I'm passionate about building scalable solutions that make a real impact. Whether it's 
                  crafting intuitive user interfaces with React or developing powerful backend systems 
                  with Node.js, I focus on delivering high-quality code that stands the test of time.
                </p>
                <p>
                  When I'm not coding, you can find me contributing to open-source projects, learning 
                  about emerging technologies, or mentoring fellow developers. I believe in the power 
                  of community and continuous growth.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">Interests & Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <Badge key={index} variant="secondary" className="hover:bg-primary hover:text-primary-foreground transition-colors backdrop-blur-sm bg-primary/10 border-primary/20">
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
                  <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </SharedBlurCard>
            ))}
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}