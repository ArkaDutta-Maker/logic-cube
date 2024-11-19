"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Search,
  Menu,
  X,
  Mail,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div>
      {/* Top Bar */}
      <div className="bg-[#0a1f64] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <a
            href="mailto:info@consultingfirm.com"
            className="flex items-center text-sm hover:text-gray-200"
          >
            <Mail className="h-4 w-4 mr-2 ml-5" />
            info@logikcube.com{" "}
          </a>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-gray-200">
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-gray-200">
              <Youtube className="h-4 w-4" />
              <span className="sr-only">YouTube</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-[#0a1f64] text-white shadow-lg">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold flex items-center">
              <div className="w-10 h-10 bg-white rounded-full mr-2">
                <Image
                  src="/logikcube.png"
                  width={50}
                  height={50}
                  layout="responsive"
                  alt="The guitarist in the concert."
                  className="w-10 h-10 rounded-full"
                />
              </div>
              LogikCube
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="/services" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={
                          navigationMenuTriggerStyle() +
                          "text-white bg-transparent hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                        }
                      >
                        Services
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/industries" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={
                          navigationMenuTriggerStyle() +
                          "text-white bg-transparent hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                        }
                      >
                        Industries
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-white bg-transparent hover:bg-blue-700 px-2 py-1 rounded transition-colors">
                      Resources
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="grid gap-2 p-4 w-[400px]">
                        <NavigationMenuLink asChild>
                          <Link
                            href="/resources/blog"
                            className="block p-2 hover:bg-blue-700 rounded"
                          >
                            Blog
                          </Link>
                        </NavigationMenuLink>
                        <NavigationMenuLink asChild>
                          <Link
                            href="/resources/case-studies"
                            className="block p-2 hover:bg-blue-700 rounded"
                          >
                            Case Studies
                          </Link>
                        </NavigationMenuLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="/about" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={
                          navigationMenuTriggerStyle() +
                          "text-white bg-transparent hover:bg-blue-700 px-2 py-1 rounded transition-colors"
                        }
                      >
                        About Us
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="pl-10 bg-white/10 border-none text-white placeholder:text-gray-400 w-[200px] focus:ring-1 focus:ring-white"
                  />
                </div>
                <Button
                  className="bg-[#ff5f00] hover:bg-[#ff7c2a] text-white font-semibold px-6 py-2"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/contact");
                  }}
                >
                  Contact Us{" "}
                </Button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 space-y-2">
              <Link href="/services" className="block text-white py-2">
                Services
              </Link>
              <Link href="/solutions" className="block text-white py-2">
                Solutions
              </Link>
              <Link href="/resources" className="block text-white py-2">
                Resources
              </Link>
              <Link href="/about" className="block text-white py-2">
                About Us
              </Link>
              <div className="pb-5">
                <Input
                  type="search"
                  placeholder="Search..."
                  className="bg-white/10 border-white/20 text-white"
                />
              </div>
              <Link href="/contact" passHref>
                <Button className="w-full bg-orange-500 hover:bg-orange-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
