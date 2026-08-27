import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                HOIST<span className="text-orange-500">TECH</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Auckland's leading specialists in car hoist installation, servicing, and repairs. 
              Keeping Kiwi workshops safe and productive.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/30 transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/30 transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-orange-500 hover:border-orange-500/30 transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                'Hoist Installation',
                'Hoist Repairs',
                'Scheduled Servicing',
                'Safety Inspections',
                'Emergency Callouts',
                'Hoist Relocation',
              ].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-500 hover:text-orange-500 text-sm transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-white font-bold mb-6">Service Areas</h3>
            <ul className="space-y-3">
              {[
                'Auckland CBD',
                'North Shore',
                'West Auckland',
                'South Auckland',
                'East Auckland',
                'Manukau',
              ].map((area) => (
                <li key={area}>
                  <span className="text-gray-500 text-sm">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <a href="tel:021322020" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                    021 322-020
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <a href="mailto:info@hoisttech.co.nz" className="text-gray-400 hover:text-orange-500 text-sm transition-colors">
                    info@hoisttech.co.nz
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <div>
                  <span className="text-gray-400 text-sm">
                    Auckland, New Zealand
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm">
              © {currentYear} Hoist Tech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
