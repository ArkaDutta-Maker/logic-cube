import Link from "next/link";
import {
  Facebook,
  Twitter,
  LinkedinIcon as LinkedIn,
  Instagram,
  CuboidIcon as Cube,
} from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image
                className="h-8 w-8 text-[#1e3a8a]"
                src={"/logikcube.png"}
                width={100}
                height={100}
                alt="icon"
              />
              <h2 className="text-2xl font-bold text-[#1e3a8a]">LogikCube</h2>
            </div>
            <p className="text-sm text-gray-600">
              Empowering businesses through innovative consulting solutions.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3B1E54]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#3B1E54] transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="text-gray-600 hover:text-[#3B1E54] transition-colors"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-[#3B1E54] transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3B1E54]">
              Contact Us
            </h3>
            <address className="not-italic text-sm text-gray-600">
              <p>LogikCube - USA</p>
              <p>4165 Sierra Knolls Court,</p>
              <p>Cumming, GA 30040</p>
              <p>Email: info@logikcube.com </p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#3B1E54]">
              Follow Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-[#3B1E54] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#3B1E54] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#3B1E54] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedIn className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[#3B1E54] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>
            &copy; {new Date().getFullYear()} LogikCube Consulting. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
