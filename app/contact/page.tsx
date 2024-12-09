"use client";

import { useState, FormEvent } from "react";
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
const [formStatus, setFormStatus] = useState<"success" | "error" | "">(""); // Tracks submission status

const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault(); // Prevent default form submission
  const form = event.currentTarget; // Safely get the form element
  const formData = new FormData(form); // Collect form data

  try {
    const response = await fetch(
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLScB_R-Ao0zw5LEbztGvphwX3zwjKFiUKQrQ_Nuw7wHv5cq0dQ/formResponse",
      {
        method: "POST",
        body: formData,
      }
    );

    if (response.ok || response.status === 200 || response.status === 204) {
      setFormStatus("success");
    } else {
      setFormStatus("error");
    }
  } finally {
    setFormStatus("success");
    form.reset();
  }
};

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[400px] mb-12">
        <div className="absolute inset-0 bg-[url(https://picsum.photos/id/6/1920/400/?blur=10)] bg-cover bg-center">
          <div className="absolute inset-0 bg-[#100a5c62]" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-bold mb-4 text-center">Contact Us</h1>
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        name="entry.2041563673"
                        id="first-name"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        name="entry.1070200108"
                        id="last-name"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      name="entry.1872837399"
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      name="entry.1162303086"
                      id="company"
                      placeholder="Acme Inc."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      name="entry.1839311840"
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      name="entry.76577904"
                      id="message"
                      placeholder="How can we help you?"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-[#FF4C00] hover:bg-[#FF4C00]/90 text-white"
                  >
                    {formStatus === "success"
                      ? "Message Sent!"
                      : "Send Message"}
                  </Button>
                </form>

                {/* Form Status Messages */}
                {formStatus === "success" && (
                  <p className="mt-4 text-green-500">
                    Thank you! Your message has been sent successfully.
                  </p>
                )}
                {formStatus === "error" && (
                  <p className="mt-4 text-red-500">
                    Oops! Something went wrong. Please try again later.
                  </p>
                )}
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
    </div>
  );
}
