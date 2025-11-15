import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Luxe Vista Logo" className="h-12 w-12 rounded-full" />
              <div>
                <h3 className="text-xl font-bold">LUXE VISTA</h3>
                <p className="text-xs opacity-80">Events, Travel & Tourism</p>
              </div>
            </div>
            <p className="text-sm opacity-90">
              Creating unforgettable experiences and memories that last a lifetime.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection("home")} className="hover:text-accent transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("services")} className="hover:text-accent transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-accent transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("contact")} className="hover:text-accent transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Event Planning</li>
              <li>Travel Packages</li>
              <li>Air Ticketing</li>
              <li>Visa Services</li>
              <li>Hotel Booking</li>
              <li>Car Rental</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Get in Touch</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Dubai, UAE</li>
              <li>luxevista12@gmail.com</li>
              <li>+971 50 6514125</li>
            </ul>
            <div className="flex gap-3 mt-4">
              <a href="https://www.facebook.com/share/16RdcA5ip9/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/luxe_vista_events_and_tours" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors">
                <Instagram size={18} />
              </a>
              <a href="https://www.tiktok.com/@luxe.vista1?_r=1&_t=ZS-91QA2ahKIa1" target="_blank" rel="noopener noreferrer" className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-80">
          <p>&copy; {new Date().getFullYear()} Luxe Vista Events, Travel & Tourism Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
