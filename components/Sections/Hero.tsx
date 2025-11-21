import React, { useEffect, useState } from 'react';
import { Section } from '../../types';

interface HeroProps {
  onNavigate: (section: Section) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const [text, setText] = useState('');
  const fullText = "INITIALIZING...\nUSER: MAARTEN VAN DEN ENDE\nROLE: TEST_AUTOMATION_SPECIALIST\nSTATUS: OPEN_FOR_WORK";
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => {
        if (index < fullText.length) {
          const char = fullText.charAt(index);
          index++;
          return prev + char;
        }
        return prev;
      });
    }, 40);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="w-full max-w-2xl border-2 border-neon-pink p-1 bg-retro-black/50 shadow-[0_0_20px_rgba(255,0,255,0.3)] mb-10 transform hover:scale-[1.01] transition-transform duration-500">
        <div className="border border-neon-blue p-6 min-h-[180px] flex flex-col justify-center relative overflow-hidden bg-black/40">
          {/* Decor corners */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-neon-green"></div>
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-neon-green"></div>
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-neon-green"></div>
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-neon-green"></div>

          <pre className="whitespace-pre-wrap font-mono text-lg md:text-xl text-neon-green leading-relaxed text-left pl-4 md:pl-8">
            {text}
            <span className="animate-blink inline-block w-3 h-5 bg-neon-green ml-1 align-middle"></span>
          </pre>
        </div>
      </div>

      <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white mb-4 drop-shadow-[4px_4px_0_rgba(255,0,255,1)] tracking-tight">
        MAARTEN <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-neon-green">VAN DEN ENDE</span>
      </h1>
      
      <h2 className="text-xl md:text-3xl font-display text-neon-pink tracking-widest mb-8">
        TEST AUTOMATION | CI/CD | CLOUD
      </h2>

      <p className="text-lg md:text-xl text-neon-blue/80 mb-12 max-w-3xl leading-relaxed">
        15+ years of experience as a Tester & DevOps Engineer. 
        Specializing in AWS cloud solutions, test automation frameworks (Playwright, Testcontainers), and CI/CD pipelines.
      </p>

      <div className="flex flex-wrap gap-6 justify-center">
        <button 
          onClick={() => onNavigate(Section.CONTACT)}
          className="px-8 py-3 bg-neon-pink text-black font-bold tracking-widest hover:bg-white hover:scale-105 transition-all duration-200 shadow-[0_0_15px_#ff00ff]"
        >
          CONTACT_UPLINK
        </button>
        <button 
          onClick={() => onNavigate(Section.EXPERIENCE)}
          className="px-8 py-3 border border-neon-blue text-neon-blue font-bold tracking-widest hover:bg-neon-blue hover:text-black transition-all duration-200"
        >
          VIEW_LOGS
        </button>
      </div>
    </div>
  );
};