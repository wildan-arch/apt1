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

function confirmDelete(name) {
  if (confirm(`Apakah Anda yakin ingin menghapus ${name.toUpperCase()}? Data yang dihapus tidak bisa dikembalikan.`)) {
    // Logika hapus di sini
    alert(`${name.toUpperCase()} berhasil dihapus.`);
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
    sortAZ(obatGlobal);

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
      (obat, index) => `
    <tr>
      <td>${index + 1}</td>
      <td><strong>${obat.name}</strong></td>
      <td><strong>${obat.kategori}</strong></td>
      <td><strong>${obat.indikasi}</strong></td>
      <td>${obat.stok}</td>
      <td>Rp ${obat.harga.toLocaleString("id-ID")}</td>
    <td>
    <button class="btn-edit" onclick="openModal('modalEdit')">
        <i class="fas fa-edit"></i>
    </button>
    
    <button class="btn-delete" onclick="confirmDelete('${obat.name}')">
        <i class="fas fa-trash"></i>
    </button>
</td>
  `,
    )
    .join("");
}

// 5. Jalankan loadData saat halaman terbuka
loadData();

// sort a-z
function sortAZ() {
  obatGlobal.sort((a, b) => a.name.localeCompare(b.name));
  tampilkanTabel(obatGlobal);
}
