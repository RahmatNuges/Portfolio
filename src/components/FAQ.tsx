import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      q: 'Berapa lama proses pembuatan website?',
      a: 'Untuk website profil standar, biasanya 7–14 hari kerja setelah briefing selesai. Website yang lebih kompleks bisa 3–4 minggu. Kami selalu kasih timeline yang jelas di awal, tidak ada kejutan di tengah jalan.',
    },
    {
      q: 'Apakah hasil SEO bisa dijamin?',
      a: 'Tidak ada yang bisa jamin posisi pasti di Google, siapapun yang bilang bisa, hati-hati. Yang kami jamin adalah: strategi yang benar, eksekusi yang konsisten, dan laporan yang transparan. Rata-rata klien kami melihat peningkatan signifikan dalam 3–6 bulan.',
    },
    {
      q: 'Saya tidak punya konten/foto, apakah bisa tetap dikerjakan?',
      a: 'Bisa! Kami bantu dari nol. NAIKIN punya tim copywriter dan gambar yang dibantu AI yang bisa menyiapkan konten awal. Kamu tinggal review dan approve.',
    },
    {
      q: 'Apakah biaya sudah termasuk hosting dan domain?',
      a: 'Ya, semua paket kami sudah all-in. Kamu sudah dapat domain (.com/.id) dan hosting berkecepatan tinggi untuk tahun pertama. Jadi kamu tinggal terima beres tanpa pusing biaya tambahan yang tersembunyi.',
    },
    {
      q: 'Bagaimana sistem pembayarannya?',
      a: 'DP 50% di awal, 50% setelah website selesai dan kamu approve. Untuk paket SEO bulanan, pembayaran di awal setiap bulan. Transfer bank atau e-wallet tersedia.',
    },
    {
      q: 'Saya berada di luar DI Yogyakarta, apakah NAIKIN bisa membantu?',
      a: 'Sangat bisa! Semua komunikasi bisa via WhatsApp, Zoom, atau email. Kami sudah handle klien dari Sabang sampai Merauke, lokasi bukan hambatan.',
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
          background: var(--white);
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
