import { Monitor, Search, CheckCircle, ClipboardCheck, AlertTriangle, MapPin, MessageSquare } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Audit Digital Klinik',
      desc: 'Untuk klinik yang ingin tahu bagian mana dari website, Google Maps, Instagram, dan alur booking Anda yang paling perlu dibenahi dulu.',
      features: [
        'Cek kesiapan alur booking WhatsApp',
        'Evaluasi halaman layanan & profil dokter',
        'Audit visibilitas Google Maps & SEO lokal',
        'Analisis tampilan & kenyamanan mobile',
        'Rekomendasi prioritas perbaikan (konkret)',
      ],
      ctaText: 'Minta Audit Klinik',
      ctaLink: '#audit',
      btnClass: 'btn-primary',
    },
    {
      title: 'Pondasi Digital Klinik 30 Hari',
      desc: 'Untuk klinik yang ingin punya website yang lebih rapi, lebih meyakinkan, dan lebih siap mengarahkan inquiry calon pasien.',
      features: [
        'Desain eksklusif bertema medis profesional',
        'Mobile-friendly & loading cepat (< 2 detik)',
        'Navigasi ramah untuk semua usia',
        'Tombol WhatsApp booking terintegrasi',
        'Halaman per-layanan yang informatif',
      ],
      ctaText: 'Minta Audit Klinik',
      ctaLink: '#audit',
      btnClass: 'btn-primary',
    },
    {
      title: 'SEO & Conversion Care',
      desc: 'Untuk klinik yang ingin website-nya terus dioptimasi, terawat, dan bertumbuh di Google pencarian lokal setelah launching.',
      features: [
        'Optimasi kata kunci lokal kota klinik Anda',
        'Konten edukasi medis bulanan (SEO-optimized)',
        'Monitoring performa & keamanan website',
        'Laporan bulanan transparan & mudah dipahami',
        'Perbaikan teknis & update berkala',
      ],
      ctaText: 'Tanya Tentang Care Plan',
      ctaLink: 'https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20ingin%20tanya%20tentang%20SEO%20bulanan',
      btnClass: 'btn-ghost',
    },
  ];

  return (
    <section className="services section" id="layanan">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">LAYANAN KAMI</p>
          <h2 className="title-large">Layanan NAIKIN untuk Klinik</h2>
        </div>

        <div className="services-list">
          {/* Service 1: Audit */}
          <div className="service-row audit-row" data-aos="fade-up">
            <div className="service-visual">
              <div className="audit-dashboard-mockup">
                {/* Scanner header */}
                <div className="mockup-header">
                  <div className="mockup-dots">
                    <span className="dot-red"></span>
                    <span className="dot-yellow"></span>
                    <span className="dot-green"></span>
                  </div>
                  <div className="mockup-title">NAIKIN Audit Scanner</div>
                  <div className="scanner-status">
                    <span className="pulse-dot"></span> Live Scan
                  </div>
                </div>

                {/* Main panel */}
                <div className="mockup-body">
                  {/* Left: Score Circle */}
                  <div className="score-container">
                    <div className="radial-score">
                      <svg viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#F59E0B" />
                            <stop offset="100%" stopColor="#EF4444" />
                          </linearGradient>
                        </defs>
                        <circle className="circle-bg" cx="50" cy="50" r="40" />
                        <circle className="circle-progress" cx="50" cy="50" r="40" stroke="url(#scoreGradient)" />
                      </svg>
                      <div className="score-text">
                        <span className="score-num">68</span>
                        <span className="score-lbl">Score</span>
                      </div>
                    </div>
                    <div className="score-status-badge">Need Action</div>
                  </div>

                  {/* Right: Detailed checklist */}
                  <div className="metrics-container">
                    <div className="metric-row">
                      <div className="metric-info">
                        <span className="metric-name">Mobile Speed</span>
                        <span className="metric-value text-red">Slow (4.2s)</span>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-fill bg-red" style={{ width: '45%' }}></div>
                      </div>
                    </div>

                    <div className="metric-row">
                      <div className="metric-info">
                        <span className="metric-name">Google Maps Rank</span>
                        <span className="metric-value text-yellow">Not in Top 3</span>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-fill bg-yellow" style={{ width: '60%' }}></div>
                      </div>
                    </div>

                    <div className="metric-row">
                      <div className="metric-info">
                        <span className="metric-name">Trust Signals</span>
                        <span className="metric-value text-red">No Doctor Profile</span>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-fill bg-red" style={{ width: '30%' }}></div>
                      </div>
                    </div>

                    <div className="metric-row">
                      <div className="metric-info">
                        <span className="metric-name">WhatsApp Booking</span>
                        <span className="metric-value text-green">Connected</span>
                      </div>
                      <div className="progress-bar">
                        <div className="bar-fill bg-green" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating scan result card */}
                <div className="floating-scan-tag">
                  <div className="tag-header">
                    <strong>Rekomendasi</strong>
                  </div>
                  <p>Benahi alur trust & booking terlebih dahulu.</p>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-header-wrap">
                <h3 className="service-title-large">{services[0].title}</h3>
              </div>
              <p className="service-desc-large">{services[0].desc}</p>
              <ul className="service-features-large">
                {services[0].features.map((f, j) => (
                  <li key={j}>
                    <CheckCircle size={22} className="feature-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={services[0].ctaLink} className={`${services[0].btnClass} service-cta`}>
                {services[0].ctaText}
              </a>
            </div>
          </div>

          {/* Service 2: Website */}
          <div className="service-row website-row reversed" data-aos="fade-up">
            <div className="service-visual">
              <div className="mockup-container">
                <img
                  src="/website-mockup.webp"
                  alt="Website Klinik Premium oleh NAIKIN"
                  className="mockup-img"
                  loading="lazy"
                  srcSet="/website-mockup.webp 700w"
                  sizes="(max-width: 767px) calc(100vw - 32px), 50vw"
                />
                <div className="floating-badge badge-1">Mobile Ready</div>
                <div className="floating-badge badge-2">Fast Load</div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-header-wrap">
                <h3 className="service-title-large">{services[1].title}</h3>
              </div>
              <p className="service-desc-large">{services[1].desc}</p>
              <ul className="service-features-large">
                {services[1].features.map((f, j) => (
                  <li key={j}>
                    <CheckCircle size={22} className="feature-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={services[1].ctaLink} className={`${services[1].btnClass} service-cta`}>
                {services[1].ctaText}
              </a>
            </div>
          </div>

          {/* Service 3: SEO */}
          <div className="service-row seo-row" data-aos="fade-up">
            <div className="service-visual">
              <div className="google-illustration">
                <div className="search-bar-ui">
                  <div className="search-dot" style={{ background: '#4285F4' }}></div>
                  <div className="search-text-ui">klinik gigi terdekat di [kota anda]</div>
                  <Search size={16} color="#9aa0a6" />
                </div>
                <div className="search-results-ui">
                  <div className="result-item highlighted">
                    <div className="res-meta">https://klinik-anda.id</div>
                    <div className="res-title">Klinik Gigi Terbaik & Modern - Klinik Anda</div>
                    <div className="res-desc">Layanan perawatan gigi profesional dengan dokter spesialis berpengalaman. Booking sekarang via WhatsApp...</div>
                    <div className="pop-indicator">#1</div>
                  </div>
                  <div className="result-item dimmed">
                    <div className="res-meta">https://kompetitorgigi.com</div>
                    <div className="res-title">Praktek Dokter Gigi - Kompetitor A</div>
                    <div className="res-desc">Kami melayani pembersihan karang gigi dan tambal gigi dengan harga terjangkau...</div>
                  </div>
                  <div className="result-item dimmed">
                    <div className="res-meta">https://kliniklain.id</div>
                    <div className="res-title">Klinik Gigi B - Perawatan Estetik</div>
                    <div className="res-desc">Temukan berbagai promo menarik untuk pemasangan behel dan perawatan gigi...</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="service-content">
              <div className="service-header-wrap">
                <h3 className="service-title-large">{services[2].title}</h3>
              </div>
              <p className="service-desc-large">{services[2].desc}</p>
              <ul className="service-features-large">
                {services[2].features.map((f, j) => (
                  <li key={j}>
                    <CheckCircle size={22} className="feature-check" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a href={services[2].ctaLink} className={`${services[2].btnClass} service-cta`} target="_blank" rel="noopener noreferrer">
                {services[2].ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .services {
          background: linear-gradient(135deg, #EFF6FF 0%, #E0F2FE 100%);
          padding: 120px 0;
          overflow: hidden;
        }

        .title-large {
          font-size: 42px;
          line-height: 1.2;
          margin-bottom: 80px;
        }

        .services-list {
          display: flex;
          flex-direction: column;
          gap: 100px;
        }

        .service-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: center;
        }

        .service-row.reversed {
          direction: rtl;
        }

        .service-row.reversed .service-content {
          direction: ltr;
        }

        /* Visual: New Audit Dashboard Mockup */
        .audit-dashboard-mockup {
          background: rgba(255, 255, 255, 0.75);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 24px;
          box-shadow: 0 40px 80px rgba(37, 99, 235, 0.08);
          padding: 28px;
          position: relative;
          text-align: left;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          overflow: visible;
        }

        .mockup-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1.5px solid rgba(0, 0, 0, 0.06);
          padding-bottom: 16px;
          margin-bottom: 24px;
        }

        .mockup-dots {
          display: flex;
          gap: 6px;
        }

        .mockup-dots span {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          display: inline-block;
        }

        .dot-red { background: #EF4444; }
        .dot-yellow { background: #F59E0B; }
        .dot-green { background: #10B981; }

        .mockup-title {
          font-size: 11px;
          font-weight: 800;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .scanner-status {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 700;
          color: #EF4444;
          background: rgba(239, 68, 68, 0.08);
          padding: 4px 10px;
          border-radius: 100px;
          border: 1px solid rgba(239, 68, 68, 0.15);
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          background: #EF4444;
          border-radius: 50%;
          display: inline-block;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% { transform: scale(0.9); opacity: 1; }
          50% { transform: scale(1.3); opacity: 0.4; }
          100% { transform: scale(0.9); opacity: 1; }
        }

        .mockup-body {
          display: grid;
          grid-template-columns: 130px 1fr;
          gap: 24px;
          align-items: center;
        }

        .score-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .radial-score {
          position: relative;
          width: 110px;
          height: 110px;
        }

        .radial-score svg {
          transform: rotate(-90deg);
          width: 100%;
          height: 100%;
        }

        .circle-bg {
          fill: none;
          stroke: rgba(0, 0, 0, 0.05);
          stroke-width: 8;
        }

        .circle-progress {
          fill: none;
          stroke-width: 8;
          stroke-dasharray: 251.2;
          stroke-dashoffset: 80.38; /* (100 - 68) / 100 * 251.2 */
          stroke-linecap: round;
          transition: stroke-dashoffset 1s ease-out;
        }

        .score-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          display: flex;
          flex-direction: column;
        }

        .score-num {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1;
        }

        .score-lbl {
          font-size: 10px;
          color: var(--muted);
          font-weight: 600;
          text-transform: uppercase;
          margin-top: 2px;
        }

        .score-status-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 100px;
          border: 1px solid rgba(245, 158, 11, 0.2);
          background: rgba(245, 158, 11, 0.08);
          color: #D97706;
          text-align: center;
        }

        .metrics-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .metric-row {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .metric-info {
          display: flex;
          justify-content: space-between;
          font-size: 13px;
          font-weight: 600;
        }

        .metric-name {
          color: var(--text-primary);
        }

        .metric-value {
          font-size: 12px;
          font-weight: 700;
        }

        .text-red { color: #EF4444; }
        .text-yellow { color: #D97706; }
        .text-green { color: #10B981; }

        .progress-bar {
          width: 100%;
          height: 6px;
          background: rgba(0, 0, 0, 0.05);
          border-radius: 100px;
          overflow: hidden;
        }

        .bar-fill {
          height: 100%;
          border-radius: 100px;
        }

        .bg-red { background: linear-gradient(90deg, #EF4444, #F87171); }
        .bg-yellow { background: linear-gradient(90deg, #F59E0B, #FBBF24); }
        .bg-green { background: linear-gradient(90deg, #10B981, #34D399); }

        /* Floating tag */
        .floating-scan-tag {
          position: absolute;
          bottom: -20px;
          right: -30px;
          background: white;
          border-radius: 16px;
          padding: 12px 18px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
          border: 1px solid rgba(0, 0, 0, 0.05);
          max-width: 200px;
          animation: float-tag 6s ease-in-out infinite;
        }

        .tag-header {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-bottom: 4px;
          font-size: 12px;
          color: var(--text-primary);
        }

        .floating-scan-tag p {
          font-size: 11px;
          color: var(--muted);
          margin: 0;
          line-height: 1.4;
        }

        @keyframes float-tag {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        /* Visual: Mockup */
        .mockup-container {
          position: relative;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
        }

        .mockup-img {
          width: 100%;
          height: auto;
          filter: drop-shadow(0 32px 64px rgba(0,0,0,0.12));
          border-radius: 12px;
        }

        .floating-badge {
          position: absolute;
          background: white;
          padding: 10px 18px;
          border-radius: 100px;
          font-weight: 700;
          font-size: 14px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          color: var(--accent);
          border: 1px solid rgba(53, 158, 255, 0.1);
        }

        .badge-1 { top: 20%; left: -20px; animation: float 3s ease-in-out infinite; }
        .badge-2 { bottom: 20%; right: -20px; animation: float 3s ease-in-out infinite 1.5s; }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        /* Visual: Google Illustration */
        .google-illustration {
          background: white;
          border-radius: 20px;
          padding: 24px;
          box-shadow: 0 32px 64px rgba(0,0,0,0.1);
          border: 1px solid rgba(0,0,0,0.05);
          width: 100%;
          max-width: 520px;
          margin: 0 auto;
          position: relative;
        }

        .search-bar-ui {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 20px;
          border: 1px solid #dfe1e5;
          border-radius: 100px;
          margin-bottom: 24px;
        }

        .search-dot { width: 10px; height: 10px; border-radius: 50%; }
        .search-text-ui { flex: 1; font-size: 13px; color: #202124; font-weight: 500; }

        .search-results-ui {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .result-item {
          text-align: left;
        }

        .res-meta { font-size: 11px; color: #202124; margin-bottom: 2px; opacity: 0.7; }
        .res-title { font-size: 16px; color: #1a0dab; font-weight: 500; margin-bottom: 4px; }
        .res-desc { font-size: 13px; color: #4d5156; line-height: 1.4; }

        .result-item.highlighted {
          background: white;
          padding: 20px;
          border-radius: 16px;
          box-shadow: 0 20px 40px rgba(37, 99, 235, 0.15);
          border: 2.5px solid var(--accent);
          transform: scale(1.08) translateZ(0);
          z-index: 10;
          position: relative;
        }

        .pop-indicator {
          position: absolute;
          top: -10px;
          right: -10px;
          background: var(--accent);
          color: white;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 900;
          font-size: 14px;
          border: 3px solid white;
        }

        .result-item.dimmed {
          opacity: 0.35;
          filter: blur(0.5px);
          padding: 0 20px;
        }

        /* Content */
        .service-content {
          text-align: left;
        }

        .service-header-wrap {
          display: flex;
          align-items: center;
          gap: 20px;
          margin-bottom: 24px;
        }

        .service-title-large {
          font-size: 32px;
          font-weight: 800;
          color: #1a242d;
          line-height: 1.2;
          flex: 1;
        }

        .service-desc-large {
          font-size: 18px;
          color: #4a5568;
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 540px;
        }

        .service-features-large {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 36px;
        }

        .service-features-large li {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          font-size: 18px;
          color: #2d3748;
          font-weight: 600;
        }

        .feature-check {
          color: var(--accent);
          flex-shrink: 0;
          margin-top: 2px;
        }
        
        .service-cta {
          display: inline-flex;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 700;
          border-radius: 50px;
        }

        @media (max-width: 1024px) {
          .service-row { gap: 40px; }
          .title-large { font-size: 36px; }
          .service-title-large { font-size: 28px; }
          .service-desc-large { font-size: 16px; }
          .service-features-large li { font-size: 16px; }
          .badge-1, .badge-2 { display: none; }
        }

        @media (max-width: 767px) {
          .services-list { gap: 60px; }
          .service-row {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .service-row.reversed { direction: ltr; }
          .service-content { text-align: center; padding: 0 10px; display: flex; flex-direction: column; align-items: center; }
          .service-header-wrap { flex-direction: column; gap: 16px; }
          .service-desc-large { margin-left: auto; margin-right: auto; }
          .service-features-large li { text-align: left; }
          .title-large { font-size: 28px; margin-bottom: 40px; }
          .mockup-container, .google-illustration, .audit-illustration { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
