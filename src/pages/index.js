import { motion } from 'framer-motion';
import { BookOpen, Search, Users, Award, Download, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const books = [
    { id: 1, title: "Matematika Kelas 7", category: "Pelajaran", grade: "7", pages: 256, cover: "/images/books/math7.jpg" },
    { id: 2, title: "Bahasa Indonesia Kelas 8", category: "Pelajaran", grade: "8", pages: 198, cover: "/images/books/ind8.jpg" },
    { id: 3, title: "Sejarah Indonesia", category: "Pelajaran", grade: "9", pages: 320, cover: "/images/books/history9.jpg" },
    { id: 4, title: "Cerpen Terpilih SMP", category: "Sastra", grade: "7-9", pages: 150, cover: "/images/books/cerpen.jpg" },
    { id: 5, title: "Biografi Tokoh Indonesia", category: "Biografi", grade: "7-9", pages: 220, cover: "/images/books/biografi.jpg" },
  ];

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Perpus Digital Premium
                </h1>
                <p className="text-sm text-gray-500">SMP Mardi Waluya 2 Kota Sukabumi</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#beranda" className="text-gray-700 hover:text-blue-600 font-medium transition-all">Beranda</a>
              <a href="#koleksi" className="text-gray-700 hover:text-blue-600 font-medium transition-all">Koleksi</a>
              <a href="#tentang" className="text-gray-700 hover:text-blue-600 font-medium transition-all">Tentang</a>
              <a href="#kontak" className="text-gray-700 hover:text-blue-600 font-medium transition-all">Kontak</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
              Perpustakaan Digital
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 leading-relaxed">
              Akses ribuan buku pelajaran, sastra, dan referensi berkualitas tinggi untuk siswa SMP Mardi Waluya 2 Kota Sukabumi
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Cari buku, kategori, atau kelas..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-6 py-4 bg-white/80 backdrop-blur-md border-2 border-blue-200 rounded-2xl focus:border-blue-400 focus:outline-none shadow-xl text-lg placeholder-gray-500 transition-all duration-300"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
              >
                Cari Buku
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="p-8 bg-white/60 rounded-3xl shadow-xl border border-blue-100"
            >
              <BookOpen className="w-16 h-16 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-xl font-semibold text-gray-700">Buku Digital</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-white/60 rounded-3xl shadow-xl border border-blue-100"
            >
              <Users className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
              <div className="text-xl font-semibold text-gray-700">Pengguna Aktif</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="p-8 bg-white/60 rounded-3xl shadow-xl border border-blue-100"
            >
              <Award className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <div className="text-xl font-semibold text-gray-700">Gratis Selamanya</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="p-8 bg-white/60 rounded-3xl shadow-xl border border-blue-100"
            >
              <Clock className="w-16 h-16 text-orange-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-xl font-semibold text-gray-700">Akses Online</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Koleksi Buku */}
      <section id="koleksi" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-20"
          >
            <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Koleksi Buku Unggulan
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pilihan buku terbaik untuk pembelajaran siswa SMP Mardi Waluya 2
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredBooks.map((book, index) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group bg-white/70 backdrop-blur-md rounded-3xl shadow-xl hover:shadow-2xl border border-blue-100 overflow-hidden transition-all duration-500 hover:border-blue-300"
              >
                <div className="h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-8 flex items-end group-hover:scale-105 transition-transform duration-500">
                  <div className="w-32 h-44 bg-gradient-to-br from-white/90 to-gray-100/90 rounded-2xl shadow-2xl mx-auto transform group-hover:rotate-6 transition-transform duration-500" />
                </div>
                <div className="p-8">
                  <div className="flex items-center text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-4 max-w-max">
                    📚 {book.category}
                  </div>
                  <h4 className="font-bold text-xl text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {book.title}
                  </h4>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-sm font-semibold text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                      Kelas {book.grade}
                    </span>
                    <span className="text-2xl font-bold text-gray-900">{book.pages} hal</span>
                  </div>
                  <div className="flex gap-3">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                    >
                      Baca Sekarang
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-300"
                    >
                      <Download className="w-5 h-5 text-gray-700" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-16 mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
            <div>
              <div className="flex items-center justify-center md:justify-start mb-6">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mr-4">
                  <BookOpen className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Perpus Digital</h3>
                  <p className="text-blue-200">SMP Mardi Waluya 2</p>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Kontak</h4>
              <p className="text-blue-200">Jl. Raya Cicurug No. 123<br/>Kota Sukabumi<br/>Telp: (0266) 123456</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Jam Operasional</h4>
              <p className="text-blue-200">24 Jam / 7 Hari<br/>Akses Online</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Sosial Media</h4>
              <div className="flex space-x-4 justify-center md:justify-start">
                <a href="#" className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                  📘
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                  📷
                </a>
                <a href="#" className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center hover:bg-white/30 transition-all duration-300">
                  💬
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p>&copy; 2024 Perpustakaan Digital SMP Mardi Waluya 2 Kota Sukabumi. Dibuat dengan ❤️ untuk pendidikan.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
