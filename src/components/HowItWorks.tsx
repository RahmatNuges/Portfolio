import { MessageSquare, ClipboardList, Wrench, Rocket } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <MessageSquare size={24} />,
      title: 'Konsultasi Gratis',
      desc: 'Ceritakan bisnis kamu dalam 15 menit. Kami langsung kasih tahu apa yang perlu diperbaiki, gratis, tanpa sales pitch.',
    },
    {
      num: '02',
      icon: <ClipboardList size={24} />,
      title: 'Proposal & Strategi',
      desc: 'Kami kirim proposal lengkap: scope pekerjaan, timeline, dan estimasi hasil yang bisa kamu harapkan.',
    },
    {
      num: '03',
      icon: <Wrench size={24} />,
      title: 'Pengerjaan Transparan',
      desc: 'Tim kami bekerja dengan update rutin. Kamu selalu tahu progress-nya, tidak ada yang disembunyikan.',
    },
    {
      num: '04',
      icon: <Rocket size={24} />,
      title: 'Launch & Pantau',
      desc: 'Website live, SEO jalan. Kami terus pantau performa dan laporkan hasilnya setiap bulan.',
    },
  ];

  return (
    <section className="how-it-works section" id="cara-kerja">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">PROSESNYA SEDERHANA</p>
          <h2>Dari Chat Pertama ke Website Live</h2>
        </div>

        <div className="steps-grid">
          {steps.map((s, i) => (
            <div key={i} className="step-item" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="step-num-wrap">
                <span className="step-num-bg">{s.num}</span>
                <div className="step-pill liquid-glass">
                  <span className="step-emoji">{s.icon}</span>
                </div>
              </div>
              {i < steps.length - 1 && <div className="step-connector" />}
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .how-it-works {
          background: var(--white);
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
          color: rgba(53, 158, 255, 0.08);
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
        }
        .step-connector {
          position: absolute;
          top: 40px;
          left: calc(50% + 36px);
          width: calc(100% - 36px);
          border-top: 2px dashed rgba(53, 158, 255, 0.2);
          z-index: 0;
        }
        .step-title {
          margin-bottom: 8px;
          font-size: 18px;
        }
        .step-desc {
          font-size: 14px;
          line-height: 1.6;
          color: var(--muted);
        }

        @media (max-width: 1023px) {
          .steps-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
          .step-connector { display: none; }
        }
        @media (max-width: 767px) {
          .steps-grid { grid-template-columns: 1fr; gap: 36px; }
        }
      `}</style>
    </section>
  );
}
