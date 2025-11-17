import React from 'react';
import { Smartphone, Layers, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Smartphone,
      title: 'Landing Page 1 Halaman',
      description: 'Solusi cepat untuk bisnis yang butuh website profesional satu halaman dengan fokus konversi.',
      features: [
        'Desain responsif',
        'Gratis Domain .com (1 tahun)',
        'Hosting dari kami',
        'Dukungan teknis 30 hari',
        'Bebas request desain',
        'SEO standar'
      ],
      price: 'Mulai dari Rp1.000.000 an'
    },
    {
      icon: Layers,
      title: 'Landing Page 5 Halaman + Admin Panel',
      description: 'Landing page multi-section lengkap dengan dashboard admin sederhana untuk kelola konten.',
      features: [
        'Desain responsif',
        'Gratis Domain .com (1 tahun)',
        'Hosting dari kami',
        'Dukungan teknis 30 hari',
        'Bebas request desain',
        'Admin Panel',
        'SEO standar',
        'Integrasi Google Analytics'
      ],
      price: 'Mulai dari Rp1.500.000 an'
    },
    {
      icon: Sparkles,
      title: 'Special Request',
      description: 'Pengembangan website custom seperti toko online, kelas online, manajemen villa, atau kebutuhan unik lainnya.',
      features: [
        'Desain responsif',
        'Gratis Domain .com (1 tahun)',
        'Hosting dari kami',
        'Dukungan teknis 30 hari',
        'Bebas request desain',
        'Admin Panel',
        'SEO standar',
        'Integrasi Google Analytics'
      ],
      price: 'Hubungi kami untuk penawaran khusus'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Layanan Kami
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kami membantu bisnis Anda memiliki website profesional yang siap mendukung pertumbuhan dan menjangkau audiens dengan tepat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-lg font-semibold text-blue-600">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Butuh solusi khusus? Yuk diskusikan kebutuhan spesifik bisnismu bersama kami.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Dapatkan Penawaran
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;