import React from 'react';
import { CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Code, Users, Zap, Award } from 'lucide-react';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import { SharedBlurCard } from './SharedBlurCard';
import { useTranslation } from 'react-i18next';

export function About() {
  const { t } = useTranslation();

  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      titleKey: 'about.highlights.foundations_title',
      descKey:  'about.highlights.foundations_desc',
    },
    {
      icon: <Users className="w-6 h-6" />,
      titleKey: 'about.highlights.collaborative_title',
      descKey:  'about.highlights.collaborative_desc',
    },
    {
      icon: <Zap className="w-6 h-6" />,
      titleKey: 'about.highlights.learner_title',
      descKey:  'about.highlights.learner_desc',
    },
    {
      icon: <Award className="w-6 h-6" />,
      titleKey: 'about.highlights.balance_title',
      descKey:  'about.highlights.balance_desc',
    },
  ];

  const focusAreas = t('about.focusAreas', { returnObjects: true }) as string[];

  return (
    <ScrollAnimatedSection id="about" className="py-20 bg-background" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t('about.heading')}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Text Content */}
          <SharedBlurCard className="p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                {t('about.subheading')}
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>{t('about.description1')}</p>
                <p>{t('about.description2')}</p>
                <p>{t('about.description3')}</p>
              </div>

              {/* Interests */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  {t('about.interestsHeading')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((interest, index) => (
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
                    {t(highlight.titleKey)}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {t(highlight.descKey)}
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