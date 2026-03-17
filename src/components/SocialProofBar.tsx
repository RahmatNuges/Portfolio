export default function SocialProofBar() {
  const logos = [
    'Klien UMKM',
    'Brand F&B',
    'Studio Wellness',
    'Konsultan',
    'Properti',
    'Klinik',
  ];

  return (
    <section className="social-proof-bar">
      <div className="container social-proof-inner">
        <span className="social-proof-label">Dipercaya oleh bisnis-bisnis yang serius tumbuh:</span>
        <div className="social-proof-logos">
          {logos.map((name, i) => (
            <div key={i} className="social-proof-logo-item">
              <div className="social-proof-logo-placeholder">
                {name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .social-proof-bar {
          background: #F7F8FA;
          border-top: 1px solid #E5E7EB;
          border-bottom: 1px solid #E5E7EB;
          padding: 28px 0;
        }
        .social-proof-inner {
          display: flex;
          align-items: center;
          gap: 40px;
          overflow: hidden;
        }
        .social-proof-label {
          font-size: 13px;
          font-weight: 500;
          color: var(--muted);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .social-proof-logos {
          display: flex;
          gap: 32px;
          align-items: center;
          overflow-x: auto;
          scrollbar-width: none;
          -ms-overflow-style: none;
          flex: 1;
        }
        .social-proof-logos::-webkit-scrollbar {
          display: none;
        }
        .social-proof-logo-item {
          flex-shrink: 0;
        }
        .social-proof-logo-placeholder {
          background: #edeef0ff;
          border-radius: 8px;
          padding: 8px 20px;
          font-size: 13px;
          font-weight: 600;
          color: #359EFF;
          white-space: nowrap;
          opacity: 1;
        }

        @media (max-width: 767px) {
          .social-proof-inner {
            flex-direction: column;
            gap: 16px;
            text-align: center;
          }
          .social-proof-label {
            white-space: normal;
            font-size: 12px;
          }
          .social-proof-logos {
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
