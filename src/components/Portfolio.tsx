import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Klinik Jelita',
      type: 'Klinik Kecantikan & Anti-Aging',
      image: '/portfolio/klinik-jelita.webp',
      link: 'https://klinik-jelita.vercel.app/',
      desc: 'Website klinik kecantikan premium dan anti-aging dengan kuis diagnostik kulit interaktif, before/after slider, dan sistem reservasi online terintegrasi.',
    },
    {
      title: 'Renie Dent',
      type: 'Klinik Gigi Anak — Banjarmasin',
      image: '/portfolio/renie-dent.webp',
      link: 'https://reniedent.id/',
      desc: 'Website klinik gigi anak yang dirancang mobile-friendly, mengedepankan atmosfer ramah anak, dengan struktur layanan informatif dan SEO lokal.',
    },
    {
      title: 'Toto Dental',
      type: 'Klinik Gigi Premium',
      image: '/portfolio/klinik_gigi.webp',
      link: 'https://klinikgigi-three.vercel.app/',
      desc: 'Website klinik gigi premium dengan standar desain dan struktur website klinik gigi modern.',
    },
  ];

  return (
    <section className="portfolio section" id="portofolio">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">PORTFOLIO</p>
          <h2>Contoh Website Klinik yang Sudah Kami Kerjakan</h2>
        </div>

        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <a 
              key={i} 
              href={p.link} 
              className="portfolio-card" 
              data-aos="fade-up" 
              data-aos-delay={i * 100}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="portfolio-thumb">
                <img
                  src={p.image}
                  alt={p.title}
                  className="portfolio-img"
                  loading="lazy"
                  srcSet={`${p.image} 800w`}
                  sizes="(max-width: 767px) calc(100vw - 32px), (max-width: 991px) calc(50vw - 40px), calc(50vw - 64px)"
                />
                <div className="portfolio-overlay">
                  <div className="overlay-btn">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
              <div className="portfolio-info">
                <div className="info-main">
                  <span className="info-label">{p.type.toUpperCase()}</span>
                  <h3 className="info-title">{p.title}</h3>
                  <p className="info-desc">{p.desc}</p>
                </div>
                <div className="portfolio-btn">
                  Lihat Website <ArrowUpRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <style>{`
        .portfolio {
          background: #0F172A;
          padding: 100px 0;
        }

        .portfolio .section-label { color: var(--accent); }
        .portfolio h2 { color: white; margin-bottom: 60px; }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .portfolio-card {
          background: #131D31;
          border-radius: 24px;
          padding: 16px;
          transition: all 0.4s cubic-bezier(0.25, 1, 0.5, 1);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-decoration: none;
        }

        .portfolio-card:hover {
          transform: translateY(-10px);
          background: #1E293B;
          border-color: rgba(37, 99, 235, 0.3);
          box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
        }

        .portfolio-thumb {
          position: relative;
          aspect-ratio: 16 / 9;
          border-radius: 16px;
          overflow: hidden;
          background: #000;
        }

        .portfolio-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
          opacity: 1;
          object-position: top;
        }

        .portfolio-card:hover .portfolio-img {
          transform: scale(1.05);
        }

        .portfolio-overlay {
          position: absolute;
          inset: 0;
          background: rgba(15, 25, 35, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .portfolio-card:hover .portfolio-overlay {
          opacity: 1;
        }

        .overlay-btn {
          width: 50px;
          height: 50px;
          background: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
          transform: scale(0.8);
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .portfolio-card:hover .overlay-btn {
          transform: scale(1);
        }

        .portfolio-info {
          padding: 4px 8px 8px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .info-main {
          flex: 1;
        }

        .info-label {
          display: block;
          font-family: var(--font-body);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
          color: rgba(255, 255, 255, 0.4);
          margin-bottom: 4px;
        }

        .info-title {
          font-family: var(--font-display);
          font-size: 22px;
          font-weight: 700;
          color: white;
          line-height: 1.2;
          margin-bottom: 8px;
        }

        .info-desc {
          font-size: 13px;
          color: rgba(255, 255, 255, 0.5);
          line-height: 1.5;
        }

        .portfolio-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background: white;
          color: black;
          padding: 10px 20px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          transition: all 0.3s ease;
          white-space: nowrap;
          flex-shrink: 0;
          margin-top: 4px;
        }

        .portfolio-card:hover .portfolio-btn {
          background: var(--accent);
          color: white;
        }

        @media (max-width: 991px) {
          .portfolio-grid { gap: 24px; }
          .info-title { font-size: 18px; }
          .portfolio-btn { padding: 8px 16px; font-size: 12px; }
        }

        @media (max-width: 767px) {
          .portfolio-grid { grid-template-columns: 1fr; }
          .portfolio { padding: 60px 0; }
          .portfolio-info { flex-direction: column; align-items: stretch; gap: 12px; }
          .info-title { font-size: 18px; }
          .portfolio-btn { width: 100%; font-size: 12px; padding: 10px 16px; }
        }
      `}</style>
    </section>
  );
}
