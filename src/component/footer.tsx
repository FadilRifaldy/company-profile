import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#3880C3]">
      <div>
        {/* Main Footer Content */}
        <div className="flex justify-center gap-30 py-14">
          {/* Company Logo & Info */}

          <div className="z-0">
            <Image
              src="/images/logo.svg"
              alt="logo"
              width={0}
              height={0}
              className="w-[150px] h-[80px]"
            />
          </div>

          {/* Our Products & Articles */}
          <div>
            <h3 className="text-white font-semibold mb-2">Our Products</h3>
            <div className="space-y-3">
              <Link
                href="/articles"
                className="block text-white transition-colors"
              >
                Articles
              </Link>
            </div>
          </div>

          {/* Events & Sports */}
          <div>
            <h3 className="text-white font-semibold mb-2">Events</h3>
            <div className="space-y-3">
              <Link
                href="/pocari-sport"
                className="block text-white transition-colors"
              >
                Pocari Sweat Sport
              </Link>
              <Link
                href="/science"
                className="block text-white transition-colors"
              >
                Science
              </Link>
            </div>
          </div>

          {/* Legal & Social */}
          <div>
            <h3 className="text-white font-semibold mb-2">FAQ</h3>
            <div className="space-y-3">
              <Link
                href="/terms"
                className="block text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/policy"
                className="block text-white transition-colors"
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
                className="block text-white transition-colors"
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
                className="block text-white transition-colors"
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
                className="block text-white transition-colors"
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
                className="block text-white transition-colors"
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

        {/* Bottom Copyright */}
        <div className=" bg-[#1a64a6] py-3.5 ">
          <div className="text-white text-[12px] text-center ">
            © 2021-2025 PT. AMERTA INDAH OTSUKA All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
}
