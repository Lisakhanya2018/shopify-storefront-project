import Navigation from "@/components/Navigation";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'bestseller', label: 'Bestsellers' },
    { value: 'signature', label: 'Signature' },
    { value: 'seasonal', label: 'Seasonal' },
    { value: 'limited', label: 'Limited Edition' }
  ];

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              Our Collection
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our complete range of artisanal candles, each carefully crafted 
              to bring warmth and tranquility to your home.
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <Button
                  key={category.value}
                  variant={filter === category.value ? "default" : "outline"}
                  onClick={() => setFilter(category.value)}
                  className="capitalize"
                >
                  {category.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            
            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No products found in this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Products;