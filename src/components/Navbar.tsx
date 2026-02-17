import React, { useState } from 'react';
import { Button } from './ui/button';
import { useTheme } from './ThemeProvider';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const navItems = [
    { href: '#home',       labelKey: 'navbar.home' },
    { href: '#about',      labelKey: 'navbar.about' },
    { href: '#skills',     labelKey: 'navbar.skills' },
    { href: '#experience', labelKey: 'navbar.experience' },
    { href: '#projects',   labelKey: 'navbar.projects' },
    { href: '#education',  labelKey: 'navbar.education' },
    { href: '#contact',    labelKey: 'navbar.contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const switchLang = (lang: 'en' | 'fr') => {
    i18n.changeLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-primary">Sofiene Ben Khalifa</h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-11 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary px-3 py-2 rounded-md transition-colors"
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
          </div>

          {/* Right side controls */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <div className="flex items-center rounded-full border border-border bg-muted/30 p-1">
              <button
                onClick={() => switchLang('en')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  i18n.language === 'en'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                🇬🇧 EN
              </button>
              <button
                onClick={() => switchLang('fr')}
                className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  i18n.language === 'fr'
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                🇫🇷 FR
              </button>
            </div>

            {/* Theme Toggle */}
            <Button variant="ghost" size="icon" onClick={toggleTheme} className="rounded-full">
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="rounded-full"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 glass-panel border-t border-border/50">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="text-foreground hover:text-primary block px-3 py-2 rounded-md w-full text-left transition-colors"
                >
                  {t(item.labelKey)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}