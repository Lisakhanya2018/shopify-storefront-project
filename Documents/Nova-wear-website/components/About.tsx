import { Button } from "./ui/button";
import { Leaf, Heart, Flame, Users } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainable",
      description: "Crafted with eco-friendly materials and ethical manufacturing practices."
    },
    {
      icon: Heart,
      title: "Quality First",
      description: "Every piece is carefully designed and made to last, not just for a season."
    },
    {
      icon: Flame,
      title: "Style Forward",
      description: "Contemporary designs that blend comfort with cutting-edge fashion trends."
    },
    {
      icon: Users,
      title: "Inclusive",
      description: "Fashion for every body, celebrating diversity and individual style expression."
    }
  ];

  return (
    <section className="section-spacing bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Fashion with Purpose
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Nova-Wear was born from the belief that fashion should be both beautiful and responsible. 
                Founded in 2021, we started with a simple mission: create clothing that makes you look 
                good while doing good for the planet.
              </p>
              <p>
                Every piece in our collection tells a story of conscious design, sustainable materials, 
                and fair production practices. We believe style shouldn't come at the cost of our values 
                or our environment.
              </p>
              <p>
                Today, we're proud to dress conscious consumers who care about quality, style, and 
                sustainability. Join us in redefining what fashion can be.
              </p>
            </div>
            <Button variant="accent" size="lg" className="mt-8">
              Read Our Full Story
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-background rounded-xl p-6 subtle-glow border border-border/50"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;