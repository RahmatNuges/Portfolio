import { Search, Palette, Rocket, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Search size={24} />,
      title: 'Audit & Konsultasi',
      desc: 'Kami analisis kondisi digital klinik, susun struktur halaman, dan kirim proposal. Semua tuntas dalam 1-2 hari kerja.',
      duration: '1-2 hari',
    },
    {
      num: '02',
      icon: <Palette size={24} />,
      title: 'Desain & Development',
      desc: 'Anda isi brief singkat (~10 menit), sisanya kami kerjakan: copywriting, desain, dan development website.',
      duration: '5-7 hari',
    },
    {
      num: '03',
      icon: <Rocket size={24} />,
      title: 'Review & Launch',
      desc: 'Anda review hasil, kami revisi, lalu website langsung live dan siap terima pasien baru.',
      duration: '1-2 hari',
    },
    {
      num: '04',
      icon: <BarChart3 size={24} />,
      title: 'SEO & Monitoring',
      desc: 'Website aktif dioptimasi: update konten, monitoring performa, dan laporan bulanan.',
      duration: 'Ongoing',
    },
  ];

  return (
    <section className="how-it-works section" id="proses">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">PROSES KERJA</p>
          <h2>Website Klinik Anda Live dalam 7-10 Hari</h2>
          <p className="section-subtitle" style={{ color: 'var(--muted)', fontSize: '17px', maxWidth: '600px', margin: '12px auto 0' }}>
            Cukup 4 langkah. Tanpa ribet, tanpa mengganggu operasional klinik.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="step-item" data-aos="fade-up" data-aos-delay={i * 60}>
              <div className="step-num-wrap">
                <span className="step-num-bg">{s.num}</span>
                <div className="step-pill liquid-glass">
                  <span className="step-emoji">{s.icon}</span>
                </div>
              </div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
              <span className="step-duration">{s.duration}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works {
          background: linear-gradient(180deg, #FFFFFF 0%, #EFF6FF 100%);
        }
        .steps-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .step-item {
          text-align: center;
          position: relative;
          padding: 0 8px;
        }
        .step-num-wrap {
          position: relative;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 80px;
        }
        .step-num-bg {
          position: absolute;
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 72px;
          color: rgba(37, 99, 235, 0.08);
          user-select: none;
          pointer-events: none;
          line-height: 1;
        }
        .step-pill {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
        }
        .step-emoji {
          font-size: 24px;
          color: var(--accent);
        }
        .step-title {
          margin-bottom: 8px;
          font-size: 17px;
        }
        .step-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--muted);
        }
        .step-duration {
          display: inline-block;
          margin-top: 12px;
          padding: 4px 14px;
          font-size: 12px;
          font-weight: 700;
          color: var(--accent);
          background: rgba(37, 99, 235, 0.08);
          border-radius: 100px;
          letter-spacing: 0.5px;
        }

        @media (max-width: 1023px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
        @media (max-width: 767px) {
          .steps-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>
    </section>
  );
}
