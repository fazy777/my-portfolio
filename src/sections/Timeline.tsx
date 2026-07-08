import { BookOpen, Laptop, Database, Shield, Globe, Cpu, GitCommit } from 'lucide-react';

interface TimelineEvent {
  phase: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  date: string;
}

const timelineEvents: TimelineEvent[] = [
  {
    phase: 'PHASE 01',
    date: 'Early Academic Focus',
    title: 'Foundations of Programming & OOP',
    subtitle: 'Java Core Principles',
    description: 'Mastered core Java foundations, including polymorphism, encapsulation, inheritance, and fundamental computer science algorithms. Created terminal interfaces and command-line utilities.',
    skills: ['Java Core', 'OOP Concepts', 'CLI Logic', 'Algorithms'],
    icon: BookOpen,
  },
  {
    phase: 'PHASE 02',
    date: 'Desktop System Design',
    title: 'Building Interactive Desktop Apps',
    subtitle: 'GUI Frameworks & OOP Applications',
    description: 'Developed standalone desktop software utilizing GUI frameworks. Focused on handling events, multi-threading, and structuring modules using design patterns.',
    skills: ['JavaFX', 'Event Handling', 'Multi-Threading', 'State Management'],
    icon: Laptop,
  },
  {
    phase: 'PHASE 03',
    date: 'Database Architectures',
    title: 'Relational Database Development',
    subtitle: 'SQL Design & JDBC Integration',
    description: 'Designed relational database schemas, applying normalization rules to eliminate redundancy. Connected Java backends to MySQL databases using JDBC to create persistent user sessions.',
    skills: ['SQL / MySQL', 'JDBC API', 'Schema Normalization', 'Relational Modeling'],
    icon: Database,
  },
  {
    phase: 'PHASE 04',
    date: 'Security Systems Auditing',
    title: 'Cyber Security Operations & Labs',
    subtitle: 'Offensive & Defensive Security Diagnostics',
    description: 'Conducted network packet capture audits, log diagnostics, and system assessments. Explored vulnerability scanners, threat vectors, and built automated traffic inspection scripts.',
    skills: ['Wireshark', 'Nmap', 'Kali Linux', 'Threat Modeling'],
    icon: Shield,
  },
  {
    phase: 'PHASE 05',
    date: 'Modern Frontend Engineering',
    title: 'Full Stack Web Development',
    subtitle: 'Premium Responsive UI Architectures',
    description: 'Developed modern web structures focusing on asset optimization, layouts, semantic HTML, CSS custom variables, and Tailwind CSS. Engineered the SilverLoft luxury design project.',
    skills: ['HTML5 & CSS3', 'JavaScript (ES6+)', 'Tailwind CSS', 'Performance Optimization'],
    icon: Globe,
  },
  {
    phase: 'PHASE 06',
    date: 'Current Specialty Focus',
    title: 'Spring Boot & Scalable Backend Systems',
    subtitle: 'Enterprise-Grade RESTful Microservices',
    description: 'Currently deep-diving into the Spring Framework, configuring Spring Security rules, structuring JPA/Hibernate entities, and developing secure, production-ready REST APIs.',
    skills: ['Spring Boot', 'REST APIs', 'Spring Security', 'Hibernate / JPA'],
    icon: Cpu,
  },
];

export function Timeline() {
  return (
    <section id="experience" className="section-padding bg-navy-900 border-t border-b border-navy-800">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-50 mb-4">
            Learning <span className="text-gradient-cyber">Journey</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-500 to-matrix-500 mx-auto rounded-full mb-4" />
          <p className="text-steel-400 max-w-2xl mx-auto text-sm sm:text-base">
            Timeline of technical growth, detailing the progression from standard computer science fundamentals to cyber security systems and enterprise web engineering.
          </p>
        </div>

        {/* Timeline body */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Center Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyber-500/80 via-navy-700 to-matrix-500/80 transform md:-translate-x-1/2 pointer-events-none" />

          {/* Timeline Nodes */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`relative flex flex-col md:flex-row items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Commit Bullet */}
                  <div className="absolute left-4 md:left-1/2 w-6 h-6 rounded-full bg-navy-950 border-2 border-cyber-500 transform -translate-x-1/2 flex items-center justify-center z-10 hover:scale-125 transition-transform duration-300">
                    <GitCommit className="w-3.5 h-3.5 text-cyber-400" />
                  </div>

                  {/* Empty space helper for alignment */}
                  <div className="hidden md:block w-1/2" />

                  {/* Event Content Card */}
                  <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-8 group">
                    <div className="card relative overflow-hidden bg-navy-950/80 hover:bg-navy-900 border border-navy-800 hover:border-cyber-500/40 transition-all duration-300 p-6 rounded-2xl shadow-xl">
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyber-500/20 to-transparent group-hover:via-cyber-500 transition-all duration-500" />
                      
                      {/* Meta header */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[10px] font-mono font-bold tracking-widest text-cyber-500 bg-cyber-500/10 px-2 py-0.5 rounded border border-cyber-500/20">
                          {event.phase}
                        </span>
                        <span className="text-xs font-mono text-steel-500">{event.date}</span>
                      </div>

                      {/* Icon & Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-xl bg-navy-800 border border-navy-700 flex items-center justify-center group-hover:bg-cyber-500/10 group-hover:border-cyber-500 transition-all duration-300 flex-shrink-0">
                          <event.icon className="w-5 h-5 text-steel-300 group-hover:text-cyber-400 transition-colors" />
                        </div>
                        <div>
                          <h3 className="text-base sm:text-lg font-bold text-steel-100 group-hover:text-cyber-400 transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-xs text-steel-400 font-medium">{event.subtitle}</p>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-steel-400 leading-relaxed mb-4">
                        {event.description}
                      </p>

                      {/* Skills Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-navy-900">
                        {event.skills.map((skill, sIdx) => (
                          <span 
                            key={sIdx} 
                            className="text-[10px] sm:text-xs px-2.5 py-0.5 bg-navy-900 text-steel-400 border border-navy-800 rounded font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
