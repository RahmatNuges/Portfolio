import { Star } from 'lucide-react';

export default function Pricing() {
  const waNumber = '6282342310221';

  const handleAuditClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const auditElement = document.getElementById('audit');
    if (auditElement) {
      auditElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = 'audit';
    }
  };

  return (
    <section className="pricing section" id="harga">
      <div className="container">
        <div id="naikin-pricing-direct" aria-label="Pricing NAIKIN dengan semua fitur dan nilai langsung terlihat">
          <div className="nk-page">
            {/* Header */}
            <header className="nk-head" data-aos="fade-up">
              <span className="nk-eyebrow">PAKET WEBSITE KLINIK</span>
              <h2>
                Pilih pondasi digital<br />
                yang tepat untuk klinik Anda.
              </h2>
              <p>
                Dari website pertama hingga halaman treatment yang lengkap.<br />
                Pilih sesuai kebutuhan klinik, dengan cakupan yang jelas.
              </p>
            </header>

            {/* Grid 2 Cards */}
            <div className="nk-grid">
              {/* Card 1: Klinik Basic */}
              <article className="nk-card" aria-label="Klinik Basic" data-aos="fade-up" data-aos-delay="100">
                <div className="nk-content">
                  <h3>Klinik Basic</h3>
                  <p className="nk-desc">
                    Satu tempat yang rapi untuk informasi klinik, layanan, dan akses booking pasien.
                  </p>

                  <div className="nk-price-area">
                    <div className="nk-reference">
                      Total nilai layanan <s>Rp6.750.000</s>
                    </div>
                    <div className="nk-price">Rp5.000.000</div>
                    <div className="nk-period">Sekali bayar · Pembuatan website</div>
                  </div>

                  <div className="nk-caption">Yang Anda dapatkan</div>

                  <ul className="nk-list">
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        <strong>6 halaman website</strong>
                        <small>6 × Rp1.000.000</small>
                      </span>
                      <span className="nk-amount">Rp6.000.000</span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        <strong>3 artikel SEO awal</strong>
                        <small>3 × Rp250.000</small>
                      </span>
                      <span className="nk-amount">Rp750.000</span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>Desain profesional & mobile-friendly</span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        Tombol WhatsApp terintegrasi
                        <small>Memudahkan pertanyaan dan booking</small>
                      </span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>Setup dasar SEO on-page</span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>Google Maps lokasi klinik</span>
                    </li>
                  </ul>

                  <p className="nk-page-note">
                    6 halaman: Home, Profil, Layanan, Galeri, Kontak, dan Artikel.
                  </p>
                  <p className="nk-fit">2 kali revisi mayor.</p>

                  <div className="nk-footer">
                    <a
                      href={`https://wa.me/${waNumber}?text=Halo%20NAIKIN%2C%20saya%20tertarik%20konsultasi%20paket%20Klinik%20Basic`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nk-button nk-outline"
                    >
                      Konsultasikan Klinik Basic →
                    </a>
                    <div className="nk-note">Diskusikan kebutuhan klinik sebelum memutuskan.</div>
                  </div>
                </div>
              </article>

              {/* Card 2: Klinik Premium+ */}
              <article className="nk-card nk-plus" aria-label="Klinik Premium+" data-aos="fade-up" data-aos-delay="200">
                <div className="nk-content">
                  <div className="nk-badge">
                    <Star size={13} fill="currentColor" />
                    <span>Rekomendasi</span>
                  </div>

                  <h3>Klinik Premium+</h3>
                  <p className="nk-desc">
                    Halaman treatment lebih lengkap, konten edukasi awal, dan pondasi SEO lokal sejak launching.
                  </p>

                  <div className="nk-price-area">
                    <div className="nk-reference">
                      Total nilai layanan <s>Rp16.800.000</s>
                    </div>
                    <div className="nk-price">Rp9.500.000</div>
                    <div className="nk-period">Sekali bayar · Pembuatan website</div>
                  </div>

                  <div className="nk-caption">Yang Anda dapatkan</div>

                  <ul className="nk-list">
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        <strong>12 halaman website</strong>
                        <small>12 × Rp1.000.000 · sesuai scope</small>
                      </span>
                      <span className="nk-amount">Rp12.000.000</span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        <strong>10 artikel SEO awal</strong>
                        <small>10 × Rp250.000</small>
                      </span>
                      <span className="nk-amount">Rp2.500.000</span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        Desain sesuai identitas klinik
                        <small>Mobile-friendly & form reservasi</small>
                      </span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        Riset keyword & setup SEO lokal
                        <small>Google Business Profile</small>
                      </span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        Analytics & Search Console
                        <small>Pondasi pengukuran performa</small>
                      </span>
                    </li>
                    <li className="nk-row">
                      <span className="nk-check" aria-hidden="true">✓</span>
                      <span>
                        Halaman dokter & lokasi
                        <small>Dalam cakupan 12 halaman</small>
                      </span>
                    </li>
                  </ul>

                  <div className="nk-benefit">
                    <strong>Bonus maintenance bulan pertama · Rp2.300.000</strong>
                    <p>
                      Maintenance & update teknis tanpa biaya tambahan. Sudah dihitung dalam total nilai layanan Rp16.800.000.
                    </p>
                  </div>

                  <p className="nk-fit">Revisi hingga sesuai standar dalam scope paket.</p>

                  <div className="nk-footer">
                    <a
                      href={`https://wa.me/${waNumber}?text=Halo%20NAIKIN%2C%20saya%20tertarik%20konsultasi%20paket%20Klinik%20Premium%2B`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="nk-button"
                    >
                      Konsultasikan Klinik Premium+ →
                    </a>
                    <div className="nk-note">Diskusikan kebutuhan klinik sebelum memutuskan.</div>
                  </div>
                </div>
              </article>
            </div>

            {/* Divider */}
            <div className="nk-divider" data-aos="fade-up">
              Setelah website live, lanjutkan jika dibutuhkan
            </div>

            {/* Retainer Growth+ Card */}
            <article className="nk-growth" aria-label="Retainer Growth+" data-aos="fade-up">
              <div className="nk-growth-left">
                <div className="nk-label">OPSIONAL · LAYANAN BULANAN</div>
                <h3>Retainer Growth+</h3>
                <p className="nk-growth-desc">
                  Dukungan AI Agents khusus SEO klinik, konten bulanan, dan perawatan website untuk pertumbuhan digital yang terarah.
                </p>
                <div className="nk-price-area">
                  <div className="nk-reference">
                    Total nilai layanan <s>Rp8.000.000/bulan</s>
                  </div>
                  <div className="nk-price">
                    Rp3.000.000 <span>/bulan</span>
                  </div>
                </div>

                <div className="nk-growth-cta">
                  <a
                    href={`https://wa.me/${waNumber}?text=Halo%20NAIKIN%2C%20saya%20ingin%20diskusi%20tentang%20Retainer%20Growth%2B`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nk-button"
                  >
                    Diskusikan Retainer Growth+ →
                  </a>
                </div>
              </div>

              <div>
                <section className="nk-ai" aria-label="Keunggulan utama: AI Agents khusus SEO klinik">
                  <div className="nk-ai-top">
                    AI Agents khusus SEO klinik
                  </div>
                  <h4>AI Agents khusus SEO klinik</h4>
                  <p>Membantu analisis SEO dan menentukan prioritas optimasi klinik setiap bulan.</p>
                  <div className="nk-ai-value">
                    <span>Nilai layanan · sudah termasuk</span>
                    <strong>Rp3.500.000/bulan</strong>
                  </div>
                </section>

                <ul className="nk-list">
                  <li className="nk-row">
                    <span>
                      Maintenance website
                      <small>Perawatan teknis, keamanan & performa</small>
                    </span>
                    <span className="nk-amount">Rp1.000.000</span>
                  </li>
                  <li className="nk-row">
                    <span>
                      6 artikel SEO per bulan
                      <small>6 × Rp250.000</small>
                    </span>
                    <span className="nk-amount">Rp1.500.000</span>
                  </li>
                  <li className="nk-row">
                    <span>
                      Audit & laporan bulanan
                      <small>Ringkasan performa & langkah berikutnya</small>
                    </span>
                    <span className="nk-amount">Rp2.000.000</span>
                  </li>
                  <li className="nk-row">
                    <span>
                      Google Business Profile,<br />
                      Analytics & Search Console
                    </span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Note & Free Audit link */}
            <p className="nk-value-note" data-aos="fade-up">
              Nilai layanan adalah penjumlahan komponen yang tercantum, bukan harga paket sebelumnya.
            </p>

            <div className="nk-audit" data-aos="fade-up">
              <span>Belum yakin harus mulai dari mana?</span>
              <a href="#audit" onClick={handleAuditClick} className="nk-audit-btn">
                Minta audit gratis →
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .pricing {
          background: #FFFFFF;
          padding: 80px 0;
          scroll-margin-top: 100px;
        }

        #naikin-pricing-direct {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          color: #111a31;
          color-scheme: light;
          --nk-blue: #2560ef;
          --nk-blue-hover: #1b4ed8;
          --nk-muted: #596780;
          --nk-line: #e4eaf3;
          --nk-soft: #f0f5ff;
        }

        #naikin-pricing-direct * {
          box-sizing: border-box;
        }

        #naikin-pricing-direct .nk-page {
          background: #ffffff;
          padding: 38px 24px 30px;
          max-width: 960px;
          margin: 0 auto;
        }

        #naikin-pricing-direct .nk-head {
          text-align: center;
          max-width: 580px;
          margin: 0 auto 36px;
        }

        #naikin-pricing-direct .nk-eyebrow {
          font-size: 11px;
          font-weight: 750;
          letter-spacing: 1.4px;
          color: var(--nk-blue);
          display: inline-block;
        }

        #naikin-pricing-direct h2 {
          font-size: 32px;
          line-height: 1.22;
          letter-spacing: -1px;
          margin: 12px 0;
          font-weight: 800;
          color: #111a31;
        }

        #naikin-pricing-direct p {
          font-size: 14px;
          line-height: 1.65;
          color: var(--nk-muted);
          margin: 0;
        }

        #naikin-pricing-direct .nk-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          align-items: stretch;
        }

        #naikin-pricing-direct .nk-card {
          border: 1px solid var(--nk-line);
          border-radius: 18px;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          min-width: 0;
          box-shadow: 0 10px 32px rgba(17, 44, 102, 0.04);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        #naikin-pricing-direct .nk-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 40px rgba(17, 44, 102, 0.08);
        }

        #naikin-pricing-direct .nk-plus {
          border: 1.5px solid #668df6;
          box-shadow: 0 12px 36px rgba(37, 96, 239, 0.08);
        }

        #naikin-pricing-direct .nk-plus:hover {
          box-shadow: 0 16px 48px rgba(37, 96, 239, 0.13);
        }

        #naikin-pricing-direct .nk-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 9999px;
          padding: 5px 14px;
          font-size: 13px;
          font-weight: 600;
          color: var(--nk-blue);
          margin-bottom: 14px;
          width: fit-content;
        }

        #naikin-pricing-direct .nk-content {
          padding: 28px 24px 24px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        #naikin-pricing-direct h3 {
          font-size: 22px;
          font-weight: 700;
          letter-spacing: -0.45px;
          margin: 0 0 8px;
          color: #111a31;
        }

        #naikin-pricing-direct .nk-desc {
          min-height: 80px;
        }

        #naikin-pricing-direct .nk-price-area {
          margin: 18px 0 20px;
        }

        #naikin-pricing-direct .nk-reference {
          font-size: 12px;
          color: var(--nk-muted);
          min-height: 18px;
          margin-bottom: 6px;
          line-height: 1.5;
        }

        #naikin-pricing-direct .nk-reference s {
          margin-left: 5px;
          font-size: 14.5px;
          font-weight: 700;
          color: #64748b;
          text-decoration-thickness: 1.5px;
        }

        #naikin-pricing-direct .nk-price {
          font-size: 32px;
          line-height: 1.25;
          letter-spacing: -1.2px;
          font-weight: 700;
          color: #22304a;
          white-space: nowrap;
        }

        #naikin-pricing-direct .nk-plus .nk-price {
          font-size: 40px;
          font-weight: 800;
          color: var(--nk-blue);
        }

        #naikin-pricing-direct .nk-period {
          font-size: 12px;
          color: var(--nk-muted);
          margin-top: 5px;
        }

        #naikin-pricing-direct .nk-caption {
          font-size: 12px;
          font-weight: 600;
          color: #5a6780;
          padding: 0 0 11px;
          border-bottom: 1px solid var(--nk-line);
        }

        #naikin-pricing-direct .nk-list {
          margin: 0;
          padding: 0;
          list-style: none;
        }

        #naikin-pricing-direct .nk-row {
          display: grid;
          grid-template-columns: 16px minmax(0, 1fr) auto;
          gap: 8px;
          padding: 13px 0;
          border-bottom: 1px solid #edf1f7;
          align-items: start;
          font-size: 14px;
          line-height: 1.55;
        }

        #naikin-pricing-direct .nk-row strong {
          font-weight: 600;
          color: #111a31;
        }

        #naikin-pricing-direct .nk-row .nk-check {
          color: var(--nk-blue);
          font-weight: 700;
          line-height: 1.5;
        }

        #naikin-pricing-direct .nk-row small {
          display: block;
          font-size: 12px;
          color: var(--nk-muted);
          margin-top: 3px;
        }

        #naikin-pricing-direct .nk-amount {
          font-size: 12px;
          font-weight: 400;
          color: var(--nk-muted);
          white-space: nowrap;
          text-align: right;
          padding-top: 2px;
        }

        #naikin-pricing-direct .nk-benefit {
          padding: 14px;
          background: var(--nk-soft);
          border-radius: 11px;
          margin-top: 16px;
          border: 1px solid #e0ebff;
        }

        #naikin-pricing-direct .nk-benefit strong {
          display: block;
          font-size: 13.5px;
          font-weight: 600;
          line-height: 1.5;
          color: #1c4db5;
          margin-bottom: 5px;
        }

        #naikin-pricing-direct .nk-benefit p {
          font-size: 12px;
          line-height: 1.6;
          color: #3b5280;
        }

        #naikin-pricing-direct .nk-page-note {
          font-size: 12px;
          line-height: 1.6;
          color: var(--nk-muted);
          padding-top: 15px;
        }

        #naikin-pricing-direct .nk-fit {
          font-size: 12px;
          color: var(--nk-muted);
          padding-top: 14px;
          line-height: 1.6;
        }

        #naikin-pricing-direct .nk-footer {
          margin-top: auto;
          padding-top: 24px;
        }

        #naikin-pricing-direct .nk-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--nk-blue);
          border-radius: 28px;
          background: var(--nk-blue);
          color: #ffffff;
          font-family: inherit;
          font-size: 14px;
          font-weight: 600;
          width: 100%;
          padding: 13px 12px;
          min-height: 46px;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(37, 96, 239, 0.18);
        }

        #naikin-pricing-direct .nk-button:hover {
          background: var(--nk-blue-hover);
          border-color: var(--nk-blue-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37, 96, 239, 0.28);
        }

        #naikin-pricing-direct .nk-outline {
          background: #ffffff;
          color: var(--nk-blue);
          box-shadow: none;
        }

        #naikin-pricing-direct .nk-outline:hover {
          background: var(--nk-soft);
          color: var(--nk-blue-hover);
          border-color: var(--nk-blue);
          transform: translateY(-1px);
        }

        #naikin-pricing-direct .nk-note {
          font-size: 12px;
          text-align: center;
          color: var(--nk-muted);
          margin: 9px 0 0;
          line-height: 1.6;
        }

        #naikin-pricing-direct .nk-divider {
          display: flex;
          gap: 14px;
          align-items: center;
          margin: 36px 0 22px;
          font-size: 12px;
          font-weight: 500;
          color: var(--nk-muted);
          text-align: center;
        }

        #naikin-pricing-direct .nk-divider:before,
        #naikin-pricing-direct .nk-divider:after {
          content: '';
          height: 1px;
          flex: 1;
          background: var(--nk-line);
        }

        #naikin-pricing-direct .nk-growth {
          background: #f3f7ff;
          border: 1px solid #dfe8fc;
          border-radius: 18px;
          padding: 28px;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 30px;
          align-items: start;
        }

        #naikin-pricing-direct .nk-growth-left {
          display: flex;
          flex-direction: column;
        }

        #naikin-pricing-direct .nk-growth-desc {
          margin: 6px 0 16px;
        }

        #naikin-pricing-direct .nk-growth .nk-price {
          font-size: 36px;
          font-weight: 750;
          color: var(--nk-blue);
        }

        #naikin-pricing-direct .nk-growth .nk-price span {
          display: inline-block;
          font-size: 13px;
          line-height: 1.5;
          letter-spacing: 0;
          font-weight: 400;
          color: var(--nk-muted);
          margin-left: 2px;
        }

        #naikin-pricing-direct .nk-growth-cta {
          margin-top: 18px;
          max-width: 320px;
        }

        #naikin-pricing-direct .nk-growth .nk-row {
          grid-template-columns: minmax(0, 1fr) auto;
          padding: 11px 0;
          border-color: #dfe8f7;
        }

        #naikin-pricing-direct .nk-growth .nk-row:first-child {
          padding-top: 0;
        }

        #naikin-pricing-direct .nk-growth .nk-row:last-child {
          border-bottom: 0;
          padding-bottom: 0;
        }

        #naikin-pricing-direct .nk-label {
          font-size: 11px;
          color: #1c4db5;
          font-weight: 700;
          letter-spacing: 0.5px;
          margin-bottom: 9px;
          text-transform: uppercase;
        }

        #naikin-pricing-direct .nk-ai {
          background: #ffffff;
          border: 1px solid #e0ebfb;
          border-radius: 12px;
          padding: 18px;
          margin-bottom: 18px;
          box-shadow: 0 2px 10px rgba(17, 44, 102, 0.02);
        }

        #naikin-pricing-direct .nk-ai-top {
          color: var(--nk-blue);
          font-size: 11.5px;
          font-weight: 750;
          letter-spacing: 0.5px;
          margin-bottom: 8px;
          text-transform: uppercase;
        }

        #naikin-pricing-direct .nk-ai h4 {
          font-size: 19px;
          line-height: 1.3;
          letter-spacing: -0.3px;
          margin: 0 0 9px;
          color: #153676;
          font-weight: 700;
        }

        #naikin-pricing-direct .nk-ai p {
          font-size: 13.5px;
          color: var(--nk-muted);
        }

        #naikin-pricing-direct .nk-ai-value {
          display: flex;
          flex-wrap: wrap;
          gap: 5px 12px;
          justify-content: space-between;
          align-items: center;
          margin-top: 14px;
          padding-top: 12px;
          border-top: 1px solid #e0e9fb;
          font-size: 11.5px;
          color: var(--nk-muted);
        }

        #naikin-pricing-direct .nk-ai-value strong {
          font-size: 12.5px;
          font-weight: 600;
          color: #153676;
        }

        #naikin-pricing-direct .nk-value-note {
          font-size: 11.5px;
          color: var(--nk-muted);
          margin: 18px 0 0;
          line-height: 1.6;
          text-align: center;
        }

        #naikin-pricing-direct .nk-audit {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin: 22px 0 0;
          font-size: 13px;
          color: var(--nk-muted);
        }

        #naikin-pricing-direct .nk-audit .nk-audit-btn {
          font-family: inherit;
          font-size: 13px;
          font-weight: 700;
          border: 0;
          background: transparent;
          color: var(--nk-blue);
          padding: 8px 6px;
          min-height: 40px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          transition: color 0.15s ease, text-decoration 0.15s ease;
        }

        #naikin-pricing-direct .nk-audit .nk-audit-btn:hover {
          color: var(--nk-blue-hover);
          text-decoration: underline;
        }

        @media (max-width: 680px) {
          .pricing {
            padding: 50px 0;
          }
          #naikin-pricing-direct .nk-page {
            padding: 24px 12px 18px;
          }
          #naikin-pricing-direct h2 {
            font-size: 26px;
          }
          #naikin-pricing-direct .nk-grid,
          #naikin-pricing-direct .nk-growth {
            grid-template-columns: 1fr;
          }
          #naikin-pricing-direct .nk-desc {
            min-height: 0;
          }
          #naikin-pricing-direct .nk-content {
            padding: 24px 18px 20px;
          }
          #naikin-pricing-direct .nk-price {
            font-size: 30px;
          }
          #naikin-pricing-direct .nk-plus .nk-price {
            font-size: 34px;
          }
          #naikin-pricing-direct .nk-row {
            column-gap: 8px;
          }
          #naikin-pricing-direct .nk-growth {
            padding: 22px 18px;
            gap: 20px;
          }
          #naikin-pricing-direct .nk-growth .nk-price {
            font-size: 32px;
          }
          #naikin-pricing-direct .nk-growth-cta {
            max-width: none;
            width: 100%;
          }
        }

        @media (max-width: 380px) {
          #naikin-pricing-direct .nk-row {
            grid-template-columns: 16px minmax(0, 1fr);
          }
          #naikin-pricing-direct .nk-amount {
            grid-column: 2;
            text-align: left;
            margin-top: 2px;
          }
          #naikin-pricing-direct .nk-growth .nk-row {
            grid-template-columns: 1fr;
          }
          #naikin-pricing-direct .nk-growth .nk-amount {
            grid-column: 1;
            margin-top: 2px;
          }
          #naikin-pricing-direct .nk-price {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}
