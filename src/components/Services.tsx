import { Home, Building2, CloudRain, Wrench, Sun, ShieldCheck } from "lucide-react";

const services = [
  { icon: Home, title: "Residential Roofing", desc: "Complete roof installations and replacements for homes of all sizes. Premium shingles, metal, and tile options." },
  { icon: Building2, title: "Commercial Roofing", desc: "Flat roofs, TPO, EPDM, and built-up systems for businesses, warehouses, and industrial properties." },
  { icon: CloudRain, title: "Storm Damage Repair", desc: "Fast response to hail, wind, and storm damage. We work directly with your insurance company." },
  { icon: Wrench, title: "Roof Repairs", desc: "Leak detection, flashing repair, ventilation fixes, and preventive maintenance to extend your roof's life." },
  { icon: Sun, title: "Skylight Installation", desc: "Brighten your space with professional skylight installation, replacement, and weatherproofing." },
  { icon: ShieldCheck, title: "Roof Inspections", desc: "Comprehensive inspections with detailed reports. Perfect for home buyers, sellers, and annual checkups." },
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">What We Do</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">OUR SERVICES</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto" />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-0">
          {services.map((s, i) => (
            <div
              key={i}
              className="group p-8 border border-gray-100 hover:bg-brand-charcoal hover:border-brand-charcoal transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 bg-brand-red/10 group-hover:bg-brand-red rounded-sm flex items-center justify-center mb-5 transition-colors duration-300">
                <s.icon size={28} className="text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-white transition-colors duration-300">
                {s.title}
              </h3>
              <p className="text-gray-500 group-hover:text-white/60 leading-relaxed transition-colors duration-300">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
