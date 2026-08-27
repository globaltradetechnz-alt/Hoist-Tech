import { CheckCircle2, Users, Award, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">About Hoist Tech</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Auckland's Leading Vehicle Hoist Specialists
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Hoist Tech has been serving Auckland's automotive industry for over 15 years. 
              We specialise exclusively in vehicle hoists, giving us unmatched expertise in 
              installation, maintenance, and repairs.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our team of certified technicians works with all major hoist brands including 
              BendPak, Challenger, Rotary, and Atlas. Whether you run a small mechanical workshop 
              or a large commercial facility, we have the skills and equipment to keep your 
              hoists operating safely and efficiently.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">WorkSafe NZ Compliant</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Fully Insured</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Certified Technicians</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm">Guaranteed Workmanship</span>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-500 mt-1">Hoists Installed</div>
            </div>
            <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 text-center">
              <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">15+</div>
              <div className="text-sm text-gray-500 mt-1">Years Experience</div>
            </div>
            <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">All</div>
              <div className="text-sm text-gray-500 mt-1">Auckland Areas</div>
            </div>
            <div className="bg-neutral-900 border border-white/5 rounded-xl p-6 text-center">
              <CheckCircle2 className="w-8 h-8 text-orange-500 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-500 mt-1">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
