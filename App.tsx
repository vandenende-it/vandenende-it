import React, { useState } from 'react';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { Hero } from './components/Sections/Hero';
import { Services } from './components/Sections/Services';
import { Experience } from './components/Sections/Experience';
import { Contact } from './components/Sections/Contact';
import { Section } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>(Section.HOME);
  const [showScanline, setShowScanline] = useState(true);

  // Handle navigation with scroll
  const navigateTo = (sectionId: Section) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(sectionId);
    }
  };

  // Update active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = Object.values(Section);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top >= 0 && rect.top <= 300) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col font-mono text-neon-blue selection:bg-neon-pink selection:text-white overflow-x-hidden">
      
      {/* CRT Overlay Effects */}
      <div className="fixed inset-0 pointer-events-none z-50 crt-overlay opacity-80 mix-blend-overlay"></div>
      {showScanline && (
        <div className="fixed inset-0 pointer-events-none z-40 bg-gradient-to-b from-transparent via-white/5 to-transparent h-[10%] w-full animate-scanline opacity-20"></div>
      )}

      {/* Ambient Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:40px_40px] z-[-1] perspective-[1000px]">
        <div className="absolute inset-0 bg-gradient-to-b from-retro-black via-transparent to-retro-black"></div>
      </div>

      <Header currentSection={currentSection} onNavigate={navigateTo} />

      <main className="flex-grow container mx-auto px-4 pt-24 pb-8 md:px-8 max-w-6xl z-10 relative space-y-24">
        <section id={Section.HOME} className="min-h-[80vh] flex flex-col justify-center">
          <Hero onNavigate={navigateTo} />
        </section>
        
        <section id={Section.SERVICES} className="pt-16">
          <Services />
        </section>

        <section id={Section.EXPERIENCE} className="pt-16">
          <Experience />
        </section>

        <section id={Section.CONTACT} className="pt-16 pb-24">
          <Contact />
        </section>
      </main>

      <Footer 
        toggleScanline={() => setShowScanline(!showScanline)} 
        scanlineEnabled={showScanline}
      />
    </div>
  );
};

export default App;