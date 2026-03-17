import { ArrowUpRight } from 'lucide-react';

export default function Portfolio() {
  const projects = [
    {
      title: 'Renie Dent',
      type: 'Klinik Gigi',
      image: '/portfolio/renie-dent.webp',
      link: 'https://reniedent.id/'
    },
    {
      title: 'Arsiteku',
      type: 'Portfolio Project',
      image: '/portfolio/Arsitek.webp',
      link: 'https://arsiteku.vercel.app/'
    },
    {
      title: 'Toto Dental',
      type: 'Klinik Gigi',
      image: '/portfolio/klinik_gigi.webp',
      link: 'https://klinikgigi-three.vercel.app/'
    },
  ];

  return (
    <section className="portfolio section" id="portofolio">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">PORTOFOLIO</p>
          <h2>Hasil Nyata Klien Kami</h2>
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
                <img src={p.image} alt={p.title} className="portfolio-img" />
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
                </div>
                <div className="portfolio-btn">
                  Lihat Website <ArrowUpRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="portfolio-footer" data-aos="fade-up">
          <p className="footer-note">Lebih dari 150+ bisnis telah bertumbuh bersama kami</p>
          <a href="#" className="btn-outline">Lihat Selengkapnya</a>
        </div>
      </div>

      <style>{`
        .portfolio {
          background: #0F1923;
          padding: 100px 0;
        }

        .portfolio .section-label { color: var(--accent); }
        .portfolio h2 { color: white; margin-bottom: 60px; }

        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
          margin-bottom: 60px;
        }

        .portfolio-card {
          background: #1A242D;
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
          background: #232D37;
          border-color: rgba(53, 158, 255, 0.3);
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
          align-items: center;
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
        }

        .portfolio-card:hover .portfolio-btn {
          background: var(--accent);
          color: white;
        }

        .portfolio-footer {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .footer-note {
          color: rgba(255, 255, 255, 0.4);
          font-size: 15px;
        }

        .btn-outline {
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 14px 32px;
          border-radius: 100px;
          font-weight: 600;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-outline:hover {
          background: white;
          color: black;
          border-color: white;
        }

        @media (max-width: 991px) {
          .portfolio-grid { gap: 24px; }
          .info-title { font-size: 18px; }
          .portfolio-btn { padding: 8px 16px; font-size: 12px; }
        }

        @media (max-width: 767px) {
          .portfolio-grid { grid-template-columns: 1fr; }
          .portfolio { padding: 60px 0; }
          .portfolio-info { flex-direction: row; align-items: center; justify-content: space-between; gap: 12px; }
          .info-title { font-size: 18px; }
          .portfolio-btn { width: auto; font-size: 12px; padding: 8px 16px; }
        }
      `}</style>
    </section>
  );
}
