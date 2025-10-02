import Image from "next/image";
import Link from "next/link";

export default function OurProducts() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#90C9F9] to-[#1976D2] text-white flex items-center">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between w-full px-6">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-shadow-lg md:text-[80px] font-extrabold leading-tight">
            POCARI SWEAT
            <br />
            THE ION
            <br />
            SUPPLY DRINK
          </h1>

          <div className="text-shadow-lg mt-10 flex flex-col gap-4 w-full md:w-[600px] text-center">
            <Link
              href="/"
              className="shadow-lg transition-transform hover:scale-105 duration-500 font-semibold border border-white rounded-lg py-1 px-6 hover:bg-white hover:text-black"
            >
              Kenapa Kamu Butuh Pocari Sweat?
            </Link>

            <Link
              href="/"
              className="shadow-lg transition-transform hover:scale-105 duration-500 font-semibold border border-white rounded-lg py-1 px-6 hover:bg-white hover:text-black"
            >
              Kapan Kamu Butuh Pocari Sweat?
            </Link>
            <Link
              href="/pocari-lab"
              className="shadow-lg transition-transform hover:scale-105 duration-500 font-semibold border border-white rounded-lg py-1 px-6 hover:bg-white hover:text-black"
            >
              Pocari Sweat Lab
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center md:justify-end mt-39 ml-10">
          <div className="relative md:w-[700px] md:h-[500px]">
            <Image
              src="/images/home-banner-img.png"
              alt="Pocari Products"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </main>
  );
}
