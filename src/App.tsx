import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CursorTracker } from './components/CursorTracker';
import { ChatBot } from './components/ChatBot';
import { BackgroundLogos } from './components/BackgroundLogos';
import { Dynamic3DBackground } from './components/Dynamic3DBackground';

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        <Dynamic3DBackground />
        <BackgroundLogos />
        <CursorTracker />
        <Navbar />
        <main className="relative z-10">
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Contact />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </ThemeProvider>
  );
}