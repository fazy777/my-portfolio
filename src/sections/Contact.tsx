import { useState } from 'react';
import { 
  Send, 
  Mail, 
  Linkedin, 
  Github, 
  MapPin, 
  CheckCircle, 
  AlertCircle, 
  Copy, 
  Check, 
  FileText 
} from 'lucide-react';
import { supabase } from '../lib/supabase';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('2025cys157@student.uet.edu.pk');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const { error } = await supabase.from('contact_messages').insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding bg-navy-950">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-50 mb-4">
            Get In <span className="text-gradient-cyber">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-500 to-matrix-500 mx-auto rounded-full mb-4" />
          <p className="text-steel-400 max-w-2xl mx-auto text-sm sm:text-base">
            Interested in collaboration, internship opportunities, or just want to discuss cybersecurity and software architecture? Drop a message below!
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 card bg-navy-900/35 border border-navy-800 p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono font-bold text-steel-400 mb-2 uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="input-field font-sans"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono font-bold text-steel-400 mb-2 uppercase tracking-wider"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="input-field font-sans"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono font-bold text-steel-400 mb-2 uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="input-field resize-none font-sans"
                  placeholder="Your message details..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {status === 'submitting' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    <span>Send Secure Message</span>
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-3 p-4 bg-cyber-500/10 border border-cyber-500/30 rounded-xl text-cyber-400 text-sm">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Message sent successfully! I will respond to your inquiry shortly.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Submission offline. Please connect via social links or directly email me.</span>
                </div>
              )}
            </form>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="card bg-navy-900/35 border border-navy-800 p-6">
              <h3 className="text-lg font-bold text-steel-100 mb-6 font-mono border-b border-navy-900 pb-3">
                Contact Information
              </h3>
              <div className="space-y-4">
                
                {/* Location */}
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-navy-800 border border-navy-700 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-cyber-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-steel-500 text-xs font-mono">LOCATION</p>
                    <p className="text-steel-200 text-sm sm:text-base font-medium">Lahore, Pakistan</p>
                  </div>
                </div>

                {/* Email (with Copy utility) */}
                <div className="flex items-center justify-between gap-4 p-3 bg-navy-950/45 border border-navy-850 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-navy-850 border border-navy-850 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-cyber-400" />
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-steel-500 text-xs font-mono">EMAIL</p>
                      <p className="text-steel-200 text-xs sm:text-sm font-mono truncate select-all">
                        2025cys157@student.uet.edu.pk
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 hover:bg-navy-800 rounded-xl border border-transparent hover:border-navy-700 text-steel-400 hover:text-cyber-400 transition-all flex-shrink-0"
                    title="Copy Email to Clipboard"
                  >
                    {copied ? (
                      <Check className="w-4 h-4 text-cyber-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

              </div>
            </div>

            {/* Social Links & Resume Card */}
            <div className="card bg-navy-900/35 border border-navy-800 p-6">
              <h3 className="text-lg font-bold text-steel-100 mb-6 font-mono border-b border-navy-900 pb-3">
                Connect & Documents
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
                <a
                  href="https://github.com/fazy777"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-4 py-3 bg-navy-950 hover:bg-navy-900 border border-navy-800 hover:border-cyber-500 rounded-xl text-steel-300 hover:text-cyber-400 transition-all font-mono text-xs sm:text-sm"
                >
                  <Github className="w-4.5 h-4.5" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/muhammad-faizan-ali-546538374"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-4 py-3 bg-navy-950 hover:bg-navy-900 border border-navy-800 hover:border-cyber-500 rounded-xl text-steel-300 hover:text-cyber-400 transition-all font-mono text-xs sm:text-sm"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="./resume.pdf"
                  download="Faizan_Ali_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 px-4 py-3 bg-cyber-500/10 hover:bg-cyber-500/20 border border-cyber-500/20 hover:border-cyber-500 rounded-xl text-cyber-400 hover:text-cyber-300 transition-all font-mono text-xs sm:text-sm"
                >
                  <FileText className="w-4.5 h-4.5" />
                  <span>Download Resume</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-navy-900">
        <div className="section-container">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-steel-600 text-xs sm:text-sm font-mono text-left">
              Muhammad Faizan Ali • UET Lahore CS
            </p>
            <p className="text-steel-600 text-xs sm:text-sm font-mono text-right">
              © {new Date().getFullYear()} • Securely Engineered.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}

