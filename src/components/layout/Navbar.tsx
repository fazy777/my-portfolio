import { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Journey', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy-900/95 backdrop-blur-md border-b border-navy-500 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#home" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyber-500 to-matrix-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyber-500/30 transition-all duration-300">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-lg font-semibold text-steel-200">
              Faizan<span className="text-cyber-500">Ali</span>
            </span>
          </a>

          <div className="hidden sm:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-steel-400 hover:text-cyber-600 hover:bg-navy-600 rounded-lg transition-all duration-200 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden p-2 text-steel-400 hover:text-cyber-600 hover:bg-navy-600 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden bg-navy-800/95 backdrop-blur-md border-t border-navy-500">
          <div className="section-container py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-steel-400 hover:text-cyber-600 hover:bg-navy-600 rounded-lg transition-all duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
