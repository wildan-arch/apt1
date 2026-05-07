document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const user = document.getElementById("username").value;
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
  }
});
