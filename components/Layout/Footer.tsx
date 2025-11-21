import React from 'react';

interface FooterProps {
  toggleScanline: () => void;
  scanlineEnabled: boolean;
}

export const Footer: React.FC<FooterProps> = ({ toggleScanline, scanlineEnabled }) => {
  return (
    <footer className="border-t border-neon-blue/20 bg-retro-dark py-6 mt-auto z-10 relative">
      <div className="container mx-auto px-4 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neon-blue/50 max-w-6xl">
        <div>
          <p>© 198X - 202X VANDENENDE.IT.</p>
          <p className="text-xs mt-1">ALL RIGHTS RESERVED.</p>
        </div>

        <div className="flex flex-wrap items-center gap-4 md:gap-6 justify-center">
          <button 
            onClick={toggleScanline}
            className="flex items-center gap-2 hover:text-neon-green transition-colors uppercase"
          >
            <div className={`w-3 h-3 border border-current ${scanlineEnabled ? 'bg-neon-green' : ''}`}></div>
            Scanlines: {scanlineEnabled ? 'ON' : 'OFF'}
          </button>

          <div className="hidden md:block border-l border-neon-blue/30 pl-6">
            STATUS: <span className="text-neon-green animate-pulse">ONLINE</span>
          </div>
        </div>
      </div>
    </footer>
  );
};