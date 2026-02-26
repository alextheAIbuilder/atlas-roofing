"use client";
import { Send } from "lucide-react";

export default function FreeEstimate() {
  return (
    <section id="estimate" className="section-padding bg-brand-charcoal relative overflow-hidden">
      {/* Red accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/5 skew-x-[-12deg] translate-x-20" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">No Obligation</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mt-3 mb-6">
              GET YOUR <span className="text-brand-red">FREE</span> ESTIMATE
            </h2>
            <p className="text-white/50 text-lg leading-relaxed mb-8">
              Fill out the form and one of our roofing experts will contact you within 24 hours with a detailed, no-obligation estimate for your project.
            </p>
            <div className="space-y-4">
              {["Free on-site inspection included", "Transparent pricing — no hidden fees", "Financing options available", "Written warranty on all work"].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-red rounded-full" />
                  <span className="text-white/70">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-sm p-8 md:p-10">
            <h3 className="font-heading font-bold text-2xl mb-6">Request Your Estimate</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <input type="text" placeholder="First Name *" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red transition-colors" />
                <input type="text" placeholder="Last Name *" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red transition-colors" />
              </div>
              <input type="email" placeholder="Email Address *" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red transition-colors" />
              <input type="tel" placeholder="Phone Number *" className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red transition-colors" />
              <select className="w-full px-4 py-3 border border-gray-200 rounded-sm text-gray-500 focus:outline-none focus:border-brand-red transition-colors">
                <option>Select Service Type</option>
                <option>Residential Roofing</option>
                <option>Commercial Roofing</option>
                <option>Storm Damage Repair</option>
                <option>Roof Repair</option>
                <option>Inspection</option>
                <option>Other</option>
              </select>
              <textarea rows={4} placeholder="Tell us about your project..." className="w-full px-4 py-3 border border-gray-200 rounded-sm focus:outline-none focus:border-brand-red transition-colors resize-none" />
              <button type="submit" className="btn-primary w-full justify-center">
                Submit Request <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
