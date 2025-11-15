import { Button } from "@/components/ui/button";
import { Plane, Sparkles } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBeach})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in px-2">
          {/* Decorative Element */}
          <div className="flex justify-center">
            <Sparkles className="text-sunset-orange animate-float" size={40} />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Experience the beauty of the
            <br />
            <span className="font-handwriting text-6xl md:text-8xl text-gradient-sunset inline-block transform -rotate-2 px-2" style={{ display: 'inline-block', transformOrigin: 'center' }}>
              Luxe Vista Experience
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-foreground/80 max-w-2xl mx-auto font-handwriting">
            We care for your comfort
          </p>

          <div className="flex justify-center">
            <div className="inline-block bg-primary/90 backdrop-blur-sm px-6 py-3 rounded-full transform -rotate-1 shadow-lg">
              <p className="text-background font-bold text-lg md:text-xl flex items-center gap-2">
                <Plane className="animate-wave" size={24} />
                DUBAI & Beyond
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-6 rounded-full shadow-tropical hover-lift"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("https://wa.me/971506514125", "_blank")}
              className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground text-lg px-8 py-6 rounded-full"
            >
              WhatsApp Us Now
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 pb-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto relative z-20">
            {[
              { label: "Events Planned", value: "500+" },
              { label: "Happy Travelers", value: "2000+" },
              { label: "Destinations", value: "50+" },
              { label: "Years Experience", value: "10+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-card border border-border/50 p-4 rounded-2xl shadow-card"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient-tropical">
                  {stat.value}
                </p>
                <p className="text-sm text-card-foreground/70 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
