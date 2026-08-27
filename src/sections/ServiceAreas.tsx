import { MapPin, Navigation } from 'lucide-react';

const areas = [
  'Auckland CBD',
  'North Shore',
  'West Auckland',
  'South Auckland',
  'East Auckland',
  'Manukau',
  'Waitakere',
  'Rodney',
  'Papakura',
  'Franklin',
  'Henderson',
  'New Lynn',
  'Mt Wellington',
  'Penrose',
  'Onehunga',
  'Panmure',
  'Ellerslie',
  'Mt Eden',
  'Grey Lynn',
  'Ponsonby',
];

export default function ServiceAreas() {
  return (
    <section id="areas" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Service Coverage</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
              Car Hoist Services Across All Auckland Areas
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Hoist Tech provides comprehensive vehicle hoist installation, servicing, and repairs 
              throughout the entire Auckland region. From the CBD to the outskirts, our mobile 
              service teams are never far away.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Whether you operate a mechanical workshop in Penrose, an auto electrician in Henderson, 
              or a tyre shop on the North Shore, we provide prompt, professional hoist services 
              tailored to your needs.
            </p>
            <div className="flex items-center gap-3 bg-orange-500/10 border border-orange-500/20 rounded-lg p-4">
              <Navigation className="w-5 h-5 text-orange-500" />
              <span className="text-gray-300 text-sm">
                Mobile service covering all Auckland suburbs with rapid response times
              </span>
            </div>
          </div>

          <div className="bg-neutral-900 border border-white/5 rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-6 h-6 text-orange-500" />
              <h3 className="text-white font-bold text-xl">Areas We Service</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {areas.map((area) => (
                <div
                  key={area}
                  className="flex items-center gap-2 text-gray-400 text-sm py-1"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full shrink-0" />
                  {area}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
