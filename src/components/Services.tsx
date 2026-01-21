import React from 'react';
import { Smartphone, Layers, Sparkles, Check, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Website 1 Halaman',
      subtitle: 'Untuk UMKM & Bisnis Baru',
      description: 'Cocok untuk bisnis yang ingin mulai tampil profesional di internet dengan budget terjangkau.',
      features: [
        'Desain premium & responsif',
        'Gratis domain .com (1 tahun)',
        'Hosting aman dari kami',
        'Mudah ditemukan di Google',
        'Support 30 hari'
      ],
      highlight: false
    },
    {
      icon: Layers,
      title: 'Website Company Profile',
      subtitle: 'Untuk Bisnis Berkembang',
      description: 'Website lengkap dengan beberapa halaman untuk menampilkan semua informasi bisnis Anda.',
      features: [
        'Semua fitur Website 1 Halaman',
        'Hingga 5 halaman',
        'Panel admin untuk edit sendiri',
        'Integrasi WhatsApp',
        'Support 30 hari'
      ],
      highlight: true
    },
    {
      icon: Sparkles,
      title: 'Website Custom',
      subtitle: 'Untuk Kebutuhan Khusus',
      description: 'Solusi khusus seperti toko online, sistem booking, atau website dengan fitur unik lainnya.',
      features: [
        'Semua fitur Company Profile',
        'Fitur sesuai kebutuhan',
        'E-commerce / Booking system',
        'Integrasi dengan tools lain',
        'Support diperpanjang'
      ],
      highlight: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Pilih Paket yang Sesuai
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Apapun kebutuhan bisnis Anda, kami punya solusi website yang tepat.
            Konsultasi dulu, gratis!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 transition-all duration-300 ${service.highlight
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-600/25 scale-105'
                  : 'bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg'
                }`}
            >
              {service.highlight && (
                <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4">
                  Paling Populer
                </div>
              )}

              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.highlight ? 'bg-white/20' : 'bg-blue-100'
                }`}>
                <service.icon className={`w-7 h-7 ${service.highlight ? 'text-white' : 'text-blue-600'}`} />
              </div>

              <h3 className={`text-xl font-bold mb-1 ${service.highlight ? 'text-white' : 'text-slate-900'}`}>
                {service.title}
              </h3>

              <p className={`text-sm mb-4 ${service.highlight ? 'text-blue-100' : 'text-blue-600'}`}>
                {service.subtitle}
              </p>

              <p className={`mb-6 leading-relaxed ${service.highlight ? 'text-blue-100' : 'text-slate-600'}`}>
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${service.highlight ? 'text-blue-200' : 'text-green-500'
                      }`} />
                    <span className={`text-sm ${service.highlight ? 'text-white' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`w-full py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${service.highlight
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
              >
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
