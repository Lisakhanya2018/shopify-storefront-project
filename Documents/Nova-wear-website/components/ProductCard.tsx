import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import { Product } from "../data/products";
import { useCartStore } from "../store/cartStore";
import { useToast } from "../hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCartStore();
  const { toast } = useToast();
  
  const handleAddToCart = () => {
    if (!product.inStock) return;
    
    addItem(product);
    toast({
      title: "Added to cart! 👕",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'bestseller':
        return 'bg-primary/10 text-primary';
      case 'new-arrival':
        return 'bg-secondary-accent/50 text-secondary-foreground';
      case 'trending':
        return 'bg-accent/20 text-accent-foreground';
      case 'sale':
        return 'bg-destructive/20 text-destructive';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden subtle-glow hover:shadow-lg transition-smooth border border-border/50 animate-fade-in hover:scale-[1.02]">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        
        {/* Category Badge */}
        <Badge className={`absolute top-3 left-3 ${getCategoryColor(product.category)} capitalize`}>
          {product.category}
        </Badge>

        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-foreground backdrop-blur-sm"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Sale Badge */}
        {product.originalPrice && (
          <Badge className="absolute top-12 left-3 bg-destructive text-destructive-foreground">
            Sale
          </Badge>
        )}

        {/* Out of Stock Overlay */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-foreground/20 backdrop-blur-sm flex items-center justify-center">
            <Badge variant="secondary" className="text-lg px-4 py-2">
              Out of Stock
            </Badge>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-lg font-semibold text-card-foreground mb-2 group-hover:text-primary transition-smooth">
          {product.name}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        <div className="space-y-2 mb-4">
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Color:</span> {product.color}
          </p>
          <p className="text-xs text-muted-foreground">
            <span className="font-medium">Material:</span> {product.material}
          </p>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-heading font-semibold text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          <span className="text-xs text-muted-foreground">Sizes: {product.sizes.join(', ')}</span>
        </div>

        {/* Add to Cart Button */}
        <Button 
          className="w-full group/btn hover:animate-glow" 
          disabled={!product.inStock}
          variant={product.inStock ? "default" : "secondary"}
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4 mr-2 group-hover/btn:animate-bounce" />
          {product.inStock ? 'Add to Cart' : 'Notify When Available'}
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;