import { CheckCircle, X, Star } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Pondasi Klinik',
      price: 'Rp 4.900.000',
      desc: 'Cocok untuk klinik yang ingin mulai punya website profesional pertama dengan struktur yang rapi dan siap membangun trust calon pasien.',
      features: [
        { text: '5 halaman utama (Home, Profil, Layanan, Galeri, Kontak)', included: true },
        { text: 'Desain premium, responsif mobile, tema medis profesional', included: true },
        { text: 'Tombol WhatsApp terintegrasi', included: true },
        { text: 'Basic SEO on-page setup', included: true },
        { text: 'Google Maps embed lokasi klinik', included: true },
        { text: '2x revisi mayor', included: true },
        { text: 'Free hosting & domain (.com/.id) tahun pertama', included: true },
        { text: 'Riset kata kunci & Google Business Profile', included: false },
      ],
      cta: 'Pilih Pondasi Klinik',
      popular: false,
    },
    {
      name: 'Pondasi Klinik Plus',
      price: 'Rp 9.700.000',
      desc: 'Cocok untuk klinik dengan banyak layanan yang ingin tampil lebih premium dan membangun pondasi SEO lokal yang lebih serius.',
      features: [
        { text: 'Hingga lebih dari 12 halaman spesialistik per-treatment', included: true },
        { text: 'Custom brand identity & UI/UX teroptimasi tinggi', included: true },
        { text: 'Form reservasi pintar', included: true },
        { text: 'Riset kata kunci lokal + 10 Artikel SEO Optimized + Google Analytics & Search Console', included: true },
        { text: 'Full setup & optimasi Google Business Profile', included: true },
        { text: 'Halaman dokter/tim & halaman lokasi', included: true },
        { text: 'Unlimited revisi sampai sesuai standar', included: true },
        { text: 'GRATIS maintenance & update teknis 1 bulan pertama (Value Rp 2,3 Juta)', included: true },
      ],
      cta: 'Pilih Pondasi Klinik Plus',
      popular: true,
    },
  ];

  return (
    <section className="pricing section" id="harga">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">PAKET WEBSITE KLINIK</p>
          <h2>Pilih Paket yang Tepat untuk Klinik Anda</h2>
          <p className="pricing-intro">
            Tidak semua klinik butuh paket terbesar. Karena itu kami biasanya mulai dari audit untuk melihat prioritas yang paling masuk akal bagi kondisi klinik Anda.
          </p>
        </div>

        <div className="pricing-grid">
          {plans.map((p, i) => (
            <div
              key={i}
              className={`pricing-card liquid-glass-card ${p.popular ? 'pricing-popular' : ''}`}
              data-aos="fade-up"
              data-aos-delay={i * 100}
            >
              {p.popular && (
                <div className="pricing-badge"><Star size={14} fill="#2563EB" /> Terpopuler</div>
              )}
              <h3 className="pricing-name">{p.name}</h3>
              <div className="pricing-price">{p.price}</div>
              <p className="pricing-desc">{p.desc}</p>
              <ul className="pricing-features">
                {p.features.map((f, j) => (
                  <li key={j} className={f.included ? '' : 'not-included'}>
                    {f.included ? (
                      <CheckCircle size={16} className="pricing-check" />
                    ) : (
                      <X size={16} className="pricing-x" />
                    )}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20tertarik%20paket%20ini!"
                className={`btn-primary pricing-btn ${p.popular ? '' : 'btn-outline'}`}
              >  {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* SEO Maintenance Add-on */}
        <div className="maintenance-addon" data-aos="fade-up">
          <div className="maintenance-inner liquid-glass-card">
            <div className="maintenance-info">
              <h3>SEO & Conversion Care</h3>
              <div className="maintenance-price">Rp 2.300.000<span>/bulan</span></div>
              <p>Website adalah pondasi. SEO dan conversion care membantu website tetap aktif, terawat, dan terus dioptimasi secara berkelanjutan.</p>
            </div>
            <ul className="maintenance-features">
              <li><CheckCircle size={16} className="pricing-check" /> Maintenance website & keamanan</li>
              <li><CheckCircle size={16} className="pricing-check" /> Konten edukasi medis 8-10 artikel/bulanan</li>
              <li><CheckCircle size={16} className="pricing-check" /> Monitoring performa & ranking</li>
              <li><CheckCircle size={16} className="pricing-check" /> Laporan bulanan transparan</li>
              <li><CheckCircle size={16} className="pricing-check" /> Perbaikan teknis sesuai scope</li>
            </ul>
            <a
              href="https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20ingin%20tanya%20tentang%20SEO%20bulanan"
              className="btn-ghost maintenance-btn"
            >Tanya Tentang Care Plan</a>
          </div>
        </div>
      </div>

      <style>{`
        .pricing {
          background: var(--white);
        }
        .pricing-intro {
          font-size: 16px;
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          margin-bottom: 48px;
          align-items: start;
          max-width: 880px;
          margin-left: auto;
          margin-right: auto;
        }
        .pricing-card {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 0;
        }
        .pricing-popular {
          border: 2px solid rgba(37,99,235,0.50) !important;
          box-shadow:
            0 16px 48px rgba(37,99,235,0.20),
            0 2px 0 rgba(255,255,255,0.95) inset !important;
        }
        .pricing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(37,99,235,0.25);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          margin-bottom: 16px;
          width: fit-content;
        }
        .pricing-name {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 18px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
        }
        .pricing-price {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 36px;
          color: var(--accent);
          margin-bottom: 8px;
        }
        .pricing-desc {
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 28px;
          line-height: 1.6;
        }
        .pricing-features {
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 32px;
          flex: 1;
        }
        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .pricing-features li.not-included {
          color: var(--muted);
          opacity: 0.6;
        }
        .pricing-check {
          color: var(--accent);
          flex-shrink: 0;
        }
        .pricing-x {
          color: #D1D5DB;
          flex-shrink: 0;
        }
        .pricing-btn {
          text-align: center;
          justify-content: center;
          width: 100%;
        }
        .btn-outline {
          background: transparent !important;
          border: 2px solid var(--accent) !important;
          color: var(--accent) !important;
          box-shadow: none !important;
        }
        .btn-outline:hover {
          background: var(--accent-soft) !important;
        }

        /* Maintenance Addon */
        .maintenance-addon {
          max-width: 880px;
          margin: 0 auto;
        }
        .maintenance-inner {
          display: grid;
          grid-template-columns: 1fr 1fr auto;
          gap: 40px;
          align-items: center;
          padding: 40px !important;
        }
        .maintenance-info h3 {
          font-size: 22px;
          margin-bottom: 8px;
        }
        .maintenance-price {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 28px;
          color: var(--accent);
          margin-bottom: 12px;
        }
        .maintenance-price span {
          font-size: 16px;
          font-weight: 500;
          color: var(--muted);
        }
        .maintenance-info p {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
        }
        .maintenance-features {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .maintenance-features li {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-primary);
        }
        .maintenance-btn {
          white-space: nowrap;
        }

        @media (max-width: 1023px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 440px; }
          .maintenance-inner { grid-template-columns: 1fr; text-align: center; }
          .maintenance-features { align-items: center; }
          .maintenance-btn { width: 100%; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
