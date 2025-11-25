import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, href: "#", label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />, href: "#", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />, href: "#", label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />, href: "mailto:sofyan.khalifa@email.com", label: "Email" }
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#education", label: "Education" },
    { href: "#contact", label: "Contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative progressive-blur-medium border-t border-border/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-primary">Sofyan Khalifa</h3>
            <p className="text-muted-foreground max-w-md">
              Full-stack developer passionate about creating innovative solutions 
              that make a difference. Always learning, always building.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  asChild
                >
                  <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get In Touch</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" className="w-4 h-4" alt="Email" />
                sofyan.khalifa@email.com
              </p>
              <p className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" className="w-4 h-4" alt="Phone" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" className="w-4 h-4" alt="Location" />
                San Francisco, CA
              </p>
              <p className="flex items-center gap-2 text-green-500 font-medium">
                <img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" className="w-4 h-4" alt="Available" />
                Available for projects
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center text-sm text-muted-foreground space-x-1">
            <span>© 2024 Sofyan Khalifa. Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and React</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>Last updated: January 2024</span>
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={scrollToTop}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 backdrop-blur-sm"></div>
      </div>
    </footer>
  );
}
