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
