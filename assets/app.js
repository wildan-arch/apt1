// 1. Efek Sticky Navbar: Berubah warna saat di-scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "#ffffff";
    navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    navbar.style.padding = "0.7rem 5%"; // Navbar mengecil sedikit
  } else {
    navbar.style.background = "white";
    navbar.style.padding = "1rem 5%";
  }
});

// 2. Smooth Scroll: Navigasi halus saat klik menu
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Offset agar tidak tertutup navbar
        behavior: "smooth",
      });
    }
  });
});

// 3. Form Ke WhatsApp: Mengirim pesan dari form kontak ke WA Admin
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  // Ambil data dari input
  const nama = document.querySelector('input[placeholder="Masukkan nama Anda"]').value;
  const wa = document.querySelector('input[placeholder="Contoh: 0812..."]').value;
  const pesan = document.querySelector("textarea").value;

  // Nomor WhatsApp Admin (Ganti dengan nomor Apotek Shabah yang asli)
  const nomorAdmin = "6282234938250";

  // Format pesan
  const teksWA = `Halo Admin Apotek Shabah,%0A%0A` + `Nama: ${nama}%0A` + `No. WA: ${wa}%0A` + `Pesan: ${pesan}`;

  // Buka jendela WhatsApp baru
  window.open(`https://wa.me/${nomorAdmin}?text=${teksWA}`, "_blank");
});

// 4. Animasi Sederhana saat Scroll (Reveal Effect)
window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".product-card, .feature-card");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].style.opacity = "1";
      reveals[i].style.transform = "translateY(0)";
    }
  }
}

// logika fitur pencarian obat di index.html
// let obat = [
//   { id: 1, name: "Paracetamol", stok: 122, harga: "Rp 5.000" },
//   { id: 2, name: "Aspirin", stok: 50, harga: "Rp 10.000" },
//   { id: 3, name: "Ibuprofen", stok: 30, harga: "Rp 15.000" },
// ];

//   // 1. Filter data berdasarkan nama
// const hasil = obat.filter((item) => item.name.toLowerCase().includes(keyword));

//   // 2. Map data ke dalam HTML
//   const htmlHasil = hasil
//     .map(
//       (item) => `
//         <div class="search-item">
//             <div class="info">
//                 <strong>${item.name}</strong>
//                 <span>Stok: ${item.stok} | ${item.harga}</span>
//             </div>
//             <button class="btn-pilih" onclick="pilihObat('${item.name}')">Pilih</button>
//         </div>
//     `,
//     )
//     .join("");

//   // 3. Tampilkan ke container
//   container.innerHTML = htmlHasil;
// }

// function pilihObat(nama) {
//   alert("Anda memilih: " + nama);
//   document.getElementById("hasilPencarian").innerHTML = "";
// }
// ambildataObat();

// ambil obat dari file json
let obatGlobal = [];
async function loadData() {
  try {
    const respone = await fetch("obat.json");
    let data = await respone.json();
    obatGlobal = data;
    // menampilkan semua data dengan looping
    console.log("Data Berhasil Dimuat");
  } catch (error) {
    console.log("Data Gagal Dimuat");
  }
}

// logika fitur pencarian obat di index.html dengan data yang diambil dr json
function cariObat() {
  const keyword = document.getElementById("searchInput").value.toLowerCase();
  const container = document.getElementById("hasilPencarian");

  //   // Jika input kosong, bersihkan hasil dan berhenti
  if (keyword === "") {
    container.innerHTML = "";
    return;
  }
  // Kita filter dari variabel global, bukan dari fetch lagi
  const hasil = obatGlobal.filter((obat) => obat.name.toLowerCase().includes(keyword));

  tampilkanHasil(hasil);
}
// tampilakn ke layar
// Pastikan fungsi ini ada!
function tampilkanHasil(hasil) {
  const container = document.getElementById("hasilPencarian");

  // Jika tidak ada hasil
  if (hasil.length === 0) {
    container.innerHTML = "<p class='no-result'>Obat tidak ditemukan.</p>";
    return;
  }

  // 1. Map data ke dalam HTML (Mengubah array objek menjadi array string HTML)
  const htmlHasil = hasil
    .map(
      (item) => `
    <div class="search-item">
        <div class="info">
            <strong>${item.name}</strong>
            <p>Stok: ${item.stok || 0} | Rp${item.harga || 0}</p>
        </div>
        <button class="btn-pilih" onclick="pilihObat('${item.name}')">Pilih</button>
    </div>
  `,
    )
    .join(""); // Menggabungkan semua string menjadi satu tanpa koma

  // 2. Masukkan string HTML ke dalam container sekaligus
  container.innerHTML = htmlHasil;
}

// Fungsi saat tombol "Pilih" diklik
function pilihObat(nama) {
  alert("Anda memilih obat: " + nama);

  // Opsional: Isi input pencarian dengan nama yang dipilih
  document.getElementById("searchInput").value = nama;

  // Bersihkan hasil pencarian setelah memilih
  document.getElementById("hasilPencarian").innerHTML = "";
}

// Panggil loadData saat script pertama kali dijalankan
loadData();

// tampilkan data obat
// async function tampilkanKeLayar() {
//   const response = await fetch("obat.json");
//   const data = await response.json();
//   const list = document.getElementById("daftar-obat");

//   data.forEach((obat) => {
//     const li = document.createElement("li");
//     li.textContent = `${obat.id} : ${obat.name}, ${obat.stok}, ${obat.harga}`;
//     list.appendChild(li);
//   });
// }

// tampilkanKeLayar();
