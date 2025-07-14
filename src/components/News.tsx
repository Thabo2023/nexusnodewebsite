import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const News = () => {
  const newsItems = [];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest{" "}
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              News
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest developments, partnerships, and
            insights from Nexusnode as we continue to innovate in the data
            analytics space.
          </p>
        </div>

        <div className="text-center py-16">
          <div className="bg-muted/30 rounded-2xl p-12 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-muted-foreground">
              No News Available
            </h3>
            <p className="text-muted-foreground">
              Stay tuned for upcoming news and updates from Nexusnode.
            </p>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter to receive the latest news, insights,
              and updates from Nexusnode directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default News;
