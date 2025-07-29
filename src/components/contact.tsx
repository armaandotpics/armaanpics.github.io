import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { Mail, MapPin, Send } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    details: "",
    message: "",
  });
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const response = await apiRequest('POST', '/api/contact', data);
      return response.json();
    },
    onSuccess: () => {
      setFormData({
        name: "",
        email: "",
        service: "",
        details: "",
        message: "",
      });
      toast({
        title: "Message sent!",
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
    },
    onError: (error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing required fields",
        description: "Please fill in your name, email, and message.",
        variant: "destructive",
      });
      return;
    }

    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-neutral">
            Ready to capture your next game? Let's discuss your photography and videography needs.
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
              <p className="text-neutral text-sm">I typically respond to inquiries within 24 hours. For urgent bookings, please mention it in your message.</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-sm font-semibold text-gray-700 mb-2">Name *</Label>
                <Input
                  id="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-semibold text-gray-700 mb-2">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="service" className="text-sm font-semibold text-gray-700 mb-2">Service Interest</Label>
                <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
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
                <Label htmlFor="details" className="text-sm font-semibold text-gray-700 mb-2">Date & Location</Label>
                <Input
                  id="details"
                  type="text"
                  placeholder="e.g., March 15th, Walpole High School"
                  value={formData.details}
                  onChange={(e) => handleInputChange('details', e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-semibold text-gray-700 mb-2">Message *</Label>
                <Textarea
                  id="message"
                  required
                  rows={4}
                  placeholder="Tell me about your photography/videography needs..."
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  className="w-full resize-vertical"
                />
              </div>

              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-primary hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {contactMutation.isPending ? (
                  <div className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <Send className="w-5 h-5 mr-2" />
                )}
                {contactMutation.isPending ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-sm text-neutral text-center">
                By submitting this form, you agree to be contacted about your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
