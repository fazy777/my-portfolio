import { Award, ExternalLink, ShieldCheck, Building, Calendar } from 'lucide-react';

interface Certificate {
  name: string;
  issuer: string;
  year: string;
  detail: string;
  badgeColor: string;
  credentialUrl: string;
}

const certificatesList: Certificate[] = [
  {
    name: 'Introduction to Cybersecurity',
    issuer: 'Cisco Networking Academy',
    year: '2026',
    detail: 'Demonstrates understanding of core security concepts, threat intelligence, and defensive architectures.',
    badgeColor: 'cyber',
    credentialUrl: 'https://www.credly.com/badges/e302e5a3-8a92-4dbc-8347-3a2f851851e8/public_url'
  },
  {
    name: 'Introduction to Generative Al',
    issuer: 'Google Career Certificates',
    year: '2026',
    detail: 'Valuable concepts in network security auditing, threat detection protocols, and administrative control filters.',
    badgeColor: 'cyber',
    credentialUrl: 'https://www.skills.google/public_profiles/51e867aa-fc94-4d67-ae20-896cff6684f7/badges/25186964'
  },
  {
    name: 'Introduction to Large Language Models',
    issuer: 'Google Career Certificates',
    year: '2026',
    detail: 'Managing security vulnerabilities, risk-mitigation plans, and aligning security frameworks with NIST CSF.',
    badgeColor: 'cyber',
    credentialUrl: 'https://www.skills.google/public_profiles/51e867aa-fc94-4d67-ae20-896cff6684f7/badges/25183730'
  },
  {
    name: 'Social Media Marketing',
    issuer: 'Learning With Earning (LWE)',
    year: '2025',
    detail: 'Covers key digital marketing algorithms, client acquisitions, and analytics dashboards.',
    badgeColor: 'matrix',
    credentialUrl: 'https://www.linkedin.com/in/muhammad-faizan-ali-546538374'
  },
  {
    name: 'Graphic Designing',
    issuer: 'Learning With Earning (LWE)',
    year: '2025',
    detail: 'Focuses on layouts, visual proportions, typography scales, and premium assets workflow.',
    badgeColor: 'matrix',
    credentialUrl: 'https://www.linkedin.com/in/muhammad-faizan-ali-546538374'
  },
  {
    name: 'Fiverr Freelancing & E-Commerce',
    issuer: 'Learning With Earning (LWE)',
    year: '2025',
    detail: 'E-commerce interface strategy, gig rankings optimization, and freelance project management.',
    badgeColor: 'matrix',
    credentialUrl: 'https://www.linkedin.com/in/muhammad-faizan-ali-546538374'
  }
];

export function Certificates() {
  return (
    <section id="certificates" className="section-padding bg-navy-900 border-t border-b border-navy-800">
      <div className="section-container">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-steel-50 mb-4">
            Certifications & <span className="text-gradient-cyber">Credentials</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyber-500 to-matrix-500 mx-auto rounded-full mb-4" />
          <p className="text-steel-400 max-w-2xl mx-auto text-sm sm:text-base">
            Professional achievements validating competencies in security protocols, layout designs, and e-commerce workflows.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certificatesList.map((cert) => (
            <div 
              key={cert.name} 
              className="card relative overflow-hidden bg-navy-950/80 hover:bg-navy-900 border border-navy-800 hover:border-cyber-500/30 transition-all duration-300 p-6 rounded-2xl flex flex-col justify-between group"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-navy-800 to-transparent group-hover:via-cyber-500 transition-all duration-500" />
              
              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 bg-navy-900 border border-navy-800 rounded-xl flex items-center justify-center group-hover:bg-cyber-500/10 group-hover:border-cyber-500 transition-all duration-300">
                    <ShieldCheck className="w-5 h-5 text-steel-400 group-hover:text-cyber-400 transition-colors" />
                  </div>
                  <span className="text-[10px] font-mono text-steel-500 flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-cyber-500" />
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-steel-100 mb-1.5 group-hover:text-cyber-400 transition-colors text-left">
                  {cert.name}
                </h3>

                {/* Issuer */}
                <div className="flex items-center gap-1.5 text-xs text-steel-400 font-medium mb-3">
                  <Building className="w-3.5 h-3.5 text-steel-500" />
                  <span>{cert.issuer}</span>
                </div>

                {/* Detail text */}
                <p className="text-xs sm:text-sm text-steel-500 leading-relaxed mb-6 text-left">
                  {cert.detail}
                </p>
              </div>

              {/* Action Verify */}
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit flex items-center gap-1.5 text-xs font-mono font-bold text-steel-400 hover:text-cyber-400 transition-colors mt-auto pt-4 border-t border-navy-900/60"
              >
                <Award className="w-3.5 h-3.5" />
                <span>Verify Credential</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

