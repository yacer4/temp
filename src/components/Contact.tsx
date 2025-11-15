import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const whatsappMessage = `Hello! I'm interested in your services.%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0APhone: ${formData.phone}%0AMessage: ${formData.message}`;
    
    // Open WhatsApp
    window.open(`https://wa.me/971506514125?text=${whatsappMessage}`, "_blank");
    
    toast({
      title: "Redirecting to WhatsApp",
      description: "We'll connect with you shortly!",
    });
    
    // Reset form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get in <span className="font-handwriting text-gradient-sunset text-5xl md:text-6xl">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your journey? Let's make it happen together!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-tropical">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your dream event or travel plans..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground text-lg"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Continue on WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Let's Connect!</h3>
              <p className="text-muted-foreground text-lg">
                We're excited to hear from you! Reach out through any of these channels and 
                let's start planning your perfect experience.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <Card className="hover-lift cursor-pointer" onClick={() => window.open("https://wa.me/971506514125", "_blank")}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-accent/10 rounded-full">
                    <MessageCircle className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <p className="text-muted-foreground">Chat with us instantly</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift cursor-pointer" onClick={() => window.location.href = "mailto:luxevista12@gmail.com"}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-secondary/10 rounded-full">
                    <Mail className="text-secondary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="text-muted-foreground">luxevista12@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover-lift cursor-pointer" onClick={() => window.location.href = "tel:+971506514125"}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-tropical-blue/10 rounded-full">
                    <Phone className="text-tropical-blue" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="text-muted-foreground">+971 50 6514125</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="p-3 bg-sunset-orange/10 rounded-full">
                    <MapPin className="text-sunset-orange" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Office</h4>
                    <p className="text-muted-foreground">Dubai, UAE</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-accent/20 to-secondary/20 p-8 rounded-3xl border-2 border-dashed border-accent">
              <h4 className="text-2xl font-handwriting text-center mb-4">
                Quick Response Guaranteed! ⚡
              </h4>
              <p className="text-center text-muted-foreground mb-4">
                We typically respond within 1 hour during business hours
              </p>
              <Button
                onClick={() => window.open("https://wa.me/971506514125", "_blank")}
                className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                size="lg"
              >
                Start Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
