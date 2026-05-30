import { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

export default function AuditSection() {
  const auditPoints = [
    'Tampilan website atau profil digital klinik',
    'Kejelasan layanan dan treatment',
    'CTA WhatsApp / booking',
    'Google Maps / Google Business Profile',
    'Kepercayaan: dokter, testimoni, foto klinik',
    'Struktur halaman untuk SEO lokal',
    'Kompetitor lokal secara umum',
    'Rekomendasi improvement prioritas',
  ];

  useEffect(() => {
    const w = "https://tally.so/widgets/embed.js";
    const v = () => {
      // @ts-ignore
      if (typeof Tally !== "undefined") {
        // @ts-ignore
        Tally.loadEmbeds();
      } else {
        document.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
          const iframe = e as HTMLIFrameElement;
          iframe.src = iframe.dataset.tallySrc || "";
        });
      }
    };

    // @ts-ignore
    if (typeof Tally !== "undefined") {
      v();
    } else if (document.querySelector(`script[src="${w}"]`) === null) {
      const s = document.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      document.body.appendChild(s);
    }
  }, []);

  return (
    <section className="audit section" id="audit">
      <div className="container">
        <div className="audit-grid">
          <div className="audit-info" data-aos="fade-up">
            <p className="section-label">AUDIT GRATIS</p>
            <h2>Mulai dari Audit Klinik agar Tahu Prioritas yang Paling Penting</h2>
            <p className="audit-sub">
              Kami bantu cek website, Google Maps, Instagram, dan alur booking klinik Anda lalu menunjukkan bagian mana yang paling perlu dibenahi lebih dulu.
            </p>

            <div className="audit-checklist">
              <h3>Apa yang Kami Audit?</h3>
              <ul>
                {auditPoints.map((point, i) => (
                  <li key={i}>
                    <CheckCircle size={16} className="audit-check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="audit-form-wrapper" data-aos="fade-up" data-aos-delay="100">
            <div className="audit-form-card liquid-glass-card" style={{ padding: '24px', overflow: 'hidden' }}>
              <iframe
                data-tally-src="https://tally.so/embed/Gx5DQz?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="892"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Isi Form Singkat"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .audit {
          background: linear-gradient(135deg, #EFF6FF 0%, #E0F2FE 100%);
        }
        .audit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .audit-info h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        .audit-sub {
          font-size: 17px;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .audit-checklist h3 {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .audit-checklist ul {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .audit-checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: var(--text-primary);
          font-weight: 500;
        }
        .audit-check-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        .audit-form {
          padding: 40px !important;
        }
        .audit-form h3 {
          font-size: 22px;
          margin-bottom: 28px;
          text-align: center;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-primary);
          background: rgba(255,255,255,0.8);
          transition: border-color 0.2s ease;
          outline: none;
        }
        .form-group input:focus,
        .form-group select:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .form-group input::placeholder {
          color: #9CA3AF;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .audit-submit {
          width: 100%;
          justify-content: center;
          margin-top: 8px;
        }

        @media (max-width: 1023px) {
          .audit-grid { grid-template-columns: 1fr; gap: 48px; }
          .audit-info { text-align: center; }
          .audit-checklist ul { max-width: 400px; margin: 0 auto; }
          .audit-checklist li { text-align: left; }
        }
        @media (max-width: 767px) {
          .audit-info h2 { font-size: 28px; }
          .form-row { grid-template-columns: 1fr; }
          .audit-form { padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}
