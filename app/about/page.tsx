import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Globe, Target } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[400px] mb-12">
        <div
          className={
            "absolute inset-0 bg-cover bg-center bg-[url(https://picsum.photos/id/6/1920/400/?blur=10)]"
          }
        >
          <div className="absolute inset-0 bg-[#100a5c62]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            About LogikCube
          </h1>
          <p className="text-xl max-w-2xl">
            Empowering businesses through innovative consulting solutions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-24 pb-24">
        {/* Mission Section */}
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <Card className="border-[#1e3a8a]/20">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4 items-center">
                  <Target className="h-12 w-12 text-[#f97316] items-center" />
                  <h2 className="text-2xl font-bold text-[#3B1E54]">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground">
                    To empower organizations across industries to achieve
                    operational excellence and sustainable growth through
                    world-class SAP services, products, and expert consulting.
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="border-[#1e3a8a]/20">
              <CardContent className="p-6">
                <div className="flex flex-col space-y-4 items-center">
                  <Globe className="h-12 w-12 text-[#f97316]" />
                  <h2 className="text-2xl font-bold text-[#3B1E54]">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground">
                    To be a global leader in SAP services and solutions,
                    recognized for our commitment to innovation, excellence, and
                    success in redefining how businesses operate.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3B1E54]">
            Why Choose LogikCube?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Comprehensive SAP Expertise",
              "Industry-Specific Solutions",
              "Innovation-Driven Approach",
              "Customized Solutions",
              "Commitment to Excellence",
              "Proven Results",
              "End-to-End Support",
              "Agility and Flexibility",
              "Transparent Communication",
            ].map((reason, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-[#FF4C00] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#3B1E54] mb-2">
                    {reason}
                  </h3>
                  <p className="text-gray-600">
                    {getReasonDescription(reason)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#3B1E54]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              [
                "Client-Centricity",
                "We prioritize our client's success by tailoring solutions to meet their specific needs.",
              ],

              [
                "Integrity",
                "We uphold the highest ethical standards in every interaction.",
              ],
              [
                "Innovation",
                "We embrace new technologies and methodologies to deliver cutting-edge solutions",
              ],
              [
                "Excellence",
                "We are committed to delivering superior quality in every project.",
              ],
              [
                "Collaboration",
                "We foster strong partnerships with our clients and within our team.",
              ],
            ].map((value, index) => (
              <Card
                key={index}
                className={cn(
                  "text-center hover:shadow-lg transition-shadow",
                  index % 2 === 0
                    ? "border-b-4 border-b-[#3B1E54]"
                    : "border-b-4 border-b-[#FF4C00]"
                )}
              >
                <CardContent className="pt-6">
                  <p className="font-bold text-[#3B1E54]">{value[0]}</p>
                  <p className="text-sm mt-3 text-muted-foreground">
                    {value[1]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
      </div>
      <section className="text-center bg-[#3B1E54] text-white p-12">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Connect with our experts and discover how LogikCube can help you
          achieve your business goals.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
          >
            SCHEDULE CONSULTATION
          </Button>
        </Link>
      </section>
    </div>
  );
}
function getReasonDescription(reason: string): string {
  switch (reason) {
    case "Comprehensive SAP Expertise":
      return "We offer a full spectrum of SAP services, ensuring tailored solutions that address your unique business challenges.";
    case "Industry-Specific Solutions":
      return "With a proven track record across various industries, we understand the nuances of your sector and exceed expectations.";
    case "Innovation-Driven Approach":
      return "We embrace the latest advancements in SAP technology, helping you stay ahead in a rapidly changing business landscape.";
    case "Customized Solutions":
      return "We craft bespoke SAP solutions that align perfectly with your goals and operational workflows.";
    case "Commitment to Excellence":
      return "Our team is dedicated to delivering high-quality solutions on time and within budget.";
    case "Proven Results":
      return "We've helped clients achieve measurable outcomes, such as improved efficiency and reduced costs.";
    case "End-to-End Support":
      return "From project inception to post-implementation support, we ensure your systems run smoothly and deliver consistent value.";
    case "Agility and Flexibility":
      return "We pride ourselves on being agile and responsive, making adjustments to your SAP landscape as your business evolves.";
    case "Transparent Communication":
      return "We build trust through clear, consistent, and honest communication throughout your project.";
    default:
      return "";
  }
}
