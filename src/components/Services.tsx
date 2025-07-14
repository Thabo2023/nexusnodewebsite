import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Data Analysis",
      description: "Transform raw data into actionable insights",
      icon: "chart",
    },
    {
      title: "Market Research",
      description: "Comprehensive market analysis and insights",
      icon: "target",
    },
    {
      title: "Predictive Modeling",
      description: "AI-powered forecasting and trend analysis",
      icon: "brain",
    },
  ];

  return (
    <section
      id="services"
      className="py-32 bg-gradient-subtle relative overflow-hidden min-h-screen flex flex-col items-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 bg-primary-glow/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10 w-full max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Our{" "}
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Precision driven analytics for strategic growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-glow transition-all duration-700 hover:scale-110 border-0 bg-card/20 backdrop-blur-md hover:bg-card/40 animate-scale-in"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <CardHeader className="text-center pb-8">
                <div className="w-24 h-24 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-glow">
                  <div className="w-12 h-12 bg-primary-foreground rounded-lg opacity-90"></div>
                </div>
                <CardTitle className="text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-500">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-500">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Button below services */}
        <div className="mt-20 text-center">
          <Link to="/service-request">
            <Button
              variant="hero"
              size="lg"
              className="text-lg px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Start Your Analytics Journey
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
