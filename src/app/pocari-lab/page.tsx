"use client";
import { motion } from "framer-motion";

export default function PocariLab() {
  return (
    <div className="font-poppins h-full min-h-screen bg-gradient-to-br from-[#90C9F9] to-[#1976D2]">
      <div className="max-w-7xl mx-auto px-10 py-16">
        <select
          className="text-white font-bold text-xl md:text-2xl cursor-pointer w-60 rounded-lg"
          onChange={(e) => {
            window.location.href = e.target.value;
          }}
        >
          <option value="/" className="text-black text-xl">
            Pocari Sweat Lab
          </option>
          <option value="/" className="text-black text-xl">
            Kenapa Kamu Butuh Pocari Sweat?
          </option>
          <option value="/" className="text-black text-xl">
            Kapan Kamu Butuh Pocari Sweat?
          </option>
          <option value="/our-products" className="text-black text-xl">
            Product Knowledge
          </option>
        </select>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              500 ML
            </h1>

            <p className="mt-30 text-[18px] leading-relaxed max-w-lg">
              Saat kita berolahraga sangatlah penting untuk memperhatikan status
              hidrasi karena tubuh kita melakukan aktivitas dengan intensitas
              yang lebih tinggi dibandingkan aktivitas sehari-hari. Sehingga,
              tubuh kita lebih banyak kehilangan cairan dengan mengeluarkan
              keringat lebih banyak.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/scroll_bottle_500ml.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[350px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              900 ML
            </h1>

            <p className="mt-30 text-[18px] leading-relaxed max-w-lg">
              Pilihan tepat untuk mereka yang membutuhkan lebih banyak pengganti
              cairan + ION tubuh untuk mencapai performa yang lebih dalam
              berolahraga.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/pocari_900_3.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[200px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              2 LITER
            </h1>

            <p className="mt-30 text-[18px] leading-relaxed max-w-lg">
              POCARI SWEAT 2 Liter sangat cocok untuk sharing dengan keluarga
              atau orang terdekat agar tetap terhidrasi selama beraktivitas.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/scroll_bottle_2l.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[350px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              350 ML
            </h1>

            <p className="mt-30 text-[18px] leading-relaxed max-w-lg">
              POCARI SWEAT 350 mL untuk menjaga hidrasimu sehari-hari. POCARI
              SWEAT diminum untuk menggantikan cairan dan ion tubuh yang hilang.
              POCARI SWEAT dapat diminum kapanpun saat kita butuh mengembalikan
              cairan tubuh.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/scroll_bottle_350ml.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[350px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              330 ML
            </h1>

            <p className="mt-30 text-[18px] leading-relaxed max-w-lg">
              POCARI SWEAT pertama kali pada tahun 1989 dengan bentuk kaleng 330
              mL. POCARI SWEAT 330 mL untuk menjaga hidrasimu sehari-hari.
              POCARI SWEAT diminum untuk menggantikan cairan dan ion tubuh yang
              hilang dan dapat diminum kapanpun saat kita butuh mengembalikan
              cairan tubuh.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px]">
            <img
              src="/images/scroll_cans.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[500px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              SACHET 15 G
            </h1>

            <p className="mt-30 text-[18px] leading-relaxed max-w-lg">
              Ingin bepergian? Tetap jaga hidrasimu dengan POCARI SWEAT Sachet
              15 g. POCARI SWEAT Sachet 15 g ini merupakan kemasan praktis dan
              ekonomis, terutama saat traveling (hiking, trekking, haji atau
              berwisata). Saat traveling, bawaan barang kita pasti sudah banyak
              dan berat.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px] pl-20">
            <img
              src="/images/scroll_sachet.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[500px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              APA ITU ION?
            </h1>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/scroll_body_1.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[200px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <p className="mt-80 text-[18px] leading-relaxed max-w-lg">
              ION atau bisa disebut juga elektrolit adalah garam-garam mineral
              yang secara alami ada di dalam tubuh kita.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/scroll_body_2.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[300px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <p className="mt-60 text-[18px] leading-relaxed max-w-lg">
              Saat kita berolahraga sangatlah penting untuk memperhatikan status
              hidrasi karena tubuh kita melakukan aktivitas dengan intensitas
              yang lebih tinggi dibandingkan aktivitas sehari-hari. Sehingga,
              tubuh kita lebih banyak kehilangan cairan dengan mengeluarkan
              keringat lebih banyak.
            </p>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/scroll_body_2.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[300px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[] text-white rounded-lg min-h-screen"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-10">
          <div className="text-white">
            <h1 className="md:text-7xl font-extrabold mt-10 text-shadow-lg">
              FUNGSI ION
            </h1>
            <div className="mt-30 text-[18px] leading-relaxed max-w-lg space-y-4 font-semibold">
              <p className="border bg-white px-3 py-2 rounded-lg text-[#337dbf]">
                Diperlukan oleh saraf dan pergerakan otot
              </p>
              <p className="border bg-white px-3 py-2 rounded-lg text-[#337dbf]">
                Menjaga keseimbangan cairan tubuh
              </p>
              <p className="border bg-white px-3 py-2 rounded-lg text-[#337dbf]">
                Berperan agar daya tahan tubuh berfungsi optimal
              </p>
            </div>
          </div>

          <div className="flex justify-center mt-[-60px] pl-45">
            <img
              src="/images/scroll_bottle_500ml.png"
              alt="Pocari Sweat 500ml"
              className="lg:w-[350px] drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
