import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3880C3]">
      <div>
        <div className="flex justify-center gap-30 py-14">
          <div className="z-0">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="logo"
                width={0}
                height={0}
                className="w-[150px] h-[80px] hover:scale-110 transition-transform duration-500"
              />
            </Link>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Our Products</h3>
            <div className="space-y-3">
              <Link
                href="/blog"
                className="block text-white hover:text-gray-300 hover:scale-103 transition-transform duration-500"
              >
                Articles
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2 ">Events</h3>
            <div className="space-y-3">
              <Link
                href="/pocari-sport"
                className="block text-white hover:text-gray-300 hover:scale-103 transition-transform duration-500"
              >
                Pocari Sweat Sport
              </Link>
              <Link
                href="/pocari-lab"
                className="block text-white hover:text-gray-300 hover:scale-103 transition-transform duration-500"
              >
                Science
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">FAQ</h3>
            <div className="space-y-3">
              <Link
                href="/terms"
                className="block text-white hover:text-gray-300 hover:scale-103 transition-transform duration-500"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/policy"
                className="block text-white hover:text-gray-300 hover:scale-103 transition-transform duration-500"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3">Our Social</h3>
            <div className="flex space-x-6">
              <Link
                href="https://web.facebook.com/pocariID"
                className="block text-white transition-transform hover:scale-110 duration-500"
                target="/blank"
              >
                <Image
                  src="/images/social-facebook.svg"
                  alt="facebook"
                  width={0}
                  height={0}
                  className="w-[27px] h-auto"
                />
              </Link>
              <Link
                href="https://www.instagram.com/pocariid/"
                className="block text-white transition-transform hover:scale-110 duration-500"
                target="/blank"
              >
                <Image
                  src="/images/social-instagram.svg"
                  alt="instagram"
                  width={0}
                  height={0}
                  className="w-[27px] h-auto"
                />
              </Link>
              <Link
                href="https://twitter.com/pocariID"
                className="block text-white transition-transform hover:scale-110 duration-500"
                target="/blank"
              >
                <Image
                  src="/images/social-twitter.svg"
                  alt="twitter"
                  width={0}
                  height={0}
                  className="w-[27px] h-auto"
                />
              </Link>
              <Link
                href="https://www.youtube.com/user/pocarigoion"
                className="block text-white transition-transform hover:scale-110 duration-500"
                target="/blank"
              >
                <Image
                  src="/images/social-youtube.svg"
                  alt="youtube"
                  width={0}
                  height={0}
                  className="w-[27px] h-auto"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className=" bg-[#1a64a6] py-3.5 ">
          <div className="text-white text-[12px] text-center ">
            © 2021-2025 PT. AMERTA INDAH OTSUKA All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
