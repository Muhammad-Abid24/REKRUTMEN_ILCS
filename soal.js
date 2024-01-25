// Data hasil pengerjaan soal oleh siswa
const hasilPengerjaan = [
  { nama: 'Andi', soal1: 'BENAR', soal2: 'SALAH', soal3: 'BENAR', soal4: 'BENAR', soal5: 'SALAH' },
  { nama: 'Maya', soal1: 'SALAH', soal2: 'SALAH', soal3: 'SALAH', soal4: 'BENAR', soal5: 'BENAR' },
  { nama: 'Budi', soal1: 'BENAR', soal2: 'SALAH', soal3: 'BENAR', soal4: 'SALAH', soal5: 'BENAR' },
  { nama: 'Asih', soal1: 'BENAR', soal2: 'BENAR', soal3: 'BENAR', soal4: 'BENAR', soal5: 'SALAH' },
  { nama: 'Raja', soal1: 'SALAH', soal2: 'SALAH', soal3: 'BENAR', soal4: 'BENAR', soal5: 'BENAR' }
];

// Skor bobot
const skorBobot = {
  BENAR: { soal1: 10, soal2: 30, soal3: 20, soal4: 20, soal5: 20 },
  SALAH: { soal1: 0, soal2: 0, soal3: 0, soal4: 0, soal5: 0 }
};

// Menghitung skor akhir per siswa
const skorAkhirSiswa = hasilPengerjaan.map(siswa => {
  // Menggunakan metode reduce untuk menjumlahkan skor dari setiap soal yang dijawab oleh siswa
  const skor = Object.keys(skorBobot.BENAR).reduce((total, soal) => {
    // Menentukan skor untuk setiap soal berdasarkan jawaban siswa
    return total + (siswa[soal] === 'BENAR' ? skorBobot.BENAR[soal] : skorBobot.SALAH[soal]);
  }, 0); // Nilai awal total diatur sebagai 0

  // Mengembalikan objek yang berisi nama siswa dan skor akhirnya
  return { nama: siswa.nama, skor: skor };
});

// Mengurutkan list berdasarkan skor akhir secara descending(dari skor terbesar ke terkecil)
const listTerurut = skorAkhirSiswa.sort((a, b) => b.skor - a.skor);

// Menampilkan output
console.log('List yang terurut berdasarkan skor akhir (descending):');
console.log('index NAMA SKOR');
listTerurut.forEach((siswa, index) => {
  console.log(`${index + 1} ${siswa.nama} ${siswa.skor}`);
});
