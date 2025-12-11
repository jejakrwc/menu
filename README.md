# GAMEZONE PADANG - Display Menu

📺 **Display Menu & Promo untuk GAMEZONE PADANG**  
Proyek ini menampilkan menu makanan, minuman, dan promo dalam format layar fullscreen. Cocok digunakan untuk TV display, smart kiosk, atau layar promo di tempat usaha.

---

## 📋 Fitur

- Menampilkan daftar menu makanan dan minuman beserta gambar, deskripsi, dan harga.
- Menampilkan rekomendasi menu populer secara otomatis (slideshow).
- Format harga otomatis ke Rupiah.
- Jam realtime (hari, tanggal, dan waktu).
- Fullscreen mode otomatis saat layar diklik.
- Footer ticker untuk menampilkan informasi promo dan sosial media.
- Desain responsif 16:9, menyesuaikan ukuran layar display.

---

## 🛠 Struktur File
    /project-root
    │
    ├─ index.html       # Halaman utama display menu
    ├─ styles.css       # Styling layout dan tema
    ├─ script.js        # Logika slideshow, clock, fullscreen
    ├─ menu-data.js     # Data menu (nama, harga, deskripsi, popularitas, gambar)
    └─ img/             # Folder berisi semua gambar menu (organisasi bebas)


---

## ⚡ Instalasi & Penggunaan
1. **Clone atau download repository**:
```bash
git clone https://github.com/username/gamezone-display.git
cd gamezone-display

## Buka file index.html di browser modern (Chrome, Edge, Firefox).
    Browser harus mendukung fullscreen API dan ES6 JavaScript.
    Layar akan otomatis menyesuaikan resolusi 16:9.

3. Klik sekali layar untuk mengaktifkan fullscreen.
    Fullscreen akan menjaga tampilan layar tetap optimal.
4. Slideshow rekomendasi menu akan berjalan otomatis tiap 6 detik.
    Rekomendasi ditampilkan berdasarkan popularitas menu (popular).
5. Jam realtime akan otomatis ditampilkan di header.
6. Footer ticker berjalan terus menampilkan promo, info top up, dan sosial media.

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

id → Nomor unik setiap item.

name → Nama menu.

price → Harga dalam satuan Rupiah (angka).

desc → Deskripsi singkat menu.

img → Path gambar, pastikan ada di folder img/.

popular → Nilai popularitas (0–100), semakin tinggi → muncul lebih dulu di rekomendasi.
