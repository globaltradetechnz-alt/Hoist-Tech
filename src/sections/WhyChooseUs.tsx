import { Clock, BadgeCheck, Wrench, Phone, Shield, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: 'Same-Day Service',
    description: 'Emergency breakdown? We offer same-day callouts across Auckland to minimise your workshop downtime.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Experts',
    description: 'All our technicians are fully certified and trained to work on all major hoist brands and models.',
  },
  {
    icon: Wrench,
    title: 'Fully Equipped',
    description: 'Our service vehicles carry extensive spare parts inventory, enabling most repairs on the first visit.',
  },
  {
    icon: Phone,
    title: '24/7 Availability',
    description: 'Hoist emergencies dont wait for business hours. We provide after-hours support when you need it most.',
  },
  {
    icon: Shield,
    title: 'WorkSafe Compliant',
    description: 'All work meets or exceeds WorkSafe New Zealand standards with full documentation and certification.',
  },
  {
    icon: ThumbsUp,
    title: 'Competitive Pricing',
    description: 'Quality service at fair prices. We provide upfront quotes with no hidden fees or surprises.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Why Hoist Tech</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
            The Preferred Choice for Auckland Workshops
          </h2>
          <p className="text-gray-400 text-lg">
            When your livelihood depends on keeping vehicles in the air, you need a hoist partner you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 bg-black/40 border border-white/5 rounded-xl p-6 hover:border-orange-500/20 transition-all"
            >
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                <reason.icon className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
