import Link from "next/link";
import { Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Bedford Column */}
          <div>
            <h3 className="text-[#0a1f64] font-semibold mb-4">Bedford</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Meet the team
                </Link>
              </li>
              <li>
                <Link
                  href="/values"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Values
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/demo"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Watch a demo
                </Link>
              </li>
            </ul>
          </div>

          {/* Anaplan Solutions Column */}
          <div>
            <h3 className="text-[#0a1f64] font-semibold mb-4">
              Anaplan Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/solutions/finance"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/supply-chain"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Supply Chain
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/sales"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Sales
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/hr"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  HR & Workforce
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/marketing"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Industry Solutions Column */}
          <div>
            <h3 className="text-[#0a1f64] font-semibold mb-4">
              Industry Solutions
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/industries/cpg-retail"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  CPG & Retail
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/financial-services"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Financial Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/telecom-media"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Telecomms & Media
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/it-software"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  IT & Software
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/travel"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Travel & Hospitality
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/professional-services"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Professional Services
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/healthcare"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Life Sciences & Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/manufacturing"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/aviation"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Airlines & Aviation
                </Link>
              </li>
              <li>
                <Link
                  href="/industries/logistics"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Transport & Logistics
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-[#0a1f64] font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/resources/buyers-kits"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Buyer's Kits
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/whitepapers"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Whitepapers
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/customer-stories"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Customer stories
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/demo-videos"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Demo videos
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/events"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Events & Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Customers Column */}
          <div>
            <h3 className="text-[#0a1f64] font-semibold mb-4">Customers</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Support
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/hints-tips"
                  className="text-gray-600 hover:text-[#0a1f64]"
                >
                  Hints & tips
                </Link>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <Link
                href="https://linkedin.com"
                className="text-[#0a1f64] hover:text-blue-700"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-[#0a1f64] hover:text-blue-700"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="https://youtube.com"
                className="text-[#0a1f64] hover:text-blue-700"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section with Flags and Certifications */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"></div>
      </div>
    </footer>
  );
}
