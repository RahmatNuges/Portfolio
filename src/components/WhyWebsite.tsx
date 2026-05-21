import { ShieldCheck, LayoutList, MapPin } from 'lucide-react';

export default function WhyWebsite() {
  const pillars = [
    {
      icon: <ShieldCheck size={32} />,
      title: 'Bangun Trust',
      desc: 'Tampilkan dokter, layanan, foto klinik, testimoni, lokasi, dan cara booking — agar calon pasien lebih mudah percaya sebelum datang.',
    },
    {
      icon: <LayoutList size={32} />,
      title: 'Rapikan Informasi',
      desc: 'Semua informasi penting tersusun jelas dalam satu tempat: layanan, dokter, jam operasional, lokasi, dan WhatsApp booking.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Siap SEO Lokal',
      desc: 'Struktur halaman dibuat agar website klinik Anda lebih siap muncul di pencarian Google saat calon pasien mencari layanan kesehatan di kota Anda.',
    },
  ];

  return (
    <section className="why-website section" id="kenapa-website">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">LEBIH DARI COMPANY PROFILE</p>
          <h2>Website Klinik Bukan Sekadar Company Profile</h2>
        </div>

        <div className="why-grid">
          {pillars.map((p, i) => (
            <div key={i} className="why-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="why-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-website {
          background: linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%);
        }
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        .why-card {
          text-align: center;
          padding: 48px 32px;
          border-radius: var(--radius-card);
          background: var(--white);
          border: 1px solid var(--border);
          transition: all 0.3s ease;
        }
        .why-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(37, 99, 235, 0.1);
          border-color: rgba(37, 99, 235, 0.2);
        }
        .why-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.1), rgba(96, 165, 250, 0.08));
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: var(--accent);
        }
        .why-card h3 {
          margin-bottom: 16px;
          font-size: 22px;
        }
        .why-card p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
        }

        @media (max-width: 1023px) {
          .why-grid { grid-template-columns: 1fr; max-width: 440px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
