# 🚀 Modern Developer Portfolio & Project Showcase Website

Website portofolio personal yang modern, interaktif, dan responsif. Dirancang khusus untuk memamerkan semua projek buatan Anda—dan **website ini sendiri juga sudah terpasang rapi sebagai salah satu featured project** di dalam daftar portofolio!

---

## 🌟 Fitur Utama Website

1. **Zero-Dependency & Siap Pakai Langsung**
   - Tidak memerlukan `npm install` atau konfigurasi build tool yang rumit. Cukup buka `index.html` di browser mana pun (Chrome, Edge, Firefox, Safari).
2. **Featured Project: Website Portofolio Ini Sendiri**
   - Dilengkapi badge khusus `🌟 Projek Ini Sendiri`, efek neon gradient border, dan deskripsi arsitektur teknis.
3. **Filter Kategori & Pencarian Dinamis (Live Search)**
   - Filter cepat berdasarkan kategori (*Semua*, *Web App*, *Frontend & UI*, *UI/UX Concept*).
   - Pencarian real-time berdasarkan judul atau nama teknologi (*React, Tailwind, Express, AI, dll.*).
4. **Modal Detail Projek Interaktif (Popup)**
   - Klik kartu projek untuk membuka detail menyeluruh: deskripsi lengkap, poin-poin fitur utama, checklist keunggulan, daftar tech stack, serta tombol Live Demo & GitHub Repo.
5. **Dark & Light Mode Switcher**
   - Tampilan default bernuansa *modern developer cyber aesthetic* dengan tema gelap dan opsi tema terang yang tersimpan di `localStorage`.
6. **Desain 100% Responsif & Mobile-First**
   - Tampilan rapi di semua ukuran layar (Smartphone, Tablet, Laptop, hingga Monitor Lebar).
7. **Formulir Kontak & Tombol Salin Email 1-Klik**
   - Simulasi pengiriman pesan interaktif dengan feedback sukses dan tombol salin email instan ke clipboard.
8. **Struktur Data Terpisah (`js/projects-data.js`)**
   - Menambahkan projek baru semudah menambah satu objek di file JavaScript tanpa perlu merombak file HTML!

---

## 📁 Struktur File & Folder

```
portfolio-web/
├── index.html                 # Halaman utama portofolio
├── css/
│   └── style.css              # Custom styling, animasi glassmorphism, dark/light mode
├── js/
│   ├── projects-data.js       # PUSAT DATA: profil, keahlian, dan daftar projek
│   └── main.js                # Logika filter, modal, tema, form, dan interaktivitas
├── assets/
│   └── images/                # Mockup ilustrasi SVG untuk projek & avatar
│       ├── avatar.svg
│       ├── project-portfolio.svg   (Mockup website ini sendiri)
│       ├── project-ecommerce.svg
│       ├── project-kanban.svg
│       ├── project-ai.svg
│       ├── project-restaurant.svg
│       └── project-fintech.svg
└── README.md                  # Panduan penggunaan dan kustomisasi
```

---

## 💡 Cara Menjalankan Website

1. Buka folder projek di File Explorer:
   `C:\Users\ASUS\.gemini\antigravity\scratch\portfolio-web`
2. **Klik dua kali file `index.html`** untuk langsung membukanya di browser favorit Anda.
3. Website akan langsung berjalan secara offline maupun online tanpa perlu instalasi server!

---

## ✍️ Cara Menambahkan Projek Anda Sendiri

Buka file `js/projects-data.js`, lalu cari bagian `projects: [ ... ]`. Tambahkan objek projek baru seperti contoh berikut:

```javascript
{
  id: "projek-keren-anda",
  title: "Nama Projek Keren Anda",
  category: "webapp", // Pilihan: "webapp", "frontend", atau "uiux"
  categoryName: "Web Application",
  featured: true,
  badge: "Featured Project",
  summary: "Ringkasan 1-2 kalimat tentang apa yang dilakukan aplikasi ini.",
  description: "Penjelasan lengkap mengenai latar belakang projek, masalah yang diselesaikan, dan arsitektur sistem.",
  features: [
    "Fitur unggulan 1",
    "Fitur unggulan 2",
    "Fitur unggulan 3"
  ],
  techStack: ["React", "Tailwind CSS", "Node.js", "PostgreSQL"],
  demoUrl: "https://demo-anda.com", // Ganti dengan link demo (atau '#' jika belum ada)
  repoUrl: "https://github.com/username/repo", // Ganti dengan link GitHub Anda
  image: "assets/images/nama-gambar-anda.svg", // Bisa gunakan format SVG, PNG, JPG, atau WebP
  highlights: "Pencapaian utama projek ini (misal: Digunakan 1000+ pengguna aktif)."
}
```

---

## 🎨 Cara Mengubah Data Profil & Kontak

Di dalam file `js/projects-data.js`, Anda juga dapat mengubah:
- **Nama & Gelar:** Ubah properti `name` dan `title`.
- **Bio & Status:** Ubah properti `bio` dan `badgeStatus`.
- **Sosial Media:** Masukkan link akun GitHub, LinkedIn, Instagram, dan WhatsApp Anda.
- **Keahlian (Skills):** Tambah atau ubah persentase keahlian teknologi di `portfolioData.skills`.

---

## 🌐 Cara Deploy Gratis ke Internet

Setelah data projek Anda siap, Anda bisa mempublikasikan website ini secara gratis agar bisa diakses oleh siapa saja:

### Opsi 1: GitHub Pages (Paling Populer & Gratis)
1. Buat repository baru di [GitHub](https://github.com) dengan nama `username.github.io` atau `portfolio`.
2. Upload semua file dari folder `portfolio-web` ke repository tersebut.
3. Buka menu **Settings** > **Pages** di repository GitHub Anda.
4. Pada bagian *Build and deployment*, pilih branch **main** / **root**, lalu klik **Save**.
5. Website Anda akan aktif dalam 1-2 menit di URL: `https://username.github.io`!

### Opsi 2: Vercel / Netlify
1. Buka [Vercel](https://vercel.com) atau [Netlify](https://netlify.com).
2. Cukup drag-and-drop folder `portfolio-web`, website akan langsung aktif dengan domain HTTPS gratis!
