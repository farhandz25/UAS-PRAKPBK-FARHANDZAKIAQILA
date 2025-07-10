🎮 GameStore - Web Toko Game Online
GameStore adalah aplikasi web toko game online yang dibangun menggunakan Vue.js. Aplikasi ini menyediakan fitur untuk menampilkan daftar game, detail game, keranjang belanja, hingga sistem autentikasi pengguna (opsional, jika kamu sudah buat login). Cocok untuk tugas akhir, demo portofolio, atau sekadar latihan ngoding Vue.

🚀 Fitur Utama
🛒 Daftar Game: Lihat berbagai game dengan kategori dan harga.

🔍 Detail Game: Lihat informasi lengkap tiap game.

➕ Tambah ke Keranjang: Tambahkan game ke keranjang belanja.

🧺 Manajemen Keranjang: Ubah jumlah item atau hapus dari keranjang.

🔐 Login/Register (opsional): Autentikasi pengguna (jika sudah diimplementasi).

📦 Checkout (opsional): Simulasi proses pembelian.

🧑‍💼 Dashboard Admin (opsional): Kelola produk game secara CRUD.

🛠️ Teknologi yang Digunakan
Vue 3: Framework utama.

Vue Router: Untuk navigasi antar halaman.

Pinia: State management modern pengganti Vuex.

Vite: Build tool cepat untuk proyek Vue.

Axios / Fetch API: Mengambil data dari backend atau dummy API.

json-server (opsional): Mock backend untuk data produk.

Tailwind CSS / Bootstrap (opsional): Untuk styling UI.

📁 Struktur Proyek 
bash
Copy
Edit
src/
├── assets/            # Gambar & aset statis
├── components/        # Komponen reusable seperti Navbar, GameCard
├── views/             # Halaman utama seperti Home.vue, DetailGame.vue
├── router/            # Konfigurasi route (index.js)
├── stores/            # Pinia store (cartStore.js, gameStore.js)
├── App.vue            # Root component
└── main.js            # Entry point aplikasi


📦 Cara Menjalankan 

Clone repositori ini

bash
Copy
Edit
git clone https://github.com/farhandz25/UAS-PRAKPBK-FARHANDZAKIAQILA
cd UAS-PRAKPBK-FARHANDZAKIAQILA
Install dependencies

bash
Copy
Edit
npm install
Jalankan server lokal

bash
Copy
Edit
npm run dev
(Opsional) Jalankan json-server untuk dummy API

bash
Copy
Edit
npx json-server --watch db.json --port 3000

✅ TODO / Pengembangan Lanjutan

 Halaman daftar game

 Fitur keranjang belanja

 Sistem login dan register

 Integrasi payment gateway

 Dashboard admin CRUD game

🧑‍🎓 Kontributor
Farhan Dzaki Aqila – Developer Utama & UI Designer