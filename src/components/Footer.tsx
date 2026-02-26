export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/10 px-4 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-red rounded-sm flex items-center justify-center">
            <span className="font-heading font-bold text-white text-sm">A</span>
          </div>
          <span className="font-heading font-bold text-white tracking-wider">ATLAS ROOFING</span>
        </div>
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Atlas Roofing. All rights reserved. Licensed & Insured.
        </p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Sitemap"].map((link) => (
            <a key={link} href="#" className="text-white/30 hover:text-brand-red text-sm transition-colors">{link}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}
