function hitungUsia() {
  const tahunLahirInput = document.getElementById("tahunLahir");
  const tahunLahir = tahunLahirInput.value;
  const hasil = document.getElementById("hasil");

  if (tahunLahir === "") {
    hasil.innerHTML = "Isi dulu";
    hasil.classList.add("danger")
    return;
  }

  const tahunSekarang = new Date().getFullYear();
  const usia = tahunSekarang - tahunLahir;
  
  // Mencari elemen dengan id="hasil"
  
  // Menampilkan teks dan variabel usia
  hasil.classList.remove("danger")
  hasil.innerHTML = "Usia Anda sekarang adalah <b>" + usia + "</b> tahun.";
}
