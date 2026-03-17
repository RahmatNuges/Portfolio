import { CheckCircle, X } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: 'Premium',
      price: 'Rp 4.700.000',
      desc: 'Bisnis kamu belum punya website? Mulai dari sini.',
      features: [
        { text: 'Website profil 5 halaman', included: true },
        { text: 'Desain responsif mobile', included: true },
        { text: 'Domain & hosting 1 tahun', included: true },
        { text: 'Formulir kontak & WhatsApp', included: true },
        { text: 'Revisi 2x', included: true },
        { text: 'SEO tidak termasuk', included: false },
      ],
      cta: 'Mulai dengan Paket Ini',
      popular: false,
    },
    {
      name: 'Premium+',
      price: 'Rp 11.500.000',
      desc: 'Sudah punya website tapi tidak ada yang datang dari Google? Ini yang mengubah itu.',
      features: [
        { text: 'Website profesional 8-12 halaman', included: true },
        { text: 'SEO on-page lengkap', included: true },
        { text: 'Riset keyword 20 kata kunci', included: true },
        { text: 'Setup Google Business Profile', included: true },
        { text: 'Integrasi analytics & tracking', included: true },
        { text: 'Revisi unlimited', included: true },
        { text: 'Support 3 bulan', included: true },
      ],
      cta: 'Mulai dengan Paket Ini',
      popular: false,
    },
    {
      name: 'Custom',
      price: 'Based on Specification',
      desc: 'Kompetitor kamu sudah ada di Google. Saatnya kamu yang dominasi hasilnya.',
      features: [
        { text: 'Website enterprise custom', included: true },
        { text: 'SEO komprehensif (on + off page)', included: true },
        { text: 'Strategi konten 3 bulan', included: true },
        { text: 'Link building premium', included: true },
        { text: 'Laporan bulanan eksekutif', included: true },
        { text: 'Dedicated account manager', included: true },
        { text: 'SLA & prioritas respons', included: true },
      ],
      cta: 'Diskusi Kebutuhan Kamu',
      popular: false,
    },
  ];

  return (
    <section className="pricing section" id="harga">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">TRANSPARAN SOAL HARGA</p>
          <h2>Pilih Paket yang Pas untuk Bisnis Kamu</h2>
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
                <div className="pricing-badge">⭐ Paling Populer</div>
              )}
              <h3 className="pricing-name">Paket {p.name}</h3>
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

        <p className="pricing-note" data-aos="fade-up">
          Semua harga belum termasuk PPN. Paket bisa dikustomisasi sesuai kebutuhan. Hubungi kami untuk konsultasi gratis.
        </p>
      </div>

      <style>{`
        .pricing {
          background: var(--white);
        }
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
          margin-bottom: 32px;
          align-items: start;
        }
        .pricing-card {
          padding: 40px 32px;
          display: flex;
          flex-direction: column;
          position: relative;
          z-index: 0;
        }
        .pricing-popular {
          border: 2px solid rgba(53,158,255,0.50) !important;
          box-shadow:
            0 16px 48px rgba(53,158,255,0.20),
            0 2px 0 rgba(255,255,255,0.95) inset !important;
        }
        .pricing-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.65);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(53,158,255,0.25);
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
          font-style: italic;
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
        .pricing-cta {
          text-align: center;
          justify-content: center;
          width: 100%;
        }
        .pricing-note {
          text-align: center;
          font-size: 13px;
          color: var(--muted);
        }

        @media (max-width: 1023px) {
          .pricing-grid { grid-template-columns: 1fr; max-width: 440px; margin-left: auto; margin-right: auto; }
        }
      `}</style>
    </section>
  );
}
