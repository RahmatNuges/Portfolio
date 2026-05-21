import { Search, FileText, CreditCard, ClipboardList, Code, Eye, Rocket, BarChart3 } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <Search size={24} />,
      title: 'Audit & Konsultasi Awal',
      desc: 'Kami cek kondisi digital klinik Anda: website, Google Maps, Instagram, layanan, dan kompetitor lokal. Gratis, tanpa paksaan.',
    },
    {
      num: '02',
      icon: <FileText size={24} />,
      title: 'Rekomendasi Struktur',
      desc: 'Kami susun halaman yang dibutuhkan berdasarkan kondisi dan kebutuhan klinik Anda.',
    },
    {
      num: '03',
      icon: <CreditCard size={24} />,
      title: 'Proposal & DP',
      desc: 'Setelah scope jelas, kami kirim proposal, timeline, dan invoice DP 50%.',
    },
    {
      num: '04',
      icon: <ClipboardList size={24} />,
      title: 'Brief & Pengumpulan Aset',
      desc: 'Anda mengisi form brief singkat (~10 menit). Urusan copywriting dan kurasi visual dikerjakan tim NAIKIN.',
    },
    {
      num: '05',
      icon: <Code size={24} />,
      title: 'Desain & Development',
      desc: 'Website dibuat mobile-friendly, profesional, dan disiapkan dengan SEO dasar.',
    },
    {
      num: '06',
      icon: <Eye size={24} />,
      title: 'Review & Revisi',
      desc: 'Anda cek hasil website, lalu kami lakukan revisi sesuai scope paket.',
    },
    {
      num: '07',
      icon: <Rocket size={24} />,
      title: 'Pelunasan & Launch',
      desc: 'Setelah disetujui 100%, pelunasan 50% sisa dan website dipublikasikan.',
    },
    {
      num: '08',
      icon: <BarChart3 size={24} />,
      title: 'Maintenance & SEO',
      desc: 'Kami bantu update, monitoring, optimasi konten, dan laporan bulanan.',
    },
  ];

  return (
    <section className="how-it-works section" id="proses">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">PROSES KERJA</p>
          <h2>Proses Kerja Jelas dari Audit sampai Website Launch</h2>
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
