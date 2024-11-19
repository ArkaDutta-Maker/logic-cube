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
  Code,
  Database,
  Layers,
  Lightbulb,
  Wrench,
} from "lucide-react";
import Link from "next/link";

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12">
        <div className="absolute inset-0 bg-[url(https://picsum.photos/id/6/1920/400/?blur=10)] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#100a5c62]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="mt-4 text-xl max-w-2xl text-center">
            Comprehensive SAP-focused IT services designed to transform your
            business operations, streamline processes, and drive growth.{" "}
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <div className="w-12 h-12 bg-[#0A1E5C] rounded-full flex items-center justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold text-[#0A1E5C]">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-gray-600 mb-4">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-[#FF4C00] mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <div className="p-6 pt-0 mt-auto">
                  <Button className="w-full bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white">
                    {service.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E5C]">
            Why Choose Our Services?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
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
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve
            your goals.
          </p>
          <Link href={"/contact"}>
            <Button
              size="lg"
              className="bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

const services = [
  {
    title: "SAP Implementation and Integration",
    description:
      "Seamlessly integrate SAP systems into your business processes with our expert guidance.",
    features: [
      "End-to-end SAP S/4HANA implementations",
      "Greenfield, Brownfield, and Bluefield migration strategies",
      "Smooth integration with existing IT systems",
    ],
    cta: "Start Your Implementation Journey",
    icon: <Database className="w-6 h-6 text-white" />,
  },
  {
    title: "SAP Customization and Development",
    description:
      "Get solutions tailored to your business needs with our SAP customization expertise.",
    features: [
      "Custom module and report development",
      "Enhancement of standard SAP functionalities",
      "Development of user-friendly interfaces",
    ],
    cta: "Transform Your SAP Landscape",
    icon: <Code className="w-6 h-6 text-white" />,
  },
  {
    title: "SAP ERP Migration Services",
    description:
      "Upgrade your systems to the latest SAP ERP versions with minimal disruption.",
    features: [
      "Migration to SAP S/4HANA",
      "Cloud migration for scalability and cost-efficiency",
      "Risk assessment and mitigation strategies",
    ],
    cta: "Future-Proof Your ERP System",
    icon: <Layers className="w-6 h-6 text-white" />,
  },
  {
    title: "SAP Training and Enablement",
    description:
      "Empower your team with the knowledge they need to maximize SAP's potential.",
    features: [
      "Role-based training programs",
      "Comprehensive documentation and support",
      "On-site and remote training options",
    ],
    cta: "Empower Your Team",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
  },
  {
    title: "SAP Support and Maintenance",
    description:
      "Keep your SAP systems running smoothly with our proactive support.",
    features: [
      "24/7 monitoring and issue resolution",
      "Performance tuning and system health checks",
      "Regular updates and security patching",
    ],
    cta: "Ensure Optimal Performance",
    icon: <Wrench className="w-6 h-6 text-white" />,
  },
];

const reasons = [
  {
    title: "Expert Team",
    description: "Certified SAP consultants with years of experience.",
    icon: <Lightbulb className="w-8 h-8 text-white" />,
  },
  {
    title: "Proven Results",
    description: "A track record of successful projects across industries.",
    icon: <ChevronRight className="w-8 h-8 text-white" />,
  },
  {
    title: "Tailored Solutions",
    description: "Custom approaches to meet your unique business needs.",
    icon: <Layers className="w-8 h-8 text-white" />,
  },
  {
    title: "Continuous Support",
    description: "End-to-end assistance, even after project completion.",
    icon: <Wrench className="w-8 h-8 text-white" />,
  },
];
