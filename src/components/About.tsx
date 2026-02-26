import { Shield, Users, Award, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Award, value: "25+", label: "Years in Business" },
  { icon: Users, value: "50+", label: "Expert Crew Members" },
  { icon: Shield, value: "100%", label: "Licensed & Insured" },
  { icon: ThumbsUp, value: "4.9★", label: "Average Rating" },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-brand-light">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/3] bg-brand-charcoal rounded-sm overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-heading text-brand-red text-3xl font-bold">A</span>
                  </div>
                  <p className="text-white/30 font-heading uppercase tracking-wider">Atlas Roofing Team</p>
                </div>
              </div>
            </div>
            {/* Accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-red/20 rounded-sm -z-10" />
          </div>

          {/* Content */}
          <div>
            <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">About Us</span>
            <h2 className="font-heading font-bold text-4xl md:text-5xl mt-3 mb-6">
              BUILT ON TRUST.<br />ROOFED WITH PRIDE.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Founded in 1999, Atlas Roofing has grown from a small family operation to one of the region&apos;s most trusted roofing contractors. Our commitment to quality materials, skilled craftsmanship, and honest pricing has earned us thousands of satisfied customers.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Every member of our crew is trained, certified, and passionate about what they do. We treat every roof like it&apos;s our own — because your home deserves nothing less than the best.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white p-5 rounded-sm text-center">
                  <s.icon size={24} className="text-brand-red mx-auto mb-2" />
                  <div className="font-heading font-bold text-2xl">{s.value}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
