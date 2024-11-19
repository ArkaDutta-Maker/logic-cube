"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="bg-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-[#0a1f64] mb-6">
            Leading transformative SAP solutions
            <br />
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
            We aspire to redefine how businesses harness the power of SAP
            technology to thrive in a constantly evolving world.
          </p>
          <Link href={"/contact"} passHref>
            <Button
              size="lg"
              className="bg-[#ff5f00] hover:bg-[#ff7c2a] text-white font-semibold px-8 py-3 text-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a1f64] text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0a1f64] mb-4">
                SAP Implementation and Integration
              </h3>
              <p className="text-gray-600 mb-4">
                Seamlessly integrate SAP systems into your business processes
                with our expert guidance.
              </p>
              <Link
                href="/services/"
                className="text-[#ff5f00] hover:text-[#ff7c2a] font-semibold flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0a1f64] mb-4">
                SAP Customization and Development
              </h3>
              <p className="text-gray-600 mb-4">
                Get solutions tailored to your business needs with our SAP
                customization expertise.
              </p>
              <Link
                href="/services"
                className="text-[#ff5f00] hover:text-[#ff7c2a] font-semibold flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-[#0a1f64] mb-4">
                SAP ERP Migration Services
              </h3>
              <p className="text-gray-600 mb-4">
                Upgrade your systems to the latest SAP ERP versions with minimal
                disruption.
              </p>
              <Link
                href="/services/digital-transformation"
                className="text-[#ff5f00] hover:text-[#ff7c2a] font-semibold flex items-center"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Purple Section */}
      <section className="bg-purple-700 text-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Streamline complex planning with our centralised platform
            </h2>
            <p className="text-xl mb-8">
              Transform your business planning and decision-making processes
              with our innovative solutions.
            </p>
            <Button size="lg" variant="outline" className="text-purple-700">
              Explore Platform
            </Button>
          </div>
          <div className="bg-white/10 rounded-lg p-8">
            <img
              src="https://placehold.co/800x600"
              alt="Analytics Dashboard"
              className="w-full rounded-lg shadow-lg"
              width={800}
              height={600}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#0a1f64] text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "ConsultCo has transformed our planning processes, resulting in
                significant time savings and more accurate forecasts. Their
                expertise is unmatched."
              </p>
              <p className="font-semibold text-[#0a1f64]">
                John Doe, CEO of TechCorp
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Working with ConsultCo has been a game-changer for our
                organization. Their strategic insights have helped us navigate
                complex challenges and achieve our goals."
              </p>
              <p className="font-semibold text-[#0a1f64]">
                Jane Smith, CFO of InnovateInc
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0a1f64] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation and discover how we can
            help you achieve your goals.
          </p>
          <Link href={"/contact"}>
            <Button
              size="lg"
              className="bg-[#ff5f00] hover:bg-[#ff7c2a] text-white font-semibold px-8 py-3 text-lg"
            >
              Schedule a Consultation
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
