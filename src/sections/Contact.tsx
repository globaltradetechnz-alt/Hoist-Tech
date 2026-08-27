import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    alert('Thank you for your enquiry! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
            Request a Free Quote Today
          </h2>
          <p className="text-gray-400 text-lg">
            Ready to install a new hoist or need repairs? Contact us for a free, no-obligation quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a href="tel:021322020" className="text-orange-500 hover:text-orange-400 text-lg font-bold">
                    021 322-020
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Mobile — call or text anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:info@hoisttech.co.nz" className="text-orange-500 hover:text-orange-400">
                    info@hoisttech.co.nz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-400">
                    Auckland, New Zealand
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-400">
                    Monday – Friday: 7:00 AM – 5:30 PM<br />
                    Saturday: 8:00 AM – 12:00 PM<br />
                    Emergency callouts available 24/7
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-black/50 border border-white/5 rounded-xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors"
                    placeholder="021 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">Service Required</label>
                  <select
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-orange-500 transition-colors"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="" className="bg-neutral-900">Select a service</option>
                    <option value="installation" className="bg-neutral-900">Hoist Installation</option>
                    <option value="repair" className="bg-neutral-900">Hoist Repair</option>
                    <option value="servicing" className="bg-neutral-900">Scheduled Servicing</option>
                    <option value="inspection" className="bg-neutral-900">Safety Inspection</option>
                    <option value="emergency" className="bg-neutral-900">Emergency Callout</option>
                    <option value="relocation" className="bg-neutral-900">Hoist Relocation</option>
                    <option value="other" className="bg-neutral-900">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-white text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                  placeholder="Tell us about your hoist requirements..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-bold text-base transition-all hover:translate-y-[-2px]"
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
