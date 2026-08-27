import { Settings, Wrench, ShieldCheck, ClipboardCheck, Zap, Truck } from 'lucide-react';

const services = [
  {
    icon: Settings,
    title: 'Hoist Installation',
    description:
      'Expert installation of all car hoist types including 2-post, 4-post, scissor lifts, and in-ground hoists. We handle everything from site assessment to final certification, ensuring your hoist is installed to NZ safety standards.',
    features: ['Site assessment & preparation', 'Concrete thickness testing', 'Full electrical connection', 'Compliance certification'],
  },
  {
    icon: Wrench,
    title: 'Hoist Repairs',
    description:
      'Fast and reliable repair services for all makes and models of vehicle hoists. From hydraulic leaks to electrical faults, our technicians diagnose and fix problems to get you back up and running.',
    features: ['Hydraulic system repairs', 'Electrical fault finding', 'Cable & chain replacement', 'Control box repairs'],
  },
  {
    icon: ClipboardCheck,
    title: 'Scheduled Servicing',
    description:
      'Prevent costly breakdowns with our comprehensive maintenance programs. Regular servicing extends the life of your hoist and ensures ongoing safety compliance for your workshop.',
    features: ['6-monthly inspections', 'Lubrication & adjustments', 'Wear part replacement', 'Service documentation'],
  },
  {
    icon: ShieldCheck,
    title: 'Safety Inspections',
    description:
      'Annual safety inspections and compliance certification required by WorkSafe New Zealand. We provide thorough examinations and detailed reports for insurance and regulatory purposes.',
    features: ['WorkSafe compliant reports', 'Load testing', 'Structural inspections', 'Safety interlock testing'],
  },
  {
    icon: Zap,
    title: 'Emergency Callouts',
    description:
      'Hoist broken down? We offer same-day emergency repair services across the Auckland region. Our fully stocked service vehicles mean most repairs are completed on the first visit.',
    features: ['Same-day response', 'Fully stocked vehicles', 'After-hours availability', 'Temporary solutions'],
  },
  {
    icon: Truck,
    title: 'Hoist Relocation',
    description:
      'Moving workshop? We professionally dismantle, transport, and reinstall your vehicle hoists at your new location. Includes full recertification and safety testing after reinstallation.',
    features: ['Safe dismantling', 'Transport coordination', 'Reinstallation & leveling', 'Recertification'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
            Complete Car Hoist Service in Auckland
          </h2>
          <p className="text-gray-400 text-lg">
            From new installations to emergency repairs, Hoist Tech provides comprehensive 
            vehicle hoist solutions for workshops across the Auckland region.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-black/50 border border-white/5 rounded-xl p-8 hover:border-orange-500/30 transition-all hover:bg-black/70"
            >
              <div className="w-14 h-14 bg-orange-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
                <service.icon className="w-7 h-7 text-orange-500" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
