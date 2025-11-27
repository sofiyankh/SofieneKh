import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Download, Mail, Github, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ScrollAnimatedSection } from './ScrollAnimatedSection';
import profile from 'public/profile.png';

export function Hero() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ScrollAnimatedSection id="home" className="min-h-screen flex items-center justify-center gradient-bg" blur>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-38.5 h-38.5 md:w-48 md:h-48.56 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-xl mx-auto">
                <ImageWithFallback
                  src={profile}              alt="Sofyan Khalifa - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-2">
                <span className="block w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>

          {/* Name and Title */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
              Sofyan Khalifa
            </h1>
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                Full Stack Developer
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                React & Node.js
              </Badge>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Passionate full-stack developer with expertise in modern web technologies. 
              I create scalable, user-friendly applications that solve real-world problems.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-4">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Github className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10">
              <Mail className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </ScrollAnimatedSection>
  );
}
