import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import AnimatedCounter from "@/components/AnimatedCounter";
import heroImage from "@/assets/hero-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern fashion collection featuring stylish clothing in a minimalist boutique setting"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">Crafted with care</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
            Fashion That
            <span className="block text-accent">Fits Your Life</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover Nova-Wear's collection of sustainable, stylish clothing designed for the modern lifestyle. 
            Quality pieces that make you look good and feel even better.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Our Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto">
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                <AnimatedCounter end={100} suffix="%" />
              </div>
              <div className="text-sm text-white/80">Sustainable</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '1.0s' }}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">
                <AnimatedCounter end={48} suffix="h" />
              </div>
              <div className="text-sm text-white/80">Fast Delivery</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-2xl md:text-3xl font-heading font-bold text-accent">Premium</div>
              <div className="text-sm text-white/80">Quality</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;