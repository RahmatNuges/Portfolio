import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Kalau saya sudah punya website, apakah tetap perlu audit?',
      a: 'Sangat disarankan. Audit membantu Anda mengetahui apakah website Anda saat ini sudah optimal dalam membangun trust signal, mengarahkan CTA booking WhatsApp dengan benar, dan siap bersaing untuk SEO lokal.',
    },
    {
      q: 'Audit gratis ini mencakup apa saja?',
      a: 'Kami menganalisis kesiapan alur booking, kejelasan penataan layanan, penempatan trust signal (profil dokter & ulasan), optimasi mobile speed, serta kesiapan Google Maps.',
    },
    {
      q: 'Apa bedanya website yang terlihat bagus dengan website yang benar-benar membantu booking?',
      a: 'Website yang sekadar bagus hanya fokus pada estetika visual. Website yang membantu booking dirancang dengan penataan informasi yang sistematis, CTA yang konsisten, dan kemudahan alur komunikasi WhatsApp.',
    },
    {
      q: 'Kalau saya belum siap SEO bulanan, apakah masih bisa mulai dari audit atau pondasi website dulu?',
      a: 'Tentu saja. Anda bisa memprioritaskan pembuatan website terlebih dahulu melalui paket Pondasi Klinik. Layanan SEO & Conversion Care bulanan dapat diaktifkan kapan saja saat Anda siap.',
    },
    {
      q: 'Apakah SEO langsung ranking 1?',
      a: 'Tidak ada SEO yang bisa menjamin ranking 1 secara instan. Yang kami bantu adalah membangun pondasi website agar lebih siap bersaing secara organik di pencarian lokal.',
    },
    {
      q: 'Berapa lama pengerjaan website?',
      a: 'Tergantung paket dan kelengkapan aset. Setelah DP dan brief lengkap, kami berikan timeline pengerjaan yang jelas.',
    },
    {
      q: 'Kami tidak punya staf IT. Siapa yang urus website-nya?',
      a: 'Melalui layanan SEO & Conversion Care bulanan, tim NAIKIN bertindak sebagai tim IT eksternal klinik Anda. Semua update, perbaikan, dan optimasi ditangani kami.',
    },
    {
      q: 'Kenapa SEO & Conversion Care bulanan itu penting?',
      a: 'Peringkat Google bersifat dinamis dan kompetitor terus melakukan pembaruan. Care plan bulanan memastikan website Anda tetap aman, aktif, teroptimasi, dan terus relevan di mata Google.',
    },
    {
      q: 'Bisa pakai domain lama?',
      a: 'Bisa, selama akses domain/hosting tersedia. Jika belum punya, kami bantu arahkan.',
    },
    {
      q: 'Apa bedanya paket Pondasi Klinik dan Pondasi Klinik Plus?',
      a: 'Pondasi Klinik cocok untuk klinik yang ingin mulai punya website profesional pertama (5 halaman). Pondasi Klinik Plus cocok untuk klinik dengan banyak layanan yang butuh halaman spesifik per-treatment dan SEO lokal lebih mendalam (hingga lebih dari 12 halaman).',
    },
    {
      q: 'Bisa terhubung ke WhatsApp?',
      a: 'Bisa. Semua website kami arahkan ke WhatsApp klinik agar calon pasien lebih mudah bertanya atau booking.',
    },
    {
      q: 'Apakah bisa revisi?',
      a: 'Bisa. Revisi dilakukan sesuai scope paket. Paket Pondasi Klinik Plus mendapatkan unlimited revisi.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i);
  };

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="section-label">FAQ</p>
          <h2>Pertanyaan yang Sering Ditanyakan</h2>
        </div>

        <div className="faq-list" data-aos="fade-up">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'active' : ''}`}
              onClick={() => toggle(i)}
            >
              <div className="faq-question">
                <span>{faq.q}</span>
                <ChevronDown
                  size={20}
                  className={`faq-chevron ${openIndex === i ? 'rotated' : ''}`}
                />
              </div>
              <div className={`faq-answer ${openIndex === i ? 'open' : ''}`}>
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq {
          background: linear-gradient(180deg, #EFF6FF 0%, #FFFFFF 100%);
        }
        .faq-list {
          max-width: 760px;
          margin: 0 auto;
        }
        .faq-item {
          border-bottom: 1px solid var(--border);
          cursor: pointer;
          transition: border-color 200ms ease;
        }
        .faq-item.active {
          border-left: 3px solid var(--accent);
          padding-left: 20px;
        }
        .faq-question {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 0;
          gap: 16px;
        }
        .faq-question span {
          font-weight: 600;
          font-size: 16px;
          color: var(--text-primary);
          transition: color 180ms ease;
        }
        .faq-item.active .faq-question span {
          color: var(--accent);
        }
        .faq-chevron {
          flex-shrink: 0;
          color: var(--muted);
          transition: transform 250ms ease;
        }
        .faq-chevron.rotated {
          transform: rotate(180deg);
        }
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 300ms ease, padding 300ms ease;
        }
        .faq-answer.open {
          max-height: 300px;
          padding-bottom: 20px;
        }
        .faq-answer p {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
        }
      `}</style>
    </section>
  );
}
