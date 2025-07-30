import { Mail, MapPin } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-neutral">
            Ready to capture your next game? Let’s discuss your photography and
            videography needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-accent" />
                  <span className="text-lg">armaandotpics@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-accent" />
                  <span className="text-lg">Walpole, MA & Boston Area</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://instagram.com/armaan.pics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-600 to-pink-500 text-white p-3 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <SiInstagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h4 className="font-bold mb-2">Quick Response</h4>
              <p className="text-neutral text-sm">
                I typically respond to inquiries within 24 hours. For urgent
                bookings, please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form
              action="https://formspree.io/f/mwpqbgeb"
              method="POST"
              className="space-y-6"
            >
              <div>
                <Label htmlFor="name">Name *</Label>
                <Input id="name" name="name" type="text" required />
              </div>

              <div>
                <Label htmlFor="email">Email *</Label>
                <Input id="email" name="email" type="email" required />
              </div>

              <div>
                <Label htmlFor="service">Service Interest</Label>
                <Select name="service">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="photography">Photography</SelectItem>
                    <SelectItem value="videography">Videography</SelectItem>
                    <SelectItem value="combo">Photo + Video Combo</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="details">Date & Location</Label>
                <Input
                  id="details"
                  name="details"
                  type="text"
                  placeholder="e.g., March 15th, Walpole High School"
                />
              </div>

              <div>
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your photography/videography needs..."
                  className="w-full resize-vertical"
                />
              </div>

              <Button type="submit" className="w-full">
                Send Message
              </Button>

              <p className="text-sm text-neutral text-center">
                By submitting this form, you agree to be contacted about your
                inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
