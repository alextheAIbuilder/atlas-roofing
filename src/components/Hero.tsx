import { ArrowRight, Shield, Award, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-brand-charcoal overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.03) 35px, rgba(255,255,255,0.03) 36px)`,
        }} />
      </div>

      {/* Red accent bar */}
      <div className="absolute top-0 left-0 w-2 h-full bg-brand-red" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 lg:px-16 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 rounded-sm px-4 py-2 mb-8">
            <Shield size={16} className="text-brand-red" />
            <span className="text-brand-red text-sm font-bold uppercase tracking-wider">Licensed & Insured</span>
          </div>

          <h1 className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6">
            STRONG ROOFS.<br />
            <span className="text-brand-red">BOLD</span> PROTECTION.
          </h1>

          <p className="text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            From storm damage repair to complete roof replacements, Atlas Roofing delivers unmatched craftsmanship and materials that last decades.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="#estimate" className="btn-primary">
              Get Free Estimate <ArrowRight size={20} />
            </a>
            <a href="#services" className="btn-outline">
              Our Services
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[
              { icon: Award, value: "25+", label: "Years Experience" },
              { icon: Shield, value: "5,000+", label: "Roofs Completed" },
              { icon: Clock, value: "24/7", label: "Emergency Service" },
            ].map((s, i) => (
              <div key={i} className="text-center sm:text-left">
                <s.icon size={24} className="text-brand-red mb-2 mx-auto sm:mx-0" />
                <div className="font-heading font-bold text-2xl md:text-3xl text-white">{s.value}</div>
                <div className="text-white/50 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Red Block */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[500px] bg-brand-red/10 rounded-l-lg" />
      <div className="hidden lg:block absolute right-12 top-1/2 -translate-y-1/2 w-[350px] h-[450px] border-2 border-brand-red/20 rounded-l-lg" />
    </section>
  );
}
