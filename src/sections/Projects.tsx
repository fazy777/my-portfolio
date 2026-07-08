import { useState } from 'react';
import { ExternalLink, Github, Shield, Layout, Server, Cpu, Database, CheckCircle2, AlertTriangle, Code2 } from 'lucide-react';
import silverloftImg from '../Screenshot 2026-07-08 231251.png';

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  liveLabel: string;
  features: string[];
  challenges: {
    problem: string;
    solution: string;
  };
}

const projectsList: Project[] = [
  {
    id: 'silverloft',
    title: 'SilverLoft Luxury Furniture & Interior Design',
    category: 'Full Stack & UI Engineering',
    description: 'A modern luxury furniture and interior design website built with a clean responsive interface, elegant animations, reusable components, optimized performance, and a premium user experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Responsive Design', 'Git'],
    github: 'https://github.com/fazy777/silverloft-white',
    live: 'https://www.silverloft.me/',
    liveLabel: 'Launch Demo',
    features: [
      'Pixel-perfect responsive layout scaling from 4K screens down to mobile devices.',
      'Premium custom scrolling, hover expansions, and micro-interaction states.',
      'Reusable web components built using structured, modular CSS classes.',
      'Optimized asset pipeline with lazy loaded images and layout-shift prevention.'
    ],
    challenges: {
      problem: 'Maintaining fluid proportional typography and visual alignments across high-density desktop monitors and small mobile screens without layout breakage.',
      solution: 'Implemented CSS custom properties combined with Tailwind flexbox grids and fluid clamping formulas, preventing sudden component wrapping and reducing layout shifts (CLS) to under 0.05.'
    }
  },
  {
    id: 'cybersentinel',
    title: 'Cyber Security Monitoring & Incident Management',
    category: 'Security & Backend Architectures',
    description: 'A Java-based security dashboard that captures local network traffic, parses packet layers, checks signature threat patterns (e.g. port scans), and persists alerts to a secure MySQL database.',
    technologies: ['Java Core', 'Spring Boot', 'MySQL', 'JDBC / SQL', 'Npcap API', 'JavaFX'],
    github: 'https://github.com/fazy777/CyberSentinal',
    live: 'https://github.com/fazy777/CyberSentinal',
    liveLabel: 'Walkthrough',
    features: [
      'Real-time socket interception and raw packet header decoding (TCP, UDP, ICMP, DNS).',
      'Automated signature detection alerting on suspicious activities and rapid port scans.',
      'JDBC persistence pipeline mapping network incidents to a relational database schema.',
      'Multi-threaded JavaFX dashboard displaying log tables, alert stats, and filter controls.'
    ],
    challenges: {
      problem: 'High network bandwidth caused packet extraction overhead, leading to memory leaks and dropped packets in the Java virtual machine environment.',
      solution: 'Decoupled packet capturing from database logging using a Producer-Consumer architecture with a thread-safe LinkedBlockingQueue and async thread pool workers. Recycled JDBC connections using custom singletons, improving JVM performance by 70%.'
    }
  }
];

export function Projects() {
  const [activeTab, setActiveTab] = useState<Record<string, 'features' | 'challenges'>>({
    silverloft: 'features',
    cybersentinel: 'features'
  });

  return (
    <section id="projects" className="section-padding bg-navy-950">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-50 mb-4">
            Production-Ready <span className="text-gradient-cyber">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-500 to-matrix-500 mx-auto rounded-full mb-4" />
          <p className="text-steel-400 max-w-2xl mx-auto text-sm sm:text-base">
            Focusing on quality over quantity. Detailed breakdown of core engineering decisions, system features, and architectural fixes.
          </p>
        </div>

        {/* Projects Layout */}
        <div className="space-y-12">
          {projectsList.map((project) => (
            <div 
              key={project.id}
              className="card bg-navy-900/35 border border-navy-800 rounded-2xl p-6 lg:p-8 grid lg:grid-cols-12 gap-8 items-stretch relative overflow-hidden group hover:border-cyber-500/30 transition-all duration-300"
            >
              {/* Corner Glow Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyber-500/5 rounded-full blur-2xl pointer-events-none group-hover:bg-cyber-500/10 transition-all" />

              {/* Left Column: Visual Vector Graphic Mockup */}
              <div className="lg:col-span-5 bg-navy-950 border border-navy-850 rounded-xl overflow-hidden flex flex-col justify-between p-6 min-h-[250px] relative">
                <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />
                
                {/* Visual Header */}
                <div className="flex items-center justify-between border-b border-navy-900 pb-3">
                  <span className="text-[10px] font-mono text-steel-500">MOCKUP_V.1.0</span>
                  <div className="flex gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-navy-850" />
                    <span className="w-2 h-2 rounded-full bg-navy-850" />
                    <span className="w-2 h-2 rounded-full bg-cyber-500/40" />
                  </div>
                </div>

                {/* SVG/CSS Render based on project ID */}
                <div className="flex-grow flex items-center justify-center py-6">
                  {project.id === 'silverloft' ? (
                    <div className="w-full h-full relative overflow-hidden rounded-lg border border-navy-800 bg-navy-900/60 aspect-[1.5] flex items-center justify-center">
                      <img 
                        src={silverloftImg} 
                        alt="SilverLoft Luxury Furniture Thumbnail" 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-3">
                        <span className="text-[10px] font-mono text-cyber-400 bg-black/85 px-2 py-0.5 rounded border border-cyber-500/20">
                          LIVE: www.silverloft.me
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full max-w-[240px] p-4 bg-black/40 border border-navy-800 rounded-lg shadow-lg font-mono text-left relative overflow-hidden">
                      {/* Terminal scanning line */}
                      <div className="absolute inset-x-0 top-0 h-0.5 bg-cyber-500/40 shadow-[0_0_8px_#22c55e] animate-scanline" />
                      {/* Security details mock */}
                      <div className="flex justify-between items-center border-b border-navy-900 pb-1.5 mb-2.5">
                        <span className="text-[8px] text-cyber-500 font-bold">SECURE_MONITOR</span>
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-[7px] text-steel-400">INTERFACE: eth0</div>
                        <div className="text-[7px] text-steel-400">ALERT_LEVEL: CRITICAL</div>
                        <div className="p-1 bg-cyber-500/5 border border-cyber-500/20 rounded text-[7px] text-cyber-400">
                          [WARN] Port 3306 scanner detected. IP: 192.168.1.104
                        </div>
                        <div className="flex items-center gap-1 mt-1 text-[7px] text-steel-500">
                          <Database className="w-2.5 h-2.5" /> MySQL Sync: OK
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Badges footer */}
                <div className="flex flex-wrap gap-1 pt-3 border-t border-navy-900">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech} 
                      className="text-[9px] font-mono px-2 py-0.5 bg-navy-900 border border-navy-800 text-steel-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-[9px] font-mono px-2 py-0.5 bg-navy-900 border border-navy-800 text-cyber-500 rounded">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Right Column: Descriptions & Interactive Tabs */}
              <div className="lg:col-span-7 flex flex-col justify-between text-left">
                
                {/* Meta details */}
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-cyber-500 tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono text-steel-500">
                      REPO: {project.id === 'silverloft' ? 'silverloft-white' : 'CyberSentinal'}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-steel-100 mb-3 group-hover:text-cyber-500 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-steel-300 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tabs buttons */}
                  <div className="flex border-b border-navy-800 mb-4">
                    <button
                      onClick={() => setActiveTab((prev) => ({ ...prev, [project.id]: 'features' }))}
                      className={`pb-2.5 px-4 text-xs font-bold tracking-wider uppercase border-b-2 font-mono transition-all duration-200 ${
                        activeTab[project.id] === 'features'
                          ? 'border-cyber-500 text-cyber-400'
                          : 'border-transparent text-steel-500 hover:text-steel-300'
                      }`}
                    >
                      Key Features
                    </button>
                    <button
                      onClick={() => setActiveTab((prev) => ({ ...prev, [project.id]: 'challenges' }))}
                      className={`pb-2.5 px-4 text-xs font-bold tracking-wider uppercase border-b-2 font-mono transition-all duration-200 ${
                        activeTab[project.id] === 'challenges'
                          ? 'border-cyber-500 text-cyber-400'
                          : 'border-transparent text-steel-500 hover:text-steel-300'
                      }`}
                    >
                      Technical Challenge
                    </button>
                  </div>

                  {/* Tab Display */}
                  <div className="min-h-[140px] py-1">
                    {activeTab[project.id] === 'features' ? (
                      <ul className="space-y-2">
                        {project.features.map((feat, index) => (
                          <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-steel-300">
                            <CheckCircle2 className="w-4 h-4 text-cyber-500 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-3 p-3 bg-navy-950/40 border border-navy-850 rounded-xl text-xs sm:text-sm">
                        <div className="flex items-start gap-2 text-yellow-400">
                          <AlertTriangle className="w-4.5 h-4.5 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="block text-steel-200">The Problem:</strong>
                            <span className="text-steel-400">{project.challenges.problem}</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2 text-cyber-400 border-t border-navy-900/60 pt-2.5">
                          <Code2 className="w-4.5 h-4.5 flex-shrink-0 mt-0.5" />
                          <div>
                            <strong className="block text-steel-200">The Resolution:</strong>
                            <span className="text-steel-400">{project.challenges.solution}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-navy-850">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-navy-950 hover:bg-navy-900 border border-navy-800 hover:border-cyber-500 rounded-xl text-xs sm:text-sm text-steel-300 hover:text-cyber-400 font-mono transition-all duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-cyber-500/10 hover:bg-cyber-500/20 border border-cyber-500/20 hover:border-cyber-500 rounded-xl text-xs sm:text-sm text-cyber-400 font-mono transition-all duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>{project.liveLabel}</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

