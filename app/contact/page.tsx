"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
export default function ContactUsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}

      <div className="relative h-[400px] mb-12">
        <div className="absolute inset-0 bg-[url(https://picsum.photos/id/6/1920/400/?blur=10)] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#100a5c62]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center"> Contact Us</h1>
          <p className="mt-4 text-xl max-w-2xl text-center">
            Get in touch with our team of SAP experts. We're here to help you
            transform your business.
          </p>
        </div>
      </div>
      {/* Contact Form and Info Section */}
      <div className="py-5">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#3B1E54]">
                  Send Us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
  className="space-y-4"
  action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe-W6U3pK_XWrO9b26sXDoCtLExw3FfFov5sa-XBbsUXL3z6g/formResponse"
  method="POST"
  target="_blank"
>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input name="entry.1232019584" id="first-name" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input name="entry.2126534044" id="last-name" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="entry.497252458" 
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input name="entry.1137525808" id="company" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      name="entry.1620140343" 
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea name="entry.405091941" id="message" placeholder="How can we help you?" />
                  </div>
                  <Button className="w-full bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white">
                    Send Message
                  </Button>
                </form>
                {/* Success Message */}
<div id="form-success" className="hidden text-green-600 mt-4">
  Thank you! Your message has been sent.
</div>

{/* JavaScript to Handle Form Submission */}
<script>
  document.getElementById('contact-form').addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const form = event.target;

    // Prepare form data
    const formData = new FormData(form);

    try {
      // Submit the form data using fetch
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        // Hide the form and show the success message
        form.reset();
        document.getElementById('form-success').classList.remove('hidden');
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting your message.');
    }
  });
</script>
              </CardContent>
            </Card>
        

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-[#3B1E54]">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Mail className="h-6 w-6 text-[#FF4C00]" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <p>info@logikcube.com </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-[#FF4C00]" />
                    <div>
                      <p className="font-semibold">Address</p>
                      <p>LogikCube - USA</p>
                      <p>4165 Sierra Knolls Court,</p>
                      <p>Cumming, GA 30040</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="aspect-video bg-gray-200 flex items-center justify-center">
                    <MapPin className="h-12 w-12 text-gray-400" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-[#3B1E54] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team of SAP experts is ready to help you achieve your business
            goals. Let's start the conversation today.
          </p>
          <Button
            size="lg"
            className="bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
          >
            Schedule a Consultation
          </Button>
        </div>
      </section>
    </div>
  );
}
