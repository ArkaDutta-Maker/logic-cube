"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  BarChart,
  CheckCircle,
  Database,
  Globe,
  Shield,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center bg-no-repeat text-white py-20 md:py-32"
        style={{
          backgroundImage:
            "url(https://picsum.photos/id/22/1920/1080/?blur=10)",
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Leading transformative SAP solutions
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-8">
            We aspire to redefine how businesses harness the power of SAP
            technology to thrive in a constantly evolving world.
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#ff5722] hover:bg-[#f4511e] text-white font-semibold px-8 py-3 text-lg"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      {/* Key Statistics */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-[#1a237e] mb-2">20+</div>
              <p className="text-gray-600">Years of Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1a237e] mb-2">500+</div>
              <p className="text-gray-600">Successful Projects</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1a237e] mb-2">50+</div>
              <p className="text-gray-600">Countries Served</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#1a237e] mb-2">98%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a237e] text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Database className="h-10 w-10 text-[#1a237e] mb-2" />
                <CardTitle>SAP Implementation and Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seamlessly integrate SAP systems and solutions across your
                  organization. Our expert team ensures smooth deployment and
                  maximum efficiency.
                </p>
                <Link
                  href="/services/"
                  className="text-[#ff5722] hover:text-[#f4511e] font-semibold flex items-center mt-4"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-10 w-10 text-[#1a237e] mb-2" />
                <CardTitle>SAP Customization and Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Tailor SAP solutions to your business needs with our custom
                  development services. Drive innovation and efficiency with
                  bespoke solutions.
                </p>
                <Link
                  href="/services/"
                  className="text-[#ff5722] hover:text-[#f4511e] font-semibold flex items-center mt-4"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Shield className="h-10 w-10 text-[#1a237e] mb-2" />
                <CardTitle>SAP Migration Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Upgrade your systems to the latest SAP solutions with minimal
                  disruption. Expert guidance through every step of the
                  migration process.
                </p>
                <Link
                  href="/services/"
                  className="text-[#ff5722] hover:text-[#f4511e] font-semibold flex items-center mt-4"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-16 bg-[#1a237e] text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Success Story: Global Manufacturing Leader
              </h2>
              <p className="text-xl mb-6">
                Learn how we helped a Fortune 500 manufacturer streamline their
                operations with SAP S/4HANA, resulting in:
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  40% reduction in processing time
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  $2.5M annual cost savings
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  99.9% system availability
                </li>
              </ul>
              <Button className="mt-8 bg-white text-[#1a237e] hover:bg-gray-100">
                Read Case Study
              </Button>
            </div>
            <div className="relative aspect-video rounded-lg overflow-hidden">
              <img
                src="https://picsum.photos/600/400/"
                alt="Case Study Preview"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a237e] text-center mb-12">
            Why Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">SAP Gold Partner</h3>
              <p className="text-gray-600">
                Recognized excellence in SAP implementation and support services
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
              <p className="text-gray-600">
                300+ certified SAP consultants with deep industry expertise
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-12 w-12 text-[#1a237e] mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-gray-600">
                Supporting clients across 50+ countries with local expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Insights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1a237e] text-center mb-12">
            Latest Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "The Future of SAP S/4HANA Cloud",
                category: "Technology Trends",
                image: "https://picsum.photos/id/1/200/400/?blur=4",
              },
              {
                title: "Maximizing ROI with SAP Analytics Cloud",
                category: "Best Practices",
                image: "https://picsum.photos/id/2/200/400/?blur=4",
              },
              {
                title: "SAP Integration Suite: A Comprehensive Guide",
                category: "Technical Guide",
                image: "https://picsum.photos/id/3/200/400/?blur=4",
              },
            ].map((insight, index) => (
              <Card key={index}>
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardDescription>{insight.category}</CardDescription>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Link
                    href="#"
                    className="text-[#ff5722] hover:text-[#f4511e] font-semibold flex items-center"
                  >
                    Read More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1a237e] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and discover how our SAP
            solutions can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={"/contact"}>
              <Button
                size="lg"
                className="bg-[#ff5722] hover:bg-[#f4511e] text-white font-semibold px-8 py-3 text-lg"
              >
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
