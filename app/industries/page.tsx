import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronRight,
  Factory,
  ShoppingBag,
  HeartPulseIcon as Heartbeat,
  DollarSign,
  Package,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12">
        <div className="absolute inset-0 bg-[url(https://picsum.photos/id/6/1920/400/?blur=10)] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#100a5c62]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            {" "}
            Empowering Industries with Tailored SAP Solutions
          </h1>
          <p className="mt-4 text-xl max-w-2xl text-center">
            We specialize in delivering SAP-based IT solutions across a wide
            range of industries, meeting the unique needs of your sector.{" "}
          </p>
        </div>
      </div>

      {/* Industries Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E5C]">
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#0A1E5C] rounded-full flex items-center justify-center mb-4">
                    {industry.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0A1E5C]">
                    {industry.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <h3 className="font-semibold text-[#FF4C00] mb-2">
                      Challenges:
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {industry.challenges.map((challenge, cIndex) => (
                        <li key={cIndex}>{challenge}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#FF4C00] mb-2">
                      How We Help:
                    </h3>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, sIndex) => (
                        <li key={sIndex} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-[#FF4C00] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E5C]">
            Why Partner with Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {partnerReasons.map((reason, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-[#0A1E5C] rounded-full flex items-center justify-center mx-auto mb-4">
                    {reason.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-[#0A1E5C] mb-2">
                    {reason.title}
                  </CardTitle>
                  <CardDescription>{reason.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0A1E5C] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Take the First Step</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your industry has unique challenges, and we have the expertise to
            solve them. Contact us today to learn how we can transform your
            operations with SAP solutions tailored for your domain.
          </p>
          <Link href={"/contact"}>
            <Button
              size="lg"
              className="bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

const industries = [
  {
    title: "Manufacturing",
    icon: <Factory className="w-6 h-6 text-white" />,
    challenges: [
      "Complex supply chain and inventory management",
      "Demand forecasting and production planning",
      "Ensuring quality control and regulatory compliance",
    ],
    solutions: [
      "SAP SCM and IBP for efficient supply chain planning",
      "Real-time production monitoring with SAP S/4HANA",
      "Customized solutions for quality management and compliance",
    ],
  },
  {
    title: "Retail and E-commerce",
    icon: <ShoppingBag className="w-6 h-6 text-white" />,
    challenges: [
      "Managing omnichannel operations and customer data",
      "Streamlining order-to-cash processes",
      "Real-time inventory visibility and demand forecasting",
    ],
    solutions: [
      "SAP Customer Experience (CX) solutions to enhance engagement",
      "Real-time analytics for inventory and demand planning",
      "Integration of ERP systems for seamless operations",
    ],
  },
  {
    title: "Healthcare and Life Sciences",
    icon: <Heartbeat className="w-6 h-6 text-white" />,
    challenges: [
      "Managing patient data securely and efficiently",
      "Regulatory compliance and audit readiness",
      "Streamlining procurement and inventory for medical supplies",
    ],
    solutions: [
      "SAP HANA for robust data management and analytics",
      "Compliance-ready modules for healthcare regulations",
      "Tailored solutions for procurement and logistics",
    ],
  },
  {
    title: "Financial Services",
    icon: <DollarSign className="w-6 h-6 text-white" />,
    challenges: [
      "Risk management and regulatory compliance",
      "Real-time financial reporting and analytics",
      "Optimizing operational costs and processes",
    ],
    solutions: [
      "SAP Financials for enhanced reporting and decision-making",
      "Risk management tools for better compliance",
      "Automation of routine financial operations with SAP solutions",
    ],
  },
  {
    title: "Consumer Packaged Goods (CPG)",
    icon: <Package className="w-6 h-6 text-white" />,
    challenges: [
      "Managing a diverse product portfolio and distribution channels",
      "Understanding consumer behavior and trends",
      "Streamlining procurement and supply chain operations",
    ],
    solutions: [
      "SAP Ariba for efficient procurement processes",
      "Data-driven consumer insights with SAP Analytics Cloud",
      "Inventory optimization through advanced supply chain tools",
    ],
  },
  {
    title: "Energy and Utilities",
    icon: <Zap className="w-6 h-6 text-white" />,
    challenges: [
      "Managing large-scale operations and assets",
      "Ensuring compliance with environmental and safety standards",
      "Real-time data monitoring for decision-making",
    ],
    solutions: [
      "SAP EAM (Enterprise Asset Management) for asset optimization",
      "Analytics tools for sustainability and compliance tracking",
      "Real-time operational insights through IoT integration",
    ],
  },
];

const partnerReasons = [
  {
    title: "Industry-Specific Expertise",
    description:
      "Decades of experience solving challenges across diverse sectors.",
    icon: <Factory className="w-8 h-8 text-white" />,
  },
  {
    title: "Tailored SAP Solutions",
    description:
      "Custom implementations that align with your industry's needs.",
    icon: <ShoppingBag className="w-8 h-8 text-white" />,
  },
  {
    title: "Proven Results",
    description:
      "Measurable outcomes, from cost savings to operational efficiencies.",
    icon: <ChevronRight className="w-8 h-8 text-white" />,
  },
];
