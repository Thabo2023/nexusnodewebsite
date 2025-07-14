import Header from "@/components/Header";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const TeamPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Team />
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;
