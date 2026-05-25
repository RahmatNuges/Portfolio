import { Smartphone, Search, AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Search size={28} />,
      title: 'Calon Pasien Cek Google Dulu',
      desc: 'Sebelum berkunjung, calon pasien akan mencari klinik Anda di Google. Jika klinik Anda tidak muncul atau terlihat tertinggal, mereka akan beralih ke kompetitor.',
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Instagram Aktif, Tapi Informasi Tercecer',
      desc: 'Instagram penting, tapi info layanan, lokasi, dan jadwal dokter sering tercecer. Calon pasien butuh satu tempat yang rapi untuk melihat info lengkap.',
    },
    {
      icon: <AlertTriangle size={28} />,
      title: 'Website Ada Tapi Tidak Menghasilkan',
      desc: 'Sudah punya website tapi sepi booking? Tanpa optimasi SEO lokal, website Anda hanya akan menjadi brosur digital pasif yang tidak mendatangkan pasien baru.',
    },
  ];

  return (
    <section className="problem section" id="masalah">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">KENAPA INI PENTING</p>
          <h2>Klinik Anda Sudah Bagus, Tapi Apakah Tampilan Online-nya Sudah Meyakinkan?</h2>
        </div>

        <div className="problem-grid">
          {problems.map((p, i) => (
            <div key={i} className="problem-card liquid-glass-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="problem-icon">{p.icon}</div>
              <h3 className="problem-title">{p.title}</h3>
              <p className="problem-desc">{p.desc}</p>
            </div>
          ))}
        </div>

        <p className="problem-closing" data-aos="fade-up">
          Banyak klinik sebenarnya sudah punya layanan yang bagus. Masalahnya, tampilan digitalnya belum cukup membantu calon pasien mengambil keputusan.
        </p>
      </div>

      <style>{`
        .problem {
          background: var(--white);
        }
        .problem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 48px;
        }
        .problem-card {
          padding: 40px 32px;
          text-align: center;
        }
        .problem-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: rgba(220, 38, 38, 0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px;
          color: #DC2626;
        }
        .problem-title {
          font-size: 20px;
          margin-bottom: 16px;
        }
        .problem-desc {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
        }
        .problem-closing {
          text-align: center;
          font-size: 17px;
          max-width: 700px;
          margin: 0 auto;
          color: var(--muted);
          font-style: italic;
          line-height: 1.7;
        }

        @media (max-width: 1023px) {
          .problem-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto 48px; }
        }
      `}</style>
    </section>
  );
}
