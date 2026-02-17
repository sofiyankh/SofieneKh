import React from 'react';
import { CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Building, Calendar, MapPin } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';
import { useTranslation } from 'react-i18next';

const experienceMeta = [
  { location: "Tunisia / Remote",  period: "2024 - Present", type: "Full-time",        technologies: ["Node.js","Express","TypeScript","PostgreSQL","MongoDB","Docker","AWS"] },
  { location: "Monastir, Tunisia", period: "2021 - 2023",    type: "Contract / Junior", technologies: ["Node.js","Express","MySQL / PostgreSQL","REST APIs","CI/CD","Linux"] },
  { location: "Téboulba, Tunisia", period: "2020 - 2021",    type: "Internship",        technologies: ["Next.js","React","Tailwind CSS","HTML5","CSS3","Vercel"] },
  { location: "Remote",            period: "2018 - Present",  type: "Project-based",     technologies: ["React","Next.js","Node.js","Express","MongoDB","PostgreSQL","Git"] },
];

export function Experience() {
  const { t } = useTranslation();

  const jobs = t('experience.jobs', { returnObjects: true }) as Array<{
    role: string;
    company: string;
    description: string[];
  }>;

  return (
    <ScrollAnimatedSection id="experience" className="py-20 bg-background" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('experience.heading')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {jobs.map((job, index) => {
              const meta = experienceMeta[index];
              return (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-lg"></div>

                  <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <SharedBlurCard>
                      <CardContent className="p-6">
                        {/* Header */}
                        <div className="flex flex-wrap items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-foreground mb-1">{job.role}</h3>
                            <div className="flex items-center text-primary mb-2">
                              <Building className="w-4 h-4 mr-2" />
                              <span className="font-medium">{job.company}</span>
                            </div>
                          </div>
                          <Badge variant={meta.type === 'Full-time' ? 'default' : 'secondary'}>
                            {meta.type}
                          </Badge>
                        </div>

                        {/* Details */}
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {meta.period}
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {meta.location}
                          </div>
                        </div>

                        {/* Description */}
                        <ul className="space-y-2 mb-4">
                          {job.description.map((item, i) => (
                            <li key={i} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {meta.technologies.map((tech, i) => (
                            <Badge key={i} variant="outline" className="text-xs bg-primary/10 border-primary/20 backdrop-blur-sm">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </SharedBlurCard>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}