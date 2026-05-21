import { Smartphone, Search, AlertTriangle } from 'lucide-react';

export default function ProblemSection() {
  const problems = [
    {
      icon: <Search size={28} />,
      title: 'Calon Pasien Cek Google Dulu',
      desc: 'Sebelum booking, calon pasien cek Google dulu. Jika klinik Anda tidak muncul atau website-nya terlihat kurang profesional, mereka akan pindah ke klinik lain yang terlihat lebih terpercaya.',
    },
    {
      icon: <Smartphone size={28} />,
      title: 'Instagram Aktif, Tapi Informasi Tercecer',
      desc: 'Instagram memang penting, tapi informasi layanan, dokter, lokasi, dan jadwal sering tercecer. Calon pasien butuh satu tempat yang rapi untuk melihat semua informasi klinik sebelum mengambil keputusan.',
    },
    {
      icon: <AlertTriangle size={28} />,
      title: 'Website Ada Tapi Tidak Menghasilkan',
      desc: 'Sudah punya website tapi tidak pernah ada pasien yang datang dari sana? Website tanpa struktur SEO yang tepat hanya menjadi kartu nama digital yang tidak bekerja untuk bisnis Anda.',
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
          Banyak klinik sudah punya layanan yang bagus, tapi tampilan digitalnya belum cukup meyakinkan calon pasien untuk booking.
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
