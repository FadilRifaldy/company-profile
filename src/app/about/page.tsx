import Image from "next/image";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen ">
      <section className="bg-[#1B489B]">
        <div className="max-w-6xl mx-auto pt-20">
          <div className="flex font-rubik">
            <div>
              <h5 className="text-[#e4eeff] text-[15px] tracking-[8px] mb-2">
                OVERVIEW
              </h5>
              <h4 className="text-[20px] text-[#e4eeff] font-bold md:w-[250px] leading-loose">
                Otsuka-people creating new products for better health worldwide
              </h4>
            </div>
            <div className="text-[#e4eeff] text-[18px] leading-loose space-y-10 max-w-[830px] ml-[20px] mb-20">
              <p>
                Di awal berdirinya pada tahun 1997, Otsuka merupakan perusahaan
                afiliasi dari Otsuka Pharmaceutical Co, Ltd Jepang yang memulai
                perjalanannya di Indonesia dengan nama PT Kapal Indah Otsuka.
                Perusahaan ini terbentuk dari hasil investasi bersama antara
                Otsuka Pharmaceutical Jepang dan PT Kapal Api dengan Pocari
                Sweat sebagai produk pertamanya. Kemudian di tahun 1999, PT
                Kapal Indah Otsuka merubah namanya menjadi PT Amerta Indah
                Otsuka.
              </p>
              <p>
                Semakin berkembangnya perusahaan, pada tahun 2004 PT Amerta
                Indah Otsuka membuka pabrik pertama yang terletak di Sukabumi,
                Jawa Barat menyusul 6 tahun berikutnya pabrik Pocari Sweat di
                Kejayan, Pasuruan, Jawa Timur didirikan. Dengan keberhasilannya
                dalam memasarkan produk, hingga kini produk yang dihasilkan
                telah didistribusikan di seluruh Indonesia. PT Amerta Indah
                Otsuka gencar melakukan pendistribusian baik secara langsung
                melalui kantor cabang resmi maupun distributor-distributor yang
                tersebar di seluruh Indonesia dan Asia Tenggara.
              </p>
              <p>
                Seiring dari kemajuan perusahaan, Otsuka berkomitmen untuk terus
                meningkatkan kualitas dengan mengimplementasikan Sistem
                Manajemen Mutu ISO 9001:2015, Sistem Keamanan Pangan ISO 22000 :
                2015, dan Sistem Manajemen Lingkungan ISO 14001 : 2015.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#131C55] py-0 font-rubik">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center text-[18px]">
          <div className="bg-[#426bba] text-[#e4eeff] p-10 md:w-[700px] leading-relaxed space-y-6 px-20 shadow-xl">
            <p className="tracking-[6px] text-[14px]">PESAN</p>
            <p>
              &quot;Kami telah berkontribusi dalam bisnis nutrasetikal melalui
              produk minuman dan makanan fungsional untuk kesehatan. Di bawah
              filosofi perusahaan kami,
              <b>
                {" "}
                &quot;Otsuka – People creating new products for better health
                worldwide&quot;
              </b>
              , kami telah berkontribusi pada kesehatan dan pencegahan penyakit
              di Indonesia.
            </p>
            <p>
              Melalui berbagai aktivitas kami, kami mendorong masyarakat untuk
              mengubah perilaku dalam memilih produk yang baik untuk kesehatan.
              Upaya ini ibarat mendaki gunung – tidak selalu mudah, namun dengan
              ide-ide inovatif sebagai bintang penuntun, digitalisasi sebagai
              peta, dan perbaikan terus-menerus sehari-hari sebagai perlengkapan
              pendakian, kami bertujuan mencapai puncak dan berkontribusi pada
              kesehatan.
            </p>
            <p>
              Perusahaan kami maju berkat semangat dan upaya dari setiap
              individu di Otsuka. Kami berkomitmen untuk terus berkontribusi
              pada kesehatan dan kesejahteraan semua orang serta tumbuh bersama
              komunitas.
            </p>
            <p>
              Kami dengan tulus mengapresiasi dukungan dan kerja sama Anda, dan
              kami menantikan untuk melanjutkan perjalanan kami dalam
              berkontribusi pada kesehatan dan kesejahteraan bersama Anda.&quot;
            </p>

            <div className="flex justify-end text-center pt-4 text-[18px] ">
              <div>
                <p className="font-semibold">Makoto Ikemoto</p>
                <p className="opacity-80">
                  Presiden Direktur <br />
                  PT Amerta Indah Otsuka
                </p>
              </div>
            </div>
          </div>
          <div className="relative w-[300px] h-[360px] md:w-[450px] md:h-[450px] overflow-hidden shadow-xl">
            <Image
              src="/images/ikemoto.png"
              alt="Presiden Otsuka"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="bg-[#1B489B] min-h-screen font-rubik">
        <div className="max-w-6xl mx-auto pt-15">
          <div>
            <div>
              <h5 className="text-[#e4eeff] text-[35px] mb-8 font-bold">
                Visi dan Misi
              </h5>
              <h1 className="text-[14px] text-[#e4eeff] md:w-[250px] tracking-[10px] mb-6">
                VISI
              </h1>
            </div>
            <div className="text-[#e4eeff]">
              <div className="flex">
                <p className="text-[20px] font-bold">
                  Menjadi perusahaan yang brilliant, dengan memberikan
                  kontribusi yang signifikan dan terpercaya bagi konsumen serta
                  masyarakat.
                </p>
                <div className="flex justify-center md:justify-end mt-[-60px]">
                  <img
                    src="/images/amerta-building.png"
                    className="shadow-lg w-full md:w-[100%] md:h-[100%] object-cover"
                  />
                </div>
              </div>

              <div className="md:w-[700px] -mt-45 text-[#e4eeff]">
                <h1 className="text-[14px] text-[#e4eeff] md:w-[250px] tracking-[10px] mb-8">
                  MISI
                </h1>
                <div className="leading-loose pb-18 flex text-[18px]">
                  <div className="space-x-10 space-y-15 ">
                    <p className="md:w-[350px]">
                      Mengembangkan dan mempertahankan karyawan yang berkualitas
                      tinggi untuk menghasilkan produk berkualitas tinggi.
                    </p>
                    <p className="md:w-[350px]">
                      Menangkap peluang di semua aspek secara tepat dan inovatif
                      untuk kesejahteraan dan kepuasan konsumen serta
                      perkembangan perusahaan..
                    </p>
                  </div>

                  <div className="space-y-20 ">
                    <p className="md:w-[330px]">
                      Menjadikan kebutuhan dan kesejahteraan konsumen dan
                      masyarakat sebagai prioritas utama.
                    </p>
                    <div className="flex">
                      <p className="md:w-[330px]">
                        Mengembangkan dan mempertahankan hubungan yang saling
                        menguntungkan dengan rekan bisnis.
                      </p>
                      <p className="md:w-[350px] ml-12">
                        Menjadi perusahaan yang terpercaya.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
