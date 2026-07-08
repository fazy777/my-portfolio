import { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  Terminal, 
  Lock, 
  Wifi, 
  Server, 
  Coffee, 
  Code2, 
  Database, 
  GitBranch, 
  Cpu, 
  Layout, 
  Sparkles,
  Eye,
  LineChart
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ComponentType<{ className?: string }>;
}

const securitySkills: Skill[] = [
  { name: 'Network Security', level: 90, icon: Wifi },
  { name: 'Incident Management', level: 85, icon: Shield },
  { name: 'Packet Analysis', level: 80, icon: Eye },
  { name: 'Kali Linux', level: 85, icon: Terminal },
  { name: 'Wireshark', level: 80, icon: LineChart },
  { name: 'Nmap', level: 75, icon: Lock },
];

const backendSkills: Skill[] = [
  { name: 'Java / OOP', level: 90, icon: Coffee },
  { name: 'Spring Boot', level: 75, icon: Server },
  { name: 'MySQL / SQL', level: 85, icon: Database },
  { name: 'REST APIs', level: 80, icon: Cpu },
  { name: 'Node.js', level: 65, icon: Code2 },
];

const frontendSkills: Skill[] = [
  { name: 'HTML5 / CSS3', level: 90, icon: Code2 },
  { name: 'JavaScript', level: 85, icon: Code2 },
  { name: 'Responsive Design', level: 90, icon: Layout },
  { name: 'Tailwind CSS', level: 85, icon: Layout },
  { name: 'Bootstrap', level: 80, icon: Layout },
];

interface SkillBarProps {
  skill: Skill;
}

function SkillBar({ skill }: SkillBarProps) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(skill.level);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [skill.level]);

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <skill.icon className="w-4 h-4 text-cyber-500 group-hover:text-cyber-400 transition-colors" />
          <span className="text-xs sm:text-sm text-steel-200 font-medium">{skill.name}</span>
        </div>
        <span className="text-xs text-steel-400 font-mono">{skill.level}%</span>
      </div>
      <div className="h-2 bg-navy-950 border border-navy-850 rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-cyber-500 to-matrix-500 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(34,197,94,0.3)]" 
          style={{ width: `${width}%` }} 
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-navy-950">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-50 mb-4">
            Technical <span className="text-gradient-cyber">Skill Matrix</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-500 to-matrix-500 mx-auto rounded-full mb-4" />
          <p className="text-steel-400 max-w-2xl mx-auto text-sm sm:text-base">
            Structured competency ratings covering defensive cybersecurity, backend frameworks, and responsive layouts.
          </p>
        </div>

        {/* Skill Grids */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Category: Cybersecurity */}
          <div className="card relative overflow-hidden bg-navy-900/40 hover:border-cyber-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-500/45" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyber-500/10 border border-cyber-500/35 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-cyber-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-steel-100">Cyber Security</h3>
                <p className="text-[10px] text-steel-500 font-mono">SecOps & Network Diagnostics</p>
              </div>
            </div>
            <div className="space-y-4">
              {securitySkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Category: Backend & Database */}
          <div className="card relative overflow-hidden bg-navy-900/40 hover:border-cyber-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-500/45" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyber-500/10 border border-cyber-500/35 rounded-xl flex items-center justify-center">
                <Server className="w-5 h-5 text-cyber-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-steel-100">Backend & SQL</h3>
                <p className="text-[10px] text-steel-500 font-mono">Database & Core Logic</p>
              </div>
            </div>
            <div className="space-y-4">
              {backendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Category: Frontend & UI */}
          <div className="card md:col-span-2 lg:col-span-1 relative overflow-hidden bg-navy-900/40 hover:border-cyber-500/30 transition-all duration-300">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-cyber-500/45" />
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-cyber-500/10 border border-cyber-500/35 rounded-xl flex items-center justify-center">
                <Layout className="w-5 h-5 text-cyber-400" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-steel-100">Frontend Engineering</h3>
                <p className="text-[10px] text-steel-500 font-mono">Responsive UI & Design System</p>
              </div>
            </div>
            <div className="space-y-4">
              {frontendSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

        </div>

        {/* Tools & Workflow Badges */}
        <div className="mt-16 card bg-navy-900/20 border border-navy-800">
          <h3 className="text-center text-sm font-semibold text-steel-400 font-mono uppercase tracking-wider mb-6">
            Developer Tools & Workflow Ecosystem
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
            {[
              { name: 'Git', icon: GitBranch },
              { name: 'GitHub', icon: Code2 },
              { name: 'VS Code', icon: Terminal },
              { name: 'IntelliJ IDEA', icon: Coffee },
              { name: 'MySQL Workbench', icon: Database },
              { name: 'Kali Linux', icon: Terminal },
              { name: 'Wireshark', icon: LineChart },
              { name: 'Nmap', icon: Lock }
            ].map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-navy-900 border border-navy-750 hover:border-cyber-500/50 rounded-xl text-xs sm:text-sm text-steel-300 hover:text-cyber-400 transition-all duration-200 cursor-default"
              >
                <tool.icon className="w-3.5 h-3.5" />
                <span>{tool.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning & Growth Section */}
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-3 card bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 border border-navy-700/50 p-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-cyber-500/10 rounded-2xl flex items-center justify-center flex-shrink-0 border border-cyber-500/30">
                <Sparkles className="w-6 h-6 text-cyber-400 animate-pulse" />
              </div>
              <div className="text-left">
                <h4 className="text-steel-100 font-bold text-base sm:text-lg">Learning Journey</h4>
                <p className="text-xs text-steel-400">Actively acquiring advanced technical competencies</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {[
                { tag: 'Full Stack Web Development', detail: 'Advanced React, client-state architectures' },
                { tag: 'Advanced JavaScript', detail: 'Prototypes, microtasks, V8 optimization' },
                { tag: 'Spring Boot', detail: 'Spring Security, JPA/Hibernate mappings' }
              ].map((learning, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-navy-900/60 border border-navy-850 hover:border-cyber-500/30 rounded-xl text-left"
                >
                  <div className="text-xs font-bold text-steel-200">{learning.tag}</div>
                  <div className="text-[10px] text-steel-500 font-mono mt-0.5">{learning.detail}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

