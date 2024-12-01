import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12">
        <div
          className={
            "absolute inset-0 bg-cover bg-center bg-[url(https://picsum.photos/id/10/1920/400/?blur=10)]"
          }
        >
          <div className="absolute inset-0 bg-[#100a5c62]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">Resources</h1>
          <p className="text-xl max-w-2xl">
            A wealth of knowledge at your fingertips — coming soon!
          </p>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="container mx-auto px-4 space-y-24 pb-24 text-center">
        <h2 className="text-3xl font-bold text-[#3B1E54] mb-6">
          We're Building Something Great
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          Our resources section is under construction. Stay tuned for valuable
          insights, tools, and knowledge that will help you excel in your
          business and projects.
        </p>
        <div className="text-center">
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
            >
              Contact Us for More Info
            </Button>
          </Link>
        </div>
      </div>

      {/* CTA Section */}
      <section className="text-center bg-[#3B1E54] text-white p-12">
        <h2 className="text-3xl font-bold mb-4">
          Have Questions or Suggestions?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          We'd love to hear from you! Connect with us to learn more or share
          your ideas for our Resources section.
        </p>
        <Link href="/contact">
          <Button
            size="lg"
            className="bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
          >
            Reach Out to Us
          </Button>
        </Link>
      </section>
    </div>
  );
}
