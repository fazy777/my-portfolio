import { GraduationCap, Award, Target, Code2, Shield, User, Terminal } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'CS & Cybersecurity',
    description: 'Specializing in computer science and cyber threat mitigation systems at UET Lahore.',
  },
  {
    icon: Code2,
    title: 'Full Stack Engineering',
    description: 'Building modern interfaces with HTML5, CSS3, JS, and Tailwind, linked to responsive backends.',
  },
  {
    icon: Award,
    title: 'Java Developer',
    description: 'Expertise in Object-Oriented Programming, relational schemas (MySQL), and robust JDBC pipelines.',
  },
  {
    icon: Target,
    title: 'Secure Design',
    description: 'Integrating offensive tools (Nmap, Wireshark, Kali) with defensive coding practices.',
  },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-navy-900/60 border-t border-b border-navy-800">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-50 mb-4">
            About <span className="text-gradient-cyber">Muhammad Faizan Ali</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-500 to-matrix-500 mx-auto rounded-full mb-4" />
          <p className="text-steel-400 max-w-2xl mx-auto text-sm sm:text-base">
            Bridging the gap between high-performance web development and defensive security operations.
          </p>
        </div>

        {/* Column Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Cyberpunk ID Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm p-6 bg-navy-950/80 border-2 border-navy-700/60 rounded-2xl shadow-xl overflow-hidden group hover:border-cyber-500/40 transition-all duration-300">
              {/* Card scanning animation effect */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-cyber-500 to-matrix-500/80 shadow-[0_0_10px_#22c55e] animate-scanline" />
              
              {/* Background badge decorations */}
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-cyber-500/5 rounded-full blur-xl pointer-events-none" />
              
              {/* ID Header */}
              <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-cyber-500" />
                  <span className="text-xs font-mono text-steel-400">CREDENTIAL_FILE_01</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 bg-cyber-500/10 text-cyber-400 border border-cyber-500/20 rounded">
                  CLEARANCE: SECURE
                </span>
              </div>

              {/* ID Content */}
              <div className="flex flex-col items-center text-center">
                <div className="relative w-28 h-28 mb-6">
                  {/* Outer glowing rings */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-cyber-500/40 animate-spin-slow" />
                  <div className="absolute inset-2 rounded-full border border-double border-navy-700" />
                  <div className="absolute inset-3 bg-gradient-to-br from-navy-800 to-navy-900 rounded-full flex items-center justify-center overflow-hidden">
                    <User className="w-12 h-12 text-steel-400 group-hover:text-cyber-400 transition-colors duration-300" />
                  </div>
                  {/* Cyber badge overlay */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-cyber-600 rounded-full border-4 border-navy-950 flex items-center justify-center shadow-lg">
                    <Shield className="w-4.5 h-4.5 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-steel-100 mb-1 font-mono">FAIZAN_ALI.bin</h3>
                <p className="text-xs text-cyber-500 font-mono tracking-widest uppercase mb-4">
                  SecOps & Full Stack Engineer
                </p>

                {/* Info Fields */}
                <div className="w-full text-left font-mono text-xs space-y-2 border-t border-navy-850 pt-4">
                  <div className="flex justify-between py-1 border-b border-navy-900/50">
                    <span className="text-steel-500">AFFILIATION</span>
                    <span className="text-steel-300">UET Lahore CS</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-navy-900/50">
                    <span className="text-steel-500">ROLE_LEADER</span>
                    <span className="text-steel-300">Section C CR</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-navy-900/50">
                    <span className="text-steel-500">MAIN_STACK</span>
                    <span className="text-steel-300">Java / MySQL / React</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-steel-500">SECURITY_RATING</span>
                    <span className="text-cyber-400 font-bold">COMPLIANT [10/10]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Confident Professional Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <h3 className="text-2xl sm:text-3xl font-bold text-steel-100">
              Developing Secure, High-Performance Software
            </h3>
            
            <p className="text-steel-300 leading-relaxed text-sm sm:text-base">
              As a Computer Science and Cyber Security student at the <strong>University of Engineering and Technology (UET) Lahore</strong> (and serving as the Class Representative for Section C), I stand at the intersection of robust backend development and system defense.
            </p>

            <p className="text-steel-300 leading-relaxed text-sm sm:text-base">
              I am a passionate <strong>Java Developer</strong> and <strong>Full Stack Web Developer</strong>. My focus centers on secure software engineering—ensuring that every line of code I write is optimized for performance, scalable in design, and hardened against vulnerabilities.
            </p>

            <p className="text-steel-300 leading-relaxed text-sm sm:text-base">
              I actively construct applications that incorporate advanced programming concepts, database management systems (SQL/MySQL), and secure RESTful architectures. I enjoy auditing systems, analyzing packets, and engineering software that stands up to modern cyber threats.
            </p>

            <div className="pt-4 flex flex-wrap gap-3">
              <span className="px-3.5 py-1.5 bg-navy-800 border border-navy-700 text-xs sm:text-sm text-steel-300 font-mono rounded-lg">
                #BackendArchitectures
              </span>
              <span className="px-3.5 py-1.5 bg-navy-800 border border-navy-700 text-xs sm:text-sm text-steel-300 font-mono rounded-lg">
                #CyberSecurityStudent
              </span>
              <span className="px-3.5 py-1.5 bg-navy-800 border border-navy-700 text-xs sm:text-sm text-steel-300 font-mono rounded-lg">
                #SecureSoftwareEngineering
              </span>
            </div>
          </div>
        </div>

        {/* Highlights Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="card group hover:scale-[1.03] transition-all duration-300 relative overflow-hidden"
            >
              {/* Card top border glow effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-navy-600 to-transparent group-hover:via-cyber-500 transition-all duration-500" />
              
              <div className="inline-flex items-center justify-center w-12 h-12 bg-navy-800 border border-navy-600 rounded-xl mb-4 group-hover:bg-cyber-500/10 group-hover:border-cyber-500 transition-all duration-300">
                <item.icon className="w-6 h-6 text-steel-300 group-hover:text-cyber-400 transition-colors" />
              </div>
              <h4 className="text-steel-100 font-bold mb-2 text-base sm:text-lg">{item.title}</h4>
              <p className="text-xs sm:text-sm text-steel-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

