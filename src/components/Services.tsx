import { Monitor, Search, CheckCircle } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Monitor size={36} />,
      title: 'Website yang Menjual, Bukan Sekadar Ada',
      desc: 'Calon pelanggan akan googling nama bisnis kamu sebelum mereka hubungi kamu. Kalau yang mereka temukan tidak meyakinkan, mereka pergi ke kompetitor. Kami pastikan itu tidak terjadi.',
      features: [
        'Desain custom sesuai brand',
        'Buka dalam hitungan detik, pengunjung tidak kabur sebelum lihat produk kamu',
        'Tampil sempurna di HP, tablet, maupun laptop',
        'Tombol WhatsApp langsung di website, calon klien tinggal tap, langsung chat kamu',
        'Revisi sampai kamu senyum, tidak ada biaya tambahan',
      ],
    },
    {
      icon: <Search size={36} />,
      title: 'Muncul di Google Saat Orang Butuh Kamu',
      desc: "Bayangkan ada orang di Jogja yang ketik 'jasa [bisnis kamu] Jogja' di Google. Kami pastikan nama kamu yang muncul, bukan kompetitor kamu.",
      features: [
        'Kami cari tahu kata-kata apa yang diketik calon pelanggan kamu di Google',
        "Website kamu dibuat 'disukai' Google dari dalam dan luar",
        'Reputasi website kamu dibangun sehingga Google makin percaya dan makin sering menampilkan kamu',
        'Setiap bulan kamu lihat sendiri: berapa orang menemukan bisnis kamu lewat Google',
        'Konten yang ditulis bukan asal-asalan, tapi berdasarkan apa yang benar-benar dicari orang',
      ],
    },
  ];

  const addons = [
    'Copywriting halaman website',
    'Setup Google Business Profile',
    'Pemeliharaan & update website',
    'Konsultasi strategi digital',
  ];

  return (
    <section className="services section" id="layanan">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">APA YANG KAMI KERJAKAN</p>
          <h2 className="title-large">Dua Senjata Utama untuk Bisnis Kamu Online</h2>
        </div>

        <div className="services-list">
          {/* Service 1: Website */}
          <div className="service-row website-row" data-aos="fade-up">
            <div className="service-visual">
              <div className="mockup-container">
                <img
                  src="/website-mockup.webp"
                  alt="Website Mockup"
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
                  <div className="search-text-ui">klinik gigi jogja terdekat</div>
                  <Search size={16} color="#9aa0a6" />
                </div>
                <div className="search-results-ui">
                  <div className="result-item highlighted">
                    <div className="res-meta">https://klinik-anda.id</div>
                    <div className="res-title">Klinik Gigi Terbaik & Modern di Jogja - Klinik Gigi Anda</div>
                    <div className="res-desc">Layanan behel, scaling, dan perawatan gigi profesional dengan dokter spesialis berpengalaman. Booking sekarang...</div>
                    <div className="pop-indicator">#1</div>
                  </div>
                  <div className="result-item dimmed">
                    <div className="res-meta">https://kompetitorgigi.com</div>
                    <div className="res-title">Praktek Dokter Gigi Murah - Kompetitor A</div>
                    <div className="res-desc">Kami melayani pembersihan karang gigi dan tambal gigi dengan harga terjangkau di pusat kota...</div>
                  </div>
                  <div className="result-item dimmed">
                    <div className="res-meta">https://kliniklain.id</div>
                    <div className="res-title">Ahli Pasang Behel - Klinik Gigi B</div>
                    <div className="res-desc">Temukan berbagai promo menarik untuk pemasangan behel dan perawatan estetik gigi lainnya...</div>
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

        <div className="addons" data-aos="fade-up" data-aos-delay="200">
          <span className="addons-label">Add-ons:</span>
          {addons.map((a, i) => (
            <span key={i} className="addon-tag">+ {a}</span>
          ))}
        </div>
      </div>

      <style>{`
        .services {
          background: linear-gradient(135deg, #F4F7FF 0%, #E8F2FF 100%);
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
          box-shadow: 0 20px 40px rgba(53, 158, 255, 0.15);
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

        .addons {
          margin-top: 40px;
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          padding: 32px;
          background: rgba(255,255,255,0.8);
          border-radius: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
          border: 1px solid rgba(255,255,255,1);
        }

        .addons-label {
          font-weight: 700;
          font-size: 16px;
          color: #1a242d;
        }

        .addon-tag {
          background: #EEF6FF;
          color: var(--accent);
          font-size: 14px;
          font-weight: 700;
          padding: 8px 20px;
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
