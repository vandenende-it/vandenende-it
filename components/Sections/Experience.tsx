import React from 'react';
import { ExperienceItem } from '../../types';

export const Experience: React.FC = () => {
  const history: ExperienceItem[] = [
    {
      id: 'FREELANCE',
      era: 'VANDENENDE.IT',
      role: 'INDEPENDENT TEST AUTOMATION SPECIALIST & DEVOPS',
      period: '2017 - PRESENT',
      summary: 'Operating as an independent specialist for high-profile clients. Focusing on Cloud Native solutions, modern Test Automation (Playwright, Testcontainers), and CI/CD Strategy.',
      projects: [
        {
          name: 'SPORTLINK',
          details: 'Defining Test Strategy and framework migration. Replacing Cypress with Playwright for enhanced stability and speed.',
          tech: ['Playwright', 'Java', 'Appium', 'Strategy']
        },
        {
          name: 'LELY',
          details: 'Pioneered integration testing with Testcontainers to isolate databases. Guided international teams in migrating from legacy Cucumber to modern Playwright.',
          tech: ['Testcontainers', 'Playwright', 'Java']
        },
        {
          name: 'MYMESH',
          details: 'Full stack DevOps & Quality implementation. Built Infrastructure as Code with AWS CDK (ECS/Lambda) and introduced JetBrains Space.',
          tech: ['AWS CDK', 'ECS', 'TypeScript', 'Mendix']
        },
        {
          name: 'DPG MEDIA',
          details: 'Implemented large-scale E2E and Visual Regression testing frameworks for high-traffic media platforms.',
          tech: ['Visual Regression', 'Playwright', 'Mobile']
        },
        {
          name: 'ROYAL SCHIPHOL & RABOBANK',
          details: 'Early adoption of containerization (Docker/Kubernetes) and automated visual regression pipelines.',
          tech: ['Docker', 'Kubernetes', 'Cypress', 'Spring Boot']
        }
      ]
    },
    {
      id: 'XEBIA',
      era: 'XEBIA CONSULTANCY',
      role: 'TRAINER & SENIOR CONSULTANT',
      period: '2013 - 2017',
      summary: 'Key player in the Dutch DevOps & Continuous Delivery revolution. Delivered high-end consultancy and training.',
      highlights: [
        'Speaker at Testworks Conf 2015 & 2016 ("Scalable QA with Docker").',
        'Hosted meetups on Docker, Webdriver Patterns, and Mobile Testing.',
        'Delivered "Continuous Delivery with Docker" training to external clients.'
      ],
      projects: [
        {
          name: 'QUBY (TOON)',
          details: 'DevOps Engineer. Built CI/CD platform based on Mesos, Marathon, and Jenkins. Coached scrum teams on Docker best practices.',
          tech: ['Mesos', 'Marathon', 'Jenkins', 'Docker']
        },
        {
          name: 'ING PAYMENTS',
          details: 'Designed detailed solutions for Continuous Delivery pipelines and automated test infrastructure.',
          tech: ['CD Pipelines', 'Architecture', 'Automation']
        }
      ]
    },
    {
      id: 'EARLY',
      era: 'INITIALIZATION',
      role: 'CORPORATE & FOUNDATION',
      period: '2007 - 2013',
      summary: 'Foundational years building mission-critical quality assurance systems for enterprise giants.',
      projects: [
        {
          name: 'ORACLE',
          details: 'Senior QA Engineer. Early adoption of Agile/Scrum. Responsible for Continuous Integration environments.',
          tech: ['Agile', 'Selenium 2.0', 'CI']
        },
        {
          name: 'LOGICA / BANKING / RAILWAYS',
          details: 'Test Consultant for RBS, ABN AMRO, and NS. Developed structured test approaches (TestFrame) and automated tooling in PERL.',
          tech: ['TestFrame', 'Perl', 'Banking Systems']
        }
      ]
    }
  ];

  return (
    <div className="space-y-16">
       <div className="text-center border-b border-neon-blue/30 pb-8 relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-retro-black px-4 text-neon-green text-sm tracking-widest border border-neon-green/30">
          SYSTEM_LOGS_RETRIEVED
        </div>
        <h2 className="text-4xl md:text-5xl font-display text-neon-pink mb-4">CAREER TIMELINE</h2>
        <p className="text-neon-blue/60 max-w-2xl mx-auto">MAJOR ERA EXECUTION HISTORY</p>
      </div>

      <div className="space-y-20">
        {history.map((era, idx) => (
          <div key={era.id} className="relative">
            {/* Connector Line (except for last item) */}
            {idx !== history.length - 1 && (
              <div className="absolute left-4 md:left-8 top-10 bottom-[-80px] w-0.5 bg-gradient-to-b from-neon-pink via-neon-blue/50 to-transparent z-0 border-l border-dashed border-neon-blue/30"></div>
            )}

            {/* Era Header */}
            <div className="flex items-center gap-4 mb-6 relative z-10">
              <div className="w-8 h-8 md:w-16 md:h-16 bg-retro-black border-2 border-neon-pink flex items-center justify-center rounded-full shadow-[0_0_15px_rgba(255,0,255,0.4)] shrink-0">
                <span className="text-neon-pink font-bold text-sm md:text-xl">{history.length - idx}</span>
              </div>
              <div>
                <h3 className="text-3xl md:text-4xl font-display text-white tracking-wide">
                  {era.era}
                </h3>
                <div className="flex flex-col md:flex-row md:items-center gap-2 text-neon-blue/70 font-mono text-sm">
                   <span className="text-neon-green font-bold">{era.period}</span>
                   <span className="hidden md:inline text-neon-blue/30">|</span>
                   <span>{era.role}</span>
                </div>
              </div>
            </div>

            {/* Era Content Card */}
            <div className="ml-4 md:ml-8 border-l-2 border-neon-blue/20 pl-6 md:pl-10 pb-4">
              <div className="bg-retro-dark/50 border border-neon-blue/10 p-6 md:p-8 relative overflow-hidden group hover:border-neon-blue/30 transition-all duration-500">
                
                {/* Summary */}
                <p className="text-lg text-gray-300 mb-8 italic border-l-4 border-neon-yellow pl-4 leading-relaxed">
                  "{era.summary}"
                </p>

                {/* Highlights Section (if exists) */}
                {era.highlights && (
                  <div className="mb-8 bg-neon-blue/5 p-4 border border-neon-blue/20">
                    <h4 className="text-neon-blue text-sm font-bold tracking-widest mb-3 uppercase">Achievement Unlocked</h4>
                    <ul className="space-y-2">
                      {era.highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                          <span className="text-neon-yellow">★</span> {hl}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Projects Grid */}
                {era.projects && (
                  <div>
                    <h4 className="text-neon-pink text-sm font-bold tracking-widest mb-4 uppercase border-b border-neon-pink/20 pb-2 inline-block">
                      Mission Log
                    </h4>
                    <div className="grid grid-cols-1 gap-6">
                      {era.projects.map((proj, i) => (
                        <div key={i} className="bg-black/40 p-4 border-l-2 border-neon-green/50 hover:bg-neon-green/5 transition-colors">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                            <strong className="text-white text-lg font-display tracking-wide">{proj.name}</strong>
                            {proj.tech && (
                              <div className="flex flex-wrap gap-2">
                                {proj.tech.map((t, tIdx) => (
                                  <span key={tIdx} className="text-[10px] px-1.5 py-0.5 border border-neon-blue/30 text-neon-blue rounded">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                          <p className="text-sm text-gray-400 leading-relaxed">
                            {proj.details}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>
        ))}
        
        {/* End Marker */}
        <div className="ml-4 md:ml-8 flex items-center gap-4 opacity-50">
          <div className="w-4 h-4 bg-neon-blue rounded-full animate-pulse"></div>
          <span className="text-xs text-neon-blue font-mono">INITIAL_BOOT_SEQUENCE_COMPLETE</span>
        </div>
      </div>
    </div>
  );
};