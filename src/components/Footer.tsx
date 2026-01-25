import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src="LogoFooter.svg" alt="NAIKIN" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-blue-400">NAIKIN</span>
            </div>
            <p className="text-slate-400 leading-relaxed">
              Membantu bisnis membangun kehadiran digital yang profesional melalui website modern dan berkualitas.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigasi</h3>
            <ul className="space-y-2">
              {[
                { label: 'Beranda', id: 'home' },
                { label: 'Tentang', id: 'about' },
                { label: 'Portfolio', id: 'portfolio' },
                { label: 'Layanan', id: 'services' },
                { label: 'Kontak', id: 'contact' },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak</h3>
            <div className="space-y-3">
              <a
                href="mailto:naikin.bisnis@gmail.com"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">naikin.bisnis@gmail.com</span>
              </a>
              <a
                href="tel:+6282342310221"
                className="flex items-center text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">+62 823 42310221</span>
              </a>
              <div className="flex items-center text-slate-400">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0" />
                <span className="text-sm">Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {currentYear} NAIKIN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
