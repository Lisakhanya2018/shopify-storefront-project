import Navigation from "@/components/Navigation";
import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/data/blog";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="section-spacing bg-muted/30">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
              The Lumina Journal
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stories of craftsmanship, inspiration, and the art of creating 
              beautiful moments through candlelight.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="section-spacing">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Blog;