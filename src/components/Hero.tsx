import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 relative flex items-center px-4 sm:px-6 lg:px-8 pt-20">
      <div className="max-w-6xl mx-auto relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
              ✨ Jasa Pembuatan Website Profesional
            </div>

            {/* Main Headline - Benefit focused */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Dapatkan Lebih Banyak{' '}
              <span className="text-blue-600">Pelanggan</span>{' '}
              dengan Website Profesional
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              85% calon pelanggan mencari bisnis di internet sebelum membeli.
              Tanpa website, bisnis Anda bisa kehilangan banyak peluang setiap harinya.
            </p>

            {/* Trust points */}
            <div className="space-y-3 text-left">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">Desain profesional yang membangun kepercayaan</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">Mudah ditemukan di Google</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">Siap dalam 7-14 hari kerja</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-lg shadow-blue-600/25"
              >
                Konsultasi Gratis
              </button>

              <button
                onClick={() => scrollToSection('portfolio')}
                className="px-8 py-4 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Lihat Hasil Kerja Kami
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Right Column - Real Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/hero-image.png"
                  alt="Pemilik bisnis yang puas dengan website barunya"
                  className="w-full max-w-md object-cover"
                />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">5+ Proyek Selesai</p>
                  <p className="text-xs text-slate-500">Klien puas 100%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;