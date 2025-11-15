import { Card, CardContent } from "@/components/ui/card";
import {
  Plane,
  Calendar,
  Hotel,
  FileText,
  Shield,
  Car,
  Baby,
  Gift,
  Cake,
  Briefcase,
  PartyPopper,
  Heart,
  Music,
  Ticket,
  Users,
} from "lucide-react";

const Services = () => {
  const services = [
    { icon: Calendar, title: "Event Planning & Execution", color: "text-sunset-orange" },
    { icon: Plane, title: "Air Ticketing", color: "text-tropical-turquoise" },
    { icon: Ticket, title: "Tour Packages", color: "text-sunset-pink" },
    { icon: FileText, title: "Visa Service", color: "text-tropical-blue" },
    { icon: Shield, title: "Traveling Insurance", color: "text-ocean-deep" },
    { icon: Hotel, title: "Hotel Packages", color: "text-sunset-orange" },
    { icon: Car, title: "Car Rental", color: "text-tropical-turquoise" },
    { icon: Baby, title: "Baby Showers", color: "text-sunset-pink" },
    { icon: Gift, title: "Gender Reveal Parties", color: "text-tropical-blue" },
    { icon: Cake, title: "Birthdays", color: "text-sunset-yellow" },
    { icon: Briefcase, title: "Corporate Events", color: "text-ocean-deep" },
    { icon: PartyPopper, title: "Private Events", color: "text-sunset-orange" },
    { icon: Heart, title: "Weddings", color: "text-sunset-pink" },
    { icon: Music, title: "Festivals", color: "text-tropical-turquoise" },
    { icon: Music, title: "Concerts", color: "text-tropical-blue" },
    { icon: Users, title: "Event Staffing", color: "text-ocean-deep" },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="font-handwriting text-gradient-sunset text-5xl md:text-6xl inline-block px-2">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From dream destinations to unforgettable celebrations, we bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="hover-lift cursor-pointer bg-card border-2 border-border overflow-hidden group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="flex justify-center">
                    <div className="p-4 bg-muted rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <Icon className={`${service.color} w-8 h-8`} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg">{service.title}</h3>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-tropical-blue/10 to-sunset-orange/10 rounded-3xl border-2 border-dashed border-accent">
            <p className="text-2xl font-handwriting mb-4">
              Ready to create unforgettable memories?
            </p>
            <button
              onClick={() => window.open("https://wa.me/971506514125", "_blank")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-full font-semibold shadow-tropical hover-lift transition-all"
            >
              Let's Plan Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
