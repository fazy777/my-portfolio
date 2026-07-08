import { Award, ExternalLink } from 'lucide-react';

const certificatesPlaceholder: { name: string }[] = [];

export function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-navy-900">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-steel-100 mb-4">
            <span className="text-cyber-500">Certificates</span> & Achievements
          </h2>
          <p className="text-steel-400 max-w-2xl mx-auto">
            Professional certifications and achievements in cybersecurity and development
          </p>
        </div>

        {certificatesPlaceholder.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificatesPlaceholder.map((cert) => (
              <div key={cert.name} className="card group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-cyber-200 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-cyber-300 transition-colors">
                    <Award className="w-6 h-6 text-cyber-700" />
                  </div>
                  <div>
                    <h3 className="text-steel-100 font-semibold mb-1">{cert.name}</h3>
                    <p className="text-sm text-steel-400">View credential for details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="card max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-cyber-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-cyber-700" />
            </div>
            <h3 className="text-xl font-semibold text-steel-100 mb-2">
              Certificates Coming Soon
            </h3>
            <p className="text-steel-400 mb-4">
              Currently working on obtaining professional certifications in cybersecurity.
              Check back soon for updates!
            </p>
            <a
              href="https://www.linkedin.com/in/muhammad-faizan-ali-546538374"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex"
            >
              <ExternalLink className="w-4 h-4" />
              View LinkedIn Profile
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
