// Mengambil elemen dari HTML
let nilaiAwal = 0;
const tampilanAngka = document.getElementById("angka");
const tombolTambah = document.getElementById("tambah");
const tombolKurang = document.getElementById("kurang");
const tombolReset = document.getElementById("reset");

// Fungsi untuk memperbarui tampilan angka di layar
function perbaruiTampilan() {
    tampilanAngka.textContent = nilaiAwal;
}

// Event saat tombol Tambah diklik
tombolTambah.addEventListener("click", function() {
    nilaiAwal++;
    perbaruiTampilan();
});

// Event saat tombol Kurang diklik
tombolKurang.addEventListener("click", function() {
    nilaiAwal--;
    perbaruiTampilan();
});

// Event saat tombol Reset diklik
tombolReset.addEventListener("click", function() {
    nilaiAwal = 0;
    perbaruiTampilan();
});
