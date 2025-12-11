# GAMEZONE PADANG - Display Menu

📺 **Display Menu & Promo untuk GAMEZONE PADANG**  
Menampilkan menu makanan, minuman, dan promo dalam format layar fullscreen. Cocok untuk TV display atau smart kiosk.

---

## ⚡ Instalasi & Penggunaan

1. **Clone repository dan masuk ke folder project:**

```bash
git clone https://github.com/username/gamezone-display.git
cd gamezone-display

    Buka file index.html di browser modern.

        Browser harus mendukung fullscreen API dan ES6 JavaScript.

    Klik sekali layar untuk fullscreen.

    Slideshow rekomendasi berjalan otomatis tiap 6 detik.

    Jam realtime ditampilkan di header.

    Footer ticker menampilkan promo, top up, dan sosial media.

📁 Struktur Project

project-root/
├── index.html       # Halaman utama display menu
├── styles.css       # Styling layout dan tema
├── script.js        # Logika slideshow, clock, fullscreen
├── menu-data.js     # Data menu (nama, harga, deskripsi, popularitas, gambar)
└── img/             # Semua gambar menu (organisasi bebas)

    Folder img/ bisa berisi banyak gambar, tidak perlu urut, pastikan nama file sesuai menu-data.js.

📝 Pengaturan
1. Menambahkan / Mengubah Menu

Edit file menu-data.js:

const MENU = [
  {
    id: 1,
    name: 'Nama Menu',
    price: 25000,
    desc: 'Deskripsi menu',
    img: 'img/nama_gambar.jpg',
    popular: 90
  },
  ...
];

    popular: nilai 0–100, semakin tinggi → muncul lebih dulu di rekomendasi.

2. Mengubah Tema Warna

Edit styles.css di bagian :root:

:root {
  --bg1: #fff7f8;
  --bg2: #ffdfdf;
  --kfc-red: #d6001c;
  --kfc-dark: #2b2b2b;
  --kfc-gold: #f8c300;
  --radius: 14px;
  --tv-width: 1280px;
  --tv-height: 720px;
}

3. Mengubah Interval Slide

Edit script.js:

setInterval(renderRecommendations, 6000); // 6000 ms = 6 detik

4. Footer Ticker

Edit teks di index.html bagian footer:

<span>
  🎮 Selamat Datang di GAMEZONE PADANG — Promo Hari Ini: Paket PS 2 Jam + Es Teh Rp 20.000 ✨ | 
  Top Up Game & Snack Termurah! | 
  Follow IG: @gamezonepadang | 
  Happy Gaming! 😎🔥 
</span>

🎨 Desain

    Layout card dengan hover animasi.

    Background, warna, dan border mengikuti theme brand.

    Responsif terhadap layar 16:9.

    Slideshow menampilkan 5 item sekaligus.

📌 Catatan

    Pastikan semua gambar ada di folder img/.

    Reload halaman setelah mengubah data menu atau styling.

🔗 Sosial Media

    Instagram: @gamezonepadang

⚠️ Lisensi

Proyek ini untuk penggunaan internal/display offline.
Tidak boleh digunakan untuk komersial tanpa izin pemilik konten.
