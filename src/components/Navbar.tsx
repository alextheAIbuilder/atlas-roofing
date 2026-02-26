"use client";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-charcoal/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-red rounded-sm flex items-center justify-center">
            <span className="font-heading font-bold text-white text-xl">A</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-white text-xl tracking-wider block">ATLAS</span>
            <span className="text-xs text-brand-red uppercase tracking-[0.3em]">Roofing</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-white/80 hover:text-brand-red font-medium text-sm uppercase tracking-wider transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:+15551234567" className="flex items-center gap-2 text-white font-bold">
            <Phone size={18} className="text-brand-red" />
            (555) 123-4567
          </a>
          <a href="#estimate" className="bg-brand-red text-white font-bold px-5 py-2.5 rounded-sm text-sm uppercase tracking-wider hover:bg-brand-darkred transition-colors">
            Free Estimate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-brand-charcoal border-t border-white/10 px-4 pb-6 pt-2">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-white/80 hover:text-brand-red font-medium uppercase tracking-wider border-b border-white/5">
              {l.label}
            </a>
          ))}
          <a href="#estimate" onClick={() => setOpen(false)} className="btn-primary mt-4 w-full justify-center text-base">
            Free Estimate
          </a>
        </div>
      )}
    </nav>
  );
}
