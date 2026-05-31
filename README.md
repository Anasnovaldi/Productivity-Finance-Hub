![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Proyek ini dibuat sebagai portofolio proses belajar *web development* mandiri, menggunakan kombinasi desain bergaya retro/pixel art yang ditenagai oleh font *Press Start 2P*.

---

## 📂 Daftar Proyek di Dalam Program

### 1. 💰 Money Tracker (Tabungan Tracker)
Aplikasi mencatat saldo pemasukan keuangan secara *real-time* yang memisahkan kategori dompet fisik dan digital.
* **Fitur:** Dual Wallet System (Cash & Digital), kalkulasi otomatis saldo total menggunakan metode array `.reduce()`, validasi input nominal agar tidak minus, serta log riwayat transaksi berwarna.
* **Lokasi Program:** `moneyvault-program/homepage.html`

### 2. 📝 Todo-List Program
Aplikasi manajemen tugas harian yang mengimplementasikan sistem manipulasi data CRUD (*Create, Read, Update, Delete*) penuh di sisi *client*.
* **Fitur:** Menambah tugas baru, menandai/mengedit tugas secara langsung menggunakan fitur *contentEditable* HTML5, dan menghapus komponen daftar tugas dari DOM.
* **Lokasi Program:** `todolist-program/homepage-todo.html`

---

## ✨ Fitur Teknis Utama (Tech Stack & Logic)
* **HTML5 & CSS3 Pure:** Penataan tata letak menggunakan CSS Grid dan Flexbox agar fleksibel di berbagai resolusi layar tanpa *framework* eksternal.
* **Vanilla JavaScript:** Pembuatan logika murni tanpa bantuan *library* untuk memahami konsep asinkronus dasar, pendengar aktivitas pengguna (*Event Listeners*), pembuatan elemen dinamis, dan manipulasi objek.

> ⚠️ **Catatan Penting:** Proyek ini berjalan sepenuhnya di sisi klien (*client-side*). Data aplikasi belum terhubung ke sistem database eksternal, sehingga data akan ter-reset jika halaman web dimuat ulang (refresh).

---

## 💻 Cara Menjalankan Proyek Secara Lokal

Tidak memerlukan proses instalasi server atau dependensi paket yang rumit. Ikuti langkah sederhana berikut:

1.  **Clone Repository:**
    ```bash
    git clone [https://github.com/username-kamu/nama-repository.git](https://github.com/username-kamu/nama-repository.git)
    ```
2.  **Buka Proyek:**
    Masuk ke dalam folder hasil klon, lalu klik dua kali pada file `index.html` untuk membuka halaman portofolio utama di browser kamu.