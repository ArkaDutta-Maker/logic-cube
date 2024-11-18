import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
export default function AboutPage() {
  return (
    <div>
      <div className="relative h-[400px] mb-12">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=1920')] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#0A1E5C]/80" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">
            About LogicCube
          </h1>
          <p className="text-xl max-w-2xl">
            Empowering businesses through innovative consulting solutions
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 space-y-24 pb-24">
        {/* Mission Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-[#0A1E5C]">
            Our Mission
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-gray-600">
            To empower organizations across industries to achieve operational
            excellence and sustainable growth through world-class SAP services,
            products, and expert consulting. By leveraging cutting-edge
            technologies and proven methodologies, we aim to optimize business
            processes and drive impactful digital transformation.
          </p>
        </section>

        {/* Vision Section */}
        <section className="text-center bg-[#0A1E5C] text-white py-16 rounded-lg">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="max-w-3xl mx-auto text-xl">
            To be a global leader in SAP services and solutions, recognized for
            our commitment to innovation, excellence, and client success. We
            aspire to redefine how businesses harness the power of SAP
            technology to thrive in a constantly evolving world.
          </p>
        </section>

        {/* Why Choose Us Section */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E5C]">
            Why Choose LogicCube?
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
                  <h3 className="font-semibold text-[#0A1E5C] mb-2">
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
          <h2 className="text-3xl font-bold text-center mb-12 text-[#0A1E5C]">
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
                    ? "border-b-4 border-b-[#0A1E5C]"
                    : "border-b-4 border-b-[#FF4C00]"
                )}
              >
                <CardContent className="pt-6">
                  <p className="font-bold text-[#0A1E5C]">{value[0]}</p>
                  <p className="text-sm mt-3 text-muted-foreground">
                    {value[1]}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-[#0A1E5C] text-white rounded-lg p-12">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Connect with our experts and discover how LogicCube can help you
            achieve your business goals.
          </p>
          <Button
            size="lg"
            className="bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
          >
            SCHEDULE A CONSULTATION
          </Button>
        </section>
      </div>
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
