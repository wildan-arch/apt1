function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}

// Menutup modal jika user klik di luar kotak modal
window.onclick = function (event) {
  if (event.target.className === "modal") {
    event.target.style.display = "none";
  }
};

function confirmDelete() {
  if (confirm("Apakah Anda yakin ingin menghapus produk ini? Data yang dihapus tidak bisa dikembalikan.")) {
    // Logika hapus di sini
    alert("Produk berhasil dihapus.");
  }
}

// ambil data obat dari json
// 1. Variabel Global
let obatGlobal = [];

// 2. Fungsi Utama Ambil Data
async function loadData() {
  try {
    const response = await fetch("obat.json");
    const obat = await response.json();
    obatGlobal = obat;
    // Panggil fungsi-fungsi pengolah data di sini
    updateDashboard();
    tampilkanTabel(obatGlobal);

    console.log("Data berhasil dimuat dan diproses.");
  } catch (error) {
    console.error("Gagal load data:", error);
  }
}

// 3. Fungsi untuk Update Angka Dashboard
function updateDashboard() {
  const elemenTotal = document.getElementById("totalProduk");
  if (elemenTotal) {
    elemenTotal.innerText = obatGlobal.length;
  }
}

// 4. Fungsi untuk Render Tabel dengan .map()
function tampilkanTabel(data) {
  const tbody = document.getElementById("isiTabelObat");
  if (!tbody) return;

  tbody.innerHTML = data
    .map(
      (obat) => `
    <tr>
      <td>${obat.id}</td>
      <td><strong>${obat.name}</strong></td>
     
      <td>${obat.stok}</td>
      <td>Rp ${obat.harga.toLocaleString("id-ID")}</td>
      
    </tr>
  `,
    )
    .join("");
}

// 5. Jalankan loadData saat halaman terbuka
loadData();
