import React from 'react';
import { CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';
import { 
  Code, Database, Cloud, Container, GitBranch, Globe, TestTube, Palette, Package, Zap,
  Triangle, Rocket, Link, Layers
} from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React.js", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 90, color: "bg-blue-600" },
        { name: "Next.js", level: 88, color: "bg-gray-800" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "Vue.js", level: 80, color: "bg-green-500" },
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 92, color: "bg-green-600" },
        { name: "Express.js", level: 90, color: "bg-gray-600" },
        { name: "Python", level: 85, color: "bg-yellow-500" },
        { name: "PostgreSQL", level: 88, color: "bg-blue-700" },
        { name: "MongoDB", level: 82, color: "bg-green-700" },
      ]
    },
    {
      title: "DevOps & Tools",
      skills: [
        { name: "Docker", level: 85, color: "bg-blue-400" },
        { name: "AWS", level: 80, color: "bg-orange-500" },
        { name: "Git", level: 95, color: "bg-red-500" },
        { name: "CI/CD", level: 78, color: "bg-purple-500" },
        { name: "Kubernetes", level: 70, color: "bg-blue-600" },
      ]
    }
  ];

const technologies = [
  // Use official online logos for the ones you worked with
  { name: "JavaScript", icon: <img src="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg" className="w-4 h-4" alt="JavaScript" /> },
  { name: "TypeScript", icon: <img src="https://cdn.worldvectorlogo.com/logos/typescript.svg" className="w-4 h-4" alt="TypeScript" /> },
  { name: "React", icon: <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" className="w-4 h-4" alt="React" /> },
  { name: "Node.js", icon: <img src="https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" className="w-4 h-4" alt="Node.js" /> },
  { name: "Python", icon: <img src="https://cdn.worldvectorlogo.com/logos/python-5.svg" className="w-4 h-4" alt="Python" /> },
  { name: "PostgreSQL", icon: <img src="https://cdn.worldvectorlogo.com/logos/postgresql.svg" className="w-4 h-4" alt="PostgreSQL" /> },
  { name: "MongoDB", icon: <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" className="w-4 h-4" alt="MongoDB" /> },
  { name: "AWS", icon: <img src="https://cdn.worldvectorlogo.com/logos/amazon-web-services-1.svg" className="w-4 h-4" alt="AWS" /> },
  { name: "Docker", icon: <img src="https://cdn.worldvectorlogo.com/logos/docker.svg" className="w-4 h-4" alt="Docker" /> },
  { name: "Git", icon: <img src="https://cdn.worldvectorlogo.com/logos/git-icon.svg" className="w-4 h-4" alt="Git" /> },
  { name: "GraphQL", icon: <img src="https://cdn.worldvectorlogo.com/logos/graphql-logo-2.svg" className="w-4 h-4" alt="GraphQL" /> },
  { name: "REST APIs", icon: <img src="https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.svg" className="w-4 h-4" alt="REST APIs" /> },
  { name: "Jest", icon: <img src="https://cdn.worldvectorlogo.com/logos/jest-2.svg" className="w-4 h-4" alt="Jest" /> },
  { name: "Cypress", icon: <img src="https://cdn.worldvectorlogo.com/logos/cypress-1.svg" className="w-4 h-4" alt="Cypress" /> },
  { name: "Figma", icon: <img src="https://cdn.worldvectorlogo.com/logos/figma-4.svg" className="w-4 h-4" alt="Figma" /> },
  { name: "Adobe XD", icon: <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" className="w-4 h-4" alt="Adobe XD" /> },
  { name: "Webpack", icon: <img src="https://cdn.worldvectorlogo.com/logos/webpack.svg" className="w-4 h-4" alt="Webpack" /> },
  { name: "Vite", icon: <img src="https://cdn.worldvectorlogo.com/logos/vitejs.svg" className="w-4 h-4" alt="Vite" /> },
  { name: "Prisma", icon: <img src="https://cdn.worldvectorlogo.com/logos/prisma-2.svg" className="w-4 h-4" alt="Prisma" /> },
  { name: "Supabase", icon: <img src="https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" className="w-4 h-4" alt="Supabase" /> }
];
  return (
    <ScrollAnimatedSection id="skills" className="py-20 gradient-bg" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SharedBlurCard key={index} className="bg-[#eeeeee] bg-gradient-to-br from-[#eeeeee]/70 to-[#cccccc]/40 relative overflow-hidden">
              <div className="absolute -left-1/2 -top-1/2 w-56 h-48 bg-white blur-[50px]"></div>
              <CardHeader>
                <CardTitle className="text-lg text-center text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className={`h-2 ${skill.color}`} />
                  </div>
                ))}
              </CardContent>
            </SharedBlurCard>
          ))}
        </div>

        {/* Technologies */}
        <SharedBlurCard className="p-8 bg-[#eeeeee] bg-gradient-to-br from-[#eeeeee]/70 to-[#cccccc]/40 relative overflow-hidden">
          <div className="absolute -left-1/2 -top-1/2 w-56 h-48 bg-white blur-[50px]"></div>
          <CardContent className="p-0 relative z-10">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Technologies I Work With
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-2 text-sm border-primary/30 bg-primary/10 backdrop-blur-sm cursor-default icon-shadow hover:bg-primary/20 transition-all duration-300 flex items-center gap-2"
                >
                  {tech.icon}
                  {tech.name}
                </Badge>
              ))}
            </div>
          </CardContent>
        </SharedBlurCard>
      </div>
    </ScrollAnimatedSection>
  );
}
