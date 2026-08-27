import { ArrowRight, Wrench, Settings, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,102,0,0.1) 35px, rgba(255,102,0,0.1) 70px)`
        }} />
      </div>

      {/* Orange Accent Glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 text-orange-400 px-4 py-2 rounded-full text-sm font-medium">
              <ShieldCheck className="w-4 h-4" />
              Certified & Insured Technicians
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
              Auckland's Trusted{' '}
              <span className="text-orange-500">Car Hoist</span>{' '}
              Specialists
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              Professional installation, servicing, and repairs of vehicle hoists across Auckland. 
              Keep your workshop running safely and efficiently with Hoist Tech.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-bold text-base transition-all hover:translate-y-[-2px]"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 border-2 border-white/20 hover:border-orange-500 text-white px-8 py-4 rounded font-bold text-base transition-all"
              >
                Our Service
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl font-bold text-orange-500">15+</div>
                <div className="text-sm text-gray-500">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">500+</div>
                <div className="text-sm text-gray-500">Hoists Installed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-orange-500">24/7</div>
                <div className="text-sm text-gray-500">Emergency Service</div>
              </div>
            </div>
          </div>

          {/* Right Side - Service Cards */}
          <div className="hidden lg:grid grid-cols-1 gap-4">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Settings className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Hoist Installation</h3>
              <p className="text-gray-400 text-sm">Complete installation of 2-post, 4-post, and scissor lifts with full certification.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <Wrench className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Servicing & Repairs</h3>
              <p className="text-gray-400 text-sm">Regular maintenance, safety inspections, and emergency breakdown repairs.</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-orange-500/50 transition-all group">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/20 transition-colors">
                <ShieldCheck className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Safety Certification</h3>
              <p className="text-gray-400 text-sm">Annual safety checks and compliance certification for all hoist types.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
