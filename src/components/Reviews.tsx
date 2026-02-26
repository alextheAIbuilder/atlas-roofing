import { Star, Quote } from "lucide-react";

const reviews = [
  { name: "Mike Thompson", location: "Residential Client", text: "Atlas replaced our entire roof after a hailstorm. They handled the insurance claim, showed up on time, and the crew was professional. Our new roof looks incredible.", rating: 5 },
  { name: "Sarah & David Chen", location: "Homeowners", text: "We got three quotes and Atlas was the most thorough. Fair price, great materials, and they cleaned up everything. Highly recommend for anyone needing a new roof.", rating: 5 },
  { name: "Robert Garcia", location: "Property Manager", text: "We use Atlas for all our commercial properties. They maintain 12 buildings for us and their response time for emergencies is unbeatable. True professionals.", rating: 5 },
  { name: "Jennifer Walsh", location: "Residential Client", text: "Found a leak during heavy rain and Atlas had someone out the next morning. Quick fix, reasonable price, and they even checked the rest of the roof at no charge.", rating: 5 },
];

export default function Reviews() {
  return (
    <section id="reviews" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Testimonials</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-4">WHAT CLIENTS SAY</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-brand-light p-8 rounded-sm relative group hover:bg-brand-charcoal transition-colors duration-300">
              <Quote size={32} className="text-brand-red/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} size={18} className="fill-brand-red text-brand-red" />
                ))}
              </div>
              <p className="text-gray-600 group-hover:text-white/70 leading-relaxed mb-6 transition-colors duration-300">
                &ldquo;{r.text}&rdquo;
              </p>
              <div>
                <div className="font-heading font-bold group-hover:text-white transition-colors duration-300">{r.name}</div>
                <div className="text-sm text-gray-400">{r.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
