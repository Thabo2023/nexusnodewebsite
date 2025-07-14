import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/lovable-uploads/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-primary/20 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-6 h-6 bg-accent/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-3 h-3 bg-primary-glow/30 rounded-full animate-float"
        style={{ animationDelay: "2s" }}
      />

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[70vh]">
          {/* Empty content - no heading or button */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
