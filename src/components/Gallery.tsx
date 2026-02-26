const projects = [
  { title: "Modern Shingle Roof", cat: "Residential", color: "from-brand-red/80" },
  { title: "Commercial Flat Roof", cat: "Commercial", color: "from-brand-charcoal/80" },
  { title: "Cedar Shake Restoration", cat: "Restoration", color: "from-brand-darkred/80" },
  { title: "Metal Roof Installation", cat: "Residential", color: "from-brand-slate/80" },
  { title: "Storm Damage Repair", cat: "Emergency", color: "from-brand-red/80" },
  { title: "Skylight & Ventilation", cat: "Specialty", color: "from-brand-charcoal/80" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Our Work</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">PROJECT GALLERY</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div key={i} className="group relative aspect-[4/3] bg-brand-gray rounded-sm overflow-hidden cursor-pointer">
              {/* Placeholder pattern */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)`,
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 border-2 border-white/20 rounded-full flex items-center justify-center">
                  <span className="font-heading text-white/30 text-2xl font-bold">{i + 1}</span>
                </div>
              </div>

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${p.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6`}>
                <div>
                  <span className="text-white/80 text-xs uppercase tracking-wider">{p.cat}</span>
                  <h3 className="font-heading font-bold text-white text-xl">{p.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
