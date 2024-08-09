document.getElementById("CheckButton").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim(); // Menghapus spasi di awal dan akhir
  if (name === "") {
    alert("Harap masukkan nama Anda");
  } else {
    // Menampilkan modal dan loading animasi
    document.getElementById("modalContent").innerHTML = `
      <div class="flex justify-center items-center">
        <div class="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12"></div>
        <p class="ml-4">Sedang memproses...</p>
      </div>`;
    my_modal_2.showModal(); // Tampilkan modal

    // Simulasi waktu tunggu untuk proses checkKhodam
    setTimeout(() => {
      const result = checkKhodam(name);
      document.getElementById("modalContent").innerText = result; // Isi modal dengan hasil
    }, 1500); // Waktu tunggu 2 detik
  }
});

function checkKhodam(name) {
  // Logika untuk menentukan khodam berdasarkan nama
  const khodams = [
    "Kunti Koplak",
    "Genderuwo Botak",
    "Pocong Asu",
    "Sendal Kejepit",
    "Bunglon Mabok",
    "Kunti Bogel",
    "Pocong Bogel",
    "Tuyul Koplak",
    "Genderuwo Ijo",
    "Kapal Lawd",
  ];
  // Menghasilkan indeks acak
  const randomIndex = Math.floor(Math.random() * khodams.length);
  return `Khodam Anda adalah ${khodams[randomIndex]}`;
}
