function hitungUsia() {
  const tahunLahirInput = document.getElementById("tahunLahir");
  const tahunLahir = tahunLahirInput.value;
  const hasil = document.getElementById("hasil");
  const tahunSekarang = new Date().getFullYear();

  // Pastikan kamu menghapus class lama agar warna/style tidak tertinggal
hasil.classList.remove("danger");

if (tahunLahir === "") {
  hasil.innerHTML = "Isi dulu";
  hasil.classList.add("danger");
  return;
} 

// Perbaikan: Gunakan >= bukan =>
else if (tahunLahir >= tahunSekarang) {
  hasil.innerHTML = "Tahun tidak valid (Masa Depan)";
  hasil.classList.add("danger");
  return;
} 

// Logika: Jika tahun lahir kurang dari 1900 (bukan 1990, kecuali targetnya memang milenial)
else if (tahunLahir < 1900) {
  hasil.innerHTML = "Tahun terlalu lama";
  hasil.classList.add("danger");
  return;
}


  const usia = tahunSekarang - tahunLahir;
  
  // Mencari elemen dengan id="hasil"
  
  // Menampilkan teks dan variabel usia
  hasil.classList.remove("danger")
  hasil.innerHTML = "Usia Anda sekarang adalah <b>" + usia + "</b> tahun.";
}
