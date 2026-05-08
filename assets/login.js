document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value;

  // Simulasi akun admin sederhana
  const adminUser = "admin";
  const adminPass = "123";

  if (user === adminUser && pass === adminPass) {
    alert("Login Berhasil! Selamat datang Admin Shabah.");
    // Di sini nantinya diarahkan ke halaman dashboard
    window.location.href = "dashboard.html";
  } else {
    alert("Username atau Password salah! Silakan coba lagi.");
    // reset form
    document.getElementById("loginForm").reset();
    // focus kembali ke input username
    document.getElementById("username").focus();
  }
});
