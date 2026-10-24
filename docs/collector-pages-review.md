# Halaman informasi Collector — 24 Oktober 2026

Permintaan: langsung tambahkan halaman Collector, Privasi dan Ketentuan. Pengguna menyerahkan rekomendasi kebijakan kepada agen. Implementasi lokal saja; tidak push/deploy atau mengubah DNS/VPS/OAuth.

## Rencana dan hasil
- [x] HTML statis public/collector/index.html, public/privacy/index.html, public/terms/index.html agar isi dan metadata tersedia tanpa JS.
- [x] Stylesheet public/collector-pages.css mengikuti warna existing dan layout dokumen; tautan silang, logo, kembali ke beranda, navigasi keyboard dan aturan layar kecil.
- [x] Tautan ketiga halaman di Footer.tsx existing. Homepage tetap menggunakan implementasi existing.
- [x] Build produksi. Pemeriksaan isi HTML, canonical, tautan lokal dan output build.
- [ ] Uji visual ponsel dan persetujuan versi sebelum live.

## Kebijakan yang diusulkan
Data aktif selama kerja sama dan maksimal90hari setelah berakhir; penghapusan lebihawal dapat diminta; pengecualian kewajibanhukum; backup mengikuti siklus penyedia. Bukan bukti auto-deletion aktif. DataGoogle tidakdijual/untukadtargeting/pelatihanmodelAIumum. BantuanAI hanya berizin dan jika ketentuan/pengaturan penyedia mendukung pembatasan. Konfirmasi pengaturanAI dan penangananbackup/retensi sebelum publikasi; mekanisme operasional90hari belum dibuat. Tidak menjanjikan enkripsi atau audit yang belum diverifikasi. Mencakup Tencent/n8n/Supabase, laporan GA4/GSC, OAuth, pencabutan akses dan kontakexisting.

## Pemeriksaan
npm run build lulus. TypeScript melaporkan enam TS6133 pada Hero/Services existing yang tidak berubah. Tidak memasang dependency atau menambahkan tracking baru pada halaman statis. Preview lokal http://127.0.0.1:4173/collector/ (selama previewserveraktif).

## Rollback
Hapus empat artifact public baru dan revert hanya penambahan footer. Tidak ada perubahan live atau commit agen.
