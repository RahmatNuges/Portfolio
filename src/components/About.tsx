import React from 'react';
import { Shield, Clock, HeadphonesIcon, Sparkles } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Desain Profesional',
      desc: 'Website Anda akan terlihat kredibel dan terpercaya di mata calon pelanggan'
    },
    {
      icon: Clock,
      title: 'Proses Cepat',
      desc: 'Website siap dalam 7-14 hari kerja tanpa ribet'
    },
    {
      icon: HeadphonesIcon,
      title: 'Full Support',
      desc: 'Kami bantu maintenance dan update konten website Anda'
    },
    {
      icon: Sparkles,
      title: 'Hasil Maksimal',
      desc: 'Website yang mudah ditemukan di Google dan menarik pengunjung'
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/team-image.png"
                alt="Tim NAIKIN sedang bekerja"
                className="w-full object-cover"
              />
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white rounded-xl shadow-lg px-6 py-4">
              <p className="text-3xl font-bold">100%</p>
              <p className="text-sm opacity-90">Klien Puas</p>
            </div>
          </div>

          {/* Right Column - Text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Tentang Kami
            </h2>

            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              <strong>NAIKIN</strong> hadir untuk membantu pemilik bisnis seperti Anda
              memiliki website profesional yang meningkatkan kepercayaan pelanggan
              dan mendatangkan lebih banyak penjualan.
            </p>

            <p className="text-slate-600 leading-relaxed mb-8">
              Kami paham bahwa Anda sibuk mengurus bisnis dan tidak punya waktu
              untuk urusan teknis. Karena itu, kami yang mengerjakan semuanya —
              dari desain hingga website online dan siap digunakan.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{benefit.title}</h3>
                    <p className="text-sm text-slate-600">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;