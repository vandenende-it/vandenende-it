import React, { useState } from 'react';
import { Section } from '../../types';

interface HeaderProps {
  currentSection: Section;
  onNavigate: (section: Section) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'SYST_HOME', value: Section.HOME },
    { label: 'SKILLS', value: Section.SERVICES },
    { label: 'SYS_LOG', value: Section.EXPERIENCE },
    { label: 'COMMS', value: Section.CONTACT },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-retro-black/95 backdrop-blur-sm border-b border-neon-blue/30 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
        {/* Logo */}
        <div 
          className="font-display text-2xl md:text-3xl tracking-widest text-neon-pink cursor-pointer hover:text-neon-yellow transition-colors duration-300 drop-shadow-[0_0_5px_rgba(255,0,255,0.8)] whitespace-nowrap"
          onClick={() => onNavigate(Section.HOME)}
        >
          VANDENENDE<span className="text-neon-blue">.IT</span>
          <span className="animate-blink ml-1">_</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => onNavigate(item.value)}
              className={`
                relative text-lg tracking-wider transition-all duration-200 px-2 py-1
                ${currentSection === item.value 
                  ? 'text-neon-green border-b-2 border-neon-green shadow-[0_5px_10px_-5px_rgba(57,255,20,0.5)]' 
                  : 'text-neon-blue/70 hover:text-neon-blue hover:border-b hover:border-neon-blue/50'}
              `}
            >
              [{item.label}]
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neon-blue border border-neon-blue px-3 py-1 active:bg-neon-blue active:text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? 'CLOSE' : 'MENU'}
        </button>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-retro-black border-b border-neon-pink p-4 flex flex-col gap-4 shadow-xl">
          {navItems.map((item) => (
            <button
              key={item.value}
              onClick={() => {
                onNavigate(item.value);
                setIsMenuOpen(false);
              }}
              className={`
                text-left text-xl tracking-widest py-2 border-l-4 pl-4
                ${currentSection === item.value 
                  ? 'border-neon-green text-neon-green bg-neon-green/10' 
                  : 'border-transparent text-neon-blue hover:bg-neon-blue/10'}
              `}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};