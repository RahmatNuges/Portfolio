import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const links = [
    { label: 'Layanan', href: '#layanan' },
    { label: 'Portofolio', href: '#portofolio' },
    { label: 'Harga', href: '#harga' },
    { label: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <>
      <nav className={`navbar liquid-glass-nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-inner container">
          <a href="#" className="navbar-brand">
            <img src="/LogoHeader.svg" alt="NAIKIN" className="navbar-logo-img" />
            <div className="brand-text-container">
              <span className="brand-name">NAIKIN</span>
              <span className="brand-tagline">NAIKIN BISNISMU SEKARANG</span>
            </div>
          </a>

          <div className="navbar-links">
            {links.map(l => (
              <a key={l.href} href={l.href} className="navbar-link">{l.label}</a>
            ))}
          </div>

          <a href="https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20ingin%20konsultasi%20gratis!" className="btn-primary navbar-cta">
            Konsultasi Gratis
          </a>

          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
            <span className={`hamburger-line ${menuOpen ? 'open' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${menuOpen ? 'active' : ''}`}>
        <div className="mobile-menu-content">
          {links.map(l => (
            <a key={l.href} href={l.href} className="mobile-menu-link" onClick={handleLinkClick}>
              {l.label}
            </a>
          ))}
          <a
            href="https://wa.me/6282342310221?text=Halo%20NAIKIN%2C%20saya%20ingin%20konsultasi%20gratis!"
            className="btn-primary"
            style={{ marginTop: '32px', width: '100%', justifyContent: 'center' }}
            onClick={handleLinkClick}
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 16px;
          left: 50%;
          transform: translateX(-50%);
          width: calc(100% - 32px);
          max-width: 1160px;
          height: 72px;
          z-index: 1000;
          border-radius: 100px;
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        
        .navbar.scrolled {
          top: 12px;
          height: 64px;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          padding: 0 12px 0 24px;
        }
        
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
        }

        .navbar-logo-img {
          height: 36px;
          width: auto;
          display: block;
        }

        .brand-text-container {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .brand-name {
          font-family: 'Inter', sans-serif;
          font-weight: 900;
          font-size: 22px;
          color: #000000;
          letter-spacing: -0.5px;
          text-transform: uppercase;
        }

        .brand-tagline {
          font-family: 'Inter', sans-serif;
          font-weight: 700;
          font-size: 9.5px;
          color: #359EFF;
          letter-spacing: 0.8px;
          margin-top: -1px;
          text-transform: uppercase;
        }

        .navbar-links {
          display: flex;
          gap: 40px;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .navbar-link {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 15px;
          color: var(--text-primary);
          transition: color 0.2s ease;
          position: relative;
        }
        
        .navbar-link:hover {
          color: var(--accent);
        }

        .navbar-cta {
          padding: 12px 28px;
          font-size: 14px;
          box-shadow: none;
        }

        .navbar-hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          padding: 10px;
          border-radius: 50%;
          background: rgba(0,0,0,0.05);
        }
        
        .hamburger-line {
          display: block;
          width: 20px;
          height: 2px;
          background: var(--text-primary);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        
        .hamburger-line.open:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-line.open:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }

        /* Mobile overlay */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(40px) saturate(200%);
          -webkit-backdrop-filter: blur(40px) saturate(200%);
          z-index: 999;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }
        .mobile-menu-overlay.active {
          opacity: 1;
          pointer-events: all;
        }
        .mobile-menu-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 32px;
          width: 100%;
          max-width: 300px;
        }
        .mobile-menu-link {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 32px;
          color: var(--text-primary);
          transition: color 0.2s ease;
        }
        .mobile-menu-link:hover { color: var(--accent); }

        @media (max-width: 1023px) {
          .navbar-links { display: none; }
          .navbar-inner { padding: 0 16px 0 24px; }
        }
        
        @media (max-width: 767px) {
          .navbar { top: 12px; height: 64px; }
          .navbar-cta { display: none; }
          .navbar-hamburger { display: flex; }
          .navbar-logo-img { height: 24px; }
        }
      `}</style>
    </>
  );
}
