import { Monitor, Search, CheckCircle, ClipboardCheck } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Monitor size={36} />,
      title: 'Website Klinik Premium',
      desc: 'Untuk klinik yang ingin tampil lebih profesional, memiliki informasi layanan yang rapi, dan memudahkan calon pasien untuk booking melalui WhatsApp.',
      features: [
        'Desain eksklusif bertema medis profesional',
        'Mobile-friendly & loading cepat (< 2 detik)',
        'Navigasi ramah untuk semua usia',
        'Tombol WhatsApp booking terintegrasi',
        'Halaman per-layanan yang informatif',
      ],
    },
    {
      icon: <Search size={36} />,
      title: 'SEO & Maintenance Bulanan',
      desc: 'Untuk klinik yang ingin website tetap aktif, terawat, dan terus dioptimasi agar lebih mudah ditemukan calon pasien di pencarian Google lokal.',
      features: [
        'Optimasi kata kunci lokal kota klinik Anda',
        'Konten edukasi medis bulanan (SEO-optimized)',
        'Monitoring performa & keamanan website',
        'Laporan bulanan transparan & mudah dipahami',
        'Perbaikan teknis & update berkala',
      ],
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
          {/* Service 1: Website */}
          <div className="service-row website-row" data-aos="fade-up">
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
            </div>
          </div>

          {/* Service 2: SEO */}
          <div className="service-row seo-row reversed" data-aos="fade-up">
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
            </div>
          </div>
        </div>

        {/* Service 3: Audit */}
        <div className="audit-addon" data-aos="fade-up">
          <div className="addon-inner">
            <ClipboardCheck size={28} className="addon-icon" />
            <div className="addon-text">
              <h3>Audit Digital Klinik</h3>
              <p>Untuk mengetahui apa saja yang perlu diperbaiki dari website, Google Maps, Instagram, dan tampilan digital klinik Anda.</p>
            </div>
            <a href="#audit" className="btn-primary addon-cta">Minta Audit Gratis</a>
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
          margin-bottom: 80px;
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

        /* Audit Addon */
        .audit-addon {
          margin-top: 20px;
        }
        .addon-inner {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 32px 40px;
          background: rgba(255,255,255,0.8);
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,255,255,1);
        }
        .addon-icon {
          color: var(--accent);
          flex-shrink: 0;
        }
        .addon-text {
          flex: 1;
        }
        .addon-text h3 {
          font-size: 20px;
          margin-bottom: 6px;
        }
        .addon-text p {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
        }
        .addon-cta {
          flex-shrink: 0;
          padding: 14px 28px;
          font-size: 14px;
        }

        @media (max-width: 1024px) {
          .service-row { gap: 40px; }
          .title-large { font-size: 36px; }
          .service-title-large { font-size: 28px; }
          .service-desc-large { font-size: 16px; }
          .service-features-large li { font-size: 16px; }
          .badge-1, .badge-2 { display: none; }
          .addon-inner { flex-direction: column; text-align: center; }
        }

        @media (max-width: 767px) {
          .services-list { gap: 60px; }
          .service-row {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 40px;
          }
          .service-row.reversed { direction: ltr; }
          .service-content { text-align: center; padding: 0 10px; }
          .service-header-wrap { flex-direction: column; gap: 16px; }
          .service-desc-large { margin-left: auto; margin-right: auto; }
          .service-features-large li { text-align: left; }
          .title-large { font-size: 28px; margin-bottom: 40px; }
          .mockup-container, .google-illustration { max-width: 100%; }
        }
      `}</style>
    </section>
  );
}
