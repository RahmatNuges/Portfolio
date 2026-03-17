export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Logo + Tagline */}
          <div className="footer-col footer-brand">
            <a href="#" className="footer-logo">
              <img src="/LogoFooter.svg" alt="NAIKIN" className="footer-logo-img" />
            </a>
            <p className="footer-tagline">Naik peringkat. Naik traffic. Naik omzet.</p>
            <div className="footer-socials">
              <a href="#" aria-label="Instagram" className="footer-social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="footer-social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="TikTok" className="footer-social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Layanan */}
          <div className="footer-col">
            <h4 className="footer-heading">Layanan</h4>
            <ul className="footer-links">
              <li><a href="#layanan">Pembuatan Website</a></li>
              <li><a href="#layanan">SEO On-Page</a></li>
              <li><a href="#layanan">SEO Off-Page</a></li>
              <li><a href="#kontak">Konsultasi Gratis</a></li>
            </ul>
          </div>

          {/* Column 3: Perusahaan */}
          <div className="footer-col">
            <h4 className="footer-heading">Perusahaan</h4>
            <ul className="footer-links">
              <li><a href="#">Tentang Kami</a></li>
              <li><a href="#portofolio">Portofolio</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Karir</a></li>
            </ul>
          </div>

          {/* Column 4: Kontak */}
          <div className="footer-col">
            <h4 className="footer-heading">Kontak</h4>
            <ul className="footer-links footer-contact-list">
              <li>💬 WhatsApp: 0823-4231-0221</li>
              <li>📧 naikin.bisnis@gmail.com</li>
              <li>📍 DI Yogyakarta</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NAIKIN. Semua hak dilindungi.</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          background: #0F1923;
          padding: 80px 0 0;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 60px;
          padding-bottom: 60px;
        }
        .footer-logo {
          display: block;
          margin-bottom: 24px;
        }
        .footer-logo-img {
          height: 32px;
          width: auto;
        }
        .footer-tagline {
          color: #9CA3AF;
          font-size: 15px;
          margin-bottom: 24px;
          line-height: 1.6;
        }
        .footer-socials {
          display: flex;
          gap: 16px;
        }
        .footer-social-link {
          color: #9CA3AF;
          background: rgba(255,255,255,0.05);
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .footer-social-link:hover {
          color: #FFFFFF;
          background: var(--accent);
          transform: translateY(-2px);
        }
        .footer-heading {
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 16px;
          color: #FFFFFF;
          margin-bottom: 24px;
          letter-spacing: 0.5px;
        }
        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-links li {
          font-size: 15px;
          color: #9CA3AF;
        }
        .footer-links a {
          color: #9CA3AF;
          transition: color 0.2s ease;
        }
        .footer-links a:hover {
          color: #FFFFFF;
        }
        .footer-contact-list li {
          font-size: 15px;
          color: #9CA3AF;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.1);
          padding: 32px 0;
          text-align: center;
        }
        .footer-bottom p {
          font-size: 14px;
          color: #6B7280;
        }

        @media (max-width: 1023px) {
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 48px; }
        }
        @media (max-width: 767px) {
          .footer-grid { grid-template-columns: 1fr; gap: 40px; }
          .site-footer { padding-top: 64px; }
        }
      `}</style>
    </footer>
  );
}
