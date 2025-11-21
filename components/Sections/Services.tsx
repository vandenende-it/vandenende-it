import React from 'react';
import { ServiceItem } from '../../types';

export const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      id: '1',
      title: 'TEST_AUTOMATION',
      description: 'Expert in Playwright, Selenium, Cucumber, Appium, and Testcontainers. Building robust E2E and visual regression frameworks.',
      icon: '🧪'
    },
    {
      id: '2',
      title: 'CLOUD_ARCH_AWS',
      description: 'AWS Certified Solution Architect. Proficient in AWS CDK, Lambda, ECS, CloudFormation, and Terraform infrastructure as code.',
      icon: '☁️'
    },
    {
      id: '3',
      title: 'DEVOPS_PIPELINES',
      description: 'Designing CI/CD workflows with JetBrains Space, Azure DevOps, Jenkins, GitLab, and Docker/Kubernetes integration.',
      icon: '🚀'
    },
    {
      id: '4',
      title: 'CORE_LANGUAGES',
      description: 'Java, TypeScript, C#, and Python. Full-stack capability with a focus on backend API testing and automation logic.',
      icon: '💻'
    }
  ];

  return (
    <div className="space-y-12">
      <div className="text-center border-b border-neon-blue/30 pb-8 relative">
         <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-retro-black px-4 text-neon-pink text-sm tracking-widest">MODULES_LOADED</div>
        <h2 className="text-4xl md:text-5xl font-display text-neon-yellow mb-4">CORE COMPETENCIES</h2>
        <p className="text-neon-blue/60 max-w-2xl mx-auto">ACTIVE SKILLSETS DETECTED IN MEMORY</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <div 
            key={service.id}
            className="group relative p-6 border border-neon-blue/30 bg-retro-dark hover:bg-neon-blue/5 transition-all duration-300 overflow-hidden"
          >
            {/* Hover Grid Effect */}
            <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,255,.05)_25%,rgba(0,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,255,255,.05)_75%,rgba(0,255,255,.05)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(0,255,255,.05)_25%,rgba(0,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(0,255,255,.05)_75%,rgba(0,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:30px_30px] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4 border-b border-dashed border-neon-pink/50 pb-2">
                <h3 className="text-2xl font-display text-neon-pink group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">{service.icon}</span>
              </div>
              
              <p className="text-neon-blue/80 leading-relaxed mb-6 flex-grow font-light">
                {service.description}
              </p>

              <div className="flex justify-between items-center">
                 <span className="text-xs text-neon-green/50 font-mono">STATUS: READY</span>
                <button className="text-xs bg-neon-blue/10 text-neon-blue px-2 py-1 border border-neon-blue/30 group-hover:bg-neon-blue group-hover:text-black transition-colors">
                  DETAILS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};