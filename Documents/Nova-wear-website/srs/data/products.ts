export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  color: string;
  material: string;
  sizes: string[];
  image: string;
  category: 'bestseller' | 'new-arrival' | 'trending' | 'sale';
  features: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29,
    description: 'A timeless essential crafted from premium organic cotton. Perfect fit, supreme comfort, and versatile styling for any occasion.',
    color: 'White',
    material: 'Organic Cotton',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/api/placeholder/400/500',
    category: 'bestseller',
    features: ['Organic cotton', 'Pre-shrunk', 'Machine washable', 'Relaxed fit'],
    inStock: true,
  },
  {
    id: '2',
    name: 'Denim Jacket',
    price: 89,
    description: 'Classic blue denim jacket with a modern cut. Features vintage-inspired details and durable construction.',
    color: 'Classic Blue',
    material: 'Cotton Denim',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/api/placeholder/400/500',
    category: 'trending',
    features: ['100% cotton denim', 'Vintage wash', 'Button closure', 'Chest pockets'],
    inStock: true,
  },
  {
    id: '3',
    name: 'Striped Long Sleeve',
    price: 45,
    description: 'Comfortable striped long sleeve shirt in navy and white. Perfect for layering or wearing on its own.',
    color: 'Navy/White',
    material: 'Cotton Blend',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/api/placeholder/400/500',
    category: 'new-arrival',
    features: ['Cotton blend', 'Striped pattern', 'Long sleeves', 'Crew neck'],
    inStock: true,
  },
  {
    id: '4',
    name: 'Black Hoodie',
    price: 65,
    originalPrice: 80,
    description: 'Premium black hoodie with soft fleece lining. Features adjustable hood and kangaroo pocket.',
    color: 'Black',
    material: 'Cotton Fleece',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    image: '/api/placeholder/400/500',
    category: 'sale',
    features: ['Fleece lined', 'Drawstring hood', 'Kangaroo pocket', 'Ribbed cuffs'],
    inStock: true,
  },
  {
    id: '5',
    name: 'Floral Dress',
    price: 95,
    description: 'Elegant floral midi dress perfect for any occasion. Features a flattering A-line silhouette and three-quarter sleeves.',
    color: 'Floral Print',
    material: 'Chiffon',
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/api/placeholder/400/500',
    category: 'new-arrival',
    features: ['Floral print', 'Midi length', '3/4 sleeves', 'A-line cut'],
    inStock: false,
  },
  {
    id: '6',
    name: 'Casual Jeans',
    price: 75,
    description: 'Comfortable straight-leg jeans in a classic blue wash. Perfect for everyday wear with a timeless fit.',
    color: 'Blue Wash',
    material: 'Cotton Denim',
    sizes: ['28', '30', '32', '34', '36'],
    image: '/api/placeholder/400/500',
    category: 'bestseller',
    features: ['Straight leg', 'Classic fit', '5-pocket style', 'Belt loops'],
    inStock: true,
  },
  {
    id: '7',
    name: 'Knit Sweater',
    price: 85,
    description: 'Cozy knit sweater in a beautiful cream color. Features ribbed details and a comfortable oversized fit.',
    color: 'Cream',
    material: 'Wool Blend',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/api/placeholder/400/500',
    category: 'trending',
    features: ['Wool blend', 'Oversized fit', 'Ribbed details', 'Round neck'],
    inStock: true,
  },
  {
    id: '8',
    name: 'Leather Jacket',
    price: 195,
    description: 'Premium leather jacket with a modern cut. Features asymmetric zipper and quilted shoulder details.',
    color: 'Black',
    material: 'Genuine Leather',
    sizes: ['S', 'M', 'L', 'XL'],
    image: '/api/placeholder/400/500',
    category: 'trending',
    features: ['Genuine leather', 'Asymmetric zip', 'Quilted details', 'Lined interior'],
    inStock: true,
  },
  {
    id: '9',
    name: 'Summer Shorts',
    price: 39,
    description: 'Lightweight summer shorts in khaki. Perfect for warm weather with a comfortable elastic waistband.',
    color: 'Khaki',
    material: 'Cotton Twill',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    image: '/api/placeholder/400/500',
    category: 'new-arrival',
    features: ['Cotton twill', 'Elastic waist', 'Side pockets', '7-inch inseam'],
    inStock: true,
  },
  {
    id: '10',
    name: 'Silk Blouse',
    price: 120,
    description: 'Elegant silk blouse in soft pink. Features button-front closure and flowing sleeves for a sophisticated look.',
    color: 'Soft Pink',
    material: 'Pure Silk',
    sizes: ['XS', 'S', 'M', 'L'],
    image: '/api/placeholder/400/500',
    category: 'bestseller',
    features: ['100% silk', 'Button front', 'Flowing sleeves', 'Elegant cut'],
    inStock: true,
  },
];

export const featuredProducts = products.filter(product => 
  ['1', '2', '7'].includes(product.id)
);