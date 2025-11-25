import React from 'react';
import { CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';

export function Education() {
  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2016 - 2018",
      gpa: "3.8/4.0",
      description: "Specialized in Software Engineering and Machine Learning. Completed thesis on distributed systems optimization.",
      coursework: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Software Engineering"],
      achievements: ["Dean's List", "Graduate Research Assistant", "Published 2 research papers"]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2012 - 2016",
      gpa: "3.7/4.0",
      description: "Strong foundation in computer science fundamentals with focus on web development and database systems.",
      coursework: ["Data Structures", "Web Development", "Database Systems", "Computer Networks"],
      achievements: ["Magna Cum Laude", "ACM Student Chapter President", "Hackathon Winner"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      skills: ["Cloud Architecture", "AWS Services", "Security", "Cost Optimization"]
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      credentialId: "GCP-DEV-2022-045",
      skills: ["GCP Services", "Containerization", "Microservices", "DevOps"]
    },
    {
      name: "Certified Kubernetes Administrator",
      issuer: "Cloud Native Computing Foundation",
      date: "2022",
      credentialId: "CKA-2022-789",
      skills: ["Kubernetes", "Container Orchestration", "Cluster Management", "Networking"]
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2021",
      credentialId: "META-REACT-2021-456",
      skills: ["React", "JavaScript", "Frontend Development", "State Management"]
    }
  ];

  return (
    <ScrollAnimatedSection id="education" className="py-20 bg-background" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My academic background and professional certifications that shape my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <SharedBlurCard key={index}>
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-primary font-medium mb-2">{edu.school}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {edu.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {edu.location}
                          </div>
                          <div className="flex items-center">
                            <Award className="w-4 h-4 mr-1" />
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{edu.description}</p>

                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Key Coursework</h5>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <Badge key={i} variant="outline" className="text-xs bg-primary/10 border-primary/20 backdrop-blur-sm">
                            {course}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Achievements</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </SharedBlurCard>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center mb-8">
              <Award className="w-8 h-8 text-primary mr-3" />
              <h3 className="text-2xl font-bold text-foreground">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <SharedBlurCard key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="font-bold text-foreground mb-1">{cert.name}</h4>
                        <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary" className="ml-4">{cert.date}</Badge>
                    </div>

                    <p className="text-xs text-muted-foreground mb-3">
                      Credential ID: {cert.credentialId}
                    </p>

                    <div>
                      <h5 className="text-sm font-semibold text-foreground mb-2">Skills Validated</h5>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs px-2 py-1 bg-primary/10 border-primary/20 backdrop-blur-sm">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </SharedBlurCard>
              ))}
            </div>

            {/* Additional Learning */}
            <SharedBlurCard className="mt-6 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-bold text-foreground mb-2">Continuous Learning</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Always expanding my knowledge through online courses, workshops, and tech conferences
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 backdrop-blur-sm">Coursera</Badge>
                  <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 backdrop-blur-sm">Udemy</Badge>
                  <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 backdrop-blur-sm">Pluralsight</Badge>
                  <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 backdrop-blur-sm">Tech Conferences</Badge>
                </div>
              </CardContent>
            </SharedBlurCard>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}