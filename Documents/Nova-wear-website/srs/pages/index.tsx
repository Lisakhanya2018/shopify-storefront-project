import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import About from "@/components/About";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <FeaturedProducts />
        <About />
      </main>
    </div>
  );
};

export default Index;
