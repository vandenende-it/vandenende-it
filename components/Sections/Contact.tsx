import React, { useState } from 'react';
import { ContactFormState } from '../../types';
import { sendEmail } from '../../services/mailService';

// Declaration for global Google Recaptcha
declare global {
  interface Window {
    grecaptcha: any;
  }
}

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<ContactFormState>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'>('IDLE');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SENDING');

    try {
      // Execute reCAPTCHA v3
      // BELANGRIJK: Zorg ervoor dat de reCAPTCHA v3 script tag in je HTML staat.
      // <script src="https://www.google.com/recaptcha/api.js?render=UW_RECAPTCHA_SITE_KEY"></script>
      const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '6LflVxQsAAAAAPYvQYReHaCj9wZulMJUPfDiVDPu';
      let token = '';

      if (window.grecaptcha) {
        await window.grecaptcha.ready();
        try {
          token = await window.grecaptcha.execute(SITE_KEY, { action: 'submit' });
          console.log("Secure Token Generated.");
        } catch (err) {
          console.error("Recaptcha execution failed", err);
          // Optioneel: stop de uitvoering als reCAPTCHA faalt
        }
      } else {
        console.warn("Recaptcha not loaded");
      }

      // Pass form data AND token to the backend
      const success = await sendEmail(formState, token);
      
      if (success) {
        setStatus('SUCCESS');
        setFormState({ name: '', email: '', message: '' });
      } else {
        setStatus('ERROR');
      }
    } catch (error) {
      setStatus('ERROR');
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-display text-neon-pink mb-2">ESTABLISH UPLINK</h2>
        <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-neon-pink to-transparent"></div>
      </div>

      {/* Contact Form Container - Centered */}
      <div className="bg-retro-black border border-neon-pink/40 p-8 md:p-12 shadow-[0_0_20px_rgba(255,0,255,0.1)] relative">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-3 h-3 bg-neon-pink"></div>
        <div className="absolute top-0 right-0 w-3 h-3 bg-neon-pink"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 bg-neon-pink"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 bg-neon-pink"></div>

        {status === 'SUCCESS' ? (
          <div className="text-center py-12">
            <div className="text-neon-green text-6xl mb-4 animate-bounce">✓</div>
            <h3 className="text-2xl font-display text-white mb-2">TRANSMISSION COMPLETE</h3>
            <p className="text-neon-blue">Message logged in mainframe successfully.</p>
            <button 
              onClick={() => setStatus('IDLE')}
              className="mt-8 text-sm underline text-neon-pink hover:text-white"
            >
              SEND_NEW_PACKET
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-xs tracking-widest text-neon-pink group-focus-within:text-neon-green transition-colors">AGENT_NAME</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-black/50 border-b border-neon-blue/50 p-3 text-white focus:border-neon-green focus:bg-neon-green/5 focus:outline-none transition-all"
                  placeholder="Identify yourself"
                />
              </div>
              <div className="space-y-2 group">
                <label className="text-xs tracking-widest text-neon-pink group-focus-within:text-neon-green transition-colors">COMM_FREQUENCY (EMAIL)</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-black/50 border-b border-neon-blue/50 p-3 text-white focus:border-neon-green focus:bg-neon-green/5 focus:outline-none transition-all"
                  placeholder="name@example.com"
                />
              </div>
            </div>

            <div className="space-y-2 group">
              <label className="text-xs tracking-widest text-neon-pink group-focus-within:text-neon-green transition-colors">DATA_PAYLOAD</label>
              <textarea
                name="message"
                required
                rows={6}
                value={formState.message}
                onChange={handleChange}
                className="w-full bg-black/50 border border-neon-blue/30 p-4 text-white focus:border-neon-green focus:bg-neon-green/5 focus:outline-none transition-all resize-none"
                placeholder="Enter project specifications..."
              />
            </div>

            <div className="flex flex-col items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={status === 'SENDING'}
                className={`w-full py-4 border font-bold tracking-[0.2em] transition-all duration-300 uppercase relative group overflow-hidden ${
                  status === 'SENDING'
                    ? 'bg-gray-900 border-gray-700 text-gray-500 cursor-not-allowed' 
                    : 'bg-neon-blue/10 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black shadow-[0_0_15px_rgba(0,255,255,0.2)] hover:shadow-[0_0_25px_rgba(0,255,255,0.6)]'
                }`}
              >
                <span className="relative z-10">
                  {status === 'SENDING' ? 'TRANSMITTING...' : 'INITIATE_SEND'}
                </span>
                {status !== 'SENDING' && (
                  <div className="absolute inset-0 h-full w-full bg-neon-blue/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-in-out"></div>
                )}
              </button>
              
              <p className="text-[10px] text-gray-500 text-center w-full opacity-60 hover:opacity-100 transition-opacity">
                This site is protected by reCAPTCHA and the Google 
                <a href="https://policies.google.com/privacy" className="hover:text-neon-blue underline mx-1" target="_blank" rel="noreferrer">Privacy Policy</a> and 
                <a href="https://policies.google.com/terms" className="hover:text-neon-blue underline mx-1" target="_blank" rel="noreferrer">Terms of Service</a> apply.
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};