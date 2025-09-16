export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  readTime: string;
  publishDate: string;
}

// Example data
export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Sustainable Fashion Trends 2025",
    excerpt: "Discover the latest in eco-friendly fashion and how brands are making a difference.",
    image: "https://images.unsplash.com/photo-1",
    category: "Sustainability",
    author: "Jane Doe",
    readTime: "5 min read",
    publishDate: "2025-09-01",
  },
  {
    id: "2",
    title: "The Rise of Ethical Manufacturing",
    excerpt: "A look into how ethical practices are shaping the future of clothing production.",
    image: "https://images.unsplash.com/photo-2",
    category: "Ethics",
    author: "John Smith",
    readTime: "4 min read",
    publishDate: "2025-08-15",
  },
];
