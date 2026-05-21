import { XCircle, CheckCircle } from 'lucide-react';

export default function ForWhoSection() {
  const notFor = [
    'Klinik yang hanya mencari website murah tanpa strategi',
    'Klinik yang tidak butuh copywriting dan struktur SEO dasar',
    'Klinik yang hanya ingin template instan tanpa kustomisasi',
    'Klinik yang belum siap berinvestasi untuk tampilan digital profesional',
  ];

  const forYou = [
    'Klinik gigi yang ingin terlihat lebih profesional',
    'Klinik kecantikan yang ingin meningkatkan trust calon pasien',
    'Klinik yang belum punya website',
    'Klinik yang website lamanya sudah terlihat outdated',
    'Klinik yang ingin mulai SEO lokal',
    'Klinik yang ingin semua informasi layanan lebih rapi',
    'Klinik yang ingin mengarahkan calon pasien ke WhatsApp booking',
  ];

  return (
    <section className="for-who section" id="untuk-siapa">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">UNTUK SIAPA</p>
          <h2>Apakah Layanan Ini Cocok untuk Klinik Anda?</h2>
        </div>

        <div className="for-who-grid">
          {/* NOT FOR - shown first */}
          <div className="for-who-card not-for-card" data-aos="fade-up">
            <h3 className="not-for-title">Layanan Ini Tidak Cocok Untuk</h3>
            <ul>
              {notFor.map((item, i) => (
                <li key={i}>
                  <XCircle size={18} className="not-for-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* FOR YOU - shown second */}
          <div className="for-who-card for-card" data-aos="fade-up" data-aos-delay="100">
            <h3 className="for-title">Layanan Ini Cocok Untuk</h3>
            <ul>
              {forYou.map((item, i) => (
                <li key={i}>
                  <CheckCircle size={18} className="for-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        .for-who {
          background: var(--white);
        }
        .for-who-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          max-width: 900px;
          margin: 0 auto;
        }
        .for-who-card {
          padding: 40px 36px;
          border-radius: var(--radius-card);
          border: 1px solid var(--border);
        }
        .not-for-card {
          background: #FEF2F2;
          border-color: rgba(220, 38, 38, 0.15);
        }
        .for-card {
          background: #F0FDF4;
          border-color: rgba(22, 163, 74, 0.15);
        }
        .not-for-title {
          font-size: 20px;
          margin-bottom: 24px;
          color: #DC2626;
        }
        .for-title {
          font-size: 20px;
          margin-bottom: 24px;
          color: #16A34A;
        }
        .for-who-card ul {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .for-who-card li {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 15px;
          color: var(--text-primary);
          font-weight: 500;
          line-height: 1.5;
        }
        .not-for-icon {
          color: #DC2626;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .for-icon {
          color: #16A34A;
          flex-shrink: 0;
          margin-top: 2px;
        }

        @media (max-width: 767px) {
          .for-who-grid { grid-template-columns: 1fr; }
          .for-who-card { padding: 28px 24px; }
        }
      `}</style>
    </section>
  );
}
