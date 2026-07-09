import { useState, useEffect } from 'react';
import { ChevronDown, Shield, Code, Terminal, ArrowRight } from 'lucide-react';

const ROLES = [
  'Full Stack Developer',
  'Java Developer',
  'Cyber Security Student',
  'Secure Software Engineer'
];

interface TerminalLine {
  text: string;
  type: 'command' | 'system' | 'success' | 'warn';
}

const TERMINAL_SEQUENCE: TerminalLine[] = [
  { text: 'faizan@uet-lahore:~$ cat profile.json', type: 'command' },
  { text: '{', type: 'system' },
  { text: '  "name": "Muhammad Faizan Ali",', type: 'system' },
  { text: '  "education": "UET Lahore (Computer Science)",', type: 'system' },
  { text: '  "focus": "Secure Web & Backend Development",', type: 'system' },
  { text: '  "active_ports": [80, 443, 3306],', type: 'system' },
  { text: '  "status": "Ready for internships"', type: 'system' },
  { text: '}', type: 'system' },
  { text: 'faizan@uet-lahore:~$ ./run_security_scan.sh', type: 'command' },
  { text: '[!] Loading Wireshark & Nmap modules...', type: 'warn' },
  { text: '[+] Packet capture interface initialized (Npcap listener active)', type: 'success' },
  { text: '[+] Database connection established (MySQL Workbench API ready)', type: 'success' },
  { text: '[+] 0 vulnerabilities found in secure Spring Boot wrapper', type: 'success' },
  { text: 'SYSTEM STATUS: SECURE & COMPILED SUCCESSFUL', type: 'success' },
  { text: 'faizan@uet-lahore:~$ _', type: 'command' }
];

export function Hero() {
  // Typewriter effect state
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Terminal simulator state
  const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);
  const [terminalIndex, setTerminalIndex] = useState(0);

  // Typewriter Effect Logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = ROLES[roleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullText) {
          // Pause at full text
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, typingSpeed]);

  // Terminal Sequence Logic
  useEffect(() => {
    if (terminalIndex < TERMINAL_SEQUENCE.length) {
      const nextLine = TERMINAL_SEQUENCE[terminalIndex];
      // Faster typing for system outputs, slower for commands
      const delay = nextLine.type === 'command' ? 1200 : 400;

      const timer = setTimeout(() => {
        setVisibleLines((prev) => [...prev, nextLine]);
        setTerminalIndex((prev) => prev + 1);
      }, delay);

      return () => clearTimeout(timer);
    } else {
      // Loop the terminal scan after a delay
      const resetTimer = setTimeout(() => {
        setVisibleLines([]);
        setTerminalIndex(0);
      }, 8000);
      return () => clearTimeout(resetTimer);
    }
  }, [terminalIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 bg-navy-950"
    >
      {/* Visual cyber backgrounds */}
      <div className="absolute inset-0 grid-pattern pointer-events-none opacity-20 sm:opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-navy-900/35 to-navy-950 pointer-events-none" />
      
      {/* Floating ambient glow spheres */}
      <div className="absolute top-10 left-10 w-72 h-72 sm:w-96 sm:h-96 bg-cyber-500/5 sm:bg-cyber-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute bottom-10 right-10 w-72 h-72 sm:w-96 sm:h-96 bg-matrix-500/5 sm:bg-matrix-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

      <div className="relative z-10 section-container w-full grid lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Text details */}
        <div className="lg:col-span-7 text-left flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-navy-800/80 border border-navy-500/50 rounded-full mb-6 w-fit animate-float">
            <Shield className="w-4 h-4 text-cyber-500" />
            <span className="text-xs sm:text-sm text-steel-300 font-mono tracking-wider">
              UET Lahore CS Student • Section C CR
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-steel-50 mb-6 leading-tight">
            Building Secure <br />
            <span className="text-gradient-cyber relative inline-block group">
              Digital Solutions
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyber-500 to-matrix-500" />
            </span>
          </h1>

          <div className="h-10 sm:h-12 mb-6">
            <span className="text-xl sm:text-2xl md:text-3xl font-mono text-steel-200">
              I am a{' '}
              <span className="text-cyber-400 font-semibold border-r-2 border-cyber-400 animate-pulse">
                {currentText}
              </span>
            </span>
          </div>

          <p className="text-base sm:text-lg text-steel-400 max-w-xl mb-10 leading-relaxed">
            Passionate about writing clean, secure code and exploring the
            intersection of backend architectures, database modeling, and offensive/defensive cybersecurity systems.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a href="#projects" className="btn-primary justify-center group">
              <Code className="w-5 h-5 transition-transform group-hover:rotate-6" />
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-secondary justify-center group">
              <Shield className="w-5 h-5 transition-transform group-hover:scale-110" />
              <span>Get In Touch</span>
            </a>
          </div>
        </div>

        {/* Right column: Interactive Terminal Graphic */}
        <div className="lg:col-span-5 w-full flex items-center justify-center">
          <div className="relative w-full max-w-lg aspect-[4/3] sm:aspect-[1.4] bg-navy-950/90 border border-navy-500 rounded-xl shadow-2xl overflow-hidden group">
            {/* Terminal header */}
            <div className="flex items-center justify-between px-4 py-3 bg-navy-900 border-b border-navy-500">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="text-xs font-mono text-steel-400 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyber-500" />
                faizan_bash
              </span>
              <div className="w-12" />
            </div>

            {/* Terminal Body */}
            <div className="p-4 font-mono text-xs sm:text-sm overflow-y-auto h-[calc(100%-44px)] flex flex-col justify-end space-y-1.5 leading-relaxed bg-black/40">
              {/* Scanline Effect */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-500/5 to-transparent h-1/2 w-full pointer-events-none animate-scanline" />
              
              <div className="flex-grow overflow-y-auto space-y-1.5 pr-2 scrollbar-thin">
                {visibleLines.map((line, idx) => (
                  <div
                    key={idx}
                    className={`whitespace-pre-wrap ${
                      line.type === 'command'
                        ? 'text-steel-200'
                        : line.type === 'success'
                        ? 'text-cyber-400'
                        : line.type === 'warn'
                        ? 'text-yellow-400'
                        : 'text-steel-400'
                    }`}
                  >
                    {line.text}
                  </div>
                ))}
              </div>
            </div>

            {/* Glowing corner decoration */}
            <div className="absolute top-0 right-0 w-16 h-16 bg-cyber-500/5 rounded-full blur-xl pointer-events-none group-hover:bg-cyber-500/10 transition-all" />
          </div>
        </div>
      </div>

      {/* Bounce scroll down button */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="inline-flex flex-col items-center gap-1.5 text-steel-400 hover:text-cyber-400 transition-colors group"
        >
          <span className="text-[10px] font-mono uppercase tracking-widest text-steel-500 group-hover:text-cyber-500">
            Scroll
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-steel-500 group-hover:text-cyber-400" />
        </a>
      </div>
    </section>
  );
}

