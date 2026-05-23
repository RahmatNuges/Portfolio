import { Search, MessageCircle, Globe, Wrench, BarChart3 } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      {/* Background Blobs for True Glassmorphism Refraction */}
      <div className="blob blob-blue hero-blob-1" />
      <div className="blob blob-cyan hero-blob-2" />
      <div className="blob blob-purple hero-blob-3" />

      <div className="container hero-inner">


        {/* Hero Visual (Image) placed ABOVE H1 with floating animation and no frame */}

        {/* Glass Badge */}
        <div className="liquid-glass hero-badge" data-aos="fade-up">
          <Search className="badge-icon text-accent" size={16} /> Spesialis Website & SEO Klinik
        </div>

        {/* Hero Content (Headline, Sub-headline, CTAs, Trust Chips) placed BELOW Image */}
        <div className="hero-content" data-aos="fade-up" data-aos-delay="100">
          <h1>Bangun Kepercayaan & Tingkatkan Booking Pasien Baru dengan <span className="text-gradient">Website Klinik Premium</span></h1>

          <p className="hero-sub">
            Ubah pencarian Google menjadi kunjungan klinik dengan website premium & SEO lokal teroptimasi.
          </p>

          <div className="hero-visual" data-aos="fade-up" data-aos-delay="50">
            <div className="hero-image-wrapper">
              <div className="single-image-container">
                <img
                  src="/hero-image.webp"
                  alt="Website Klinik Premium oleh NAIKIN"
                  className="main-hero-img"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>

          <div className="hero-ctas">
            <a
              href="#audit"
              className="btn-primary"
            >
              Minta Audit Klinik Gratis
            </a>
            <a href="#portofolio" className="btn-ghost">
              Lihat Portofolio Website Klinik
            </a>
          </div>

          {/* Trust Chips */}
          <div className="hero-trust-chips">
            <div className="trust-chip">
              <Globe size={14} /> Website Klinik Premium
            </div>
            <div className="trust-chip">
              <Search size={14} /> SEO Lokal
            </div>
            <div className="trust-chip">
              <MessageCircle size={14} /> CTA WhatsApp
            </div>
            <div className="trust-chip">
              <Wrench size={14} /> Maintenance Bulanan
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #FFFFFF 0%, #EFF6FF 100%);
          padding-top: 140px;
          padding-bottom: 80px;
        }
        
        /* The blobs make glassmorphism look real */
        .hero-blob-1 {
          width: 600px; height: 600px;
          top: -10%; right: -5%;
        }
        .hero-blob-2 {
          width: 500px; height: 500px;
          bottom: -10%; left: -10%;
        }
        .hero-blob-3 {
          width: 400px; height: 400px;
          top: 30%; left: 40%;
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          position: relative;
          z-index: 10;
          text-align: center;
          width: 100%;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          max-width: 860px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 24px;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 14px;
          color: var(--accent);
          width: fit-content;
        }
        
        .badge-icon {
          font-size: 16px;
        }

        .hero h1 {
          max-width: 820px;
          font-size: 46px;
          line-height: 1.25;
          letter-spacing: -0.5px;
          text-align: center;
        }

        .text-gradient {
          background: linear-gradient(135deg, #2563EB 0%, #60A5FA 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 18px;
          line-height: 1.65;
          max-width: 720px;
          color: var(--muted);
          text-align: center;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 8px;
        }

        .hero-trust-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 8px;
        }

        .trust-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.15);
          border-radius: 100px;
          padding: 6px 14px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
          white-space: nowrap;
        }

        .hero-visual {
          position: relative;
          width: 100%;
          max-width: 450px;
          margin: 0 auto;
        }

        .hero-image-wrapper {
          position: relative;
          z-index: 10;
          width: 100%;
          animation: float-main 8s ease-in-out infinite;
        }

        .single-image-container {
          width: 100%;
          border: none;
          background: transparent;
          box-shadow: none;
          overflow: visible;
        }

        .main-hero-img {
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 24px 48px rgba(37, 99, 235, 0.12));
        }

        .glass-card-floating {
          position: absolute;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          animation: float-badge 6s ease-in-out infinite;
        }

        .float-1 {
          top: 10%;
          left: -20%;
          animation-delay: 0s;
        }

        .float-2 {
          bottom: 10%;
          right: -20%;
          animation-delay: -3s;
        }

        @keyframes float-main {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }

        @keyframes float-badge {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0px); }
        }

        .fc-icon {
          font-size: 28px;
          background: rgba(255,255,255,0.8);
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .fc-text {
          display: flex;
          flex-direction: column;
          text-align: left;
        }

        .fc-val {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 20px;
          line-height: 1.2;
          color: var(--text-primary);
        }

        .fc-lbl {
          font-size: 13px;
          color: var(--muted);
          font-weight: 500;
        }

        @media (max-width: 1023px) {
          .hero {
            padding-top: 130px;
          }
          .hero-visual {
            max-width: 400px;
          }
          .float-1 {
            left: -10%;
          }
          .float-2 {
            right: -10%;
          }
          .hero h1 {
            font-size: 38px;
          }
          .hero-sub {
            font-size: 16px;
          }
        }
        
        @media (max-width: 767px) {
          .hero { padding-top: 130px; min-height: auto; padding-bottom: 60px; }
          .hero-visual {
            max-width: 280px;
          }
          .hero-badge {
            font-size: 11.5px;
            padding: 6px 14px;
            white-space: nowrap;
          }
          .badge-icon { font-size: 14px; }
          .hero h1 {
            font-size: 28px;
            line-height: 1.35;
          }
          .hero-trust-chips { gap: 8px; }
          .trust-chip { font-size: 11px; padding: 5px 10px; }
          .glass-card-floating {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}
