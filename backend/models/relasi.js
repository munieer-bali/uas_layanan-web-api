// relasi.js
import db from '../config/database.js';
import Akun from '../models/SimpanModel.js';
import Profile from '../models/ProfileModel.js';
import Post from '../models/PostModel.js';

// Sebuah Profile dimiliki oleh satu Akun
Profile.belongsTo(Akun, { foreignKey: 'akunId' });

// Sebuah Akun memiliki satu Profile
Akun.hasOne(Profile, { foreignKey: 'akunId' });

// Sebuah Post dimiliki oleh satu Akun
Post.belongsTo(Akun, { foreignKey: 'akunId' });

// Sebuah Akun dapat memiliki banyak Post
Akun.hasMany(Post, { foreignKey: 'akunId' });

export { Akun, Profile, Post };

(async () => {
    try {
        await db.sync({ force: true }); // Hati-hati menggunakan { force: true } karena ini akan menghapus semua tabel yang ada
        console.log('Database & tabel berhasil dibuat!');
    } catch (error) {
        console.error('Gagal membuat database & tabel:', error);
    }
})();
