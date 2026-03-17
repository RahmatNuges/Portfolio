import { useEffect, useRef, useState } from 'react';
import { Star } from 'lucide-react';

function CountUpNumber({ end, suffix = '' }: { end: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = 0;
          const startTime = performance.now();

          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(start + (end - start) * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return (
    <span ref={ref} className="stat-number">
      {count}{suffix}
    </span>
  );
}

export default function Testimonials() {
  const stats = [
    { value: 75, suffix: '%', label: 'Konsumen cek website sebelum beli' },
    { value: 92, suffix: '%', label: 'Klik Google jatuh ke halaman pertama' },
    { value: 3, suffix: ' detik', label: 'Waktu yang dibutuhkan orang untuk menilai website kamu' },
  ];

  const testimonials = [
    {
      text: '"Sebelum pakai NAIKIN, website saya cuma ada tapi tidak ketemu di Google. Sekarang sudah halaman 1 untuk \'catering Jogja\'. Pesanan online naik signifikan!"',
      name: 'Rina Susanti',
      role: 'Owner, Dapur Rina Catering',
      avatar: 'RS',
    },
    {
      text: '"Tim NAIKIN responsif banget dan penjelasannya mudah dimengerti. Saya yang awam soal SEO jadi paham kenapa strategi mereka works. Highly recommended!"',
      name: 'Dito Prawira',
      role: 'Founder, Konsultan Pajak Muda',
      avatar: 'DP',
    },
    {
      text: '"Website baru dari NAIKIN jauh lebih cepat dan konversinya meningkat. Bounce rate turun drastis. Worth every rupiah."',
      name: 'Sarah Lim',
      role: 'Marketing Manager, PT Andalan Properti',
      avatar: 'SL',
    },
  ];

  return (
    <section className="testimonials section" id="testimoni">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">KATA MEREKA</p>
          <h2>Lebih dari 150 Bisnis Sudah Naik Bersama NAIKIN</h2>
        </div>

        {/* Stats */}
        <div className="testi-stats" data-aos="fade-up">
          {stats.map((s, i) => (
            <div key={i} className="testi-stat-item">
              <div className="testi-stat-number" style={{ fontSize: '48px' }}>
                <CountUpNumber end={s.value} suffix={s.suffix} />
              </div>
              <span className="testi-stat-label">{s.label}</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testi-card liquid-glass-card" data-aos="fade-up" data-aos-delay={i * 100}>
              <span className="testi-quote">"</span>
              <div className="testi-stars" style={{ display: 'flex', gap: '4px' }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} fill="#facc15" color="#facc15" />
                ))}
              </div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testimonials {
          background: linear-gradient(180deg, #F4F7FF 0%, #FFFFFF 100%);
        }
        .testi-stats {
          display: flex;
          justify-content: center;
          gap: 64px;
          margin-bottom: 64px;
        }
        .testi-stat-item {
          text-align: center;
        }
        .testi-stat-number {
          font-family: var(--font-display);
          font-weight: 800;
        }
        .testi-stat-label {
          font-size: 14px;
          color: var(--muted);
          font-weight: 500;
          display: block;
          margin-top: 4px;
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .testi-card {
          padding: 28px !important;
          position: relative;
          z-index: 0;
        }
        .testi-quote {
          position: absolute;
          top: 12px;
          left: 20px;
          font-size: 80px;
          font-family: Georgia, serif;
          color: rgba(53,158,255,0.10);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }
        .testi-stars {
          font-size: 16px;
          margin-bottom: 16px;
          position: relative;
          z-index: 1;
        }
        .testi-text {
          font-size: 15px;
          line-height: 1.7;
          color: var(--text-primary);
          font-style: italic;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }
        .testi-author {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 1;
        }
        .testi-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--accent-soft);
          border: 2px solid rgba(53,158,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 14px;
          color: var(--accent);
          flex-shrink: 0;
        }
        .testi-name {
          font-weight: 600;
          font-size: 15px;
          color: var(--text-primary);
        }
        .testi-role {
          font-size: 13px;
          color: var(--muted);
        }

        @media (max-width: 1023px) {
          .testi-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
          .testi-stats { gap: 40px; }
        }
        @media (max-width: 767px) {
          .testi-stats { flex-direction: column; gap: 24px; }
          .testi-stat-number { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
}