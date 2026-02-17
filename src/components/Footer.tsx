import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />,   href: "https://github.com/sofiyankh",                          label: "GitHub" },
    { icon: <Linkedin className="w-5 h-5" />,  href: "https://www.linkedin.com/in/sofyan-khalifa-915533220/", label: "LinkedIn" },
    { icon: <Twitter className="w-5 h-5" />,   href: "#",                                                     label: "Twitter" },
    { icon: <Mail className="w-5 h-5" />,      href: "mailto:sofiyankhalifa.11@gmail.com",                    label: "Email" },
  ];

  const navKeys = ['home','about','skills','experience','projects','education','contact'] as const;
  const navHrefs = ['#home','#about','#skills','#experience','#projects','#education','#contact'];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const email       = 'sofiyankhalifa.11@gmail.com';
  const phoneDisplay = '+216 58826329';
  const phoneTel     = '+21658826329';
  const locationText = 'Tunisia, Monastir';

  return (
    <footer className="relative progressive-blur-medium border-t border-border/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-primary">Sofiene Ben Khalifa</h3>
            <p className="text-muted-foreground max-w-md">{t('footer.description')}</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Button key={index} variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors" asChild>
                  <a href={link.href} aria-label={link.label} target="_blank" rel="noopener noreferrer">
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {navKeys.map((key, index) => (
                <li key={key}>
                  <button
                    onClick={() => scrollToSection(navHrefs[index])}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {t(`navbar.${key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">{t('footer.getInTouch')}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href={`mailto:${email}`} className="hover:text-primary" target="_blank" rel="noopener noreferrer">{email}</a>
              </p>
              <p className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/724/724664.png" className="w-4 h-4" alt="Phone" />
                <a href={`tel:${phoneTel}`} className="hover:text-primary">{phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-4 h-4" alt="WhatsApp" />
                <a href={`https://wa.me/${phoneTel}`} target="_blank" rel="noopener noreferrer" className="hover:text-primary">WhatsApp: {phoneDisplay}</a>
              </p>
              <p className="flex items-center gap-2">
                <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" className="w-4 h-4" alt="Location" />
                {locationText}
              </p>
              <p className="flex items-center gap-2 text-green-500 font-medium">
                <img src="https://cdn-icons-png.flaticon.com/512/447/447147.png" className="w-4 h-4" alt="Available" />
                {t('footer.available')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center text-sm text-muted-foreground space-x-2">
            <span>{t('footer.madeWith')}</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>{t('footer.and')}</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-muted-foreground space-x-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span>{t('footer.lastUpdated')}</span>
            </div>
            <Button
              variant="ghost" size="icon" onClick={scrollToTop}
              className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 backdrop-blur-sm"></div>
      </div>
    </footer>
  );
}