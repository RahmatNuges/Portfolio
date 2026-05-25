import { MessageCircle } from 'lucide-react';

export default function CTAFinal() {
  return (
    <section className="cta-final" id="kontak">
      {/* Decorative bokeh */}
      <div className="cta-bokeh cta-bokeh-1" />
      <div className="cta-bokeh cta-bokeh-2" />
      <div className="cta-bokeh cta-bokeh-3" />

      <div className="container cta-final-inner">
        <div className="cta-final-badge" data-aos="fade-up" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
          <MessageCircle size={16} /> Audit Gratis
        </div>

        <h2 data-aos="fade-up" data-aos-delay="50">Mulai dari Audit Klinik, Lalu Tentukan Langkah yang Paling Tepat</h2>

        <p className="cta-final-sub" data-aos="fade-up" data-aos-delay="100">
          Jika Anda belum yakin harus mulai dari website baru, perbaikan website lama, atau SEO lokal, mulai saja dari audit. Kami bantu tunjukkan prioritas yang paling masuk akal untuk klinik Anda.
        </p>

        <div className="cta-final-buttons" data-aos="fade-up" data-aos-delay="150">
          <a
            href="#audit"
            className="btn-primary cta-audit-btn"
          >
            Minta Audit Klinik
          </a>
          <a
            href="https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20ingin%20konsultasi%20tentang%20website%20klinik"
            className="cta-wa-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={18} /> Chat WhatsApp NAIKIN
          </a>
        </div>

        <div className="cta-bottom" data-aos="fade-up" data-aos-delay="200">
          <span>📍 DI Yogyakarta</span>
        </div>
        <p className="cta-final-note" data-aos="fade-up" data-aos-delay="200">
          Respons dalam &lt; 1 jam di jam kerja
        </p>
      </div>

      <style>{`
        .cta-final {
          background: radial-gradient(ellipse at 50% 0%, #60A5FA 0%, #2563EB 70%);
          padding: 100px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }
        .cta-bokeh {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          pointer-events: none;
        }
        .cta-bokeh-1 {
          width: 400px; height: 400px;
          top: -100px; right: -50px;
        }
        .cta-bokeh-2 {
          width: 300px; height: 300px;
          bottom: -80px; left: -60px;
        }
        .cta-bokeh-3 {
          width: 200px; height: 200px;
          top: 40%; left: 60%;
        }
        .cta-final-inner {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .cta-final-badge {
          background: rgba(255,255,255,0.20);
          border: 1px solid rgba(255,255,255,0.40);
          border-radius: 50px;
          padding: 8px 24px;
          font-size: 14px;
          font-weight: 600;
          color: #FFFFFF;
          margin-bottom: 24px;
        }
        .cta-final h2 {
          color: #FFFFFF;
          font-size: 48px;
          margin-bottom: 16px;
        }
        .cta-final-sub {
          color: rgba(255,255,255,0.85);
          font-size: 18px;
          max-width: 560px;
          line-height: 1.7;
          margin-bottom: 36px;
        }
        .cta-final-buttons {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .cta-audit-btn {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2) !important;
        }
        .cta-wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.90);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #2563EB;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 16px;
          border-radius: 50px;
          padding: 16px 36px;
          transition: all 180ms ease;
        }
        .cta-wa-btn:hover {
          background: rgba(255,255,255,1);
          transform: translateY(-2px);
        }
        .cta-bottom {
          margin-top: 40px;
        }
        .cta-bottom span {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 14px;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #FFFFFF;
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          padding: 8px 20px;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        .cta-final-note {
          margin-top: 16px;
          font-size: 13px;
          color: rgba(255,255,255,0.7);
          font-weight: 500;
        }

        @media (max-width: 767px) {
          .cta-final { padding: 72px 0; }
          .cta-final h2 { font-size: 32px; }
          .cta-final-sub { font-size: 16px; }
          .cta-wa-btn { font-size: 15px; padding: 14px 28px; }
          .cta-final-buttons { flex-direction: column; width: 100%; padding: 0 20px; }
          .cta-final-buttons a { width: 100%; text-align: center; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
