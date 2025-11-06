/* =====================================================
 1) Format harga ke Rupiah
===================================================== */
function formatRupiah(n) {
  return 'Rp ' + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}


/* =====================================================
 2) Template Card Menu (komponen item menu)
===================================================== */
function createCard(item) {
  const el = document.createElement('div');
  el.className = 'card';
  el.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <div class="card-body">
      <div>
        <div class="card-title">${item.name}</div>
        <div class="card-desc">${item.desc}</div>
      </div>
      <div class="card-price">${formatRupiah(item.price)}</div>
    </div>
  `;
  return el;
}


/* =====================================================
 3) Render rekomendasi (5 item → 2 kolom x 3 baris)
    - Fade out
    - Replace data
    - Fade in
===================================================== */
let currentIndex = 0;

function renderRecommendations() {
  const recGrid = document.getElementById('recommend-grid');

  // (A) Fade Out sebelum ganti item
  recGrid.classList.remove("show");

  setTimeout(() => {
    recGrid.innerHTML = '';

    // (B) Urutkan by popular (paling populer dulu)
    const sorted = [...MENU].sort((a,b)=> b.popular - a.popular);

    // (C) Ambil 5 item per slide
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(sorted[(currentIndex + i) % sorted.length]);
    }

    // (D) Masukkan ke grid
    items.forEach(item => recGrid.appendChild(createCard(item)));

    // (E) Delay kecil → Fade In + Slide Up
    setTimeout(() => recGrid.classList.add("show"), 30);

  }, 450);

  // Geser index untuk slide berikutnya
  currentIndex = (currentIndex + 6) % MENU.length;
}


/* =====================================================
 4) Jalankan slideshow otomatis
===================================================== */
renderRecommendations();              // first load
setInterval(renderRecommendations, 6000); // tiap 6 detik ganti slide


/* =====================================================
 5) Fullscreen layar (klik sekali)
===================================================== */
document.addEventListener("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(()=>{});
  }
}, { once: true });
/* =====================================================
6) Jam realtime
===================================================== */
function updateClock(){
  const now = new Date();
  const days = ["Minggu","Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
  const dayName = days[now.getDay()];
  const time = now.toLocaleTimeString("id-ID",{hour12:false});
  const date = now.toLocaleDateString("id-ID");

  document.getElementById("displayClock").textContent = `${dayName}, ${date} — ${time}`;
}
setInterval(updateClock, 1000);
updateClock();
