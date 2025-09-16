import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { featuredProducts } from "@/data/products";

const FeaturedProducts = () => {
  return (
    <section className="section-spacing bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Bestselling Candles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our most loved fragrances, carefully crafted to transform your space 
            into a sanctuary of peace and warmth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;