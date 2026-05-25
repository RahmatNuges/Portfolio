import { useState } from 'react';
import { CheckCircle, Send } from 'lucide-react';

export default function AuditSection() {
  const [formData, setFormData] = useState({
    nama: '',
    namaKlinik: '',
    jenisKlinik: '',
    kota: '',
    sudahWebsite: '',
    link: '',
    whatsapp: '',
    kebutuhan: '',
  });

  const auditPoints = [
    'Tampilan website atau profil digital klinik',
    'Kejelasan layanan dan treatment',
    'CTA WhatsApp / booking',
    'Google Maps / Google Business Profile',
    'Kepercayaan: dokter, testimoni, foto klinik',
    'Struktur halaman untuk SEO lokal',
    'Kompetitor lokal secara umum',
    'Rekomendasi improvement prioritas',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Halo NAIKIN, saya ingin audit digital klinik gratis.%0A%0ANama: ${formData.nama}%0ANama Klinik: ${formData.namaKlinik}%0AJenis: ${formData.jenisKlinik}%0AKota: ${formData.kota}%0ASudah punya website: ${formData.sudahWebsite}%0ALink: ${formData.link || '-'}%0AKebutuhan: ${formData.kebutuhan}`;
    window.open(`https://wa.me/6282342310221?text=${message}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="audit section" id="audit">
      <div className="container">
        <div className="audit-grid">
          <div className="audit-info" data-aos="fade-up">
            <p className="section-label">AUDIT GRATIS</p>
            <h2>Mulai dari Audit Klinik agar Tahu Prioritas yang Paling Penting</h2>
            <p className="audit-sub">
              Kami bantu cek website, Google Maps, Instagram, dan alur booking klinik Anda lalu menunjukkan bagian mana yang paling perlu dibenahi lebih dulu.
            </p>

            <div className="audit-checklist">
              <h3>Apa yang Kami Audit?</h3>
              <ul>
                {auditPoints.map((point, i) => (
                  <li key={i}>
                    <CheckCircle size={16} className="audit-check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="audit-form-wrapper" data-aos="fade-up" data-aos-delay="100">
            <form className="audit-form liquid-glass-card" onSubmit={handleSubmit}>
              <h3>Isi Form Singkat</h3>
              
              <div className="form-group">
                <label htmlFor="audit-nama">Nama</label>
                <input type="text" id="audit-nama" name="nama" placeholder="Nama Anda" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="audit-klinik">Nama Klinik</label>
                <input type="text" id="audit-klinik" name="namaKlinik" placeholder="Nama klinik Anda" required onChange={handleChange} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="audit-jenis">Jenis Klinik</label>
                  <select id="audit-jenis" name="jenisKlinik" required onChange={handleChange} defaultValue="">
                    <option value="" disabled>Pilih jenis</option>
                    <option value="Gigi">Klinik Gigi</option>
                    <option value="Kecantikan">Klinik Kecantikan</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="audit-kota">Kota</label>
                  <input type="text" id="audit-kota" name="kota" placeholder="Kota klinik" required onChange={handleChange} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="audit-website">Sudah punya website?</label>
                <select id="audit-website" name="sudahWebsite" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Pilih</option>
                  <option value="Ya">Ya</option>
                  <option value="Belum">Belum</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="audit-link">Link (Instagram / Google Maps / Website)</label>
                <input type="text" id="audit-link" name="link" placeholder="https://... (opsional)" onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="audit-whatsapp">Nomor WhatsApp</label>
                <input type="tel" id="audit-whatsapp" name="whatsapp" placeholder="08xxxxxxxxxx" required onChange={handleChange} />
              </div>

              <div className="form-group">
                <label htmlFor="audit-kebutuhan">Kebutuhan Utama</label>
                <select id="audit-kebutuhan" name="kebutuhan" required onChange={handleChange} defaultValue="">
                  <option value="" disabled>Pilih kebutuhan</option>
                  <option value="Website baru">Website baru</option>
                  <option value="Perbaiki website lama">Perbaiki website lama</option>
                  <option value="SEO">SEO</option>
                  <option value="Tampil lebih premium">Tampil lebih premium</option>
                </select>
              </div>

              <button type="submit" className="btn-primary audit-submit">
                <Send size={18} /> Minta Audit Klinik
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .audit {
          background: linear-gradient(135deg, #EFF6FF 0%, #E0F2FE 100%);
        }
        .audit-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }
        .audit-info h2 {
          font-size: 36px;
          margin-bottom: 20px;
        }
        .audit-sub {
          font-size: 17px;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 40px;
        }
        .audit-checklist h3 {
          font-size: 20px;
          margin-bottom: 20px;
        }
        .audit-checklist ul {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        .audit-checklist li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          color: var(--text-primary);
          font-weight: 500;
        }
        .audit-check-icon {
          color: var(--accent);
          flex-shrink: 0;
        }

        .audit-form {
          padding: 40px !important;
        }
        .audit-form h3 {
          font-size: 22px;
          margin-bottom: 28px;
          text-align: center;
        }
        .form-group {
          margin-bottom: 20px;
        }
        .form-group label {
          display: block;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
        }
        .form-group input,
        .form-group select {
          width: 100%;
          padding: 12px 16px;
          border: 1.5px solid var(--border);
          border-radius: 12px;
          font-family: var(--font-body);
          font-size: 15px;
          color: var(--text-primary);
          background: rgba(255,255,255,0.8);
          transition: border-color 0.2s ease;
          outline: none;
        }
        .form-group input:focus,
        .form-group select:focus {
          border-color: var(--accent);
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }
        .form-group input::placeholder {
          color: #9CA3AF;
        }
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .audit-submit {
          width: 100%;
          justify-content: center;
          margin-top: 8px;
        }

        @media (max-width: 1023px) {
          .audit-grid { grid-template-columns: 1fr; gap: 48px; }
          .audit-info { text-align: center; }
          .audit-checklist ul { max-width: 400px; margin: 0 auto; }
          .audit-checklist li { text-align: left; }
        }
        @media (max-width: 767px) {
          .audit-info h2 { font-size: 28px; }
          .form-row { grid-template-columns: 1fr; }
          .audit-form { padding: 28px !important; }
        }
      `}</style>
    </section>
  );
}
