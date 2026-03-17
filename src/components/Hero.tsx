import { Search, MessageCircle, TrendingUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 4500);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="hero" id="hero">
      {/* Background Blobs for True Glassmorphism Refraction */}
      <div className="blob blob-blue hero-blob-1" />
      <div className="blob blob-cyan hero-blob-2" />
      <div className="blob blob-purple hero-blob-3" />

      <div className="container hero-inner">
        <div className="hero-content" data-aos="fade-up">
          {/* Glass Badge */}
          <div className="liquid-glass hero-badge">
            <Search className="badge-icon text-accent" size={16} /> 97% pencarian produk dimulai dari Google
          </div>

          <h1>Bisnis Kamu Layak Ada di <span className="text-gradient">Halaman Pertama Google</span></h1>

          <p className="hero-sub hero-sub-desktop">
            Kami bantu bisnis kamu ditemukan oleh orang yang sudah siap beli, bukan sekadar punya website yang nganggur.
          </p>
          <p className="hero-sub hero-sub-mobile">
            Naik peringkat, Naik Traffic, Naik Omzet
          </p>

          <div className="hero-ctas">
            <a
              href="https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20ingin%20konsultasi%20gratis!"
              className="btn-primary"
            >
              <MessageCircle size={20} /> Chat WhatsApp Sekarang
            </a>
            <a href="#portofolio" className="btn-ghost">
              Lihat Portofolio Kami
            </a>
          </div>

          <div className="hero-proof liquid-glass-card">
            <div className="proof-item">
              <strong>75%</strong>
              <span>Konsumen menilai bisnis dari websitenya</span>
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <strong>92%</strong>
              <span>Klik jatuh ke Halaman 1 Google</span>
            </div>
            <div className="proof-sep" />
            <div className="proof-item">
              <strong>&lt; 1 Jam</strong>
              <span>Respons kami</span>
            </div>
          </div>
        </div>

        <div className="hero-visual" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-image-wrapper">
            {/* Decorative elements around image */}
            <div className="glass-card-floating float-1 liquid-glass">
              <div className="fc-icon"><TrendingUp size={24} color="#359EFF" /></div>
              <div className="fc-text">
                <span className="fc-val">+240%</span>
                <span className="fc-lbl">Traffic Growth</span>
              </div>
            </div>

            <div className="glass-card-floating float-2 liquid-glass">
              <div className="fc-icon">
                <svg viewBox="0 0 24 24" width="24" height="24" className="google-icon">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </div>
              <div className="fc-text">
                <span className="fc-val">Higher Rank</span>
                <span className="fc-lbl">on Google Search</span>
              </div>
            </div>

            <div className="slider-container">
              <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 50}%)` }}>
                <div className="slide">
                  <img src="/hero-section1.webp" alt="NAIKIN Dashboard Analytics" className="main-hero-img" onError={(e) => {
                    (e.target as HTMLImageElement).src = "/hero-image.png";
                  }} />
                </div>
                <div className="slide">
                  <img src="/team-image.png" alt="NAIKIN Team" className="main-hero-img" />
                </div>
              </div>
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
          background: linear-gradient(135deg, #FAFCFF 0%, #F0F6FF 100%);
          padding-top: 100px;
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
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 60px;
          align-items: center;
          position: relative;
          z-index: 10;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          gap: 28px;
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
          max-width: 600px;
          line-height: 1.1;
        }

        .text-gradient {
          background: linear-gradient(135deg, #359EFF 0%, #00DDFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          font-size: 19px;
          line-height: 1.7;
          max-width: 540px;
          color: var(--muted);
        }

        .hero-sub-mobile {
          display: none;
        }

        .hero-ctas {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 8px;
        }

        .hero-proof {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          padding: 24px 32px;
          margin-top: 24px;
          width: 100%;
          max-width: 600px;
        }

        .proof-item {
          display: flex;
          flex-direction: column;
          flex: 1; /* Make all items exactly the same width */
        }

        .proof-item strong {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 20px;
          color: var(--text-primary);
          line-height: 1.2;
          white-space: nowrap;
          margin-bottom: 4px;
        }

        .proof-item span {
          font-size: 13px;
          color: var(--muted);
          font-weight: 500;
          line-height: 1.4;
        }

        .proof-sep {
          width: 1px;
          height: auto;
          align-self: stretch;
          background: rgba(0,0,0,0.1);
          margin-top: 8px;
          margin-bottom: 8px;
        }

        .hero-visual {
          position: relative;
        }

        .hero-image-wrapper {
          position: relative;
          z-index: 10;
        }

        .slider-container {
          width: 100%;
          aspect-ratio: 3 / 4;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          z-index: 5;
          box-shadow: 0 32px 80px rgba(15, 25, 35, 0.15);
        }

        .slider-track {
          display: flex;
          width: 200%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .slide {
          width: 50%;
          height: 100%;
          flex-shrink: 0;
        }

        .main-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .glass-card-floating {
          position: absolute;
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 16px 24px;
          /* Animation for floating effect */
          animation: float 6s ease-in-out infinite;
        }

        .float-1 {
          top: 10%;
          left: -10%;
          animation-delay: 0s;
        }

        .float-2 {
          bottom: 15%;
          right: -10%;
          animation-delay: -3s;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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
          .hero-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
          .hero-content {
            align-items: center;
            text-align: center;
          }
          .hero h1 { max-width: 100%; }
          .hero-sub { max-width: 100%; }
          .hero-ctas { justify-content: center; width: 100%; }
          .hero-proof { width: 100%; justify-content: space-between; padding: 20px; }
          .glass-card-floating { display: none; } /* Hide floating cards on tablet/mobile for clean layout */
          .main-hero-img { transform: none; box-shadow: none; }
          .main-hero-img:hover { transform: none; }
        }
        
        @media (max-width: 767px) {
          .hero-sub-desktop { display: none; }
          .hero-sub-mobile { display: block; }
          .hero { padding-top: 120px; min-height: auto; padding-bottom: 60px; }
          .hero-badge {
            font-size: 11.5px;
            padding: 6px 14px;
            white-space: nowrap;
          }
          .badge-icon { font-size: 14px; }
          .hero-proof { flex-wrap: wrap; gap: 16px; justify-content: center; padding: 16px; }
          .proof-sep { display: none; }
          .proof-item { width: 45%; align-items: center; }
        }
      `}</style>
    </section>
  );
}
