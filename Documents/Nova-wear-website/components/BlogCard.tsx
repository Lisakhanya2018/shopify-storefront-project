import { BlogPost } from "../srs/data/blog";
import { Button } from "./ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="group bg-card rounded-2xl overflow-hidden subtle-glow hover:shadow-lg transition-smooth border border-border/50">
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
        />
        <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
          {post.category}
        </Badge>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-smooth line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {formatDate(post.publishDate)}
          </span>
          <Button variant="ghost" size="sm" className="group/btn">
            Read More
            <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;