// Impor library Express
const express = require('express');
// Impor library Path (bawaan Node.js)
const path = require('path');

// Inisialisasi aplikasi Express
const app = express();

// Tentukan port, gunakan environment variable PORT jika ada (untuk Railway), 
// atau 3000 jika dijalankan lokal
const PORT = process.env.PORT || 3000;

// Middleware untuk menyajikan file statis dari folder 'public'
// Ini akan otomatis menyajikan index.html saat mengunjungi root URL
app.use(express.static(path.join(__dirname, 'public')));

// Jalankan server di port yang ditentukan
app.listen(PORT, () => {
  console.log(`Server MIJ Service Hub berjalan di http://localhost:${PORT}`);
});
