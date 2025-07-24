import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Team = () => {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Vince Mbanze",
      role: "Machine Learning Engineer",
      linkedin: "https://www.linkedin.com/in/vince-mbanze-0a7722158/",
      bio: "Builds scalable ML models to transform complex data into actionable insights",
      image: "/lovable-uploads/vince.jpeg",
    },
    {
      name: "Siphosethu Gushman",
      role: "Marketing Specialist",
      linkedin: "https://www.linkedin.com/in/siphosethu-gushman-85a5a91b0/",
      bio: "Crafts brand narratives and leads digital engagement.",
      image: "/lovable-uploads/Siphosethu.jpeg",
    },
    {
      name: "Thabo Pilusa",
      role: "Software Engineer",
      linkedin: "https://www.linkedin.com/in/thabo-pilusa-6a757623a/",
      bio: "Develops software solutions to support analytics platforms",
      image: "/lovable-uploads/thabo.jpeg",
    },
    {
      name: "Ofentse Pholosi",
      role: "Data Scientist",
      linkedin: "https://www.linkedin.com/in/ofentse-pholosi/",
      bio: "Extracts meaningful patterns from data to drive informed business decisions",
      image: "/lovable-uploads/ofesntseAII.jpeg",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="bg-gradient-tech bg-clip-text text-transparent">
              Expert Team
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team of data scientists, analysts, and researchers brings a
            combined experience in transforming data into actionable insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card
              key={member.name}
              className="group hover:shadow-glow transition-all duration-500 hover:scale-105 border-border/50 bg-card/80 backdrop-blur-sm text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 space-y-4">
                <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden group-hover:animate-glow-pulse">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-3">
                    {member.role}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {member.bio}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:shadow-tech"
                  onClick={() => window.open(member.linkedin, "_blank")}
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-subtle rounded-2xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Team</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate
              about data analytics and want to make a real impact. Check out our
              open positions.
            </p>
            <Button
              variant="hero"
              size="lg"
              onClick={() => navigate("/careers")}
            >
              View Open Positions
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
