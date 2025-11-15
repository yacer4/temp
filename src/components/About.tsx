import dubaiSkyline from "@/assets/dubai-skyline.jpg";
import weddingEvent from "@/assets/wedding-event.jpg";
import travelCollage from "@/assets/travel-collage.jpg";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="font-handwriting text-gradient-tropical text-5xl md:text-6xl">Luxe Vista</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted partner in creating extraordinary experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold">
              Where <span className="scribble-underline">Dreams</span> Meet Reality
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At Luxe Vista, we specialize in turning your travel dreams and event visions into unforgettable realities. 
              With years of expertise in both the events and tourism industry, we pride ourselves on delivering 
              personalized, luxury experiences that exceed expectations.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're planning a destination wedding in Dubai, organizing a corporate retreat, or simply 
              seeking the perfect vacation package, our dedicated team handles every detail with precision and care.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-primary text-lg">✈️ Travel Services</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Luxury Tour Packages</li>
                  <li>• Flight & Hotel Booking</li>
                  <li>• Visa Assistance</li>
                  <li>• Travel Insurance</li>
                </ul>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-secondary text-lg">🎉 Event Services</h4>
                <ul className="text-muted-foreground space-y-1">
                  <li>• Wedding Planning</li>
                  <li>• Corporate Events</li>
                  <li>• Private Celebrations</li>
                  <li>• Event Staffing</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Collage Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Dubai Skyline - Main Image */}
              <div className="col-span-2 polaroid-frame">
                <img
                  src={dubaiSkyline}
                  alt="Dubai Skyline"
                  className="w-full h-64 object-cover rounded"
                />
                <p className="text-center font-handwriting text-xl mt-2 text-primary">
                  Dubai Adventures
                </p>
              </div>

              {/* Wedding Event */}
              <div className="polaroid-frame transform -rotate-2">
                <img
                  src={weddingEvent}
                  alt="Wedding Event"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-center font-handwriting text-lg mt-2 text-sunset-pink">
                  Dream Weddings
                </p>
              </div>

              {/* Travel Collage */}
              <div className="polaroid-frame transform rotate-3">
                <img
                  src={travelCollage}
                  alt="Travel Essentials"
                  className="w-full h-48 object-cover rounded"
                />
                <p className="text-center font-handwriting text-lg mt-2 text-tropical-turquoise">
                  Ready to Explore
                </p>
              </div>
            </div>

            {/* Decorative Doodles */}
            <div className="absolute -top-4 -right-4 text-sunset-orange opacity-60">
              <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="25" stroke="currentColor" strokeWidth="3" strokeDasharray="5 5" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 text-tropical-blue opacity-60">
              <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                <path d="M10 40 Q 20 10, 40 20 T 70 40" stroke="currentColor" strokeWidth="3" fill="none" />
              </svg>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-br from-muted/50 to-accent/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Why Choose <span className="font-handwriting text-accent text-4xl">Luxe Vista?</span>
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Personalized Service",
                description: "Every journey and event is tailored to your unique preferences and dreams",
                emoji: "💎"
              },
              {
                title: "Expert Team",
                description: "Professional planners with years of experience in luxury travel and events",
                emoji: "🌟"
              },
              {
                title: "24/7 Support",
                description: "We're always here for you, before, during, and after your experience",
                emoji: "🤝"
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="text-5xl">{item.emoji}</div>
                <h4 className="text-xl font-semibold">{item.title}</h4>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
