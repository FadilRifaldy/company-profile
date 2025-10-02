"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className="sticky w-full bg-[] backdrop-blur-md bg-[#1a64a6] z-50">
      <div className="max-w-7xl mx-auto px-28 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div>
            <Link href="/" className="relative z-10">
              <Image
                src="https://www.pocarisweat.id/assets/imgs/logo.svg"
                alt="logo pocari"
                width={0}
                height={0}
                className="w-[106px] h-[40px]"
              />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 font-poppins text-white">
            <Link
              href="#about"
              className="hover:text-black font-medium transition-transform hover:scale-110 duration-500 border-[] px-[10px] py-[3px] hover:bg-white rounded-[15px]"
            >
              About Us
            </Link>
            <Link
              href="/our-products"
              className="hover:text-black font-medium transition-transform hover:scale-110 duration-500 border-[] px-[10px] py-[3px] hover:bg-white rounded-[15px]"
            >
              Our Products
            </Link>
            <Link
              href="/blog"
              className="hover:text-black font-medium transition-transform hover:scale-110 duration-500 border-[] px-[10px] py-[3px] hover:bg-white rounded-[15px]"
            >
              Articles
            </Link>
            <Link
              href="/teams"
              className="hover:text-black font-medium transition-transform hover:scale-110 duration-500 border-[] px-[10px] py-[3px] hover:bg-white rounded-[15px]"
            >
              Teams
            </Link>
            <Link
              href="/create-blog"
              className="hover:text-black font-medium transition-transform hover:scale-110 duration-500 border-[] px-[10px] py-[3px] hover:bg-white rounded-[15px]"
            >
              Create Blog
            </Link>
            <button
              type="button"
              className="font-semibold bg-white text-black px-6 py-2 rounded-full hover:bg-gray-400 transition-transform hover:scale-110 duration-500"
              onClick={() => router.push("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
