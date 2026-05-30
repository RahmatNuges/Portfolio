import { CheckCircle2, MessageCircle, ArrowLeft } from 'lucide-react';

export default function ThankYou() {
  const handleGoHome = () => {
    window.location.href = window.location.origin;
  };

  return (
    <section className="thank-you-view">
      {/* Background Blobs for Glassmorphism Refraction */}
      <div className="blob blob-blue ty-blob-1" />
      <div className="blob blob-cyan ty-blob-2" />
      <div className="blob blob-purple ty-blob-3" />

      <div className="container ty-inner">
        <div className="ty-card liquid-glass-card" data-aos="zoom-in">
          <div className="ty-success-circle">
            <CheckCircle2 size={48} className="ty-success-icon" />
          </div>

          <h1>Permintaan Audit Klinik Anda Telah Diterima!</h1>
          
          <p className="ty-desc">
            Tim <strong>NAIKIN</strong> sedang menjadwalkan dan menganalisis website, Google Maps, serta alur digital klinik Anda. Laporan audit mendalam beserta rekomendasi prioritas akan kami kirimkan dalam waktu <strong>1-2 hari kerja</strong>.
          </p>

          <div className="ty-cta-box">
            <p>Ingin respon lebih cepat atau ada pertanyaan mendesak?</p>
            <a
              href="https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20baru%20saja%20mengajukan%20audit%20digital%20klinik"
              className="btn-primary ty-wa-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} /> Hubungi Kami via WhatsApp
            </a>
          </div>

          <button onClick={handleGoHome} className="btn-ghost ty-back-btn">
            <ArrowLeft size={16} /> Kembali ke Beranda
          </button>
        </div>
      </div>

      <style>{`
        .thank-you-view {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 100%);
          padding: 40px 20px;
        }

        .ty-blob-1 {
          width: 500px; height: 500px;
          top: -10%; right: -5%;
        }
        .ty-blob-2 {
          width: 400px; height: 400px;
          bottom: -10%; left: -10%;
        }
        .ty-blob-3 {
          width: 300px; height: 300px;
          top: 30%; left: 35%;
        }

        .ty-inner {
          max-width: 640px;
          position: relative;
          z-index: 10;
        }

        .ty-card {
          padding: 60px 48px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          box-shadow: 0 40px 80px rgba(37, 99, 235, 0.06);
        }

        .ty-success-circle {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          background: rgba(16, 185, 129, 0.1);
          color: #10B981;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 32px;
          border: 1px solid rgba(16, 185, 129, 0.2);
        }

        .ty-card h1 {
          font-family: var(--font-display);
          font-size: 32px;
          font-weight: 800;
          color: var(--text-primary);
          line-height: 1.25;
          margin-bottom: 20px;
        }

        .ty-desc {
          font-size: 16px;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 36px;
        }

        .ty-cta-box {
          background: rgba(37, 99, 235, 0.04);
          border: 1px solid rgba(37, 99, 235, 0.1);
          border-radius: 20px;
          padding: 24px;
          width: 100%;
          margin-bottom: 32px;
        }

        .ty-cta-box p {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 16px;
        }

        .ty-wa-btn {
          width: 100%;
          justify-content: center;
          box-shadow: 0 10px 20px rgba(37, 99, 235, 0.15) !important;
        }

        .ty-back-btn {
          font-size: 14px;
          font-weight: 700;
          color: var(--muted) !important;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 575px) {
          .ty-card {
            padding: 40px 24px;
          }
          .ty-card h1 {
            font-size: 24px;
          }
          .ty-desc {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
