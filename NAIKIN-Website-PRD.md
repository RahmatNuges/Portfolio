# Website PRD: NAIKIN
**Version**: 1.1 — Updated: Brand color biru #359EFF + Liquid Glass elements  
**Prepared by**: AI Website Designer + Copywriter  
**Date**: 11 Maret 2026

---

## 1. Project Overview

**Project Name**: NAIKIN  
**Tagline**: *Naik peringkat. Naik traffic. Naik omzet.*  
**Type**: Single-page site (dengan anchor navigation)  
**Primary Goal**: Pengunjung mengklik tombol WhatsApp untuk memulai konsultasi  
**Target Audience**: Pemilik UMKM, personal brand, dan tim marketing korporat di Indonesia yang ingin hadir secara digital dan mendominasi hasil pencarian Google.

---

## 2. Brand Identity

### Brand Personality
- **Friendly** — Berbicara seperti teman yang ahli, bukan sales yang agresif. Tidak pernah menghakimi level digital literasi klien.
- **Modern** — Desain bersih, tipografi tegas, dan visual yang mencerminkan brand yang mengikuti zaman.
- **Tech-savvy** — Menggunakan data dan angka nyata, bukan klaim kosong. Tahu cara kerja algoritma Google.
- **Approachable** — Tidak ada jargon yang membingungkan. Konsultasi terasa mudah dan tidak menyeramkan.
- **Results-driven** — Setiap kalimat mengarah pada satu hal: hasil nyata untuk bisnis klien.

### Brand Voice & Tone
Bicara langsung ke pembaca — singkat, jelas, dan penuh keyakinan. Tidak ada basa-basi korporat. Gunakan bahasa Indonesia yang segar dan natural, sesekali diselingi istilah teknis yang langsung dijelaskan. Nada bicara seperti konsultan muda yang jago di bidangnya: hangat, percaya diri, dan selalu fokus pada manfaat untuk klien.

### Aesthetic Direction
**Direction**: Modern / Tech-savvy dengan sentuhan Friendly + Liquid Glass UI  
**Rationale**: NAIKIN menyasar klien dari UMKM hingga korporat — butuh tampilan yang cukup profesional untuk enterprise, namun tetap tidak intimidatif bagi pemilik usaha kecil. Light theme dengan aksen biru #359EFF yang vibrant menciptakan kesan teknologi modern dan kepercayaan. Elemen liquid glass (frosted glass morphism ala Apple visionOS/iOS 26) pada navbar dan komponen kunci memberikan kesan premium, futuristik, dan cutting-edge yang membedakan NAIKIN dari kompetitor agensi lain.

---

## 3. Visual Design Specifications

### Color Palette
| Role | Name | Hex Code | Usage |
|------|------|----------|-------|
| Primary Background | Pure White | #FFFFFF | Page background, card surfaces |
| Secondary Background | Soft Blue-Gray | #F4F7FF | Alternating sections, input fields |
| Primary Text | Deep Ink | #0F1923 | Headings, body copy |
| **Brand Accent / CTA** | **NAIKIN Blue** | **#359EFF** | CTA buttons, highlights, hover states, badges, ikon aktif |
| Secondary Accent | Soft Sky | #E0F0FF | Section backgrounds, tag backgrounds, badge fills |
| Liquid Glass Base | Glass White | rgba(255,255,255,0.55) | Navbar, floating cards, glass panels |
| Liquid Glass Border | Glass Rim | rgba(255,255,255,0.75) | Border pada glass elements |
| Liquid Glass Shadow | Glass Depth | rgba(53,158,255,0.12) | Shadow biru pada glass elements |
| Muted Text | Cool Gray | #6B7280 | Subtext, captions, placeholder |
| Border | Light Gray | #E5E7EB | Card borders, dividers |
| CTA Final BG | NAIKIN Blue | #359EFF | Background section CTA Final |
| Footer BG | Deep Ink | #0F1923 | Background footer |

### Liquid Glass Design System
Liquid glass adalah estetik UI ala Apple visionOS / iOS 26 — elemen terasa seperti kaca cair: transparan, blur latar belakang, border bercahaya, dan bayangan yang lembut berwarna brand.

**CSS Dasar Liquid Glass:**
```css
/* Liquid Glass — Light */
.liquid-glass {
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(20px) saturate(180%);
  -webkit-backdrop-filter: blur(20px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.75);
  border-radius: 20px;
  box-shadow:
    0 8px 32px rgba(53, 158, 255, 0.10),
    0 1.5px 0px rgba(255,255,255,0.9) inset,
    0 -1px 0px rgba(53,158,255,0.08) inset;
}

/* Liquid Glass — Navbar Variant (lebih tipis) */
.liquid-glass-nav {
  background: rgba(255, 255, 255, 0.60);
  backdrop-filter: blur(24px) saturate(200%);
  -webkit-backdrop-filter: blur(24px) saturate(200%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.80);
  box-shadow:
    0 4px 24px rgba(53, 158, 255, 0.08),
    0 1px 0 rgba(255,255,255,0.95) inset;
}

/* Liquid Glass — Card Variant (lebih solid) */
.liquid-glass-card {
  background: rgba(255, 255, 255, 0.70);
  backdrop-filter: blur(16px) saturate(160%);
  -webkit-backdrop-filter: blur(16px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.80);
  border-radius: 24px;
  box-shadow:
    0 12px 40px rgba(53, 158, 255, 0.12),
    0 2px 0 rgba(255,255,255,0.95) inset;
}

/* Hover enhancement untuk glass elements */
.liquid-glass-card:hover {
  background: rgba(255, 255, 255, 0.80);
  box-shadow:
    0 20px 60px rgba(53, 158, 255, 0.18),
    0 2px 0 rgba(255,255,255,1) inset;
  transform: translateY(-4px);
  transition: all 0.25s ease;
}
```

**Elemen yang menggunakan Liquid Glass:**
1. **Navbar** — selalu glass dari scroll pertama (tidak transparent dulu)
2. **Hero Badge** — pill kecil "🚀 Website & SEO Agency Terpercaya" pakai glass
3. **Service Cards** — 2 card utama layanan
4. **Pricing Cards** — terutama card "Paling Populer"
5. **Testimoni Cards** — semua card testimoni
6. **CTA Floating WhatsApp Button** — glass variant dengan tint biru
7. **How It Works Steps** — nomor langkah dalam glass pill

**Background requirement untuk liquid glass:**
Agar efek glass terlihat indah, pastikan di belakang elemen glass ada **background yang berwarna / bergradient**. Rekomendasi:
- Hero section: gradient mesh biru-putih `radial-gradient(ellipse at 70% 50%, #C8E6FF 0%, #FFFFFF 60%)`
- Section Services: background `linear-gradient(135deg, #F4F7FF 0%, #E0F0FF 100%)`
- Section Testimoni: background `linear-gradient(180deg, #F4F7FF 0%, #FFFFFF 100%)`

### Typography
| Role | Font Name | Weight | Size (Desktop) | Size (Mobile) |
|------|-----------|--------|----------------|---------------|
| Display / H1 | Syne | 800 | 64px | 38px |
| Heading / H2 | Syne | 700 | 44px | 30px |
| Subheading / H3 | DM Sans | 600 | 24px | 20px |
| Body | DM Sans | 400 | 17px | 16px |
| Caption / Label | DM Sans | 400 | 13px | 12px |
| Button | DM Sans | 600 | 15px | 15px |

**Font Source**: Google Fonts  
**Import Link**:  
```html
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

### Spacing System
- Base unit: 8px
- Section padding (desktop): 100px top/bottom
- Section padding (mobile): 60px top/bottom
- Max content width: 1200px
- Column gutter: 24px
- Card padding: 32px

### Imagery Direction
Gunakan ilustrasi flat modern bergaya isometrik dengan palet warna yang selaras dengan brand (biru #359EFF, putih, abu-biru muda). Hindari foto stok generik orang-orang di kantor. Setiap visual harus merepresentasikan konsep digital — grafik naik, tampilan layar website, ikon SEO/search. Untuk portofolio, tampilkan screenshot mockup website di device (laptop/mobile) di atas surface dengan efek glass. Tambahkan subtle light flare / bokeh biru sebagai dekorasi background di Hero untuk memperkuat estetik liquid glass.

### Animation & Interaction Notes
- Fade-up entrance untuk setiap heading section saat scroll — delay 100ms, durasi 400ms, ease-out
- Counter animasi angka pada section statistik (misal: "150+ klien" menghitung naik saat terlihat)
- **Button hover**: background berubah ke #1a8de8, scale 1.02, transisi 180ms ease
- **Card hover (glass)**: `backdrop-filter blur` meningkat, shadow biru lebih dalam, translateY(-4px), transisi 250ms
- **Navbar**: selalu tampil sebagai glass dari awal — tidak berubah, namun shadow-nya lebih kuat setelah scroll 60px (`box-shadow` intensitas naik)
- **Liquid glass shimmer**: pada card glass, tambahkan pseudo-element `::after` dengan `background: linear-gradient(105deg, rgba(255,255,255,0) 40%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 60%)` yang bergerak dari kiri ke kanan saat hover (durasi 600ms) — efek cahaya menyapu
- WhatsApp floating button: muncul setelah 3 detik dengan bounce-in animation, sticky di pojok kanan bawah

---

## 4. Site Architecture

Urutan scroll (single-page dengan anchor link):

1. Navigation
2. Hero
3. Social Proof Bar (logo klien / angka kepercayaan)
4. Layanan (Services)
5. Cara Kerja (How It Works)
6. Portofolio / Case Study
7. Paket Harga (Pricing)
8. Testimoni Klien
9. FAQ
10. CTA Final (Kontak / WhatsApp)
11. Footer

---

## 5. Section-by-Section Specifications

---

### NAVIGATION

**Layout**: Full-width sticky header. Kiri: Logo teks "NAIKIN" bold berwarna NAIKIN Blue (#359EFF). Tengah: anchor nav links. Kanan: tombol CTA "Konsultasi Gratis". Mobile: logo kiri, hamburger kanan. Mobile menu: full-screen overlay dengan efek glass dan link tersusun vertikal.  
**Visual Notes**: **Selalu tampil sebagai Liquid Glass** dari awal halaman (tidak transparent). Gunakan `.liquid-glass-nav`: `background: rgba(255,255,255,0.60)`, `backdrop-filter: blur(24px) saturate(200%)`, `border-bottom: 1px solid rgba(255,255,255,0.80)`. Setelah scroll 60px: shadow biru sedikit lebih kuat `box-shadow: 0 4px 32px rgba(53,158,255,0.13)`. Height 68px desktop, 56px mobile. Mobile overlay menu juga pakai glass: `background: rgba(255,255,255,0.92)`, `backdrop-filter: blur(30px)`.

**Copy**:
> Logo: **NAIKIN**  
> Nav links: Layanan | Portofolio | Harga | FAQ  
> CTA Button: Konsultasi Gratis →

---

### HERO

**Layout**: Full-width, min-height 100vh. Dua kolom: Kiri 55% berisi badge + H1 + subheadline + dua CTA button + baris social proof. Kanan 45% berisi ilustrasi/mockup website di layar laptop dengan grafik naik. Background: gradient mesh biru-putih `radial-gradient(ellipse at 75% 45%, #C8E6FF 0%, #EBF5FF 35%, #FFFFFF 70%)` dengan 2–3 bokeh blur circle berwarna #359EFF opacity 15–20% sebagai dekorasi. Mobile: stacked vertikal, teks di atas, ilustrasi di bawah.  
**Visual Notes**: Badge kecil di atas headline pakai **Liquid Glass pill**: `background: rgba(255,255,255,0.65)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(53,158,255,0.25)`, teks biru #359EFF. CTA utama background NAIKIN Blue #359EFF, CTA sekunder ghost button border biru #359EFF.

**Copy**:
> **Badge**: 🚀 Website & SEO Agency Terpercaya
>
> **Headline**: Bisnis Kamu Layak Ada di Halaman Pertama Google
>
> **Subheadline**: NAIKIN bantu UMKM, personal brand, dan perusahaan tampil profesional di internet — dengan website keren dan SEO yang benar-benar bekerja.
>
> **Primary CTA**: Chat WhatsApp Sekarang
> **Secondary CTA**: Lihat Portofolio Kami
>
> **Social Proof**: ✓ 150+ klien puas &nbsp;|&nbsp; ✓ Rata-rata traffic naik 3x &nbsp;|&nbsp; ✓ Respons < 1 jam

---

### SOCIAL PROOF BAR

**Layout**: Full-width strip dengan background Soft Gray (#F7F8FA). Konten horizontal: label teks kiri + deretan logo klien (grayscale, opacity 60%) yang bisa di-scroll atau auto-scroll pada mobile.  
**Visual Notes**: Padding 28px vertical. Subtle border top dan bottom 1px solid #E5E7EB. Logo klien grayscale agar tidak mengganggu palet.

**Copy**:
> **Label**: Dipercaya oleh bisnis-bisnis yang serius tumbuh:
> [Logo 1] &nbsp; [Logo 2] &nbsp; [Logo 3] &nbsp; [Logo 4] &nbsp; [Logo 5] &nbsp; [Logo 6]
> *(Gunakan nama/logo klien nyata NAIKIN. Jika belum ada, gunakan placeholder: "Klien UMKM", "Brand F&B", "Toko Online", "Konsultan", "Properti", "Klinik")*

---

### LAYANAN (SERVICES)

**Layout**: 2 kolom besar (desktop) atau 1 kolom (mobile). Setiap layanan dalam card besar dengan ikon di atas, judul, deskripsi, dan list fitur dengan checkmark biru. Di bawah dua card utama, tambahkan baris "Add-on" dengan 3–4 item kecil horizontal.  
**Visual Notes**: Section background `linear-gradient(135deg, #F4F7FF 0%, #E0F0FF 100%)` agar glass effect terlihat. Card menggunakan **Liquid Glass Card** (`.liquid-glass-card`): `background: rgba(255,255,255,0.70)`, `backdrop-filter: blur(16px)`, `border: 1px solid rgba(255,255,255,0.80)`, `border-radius: 24px`. Hover: glass intensitas naik + translateY(-4px) + shimmer animation. Ikon: Lucide icons berwarna NAIKIN Blue #359EFF.

**Copy**:
> **Section Label**: APA YANG KAMI KERJAKAN
> **Section Title**: Dua Senjata Utama untuk Bisnis Kamu Online

> **Card 1 — Pembuatan Website**  
> 🖥️ *Website yang Menjual, Bukan Sekadar Ada*  
> Website bukan hanya kartu nama digital. Kami bangun website yang cepat, mobile-friendly, dan dirancang untuk mengubah pengunjung jadi pelanggan.  
> ✦ Desain custom sesuai brand  
> ✦ Loading super cepat (PageSpeed 90+)  
> ✦ Responsif di semua perangkat  
> ✦ Integrasi WhatsApp & Google Analytics  
> ✦ Gratis revisi hingga puas  

> **Card 2 — SEO (Search Engine Optimization)**  
> 🔍 *Muncul di Google Saat Orang Butuh Kamu*  
> Kami riset kata kunci, optimalkan konten, dan bangun otoritas website kamu — sehingga bisnis kamu ditemukan oleh orang yang tepat di waktu yang tepat.  
> ✦ Riset keyword mendalam  
> ✦ Optimasi on-page & teknikal SEO  
> ✦ Link building berkualitas  
> ✦ Laporan bulanan yang transparan  
> ✦ Strategi konten berbasis data  

> **Add-ons**:  
> + Copywriting halaman website &nbsp;|&nbsp; + Setup Google Business Profile &nbsp;|&nbsp; + Pemeliharaan & update website &nbsp;|&nbsp; + Konsultasi strategi digital

*(✦ checkmark icon menggunakan warna NAIKIN Blue #359EFF)*

---

### CARA KERJA (HOW IT WORKS)

**Layout**: 4 langkah horizontal (desktop) / vertikal dengan garis konektor (mobile). Setiap langkah: nomor besar berwarna mint, ikon, judul, deskripsi singkat. Nomor langkah terhubung dengan garis putus-putus horizontal.  
**Visual Notes**: Background putih. Nomor langkah font Syne 800 warna #E8FAF0 (sangat besar, dekoratif). Garis konektor: `border-top: 2px dashed #D1FAE5`.

**Copy**:
> **Section Label**: PROSESNYA SEDERHANA
> **Section Title**: Dari Chat Pertama ke Website Live

> **Step 1** — 💬 Konsultasi Gratis  
> Ceritakan bisnis kamu. Kami dengarkan, analisis, dan kasih rekomendasi jujur — tanpa biaya, tanpa tekanan.

> **Step 2** — 📋 Proposal & Strategi  
> Kami kirim proposal lengkap: scope pekerjaan, timeline, dan estimasi hasil yang bisa kamu harapkan.

> **Step 3** — 🛠️ Pengerjaan Transparan  
> Tim kami bekerja dengan update rutin. Kamu selalu tahu progress-nya — tidak ada yang disembunyikan.

> **Step 4** — 🚀 Launch & Pantau  
> Website live, SEO jalan. Kami terus pantau performa dan laporkan hasilnya setiap bulan.

---

### PORTOFOLIO / CASE STUDY

**Layout**: Grid 3 kolom (desktop), 2 kolom (tablet), 1 kolom (mobile). Setiap card menampilkan: mockup screenshot website di laptop/mobile frame, nama klien/industri, badge layanan yang digunakan, dan 1–2 hasil kunci (misal: "Traffic naik 240% dalam 3 bulan"). Di bawah grid, tombol "Lihat Semua Portofolio →".  
**Visual Notes**: Card dengan overflow hidden, border-radius 12px. Hover: overlay hijau semi-transparan muncul di atas gambar dengan teks "Lihat Detail →". Image object-fit: cover.

**Copy**:
> **Section Label**: HASIL NYATA
> **Section Title**: Klien Kami Naik, Bukan Sekadar Janji

> **Card 1**: [Screenshot website F&B]  
> 🍜 Industri: Kuliner & F&B  
> Layanan: Website + SEO  
> 📈 Reservasi online naik 180% dalam 60 hari

> **Card 2**: [Screenshot website toko online]  
> 👗 Industri: Fashion & Retail  
> Layanan: Pembuatan Website  
> 📈 Konversi produk meningkat 3x dari versi lama

> **Card 3**: [Screenshot website konsultan]  
> 💼 Industri: Jasa Profesional  
> Layanan: SEO  
> 📈 Muncul di halaman 1 Google untuk 12 keyword utama

> **CTA bawah**: Lihat Semua Portofolio →

---

### PAKET HARGA (PRICING)

**Layout**: 3 kolom pricing card (desktop), stack vertikal (mobile). Card tengah = "Most Popular", ditandai dengan badge dan border accent biru yang lebih tebal. Setiap card: nama paket, harga, deskripsi singkat, list fitur, tombol CTA.  
**Visual Notes**: **Semua pricing card menggunakan Liquid Glass**. Card biasa: `.liquid-glass-card` standar. Card "Most Popular": glass lebih tebal + `border: 2px solid rgba(53,158,255,0.50)` + subtle blue glow `box-shadow: 0 16px 48px rgba(53,158,255,0.20)` + badge "⭐ Paling Populer" dengan liquid glass pill. Background section: white agar glass cards kontras indah. Harga dengan font Syne 800, angka besar warna NAIKIN Blue.

**Copy**:
> **Section Label**: TRANSPARAN SOAL HARGA
> **Section Title**: Pilih Paket yang Pas untuk Bisnis Kamu

> **Paket MULAI** — Rp 2.500.000  
> *Untuk bisnis yang baru mau hadir online*  
> ✦ Website profil 5 halaman  
> ✦ Desain responsif mobile  
> ✦ Domain & hosting 1 tahun  
> ✦ Formulir kontak & WhatsApp  
> ✦ Revisi 2x  
> ✗ SEO tidak termasuk  
> [Mulai dengan Paket Ini]

> **Paket NAIK** ⭐ — Rp 5.500.000  
> *Untuk bisnis yang siap tumbuh di Google*  
> ✦ Website profesional 8 halaman  
> ✦ SEO on-page lengkap  
> ✦ Riset keyword 20 kata kunci  
> ✦ Setup Google Business Profile  
> ✦ Integrasi analytics & tracking  
> ✦ Revisi unlimited  
> ✦ Support 3 bulan  
> [Mulai dengan Paket Ini]

> **Paket DOMINASI** — Custom  
> *Untuk brand yang ingin jadi pemimpin pasar*  
> ✦ Website enterprise custom  
> ✦ SEO komprehensif (on + off page)  
> ✦ Strategi konten 3 bulan  
> ✦ Link building premium  
> ✦ Laporan bulanan eksekutif  
> ✦ Dedicated account manager  
> ✦ SLA & prioritas respons  
> [Diskusi Kebutuhan Kamu]

> **Catatan**: Semua harga belum termasuk PPN. Paket bisa dikustomisasi sesuai kebutuhan. Hubungi kami untuk konsultasi gratis.

*(✦ menggunakan ikon check berwarna NAIKIN Blue #359EFF)*

---

### TESTIMONI KLIEN

**Layout**: 3 kolom card testimoni (desktop), carousel swipe (mobile). Setiap card: foto/avatar klien, nama, jabatan & nama bisnis, bintang rating, teks testimoni. Di atas section, angka statistik 3 kolom.  
**Visual Notes**: Background section: `linear-gradient(180deg, #F4F7FF 0%, #FFFFFF 100%)` agar glass terlihat. **Semua card testimoni pakai Liquid Glass** (`.liquid-glass-card`). Foto avatar: 48px circle dengan border `2px solid rgba(53,158,255,0.3)`. Bintang: warna NAIKIN Blue #359EFF. Tanda kutip dekoratif besar warna `rgba(53,158,255,0.12)`. Angka statistik besar: font Syne 800, warna NAIKIN Blue.

**Copy**:
> **Section Label**: KATA MEREKA
> **Section Title**: Lebih dari 150 Bisnis Sudah Naik Bersama NAIKIN

> **Statistik**:  
> **150+** Klien Puas &nbsp;|&nbsp; **98%** Tingkat Kepuasan &nbsp;|&nbsp; **3x** Rata-rata Kenaikan Traffic

> **Testimoni 1**:  
> ⭐⭐⭐⭐⭐  
> *"Sebelum pakai NAIKIN, website saya cuma ada tapi tidak ketemu di Google. Sekarang sudah halaman 1 untuk 'catering Jakarta Selatan'. Pesanan online naik signifikan!"*  
> — **Rina Susanti**, Owner, Dapur Rina Catering

> **Testimoni 2**:  
> ⭐⭐⭐⭐⭐  
> *"Tim NAIKIN responsif banget dan penjelasannya mudah dimengerti. Saya yang awam soal SEO jadi paham kenapa strategi mereka works. Highly recommended!"*  
> — **Dito Prawira**, Founder, Konsultan Pajak Muda

> **Testimoni 3**:  
> ⭐⭐⭐⭐⭐  
> *"Website baru dari NAIKIN jauh lebih cepat dan konversinya meningkat. Bounce rate turun drastis. Worth every rupiah."*  
> — **Sarah Lim**, Marketing Manager, PT Andalan Properti

---

### FAQ

**Layout**: Single column accordion. Setiap item: pertanyaan dengan icon chevron kanan (tutup) / bawah (buka). Jawaban expand dengan animasi smooth. Pertanyaan pertama terbuka by default.  
**Visual Notes**: Background putih. Border antar item: `1px solid #E5E7EB`. Active item: border-left `3px solid #1DB954`, pertanyaan berwarna NAIKIN Green. Padding 20px per item.

**Copy**:
> **Section Title**: Pertanyaan yang Sering Ditanyakan

> **Q1**: Berapa lama waktu pengerjaan website?  
> **A1**: Untuk website profil standar, biasanya 7–14 hari kerja setelah briefing selesai. Website yang lebih kompleks bisa 3–4 minggu. Kami selalu kasih timeline yang jelas di awal — tidak ada kejutan di tengah jalan.

> **Q2**: Apakah hasil SEO bisa dijamin?  
> **A2**: Tidak ada yang bisa jamin posisi pasti di Google — siapapun yang bilang bisa, hati-hati. Yang kami jamin adalah: strategi yang benar, eksekusi yang konsisten, dan laporan yang transparan. Rata-rata klien kami melihat peningkatan signifikan dalam 3–6 bulan.

> **Q3**: Saya tidak punya konten/foto, apakah bisa tetap dikerjakan?  
> **A3**: Bisa! Kami bantu dari nol. NAIKIN punya tim copywriter dan kurator gambar yang bisa menyiapkan konten awal. Kamu tinggal review dan approve.

> **Q4**: Apakah website saya tetap bisa dikelola sendiri setelahnya?  
> **A4**: Ya. Kami pakai CMS yang ramah pengguna (WordPress atau custom) dan kami berikan pelatihan singkat supaya kamu bisa update konten sendiri tanpa harus selalu menghubungi kami.

> **Q5**: Bagaimana sistem pembayarannya?  
> **A5**: DP 50% di awal, 50% setelah website selesai dan kamu approve. Untuk paket SEO bulanan, pembayaran di awal setiap bulan. Transfer bank atau e-wallet tersedia.

> **Q6**: Apakah NAIKIN melayani klien di luar Jakarta?  
> **A6**: Sangat bisa! Semua komunikasi bisa via WhatsApp, Zoom, atau email. Kami sudah handle klien dari Sabang sampai Merauke — lokasi bukan hambatan.

---

### CTA FINAL (KONTAK)

**Layout**: Full-width section dengan background NAIKIN Blue (#359EFF). Konten terpusat: badge glass, headline besar putih, subheadline, tombol WhatsApp besar (putih dengan teks biru), dan info kontak sekunder di bawah.  
**Visual Notes**: Background solid NAIKIN Blue #359EFF dengan subtle radial gradient `radial-gradient(ellipse at 50% 0%, #5FB3FF 0%, #359EFF 60%)`. Dekorasi: 2–3 lingkaran besar transparan (opacity 10%) sebagai bokeh. **Tombol CTA**: background liquid glass putih `rgba(255,255,255,0.90)`, `backdrop-filter: blur(10px)`, teks NAIKIN Blue, border-radius 50px, padding 16px 40px. Hover: background `rgba(255,255,255,1)`, scale 1.02. Badge di atas headline juga pakai glass transparan: `background: rgba(255,255,255,0.20)`, `border: 1px solid rgba(255,255,255,0.40)`, teks putih.

**Copy**:
> **Badge**: 💬 Konsultasi 100% Gratis
>
> **Headline**: Siap Naik ke Level Berikutnya?
>
> **Subheadline**: Ceritakan bisnis kamu ke kami. Dalam 1 jam, kamu dapat rekomendasi strategi digital yang konkret — gratis, tanpa kewajiban apapun.
>
> **Primary CTA Button**: 💬 Chat di WhatsApp Sekarang
>
> **Kontak Sekunder**:  
> 📧 halo@naikin.id &nbsp;|&nbsp; 📍 Jakarta, Indonesia  
> *Respons dalam < 1 jam di jam kerja*

---

### FOOTER

**Layout**: 4 kolom (desktop), 2 kolom (tablet), 1 kolom stack (mobile). Kolom 1: logo + tagline + social media icons. Kolom 2: Layanan (link anchor). Kolom 3: Perusahaan (link). Kolom 4: Kontak. Bawah: garis tipis + copyright.  
**Visual Notes**: Background Deep Ink (#0F1923). Teks: putih dan Cool Gray. Logo teks "NAIKIN" berwarna NAIKIN Blue #359EFF. Social icons hover: NAIKIN Blue #359EFF. Link hover: underline putih.

**Copy**:
> **Logo**: NAIKIN  
> **Tagline**: Naik peringkat. Naik traffic. Naik omzet.  
> **Social**: Instagram | LinkedIn | TikTok

> **Kolom Layanan**: Pembuatan Website | SEO On-Page | SEO Off-Page | Konsultasi Gratis

> **Kolom Perusahaan**: Tentang Kami | Portofolio | Blog | Karir

> **Kolom Kontak**:  
> 💬 WhatsApp: +62 xxx-xxxx-xxxx  
> 📧 halo@naikin.id  
> 📍 Jakarta, Indonesia

> **Copyright**: © 2026 NAIKIN. Semua hak dilindungi.

---

## 6. Component Specifications

### Navigation Bar
- Type: Sticky
- Height: 68px desktop, 56px mobile
- **Style**: Liquid Glass selalu aktif — `background: rgba(255,255,255,0.60)`, `backdrop-filter: blur(24px) saturate(200%)`, `border-bottom: 1px solid rgba(255,255,255,0.80)`
- Scroll behavior: setelah 60px, shadow biru menguat: `box-shadow: 0 4px 32px rgba(53,158,255,0.13)`
- Transition: 200ms ease
- Logo: "NAIKIN" — Syne 800, warna #359EFF
- Mobile: Hamburger → Full-screen glass overlay, `background: rgba(255,255,255,0.92)`, `backdrop-filter: blur(30px)`, links vertical center

### Primary Button (WhatsApp CTA)
- Background: #359EFF
- Text color: #FFFFFF
- Font: DM Sans, 600, 15px
- Border radius: 50px
- Padding: 14px 32px
- Hover state: background #1a8de8, transform scale(1.02), transition 180ms ease
- Active/pressed: background #0f74cc, scale(0.99)

### Secondary / Ghost Button
- Border: 2px solid #359EFF
- Text: #359EFF
- Background: transparent
- Border radius: 50px
- Padding: 14px 32px
- Hover: background #E0F0FF, transition 180ms ease

### Liquid Glass Card (Service, Pricing, Testimoni)
- Background: rgba(255, 255, 255, 0.70)
- Backdrop-filter: blur(16px) saturate(160%)
- Border: 1px solid rgba(255, 255, 255, 0.80)
- Border radius: 24px
- Shadow: `0 12px 40px rgba(53,158,255,0.12), 0 2px 0 rgba(255,255,255,0.95) inset`
- Padding: 40px 32px
- Hover: background rgba(255,255,255,0.85), shadow intensitas naik, translateY(-4px), shimmer sweep 600ms
- Popular pricing card: border `2px solid rgba(53,158,255,0.50)`, glow `box-shadow: 0 16px 48px rgba(53,158,255,0.20)`

### Testimoni Card
- Sama dengan Liquid Glass Card namun padding 28px
- Tanda kutip dekoratif: font-size 80px, warna `rgba(53,158,255,0.10)`, posisi absolute top-left

### Form / Input Fields (Kontak)
- Input background: #FFFFFF
- Border: 1px solid #D1D5DB
- Border radius: 10px
- Padding: 12px 16px
- Focus state: border 2px solid #359EFF, outline: none, subtle blue glow `box-shadow: 0 0 0 3px rgba(53,158,255,0.15)`
- Label: di atas input, DM Sans 500 14px warna #374151
- Placeholder: DM Sans 400 warna #9CA3AF
- Submit button: sama dengan Primary Button

### WhatsApp Floating Button
- Position: fixed, bottom 28px, right 28px
- Size: 56px x 56px, border-radius 50%
- Background: #25D366
- Icon: WhatsApp SVG putih
- Shadow: `0 4px 20px rgba(37,211,102,0.4)`
- Animasi masuk: bounce-in setelah 3 detik page load
- Hover: scale(1.08), shadow lebih besar

---

## 7. Responsive Behavior

| Breakpoint | Width | Layout Changes |
|------------|-------|----------------|
| Mobile | 375px–767px | Hero stacked (teks atas, ilustrasi bawah). Nav hamburger menu. Services 1 kolom. Portofolio 1 kolom. Pricing 1 kolom stack. Testimoni carousel. How It Works vertikal. Footer 1 kolom. Font H1: 38px, H2: 30px. Section padding 60px. |
| Tablet | 768px–1279px | Hero 2 kolom. Services 2 kolom. Portofolio 2 kolom. Pricing 3 kolom (lebih compact). Footer 2 kolom. Font H1: 50px. Section padding 80px. |
| Desktop | 1280px+ | Layout penuh sesuai spesifikasi utama. Max-width 1200px centered. |

---

## 8. SEO & Meta

- **Page Title**: NAIKIN – Jasa Website & SEO Profesional Indonesia
- **Meta Description**: NAIKIN bantu bisnis kamu tampil di halaman 1 Google. Jasa pembuatan website dan SEO profesional untuk UMKM, personal brand, dan korporat. Konsultasi gratis!
- **OG Title**: NAIKIN – Naik Peringkat. Naik Traffic. Naik Omzet.
- **OG Description**: Lebih dari 150 bisnis sudah naik bersama NAIKIN. Jasa website dan SEO yang transparan, berorientasi hasil, dan ramah di kantong.
- **OG Image**: Mockup laptop/mobile menampilkan contoh website klien dengan overlay logo NAIKIN dan tagline di atas background biru NAIKIN dengan efek glass panel.
- **Primary Keywords**: jasa pembuatan website profesional, jasa SEO Indonesia, agensi website dan SEO

---

## 9. Technical Requirements

- **Tech Stack**: Single HTML file dengan vanilla CSS dan JavaScript (atau React + Tailwind CSS jika developer memilih)
- **External Dependencies**:
  - Google Fonts: Syne + DM Sans (link di atas)
  - Icons: Lucide Icons (via CDN) atau Heroicons SVG inline
  - Animasi scroll: AOS.js (Animate On Scroll) via CDN
  - Counter animasi: CountUp.js via CDN
  - WhatsApp link: `https://wa.me/62xxxxxxxxxxx?text=Halo NAIKIN, saya ingin konsultasi gratis!`
- **Aksesibilitas**: WCAG AA — semua gambar wajib alt text deskriptif, kontras warna minimum 4.5:1, navigasi keyboard-friendly
- **Performa**: Lazy-load semua gambar di bawah fold. Compress semua gambar ke WebP. Tidak ada skrip pihak ketiga yang tidak perlu.
- **Browser Support**: Chrome, Firefox, Safari, Edge — 2 versi terakhir
- **Structured Data**: Schema.org LocalBusiness markup untuk SEO
- **Google Analytics**: GA4 tag di `<head>`

---

## 10. Copywriting Reference Sheet

### Voice Do's
- Gunakan "kamu" bukan "Anda" — lebih akrab dan modern
- Mulai dengan pain point atau manfaat, bukan fitur produk
- Gunakan angka spesifik: "naik 240%" bukan "naik banyak"
- Kalimat pendek. Satu ide per kalimat.
- Selalu jelaskan "so what?" — kenapa ini penting buat klien

### Voice Don'ts
- Jangan pernah gunakan: "solusi terbaik", "terpercaya sejak", "kami berkomitmen", "one-stop solution"
- Hindari passive voice dan kalimat berbeli-belit
- Jangan buka dengan "Kami adalah agensi digital yang..."
- Hindari klaim tanpa bukti: "terbaik di Indonesia" tanpa data

### Banned Words / Phrases
"Inovatif", "komprehensif", "holistik", "paradigma", "sinergis", "world-class", "cutting-edge", "state-of-the-art"

### Power Phrases (gunakan konsisten)
- "Naik bersama NAIKIN"
- "Hasil nyata, bukan janji"
- "Transparan dari hari pertama"
- "Bisnis kamu layak ditemukan"
- "Konsultasi gratis, tanpa tekanan"

---

## 11. Implementation Prompt

*Copy-paste blok ini ke AI tool manapun (ChatGPT, Claude, Cursor, v0, Bolt, Gemini, dll.) untuk langsung membangun website-nya:*

---

> You are an expert frontend developer. Build a complete, production-ready website based on the PRD below. Follow every specification exactly — colors, fonts, spacing, copy, layout, animations, and interactions. Do not deviate, simplify, or improvise. Use semantic HTML5 elements. Output as a single self-contained HTML file with all CSS in a `<style>` block and all JavaScript in a `<script>` block at the end of `<body>`. Include Google Fonts import in `<head>`. Implement AOS.js for scroll animations and CountUp.js for statistic counters via CDN. Make the WhatsApp floating button functional with the wa.me link. Ensure fully responsive layout across mobile (375px), tablet (768px), and desktop (1280px+). **CRITICAL**: Implement the Liquid Glass design system exactly as specified — use `backdrop-filter: blur()` + `rgba` backgrounds on the navbar, hero badge, service cards, pricing cards, and testimonial cards. Ensure background gradients are present behind glass elements so the effect is visible. Implement the shimmer hover animation on glass cards using CSS `::after` pseudo-element. Brand accent color is #359EFF (NAIKIN Blue) — replace all green references with this blue.
>
> [TEMPEL SELURUH PRD INI DI BAWAH BARIS INI]

---

*End of PRD — NAIKIN Website v1.1*
