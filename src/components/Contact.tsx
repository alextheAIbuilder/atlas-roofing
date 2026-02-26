import { MapPin, Phone, Mail, Clock } from "lucide-react";

const info = [
  { icon: MapPin, title: "Visit Us", lines: ["1234 Industrial Blvd", "Suite 100, Metro City, TX 75001"] },
  { icon: Phone, title: "Call Us", lines: ["(555) 123-4567", "(555) 123-4568 (Fax)"] },
  { icon: Mail, title: "Email Us", lines: ["info@atlasroofing.com", "estimates@atlasroofing.com"] },
  { icon: Clock, title: "Business Hours", lines: ["Mon–Fri: 7:00 AM – 6:00 PM", "Sat: 8:00 AM – 2:00 PM"] },
];

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-brand-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Get In Touch</span>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mt-3 mb-4">CONTACT US</h2>
          <div className="w-16 h-1 bg-brand-red mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {info.map((item, i) => (
            <div key={i} className="bg-brand-slate p-6 rounded-sm text-center group hover:bg-brand-red transition-colors duration-300">
              <div className="w-14 h-14 bg-brand-red/10 group-hover:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                <item.icon size={24} className="text-brand-red group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-bold text-white text-lg mb-2">{item.title}</h3>
              {item.lines.map((line, j) => (
                <p key={j} className="text-white/50 group-hover:text-white/80 text-sm transition-colors duration-300">{line}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 aspect-[3/1] bg-brand-slate rounded-sm flex items-center justify-center">
          <div className="text-center">
            <MapPin size={48} className="text-brand-red/30 mx-auto mb-3" />
            <p className="text-white/30 font-heading uppercase tracking-wider">Map Integration</p>
            <p className="text-white/20 text-sm mt-1">Google Maps embed goes here</p>
          </div>
        </div>
      </div>
    </section>
  );
}
