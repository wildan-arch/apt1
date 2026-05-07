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
