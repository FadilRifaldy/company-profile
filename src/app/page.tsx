import Link from "next/link";
import Image from "next/image";
import HighlightSection from "@/component/highlight";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/pocari-bg-hd.jpg" // Ganti dengan path gambar background Anda
            alt="Pocari Sweat Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2575AE] via-[blue-400/1] to-blue-300/1 z-10"></div>

        {/* Box Transparan */}
        <div className="bg-[#2E7AC0]/50 left-1/2 -translate-x-1/2 text-white max-w-[800px] p-8 rounded-t-2xl shadow-xl absolute z-50 bottom-0">
          <h3 className="text-[18px] font-semibold mb-4 font-poppins">
            #JAGACAIRANTUBUH
          </h3>
          <p className="font-poppins font-bold text-[30px]">
            Saat cuaca panas, tetap #JagaCairanTubuh dengan POCARI SWEAT agar
            tubuh tetap terhidrasi.
          </p>
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------------ */}

      <section className="relative min-h-screen pt-20 pb-20 w-full overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Pocari Sweat Lab Banner */}
          <div className="relative mb-16 rounded-3xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/images/banner.png" // Ganti dengan path background image Anda
                alt="Pocari Sweat Lab Background"
                fill
                className="object-cover"
              />
            </div>

            {/* Blue Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#3880C3]/90 via-blue-400/0 to-blue-500/0 z-10"></div>

            {/* Content */}
            <div className="font-poppins relative z-20 flex items-center justify-between p-13">
              <div className="text-white space-y-4 max-w-md">
                <h2 className="text-4xl font-bold">Pocari Sweat Lab</h2>
                <p className="text-lg text-blue-50">
                  Ketahui semua tentang ION dan Pocari Sweat.
                </p>
                <button className="hover:bg-gray-400 bg-white text-[#000] px-8 py-3 rounded-full font-semibold shadow-lg transition-transform hover:scale-110 duration-500">
                  Kunjungi
                </button>
              </div>

              {/* Products Display */}
              <div className="absolute right-8 translate-y-3 w-[400px] h-[350px]">
                <Image
                  src="/images/home-banner-img.png"
                  alt="Pocari Sweat Products"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-6">
            {/* Articles Section */}
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-4xl font-bold text-gray-800">
                For Your Daily Reads
              </h2>
              <Link
                href="/blog"
                className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 transition-colors"
              >
                See All Articles
              </Link>
            </div>
          </div>
        </div>
        <HighlightSection />
      </section>

      {/* ------------------------------------------------------------------------------------------------ */}

      <section className="relative min-h-screen pt-20 w-full overflow-hidden">
        <div className="absolute bg-gray-500/60 inset-0 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sectionvid2.jpeg" // Ganti dengan path gambar background Anda
            alt="Pocari Sweat Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute top-[10%] left-[50%] transform -translate-x-1/2 w-[80vw] max-w-5xl aspect-video z-10">
          <iframe
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/aoc09TGwLjA?autoplay=0&mute=0&controls=1"
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* ------------------------------------------------------------------------------------------------ */}
      {/* <div className="h-15 bg-gray-50"></div> */}
      {/* ------------------------------------------------------------------------------------------------ */}

      {/* Instagram GIF Section */}
      <section className="relative bg-gradient-to-r from-[#1a64a6] via-[#3880C3] to-blue-200 py-7 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/upscalemedia-transformed.jpeg" // Ganti dengan path background image Anda
            alt="Pocari Footer Background"
            fill
            className="object-cover opacity-30"
          />
        </div>

        {/* Blue Overlay */}

        {/* Content Container */}
        <div className="relative z-20 max-w-7xl mx-auto px-18">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6 text-shadow-lg">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Add Pocari Sweat GIF to Your Instagram Stories!
              </h2>
              <p className="text-lg text-blue-50 leading-relaxed max-w-md font-medium">
                Ketik Pocari Sweat pada kolom search di GIPHY Instagram Stories
                kamu, setelah itu pilih GIF yang kamu suka untuk Insta
                Stories-mu.
              </p>
            </div>

            {/* Right Content - Phone Mockup */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-100 h-[600px] mb-10">
                  <Image
                    src="/images/info-phone-img.png" // Ganti dengan path gambar phone mockup Anda
                    alt="Instagram Stories with Pocari Sweat GIFs"
                    width={320}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
